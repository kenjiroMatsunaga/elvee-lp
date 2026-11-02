import FadeInUp from '../FadeInUp'

// title と body は文節単位の配列。単語の途中で改行されないよう inline-block で描画する
const features = [
  {
    no: '01',
    title: ['写真が主役の', 'デザイン'],
    body: ['お二人の大切な写真を', '最も美しく見せる', 'レイアウトを、', '一枚一枚丁寧に', '設計します。'],
  },
  {
    no: '02',
    title: ['寄り添う', 'サポート'],
    body: ['忙しいプレ花嫁様のために、', 'LINEやDMで', '気軽にご相談いただける', '体制を整えています。'],
  },
  {
    no: '03',
    title: ['手元に残したくなる、', '確かな品質'],
    body: ['どんな会場にもなじむ、', '時を経ても色あせない', 'デザインをご提案します。'],
  },
]

export default function FeatureSection() {
  return (
    <section className="bg-ivory py-16 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeInUp>
          <p className="font-sans text-xs tracking-widest2 text-gold text-center mb-3 uppercase">Features</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center font-light mb-16">
            Elveeが選ばれる理由
          </h2>
        </FadeInUp>
        <div className="grid lg:grid-cols-3 gap-14 lg:gap-12">
          {features.map((f, i) => (
            <FadeInUp key={f.no} delay={i * 0.1}>
              <div className="text-center">
                <p className="font-serif italic text-2xl text-gold mb-4" aria-hidden="true">{f.no}</p>
                <div className="w-8 h-px mx-auto mb-6 bg-gold-light" />
                <h3 className="font-serif text-xl lg:text-lg text-charcoal font-light mb-3">
                  {f.title.map((phrase) => (
                    <span key={phrase} className="inline-block">{phrase}</span>
                  ))}
                </h3>
                <p className="font-sans text-sm text-charcoal/80 leading-loose">
                  {f.body.map((phrase) => (
                    <span key={phrase} className="inline-block">{phrase}</span>
                  ))}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
