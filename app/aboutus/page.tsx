import Products from "@/components/Products"
import { Share2, Printer } from "lucide-react"

export default function AshyoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-6 md:grid-cols-[300px,1fr]">
          {/* Sidebar */}
          <div className="rounded-lg bg-gray-100 p-6">
            <nav className="space-y-8">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Ashyo haqida</h2>
                <p className="mt-2 text-sm text-gray-600">Ashyo 2022 yilda Toshkent shahrida tashkil etylgan.</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">Muddatli to'lov</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Ashyoda barcha elektronika maishiy texnikalar uchun qulay onlayn to'lov rejasi
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">To'lov usullari</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Siz uchun qulay usulda to'lang do'konda, Cilik, Payme orqali.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">Yetkazib berish</h2>
                <p className="mt-2 text-sm text-gray-600">Ashyoda tovarlarni yetkazib berish shartlari.</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">Tavorlarga kafolat</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Ashyo onlayn do'konining kafolati va qaytarilish haqida hamma narsani bilib oling
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">Yordam</h2>
                <p className="mt-2 text-sm text-gray-600">Tushumagan narsalaringiz bo'lsa savollaringizni bering</p>
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Ashyo haqida</h1>

            <div className="aspect-[2/1] overflow-hidden rounded-lg bg-[#6366f1]">
              <div className="flex h-full items-center justify-center">
                <h1 className="text-6xl font-bold text-white">Ashyo</h1>
              </div>
            </div>

            <div className="space-y-4 text-gray-600">
              <p>
                Ashyo - bozor narhid maishiy texnika va electronics dukonlari qurilmalari. 2 oydan davomid mizhozlarga
                keng assortimentdagi mahsulotlarni, kafolatli va benson hizmatni taklif etib keladi.
              </p>

              <p>
                Ashyo 2022 yilda Toshkent shahrida tashkil etylgan. Bugungi kunga qadar jami poytaxtda va viloyatlarda
                26 that dukon faoliyat ko'rsatmoqda.
              </p>

              <p>
                Siz tovarlarni har kanday kulay usulda sotib olishingiz mumkin: tarmoq dukonlarida yoki website. Maishiy
                uchun texnikasi onlayn b'lib t'lov rezhashi mavjud. Ruyhatdan utish uchun zarur bulgan huzhzhat - bu
                pasport.
              </p>

              <p>
                Yuridik shahslar uchun pul o'tkazish yo'li bilan, eng muximi - qo'shimcha to'lovlarsiz sotib olish
                mumkin.
              </p>
            </div>

            <div className="flex gap-4">
              <button className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <Printer className="h-5 w-5" />
              </button>
              <button className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Products title="Last seen Products" API="/product-items"/>
    </div>
    
  )
}

