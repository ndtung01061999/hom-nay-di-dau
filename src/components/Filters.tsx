"use client";

import { CITIES } from "@/data/constants";
import type { CityId, PriceLevel } from "@/data/types";
import { Chip, Section } from "./Chip";

export interface Region {
  city: CityId;
  district: string | null;
}

export function RegionPicker({ value, onChange }: { value: Region; onChange: (r: Region) => void }) {
  const city = CITIES.find((c) => c.id === value.city) ?? CITIES[0];
  return (
    <Section title="📍 Khu vực">
      <div className="flex flex-wrap gap-2">
        {CITIES.map((c) => (
          <Chip key={c.id} active={c.id === value.city} onClick={() => onChange({ city: c.id, district: null })}>
            {c.name}
          </Chip>
        ))}
      </div>
      <select
        value={value.district ?? ""}
        onChange={(e) => onChange({ city: value.city, district: e.target.value || null })}
        className="mt-1 w-full rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm text-stone-800 outline-none focus:border-orange-400 sm:w-64"
      >
        <option value="">Tất cả quận / huyện</option>
        {city.districts.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
    </Section>
  );
}

export function BudgetPicker({
  value,
  onChange,
}: {
  value: PriceLevel | null;
  onChange: (v: PriceLevel | null) => void;
}) {
  return (
    <Section title="💰 Ngân sách mỗi người">
      <div className="flex flex-wrap gap-2">
        <Chip active={value === null} onClick={() => onChange(null)}>
          Không giới hạn
        </Chip>
        {([1, 2] as PriceLevel[]).map((lv) => (
          <Chip key={lv} active={value === lv} onClick={() => onChange(lv)}>
            {lv === 1 ? "Dưới 50k" : "Dưới 150k"}
          </Chip>
        ))}
      </div>
    </Section>
  );
}
