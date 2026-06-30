import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from './PageTransition'

const AFFIRMATIONS = [
  "I am capable of learning anything I set my mind to.",
  "Every mistake is a stepping stone to mastery.",
  "I am prepared, focused, and ready to succeed.",
  "I grow stronger and smarter every single day.",
  "I have already come so far. I will keep going.",
  "My hard work will pay off. I trust the process.",
]

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } }
const fadeUp = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }

export default function Confidence() {
  const examDate = new Date('2026-07-15')
  const daysUntil = Math.max(0, Math.ceil((examDate - new Date()) / 86400000))
  const [breathLabel, setBreathLabel] = useState('Breathe in...')

  return (
    <PageTransition>
      <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-6">
        {/* Breathing Hero */}
        <motion.div
          variants={fadeUp}
          className="rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-600 to-primary p-8 text-white text-center"
        >
          <h2 className="text-2xl font-extrabold">Mindfulness & Confidence</h2>
          <p className="text-white/70 text-sm mt-1">Take a moment to breathe and believe in yourself</p>
          <motion.div
            animate={{ scale: [0.7, 1, 1, 0.7], opacity: [0.6, 1, 1, 0.6] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-28 h-28 mx-auto mt-6 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center text-sm"
          >
            Breathe
          </motion.div>
        </motion.div>

        {/* Affirmations */}
        <motion.div variants={fadeUp}>
          <h3 className="font-bold mb-3">Daily Affirmations</h3>
          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {AFFIRMATIONS.map((a, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="glass rounded-xl p-4 text-sm border-l-4 border-indigo-400"
              >
                {a}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Countdown */}
        <motion.div variants={fadeUp} className="glass rounded-xl p-6 text-center">
          <h3 className="font-bold mb-2">Exam Countdown</h3>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="text-5xl font-extrabold text-primary"
          >
            {daysUntil}
          </motion.div>
          <p className="text-sm text-muted mt-1">days to go — you've got this!</p>
        </motion.div>
      </motion.div>
    </PageTransition>
  )
}
