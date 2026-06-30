import { motion } from 'framer-motion'
import PageTransition from './PageTransition'
import { ENGLISH_CURRICULUM } from '../data/english'
import { MATHS_CURRICULUM } from '../data/maths'
import { SCIENCE_CURRICULUM } from '../data/science'

function ProgressRing({ pct, color, label, count, total }) {
  const r = 36
  const c = 2 * Math.PI * r
  const offset = c * (1 - pct)

  return (
    <div className="glass rounded-xl p-5 text-center">
      <svg className="w-24 h-24 mx-auto -rotate-90" viewBox="0 0 90 90">
        <circle cx="45" cy="45" r={r} fill="none" stroke="#e2e8f0" strokeWidth="8" />
        <motion.circle
          cx="45" cy="45" r={r} fill="none" stroke={color} strokeWidth="8" strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </svg>
      <h4 className="font-bold mt-3">{label}</h4>
      <p className="text-sm text-muted">{count}/{total} days</p>
    </div>
  )
}

export default function Progress({ store }) {
  const { state } = store
  const engTotal = ENGLISH_CURRICULUM.length
  const mathTotal = MATHS_CURRICULUM.length
  const sciTotal = SCIENCE_CURRICULUM.length
  const engDone = state.completed.english.length
  const mathDone = state.completed.maths.length
  const sciDone = state.completed.science.length
  const totalDone = engDone + mathDone + sciDone
  const totalAll = engTotal + mathTotal + sciTotal

  return (
    <PageTransition>
      <div className="mb-4">
        <h2 className="text-xl font-extrabold">Your Progress</h2>
        <p className="text-sm text-muted">{totalDone}/{totalAll} total lessons done</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <ProgressRing pct={engTotal ? engDone / engTotal : 0} color="var(--color-english)" label="English" count={engDone} total={engTotal} />
        <ProgressRing pct={mathTotal ? mathDone / mathTotal : 0} color="var(--color-maths)" label="Maths" count={mathDone} total={mathTotal} />
        <ProgressRing pct={sciTotal ? sciDone / sciTotal : 0} color="var(--color-science)" label="Science" count={sciDone} total={sciTotal} />
      </div>

      <div className="glass rounded-xl p-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="font-bold">Overall</span>
          <span className="text-muted">{Math.round((totalDone / totalAll) * 100)}%</span>
        </div>
        <div className="h-3 bg-border rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-success rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(totalDone / totalAll) * 100}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </div>
      </div>
    </PageTransition>
  )
}
