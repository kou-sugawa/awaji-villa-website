import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "お問い合わせ | ヴィラ・ハートフル淡路明神",
  description: "ヴィラ・ハートフル淡路明神へのお問い合わせページ。電話、メール、LINEでお気軽にご連絡いただけます。ペット同伴、予約、料金などのご質問に24時間以内にご返答。",
  keywords: "淡路島 ペット可 問い合わせ, ヴィラ 問い合わせ, ペット同伴 相談, 予約問い合わせ",
  openGraph: {
    title: "お問い合わせ | ヴィラ・ハートフル淡路明神",
    description: "ペット同伴、予約、料金などのご質問に24時間以内にご返答",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}