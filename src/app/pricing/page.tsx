import Image from "next/image";
import { Check, Calendar, Users, Heart, AlertTriangle, Info } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "料金・プラン | ヴィラ・ハートフル淡路明神",
  description: "明確な料金体系で安心。平日5万円、休日7万円（最大8名まで）。ペット同伴料金、キャンセルポリシー、追加オプションなどすべての料金情報を詳しくご紹介。",
  keywords: "淡路島 ペット可 料金, ヴィラ 宿泊料金, ペット同伴料金, キャンセルポリシー",
  openGraph: {
    title: "料金・プラン | ヴィラ・ハートフル淡路明神",
    description: "明確な料金体系で安心。平日5万円、休日7万円で最大8名まで宿泊可能",
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-800">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              料金・プラン
            </h1>
            <p className="text-xl opacity-90">
              透明性の高い料金体系で安心してご利用いただけます
            </p>
          </div>
        </div>
      </section>

      {/* 基本料金表 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              基本宿泊料金
            </h2>
            <p className="text-xl text-gray-600">
              最大8名様まで、追加料金なしでご利用いただけます
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* 平日料金 */}
            <div className="bg-blue-50 p-8 rounded-lg shadow-lg border border-blue-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">平日料金</h3>
                <p className="text-sm text-gray-600">日曜日〜木曜日</p>
              </div>
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  ¥50,000
                </div>
                <p className="text-lg text-gray-600">1泊 / 最大8名様</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">セミダブルベッド4台</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">バレルサウナ利用込み</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">200坪天然芝利用込み</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">駐車場3台無料</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">基本アメニティ一式</span>
                </li>
              </ul>
              <Link href="/booking">
                <Button className="w-full" size="lg">平日で予約する</Button>
              </Link>
            </div>

            {/* 休日料金 */}
            <div className="bg-yellow-50 p-8 rounded-lg shadow-lg border-2 border-yellow-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold">
                  人気プラン
                </span>
              </div>
              <div className="text-center mb-6 mt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">休日料金</h3>
                <p className="text-sm text-gray-600">金曜日・土曜日・祝日・ハイシーズン</p>
              </div>
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-yellow-600 mb-2">
                  ¥70,000
                </div>
                <p className="text-lg text-gray-600">1泊 / 最大8名様</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">セミダブルベッド4台</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">バレルサウナ利用込み</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">200坪天然芝利用込み</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">駐車場3台無料</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">基本アメニティ一式</span>
                </li>
              </ul>
              <Link href="/booking">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600" size="lg">
                  休日で予約する
                </Button>
              </Link>
            </div>
          </div>

          {/* ハイシーズン料金表 */}
          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar className="h-5 w-5 text-red-600 mr-2" />
              ハイシーズン料金（休日料金適用）
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="font-semibold text-gray-800">年末年始</p>
                <p className="text-gray-600">12/29〜1/3</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">ゴールデンウィーク</p>
                <p className="text-gray-600">4/29〜5/5</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">お盆期間</p>
                <p className="text-gray-600">8/11〜8/16</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">シルバーウィーク</p>
                <p className="text-gray-600">9月の連休</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 追加料金・オプション */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              追加料金・オプションサービス
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 時間延長料金 */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                時間延長料金
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">アーリーチェックイン（14:00〜16:00）</span>
                  <span className="font-semibold text-gray-900">¥3,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">レイトチェックイン（19:00〜21:00）</span>
                  <span className="font-semibold text-gray-900">¥2,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">レイトチェックアウト（10:00〜12:00）</span>
                  <span className="font-semibold text-gray-900">¥3,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">レイトチェックアウト（12:00〜14:00）</span>
                  <span className="font-semibold text-gray-900">¥5,000</span>
                </div>
              </div>
            </div>

            {/* その他追加料金 */}
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Info className="h-5 w-5 text-yellow-600 mr-2" />
                その他追加料金
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">ペット清掃費（室内汚損時）</span>
                  <span className="font-semibold text-gray-900">¥5,000〜</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">備品破損・交換費用</span>
                  <span className="font-semibold text-gray-900">実費</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">忘れ物配送料</span>
                  <span className="font-semibold text-gray-900">¥1,000〜</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">鍵紛失時交換費用</span>
                  <span className="font-semibold text-gray-900">¥10,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* キャンセルポリシー */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              キャンセルポリシー
            </h2>
            <p className="text-xl text-gray-600">
              ご予約前に必ずご確認ください
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-start mb-6">
              <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  キャンセル料について
                </h3>
                <p className="text-gray-600">
                  以下の期間にキャンセルされた場合、下記キャンセル料を申し受けます。
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-4 font-semibold text-gray-900">キャンセル日</th>
                    <th className="py-3 px-4 font-semibold text-gray-900">キャンセル料</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">宿泊日の29日前まで</td>
                    <td className="py-3 px-4 font-semibold text-green-600">無料</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">宿泊日の28日前〜15日前</td>
                    <td className="py-3 px-4 font-semibold text-yellow-600">宿泊料金の30%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">宿泊日の14日前〜7日前</td>
                    <td className="py-3 px-4 font-semibold text-orange-600">宿泊料金の50%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">宿泊日の6日前〜前日</td>
                    <td className="py-3 px-4 font-semibold text-red-600">宿泊料金の80%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">宿泊日当日・無連絡不泊</td>
                    <td className="py-3 px-4 font-semibold text-red-600">宿泊料金の100%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">特別な事情による無料キャンセル</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 台風・地震などの天災によりアクセスが困難な場合</li>
                <li>• ペットの急病・怪我による獣医師の診断書がある場合</li>
                <li>• お客様の急病による医師の診断書がある場合</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 利用規約 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ご利用規約
            </h2>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  基本情報
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• チェックイン：16:00〜19:00</li>
                  <li>• チェックアウト：10:00</li>
                  <li>• 最大宿泊人数：8名</li>
                  <li>• 最低宿泊日数：1泊</li>
                  <li>• 未成年者のみでの利用不可</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Heart className="h-5 w-5 text-pink-600 mr-2" />
                  ペット関連
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• ペット最大3頭まで</li>
                  <li>• 予防接種証明書必須</li>
                  <li>• 室内マーキング厳禁</li>
                  <li>• 夜間（22:00〜7:00）静穏時間</li>
                  <li>• ペットのみでの外出不可</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ご予約お待ちしております
          </h2>
          <p className="text-xl mb-8 opacity-90">
            透明性の高い料金体系で安心してご利用いただけます
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                今すぐ予約する
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                料金について相談
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}