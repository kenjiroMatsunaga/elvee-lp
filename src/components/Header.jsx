import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'HOME', to: '/' },
  { label: 'PLAN', to: '/plan' },
  { label: 'DESIGN', to: '/design' },
  { label: 'CONTACT', to: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const handleContactClick = (e) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <NavLink to="/" className="font-serif text-2xl md:text-3xl tracking-widest2 text-charcoal hover:opacity-70 transition-opacity duration-300">
            Elvee
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10" aria-label="メインナビゲーション">
            {navLinks.map((link) =>
              link.to.startsWith('#') ? (
                <a
                  key={link.label}
                  href={link.to}
                  onClick={handleContactClick}
                  className="font-sans text-xs tracking-widest2 text-charcoal/70 hover:text-charcoal transition-colors duration-300 cursor-pointer"
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `font-sans text-xs tracking-widest2 transition-colors duration-300 ${
                      isActive
                        ? 'text-charcoal border-b border-gold pb-0.5'
                        : 'text-charcoal/70 hover:text-charcoal'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-charcoal p-3 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/98 backdrop-blur-sm border-b border-greige/40"
          >
            <nav className="flex flex-col items-center w-full" aria-label="モバイルナビゲーション">
              {navLinks.map((link) =>
                link.to.startsWith('#') ? (
                  <a
                    key={link.label}
                    href={link.to}
                    onClick={handleContactClick}
                    className="w-full flex items-center justify-center min-h-[56px] font-sans text-xs tracking-widest2 text-charcoal/70 hover:text-charcoal hover:bg-ivory/60 transition-colors duration-200 cursor-pointer border-b border-greige/30"
                  >
                    {link.label}
                  </a>
                ) : (
                  <NavLink
                    key={link.label}
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `w-full flex items-center justify-center min-h-[56px] font-sans text-xs tracking-widest2 border-b border-greige/30 transition-colors duration-200 ${
                        isActive ? 'text-charcoal bg-ivory/40' : 'text-charcoal/70 hover:text-charcoal hover:bg-ivory/60'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
