import Image from "next/image";
import Link from "next/link";
import { Heart, Waves, TreePine, Users, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            愛犬と過ごす
            <br />
            <span className="text-yellow-300">特別なリゾート体験</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            1日1組限定 ペット特化型プライベートヴィラ
            <br />
            バレルサウナ × 200坪天然芝 × 海辺の絶景
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                ご予約はこちら
              </Button>
            </Link>
            <Link href="/facility">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                施設を見る
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              4つの特別な体験
            </h2>
            <p className="text-xl text-gray-600">
              ペットと一緒に楽しめる贅沢なひとときをご提供します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1: ペット特化 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                ペット特化設備
              </h3>
              <p className="text-gray-600">
                ペット専用アメニティ、シャワー設備、そして愛犬が自由に走り回れる専用スペースをご用意
              </p>
            </div>

            {/* Feature 2: 天然芝 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                200坪天然芝
              </h3>
              <p className="text-gray-600">
                広大な天然芝エリアで、ペットが思いっきり遊べる開放的な空間。海風を感じながらリラックス
              </p>
            </div>

            {/* Feature 3: バレルサウナ */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                バレルサウナ
              </h3>
              <p className="text-gray-600">
                本格的なフィンランド式サウナで極上のリラクゼーション。海を眺めながらの贅沢なひととき
              </p>
            </div>

            {/* Feature 4: プライベート空間 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1日1組限定
              </h3>
              <p className="text-gray-600">
                完全プライベート空間で、他のお客様を気にせず愛犬と特別な時間を過ごせます
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              施設ギャラリー
            </h2>
            <p className="text-xl text-gray-600">
              海辺に佇む贅沢なヴィラで、愛犬と過ごす特別なひととき
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="ヴィラ外観"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="愛犬と天然芝"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="サウナ"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="リビング"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="海辺の景色"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="ベッドルーム"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/facility">
              <Button>もっと見る</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              料金案内
            </h2>
            <p className="text-xl text-gray-600">
              最大8名様まで、ペット同伴でご利用いただけます
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">平日料金</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">
                ¥50,000
                <span className="text-lg text-gray-600">/泊</span>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• 最大8名様まで</li>
                <li>• ペット同伴可</li>
                <li>• バレルサウナ利用込み</li>
                <li>• 200坪天然芝利用込み</li>
                <li>• 駐車場3台無料</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-yellow-400">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-900">休日料金</h3>
                <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                  人気
                </span>
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-4">
                ¥70,000
                <span className="text-lg text-gray-600">/泊</span>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• 最大8名様まで</li>
                <li>• ペット同伴可</li>
                <li>• バレルサウナ利用込み</li>
                <li>• 200坪天然芝利用込み</li>
                <li>• 駐車場3台無料</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/pricing">
              <Button>詳細料金を見る</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            愛犬との特別な思い出を作りませんか？
          </h2>
          <p className="text-xl mb-8 opacity-90">
            1日1組限定のプライベートヴィラで、忘れられない体験をお約束します
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                今すぐ予約する
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
