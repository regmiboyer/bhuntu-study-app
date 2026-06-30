import { motion } from 'framer-motion'
import { Check, Lock, BookOpen } from 'lucide-react'
import PageTransition from './PageTransition'

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.04 } } }
const pop = { hidden: { opacity: 0, scale: 0.85 }, show: { opacity: 1, scale: 1 } }

export default function Roadmap({ store }) {
  const { state, currentDay } = store

  return (
    <PageTransition>
      <div className="mb-4">
        <h2 className="text-xl font-extrabold">21-Day Roadmap</h2>
        <p className="text-sm text-muted">Complete all 3 subjects each day to advance</p>
      </div>
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="grid grid-cols-4 sm:grid-cols-7 gap-3"
      >
        {Array.from({ length: 21 }, (_, i) => {
          const d = i + 1
          const engDone = state.completed.english.includes(d)
          const mathDone = state.completed.maths.includes(d)
          const sciDone = state.completed.science.includes(d)
          const allDone = engDone && mathDone && sciDone
          const isCurrent = d === currentDay
          const isLocked = d > currentDay

          return (
            <motion.div
              key={d}
              variants={pop}
              whileHover={!isLocked ? { y: -3 } : {}}
              className={`relative glass rounded-xl p-3 text-center transition-all ${
                allDone ? 'ring-2 ring-success bg-success/5' :
                isCurrent ? 'ring-2 ring-primary shadow-lg shadow-primary/10' :
                isLocked ? 'opacity-40' : ''
              }`}
            >
              {allDone && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-success rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
              )}
              <div className="text-[10px] font-semibold text-muted">Day {d}</div>
              <div className="text-xl my-1">
                {allDone ? '⭐' : isCurrent ? <BookOpen className="w-5 h-5 mx-auto text-primary" /> : <Lock className="w-4 h-4 mx-auto text-muted" />}
              </div>
              <div className="flex justify-center gap-1">
                <span className={`w-2 h-2 rounded-full bg-english ${engDone ? '' : 'opacity-25'}`} />
                <span className={`w-2 h-2 rounded-full bg-maths ${mathDone ? '' : 'opacity-25'}`} />
                <span className={`w-2 h-2 rounded-full bg-science ${sciDone ? '' : 'opacity-25'}`} />
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </PageTransition>
  )
}
