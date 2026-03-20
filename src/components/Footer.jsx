import { Instagram, MessageCircle, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: '注文から納品までどのくらいかかりますか？',
    a: 'カスタムセミオーダーは約3週間、フルオーダーは約2ヶ月、Canvaテンプレートは購入後即時納品となります。お急ぎの場合はお気軽にご相談ください。',
  },
  {
    q: '修正は何回まで対応していただけますか？',
    a: 'セミオーダーは3回まで、フルオーダーは5回まで修正に対応しております。ご要望はなるべく詳細にお伝えいただけると、よりスムーズに進められます。',
  },
  {
    q: 'データ納品のみ対応していますか？',
    a: 'はい、基本的にはPDFデータでの納品となります。印刷についてはご自身で印刷会社にご依頼いただくか、印刷代行を承ることも可能です。',
  },
  {
    q: 'スマートフォンの写真でも対応できますか？',
    a: '対応可能です。ただし、印刷品質を確保するために、できるだけ高解像度の写真をご用意いただくことをおすすめします。',
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-greige/50">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-start py-5 text-left cursor-pointer group"
        aria-expanded={open}
      >
        <span className="font-sans text-sm text-charcoal pr-6 group-hover:text-charcoal/70 transition-colors duration-200">
          {q}
        </span>
        <ChevronDown
          size={16}
          className={`flex-shrink-0 text-gold mt-0.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="font-sans text-sm text-charcoal/60 pb-5 leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-ivory border-t border-greige/30" id="contact">
      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 md:px-12 py-20">
        <p className="font-sans text-xs tracking-widest2 text-gold text-center mb-3">FAQ</p>
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-12 font-light">
          よくあるご質問
        </h2>
        <div>
          {faqs.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </section>

      {/* SNS Links */}
      <div className="border-t border-greige/30 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-serif text-xl tracking-widest text-charcoal">Elvee</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.instagram.com/elvee_wedding?igsh=dnBwaDNlNWpwbnNp&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-charcoal text-white text-sm font-sans tracking-wider px-6 py-4 min-h-[52px] hover:bg-charcoal/80 transition-colors duration-300 cursor-pointer"
              aria-label="Instagram"
            >
              <Instagram size={14} />
              Instagram
            </a>
            <a
              href="https://lin.ee/RGeVi7I"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#06C755] text-white text-sm font-sans tracking-wider px-6 py-4 min-h-[52px] hover:bg-[#06C755]/80 transition-colors duration-300 cursor-pointer"
              aria-label="公式LINE"
            >
              <MessageCircle size={14} />
              公式LINE
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-charcoal text-center py-4">
        <p className="font-sans text-xs text-white/40 tracking-wider">
          © 2026 Elvee. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
