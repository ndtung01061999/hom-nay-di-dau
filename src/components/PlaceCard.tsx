import { CATEGORY_INFO, PRICE_INFO } from "@/data/constants";
import type { Place } from "@/data/types";
import { mapsUrl } from "@/lib/places";

export function PlaceMeta({ place }: { place: Place }) {
  const cat = CATEGORY_INFO[place.category];
  return (
    <div className="flex flex-wrap gap-1.5 text-xs">
      <span className="rounded-full bg-orange-100 px-2 py-0.5 font-medium text-orange-700">
        {cat.emoji} {cat.label}
      </span>
      <span
        className="rounded-full bg-emerald-100 px-2 py-0.5 font-medium text-emerald-700"
        title={PRICE_INFO[place.price].label}
      >
        {PRICE_INFO[place.price].short}
      </span>
      <span className="rounded-full bg-stone-100 px-2 py-0.5 text-stone-600">{place.district}</span>
    </div>
  );
}

export function MapLink({ place, className = "" }: { place: Place; className?: string }) {
  return (
    <a
      href={mapsUrl(place)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-sm font-medium text-stone-700 transition hover:border-orange-300 hover:bg-orange-50 ${className}`}
    >
      📍 Chỉ đường
    </a>
  );
}
