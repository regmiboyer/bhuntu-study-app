import { motion } from 'framer-motion'
import { Check, Lock, BookOpen } from 'lucide-react'
import PageTransition from './PageTransition'
import { ENGLISH_CURRICULUM } from '../data/english'
import { MATHS_CURRICULUM } from '../data/maths'
import { SCIENCE_CURRICULUM } from '../data/science'

const CURRICULA = { english: ENGLISH_CURRICULUM, maths: MATHS_CURRICULUM, science: SCIENCE_CURRICULUM }
const LABELS = { english: 'English', maths: 'Maths', science: 'Science' }
const GRADIENTS = {
  english: 'from-english to-purple-800',
  maths: 'from-maths to-blue-800',
  science: 'from-science to-green-800',
}

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } }
const fadeUp = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }

export default function SubjectView({ subject, store, openLesson }) {
  const curriculum = CURRICULA[subject] || []
  const completed = store.state.completed[subject] || []

  return (
    <PageTransition>
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`rounded-2xl bg-gradient-to-br ${GRADIENTS[subject]} p-6 md:p-8 text-white mb-6`}
      >
        <h2 className="text-2xl font-extrabold">{LABELS[subject]}</h2>
        <p className="text-white/75 text-sm mt-1">{curriculum.length} days of learning</p>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
      >
        {curriculum.map((day, idx) => {
          const dayNum = day.day || idx + 1
          const isDone = completed.includes(dayNum)
          const isAvailable = dayNum === 1 || completed.includes(dayNum - 1) || isDone
          const isLocked = !isAvailable && !isDone

          return (
            <motion.div
              key={dayNum}
              variants={fadeUp}
              whileHover={!isLocked ? { y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.06)' } : {}}
              whileTap={!isLocked ? { scale: 0.95 } : {}}
              onClick={() => (isAvailable || isDone) && openLesson(subject, idx)}
              className={`glass rounded-xl p-4 text-center cursor-pointer transition-all ${
                isDone ? 'ring-2 ring-success' :
                isAvailable ? 'ring-2 ring-primary' :
                'opacity-40 cursor-not-allowed'
              }`}
            >
              {isDone && (
                <div className="absolute top-2 right-2 w-5 h-5 bg-success rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
              )}
              <div className="text-[11px] font-semibold text-muted mb-1">Day {dayNum}</div>
              <div className="text-2xl mb-2">
                {isDone ? '✅' : isLocked ? <Lock className="w-5 h-5 mx-auto text-muted" /> : <BookOpen className="w-5 h-5 mx-auto text-primary" />}
              </div>
              <div className="text-xs font-semibold leading-tight">{day.title}</div>
            </motion.div>
          )
        })}
      </motion.div>
    </PageTransition>
  )
}
