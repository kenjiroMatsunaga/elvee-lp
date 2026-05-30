import { useState } from 'react'
import { ZoomIn } from 'lucide-react'
import FadeInUp from '../components/FadeInUp'
import ImageModal from '../components/ImageModal'

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
    images: ['/semi-profile-01.png'],
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
  {
    label: 'フリーページ',
    labelEn: 'Free Page',
    desc: 'ラブストーリーやフォトコラージュなど、お二人らしさを自由に表現できるページです。',
    images: ['/semi-freepage-01.png'],
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
  const [semiModal, setSemiModal] = useState(null)

  return (
    <div className="pt-16 md:pt-20 overflow-x-hidden">
      {/* Hero */}
      <section className="bg-ivory py-16 md:py-20 px-6 text-center">
        <FadeInUp>
          <p className="font-sans text-xs tracking-widest2 text-gold mb-3 uppercase">Design</p>
          <h1 className="font-serif text-4xl md:text-6xl text-charcoal font-light mb-6">
            デザイン一覧
          </h1>
          <p className="font-sans text-sm text-charcoal/60 leading-relaxed max-w-sm mx-auto md:max-w-none">
            カスタムセミオーダーのデザインサンプルをご覧いただけます。
          </p>
        </FadeInUp>
      </section>

      {/* Semi-Order */}
      <section className="bg-ivory py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeInUp>
            <p className="font-sans text-xs tracking-widest2 text-gold text-center mb-3 uppercase">Semi-Custom</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center font-light mb-4">
              カスタムセミオーダー
            </h2>
            <p className="font-sans text-sm text-charcoal/60 text-center leading-relaxed mb-12 md:mb-16">
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
                  <p className="font-sans text-sm text-charcoal/60 leading-relaxed mb-5">{section.desc}</p>

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
