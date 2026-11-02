import { Link } from 'react-router-dom'
import FadeInUp from '../FadeInUp'

export default function ContactCtaSection() {
  return (
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
  )
}
