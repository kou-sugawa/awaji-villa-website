import Image from "next/image";
import { Bed, Users, Wifi, Car, Utensils, Bath, TreePine, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "施設紹介 | ヴィラ・ハートフル淡路明神",
  description: "ペット特化型プライベートヴィラの詳細な施設情報。セミダブルベッド4台、バレルサウナ、200坪天然芝エリア、ペット専用設備など充実した設備をご紹介。",
  keywords: "淡路島 ペット可 宿泊施設, バレルサウナ, 天然芝 ドッグラン, ペット専用設備",
  openGraph: {
    title: "施設紹介 | ヴィラ・ハートフル淡路明神",
    description: "ペット特化型プライベートヴィラの詳細な施設情報をご紹介",
  },
};

export default function FacilityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-900 to-blue-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              施設紹介
            </h1>
            <p className="text-xl opacity-90">
              ペット特化型プライベートヴィラの詳細をご覧ください
            </p>
          </div>
        </div>
      </section>

      {/* 施設概要 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Awaji Pet & Sauna Resort
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                兵庫県淡路市明神に位置する、1日1組限定のペット特化型プライベートヴィラです。
                絶好のロケーションで、愛犬と一緒に特別なリゾート体験をお楽しみいただけます。
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">最大8名様</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bed className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">セミダブルベッド4台</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Car className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">駐車場3台無料</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TreePine className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">200坪天然芝</span>
                </div>
              </div>

              <Link href="/booking">
                <Button size="lg">ご予約はこちら</Button>
              </Link>
            </div>

            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="ヴィラ外観"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 間取り・部屋詳細 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              間取り・部屋詳細
            </h2>
            <p className="text-xl text-gray-600">
              ペット同伴を前提とした快適な空間設計
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* リビング・ダイニング */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative h-48 mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="リビング・ダイニング"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                リビング・ダイニング
              </h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• 海を望む開放的空間</li>
                <li>• ペット対応フローリング</li>
                <li>• 大型ソファ・ダイニングテーブル</li>
                <li>• 50インチ液晶TV</li>
                <li>• 無料Wi-Fi完備</li>
              </ul>
            </div>

            {/* ベッドルーム */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative h-48 mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="ベッドルーム"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                ベッドルーム
              </h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• セミダブルベッド4台</li>
                <li>• 最大8名様宿泊可能</li>
                <li>• ペット同伴可能</li>
                <li>• 個別空調システム</li>
                <li>• 遮光カーテン完備</li>
              </ul>
            </div>

            {/* バルコニー・テラス */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative h-48 mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="バルコニー・テラス"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                バルコニー・テラス
              </h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• 海に面したテラス</li>
                <li>• アウトドアテーブル・チェア</li>
                <li>• ペット用リード設置可能</li>
                <li>• 絶景オーシャンビュー</li>
                <li>• 夕日鑑賞スポット</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 特別設備 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              特別設備
            </h2>
            <p className="text-xl text-gray-600">
              他にはない特別な体験をご提供
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* バレルサウナ */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <Sparkles className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">バレルサウナ</h3>
              </div>
              <div className="relative h-64 mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="バレルサウナ"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-3">
                <p className="text-gray-700 font-semibold">本格的なフィンランド式サウナ</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• 温度: 80-90℃の高温サウナ</li>
                  <li>• 海を眺めながらのサウナ体験</li>
                  <li>• 2-4名様同時利用可能</li>
                  <li>• 利用時間: チェックイン後〜22:00</li>
                  <li>• 翌朝: 6:00〜チェックアウトまで</li>
                  <li>• タオル・サウナハット貸出無料</li>
                </ul>
              </div>
            </div>

            {/* 天然芝エリア */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <TreePine className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">200坪天然芝エリア</h3>
              </div>
              <div className="relative h-64 mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="天然芝エリア"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-3">
                <p className="text-gray-700 font-semibold">愛犬が自由に走り回れる広大な空間</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• 広さ: 約200坪の天然芝</li>
                  <li>• 完全プライベート使用</li>
                  <li>• ペット用水飲み場設置</li>
                  <li>• フリスビー・ボール貸出</li>
                  <li>• 夜間照明完備</li>
                  <li>• 海風を感じながらリラックス</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ペット専用設備 */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ペット専用設備・サービス
            </h2>
            <p className="text-xl text-gray-600">
              愛犬の快適さを最優先に考えた設備
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bath className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ペット専用シャワー
              </h3>
              <p className="text-gray-600 text-sm">
                温水完備の専用シャワー設備。海水や砂を洗い流せます
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ペット用食器
              </h3>
              <p className="text-gray-600 text-sm">
                ステンレス製の清潔な食器と給水器をご用意
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bed className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ペット用ベッド
              </h3>
              <p className="text-gray-600 text-sm">
                洗濯済みの清潔なペット用ベッド・マットを無料貸出
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ペット用タオル
              </h3>
              <p className="text-gray-600 text-sm">
                吸水性抜群のペット専用タオルを複数枚ご用意
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 一般設備・アメニティ */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              一般設備・アメニティ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* キッチン設備 */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                <Utensils className="h-6 w-6 text-blue-600 mr-2" />
                キッチン設備
              </h3>
              <ul className="text-gray-600 space-y-1">
                <li>• IHコンロ（2口）</li>
                <li>• 大型冷蔵庫</li>
                <li>• 電子レンジ</li>
                <li>• 炊飯器（5合炊き）</li>
                <li>• トースター</li>
                <li>• 電気ケトル</li>
                <li>• 調理器具一式</li>
                <li>• 食器類完備</li>
              </ul>
            </div>

            {/* バスルーム */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                <Bath className="h-6 w-6 text-blue-600 mr-2" />
                バスルーム
              </h3>
              <ul className="text-gray-600 space-y-1">
                <li>• ユニットバス</li>
                <li>• 洗浄機付きトイレ</li>
                <li>• ドライヤー</li>
                <li>• シャンプー・コンディショナー</li>
                <li>• ボディソープ</li>
                <li>• フェイスタオル</li>
                <li>• バスタオル</li>
                <li>• 歯ブラシセット</li>
              </ul>
            </div>

            {/* その他設備 */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                <Wifi className="h-6 w-6 text-blue-600 mr-2" />
                その他設備
              </h3>
              <ul className="text-gray-600 space-y-1">
                <li>• 無料Wi-Fi（高速）</li>
                <li>• 50インチ液晶TV</li>
                <li>• エアコン（各部屋）</li>
                <li>• 空気清浄機</li>
                <li>• 洗濯機</li>
                <li>• 掃除機</li>
                <li>• アイロン・アイロン台</li>
                <li>• セーフティボックス</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ご予約はお早めに
          </h2>
          <p className="text-xl mb-8 opacity-90">
            1日1組限定のため、ご希望日はお早めのご予約をお勧めします
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                空室状況を確認
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                お問い合わせ
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}