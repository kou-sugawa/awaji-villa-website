'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import Button from '@/components/ui/Button';

const contactSchema = z.object({
  name: z.string().min(1, 'お名前を入力してください'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  phone: z.string().min(10, '有効な電話番号を入力してください'),
  subject: z.string().min(1, '件名を選択してください'),
  message: z.string().min(10, '10文字以上でメッセージを入力してください'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // TODO: APIエンドポイントに送信
      console.log('Contact form data:', data);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setSubmitMessage('お問い合わせありがとうございます。24時間以内にご返信いたします。');
      reset();
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitMessage('送信に失敗しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-teal-900 to-blue-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              お問い合わせ
            </h1>
            <p className="text-xl opacity-90">
              ご質問・ご相談はお気軽にお問い合わせください
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              お問い合わせ方法
            </h2>
            <p className="text-xl text-gray-600">
              お急ぎの場合はお電話でお問い合わせください
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">電話</h3>
              <p className="text-gray-700 font-semibold">080-1234-5678</p>
              <p className="text-sm text-gray-600 mt-2">受付時間: 9:00〜21:00</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg text-center">
              <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">メール</h3>
              <p className="text-gray-700 font-semibold">info@villa-heartful.com</p>
              <p className="text-sm text-gray-600 mt-2">24時間以内に返信</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <MessageCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">LINE</h3>
              <p className="text-gray-700 font-semibold">@villa-heartful</p>
              <p className="text-sm text-gray-600 mt-2">友達追加でお気軽に</p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg text-center">
              <Clock className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">緊急時</h3>
              <p className="text-gray-700 font-semibold">080-9876-5432</p>
              <p className="text-sm text-gray-600 mt-2">宿泊中の緊急連絡先</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                お問い合わせフォーム
              </h3>

              {submitMessage && (
                <div className={`p-4 rounded-lg mb-6 ${
                  submitMessage.includes('ありがとう') 
                    ? 'bg-green-50 border border-green-200 text-green-800'
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}>
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    お名前 *
                  </label>
                  <input
                    {...register('name')}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="田中太郎"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    メールアドレス *
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="example@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    電話番号 *
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="090-1234-5678"
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    お問い合わせ件名 *
                  </label>
                  <select
                    {...register('subject')}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">件名を選択してください</option>
                    <option value="reservation">宿泊予約について</option>
                    <option value="pets">ペット同伴について</option>
                    <option value="facilities">施設・設備について</option>
                    <option value="pricing">料金について</option>
                    <option value="access">アクセスについて</option>
                    <option value="cancellation">キャンセルについて</option>
                    <option value="other">その他</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-600 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    メッセージ *
                  </label>
                  <textarea
                    {...register('message')}
                    rows={6}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="お問い合わせ内容を詳しくお書きください。ペット同伴の場合は、ペットの種類・サイズ・頭数なども記載いただけると幸いです。"
                  />
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                  size="lg"
                >
                  {isSubmitting ? (
                    '送信中...'
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      送信する
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Facility Info */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  施設情報
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">住所</h4>
                      <p className="text-gray-700">
                        〒656-1501<br />
                        兵庫県淡路市明神字西濱645
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">営業時間</h4>
                      <p className="text-gray-700">
                        チェックイン: 16:00〜19:00<br />
                        チェックアウト: 10:00<br />
                        お問い合わせ受付: 9:00〜21:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  よくあるお問い合わせ
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• ペットの種類・サイズ制限について</li>
                  <li>• 予防接種証明書の提示について</li>
                  <li>• キャンセル料・変更手数料について</li>
                  <li>• 追加料金・オプションサービスについて</li>
                  <li>• チェックイン時間の変更について</li>
                  <li>• バレルサウナの利用方法について</li>
                  <li>• 周辺のペット対応施設について</li>
                  <li>• 悪天候時のキャンセルについて</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              よくある質問
            </h2>
            <p className="text-xl text-gray-600">
              お問い合わせの前にこちらもご確認ください
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Q. ペットと一緒に宿泊する場合、何が必要ですか？
              </h3>
              <p className="text-gray-700">
                A. 予防接種証明書（狂犬病・混合ワクチン）の提示が必須となります。また、ノミ・ダニ駆除も事前に行ってください。
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Q. キャンセル料はいつから発生しますか？
              </h3>
              <p className="text-gray-700">
                A. 宿泊日の28日前からキャンセル料が発生します。詳細は料金ページのキャンセルポリシーをご確認ください。
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Q. チェックイン時間の変更はできますか？
              </h3>
              <p className="text-gray-700">
                A. アーリーチェックイン（14:00〜16:00）は+3,000円、レイトチェックイン（19:00〜21:00）は+2,000円で承ります。
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Q. バレルサウナの利用に追加料金は必要ですか？
              </h3>
              <p className="text-gray-700">
                A. バレルサウナの利用は宿泊料金に含まれており、追加料金は不要です。利用時間は22:00まで、翌朝は6:00からご利用いただけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            お気軽にお問い合わせください
          </h2>
          <p className="text-xl mb-8 opacity-90">
            ペット同伴での宿泊について、どんな小さなことでもお気軽にご相談ください
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:080-1234-5678">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                <Phone className="h-5 w-5 mr-2" />
                今すぐ電話
              </Button>
            </a>
            <a href="mailto:info@villa-heartful.com">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600">
                <Mail className="h-5 w-5 mr-2" />
                メールで問い合わせ
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}