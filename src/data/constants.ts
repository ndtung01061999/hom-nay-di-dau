import type { Category, City, PriceLevel } from "./types";

export const CITIES: City[] = [
  {
    id: "ha-noi",
    name: "Hà Nội",
    districts: ["Hoàn Kiếm", "Ba Đình", "Tây Hồ", "Đống Đa", "Hai Bà Trưng", "Cầu Giấy", "Thanh Xuân", "Nam Từ Liêm", "Bắc Từ Liêm", "Long Biên", "Gia Lâm"],
  },
  {
    id: "ho-chi-minh",
    name: "TP. Hồ Chí Minh",
    districts: ["Quận 1", "Quận 3", "Quận 4", "Quận 5", "Quận 7", "Quận 11", "Bình Thạnh", "Phú Nhuận", "Gò Vấp", "Thủ Đức"],
  },
  {
    id: "da-nang",
    name: "Đà Nẵng",
    districts: ["Hải Châu", "Thanh Khê", "Sơn Trà", "Ngũ Hành Sơn", "Liên Chiểu", "Hòa Vang", "Hội An (lân cận)"],
  },
];

export const CATEGORY_INFO: Record<Category, { label: string; emoji: string }> = {
  "an-sang": { label: "Ăn sáng", emoji: "🥖" },
  "an-chinh": { label: "Bữa chính", emoji: "🍲" },
  "an-vat": { label: "Ăn vặt", emoji: "🍢" },
  cafe: { label: "Cà phê", emoji: "☕" },
  "tham-quan": { label: "Tham quan", emoji: "🏛️" },
  "vui-choi": { label: "Vui chơi", emoji: "🎡" },
  dem: { label: "Về đêm", emoji: "🌃" },
};

export const PRICE_INFO: Record<PriceLevel, { label: string; short: string }> = {
  1: { label: "Bình dân (< 50k)", short: "₫" },
  2: { label: "Vừa phải (50k – 150k)", short: "₫₫" },
  3: { label: "Sang chảnh (> 150k)", short: "₫₫₫" },
};

export type Mode = "an" | "uong" | "choi";

export const MODES: Record<Mode, { label: string; emoji: string; categories: Category[] }> = {
  an: { label: "Ăn gì?", emoji: "🍜", categories: ["an-sang", "an-chinh", "an-vat"] },
  uong: { label: "Uống gì?", emoji: "🧋", categories: ["cafe"] },
  choi: { label: "Chơi gì?", emoji: "🎡", categories: ["tham-quan", "vui-choi", "dem"] },
};
