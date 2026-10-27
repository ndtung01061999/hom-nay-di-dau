"use client";

import { useEffect, useState } from "react";
import { CITIES } from "@/data/constants";
import type { PriceLevel } from "@/data/types";
import { BudgetPicker, RegionPicker, type Region } from "@/components/Filters";
import { Chip, Section } from "@/components/Chip";
import { MapLink, PlaceMeta } from "@/components/PlaceCard";
import {
  SLOTS,
  buildDay,
  buildItinerary,
  formatDate,
  pickForSlot,
  planToText,
  usedIds,
  type DayPlan,
  type PlanOptions,
  type SlotId,
} from "@/lib/itinerary";
import { usePersistentState } from "@/lib/usePersistentState";

function today(): string {
  const d = new Date();
  const pad = (x: number) => String(x).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export default function ItineraryPage() {
  const [region, setRegion] = usePersistentState<Region>("region", { city: "ha-noi", district: null });
  const [maxPrice, setMaxPrice] = usePersistentState<PriceLevel | null>("maxPrice", null);
  const [slots, setSlots] = usePersistentState<SlotId[]>("slots", SLOTS.map((s) => s.id));
  const [startDate, setStartDate] = useState("");
  const [days, setDays] = useState(1);
  const [plan, setPlan] = useState<DayPlan[] | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => setStartDate(today()), []);

  const opts: PlanOptions = { ...region, maxPrice, slots };
  const cityName = CITIES.find((c) => c.id === region.city)?.name ?? "";

  const toggleSlot = (id: SlotId) => {
    const next = slots.includes(id) ? slots.filter((s) => s !== id) : [...slots, id];
    if (next.length) setSlots(next);
  };

  const generate = () => {
    setPlan(buildItinerary(opts, days, startDate || null));
    setTimeout(() => document.getElementById("ket-qua")?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  const rerollSlot = (dayIdx: number, itemIdx: number) => {
    if (!plan) return;
    const used = usedIds(plan); // giữ lại địa điểm hiện tại trong 'used' để chắc chắn đổi sang chỗ khác
    const next = plan.map((d) => ({ ...d, items: [...d.items] }));
    const current = next[dayIdx].items[itemIdx];
    const picked = pickForSlot(current.slot, opts, used);
    // Nếu không còn chỗ nào khác, pickForSlot có thể trả lại đúng chỗ cũ — chấp nhận
    next[dayIdx].items[itemIdx] = { ...picked, slot: current.slot };
    setPlan(next);
  };

  const rerollDay = (dayIdx: number) => {
    if (!plan) return;
    const used = usedIds(plan);
    const next = [...plan];
    next[dayIdx] = buildDay(opts, used, plan[dayIdx].date);
    setPlan(next);
  };

  const copy = async () => {
    if (!plan) return;
    try {
      await navigator.clipboard.writeText(planToText(plan, cityName));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Lên <span className="text-orange-500">lịch trình</span> đi chơi
        </h1>
        <p className="mt-2 text-stone-500">Chọn khu vực, số ngày — có ngay lịch ăn chơi từ sáng tới tối.</p>
      </section>

      <div className="space-y-5 rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
        <RegionPicker value={region} onChange={setRegion} />

        <Section title="📅 Thời gian">
          <div className="flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2 text-sm text-stone-600">
              Bắt đầu
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="rounded-xl border border-stone-200 px-3 py-2 text-sm text-stone-800 outline-none focus:border-orange-400"
              />
            </label>
            <div className="flex items-center gap-2 text-sm text-stone-600">
              Số ngày
              <div className="flex items-center rounded-xl border border-stone-200">
                <button
                  onClick={() => setDays(Math.max(1, days - 1))}
                  className="px-3 py-2 text-lg leading-none hover:bg-stone-50"
                  aria-label="Bớt 1 ngày"
                >
                  −
                </button>
                <span className="w-8 text-center font-semibold text-stone-800">{days}</span>
                <button
                  onClick={() => setDays(Math.min(7, days + 1))}
                  className="px-3 py-2 text-lg leading-none hover:bg-stone-50"
                  aria-label="Thêm 1 ngày"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </Section>

        <BudgetPicker value={maxPrice} onChange={setMaxPrice} />

        <Section title="🧩 Hoạt động trong ngày">
          <div className="flex flex-wrap gap-2">
            {SLOTS.map((s) => (
              <Chip key={s.id} active={slots.includes(s.id)} onClick={() => toggleSlot(s.id)}>
                {s.emoji} {s.label}
              </Chip>
            ))}
          </div>
        </Section>

        <button
          onClick={generate}
          className="w-full rounded-full bg-gradient-to-r from-orange-500 to-rose-500 py-3.5 text-lg font-bold text-white shadow-lg shadow-orange-200 transition hover:brightness-105 active:scale-[0.99]"
        >
          {plan ? "Tạo lịch trình mới ✨" : "Tạo lịch trình ✨"}
        </button>
      </div>

      {plan && (
        <section id="ket-qua" className="scroll-mt-20 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-xl font-bold">
              {cityName}
              {region.district ? ` · ${region.district}` : ""} — {plan.length} ngày
            </h2>
            <button
              onClick={copy}
              className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium hover:border-orange-300 hover:bg-orange-50"
            >
              {copied ? "✅ Đã sao chép" : "📋 Sao chép lịch trình"}
            </button>
          </div>

          {plan.map((day, di) => (
            <div key={di} className="animate-pop rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-bold">
                  Ngày {di + 1}
                  {day.date && <span className="ml-2 text-sm font-normal text-stone-500">{formatDate(day.date)}</span>}
                </h3>
                <button
                  onClick={() => rerollDay(di)}
                  className="rounded-full px-3 py-1.5 text-sm font-medium text-orange-600 hover:bg-orange-50"
                >
                  🔄 Đổi cả ngày
                </button>
              </div>

              <ol className="relative space-y-4 border-l-2 border-orange-100 pl-5">
                {day.items.map((it, ii) => {
                  const slot = SLOTS.find((s) => s.id === it.slot)!;
                  return (
                    <li key={it.slot} className="relative">
                      <span className="absolute -left-[31px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] text-white ring-4 ring-white">
                        ●
                      </span>
                      <div className="text-xs font-semibold uppercase tracking-wide text-orange-600">
                        {slot.time} · {slot.label}
                      </div>
                      {it.place ? (
                        <div className="mt-1.5 flex flex-col gap-3 rounded-2xl bg-stone-50 p-3 sm:flex-row sm:items-center">
                          <span className="text-3xl">{it.place.emoji}</span>
                          <div className="min-w-0 flex-1 space-y-1">
                            <div className="font-semibold">{it.place.name}</div>
                            <div className="text-sm text-stone-600">{it.place.description}</div>
                            <div className="text-xs text-stone-500">{it.place.address}</div>
                            <PlaceMeta place={it.place} />
                            {it.outside && (
                              <div className="text-xs text-amber-600">
                                ⚠️ Ngoài khu vực đã chọn (trong khu vực không đủ gợi ý)
                              </div>
                            )}
                          </div>
                          <div className="flex gap-2 sm:flex-col">
                            <button
                              onClick={() => rerollSlot(di, ii)}
                              className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-sm font-medium hover:border-orange-300 hover:bg-orange-50"
                            >
                              🔄 Đổi
                            </button>
                            <MapLink place={it.place} />
                          </div>
                        </div>
                      ) : (
                        <div className="mt-1.5 rounded-2xl bg-stone-50 p-3 text-sm text-stone-500">
                          Chưa có gợi ý phù hợp — thử nới ngân sách nhé.
                        </div>
                      )}
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
