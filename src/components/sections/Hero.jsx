import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const SLIDES = Array.from({ length: 6 }, (_, i) => `/images/hero/hero-${i + 1}.webp`)
const INTERVAL_MS = 4500

function HeroCarousel() {
  const [active, setActive] = useState(0)
  const loaded = useRef(new Set())

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const timer = setInterval(() => {
      // 読み込み未完了の画像へは切り替えず、白飛びを防ぐ
      setActive((current) => {
        const next = (current + 1) % SLIDES.length
        return loaded.current.has(next) ? next : current
      })
    }, INTERVAL_MS)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <div className="relative aspect-[1522/1076] w-full overflow-hidden bg-ivory border border-greige">
        {SLIDES.map((src, i) => {
          const isActive = i === active
          return (
            <img
              key={src}
              src={src}
              alt={`プロフィールブックの実例 ${i + 1}`}
              width={1522}
              height={1076}
              loading="eager"
              decoding="async"
              fetchPriority={i === 0 ? 'high' : 'low'}
              aria-hidden={!isActive}
              onLoad={() => loaded.current.add(i)}
              // 退場する画像は入場の完了まで不透明のまま下に残し、背景が透けないようにする
              className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-1000 ease-in-out ${
                isActive ? 'z-10 opacity-100' : 'z-0 opacity-0 delay-1000'
              }`}
            />
          )
        })}
      </div>
      <div className="mt-4 flex justify-center gap-2" aria-hidden="true">
        {SLIDES.map((src, i) => (
          <span
            key={src}
            className={`h-px w-6 transition-colors duration-1000 ease-in-out ${
              i === active ? 'bg-charcoal' : 'bg-greige'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="bg-ivory px-6 pt-24 pb-16 md:px-12 md:pt-32 md:pb-24">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[auto_minmax(0,1fr)] md:items-center md:gap-16">
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

        {/* Key visual */}
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="min-w-0"
        >
          <HeroCarousel />
        </motion.div>
      </div>
    </section>
  )
}
