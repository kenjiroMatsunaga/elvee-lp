import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Heart, Camera } from 'lucide-react'
import FadeInUp from '../components/FadeInUp'


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
      {/* Hero — Full-bleed logo background */}
      {/* モバイル: 画像のみ表示 (h-[62vh]) / PC: フルハイト＋テキストオーバーレイ */}
      <section className="relative h-[62vh] md:min-h-dvh flex flex-col items-end justify-end bg-ivory overflow-hidden">

        {/* Background image — full cover with Ken Burns zoom */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <img
            src="/elvee-logo.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
            draggable={false}
          />
        </motion.div>

        {/* Edge blending */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Top */}
          <div className="absolute top-0 left-0 right-0 h-32 md:h-40 bg-gradient-to-b from-ivory via-ivory/60 to-transparent" />
          {/* Bottom — モバイル: 下端のみ軽くフェード / PC: テキスト可読性のため元の強さ */}
          <div className="absolute bottom-0 left-0 right-0 h-16 md:h-56 bg-gradient-to-t from-ivory via-ivory/70 to-transparent" />
          {/* Left */}
          <div className="absolute top-0 left-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-ivory to-transparent" />
          {/* Right */}
          <div className="absolute top-0 right-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-ivory to-transparent" />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-ivory/10" />

        {/* Bottom content — PC only */}
        <div className="hidden md:flex relative z-20 w-full flex-col items-center pb-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="text-center mb-8 px-4"
          >
            <p className="font-serif text-2xl text-charcoal/70 font-light tracking-widest mb-2">
              大切な思い出を、一番美しい形で。
            </p>
            <p className="font-sans text-sm text-charcoal/45 font-light leading-loose">
              写真が主役の大人かわいいプロフィールブック。<br />
              忙しいプレ花嫁様に寄り添うレイアウトをご提案します。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.8 }}
            className="flex flex-row gap-3"
          >
            <Link
              to="/plan"
              className="inline-flex items-center justify-center gap-2 bg-charcoal text-white text-sm font-sans tracking-widest px-8 py-4 min-h-[52px] hover:bg-charcoal/80 transition-all duration-300 cursor-pointer group"
            >
              プランを見る
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/design"
              className="inline-flex items-center justify-center gap-2 border border-charcoal/30 text-charcoal text-sm font-sans tracking-widest px-8 py-4 min-h-[52px] hover:border-charcoal hover:bg-white/60 transition-all duration-300 cursor-pointer backdrop-blur-sm"
            >
              デザインを見る
            </Link>
          </motion.div>
        </div>

        {/* Scroll hint — PC only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-20"
        >
          <span className="font-sans text-[10px] tracking-widest2 text-charcoal/25">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-charcoal/15 to-transparent"
          />
        </motion.div>
      </section>

      {/* Mobile tagline + CTA — ヒーロー下に配置（モバイルのみ表示） */}
      <section className="md:hidden bg-ivory px-6 pt-10 pb-12 text-center">
        <FadeInUp>
          <p className="font-serif text-xl text-charcoal/70 font-light tracking-wider mb-3">
            大切な思い出を、一番美しい形で。
          </p>
          <p className="font-sans text-sm text-charcoal/45 font-light leading-loose mb-8">
            写真が主役の大人かわいいプロフィールブック。<br />
            忙しいプレ花嫁様に寄り添うレイアウトをご提案します。
          </p>
          <div className="flex flex-col gap-3">
            <Link
              to="/plan"
              className="inline-flex items-center justify-center gap-2 bg-charcoal text-white text-sm font-sans tracking-widest px-8 py-4 min-h-[52px] hover:bg-charcoal/80 transition-all duration-300 cursor-pointer group"
            >
              プランを見る
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/design"
              className="inline-flex items-center justify-center gap-2 border border-charcoal/30 text-charcoal text-sm font-sans tracking-widest px-8 py-4 min-h-[52px] hover:border-charcoal transition-all duration-300 cursor-pointer"
            >
              デザインを見る
            </Link>
          </div>
        </FadeInUp>
      </section>

      {/* Concept */}
      <section className="py-28 px-6 max-w-3xl mx-auto text-center">
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
      <section className="bg-ivory py-24 px-6">
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
      <section className="bg-charcoal text-white py-24 px-6">
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
