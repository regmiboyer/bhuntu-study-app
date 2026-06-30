import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, GraduationCap, Users, Lock, Eye, EyeOff } from 'lucide-react'

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }

const PARENT_PASSCODE = 'P@ssw0rd@123'

export default function LoginPage({ onLogin }) {
  const [showPasscode, setShowPasscode] = useState(false)
  const [passcode, setPasscode] = useState('')
  const [error, setError] = useState('')
  const [showPw, setShowPw] = useState(false)

  const handleParentClick = () => {
    setShowPasscode(true)
    setError('')
    setPasscode('')
  }

  const handlePasscodeSubmit = (e) => {
    e.preventDefault()
    if (passcode === PARENT_PASSCODE) {
      onLogin('parent')
    } else {
      setError('Raja Beta - Afno login garera Kaam Sakau')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 via-bg to-indigo-50">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="w-full max-w-md space-y-8 text-center"
      >
        <motion.div variants={fadeUp}>
          <div className="flex items-center justify-center gap-2 mb-3">
            <Star className="w-8 h-8 text-secondary fill-secondary" />
            <h1 className="text-3xl font-extrabold text-primary">StudyHub</h1>
          </div>
          <p className="text-muted text-sm">Aadit's 21-Day Exam Prep</p>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-4">
          <h2 className="text-lg font-bold text-text">Who's studying today?</h2>

          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onLogin('student')}
            className="w-full glass rounded-2xl p-6 flex items-center gap-4 cursor-pointer text-left transition-shadow hover:shadow-lg"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl font-bold shrink-0">
              A
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-base">Raja Bhuntu</h3>
              <p className="text-sm text-muted">Continue learning & complete today's lessons</p>
            </div>
            <GraduationCap className="w-5 h-5 text-primary shrink-0" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleParentClick}
            className="w-full glass rounded-2xl p-6 flex items-center gap-4 cursor-pointer text-left transition-shadow hover:shadow-lg"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-orange-400 flex items-center justify-center text-white text-xl font-bold shrink-0">
              P
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-base">Papa / Mumma</h3>
              <p className="text-sm text-muted">View Aadit's progress, scores & activity</p>
            </div>
            <Users className="w-5 h-5 text-secondary shrink-0" />
          </motion.button>
        </motion.div>

        {/* Passcode Modal */}
        <AnimatePresence>
          {showPasscode && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              className="glass rounded-2xl p-6 text-left border-2 border-secondary/30"
            >
              <div className="flex items-center gap-2 mb-4">
                <Lock className="w-5 h-5 text-secondary" />
                <h3 className="font-bold">Parent Login</h3>
              </div>
              <form onSubmit={handlePasscodeSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type={showPw ? 'text' : 'password'}
                    value={passcode}
                    onChange={e => { setPasscode(e.target.value); setError('') }}
                    placeholder="Enter passcode"
                    autoFocus
                    className="w-full p-3 pr-10 border-2 border-border rounded-xl text-sm focus:border-secondary focus:outline-none transition"
                  />
                  <button type="button" onClick={() => setShowPw(p => !p)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted cursor-pointer">
                    {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {error && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-red-600 font-medium bg-red-50 p-2 rounded-lg">
                    {error}
                  </motion.p>
                )}
                <div className="flex gap-2">
                  <button type="button" onClick={() => setShowPasscode(false)} className="flex-1 py-2.5 rounded-xl border-2 border-border text-sm font-semibold cursor-pointer hover:bg-bg transition">
                    Cancel
                  </button>
                  <button type="submit" className="flex-1 py-2.5 rounded-xl bg-secondary text-white text-sm font-bold cursor-pointer hover:bg-secondary/90 transition">
                    Login
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.p variants={fadeUp} className="text-xs text-muted/60">
          Progress is saved on this device automatically
        </motion.p>
      </motion.div>
    </div>
  )
}
