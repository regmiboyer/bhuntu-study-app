import { Flame, Zap, Star, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Home' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'english', label: 'English' },
  { id: 'maths', label: 'Maths' },
  { id: 'science', label: 'Science' },
  { id: 'progress', label: 'Progress' },
  { id: 'confidence', label: 'Mindset' },
]

export default function Navbar({ view, setView, store, onLogout }) {
  const { state } = store
  return (
    <nav className="sticky top-0 z-50 glass-nav border-b border-border px-4 md:px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button onClick={onLogout} className="w-9 h-9 rounded-full bg-bg flex items-center justify-center hover:bg-border transition cursor-pointer" title="Back to login">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-2 font-extrabold text-primary text-lg">
          <Star className="w-5 h-5 fill-secondary text-secondary" />
          <span>StudyHub</span>
        </div>
        <div className="hidden md:flex gap-1">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className={`relative px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                view === item.id ? 'text-primary' : 'text-muted hover:text-text hover:bg-bg'
              }`}
            >
              {item.label}
              {view === item.id && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 bg-primary/8 rounded-lg -z-10"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary/10 rounded-full text-sm font-bold text-secondary">
          <Flame className="w-4 h-4" />
          <span>{state.streak.count}</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 rounded-full text-sm font-bold text-primary">
          <Zap className="w-4 h-4" />
          <span>{state.xp} XP</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold">
          A
        </div>
      </div>
    </nav>
  )
}
