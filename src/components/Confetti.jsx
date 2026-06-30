import { motion } from 'framer-motion'

const COLORS = ['#2563EB', '#F59E0B', '#EC4899', '#10b981', '#7c5cbf', '#f97316']

export default function Confetti() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {Array.from({ length: 40 }, (_, i) => (
        <motion.div
          key={i}
          initial={{ y: -20, x: `${Math.random() * 100}vw`, opacity: 1, rotate: 0 }}
          animate={{ y: '100vh', rotate: 720, opacity: 0 }}
          transition={{ duration: 2.5 + Math.random(), delay: Math.random() * 1.2, ease: 'easeIn' }}
          className="absolute rounded-sm"
          style={{
            width: 6 + Math.random() * 6,
            height: 6 + Math.random() * 6,
            background: COLORS[Math.floor(Math.random() * COLORS.length)],
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
          }}
        />
      ))}
    </div>
  )
}
