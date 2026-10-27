"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CATEGORY_INFO, MODES, type Mode } from "@/data/constants";
import type { Category, Place, PriceLevel } from "@/data/types";
import { BudgetPicker, RegionPicker, type Region } from "@/components/Filters";
import { Chip, Section } from "@/components/Chip";
import { MapLink, PlaceMeta } from "@/components/PlaceCard";
import { filterPlaces, pickRandom } from "@/lib/places";
import { usePersistentState } from "@/lib/usePersistentState";

export default function RandomPage() {
  const [region, setRegion] = usePersistentState<Region>("region", { city: "ha-noi", district: null });
  const [maxPrice, setMaxPrice] = usePersistentState<PriceLevel | null>("maxPrice", null);
  const [mode, setMode] = useState<Mode>("an");
  const [cats, setCats] = useState<Category[]>(MODES.an.categories);
  const [result, setResult] = useState<Place | null>(null);
  const [display, setDisplay] = useState<Place | null>(null);
  const [spinning, setSpinning] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const candidates = useMemo(
    () => filterPlaces({ ...region, categories: cats, maxPrice }),
    [region, cats, maxPrice],
  );

  useEffect(() => () => {
    if (timer.current) clearInterval(timer.current);
  }, []);

  // Đổi bộ lọc thì xoá kết quả cũ
  useEffect(() => {
    setResult(null);
    setDisplay(null);
  }, [region, cats, maxPrice]);

  const changeMode = (m: Mode) => {
    setMode(m);
    setCats(MODES[m].categories);
  };

  const toggleCat = (c: Category) => {
    const next = cats.includes(c) ? cats.filter((x) => x !== c) : [...cats, c];
    setCats(next.length ? next : [c]);
  };

  const spin = () => {
    if (spinning || candidates.length === 0) return;
    setSpinning(true);
    setResult(null);
    timer.current = setInterval(() => setDisplay(pickRandom(candidates)), 80);
    setTimeout(() => {
      if (timer.current) clearInterval(timer.current);
      const pool = candidates.length > 1 && result ? candidates.filter((p) => p.id !== result.id) : candidates;
      const final = pickRandom(pool);
      setDisplay(final);
      setResult(final);
      setSpinning(false);
    }, 1200);
  };

  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Hôm nay <span className="text-orange-500">{MODES[mode].label.toLowerCase()}</span>
        </h1>
        <p className="mt-2 text-stone-500">Phân vân quá? Để tụi mình chọn giúp bạn!</p>
      </section>

      <div className="flex justify-center gap-2">
        {(Object.keys(MODES) as Mode[]).map((m) => (
          <button
            key={m}
            onClick={() => changeMode(m)}
            className={`flex flex-col items-center rounded-2xl border-2 px-4 py-3 text-sm font-semibold transition sm:px-6 ${
              mode === m
                ? "border-orange-500 bg-orange-50 text-orange-700"
                : "border-stone-200 bg-white text-stone-600 hover:border-orange-200"
            }`}
          >
            <span className="text-2xl">{MODES[m].emoji}</span>
            {MODES[m].label}
          </button>
        ))}
      </div>

      <div className="space-y-5 rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
        <RegionPicker value={region} onChange={setRegion} />
        {MODES[mode].categories.length > 1 && (
          <Section title="🏷️ Loại hình">
            <div className="flex flex-wrap gap-2">
              {MODES[mode].categories.map((c) => (
                <Chip key={c} active={cats.includes(c)} onClick={() => toggleCat(c)}>
                  {CATEGORY_INFO[c].emoji} {CATEGORY_INFO[c].label}
                </Chip>
              ))}
            </div>
          </Section>
        )}
        <BudgetPicker value={maxPrice} onChange={setMaxPrice} />
      </div>

      <div className="flex flex-col items-center gap-4">
        <button
          onClick={spin}
          disabled={spinning || candidates.length === 0}
          className="rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-10 py-4 text-lg font-bold text-white shadow-lg shadow-orange-200 transition hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
        >
          {spinning ? "Đang quay... 🎲" : result ? "Quay lại 🔄" : "Quay luôn! 🎲"}
        </button>
        <p className="text-sm text-stone-500">
          {candidates.length > 0
            ? `Có ${candidates.length} địa điểm phù hợp`
            : "Không có địa điểm nào phù hợp — thử nới bộ lọc nhé."}
        </p>

        {display && (
          <div
            key={result?.id ?? "spinning"}
            className={`w-full max-w-md rounded-3xl border-2 bg-white p-6 text-center shadow-xl ${
              result ? "animate-pop border-orange-400" : "border-stone-200"
            }`}
          >
            <div className="text-6xl">{display.emoji}</div>
            <h2 className="mt-3 text-2xl font-extrabold">{display.name}</h2>
            <p className="mt-1 text-sm text-stone-500">{display.address}</p>
            {result && (
              <>
                <p className="mt-3 text-stone-700">{result.description}</p>
                <div className="mt-4 flex justify-center">
                  <PlaceMeta place={result} />
                </div>
                <div className="mt-5">
                  <MapLink place={result} />
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {candidates.length > 0 && (
        <details className="rounded-3xl border border-stone-200 bg-white p-5">
          <summary className="cursor-pointer font-semibold text-stone-700">
            Hoặc tự xem danh sách ({candidates.length})
          </summary>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {candidates.map((p) => (
              <li key={p.id} className="flex gap-3 rounded-2xl border border-stone-100 p-3">
                <span className="text-3xl">{p.emoji}</span>
                <div className="min-w-0 flex-1 space-y-1">
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-xs text-stone-500">{p.address}</div>
                  <PlaceMeta place={p} />
                </div>
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  );
}
