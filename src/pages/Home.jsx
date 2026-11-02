import { Link } from 'react-router-dom'
import { Sparkles, Heart, Camera } from 'lucide-react'
import FadeInUp from '../components/FadeInUp'
import Hero from '../components/sections/Hero'


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

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />

      {/* Concept */}
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

      {/* Features */}
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

      {/* CTA Banner */}
      <section className="bg-charcoal text-white py-16 md:py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <FadeInUp>
            <p className="font-sans text-xs tracking-widest2 text-gold-light mb-4 uppercase">Contact</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-6 leading-snug">
              まずは、お気軽に<br />
              <span className="italic text-pink-soft">ご相談ください。</span>
            </h2>
            <p className="font-sans text-sm text-white/50 leading-loose mb-10">
              ご質問・ご要望など、LINEまたはInstagramのDMよりお気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://lin.ee/RGeVi7I"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#06C755] text-white text-sm font-sans tracking-widest px-8 py-4 min-h-[52px] hover:bg-[#06C755]/80 transition-colors duration-300 cursor-pointer"
              >
                LINEでお問い合わせ
              </a>
              <Link
                to="/plan"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-sans tracking-widest px-8 py-4 min-h-[52px] hover:border-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                プランを確認する
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  )
}
