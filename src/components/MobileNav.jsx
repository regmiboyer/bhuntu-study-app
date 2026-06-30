import { Home, Map, BookOpen, Calculator, FlaskConical } from 'lucide-react'
import { motion } from 'framer-motion'

const TABS = [
  { id: 'dashboard', label: 'Home', Icon: Home },
  { id: 'roadmap', label: 'Map', Icon: Map },
  { id: 'english', label: 'Eng', Icon: BookOpen },
  { id: 'maths', label: 'Maths', Icon: Calculator },
  { id: 'science', label: 'Sci', Icon: FlaskConical },
]

export default function MobileNav({ view, setView }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 md:hidden glass-nav border-t border-border z-50 pb-[env(safe-area-inset-bottom)]">
      <div className="flex justify-around py-2">
        {TABS.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => setView(id)}
            className={`relative flex flex-col items-center gap-0.5 px-3 py-1 text-[10px] font-semibold transition-colors cursor-pointer ${
              view === id ? 'text-primary' : 'text-muted'
            }`}
          >
            {view === id && (
              <motion.div
                layoutId="mobile-tab"
                className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-full"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <Icon className="w-5 h-5" />
            {label}
          </button>
        ))}
      </div>
    </nav>
  )
}
