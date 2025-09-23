import BookingForm from '@/components/booking/BookingForm';
import { Calendar, Users, Heart, Shield } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ご予約 | ヴィラ・ハートフル淡路明神",
  description: "ペット特化型プライベートヴィラのオンライン予約。1日1組限定、最大8名まで宿泊可能。愛犬・愛猫最大3頭まで同伴OK。簡単予約フォームで空室確認から予約確定まで。",
  keywords: "淡路島 ペット可 予約, ヴィラ オンライン予約, ペット同伴 宿泊予約, 1日1組限定",
  openGraph: {
    title: "ご予約 | ヴィラ・ハートフル淡路明神",
    description: "ペット特化型プライベートヴィラのオンライン予約。1日1組限定で愛犬と特別な時間を",
  },
};

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-purple-900 to-blue-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ご予約
            </h1>
            <p className="text-xl opacity-90">
              愛犬との特別な時間をご予約ください
            </p>
          </div>
        </div>
      </section>

      {/* Booking Info Cards */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                1日1組限定
              </h3>
              <p className="text-gray-600 text-sm">
                完全プライベート空間で他のお客様を気にせずお過ごしいただけます
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                最大8名まで
              </h3>
              <p className="text-gray-600 text-sm">
                セミダブルベッド4台で最大8名様まで宿泊可能です
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Heart className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ペット最大3頭
              </h3>
              <p className="text-gray-600 text-sm">
                愛犬・愛猫最大3頭まで同伴可能です
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                安心のサポート
              </h3>
              <p className="text-gray-600 text-sm">
                24時間サポート体制で安心してご利用いただけます
              </p>
            </div>
          </div>

          {/* Booking Form */}
          <BookingForm />

          {/* Important Notice */}
          <div className="mt-12 bg-blue-50 border border-blue-200 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              ご予約に関する重要なお知らせ
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">チェックイン・チェックアウト</h4>
                <ul className="space-y-1">
                  <li>• チェックイン: 16:00〜19:00</li>
                  <li>• チェックアウト: 10:00</li>
                  <li>• 19:00以降のチェックインは追加料金が発生します</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">ペット同伴について</h4>
                <ul className="space-y-1">
                  <li>• 予防接種証明書の提示が必須です</li>
                  <li>• 生後6ヶ月未満のペットは利用不可</li>
                  <li>• ペット利用規約への同意が必要です</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">キャンセルについて</h4>
                <ul className="space-y-1">
                  <li>• 29日前まで: 無料</li>
                  <li>• 28日前〜15日前: 30%</li>
                  <li>• 14日前〜当日: 50%〜100%</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">お支払いについて</h4>
                <ul className="space-y-1">
                  <li>• 現地でのお支払いとなります</li>
                  <li>• 現金・クレジットカード対応</li>
                  <li>• 事前振込も可能です</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}