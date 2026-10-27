import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { Header } from "@/components/Header";
import "./globals.css";

const font = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Hôm nay đi đâu?",
  description: "Chọn ngẫu nhiên hôm nay ăn gì, uống gì, chơi gì và lên lịch trình đi chơi theo khu vực.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body className={`${font.variable} antialiased`}>
        <Header />
        <main className="mx-auto max-w-4xl px-4 py-6 sm:py-10">{children}</main>
        <footer className="mx-auto max-w-4xl px-4 pb-8 text-center text-xs text-stone-400">
          Dữ liệu mẫu — giờ mở cửa, giá và địa chỉ có thể đã thay đổi. Hãy kiểm tra lại trên Google Maps trước khi đi nhé!
        </footer>
      </body>
    </html>
  );
}
