'use client';

import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Plus, Minus, Users, Calendar, Heart, DollarSign } from 'lucide-react';
import Button from '@/components/ui/Button';
import type { BookingFormData, PetInfo, BookingPrice } from '@/types/booking';

const petSchema = z.object({
  name: z.string().min(1, 'ペット名を入力してください'),
  type: z.enum(['dog', 'cat']),
  size: z.enum(['small', 'medium', 'large']),
  age: z.number().min(0.5, '生後6ヶ月以上のペットのみ利用可能です').max(20),
  weight: z.number().min(0.1).max(100),
  vaccinated: z.boolean().refine(val => val === true, '予防接種済みのペットのみ利用可能です'),
  notes: z.string().optional(),
});

const bookingSchema = z.object({
  checkIn: z.string().min(1, 'チェックイン日を選択してください'),
  checkOut: z.string().min(1, 'チェックアウト日を選択してください'),
  guests: z.number().min(1, '最低1名の宿泊者が必要です').max(8, '最大8名まで宿泊可能です'),
  pets: z.array(petSchema).max(3, '最大3頭まで同伴可能です'),
  contactInfo: z.object({
    firstName: z.string().min(1, '名前を入力してください'),
    lastName: z.string().min(1, '苗字を入力してください'),
    email: z.string().email('有効なメールアドレスを入力してください'),
    phone: z.string().min(10, '有効な電話番号を入力してください'),
    emergencyContact: z.string().min(1, '緊急連絡先名を入力してください'),
    emergencyPhone: z.string().min(10, '緊急連絡先電話番号を入力してください'),
  }),
  saunaPreference: z.boolean(),
  earlyCheckin: z.boolean(),
  lateCheckout: z.boolean(),
  specialRequests: z.string().optional(),
});

export default function BookingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingPrice, setBookingPrice] = useState<BookingPrice | null>(null);

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      guests: 2,
      pets: [],
      saunaPreference: true,
      earlyCheckin: false,
      lateCheckout: false,
    },
  });

  const { fields: petFields, append: appendPet, remove: removePet } = useFieldArray({
    control,
    name: 'pets',
  });

  const watchedValues = watch();

  const calculatePrice = (): BookingPrice => {
    const checkIn = new Date(watchedValues.checkIn);
    const checkOut = new Date(watchedValues.checkOut);
    const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
    
    const isWeekend = checkIn.getDay() === 5 || checkIn.getDay() === 6 || checkOut.getDay() === 0;
    const basePrice = isWeekend ? 70000 : 50000;
    
    let petFees = 0;
    watchedValues.pets?.forEach(pet => {
      if (pet.type === 'dog') {
        petFees += pet.weight < 10 ? 2000 : 3000;
      } else if (pet.type === 'cat') {
        petFees += 1500;
      }
    });

    let optionFees = 0;
    if (watchedValues.earlyCheckin) optionFees += 3000;
    if (watchedValues.lateCheckout) optionFees += 3000;

    return {
      basePrice: basePrice * nights,
      petFees: petFees * nights,
      optionFees,
      totalPrice: (basePrice + petFees) * nights + optionFees,
      nights,
      isWeekend,
    };
  };

  const addPet = () => {
    if (petFields.length < 3) {
      appendPet({
        name: '',
        type: 'dog',
        size: 'medium',
        age: 1,
        weight: 10,
        vaccinated: false,
        notes: '',
      });
    }
  };

  const nextStep = async () => {
    const isValid = await trigger();
    if (isValid && currentStep < 3) {
      if (currentStep === 1) {
        const price = calculatePrice();
        setBookingPrice(price);
      }
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: BookingFormData) => {
    try {
      // TODO: APIエンドポイントに送信
      console.log('Booking data:', data);
      console.log('Price:', bookingPrice);
      alert('予約が完了しました！確認メールをお送りします。');
    } catch (error) {
      console.error('Booking error:', error);
      alert('予約に失敗しました。もう一度お試しください。');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Step Indicator */}
      <div className="flex items-center justify-center mb-8">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                step <= currentStep ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              {step}
            </div>
            {step < 3 && (
              <div
                className={`w-16 h-1 ${
                  step < currentStep ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Step 1: 日程・人数・ペット情報 */}
        {currentStep === 1 && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              日程・人数・ペット情報
            </h2>

            {/* 日程選択 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  チェックイン日
                </label>
                <input
                  type="date"
                  {...register('checkIn')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min={new Date().toISOString().split('T')[0]}
                />
                {errors.checkIn && (
                  <p className="text-red-600 text-sm mt-1">{errors.checkIn.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  チェックアウト日
                </label>
                <input
                  type="date"
                  {...register('checkOut')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min={watchedValues.checkIn || new Date().toISOString().split('T')[0]}
                />
                {errors.checkOut && (
                  <p className="text-red-600 text-sm mt-1">{errors.checkOut.message}</p>
                )}
              </div>
            </div>

            {/* 人数選択 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                宿泊人数（最大8名）
              </label>
              <div className="flex items-center space-x-4">
                <Users className="h-5 w-5 text-gray-400" />
                <input
                  type="number"
                  {...register('guests', { valueAsNumber: true })}
                  min="1"
                  max="8"
                  className="w-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <span className="text-gray-600">名</span>
              </div>
              {errors.guests && (
                <p className="text-red-600 text-sm mt-1">{errors.guests.message}</p>
              )}
            </div>

            {/* ペット情報 */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">ペット情報</h3>
                {petFields.length < 3 && (
                  <Button type="button" onClick={addPet} variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    ペットを追加
                  </Button>
                )}
              </div>

              {petFields.map((field, index) => (
                <div key={field.id} className="bg-gray-50 p-6 rounded-lg mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-md font-semibold text-gray-800">
                      ペット {index + 1}
                    </h4>
                    <Button
                      type="button"
                      onClick={() => removePet(index)}
                      variant="outline"
                      size="sm"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        ペット名
                      </label>
                      <input
                        {...register(`pets.${index}.name`)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="例: ポチ"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        種類
                      </label>
                      <select
                        {...register(`pets.${index}.type`)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="dog">犬</option>
                        <option value="cat">猫</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        サイズ
                      </label>
                      <select
                        {...register(`pets.${index}.size`)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="small">小型（〜10kg）</option>
                        <option value="medium">中型（10-25kg）</option>
                        <option value="large">大型（25kg〜）</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        年齢
                      </label>
                      <input
                        type="number"
                        {...register(`pets.${index}.age`, { valueAsNumber: true })}
                        min="0.5"
                        max="20"
                        step="0.5"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="歳"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        体重
                      </label>
                      <input
                        type="number"
                        {...register(`pets.${index}.weight`, { valueAsNumber: true })}
                        min="0.1"
                        max="100"
                        step="0.1"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="kg"
                      />
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        {...register(`pets.${index}.vaccinated`)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label className="ml-2 text-sm text-gray-700">
                        予防接種済み
                      </label>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      特記事項
                    </label>
                    <textarea
                      {...register(`pets.${index}.notes`)}
                      rows={2}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="アレルギーや特別な配慮が必要な事項があれば記入してください"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* オプション */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">オプション</h3>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register('saunaPreference')}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-3 text-gray-700">バレルサウナ利用希望</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register('earlyCheckin')}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-3 text-gray-700">
                    アーリーチェックイン（14:00〜16:00）+¥3,000
                  </span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register('lateCheckout')}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-3 text-gray-700">
                    レイトチェックアウト（10:00〜12:00）+¥3,000
                  </span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: お客様情報 */}
        {currentStep === 2 && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              お客様情報
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  姓
                </label>
                <input
                  {...register('contactInfo.lastName')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="田中"
                />
                {errors.contactInfo?.lastName && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.contactInfo.lastName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  名
                </label>
                <input
                  {...register('contactInfo.firstName')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="太郎"
                />
                {errors.contactInfo?.firstName && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.contactInfo.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  メールアドレス
                </label>
                <input
                  type="email"
                  {...register('contactInfo.email')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="example@email.com"
                />
                {errors.contactInfo?.email && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.contactInfo.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  {...register('contactInfo.phone')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="090-1234-5678"
                />
                {errors.contactInfo?.phone && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.contactInfo.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  緊急連絡先（お名前）
                </label>
                <input
                  {...register('contactInfo.emergencyContact')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="田中花子"
                />
                {errors.contactInfo?.emergencyContact && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.contactInfo.emergencyContact.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  緊急連絡先（電話番号）
                </label>
                <input
                  type="tel"
                  {...register('contactInfo.emergencyPhone')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="080-9876-5432"
                />
                {errors.contactInfo?.emergencyPhone && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.contactInfo.emergencyPhone.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                特別なご要望
              </label>
              <textarea
                {...register('specialRequests')}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="アレルギー、記念日のお祝い、その他ご要望があれば記入してください"
              />
            </div>
          </div>
        )}

        {/* Step 3: 料金確認・予約確定 */}
        {currentStep === 3 && bookingPrice && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              ご予約内容確認
            </h2>

            {/* 予約内容サマリー */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">宿泊内容</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">チェックイン:</span>
                  <span className="ml-2 font-medium">{watchedValues.checkIn}</span>
                </div>
                <div>
                  <span className="text-gray-600">チェックアウト:</span>
                  <span className="ml-2 font-medium">{watchedValues.checkOut}</span>
                </div>
                <div>
                  <span className="text-gray-600">宿泊日数:</span>
                  <span className="ml-2 font-medium">{bookingPrice.nights}泊</span>
                </div>
                <div>
                  <span className="text-gray-600">宿泊人数:</span>
                  <span className="ml-2 font-medium">{watchedValues.guests}名</span>
                </div>
                <div>
                  <span className="text-gray-600">ペット同伴:</span>
                  <span className="ml-2 font-medium">{watchedValues.pets?.length || 0}頭</span>
                </div>
              </div>
            </div>

            {/* 料金詳細 */}
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                料金詳細
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    基本料金（{bookingPrice.isWeekend ? '休日' : '平日'}料金 × {bookingPrice.nights}泊）
                  </span>
                  <span className="font-medium">¥{bookingPrice.basePrice.toLocaleString()}</span>
                </div>
                {bookingPrice.petFees > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">ペット同伴料金</span>
                    <span className="font-medium">¥{bookingPrice.petFees.toLocaleString()}</span>
                  </div>
                )}
                {bookingPrice.optionFees > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">オプション料金</span>
                    <span className="font-medium">¥{bookingPrice.optionFees.toLocaleString()}</span>
                  </div>
                )}
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>合計金額</span>
                    <span className="text-blue-600">
                      ¥{bookingPrice.totalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 注意事項 */}
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">ご予約前の確認事項</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• キャンセルポリシーをご確認ください</li>
                <li>• ペットの予防接種証明書をご持参ください</li>
                <li>• チェックイン時間は16:00〜19:00です</li>
                <li>• 未成年者のみでのご利用はできません</li>
              </ul>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {currentStep > 1 && (
            <Button type="button" onClick={prevStep} variant="outline">
              前へ
            </Button>
          )}
          <div className="ml-auto">
            {currentStep < 3 ? (
              <Button type="button" onClick={nextStep}>
                次へ
              </Button>
            ) : (
              <Button type="submit" className="bg-green-600 hover:bg-green-700">
                予約を確定する
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}