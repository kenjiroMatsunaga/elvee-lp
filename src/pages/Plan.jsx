import { Check, ExternalLink } from 'lucide-react'
import FadeInUp from '../components/FadeInUp'

const LINE_URL = 'https://lin.ee/RGeVi7I'

const plans = [
  {
    id: 'canva',
    badge: '即日納品',
    name: 'Canvaテンプレート',
    nameEn: 'DIY Template',
    price: '¥ 2,500',
    priceNote: '税込',
    description: 'ご自身で制作から印刷まで行っていただくデザインテンプレートです。No.1〜No.5の5種類からお選びください。',
    pages: 'No.1〜No.5',
    features: [
      'お写真の入れ込み・文章変更可',
      'カラー変更可能',
      'スマホ・PCどちらでも操作可',
      '購入後即時納品',
    ],
    note: '※一部素材はCanva有料プラン（Pro）が必要です。無料版でも基本編集は可能ですが、フォントや素材が制限される場合があります。',
    color: 'border-greige',
    bg: 'bg-ivory',
  },
  {
    id: 'semi',
    badge: '人気No.1',
    name: 'カスタムセミオーダー',
    nameEn: 'Semi-Custom',
    price: '¥ 5,000',
    priceNote: '税込〜',
    description: 'デザインをベースにお写真、色味やレイアウトを調整するプランです。',
    pages: 'カスタマイズ対応',
    features: [
      'お好きなデザインを組み合わせ可',
      '写真・色味・レイアウト調整',
      'テキスト変更対応',
    ],
    color: 'border-charcoal',
    bg: 'bg-charcoal',
    featured: true,
  },
  {
    id: 'full',
    badge: null,
    name: 'フルオーダー',
    nameEn: 'Full-Custom',
    price: '¥ 15,000',
    priceNote: '税込〜',
    description: 'ご希望のデザインに合わせ、一から丁寧に作成いたします。',
    pages: '完全オリジナル',
    features: [
      '完全オリジナルデザイン',
      'デザイン・レイアウト自由',
      '写真・文章・カラーすべて対応',
    ],
    color: 'border-greige',
    bg: 'bg-white',
  },
]

const serviceDetails = [
  {
    title: 'Canvaテンプレート',
    price: '¥ 2,500-',
    body: 'ご自身で制作から印刷まで行っていただくデザインテンプレートです。お写真の入れ込み、文章・カラー変更が可能。',
    notes: [
      '※ご利用にはCanvaへの無料登録が必要です。',
      '※テンプレートによっては、一部素材にCanva有料プラン（Pro / ¥1,500/月〜）が必要な場合があります。',
      '※無料版でも基本的な編集（写真・文章差し替え）は可能ですが、一部フォントや素材が有料版限定となる場合があります。その場合は無料素材への変更、またはCanva Proへのアップグレードをご検討ください。',
    ],
  },
  {
    title: 'セミオーダー',
    price: '¥ 5,000-',
    body: 'デザインをベースにお写真、色味やレイアウトを調整するプランです。お好きなデザインを組み合わせることが可能です。',
    note: null,
  },
  {
    title: 'フルオーダー',
    price: '¥ 15,000-',
    body: 'ご希望のデザインに合わせ作成いたします。',
    note: null,
  },
  {
    title: '印刷代行',
    price: '代金引換',
    body: '「プリントパック」様で印刷代行も可能です。部数により料金が異なるため、お問い合わせください。',
    note: null,
  },
]

export default function Plan() {
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
            スタイルや予算に合わせて、3つのプランからお選びいただけます。
          </p>
        </FadeInUp>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, i) => (
            <FadeInUp key={plan.id} delay={i * 0.1}>
              <div
                className={`relative h-full flex flex-col border-2 ${plan.color} ${plan.bg} ${
                  plan.featured ? 'md:-mt-4 md:mb-4 shadow-xl' : ''
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

                  {/* Price */}
                  <div className="mb-6">
                    <div className={`font-serif text-4xl font-light ${plan.featured ? 'text-white' : 'text-charcoal'}`}>
                      {plan.price}
                    </div>
                    <p className={`font-sans text-xs mt-1 ${plan.featured ? 'text-white/50' : 'text-charcoal/50'}`}>
                      {plan.priceNote} / {plan.pages}
                    </p>
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
                  {plan.note && (
                    <p className={`font-sans text-xs mb-6 ${plan.featured ? 'text-white/40' : 'text-charcoal/40'}`}>
                      {plan.note}
                    </p>
                  )}

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
      </section>

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
                    <h3 className="font-serif text-xl text-charcoal font-light mb-1">{item.title}</h3>
                    <p className="font-serif text-base text-gold">{item.price}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-sans text-sm text-charcoal/60 leading-loose">{item.body}</p>
                    {item.notes && (
                      <ul className="mt-3 space-y-1.5">
                        {item.notes.map((n, ni) => (
                          <li key={ni} className="font-sans text-xs text-charcoal/45 leading-relaxed">
                            {n}
                          </li>
                        ))}
                      </ul>
                    )}
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
                  label: 'A｜印刷代行ご希望の方',
                  text: 'データを入稿し印刷の手配を行います。印刷会社よりご自宅（またはご指定の場所）へ直接発送されます。代金引換でお受取りください。必ずすぐに中身のご確認をお願いいたします。',
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
