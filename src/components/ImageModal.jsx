import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function ImageModal({ images, currentIndex, onClose, onPrev, onNext }) {
  const hasMultiple = images.length > 1

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && hasMultiple) onPrev()
      if (e.key === 'ArrowRight' && hasMultiple) onNext()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext, hasMultiple])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Scrim */}
        <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 max-w-3xl w-full mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image */}
          <div className="relative bg-ivory">
            <img
              src={images[currentIndex]}
              alt={`サンプル ${currentIndex + 1}`}
              className="w-full h-auto max-h-[80vh] object-contain"
            />

            {/* Counter */}
            {hasMultiple && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                      i === currentIndex ? 'bg-charcoal' : 'bg-charcoal/25'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Prev / Next */}
          {hasMultiple && (
            <>
              <button
                onClick={onPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 bg-white/90 flex items-center justify-center hover:bg-white transition-colors duration-200 cursor-pointer"
                aria-label="前の画像"
              >
                <ChevronLeft size={20} className="text-charcoal" />
              </button>
              <button
                onClick={onNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 bg-white/90 flex items-center justify-center hover:bg-white transition-colors duration-200 cursor-pointer"
                aria-label="次の画像"
              >
                <ChevronRight size={20} className="text-charcoal" />
              </button>
            </>
          )}
        </motion.div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200 cursor-pointer"
          aria-label="閉じる"
        >
          <X size={18} className="text-white" />
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
