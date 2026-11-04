import { useState } from 'react'
import FadeInUp from '../components/FadeInUp'
import { designCategories } from '../data/designs'

// 片側ページ（縦長）と見開き（横長）の原寸比率。
// 縦長は見開き約2枚分の高さのため2行分を占め、隣の空きに次の見開きが入るようにする。
const FORMATS = {
  portrait: { aspect: 'aspect-[1429/2000]', width: 1429, height: 2000, rowSpan: 'row-span-2' },
  landscape: { aspect: 'aspect-[2000/1414]', width: 2000, height: 1414, rowSpan: 'row-span-1' },
}

function DesignCard({ design, isSelected, onSelect }) {
  const format = FORMATS[design.orientation]

  return (
    <button
      type="button"
      onClick={() => onSelect(design)}
      aria-pressed={isSelected}
      aria-label={`${design.title}を大きく表示`}
      className={`group block w-full text-left cursor-pointer ${format.rowSpan}`}
    >
      <span
        className={`relative block ${format.aspect} w-full overflow-hidden bg-white border transition-colors duration-300 ${
          isSelected ? 'border-gold ring-1 ring-gold' : 'border-greige/40 group-hover:border-gold-light'
        }`}
      >
        <img
          src={design.thumbnail}
          alt=""
          width={format.width}
          height={format.height}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain"
        />
        <span
          className={`absolute top-0 left-0 px-2 py-1 font-sans text-xs font-medium tracking-wider transition-colors duration-300 ${
            isSelected ? 'bg-gold text-white' : 'bg-white/90 text-charcoal'
          }`}
        >
          {design.id}
        </span>
      </span>
    </button>
  )
}

export default function Design() {
  const [selected, setSelected] = useState(designCategories[0].items[0])

  return (
    <div className="pt-16 md:pt-20 overflow-x-clip">
      {/* Hero */}
      <section className="bg-ivory py-16 md:py-20 px-6 text-center">
        <FadeInUp>
          <p className="font-sans text-xs tracking-widest2 text-gold mb-3 uppercase">Design</p>
          <h1 className="font-serif text-4xl md:text-6xl text-charcoal font-light">
            デザイン一覧
          </h1>
        </FadeInUp>
      </section>

      {/* Semi-Order */}
      <section className="bg-ivory pb-16 md:pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeInUp>
            <p className="font-sans text-sm text-charcoal/80 text-center leading-relaxed mb-10 md:mb-16">
              <span className="block">
                <span className="inline-block">表紙から席次表まで、</span>
                <span className="inline-block">各ページのデザインサンプルを</span>
                <span className="inline-block">ご覧いただけます。</span>
              </span>
              <span className="block">
                <span className="inline-block">８ページの構成になるよう</span>
                <span className="inline-block">選択お願いいたします。</span>
              </span>
              <span className="block">
                <span className="inline-block">（見開きは2ページ分になります）</span>
              </span>
            </p>
          </FadeInUp>

          <div className="flex flex-col lg:flex-row lg:gap-12">
            {/* メインプレビュー: スクロールしても選択中のデザインを確認できるよう追従させる */}
            <div className="sticky top-16 md:top-20 z-30 -mx-6 px-6 py-3 bg-ivory lg:top-24 lg:z-auto lg:mx-0 lg:px-0 lg:py-0 lg:w-7/12 lg:self-start">
              {/* 枠の高さを固定し、縦長・横長の切り替えで下のカードが動かないようにする */}
              <div className="flex items-center justify-center h-[40vh] lg:h-[calc(100vh-10rem)]">
                <img
                  key={selected.id}
                  src={selected.image}
                  alt={selected.title}
                  width={FORMATS[selected.orientation].width}
                  height={FORMATS[selected.orientation].height}
                  className="w-auto h-auto max-w-full max-h-full object-contain bg-white border border-greige/40"
                />
              </div>
              <div className="flex items-center gap-3 mt-2 lg:mt-4" aria-live="polite">
                <span className="bg-gold text-white font-sans text-xs font-medium tracking-wider px-2 py-1">
                  {selected.id}
                </span>
                <p className="font-serif text-sm md:text-lg text-charcoal break-keep">{selected.title}</p>
              </div>
            </div>

            {/* カテゴリ別グリッド */}
            <div className="mt-8 lg:mt-0 lg:w-5/12 space-y-12 md:space-y-16">
              {designCategories.map((category) => (
                <FadeInUp key={category.key} delay={0.05}>
                  <div className="flex items-baseline gap-3 mb-4 pb-4 border-b border-greige/50">
                    <h2 className="font-serif text-xl md:text-2xl text-charcoal font-light">{category.label}</h2>
                    <span className="font-sans text-xs text-gold tracking-widest">{category.labelEn}</span>
                  </div>
                  <p className="font-sans text-sm text-charcoal/80 leading-relaxed mb-5">{category.desc}</p>

                  {/* モバイル: 2列 / sm: 3列 / lg: プレビュー横のカラムに収めて2列 */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 items-start">
                    {category.items.map((design) => (
                      <DesignCard
                        key={design.id}
                        design={design}
                        isSelected={design.id === selected.id}
                        onSelect={setSelected}
                      />
                    ))}
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
