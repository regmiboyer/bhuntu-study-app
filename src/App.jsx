import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useStore } from './hooks/useStore'
import LoginPage from './components/LoginPage'
import ParentDashboard from './components/ParentDashboard'
import Navbar from './components/Navbar'
import MobileNav from './components/MobileNav'
import Dashboard from './components/Dashboard'
import Roadmap from './components/Roadmap'
import SubjectView from './components/SubjectView'
import Progress from './components/Progress'
import Confidence from './components/Confidence'
import LessonOverlay from './components/LessonOverlay'

export default function App() {
  const [role, setRole] = useState(null)
  const [view, setView] = useState('dashboard')
  const [lesson, setLesson] = useState(null)
  const store = useStore()

  const handleLogin = (r) => setRole(r)
  const handleLogout = () => { setRole(null); setLesson(null); setView('dashboard') }
  const openLesson = (subject, dayIdx) => setLesson({ subject, dayIdx })
  const closeLesson = () => setLesson(null)

  if (!role) return <LoginPage onLogin={handleLogin} />
  if (role === 'parent') return <ParentDashboard store={store} onLogout={handleLogout} />

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Navbar view={view} setView={setView} store={store} onLogout={handleLogout} />

      <main className="max-w-4xl mx-auto px-4 pt-6 pb-8">
        <AnimatePresence mode="wait">
          {view === 'dashboard' && <Dashboard key="dash" store={store} openLesson={openLesson} setView={setView} />}
          {view === 'roadmap' && <Roadmap key="road" store={store} />}
          {view === 'english' && <SubjectView key="eng" subject="english" store={store} openLesson={openLesson} />}
          {view === 'maths' && <SubjectView key="math" subject="maths" store={store} openLesson={openLesson} />}
          {view === 'science' && <SubjectView key="sci" subject="science" store={store} openLesson={openLesson} />}
          {view === 'progress' && <Progress key="prog" store={store} />}
          {view === 'confidence' && <Confidence key="conf" />}
        </AnimatePresence>
      </main>

      <MobileNav view={view} setView={setView} />

      <AnimatePresence>
        {lesson && (
          <LessonOverlay
            key="lesson"
            subject={lesson.subject}
            dayIdx={lesson.dayIdx}
            store={store}
            onClose={closeLesson}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
