import type { Category, CityId, Place, PriceLevel } from "@/data/types";
import { filterPlaces, pickRandom } from "./places";

export type SlotId = "an-sang" | "choi-sang" | "an-trua" | "cafe" | "choi-chieu" | "an-toi" | "buoi-toi";

export interface Slot {
  id: SlotId;
  time: string;
  label: string;
  emoji: string;
  categories: Category[];
}

export const SLOTS: Slot[] = [
  { id: "an-sang", time: "07:30", label: "Ăn sáng", emoji: "🥖", categories: ["an-sang"] },
  { id: "choi-sang", time: "09:00", label: "Đi chơi buổi sáng", emoji: "🏛️", categories: ["tham-quan", "vui-choi"] },
  { id: "an-trua", time: "11:30", label: "Ăn trưa", emoji: "🍲", categories: ["an-chinh"] },
  { id: "cafe", time: "14:00", label: "Cà phê chiều", emoji: "☕", categories: ["cafe"] },
  { id: "choi-chieu", time: "16:00", label: "Đi chơi buổi chiều", emoji: "🎡", categories: ["vui-choi", "tham-quan"] },
  { id: "an-toi", time: "18:30", label: "Ăn tối", emoji: "🍽️", categories: ["an-chinh"] },
  { id: "buoi-toi", time: "20:30", label: "Buổi tối", emoji: "🌃", categories: ["dem", "an-vat"] },
];

export interface ItineraryItem {
  slot: SlotId;
  place: Place | null;
  /** true khi phải lấy địa điểm ngoài quận đã chọn vì trong quận không đủ */
  outside: boolean;
}

export interface DayPlan {
  date: string | null; // yyyy-mm-dd
  items: ItineraryItem[];
}

export interface PlanOptions {
  city: CityId;
  district: string | null;
  maxPrice: PriceLevel | null;
  slots: SlotId[];
}

/**
 * Chọn địa điểm cho 1 khung giờ. Ưu tiên: trong quận & chưa dùng → cả thành phố & chưa dùng
 * → trong quận (cho phép lặp) → cả thành phố (cho phép lặp).
 */
export function pickForSlot(slotId: SlotId, opts: PlanOptions, used: Set<string>): ItineraryItem {
  const slot = SLOTS.find((s) => s.id === slotId)!;
  const base = { city: opts.city, categories: slot.categories, maxPrice: opts.maxPrice };
  const inDistrict = filterPlaces({ ...base, district: opts.district });
  const inCity = opts.district ? filterPlaces({ ...base, district: null }) : inDistrict;
  const fresh = (list: Place[]) => list.filter((p) => !used.has(p.id));

  const tries: [Place[], boolean][] = [
    [fresh(inDistrict), false],
    [fresh(inCity), !!opts.district],
    [inDistrict, false],
    [inCity, !!opts.district],
  ];
  for (const [list, outside] of tries) {
    const place = pickRandom(list);
    if (place) {
      used.add(place.id);
      return { slot: slotId, place, outside: outside && place.district !== opts.district };
    }
  }
  return { slot: slotId, place: null, outside: false };
}

function addDays(date: string, n: number): string {
  const d = new Date(date + "T00:00:00");
  d.setDate(d.getDate() + n);
  const pad = (x: number) => String(x).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function buildDay(opts: PlanOptions, used: Set<string>, date: string | null): DayPlan {
  const ordered = SLOTS.filter((s) => opts.slots.includes(s.id));
  return { date, items: ordered.map((s) => pickForSlot(s.id, opts, used)) };
}

export function buildItinerary(opts: PlanOptions, days: number, startDate: string | null): DayPlan[] {
  const used = new Set<string>();
  return Array.from({ length: days }, (_, i) =>
    buildDay(opts, used, startDate ? addDays(startDate, i) : null),
  );
}

export function usedIds(plan: DayPlan[]): Set<string> {
  const s = new Set<string>();
  plan.forEach((d) => d.items.forEach((it) => it.place && s.add(it.place.id)));
  return s;
}

export function formatDate(date: string): string {
  const d = new Date(date + "T00:00:00");
  const weekday = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"][d.getDay()];
  return `${weekday}, ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
}

export function planToText(plan: DayPlan[], cityName: string): string {
  const lines = [`🗺️ Lịch trình ${cityName} — ${plan.length} ngày`, ""];
  plan.forEach((day, i) => {
    lines.push(`📅 Ngày ${i + 1}${day.date ? ` (${formatDate(day.date)})` : ""}`);
    day.items.forEach((it) => {
      const slot = SLOTS.find((s) => s.id === it.slot)!;
      lines.push(
        `  ${slot.time} ${slot.label}: ${it.place ? `${it.place.name} — ${it.place.address}` : "(chưa có gợi ý)"}`,
      );
    });
    lines.push("");
  });
  return lines.join("\n");
}
