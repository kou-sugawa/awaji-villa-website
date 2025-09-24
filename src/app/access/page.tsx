import Image from "next/image";
import { MapPin, Car, Train, Plane, Clock, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "アクセス | ヴィラ・ハートフル淡路明神",
  description: "淡路島西海岸の絶好のロケーション。車、電車、飛行機でのアクセス方法を詳しくご案内。ペット連れでの移動についてもアドバイス。駐車場無料3台完備。",
  keywords: "淡路島 アクセス, 淡路市明神 アクセス, ペット連れ アクセス, 駐車場無料",
  openGraph: {
    title: "アクセス | ヴィラ・ハートフル淡路明神",
    description: "淡路島西海岸の絶好のロケーション。各交通手段でのアクセス方法を詳しくご案内",
  },
};

export default function AccessPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-gray-900 to-blue-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              アクセス
            </h1>
            <p className="text-xl opacity-90">
              淡路島西海岸の絶好のロケーション
            </p>
          </div>
        </div>
      </section>

      {/* 施設情報 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                施設情報
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">住所</h3>
                    <p className="text-gray-700">
                      〒xxx-xxxx<br />
                      住所：兵庫県淡路市
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">お問い合わせ</h3>
                    <p className="text-gray-700">
                      電話: xxx-xxxx-xxxx<br />
                      メール: info@xxxx.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">チェックイン・アウト</h3>
                    <p className="text-gray-700">
                      チェックイン: 16:00〜19:00<br />
                      チェックアウト: 10:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Car className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">駐車場</h3>
                    <p className="text-gray-700">
                      無料駐車場 3台完備<br />
                      大型車両も駐車可能
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/contact">
                  <Button size="lg">お問い合わせ</Button>
                </Link>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p>Google Maps</p>
                <p className="text-sm">実際のサイトではGoogleマップが表示されます</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* アクセス方法 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              アクセス方法
            </h2>
            <p className="text-xl text-gray-600">
              各交通手段でのアクセス方法をご案内します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 車でのアクセス */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Car className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">お車でお越しの場合</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">神戸・大阪方面から</h4>
                  <p className="text-gray-600 text-sm">
                    神戸淡路鳴門自動車道<br />
                    「北淡IC」下車 約15分<br />
                    または「津名一宮IC」下車 約20分
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">徳島方面から</h4>
                  <p className="text-gray-600 text-sm">
                    神戸淡路鳴門自動車道<br />
                    「津名一宮IC」下車 約20分
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>ペット連れの方へ</strong><br />
                    途中のサービスエリアでペットの休憩をお忘れなく
                  </p>
                </div>
              </div>
            </div>

            {/* 電車でのアクセス */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Train className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">電車でお越しの場合</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">JR利用</h4>
                  <p className="text-gray-600 text-sm">
                    JR「舞子駅」→ 高速バス約30分<br />
                    →「津名港」下車 → タクシー約15分
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">阪急・阪神利用</h4>
                  <p className="text-gray-600 text-sm">
                    「三宮駅」→ 高速バス約40分<br />
                    →「津名港」下車 → タクシー約15分
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>ペット連れの方へ</strong><br />
                    ペット同伴可能なタクシーを事前予約することをお勧めします
                  </p>
                </div>
              </div>
            </div>

            {/* 飛行機でのアクセス */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Plane className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">飛行機でお越しの場合</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">関西国際空港</h4>
                  <p className="text-gray-600 text-sm">
                    リムジンバス約60分<br />
                    →「三宮駅」→ 高速バス約40分<br />
                    →「津名港」下車 → タクシー約15分
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">神戸空港</h4>
                  <p className="text-gray-600 text-sm">
                    ポートライナー約18分<br />
                    →「三宮駅」→ 高速バス約40分<br />
                    →「津名港」下車 → タクシー約15分
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-purple-800">
                    <strong>ペット連れの方へ</strong><br />
                    ペットの飛行機移動については事前に航空会社にご確認ください
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 周辺情報 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              周辺情報
            </h2>
            <p className="text-xl text-gray-600">
              ヴィラ周辺の便利な施設・観光スポット
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 生活便利施設 */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">生活便利施設</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• ローソン淡路明神店（車で5分）</li>
                <li>• マックスバリュ津名店（車で10分）</li>
                <li>• ウエルシア淡路津名店（車で10分）</li>
                <li>• 淡路市役所（車で12分）</li>
              </ul>
            </div>

            {/* ペット関連施設 */}
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">ペット関連施設</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 淡路動物病院（車で15分）</li>
                <li>• ペットワールド淡路店（車で12分）</li>
                <li>• ドッグラン淡路（車で8分）</li>
                <li>• ペット用品店コメリ（車で10分）</li>
              </ul>
            </div>

            {/* 観光スポット */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">観光スポット</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• あわじ花さじき（車で25分）</li>
                <li>• 淡路島国営明石海峡公園（車で30分）</li>
                <li>• 伊弉諾神宮（車で20分）</li>
                <li>• 北淡震災記念公園（車で15分）</li>
              </ul>
            </div>

            {/* 飲食店 */}
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">飲食店</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 海鮮料理 磯の香（車で8分）</li>
                <li>• ファミリーレストラン ガスト（車で12分）</li>
                <li>• 地産地消レストラン 淡路ごちそう館（車で15分）</li>
                <li>• カフェ オーシャンテラス（車で10分）</li>
              </ul>
            </div>

            {/* レジャー施設 */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">レジャー施設</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 淡路ワールドパークONOKORO（車で25分）</li>
                <li>• 淡路島牧場（車で20分）</li>
                <li>• 釣りスポット 江井海岸（車で5分）</li>
                <li>• 温泉施設 美湯松帆の郷（車で30分）</li>
              </ul>
            </div>

            {/* 医療機関 */}
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">医療機関</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 淡路医療センター（車で20分）</li>
                <li>• 津名病院（車で15分）</li>
                <li>• かとう内科クリニック（車で12分）</li>
                <li>• 明神薬局（車で8分）</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            アクセスについてご不明な点は
          </h2>
          <p className="text-xl mb-8 opacity-90">
            お気軽にお問い合わせください。ペット連れでの移動についてもご相談承ります
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                お問い合わせ
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                ご予約はこちら
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}