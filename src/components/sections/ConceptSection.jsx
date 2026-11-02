import FadeInUp from '../FadeInUp'

export default function ConceptSection() {
  return (
    <section className="py-20 md:py-28 px-6 max-w-3xl mx-auto text-center">
      <FadeInUp>
        <p className="font-sans text-xs tracking-widest2 text-gold mb-4 uppercase">Concept</p>
      </FadeInUp>
      <FadeInUp delay={0.1}>
        <h2 className="font-serif text-3xl md:text-5xl text-charcoal font-light leading-snug mb-10">
          二人だけの物語を、<br />
          <span className="italic text-pink-rose">美しい一冊</span>に。
        </h2>
      </FadeInUp>
      <FadeInUp delay={0.2}>
        <p className="font-sans text-sm text-charcoal/60 leading-loose max-w-xl mx-auto">
          <span className="block">
            <span className="inline-block">上質で洗練された、</span>
            <span className="inline-block">大人花嫁のための</span>
            <span className="inline-block">ウェディングサービス。</span>
          </span>
          <span className="block">
            <span className="inline-block">どんな会場にもなじむ</span>
            <span className="inline-block">“タイムレスな美しさ”を</span>
            <span className="inline-block">追求しています。</span>
          </span>
          <span className="block">
            <span className="inline-block">理想の一冊を</span>
            <span className="inline-block">かたちにする</span>
            <span className="inline-block">お手伝いをいたします。</span>
          </span>
        </p>
      </FadeInUp>
    </section>
  )
}
