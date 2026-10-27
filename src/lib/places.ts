import { PLACES } from "@/data/places";
import type { Category, CityId, Place, PriceLevel } from "@/data/types";

export interface PlaceFilter {
  city: CityId;
  /** null = cả thành phố */
  district: string | null;
  categories?: Category[];
  /** null = không giới hạn */
  maxPrice: PriceLevel | null;
}

export function filterPlaces(f: PlaceFilter): Place[] {
  return PLACES.filter(
    (pl) =>
      pl.city === f.city &&
      (!f.district || pl.district === f.district) &&
      (!f.categories || f.categories.includes(pl.category)) &&
      (!f.maxPrice || pl.price <= f.maxPrice),
  );
}

export function pickRandom<T>(arr: T[]): T | null {
  if (arr.length === 0) return null;
  return arr[Math.floor(Math.random() * arr.length)];
}

export function mapsUrl(place: Place): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${place.name}, ${place.address}`,
  )}`;
}
