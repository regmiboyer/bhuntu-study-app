import { motion } from 'framer-motion'
import { BookOpen, Calculator, FlaskConical, Clock } from 'lucide-react'
import PageTransition from './PageTransition'
import { ENGLISH_CURRICULUM } from '../data/english'
import { MATHS_CURRICULUM } from '../data/maths'
import { SCIENCE_CURRICULUM } from '../data/science'

const QUOTES = [
  "Small daily improvements lead to staggering long-term results.",
  "The expert in anything was once a beginner.",
  "Every day is a new opportunity to grow.",
  "Success is the sum of small efforts repeated daily.",
  "Your potential is endless. Keep pushing forward!",
]

const PLAN_START = new Date(2026, 5, 29)
function getDateForDay(dayNum) {
  const d = new Date(PLAN_START)
  d.setDate(d.getDate() + dayNum - 1)
  return d.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' })
}

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }

export default function Dashboard({ store, openLesson }) {
  const { state, currentDay, getLevel, getLevelProgress } = store
  const lp = getLevelProgress(state.xp)
  const quote = QUOTES[Math.abs(currentDay * 7) % QUOTES.length]

  const dayIdx = currentDay - 1
  const engDay = ENGLISH_CURRICULUM[dayIdx]
  const mathDay = MATHS_CURRICULUM[dayIdx]
  const sciDay = SCIENCE_CURRICULUM[dayIdx]
  const engDone = state.completed.english.includes(currentDay)
  const mathDone = state.completed.maths.includes(currentDay)
  const sciDone = state.completed.science.includes(currentDay)

  const subjects = [
    { key: 'english', label: 'English', day: engDay, done: engDone, Icon: BookOpen, color: 'english' },
    { key: 'maths', label: 'Maths', day: mathDay, done: mathDone, Icon: Calculator, color: 'maths' },
    { key: 'science', label: 'Science', day: sciDay, done: sciDone, Icon: FlaskConical, color: 'science' },
  ]

  return (
    <PageTransition>
      <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-6">
        {/* Hero */}
        <motion.div
          variants={fadeUp}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary-light p-6 md:p-10 text-white"
        >
          <div className="absolute -top-20 -right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 left-10 w-56 h-56 bg-success/10 rounded-full blur-3xl" />
          <div className="relative">
            <h1 className="text-2xl md:text-3xl font-extrabold">Welcome back, Aadit!</h1>
            <p className="mt-1 text-white/75 text-sm italic">"{quote}"</p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm">
              <span><strong className="text-lg">{state.streak.count}</strong> day streak</span>
              <span><strong className="text-lg">{state.xp}</strong> XP total</span>
              <span><strong className="text-lg">Day {currentDay}</strong> of 21</span>
            </div>
          </div>
        </motion.div>

        {/* XP Bar */}
        <motion.div variants={fadeUp} className="glass rounded-xl p-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-bold text-primary">{getLevel(state.xp)}</span>
            <span className="text-muted">{lp.current}/{lp.needed} XP to next</span>
          </div>
          <div className="h-2.5 bg-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-success rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(lp.current / lp.needed) * 100}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
        </motion.div>

        {/* Today's Learning */}
        <motion.div variants={fadeUp}>
          <div className="flex items-baseline justify-between mb-3">
            <h2 className="text-lg font-extrabold">Today's Learning — Day {currentDay}</h2>
            <span className="text-xs text-muted">{getDateForDay(currentDay)}</span>
          </div>
        </motion.div>

        <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {subjects.map(({ key, label, day, done, Icon, color }) => (
            <motion.div
              key={key}
              variants={fadeUp}
              whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => day && !done && openLesson(key, dayIdx)}
              className={`relative glass rounded-xl p-5 cursor-pointer transition-shadow ${done ? 'opacity-60' : ''}`}
            >
              {done && (
                <span className="absolute top-3 right-3 text-[10px] font-bold bg-success text-white px-2 py-0.5 rounded-full">
                  Done
                </span>
              )}
              <div className={`w-11 h-11 rounded-xl bg-${color}/10 flex items-center justify-center mb-3`}>
                <Icon className={`w-5 h-5 text-${color}`} />
              </div>
              <h3 className="font-bold text-sm">{label}</h3>
              <p className="text-xs text-muted mt-1">{day?.title || 'Coming soon'}</p>
              <div className="flex items-center gap-1 mt-3 text-[11px] text-muted">
                <Clock className="w-3 h-3" /> ~10 min
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </PageTransition>
  )
}
