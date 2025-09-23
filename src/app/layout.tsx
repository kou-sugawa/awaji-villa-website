import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/StructuredData";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ヴィラ・ハートフル淡路明神 | ペット特化型プライベートヴィラ",
  description: "愛犬と過ごす特別なリゾート体験。1日1組限定のペット特化型プライベートヴィラで、バレルサウナと200坪の天然芝をお楽しみください。兵庫県淡路島の海辺に位置する贅沢な宿泊施設。",
  keywords: "ペット可 別荘 淡路島, ペット特化 ヴィラ 関西, 愛犬 宿泊 淡路島, バレルサウナ ペット可 宿泊施設",
  openGraph: {
    title: "ヴィラ・ハートフル淡路明神 | ペット特化型プライベートヴィラ",
    description: "愛犬と過ごす特別なリゾート体験。1日1組限定のペット特化型プライベートヴィラ",
    url: "https://villa-heartful-awaji.com",
    siteName: "ヴィラ・ハートフル淡路明神",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <StructuredData />
      </head>
      <body className={`${notoSansJP.className} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
