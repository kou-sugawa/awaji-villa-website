import Image from "next/image";
import { Heart, Shield, MapPin, AlertCircle, CheckCircle, Bath, TreePine } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ペット情報 | ヴィラ・ハートフル淡路明神",
  description: "ペット同伴のための完全ガイド。利用規約、料金、専用設備、シャワー設備、周辺の動物病院など、愛犬・愛猫と安心してご滞在いただくための情報を網羅。",
  keywords: "ペット同伴 宿泊, 犬 猫 利用規約, ペット用シャワー, 動物病院 淡路島",
  openGraph: {
    title: "ペット情報 | ヴィラ・ハートフル淡路明神",
    description: "ペット同伴のための完全ガイド。利用規約から専用設備まで詳しくご紹介",
  },
};

export default function PetsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-pink-900 to-purple-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ペット情報
            </h1>
            <p className="text-xl opacity-90">
              愛犬と一緒に安心してお過ごしいただくために
            </p>
          </div>
        </div>
      </section>

      {/* ペット利用規約 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ペット利用規約
            </h2>
            <p className="text-xl text-gray-600">
              安全で快適なご滞在のためのお約束
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-green-50 p-8 rounded-lg border border-green-200">
              <div className="flex items-center mb-6">
                <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">利用可能なペット</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>犬（小型犬〜大型犬まで対応）</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>猫（室内飼育の場合のみ）</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>頭数制限：犬・猫合わせて最大3頭まで</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>年齢：生後6ヶ月以上</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>予防接種証明書の提示必須</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-8 rounded-lg border border-red-200">
              <div className="flex items-center mb-6">
                <AlertCircle className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">利用条件・注意事項</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>狂犬病予防接種・混合ワクチン接種済み</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>ノミ・ダニ駆除済み</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>発情期・妊娠中の場合は事前相談必要</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>攻撃的・極度に臆病なペットは利用不可</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>室内でのマーキング・粗相厳禁</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              ペット同伴料金
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm text-gray-600">小型犬（10kg未満）</p>
                <p className="text-xl font-bold text-blue-600">¥2,000/泊</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">中・大型犬（10kg以上）</p>
                <p className="text-xl font-bold text-blue-600">¥3,000/泊</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">猫</p>
                <p className="text-xl font-bold text-blue-600">¥1,500/泊</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ペット専用設備・サービス */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ペット専用設備・サービス
            </h2>
            <p className="text-xl text-gray-600">
              愛犬・愛猫のための特別な設備をご用意
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <TreePine className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">200坪天然芝ドッグラン</h3>
              </div>
              <div className="relative h-64 mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="天然芝ドッグラン"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• 完全プライベートなドッグラン</li>
                <li>• 海風を感じながら自由に走り回れる</li>
                <li>• フリスビー・ボール無料貸出</li>
                <li>• ペット用水飲み場設置</li>
                <li>• 夜間照明完備（21:00まで）</li>
                <li>• ウンチ袋・処理道具完備</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Bath className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">ペット専用シャワー設備</h3>
              </div>
              <div className="relative h-64 mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="ペット専用シャワー"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• 温水完備の専用シャワー室</li>
                <li>• 滑り止めマット設置済み</li>
                <li>• ペット用シャンプー・リンス完備</li>
                <li>• 吸水性抜群のタオル複数枚</li>
                <li>• ドライヤー完備</li>
                <li>• 24時間いつでも利用可能</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">ペット用ベッド</h4>
              <p className="text-gray-600 text-sm">各サイズの清潔なペット用ベッド・マットを無料貸出</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bath className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">食器・給水器</h4>
              <p className="text-gray-600 text-sm">ステンレス製の清潔な食器と自動給水器をご用意</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">安全設備</h4>
              <p className="text-gray-600 text-sm">脱走防止柵、リードフック、ゲートなど安全対策完備</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">おもちゃ貸出</h4>
              <p className="text-gray-600 text-sm">フリスビー、ボール、ロープなど各種おもちゃを無料貸出</p>
            </div>
          </div>
        </div>
      </section>

      {/* 周辺ペット対応施設 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              周辺ペット対応施設
            </h2>
            <p className="text-xl text-gray-600">
              緊急時も安心の充実したペット関連施設
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 動物病院 */}
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-red-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">緊急時対応動物病院</h3>
              </div>
              <div className="space-y-2">
                <div>
                  <h4 className="font-semibold text-gray-800">淡路動物病院</h4>
                  <p className="text-sm text-gray-600">車で約15分</p>
                  <p className="text-sm text-gray-600">緊急対応可・年中無休</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">明石海峡動物クリニック</h4>
                  <p className="text-sm text-gray-600">車で約20分</p>
                  <p className="text-sm text-gray-600">夜間対応可（要電話確認）</p>
                </div>
              </div>
            </div>

            {/* ペット用品店 */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">ペット用品店</h3>
              </div>
              <div className="space-y-2">
                <div>
                  <h4 className="font-semibold text-gray-800">ペットワールド淡路店</h4>
                  <p className="text-sm text-gray-600">車で約12分</p>
                  <p className="text-sm text-gray-600">フード・おもちゃ・日用品完備</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">コメリ淡路店</h4>
                  <p className="text-sm text-gray-600">車で約10分</p>
                  <p className="text-sm text-gray-600">ペット用品コーナーあり</p>
                </div>
              </div>
            </div>

            {/* ペット同伴可能スポット */}
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <div className="flex items-center mb-4">
                <TreePine className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">ペット同伴可能スポット</h3>
              </div>
              <div className="space-y-2">
                <div>
                  <h4 className="font-semibold text-gray-800">あわじ花さじき</h4>
                  <p className="text-sm text-gray-600">車で約25分</p>
                  <p className="text-sm text-gray-600">広大な花畑をペットと散歩</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">淡路島国営明石海峡公園</h4>
                  <p className="text-sm text-gray-600">車で約30分</p>
                  <p className="text-sm text-gray-600">ペット入園可エリアあり</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ペット利用ガイドライン */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ペット利用ガイドライン
            </h2>
            <p className="text-xl text-gray-600">
              快適なご滞在のためのお願い
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">チェックイン時</h3>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• 予防接種証明書をご提示ください</li>
                  <li>• ペットの健康状態を確認させていただきます</li>
                  <li>• ペット利用規約に同意書へのサインをお願いします</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">滞在中のお願い</h3>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• 室内でのペットは常に飼い主様の監視下に置いてください</li>
                  <li>• ペットだけでの外出はご遠慮ください</li>
                  <li>• 夜10時以降は静穏時間です。ペットの鳴き声にご注意ください</li>
                  <li>• 備品の破損・汚損が発生した場合は実費請求となります</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">チェックアウト時</h3>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• お借りしたペット用品は洗浄してお返しください</li>
                  <li>• 天然芝エリアの清掃確認をさせていただきます</li>
                  <li>• ペットの毛や汚れがないか室内点検にご協力ください</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            愛犬・愛猫との特別な休暇を
          </h2>
          <p className="text-xl mb-8 opacity-90">
            ペット特化型ヴィラで、かけがえのない思い出を作りませんか？
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                ペット同伴で予約する
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
                ペットについて相談
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}