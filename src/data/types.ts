export type CityId = "ha-noi" | "ho-chi-minh" | "da-nang";

export type Category =
  | "an-sang"
  | "an-chinh"
  | "an-vat"
  | "cafe"
  | "tham-quan"
  | "vui-choi"
  | "dem";

/** 1 = dưới 50k, 2 = 50k–150k, 3 = trên 150k (mỗi người) */
export type PriceLevel = 1 | 2 | 3;

export interface Place {
  id: string;
  name: string;
  city: CityId;
  district: string;
  category: Category;
  price: PriceLevel;
  address: string;
  description: string;
  emoji: string;
}

export interface City {
  id: CityId;
  name: string;
  districts: string[];
}
