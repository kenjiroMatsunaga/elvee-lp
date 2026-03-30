import { useState } from 'react'
import { ZoomIn } from 'lucide-react'
import FadeInUp from '../components/FadeInUp'
import ImageModal from '../components/ImageModal'

const templates = [
  {
    id: 1,
    name: 'No.1',
    subtitle: 'シンプル・モダン',
    description: '太めのセリフ体と余白が映える、クリーンなホワイトデザイン。どんな式場・衣装にも馴染む定番スタイル。',
    tags: ['ホワイト', 'シンプル', 'セリフ体'],
    image: '/template-01.png',
    details: [
      '/template-01-detail-01.png',
      '/template-01-detail-02.png',
      '/template-01-detail-03.png',
      '/template-01-detail-04.png',
    ],
    border: 'border-gray-100',
    price: '¥ 2,500',
  },
  {
    id: 2,
    name: 'No.2',
    subtitle: 'アーチ・モノトーン',
    description: 'アーチ型のフォトフレームとモノトーンの配色が洗練された印象を与えるスタイル。スタイリッシュ・シックな雰囲気に。',
    tags: ['モノトーン', 'アーチ', 'スタイリッシュ'],
    image: '/template-02.png',
    details: [
      '/template-02-detail-01.png',
      '/template-02-detail-02.png',
      '/template-02-detail-03.png',
      '/template-02-detail-04.png',
    ],
    border: 'border-gray-100',
    price: '¥ 2,500',
  },
  {
    id: 3,
    name: 'No.3',
    subtitle: 'ポップ・キュート',
    description: 'クリームとパープルの明るい配色に、ハート型フォトフレームと3Dイラストアクセントが可愛らしいポップデザイン。',
    tags: ['ポップ', 'カラフル', 'キュート'],
    image: '/template-03.png',
    details: [
      '/template-03-detail-01.png',
      '/template-03-detail-02.png',
      '/template-03-detail-03.png',
      '/template-03-detail-04.png',
    ],
    border: 'border-purple-100',
    price: '¥ 2,500',
  },
  {
    id: 4,
    name: 'No.4',
    subtitle: 'ウォーターカラー・ロマンティック',
    description: 'ピンクのハートモチーフとウォーターカラーの背景が映える、ロマンティックなフェミニンデザイン。',
    tags: ['ピンク', 'ウォーターカラー', 'ロマンティック'],
    image: '/template-04.png',
    details: [
      '/template-04-detail-01.png',
      '/template-04-detail-02.png',
      '/template-04-detail-03.png',
      '/template-04-detail-04.png',
    ],
    border: 'border-pink-100',
    price: '¥ 2,500',
  },
  {
    id: 5,
    name: 'No.5',
    subtitle: 'フォトリッチ・エディトリアル',
    description: '複数の写真を大きくレイアウトした、写真映え重視のエディトリアルスタイル。お気に入りの写真をたっぷり使いたい方に。',
    tags: ['フォトリッチ', 'エディトリアル', 'ベージュ'],
    image: '/template-05.png',
    details: [
      '/template-05-detail-01.png',
      '/template-05-detail-02.png',
      '/template-05-detail-03.png',
      '/template-05-detail-04.png',
    ],
    border: 'border-amber-100',
    price: '¥ 2,500',
  },
]

const semiOrderSections = [
  {
    label: '表紙・裏表紙',
    labelEn: 'Cover',
    desc: 'プロフィールブックの顔となる表紙と裏表紙。お二人の雰囲気に合わせたデザインをご提案します。',
    images: ['/semi-cover-01.png', '/semi-cover-02.png'],
  },
  {
    label: '挨拶',
    labelEn: 'Greeting',
    desc: 'ゲストへの感謝の気持ちを込めた挨拶ページ。お二人らしい言葉で彩ります。',
    images: ['/semi-greeting-01.png'],
  },
  {
    label: 'プロフィール',
    labelEn: 'Profile',
    desc: 'お二人それぞれのプロフィールをおしゃれなレイアウトで紹介するページです。',
    images: ['/semi-profile-01.png', '/semi-profile-02.png'],
  },
  {
    label: 'Q＆A',
    labelEn: 'Q&A',
    desc: 'ゲストに楽しんでもらえるQ&Aページ。お二人の意外な一面を披露しましょう。',
    images: ['/semi-qa-01.png'],
  },
  {
    label: 'MENU',
    labelEn: 'Menu',
    desc: '当日のお料理やドリンクをエレガントに紹介するメニューページです。',
    images: ['/semi-menu-01.png'],
  },
  {
    label: '席次表',
    labelEn: 'Seating List',
    desc: 'ゲストのお席をわかりやすく案内する席次表。デザインに統一感を持たせます。',
    images: ['/semi-seating-01.png'],
  },
]

// 共通の画像ボックスコンポーネント
function ImageBox({ src, alt, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full aspect-[4/3] bg-ivory border border-greige/40 overflow-hidden relative group cursor-pointer block"
      aria-label={`${alt}を拡大表示`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 p-3">
          <ZoomIn size={18} className="text-charcoal" />
        </div>
      </div>
    </button>
  )
}

export default function Design() {
  const [tmplModal, setTmplModal] = useState(null)
  const [semiModal, setSemiModal] = useState(null)

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="bg-ivory py-16 md:py-20 px-6 text-center">
        <FadeInUp>
          <p className="font-sans text-xs tracking-widest2 text-gold mb-3 uppercase">Design</p>
          <h1 className="font-serif text-4xl md:text-6xl text-charcoal font-light mb-6 break-keep">
            デザイン一覧
          </h1>
          <p className="font-sans text-sm text-charcoal/60 md:whitespace-nowrap">
            Canvaテンプレートとカスタムセミオーダーのデザインサンプルをご覧いただけます。
          </p>
        </FadeInUp>
      </section>

      {/* Canva Templates */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeInUp>
            <p className="font-sans text-xs tracking-widest2 text-gold text-center mb-3 uppercase">Canva Templates</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center font-light mb-4 break-keep">
              Canvaテンプレート
            </h2>
            <p className="font-sans text-sm text-charcoal/60 text-center leading-relaxed mb-12 md:mb-16 break-keep">
              購入後すぐに編集可能。スマホからでも簡単にカスタマイズできます。
            </p>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {templates.map((tmpl, i) => (
              <FadeInUp key={tmpl.id} delay={i * 0.08} className="h-full">
                <div className={`bg-white border ${tmpl.border} group overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full`}>
                  {/* サムネイル — 統一アスペクト比 4:3 */}
                  <button
                    onClick={() => setTmplModal({ images: tmpl.details, index: 0 })}
                    className="w-full aspect-[4/3] overflow-hidden relative bg-ivory cursor-pointer block flex-shrink-0"
                    aria-label={`${tmpl.name} の詳細を見る`}
                  >
                    <img
                      src={tmpl.image}
                      alt={`Canvaテンプレート ${tmpl.name} — ${tmpl.subtitle}`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 p-3">
                        <ZoomIn size={20} className="text-charcoal" />
                      </div>
                    </div>
                  </button>

                  <div className="p-4 sm:p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-serif text-lg text-charcoal font-light">{tmpl.name}</h3>
                        <p className="font-sans text-xs text-gold tracking-wider">{tmpl.subtitle}</p>
                      </div>
                      <p className="font-serif text-base text-charcoal flex-shrink-0 ml-2">{tmpl.price}</p>
                    </div>
                    <p className="font-sans text-xs text-charcoal/60 leading-loose mb-4 h-[4.5rem] overflow-hidden">{tmpl.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {tmpl.tags.map(tag => (
                        <span key={tag} className="font-sans text-[10px] tracking-wider text-charcoal/50 border border-greige px-2 py-0.5">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => setTmplModal({ images: tmpl.details, index: 0 })}
                      className="flex items-center justify-center gap-2 w-full bg-charcoal text-white text-sm font-sans tracking-widest py-4 min-h-[52px] hover:bg-charcoal/80 transition-colors duration-300 cursor-pointer mt-auto group/btn"
                    >
                      テンプレートを見る
                      <ZoomIn size={14} className="group-hover/btn:scale-110 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Semi-Order */}
      <section className="bg-ivory py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeInUp>
            <p className="font-sans text-xs tracking-widest2 text-gold text-center mb-3 uppercase">Semi-Custom</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center font-light mb-4 break-keep">
              カスタムセミオーダー
            </h2>
            <p className="font-sans text-sm text-charcoal/60 text-center leading-relaxed mb-12 md:mb-16 break-keep">
              表紙から席次表まで、各ページのデザインサンプルをご覧いただけます。
            </p>
          </FadeInUp>

          <div className="space-y-12 md:space-y-16">
            {semiOrderSections.map((section, si) => (
              <FadeInUp key={si} delay={0.05}>
                <div>
                  <div className="flex items-baseline gap-3 mb-4 pb-4 border-b border-greige/50">
                    <h3 className="font-serif text-xl md:text-2xl text-charcoal font-light">{section.label}</h3>
                    <span className="font-sans text-xs text-gold tracking-widest">{section.labelEn}</span>
                  </div>
                  <p className="font-sans text-sm text-charcoal/60 leading-relaxed mb-5 break-keep">{section.desc}</p>

                  {/* モバイル: 1列 / sm以上: 2列 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {section.images.map((src, ii) => (
                      <ImageBox
                        key={ii}
                        src={src}
                        alt={`${section.label} サンプル ${ii + 1}`}
                        onClick={() => setSemiModal({ images: [src], index: 0 })}
                      />
                    ))}
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>



      {/* Image Modal — Canva */}
      {tmplModal && (
        <ImageModal
          images={tmplModal.images}
          currentIndex={tmplModal.index}
          onClose={() => setTmplModal(null)}
          onPrev={() => setTmplModal(p => ({ ...p, index: (p.index - 1 + p.images.length) % p.images.length }))}
          onNext={() => setTmplModal(p => ({ ...p, index: (p.index + 1) % p.images.length }))}
        />
      )}

      {/* Image Modal — Semi-order */}
      {semiModal && (
        <ImageModal
          images={semiModal.images}
          currentIndex={semiModal.index}
          onClose={() => setSemiModal(null)}
          onPrev={() => setSemiModal(p => ({ ...p, index: (p.index - 1 + p.images.length) % p.images.length }))}
          onNext={() => setSemiModal(p => ({ ...p, index: (p.index + 1) % p.images.length }))}
        />
      )}
    </div>
  )
}
