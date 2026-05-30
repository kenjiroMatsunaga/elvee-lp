import { useState } from 'react'
import { Check, ExternalLink, ChevronRight } from 'lucide-react'
import FadeInUp from '../components/FadeInUp'
import ImageModal from '../components/ImageModal'

const LINE_URL = 'https://lin.ee/RGeVi7I'

const plans = [
  {
    id: 'semi',
    badge: '人気No.1',
    name: 'カスタムセミオーダー',
    nameEn: 'Semi-Custom',
    description: 'デザインをベースにお写真、色味やレイアウトを調整するプランです。',
    features: [
      'お好きなデザインを組み合わせ可',
      '写真・色味・レイアウト調整',
      'テキスト変更対応',
    ],
    priceImage: '/semi-custom.png',
    color: 'border-charcoal',
    bg: 'bg-charcoal',
    featured: true,
  },
  {
    id: 'full',
    badge: null,
    name: 'フルオーダー',
    nameEn: 'Full-Custom',
    description: 'ご希望のデザインに合わせ、一から丁寧に作成いたします。',
    features: [
      '完全オリジナルデザイン',
      'デザイン・レイアウト自由',
      '写真・文章・カラーすべて対応',
    ],
    priceImage: '/full-custom.png',
    color: 'border-greige',
    bg: 'bg-white',
  },
]

const serviceDetails = [
  {
    title: 'セミオーダー',
    body: 'デザインをベースにお写真、色味やレイアウトを調整するプランです。お好きなデザインを組み合わせることが可能です。',
  },
  {
    title: 'フルオーダー',
    body: 'ご希望のデザインに合わせ作成いたします。',
  },
]

export default function Plan() {
  const [priceModal, setPriceModal] = useState(null)

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="bg-ivory py-20 px-6 text-center">
        <FadeInUp>
          <p className="font-sans text-xs tracking-widest2 text-gold mb-3 uppercase">Price & Plan</p>
          <h1 className="font-serif text-4xl md:text-6xl text-charcoal font-light mb-6">
            プラン・料金
          </h1>
          <p className="font-sans text-sm text-charcoal/60 leading-loose max-w-lg mx-auto">
            スタイルや予算に合わせて、2つのプランからお選びいただけます。
          </p>
        </FadeInUp>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {plans.map((plan, i) => (
              <FadeInUp key={plan.id} delay={i * 0.1}>
                <div
                  className={`relative h-full flex flex-col border-2 ${plan.color} ${plan.bg} ${
                    plan.featured ? 'shadow-xl' : ''
                  }`}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-[10px] font-sans tracking-widest ${
                      plan.featured ? 'bg-gold text-white' : 'bg-pink-rose text-white'
                    }`}>
                      {plan.badge}
                    </div>
                  )}

                  <div className="p-8 flex-1 flex flex-col">
                    {/* Plan Name */}
                    <div className="mb-6">
                      <p className={`font-sans text-[10px] tracking-widest2 mb-1 ${plan.featured ? 'text-white/50' : 'text-gold'}`}>
                        {plan.nameEn}
                      </p>
                      <h2 className={`font-serif text-2xl font-light ${plan.featured ? 'text-white' : 'text-charcoal'}`}>
                        {plan.name}
                      </h2>
                    </div>

                    {/* Description */}
                    <p className={`font-sans text-sm leading-loose mb-8 ${plan.featured ? 'text-white/70' : 'text-charcoal/60'}`}>
                      {plan.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6 flex-1">
                      {plan.features.map((f, fi) => (
                        <li key={fi} className={`flex items-start gap-3 font-sans text-sm ${plan.featured ? 'text-white/80' : 'text-charcoal/70'}`}>
                          <Check size={14} className={`mt-0.5 flex-shrink-0 ${plan.featured ? 'text-gold-light' : 'text-gold'}`} strokeWidth={2} />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* 金額詳細ボタン */}
                    <button
                      onClick={() => setPriceModal(plan.priceImage)}
                      className={`flex items-center justify-center gap-2 text-sm font-sans tracking-widest py-4 min-h-[52px] transition-all duration-300 cursor-pointer group mb-3 border ${
                        plan.featured
                          ? 'border-white/30 text-white/80 hover:border-white/60 hover:text-white'
                          : 'border-greige text-charcoal/60 hover:border-charcoal/40 hover:text-charcoal'
                      }`}
                    >
                      金額詳細はこちら
                      <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                    </button>

                    {/* CTA */}
                    <a
                      href={LINE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 text-sm font-sans tracking-widest py-4 min-h-[52px] transition-all duration-300 cursor-pointer group ${
                        plan.featured
                          ? 'bg-gold text-white hover:bg-gold/80'
                          : 'bg-charcoal text-white hover:bg-charcoal/80'
                      }`}
                    >
                      LINEでお問い合わせ
                      <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp delay={0.3}>
            <p className="font-sans text-xs text-charcoal/40 text-center mt-8 leading-loose">
              ※ 価格は予告なく変更する場合があります。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Price Detail Modal */}
      {priceModal && (
        <ImageModal
          images={[priceModal]}
          currentIndex={0}
          onClose={() => setPriceModal(null)}
          onPrev={() => {}}
          onNext={() => {}}
        />
      )}

      {/* Service Details */}
      <section className="bg-ivory py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInUp>
            <p className="font-sans text-xs tracking-widest2 text-gold text-center mb-3 uppercase">Details</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center font-light mb-16">
              サービス詳細
            </h2>
          </FadeInUp>
          <div className="space-y-px">
            {serviceDetails.map((item, i) => (
              <FadeInUp key={i} delay={i * 0.1}>
                <div className="bg-white p-8 md:p-10 grid md:grid-cols-3 gap-4 md:gap-6">
                  <div>
                    <h3 className="font-serif text-xl text-charcoal font-light">{item.title}</h3>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-sans text-sm text-charcoal/60 leading-loose">{item.body}</p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <FadeInUp>
          <p className="font-sans text-xs tracking-widest2 text-gold text-center mb-3 uppercase">Flow</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center font-light mb-3">
            ご注文の流れ
          </h2>
          <p className="font-sans text-sm text-charcoal/50 text-center leading-loose mb-16">
            制作から納品までのスケジュール
          </p>
        </FadeInUp>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-greige/40" />
          {[
            {
              step: '01',
              timing: '納品希望日の約2ヶ月前',
              title: 'ご注文・ヒアリング',
              body: 'ご希望のプランに合わせて、まずは公式LINEよりお申し込みください。ご注文受付後、大まかなページ構成や素材（お写真）の提出方法についてご案内いたします。',
              note: null,
            },
            {
              step: '02',
              timing: '納品希望日の約1.5ヶ月前',
              title: 'データ提出・お支払い',
              body: 'オーダーシートへのご回答と、使用するすべての素材データをお送りいただき、ページ構成やデザインの方向性をすり合わせします。ご入金もこの期間内にお願いいたします。',
              note: '※スムーズな制作のため、早急なご提出をお願いしております。',
            },
            {
              step: '03',
              timing: 'すべてのデータをお預かりしてから約2週間',
              title: 'デザイン初稿のご確認',
              body: 'お預かりした素材とヒアリングをもとにデザインを制作し、最初のデータ（PDFまたは画像）をお送りいたします。全体のレイアウトや雰囲気をご確認ください。',
              note: null,
            },
            {
              step: '04',
              timing: '初稿提出から約1〜2週間',
              title: '修正・最終確認（校了）',
              body: 'ご要望をもとに修正を行います。すべての修正が終わり、「印刷に進めてOK」というお返事（校了）をいただいた時点でデザインを確定いたします。',
              note: '※確定後の修正はお受付できませんのでご注意ください。',
            },
            {
              step: '05',
              timing: 'デザイン確定から約1週間〜10日',
              title: '印刷手配・納品',
              body: null,
              deliveryOptions: [
                {
                  label: 'A｜印刷ご希望の方',
                  text: 'データを入稿し印刷の手配を行います。印刷会社よりご自宅（またはご指定の場所）へ直接発送されます。必ずすぐに中身のご確認をお願いいたします。',
                },
                {
                  label: 'B｜データ納品ご希望の方',
                  text: 'PDFにてデータ納品いたします。お渡ししたデータを使用し、ご自身で印刷会社へ入稿手配をお願いいたします。印刷会社の納期には十分ご注意ください。',
                },
              ],
              note: null,
            },
          ].map((item, i) => (
            <FadeInUp key={i} delay={i * 0.08}>
              <div className="flex gap-6 md:gap-8 mb-10 md:mb-12 relative">
                {/* Step circle */}
                <div className="flex-shrink-0 w-12 h-12 bg-white border border-greige flex items-center justify-center rounded-full z-10">
                  <span className="font-serif text-sm text-gold">{item.step}</span>
                </div>
                <div className="pt-2 pb-2 flex-1">
                  {/* Timing badge */}
                  <p className="font-sans text-[11px] text-gold/80 tracking-wider mb-1">目安：{item.timing}</p>
                  <h3 className="font-serif text-xl text-charcoal font-light mb-3">{item.title}</h3>
                  {item.body && (
                    <p className="font-sans text-sm text-charcoal/60 leading-loose mb-3">{item.body}</p>
                  )}
                  {/* Delivery options (step 05) */}
                  {item.deliveryOptions && (
                    <div className="space-y-4 mt-2">
                      {item.deliveryOptions.map((opt, oi) => (
                        <div key={oi} className="bg-ivory border-l-2 border-gold/40 pl-4 py-3">
                          <p className="font-sans text-xs tracking-wider text-gold mb-1.5">{opt.label}</p>
                          <p className="font-sans text-sm text-charcoal/60 leading-loose">{opt.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {item.note && (
                    <p className="font-sans text-xs text-charcoal/40 mt-2 leading-relaxed">{item.note}</p>
                  )}
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </section>

    </div>
  )
}
