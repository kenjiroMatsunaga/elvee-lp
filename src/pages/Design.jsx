import { useState } from 'react'
import FadeInUp from '../components/FadeInUp'
import { designCategories } from '../data/designs'

function DesignCard({ design, isSelected, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(design)}
      aria-pressed={isSelected}
      aria-label={`${design.title}を大きく表示`}
      className="group block w-full text-left cursor-pointer"
    >
      <span
        className={`relative block aspect-[2000/1414] overflow-hidden bg-white border transition-colors duration-300 ${
          isSelected ? 'border-gold ring-1 ring-gold' : 'border-greige/40 group-hover:border-gold-light'
        }`}
      >
        <img
          src={design.image}
          alt=""
          width="2000"
          height="1414"
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
      <span className="block mt-1.5 font-sans text-xs text-charcoal/80">
        {design.templateNo}
        {design.side && ` ・ ${design.side}`}
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
              <div className="aspect-[2000/1414] max-h-[50vh] lg:max-h-none bg-white border border-greige/40">
                <img
                  src={selected.image}
                  alt={selected.title}
                  width="2000"
                  height="1414"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center gap-3 mt-2 lg:mt-4" aria-live="polite">
                <span className="bg-gold text-white font-sans text-xs font-medium tracking-wider px-2 py-1">
                  {selected.id}
                </span>
                <p className="font-serif text-sm md:text-lg text-charcoal break-keep">{selected.title}</p>
                <p className="ml-auto shrink-0 font-sans text-xs text-charcoal/80">
                  {selected.templateNo}
                  {selected.side && ` ・ ${selected.side}`}
                </p>
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
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-x-3 gap-y-4">
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
