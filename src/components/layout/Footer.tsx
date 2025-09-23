import Link from 'next/link';
import { Heart, Phone, Mail, MapPin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ブランド情報 */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-lg font-bold">Awaji Pet & Sauna Resort</h3>
                <p className="text-sm text-gray-400">淡路島</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              愛犬と過ごす特別なリゾート体験。1日1組限定のペット特化型プライベートヴィラで、
              バレルサウナと200坪の天然芝をお楽しみください。
            </p>
          </div>

          {/* ナビゲーション */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">サイトマップ</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/facility" className="text-gray-400 hover:text-white transition-colors">
                  施設紹介
                </Link>
              </li>
              <li>
                <Link href="/pets" className="text-gray-400 hover:text-white transition-colors">
                  ペット情報
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  料金・プラン
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-400 hover:text-white transition-colors">
                  ご予約
                </Link>
              </li>
            </ul>
          </div>

          {/* 施設情報 */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">施設情報</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">
                    〒656-1557<br />
                    兵庫県淡路市明神
                  </p>
                </div>
              </div>
              <div className="text-sm text-gray-400">
                <p>チェックイン: 16:00-19:00</p>
                <p>チェックアウト: 10:00</p>
                <p>定員: 最大8名</p>
                <p>駐車場: 3台無料</p>
              </div>
            </div>
          </div>

          {/* お問い合わせ */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-sm text-gray-400">080-1234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-sm text-gray-400">info@villa-heartful.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="h-5 w-5 text-blue-400" />
                <span className="text-sm text-gray-400">@villa_heartful_awaji</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Awaji Pet & Sauna Resort. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}