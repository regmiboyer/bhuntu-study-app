import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LogOut, Flame, Zap, Trophy, BookOpen, Calculator, FlaskConical, Clock, CheckCircle2, Star, ChevronDown, ChevronUp, Lock, FileText, ArrowLeft } from 'lucide-react'
import { ENGLISH_CURRICULUM } from '../data/english'
import { MATHS_CURRICULUM } from '../data/maths'
import { SCIENCE_CURRICULUM } from '../data/science'

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } }
const fadeUp = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }

function ProgressRing({ pct, color, size = 80 }) {
  const r = (size - 16) / 2
  const c = 2 * Math.PI * r
  const offset = c * (1 - pct)
  return (
    <svg className="-rotate-90" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#e2e8f0" strokeWidth="7" />
      <motion.circle
        cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth="7" strokeLinecap="round"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
    </svg>
  )
}

function formatDate(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })
}

export default function ParentDashboard({ store, onLogout }) {
  const { state, currentDay, getLevel } = store
  const engTotal = ENGLISH_CURRICULUM.length
  const mathTotal = MATHS_CURRICULUM.length
  const sciTotal = SCIENCE_CURRICULUM.length
  const engDone = state.completed.english.length
  const mathDone = state.completed.maths.length
  const sciDone = state.completed.science.length
  const totalDone = engDone + mathDone + sciDone
  const totalAll = engTotal + mathTotal + sciTotal

  const [expandedSubmission, setExpandedSubmission] = useState(null)

  const toggle = (key) => setExpandedSubmission(prev => prev === key ? null : key)

  return (
    <div className="min-h-screen bg-bg">
      <nav className="sticky top-0 z-50 glass-nav border-b border-border px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={onLogout} className="w-9 h-9 rounded-full bg-bg flex items-center justify-center hover:bg-border transition cursor-pointer" title="Back to login">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2 font-extrabold text-primary text-lg">
            <Star className="w-5 h-5 fill-secondary text-secondary" />
            <span>StudyHub</span>
          </div>
          <span className="text-xs font-medium text-muted bg-secondary/10 px-2 py-0.5 rounded-full">Parent View</span>
        </div>
        <button onClick={onLogout} className="flex items-center gap-2 text-sm text-muted hover:text-text transition cursor-pointer">
          <LogOut className="w-4 h-4" /> Switch User
        </button>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-6">

          {/* Overview Cards */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass rounded-xl p-4 text-center">
              <Flame className="w-6 h-6 mx-auto text-secondary mb-1" />
              <div className="text-2xl font-extrabold">{state.streak.count}</div>
              <div className="text-xs text-muted">Day Streak</div>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <Zap className="w-6 h-6 mx-auto text-primary mb-1" />
              <div className="text-2xl font-extrabold">{state.xp}</div>
              <div className="text-xs text-muted">Total XP</div>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <Trophy className="w-6 h-6 mx-auto text-accent mb-1" />
              <div className="text-2xl font-extrabold">{getLevel(state.xp)}</div>
              <div className="text-xs text-muted">Current Level</div>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <CheckCircle2 className="w-6 h-6 mx-auto text-success mb-1" />
              <div className="text-2xl font-extrabold">Day {currentDay}</div>
              <div className="text-xs text-muted">of 21</div>
            </div>
          </motion.div>

          {/* Subject Progress */}
          <motion.div variants={fadeUp}>
            <h2 className="text-lg font-extrabold mb-3">Subject Progress</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: 'English', done: engDone, total: engTotal, color: 'var(--color-english)', Icon: BookOpen },
                { label: 'Maths', done: mathDone, total: mathTotal, color: 'var(--color-maths)', Icon: Calculator },
                { label: 'Science', done: sciDone, total: sciTotal, color: 'var(--color-science)', Icon: FlaskConical },
              ].map(({ label, done, total, color, Icon }) => (
                <div key={label} className="glass rounded-xl p-5 flex items-center gap-4">
                  <ProgressRing pct={total ? done / total : 0} color={color} />
                  <div>
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4" style={{ color }} />
                      <h3 className="font-bold">{label}</h3>
                    </div>
                    <p className="text-sm text-muted">{done}/{total} days complete</p>
                    <p className="text-xs text-muted">{total ? Math.round((done / total) * 100) : 0}%</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Overall Progress */}
          <motion.div variants={fadeUp} className="glass rounded-xl p-5">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Overall Completion</h3>
              <span className="text-sm text-muted">{Math.round((totalDone / totalAll) * 100)}%</span>
            </div>
            <div className="h-3 bg-border rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-success rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(totalDone / totalAll) * 100}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </div>
            <p className="text-xs text-muted mt-2">{totalDone} of {totalAll} lessons completed</p>
          </motion.div>

          {/* Submitted Work */}
          <motion.div variants={fadeUp}>
            <h2 className="text-lg font-extrabold mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Aadit's Submitted Work
            </h2>
            {Object.keys(state.submissions).length === 0 ? (
              <div className="glass rounded-xl p-6 text-center text-muted text-sm">
                No submissions yet. Work will appear here once Aadit completes and submits lessons.
              </div>
            ) : (
              <div className="space-y-3">
                {Object.entries(state.submissions).sort((a, b) => (b[1].submittedAt || '').localeCompare(a[1].submittedAt || '')).map(([key, sub]) => {
                  const [subj, dayStr] = key.split('_day')
                  const dayNum = parseInt(dayStr)
                  const isOpen = expandedSubmission === key
                  return (
                    <div key={key} className="glass rounded-xl overflow-hidden">
                      <button onClick={() => toggle(key)} className="w-full px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-bg/50 transition">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${subj === 'english' ? 'bg-english' : subj === 'maths' ? 'bg-maths' : 'bg-science'}`} />
                          <span className="font-semibold text-sm capitalize">{subj}</span>
                          <span className="text-xs text-muted">Day {dayNum}</span>
                          <Lock className="w-3 h-3 text-muted" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-muted">{formatDate(sub.submittedAt)}</span>
                          {isOpen ? <ChevronUp className="w-4 h-4 text-muted" /> : <ChevronDown className="w-4 h-4 text-muted" />}
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 pb-4 space-y-3 border-t border-border pt-3">
                              <SubmissionDetail sub={sub} />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            )}
          </motion.div>

          {/* Quiz Scores */}
          <motion.div variants={fadeUp}>
            <h2 className="text-lg font-extrabold mb-3">Recent Quiz Scores</h2>
            {state.quizScores.length === 0 ? (
              <div className="glass rounded-xl p-6 text-center text-muted text-sm">
                No quiz scores yet. Aadit will earn scores as he completes lessons.
              </div>
            ) : (
              <div className="space-y-2">
                {state.quizScores.slice(0, 10).map((q, i) => {
                  const pct = Math.round((q.score / q.total) * 100)
                  return (
                    <div key={i} className="glass rounded-xl px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${q.subject === 'english' ? 'bg-english' : q.subject === 'maths' ? 'bg-maths' : 'bg-science'}`} />
                        <div>
                          <span className="font-semibold text-sm capitalize">{q.subject}</span>
                          <span className="text-xs text-muted ml-2">Day {q.day}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-sm font-bold ${pct >= 80 ? 'text-success' : pct >= 60 ? 'text-secondary' : 'text-red-500'}`}>
                          {q.score}/{q.total} ({pct}%)
                        </span>
                        <span className="text-[10px] text-muted">{formatDate(q.date)}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </motion.div>

          {/* Activity Log */}
          <motion.div variants={fadeUp}>
            <h2 className="text-lg font-extrabold mb-3">Recent Activity</h2>
            {state.activityLog.length === 0 ? (
              <div className="glass rounded-xl p-6 text-center text-muted text-sm">
                No activity yet. Check back once Aadit starts learning!
              </div>
            ) : (
              <div className="glass rounded-xl divide-y divide-border">
                {state.activityLog.slice(0, 15).map((entry, i) => (
                  <div key={i} className="px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-success" />
                      </div>
                      <span className="text-sm font-medium">
                        {entry.type === 'dayComplete' && `Completed ${entry.subject} Day ${entry.day}`}
                        {entry.type === 'submission' && `Submitted ${entry.subject} Day ${entry.day}`}
                        {entry.type === 'quiz' && `Quiz: ${entry.subject} Day ${entry.day} — ${entry.score}/${entry.total}`}
                      </span>
                    </div>
                    <span className="text-[10px] text-muted flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {formatDate(entry.timestamp)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Day-by-day breakdown */}
          <motion.div variants={fadeUp}>
            <h2 className="text-lg font-extrabold mb-3">Day-by-Day Status</h2>
            <div className="glass rounded-xl overflow-hidden">
              <div className="grid grid-cols-[auto_1fr_1fr_1fr] text-xs font-semibold text-muted px-4 py-2 bg-bg border-b border-border">
                <span className="w-16">Day</span>
                <span className="text-center">English</span>
                <span className="text-center">Maths</span>
                <span className="text-center">Science</span>
              </div>
              {Array.from({ length: 21 }, (_, i) => {
                const d = i + 1
                const eng = state.completed.english.includes(d)
                const math = state.completed.maths.includes(d)
                const sci = state.completed.science.includes(d)
                return (
                  <div key={d} className="grid grid-cols-[auto_1fr_1fr_1fr] items-center px-4 py-2 border-b border-border last:border-0">
                    <span className="w-16 text-sm font-semibold">Day {d}</span>
                    <span className="text-center">{eng ? <CheckCircle2 className="w-4 h-4 text-success mx-auto" /> : <span className="text-muted">—</span>}</span>
                    <span className="text-center">{math ? <CheckCircle2 className="w-4 h-4 text-success mx-auto" /> : <span className="text-muted">—</span>}</span>
                    <span className="text-center">{sci ? <CheckCircle2 className="w-4 h-4 text-success mx-auto" /> : <span className="text-muted">—</span>}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>

        </motion.div>
      </main>
    </div>
  )
}

function SubmissionDetail({ sub }) {
  return (
    <>
      {/* Quiz Answers */}
      {sub.quizAnswers?.length > 0 && (
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-2">Quiz Answers ({sub.quizAnswers.filter(a => a.isCorrect).length}/{sub.quizAnswers.length})</h4>
          <div className="space-y-2">
            {sub.quizAnswers.map((a, i) => (
              <div key={i} className={`text-xs p-2.5 rounded-lg ${a.isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <p className="font-medium mb-1">{a.question}</p>
                <p>Aadit's answer: <span className={`font-semibold ${a.isCorrect ? 'text-green-700' : 'text-red-700'}`}>{a.selected}</span></p>
                {!a.isCorrect && <p className="text-green-700">Correct: {a.correct}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sentence Builder */}
      {sub.sentenceBuilderAnswers?.length > 0 && (
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-2">Sentence Builder</h4>
          <p className="text-sm bg-blue-50 border border-blue-200 rounded-lg p-3">{sub.sentenceBuilderAnswers.join(' ')}</p>
        </div>
      )}

      {/* Writing Exercise */}
      {sub.writingText && (
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-2">Writing Exercise</h4>
          <div className="text-sm bg-purple-50 border border-purple-200 rounded-lg p-3 max-h-48 overflow-y-auto whitespace-pre-wrap">
            {sub.writingText}
          </div>
          <p className="text-[10px] text-muted mt-1">{sub.writingText.trim().split(/\s+/).length} words</p>
        </div>
      )}

      {/* Practice Problems */}
      {sub.practiceAnswers?.filter(Boolean).length > 0 && (
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-2">Practice Problems</h4>
          <div className="space-y-1.5">
            {sub.practiceAnswers.filter(Boolean).map((a, i) => (
              <div key={i} className={`text-xs p-2 rounded-lg ${a.correct ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <span className="font-medium">Q{i + 1}: {a.question}</span>
                <br />
                Answer: <span className={a.correct ? 'text-green-700 font-semibold' : 'text-red-700 font-semibold'}>{a.answer}</span>
                {!a.correct && <span className="text-green-700 ml-2">(Correct: {a.correctAnswer})</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Notebook Task */}
      {sub.notebookResponse && (
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-2">Notebook Task</h4>
          <div className="text-sm bg-amber-50 border border-amber-200 rounded-lg p-3 max-h-64 overflow-y-auto whitespace-pre-wrap">
            {sub.notebookResponse}
          </div>
          <p className="text-[10px] text-muted mt-1">{sub.notebookResponse.trim().split(/\s+/).length} words</p>
        </div>
      )}

      {!sub.quizAnswers?.length && !sub.writingText && !sub.sentenceBuilderAnswers?.length && !sub.practiceAnswers?.filter(Boolean).length && !sub.notebookResponse && (
        <p className="text-xs text-muted italic">No detailed work recorded for this submission.</p>
      )}
    </>
  )
}
