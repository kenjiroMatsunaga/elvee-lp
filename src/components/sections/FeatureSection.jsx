import { Sparkles, Heart, Camera } from 'lucide-react'
import FadeInUp from '../FadeInUp'

const features = [
  {
    icon: Camera,
    title: '写真が主役のデザイン',
    body: 'お二人の大切な写真を最も美しく見せるレイアウトを、一枚一枚丁寧に設計します。',
  },
  {
    icon: Heart,
    title: '寄り添うサポート',
    body: '忙しいプレ花嫁様のために、LINEやDMで気軽にご相談いただける体制を整えています。',
  },
  {
    icon: Sparkles,
    title: 'こだわりの仕上がり',
    body: 'トレンドを押さえつつ、時を経ても色あせないエレガントなデザインをご提案します。',
  },
]

export default function FeatureSection() {
  return (
    <section className="bg-ivory py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeInUp>
          <p className="font-sans text-xs tracking-widest2 text-gold text-center mb-3 uppercase">Features</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center font-light mb-16">
            Elveeが選ばれる理由
          </h2>
        </FadeInUp>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {features.map((f, i) => (
            <FadeInUp key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-6 bg-pink-blush rounded-full flex items-center justify-center">
                  <f.icon size={20} className="text-pink-rose" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-charcoal font-light mb-3">{f.title}</h3>
                <p className="font-sans text-sm text-charcoal/60 leading-loose">{f.body}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
