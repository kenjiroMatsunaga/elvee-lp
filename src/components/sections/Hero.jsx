import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ImageIcon } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-ivory px-6 pt-24 pb-16 md:px-12 md:pt-32 md:pb-24">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center md:text-left"
        >
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal font-light leading-snug tracking-wider text-balance mb-8 md:mb-10">
            大切な思い出を、<br />
            <span className="text-pink-rose">一番美しい形</span>で。
          </h1>
          <Link
            to="/plan"
            className="inline-flex w-full md:w-auto items-center justify-center gap-2 bg-charcoal text-white text-sm font-sans tracking-widest px-10 py-4 min-h-[52px] hover:bg-charcoal/80 transition-all duration-300 cursor-pointer group"
          >
            プランを見る
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        {/* Key visual — 画像確定後、この div の中身を <img className="w-full h-full object-cover" /> に差し替える */}
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="aspect-[4/5] md:aspect-square w-full max-w-sm mx-auto md:max-w-none overflow-hidden bg-pink-blush/50 border border-greige flex flex-col items-center justify-center gap-3 text-charcoal/40"
        >
          <ImageIcon size={28} strokeWidth={1} aria-hidden="true" />
          <span className="font-sans text-xs tracking-widest2">KEY VISUAL</span>
        </motion.div>
      </div>
    </section>
  )
}
