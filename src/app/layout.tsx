import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "@/components/providers";

export const metadata: Metadata = {
  title: "별조각: 운명의 카드",
  description:
    "과연 오늘의 운세는 어떨까요? 별조각이 당신에게 행운을 가져다줄 것입니다.",
};

const flowerIsland = localFont({
  src: "./fonts/MapoFlowerIslandA.woff",
  variable: "--font-flower-island",
  weight: "100 900",
});
const kopubBatang = localFont({
  src: "./fonts/KoPubWorld-Batang-Medium.woff",
  variable: "--font-kopub-batang",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${flowerIsland.variable} ${kopubBatang.variable} antialiased`}
      >
        <Providers>
          <div className="bg-stars-img flex-center min-h-screen">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
