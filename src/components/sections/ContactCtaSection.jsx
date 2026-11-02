import { Link } from 'react-router-dom'
import { Instagram } from 'lucide-react'
import FadeInUp from '../FadeInUp'
import { LINE_URL, INSTAGRAM_URL } from '../../constants'

const samples = [
  { src: '/semi-cover-01-thumb.jpg', alt: '表紙デザインのサンプル' },
  { src: '/semi-profile-01-thumb.jpg', alt: 'プロフィールページのサンプル' },
  { src: '/semi-menu-01-thumb.jpg', alt: 'メニューページのサンプル' },
]

// 文節単位の配列。単語の途中で改行されないよう inline-block で描画する
const reassurances = [
  ['スマートフォンの写真にも', '対応しています'],
  ['納期の目安は', 'カスタムセミオーダーが約3週間、', 'フルオーダーが約2ヶ月です'],
  ['データ納品にも', '対応しています'],
]

export default function ContactCtaSection() {
  return (
    <section className="bg-charcoal text-white py-16 md:py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <FadeInUp>
          <p className="font-sans text-xs tracking-widest2 text-gold-light mb-4 uppercase">Contact</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-6 leading-snug">
            ご準備の合間に、<br />
            <span className="text-pink-soft">LINEでお気軽に。</span>
          </h2>
          <p className="font-sans text-sm text-white/80 leading-loose mb-8">
            <span className="inline-block">ご質問・ご要望など、</span>
            <span className="inline-block">LINEまたはInstagramのDMより</span>
            <span className="inline-block">お気軽にお問い合わせください。</span>
          </p>
          <ul className="font-sans text-xs md:text-sm text-white/80 leading-relaxed space-y-3 border-y border-white/20 py-6 mb-10">
            {reassurances.map((phrases) => (
              <li key={phrases[0]}>
                {phrases.map((phrase) => (
                  <span key={phrase} className="inline-block">{phrase}</span>
                ))}
              </li>
            ))}
          </ul>
          <Link to="/design" className="grid grid-cols-3 gap-2 md:gap-3 mb-10 group">
            {samples.map((sample) => (
              <img
                key={sample.src}
                src={sample.src}
                alt={sample.alt}
                width="640"
                height="512"
                loading="lazy"
                className="w-full h-auto group-hover:opacity-80 transition-opacity duration-300"
              />
            ))}
          </Link>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
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
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-[44px] font-sans text-xs tracking-wider text-white/80 underline underline-offset-4 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            <Instagram size={14} aria-hidden="true" />
            InstagramのDMで相談する
          </a>
        </FadeInUp>
      </div>
    </section>
  )
}
