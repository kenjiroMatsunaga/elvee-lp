import { Link } from 'react-router-dom'
import FadeInUp from '../FadeInUp'
import { LINE_URL } from '../../constants'

export default function ContactCtaSection() {
  return (
    <section className="bg-charcoal text-white py-16 md:py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <FadeInUp>
          <h2 className="font-serif text-xs tracking-widest2 text-gold-light mb-4 uppercase">Contact</h2>
          <p className="font-sans text-sm text-white/80 leading-loose mb-10 md:mb-12">
            <span className="inline-block">ご質問・ご要望など、</span>
            <span className="inline-block">公式LINEより</span>
            <span className="inline-block">お気軽にお問い合わせください。</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#06C755] text-white text-sm font-sans font-medium tracking-widest px-8 py-4 min-h-[52px] hover:brightness-90 transition-all duration-300 cursor-pointer"
            >
              LINEでお問い合わせ
            </a>
            <Link
              to="/design"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-sans tracking-widest px-8 py-4 min-h-[52px] hover:border-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              デザインサンプルを見る
            </Link>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
