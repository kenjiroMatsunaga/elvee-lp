import FadeInUp from '../FadeInUp'

export default function ConceptSection() {
  return (
    <section className="py-20 md:py-28 px-6 max-w-3xl mx-auto text-center">
      <FadeInUp>
        <p className="font-sans text-xs tracking-widest2 text-gold mb-4 uppercase">Concept</p>
      </FadeInUp>
      <FadeInUp delay={0.1}>
        <h2 className="font-serif text-3xl md:text-5xl text-charcoal font-light leading-snug mb-10">
          二人だけの物語を、<br className="hidden md:block" />
          <span className="italic text-pink-rose">美しい一冊</span>に。
        </h2>
      </FadeInUp>
      <FadeInUp delay={0.2}>
        <p className="font-sans text-sm text-charcoal/60 leading-loose max-w-xl mx-auto">
          韓国っぽ×大人かわいいをコンセプトに、洗練された余白と繊細なタイポグラフィで
          お二人の想いを形にします。世界にひとつだけのプロフィールブックで、
          大切なゲストへの最高のおもてなしを。
        </p>
      </FadeInUp>
    </section>
  )
}
