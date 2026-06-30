import { useState, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Trophy, AlertTriangle, Lock, CheckCircle2 } from 'lucide-react'
import { ENGLISH_CURRICULUM } from '../data/english'
import { MATHS_CURRICULUM } from '../data/maths'
import { SCIENCE_CURRICULUM } from '../data/science'
import { NOTEBOOK_TASKS } from '../data/notebookTasks'
import Confetti from './Confetti'

const CURRICULA = { english: ENGLISH_CURRICULUM, maths: MATHS_CURRICULUM, science: SCIENCE_CURRICULUM }

function getSteps(subject, day) {
  const steps = ['lesson']
  if (day.flashcards?.length) steps.push('flashcards')
  if (day.quiz?.length) steps.push('quiz')
  if (day.sentenceBuilder) steps.push('sentenceBuilder')
  if (subject === 'english' && day.writingExercise) steps.push('writing')
  if (subject === 'maths' && day.practiceProblems) steps.push('practice')
  if (subject === 'science' && day.experiment) steps.push('experiment')
  steps.push('notebookTask')
  steps.push('confirmSubmit')
  steps.push('complete')
  return steps
}

export default function LessonOverlay({ subject, dayIdx, store, onClose }) {
  const dayData = CURRICULA[subject][dayIdx]
  const dayNum = dayData.day || dayIdx + 1
  const alreadySubmitted = store.isSubmitted(subject, dayNum)
  const steps = getSteps(subject, dayData)
  const [step, setStep] = useState(alreadySubmitted ? steps.length - 1 : 0)
  const [showConfetti, setShowConfetti] = useState(false)

  // Collect all work data as student progresses
  const workRef = useRef({
    quizAnswers: [],
    writingText: '',
    sentenceBuilderAnswers: [],
    practiceAnswers: [],
    notebookResponse: '',
  })

  const nextStep = useCallback(() => {
    if (step + 1 >= steps.length) { onClose(); return }
    setStep(s => s + 1)
  }, [step, steps.length, onClose])

  const pct = ((step + 1) / steps.length) * 100
  const currentType = steps[step]

  const notebookTask = NOTEBOOK_TASKS[subject]?.[dayIdx]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[2000] bg-bg overflow-y-auto"
    >
      {showConfetti && <Confetti />}

      <div className="sticky top-0 z-10 glass-nav border-b border-border px-4 py-3 flex items-center gap-3">
        <button onClick={onClose} className="w-9 h-9 rounded-full bg-bg flex items-center justify-center hover:bg-border transition cursor-pointer">
          <X className="w-4 h-4" />
        </button>
        <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-success rounded-full"
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <div className="flex gap-1">
          {steps.map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i < step ? 'bg-success' : i === step ? 'bg-primary scale-125' : 'bg-border'}`} />
          ))}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8 pb-32">
        <AnimatePresence mode="wait">
          {currentType === 'lesson' && <LessonContent key="lesson" dayData={dayData} />}
          {currentType === 'flashcards' && <Flashcards key="fc" cards={dayData.flashcards} onDone={nextStep} />}
          {currentType === 'quiz' && <Quiz key="quiz" questions={dayData.quiz} store={store} onDone={nextStep} setShowConfetti={setShowConfetti} subject={subject} dayNum={dayNum} workRef={workRef} />}
          {currentType === 'sentenceBuilder' && <SentenceBuilder key="sb" data={dayData.sentenceBuilder} store={store} onDone={nextStep} workRef={workRef} />}
          {currentType === 'writing' && <Writing key="wr" data={dayData.writingExercise} workRef={workRef} />}
          {currentType === 'practice' && <Practice key="pr" problems={dayData.practiceProblems} store={store} workRef={workRef} />}
          {currentType === 'experiment' && <Experiment key="exp" data={dayData.experiment} />}
          {currentType === 'notebookTask' && <NotebookTask key="nb" subject={subject} task={notebookTask} workRef={workRef} />}
          {currentType === 'confirmSubmit' && <ConfirmSubmit key="confirm" subject={subject} dayNum={dayNum} store={store} workRef={workRef} onDone={nextStep} setShowConfetti={setShowConfetti} />}
          {currentType === 'complete' && <Complete key="done" subject={subject} dayData={dayData} store={store} onClose={onClose} setShowConfetti={setShowConfetti} alreadySubmitted={alreadySubmitted} />}
        </AnimatePresence>
      </div>

      {(currentType === 'lesson' || currentType === 'writing' || currentType === 'practice' || currentType === 'experiment' || currentType === 'notebookTask') && (
        <div className="fixed bottom-0 left-0 right-0 glass-nav border-t border-border p-4 text-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={nextStep}
            className="bg-primary text-white px-10 py-3 rounded-full font-bold text-sm cursor-pointer hover:bg-primary-light transition"
          >
            Continue →
          </motion.button>
        </div>
      )}
    </motion.div>
  )
}

function LessonContent({ dayData }) {
  const lesson = dayData.lesson || {}
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
      <h2 className="text-2xl font-extrabold text-primary mb-4">{dayData.title}</h2>
      <div className="prose prose-sm max-w-none text-[15px] leading-relaxed [&_p]:mb-3 [&_h3]:font-bold [&_h3]:mt-5 [&_h3]:mb-2 [&_pre]:bg-bg [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:text-xs [&_pre]:overflow-x-auto" dangerouslySetInnerHTML={{ __html: lesson.content || '' }} />
      {lesson.keyPoints?.length > 0 && (
        <div className="mt-6 bg-primary/5 border-l-4 border-primary rounded-r-xl p-4">
          <h4 className="text-xs uppercase tracking-wider text-primary font-bold mb-2">Key Points</h4>
          <ul className="space-y-1 text-sm">
            {lesson.keyPoints.map((p, i) => <li key={i}>• {p}</li>)}
          </ul>
        </div>
      )}
    </motion.div>
  )
}

function Flashcards({ cards, onDone }) {
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const next = () => {
    if (idx + 1 >= cards.length) { onDone(); return }
    setFlipped(false)
    setIdx(i => i + 1)
  }
  const prev = () => { setFlipped(false); setIdx(i => Math.max(0, i - 1)) }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
      <h2 className="text-xl font-extrabold mb-2">Flashcards</h2>
      <p className="text-sm text-muted mb-6">Tap to flip</p>
      <div className="perspective-[1000px] mx-auto max-w-md">
        <motion.div
          onClick={() => setFlipped(f => !f)}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
          className="relative w-full h-56 cursor-pointer"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-primary to-primary-light text-white flex items-center justify-center p-6 text-base font-semibold text-center">
            {cards[idx].front}
          </div>
          <div className="absolute inset-0 backface-hidden rounded-2xl glass border-2 border-primary flex items-center justify-center p-6 text-sm text-center" style={{ transform: 'rotateY(180deg)' }}>
            {cards[idx].back}
          </div>
        </motion.div>
      </div>
      <div className="flex items-center justify-center gap-5 mt-6">
        <button onClick={prev} className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center hover:border-primary transition cursor-pointer">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="text-sm font-semibold text-muted">{idx + 1}/{cards.length}</span>
        <button onClick={next} className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center hover:border-primary transition cursor-pointer">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  )
}

function Quiz({ questions, store, onDone, setShowConfetti, subject, dayNum, workRef }) {
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState(null)
  const [done, setDone] = useState(false)

  const q = questions[qIdx]

  const select = (i) => {
    if (selected !== null) return
    setSelected(i)
    const isCorrect = i === q.correct
    if (isCorrect) { setScore(s => s + 1); store.addXP(10) }

    workRef.current.quizAnswers.push({
      question: q.question,
      selected: q.options[i],
      correct: q.options[q.correct],
      isCorrect,
    })

    setTimeout(() => {
      if (qIdx + 1 >= questions.length) {
        const finalScore = isCorrect ? score + 1 : score
        store.logQuizScore(subject, dayNum, finalScore, questions.length)
        setDone(true)
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 3000)
      } else {
        setSelected(null)
        setQIdx(qi => qi + 1)
      }
    }, 1500)
  }

  if (done) {
    const pct = Math.round((score / questions.length) * 100)
    return (
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-8">
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-success flex items-center justify-center text-white text-3xl font-extrabold mb-4">
          {pct}%
        </div>
        <h2 className="text-2xl font-extrabold">{pct >= 80 ? 'Brilliant!' : pct >= 60 ? 'Good effort!' : 'Keep practicing!'}</h2>
        <p className="text-muted mt-1">{score}/{questions.length} correct</p>
        <p className="text-primary font-bold mt-2">+{score * 10} XP earned!</p>
        <motion.button whileTap={{ scale: 0.95 }} onClick={onDone} className="mt-6 bg-primary text-white px-8 py-3 rounded-full font-bold cursor-pointer">
          Continue →
        </motion.button>
      </motion.div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="flex justify-center gap-1.5 mb-6">
        {questions.map((_, i) => (
          <div key={i} className={`w-2.5 h-2.5 rounded-full ${i < qIdx ? 'bg-success' : i === qIdx ? 'bg-primary scale-125' : 'bg-border'}`} />
        ))}
      </div>
      <h3 className="text-lg font-bold mb-5">{q.question}</h3>
      <div className="space-y-3">
        {q.options.map((opt, i) => (
          <motion.button
            key={i}
            whileTap={{ scale: 0.97 }}
            onClick={() => select(i)}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all cursor-pointer text-sm ${
              selected === null ? 'border-border hover:border-primary bg-surface' :
              i === q.correct ? 'border-success bg-success/10 text-green-800' :
              i === selected ? 'border-red-400 bg-red-50 text-red-800' :
              'border-border bg-surface opacity-50'
            }`}
          >
            {opt}
          </motion.button>
        ))}
      </div>
      {selected !== null && q.explanation && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 p-3 bg-primary/5 rounded-xl text-sm text-muted border-l-3 border-primary">
          {q.explanation}
        </motion.div>
      )}
    </motion.div>
  )
}

function SentenceBuilder({ data, store, onDone, workRef }) {
  const steps = data?.steps || []
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState([])
  const [input, setInput] = useState('')

  const advance = () => {
    if (!input.trim()) return
    const next = [...answers, input.trim()]
    setAnswers(next)
    setInput('')
    store.addXP(5)
    if (current + 1 >= steps.length) {
      store.addXP(15)
      workRef.current.sentenceBuilderAnswers = next
    }
    setCurrent(c => c + 1)
  }

  if (current >= steps.length) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
        <div className="glass rounded-xl p-6 border-2 border-success">
          <h3 className="font-bold text-success mb-3">Your Complete Sentence</h3>
          <p className="text-base">{answers.join(' ')}</p>
        </div>
        <motion.button whileTap={{ scale: 0.95 }} onClick={onDone} className="mt-6 bg-primary text-white px-8 py-3 rounded-full font-bold cursor-pointer">
          Continue →
        </motion.button>
      </motion.div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h2 className="text-xl font-extrabold mb-2">{data.topic || 'Sentence Builder'}</h2>
      <p className="text-sm text-muted mb-5">{data.instruction || 'Build your sentence step by step.'}</p>
      <div className="space-y-3">
        {steps.map((s, i) => (
          <div key={i} className={`glass rounded-xl p-4 border-2 transition-all ${i < current ? 'border-success opacity-60' : i === current ? 'border-primary' : 'opacity-30 border-border'}`}>
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${i < current ? 'bg-success text-white' : i === current ? 'bg-primary text-white' : 'bg-border'}`}>
                {i < current ? '✓' : i + 1}
              </div>
              <span className="text-sm font-semibold">{s.instruction}</span>
            </div>
            {s.example && <p className="text-xs text-muted italic ml-8 border-l-2 border-border pl-3">{s.example}</p>}
            {i < current && <p className="ml-8 text-sm text-success font-medium mt-1">{answers[i]}</p>}
            {i === current && (
              <div className="ml-8 mt-2">
                <textarea
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Write here..."
                  className="w-full p-3 border-2 border-border rounded-lg text-sm resize-none focus:border-primary focus:outline-none transition"
                  rows={2}
                />
                <motion.button whileTap={{ scale: 0.95 }} onClick={advance} className="mt-2 bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold cursor-pointer">
                  Check & Continue
                </motion.button>
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function Writing({ data, workRef }) {
  const [text, setText] = useState(workRef.current.writingText || '')
  const words = text.trim() ? text.trim().split(/\s+/).length : 0

  const handleChange = (e) => {
    setText(e.target.value)
    workRef.current.writingText = e.target.value
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2 className="text-xl font-extrabold mb-3">Writing Exercise</h2>
      <p className="text-sm mb-4">{data.prompt}</p>
      {data.tips && (
        <div className="bg-primary/5 rounded-xl p-4 mb-4 border-l-4 border-primary">
          <h4 className="text-xs uppercase tracking-wider text-primary font-bold mb-2">Tips</h4>
          <ul className="text-sm space-y-1">{data.tips.map((t, i) => <li key={i}>• {t}</li>)}</ul>
        </div>
      )}
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Write your response..."
        className="w-full p-4 border-2 border-border rounded-xl text-sm min-h-[180px] resize-y focus:border-english focus:outline-none transition"
      />
      <p className="text-right text-xs text-muted mt-1">{words}/{data.wordLimit || 200} words</p>
    </motion.div>
  )
}

function Practice({ problems, store, workRef }) {
  const [results, setResults] = useState({})
  const [inputs, setInputs] = useState({})

  const check = (i, answer) => {
    const input = (inputs[i] || '').trim().toLowerCase()
    const correct = input === String(answer).toLowerCase()
    if (correct) store.addXP(10)
    setResults(r => ({ ...r, [i]: correct }))
    workRef.current.practiceAnswers[i] = { question: problems[i].question, answer: inputs[i] || '', correct, correctAnswer: String(answer) }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2 className="text-xl font-extrabold mb-4">Practice Problems</h2>
      <div className="space-y-4">
        {problems.map((p, i) => (
          <div key={i} className="glass rounded-xl p-4">
            <h4 className="font-bold text-sm mb-2">Q{i + 1}: {p.question}</h4>
            <input
              value={inputs[i] || ''}
              onChange={e => setInputs(prev => ({ ...prev, [i]: e.target.value }))}
              placeholder="Your answer..."
              className="w-full p-3 border-2 border-border rounded-lg text-sm focus:border-primary focus:outline-none transition"
            />
            {p.hint && <p className="text-xs text-muted mt-1 italic">Hint: {p.hint}</p>}
            <button onClick={() => check(i, p.answer)} className="mt-2 bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer hover:bg-primary/20 transition">
              Check
            </button>
            {results[i] !== undefined && (
              <p className={`text-sm mt-1 font-medium ${results[i] ? 'text-success' : 'text-red-500'}`}>
                {results[i] ? 'Correct! +10 XP' : `Answer: ${p.answer}`}
              </p>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function Experiment({ data }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2 className="text-xl font-extrabold mb-4">Experiment</h2>
      <div className="glass rounded-xl p-5 border-l-4 border-science">
        <h4 className="font-bold text-science mb-2">{data.title}</h4>
        <p className="text-sm mb-3">{data.description}</p>
        {data.materials && <p className="text-sm text-muted mb-3"><strong>Materials:</strong> {data.materials.join(', ')}</p>}
        {data.steps && (
          <ol className="list-decimal pl-5 text-sm space-y-2">
            {data.steps.map((s, i) => <li key={i}>{s}</li>)}
          </ol>
        )}
        {data.observation && (
          <div className="mt-4 p-3 bg-science/5 rounded-lg text-sm">
            <strong>Observe:</strong> {data.observation}
          </div>
        )}
      </div>
    </motion.div>
  )
}

function NotebookTask({ subject, task, workRef }) {
  const [text, setText] = useState(workRef.current.notebookResponse || '')

  const handleChange = (e) => {
    setText(e.target.value)
    workRef.current.notebookResponse = e.target.value
  }

  if (!task) return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2 className="text-xl font-extrabold mb-4">Notebook Task</h2>
      <p className="text-muted">No notebook task for this day.</p>
    </motion.div>
  )

  const isMaths = subject === 'maths'
  const words = text.trim() ? text.trim().split(/\s+/).length : 0

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
      <div className="flex items-center gap-2 mb-4">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold ${subject === 'english' ? 'bg-english' : subject === 'maths' ? 'bg-maths' : 'bg-science'}`}>
          📓
        </div>
        <h2 className="text-xl font-extrabold">Notebook Task</h2>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 mb-4">
        <p className="text-sm font-semibold text-amber-800">Complete this in your physical notebook. A parent will check your work this evening.</p>
      </div>

      <h3 className="font-bold text-lg mb-3">{task.title}</h3>

      {isMaths ? (
        <div className="space-y-3 mb-6">
          {task.problems.map((p, i) => (
            <div key={i} className="glass rounded-xl p-4 border-l-4 border-maths">
              <p className="text-sm font-medium"><span className="font-bold text-maths">Q{i + 1}:</span> {p}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="glass rounded-xl p-4 mb-4">
          <p className="text-sm leading-relaxed whitespace-pre-line">{task.prompt}</p>
        </div>
      )}

      {task.checklist && (
        <div className="bg-primary/5 rounded-xl p-4 mb-4 border-l-4 border-primary">
          <h4 className="text-xs uppercase tracking-wider text-primary font-bold mb-2">Checklist — Make sure you include:</h4>
          <ul className="text-sm space-y-1">
            {task.checklist.map((item, i) => <li key={i}>☐ {item}</li>)}
          </ul>
        </div>
      )}

      <div className="mt-4">
        <label className="text-sm font-semibold text-muted block mb-2">
          {isMaths ? 'Show your working (type key steps or "done in notebook"):' : 'Write your response here (or type "done in notebook" if handwritten):'}
        </label>
        <textarea
          value={text}
          onChange={handleChange}
          placeholder={isMaths ? "Type your solutions or write 'done in notebook'..." : "Write your essay here or write 'done in notebook'..."}
          className="w-full p-4 border-2 border-border rounded-xl text-sm min-h-[200px] resize-y focus:border-primary focus:outline-none transition"
        />
        {!isMaths && <p className="text-right text-xs text-muted mt-1">{words} words</p>}
      </div>
    </motion.div>
  )
}

function ConfirmSubmit({ subject, dayNum, store, workRef, onDone, setShowConfetti }) {
  const [confirmed, setConfirmed] = useState(false)
  const work = workRef.current

  const handleSubmit = () => {
    store.submitWork(subject, dayNum, { ...work })
    store.completeDay(subject, dayNum)
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3500)
    setConfirmed(true)
    setTimeout(onDone, 1500)
  }

  if (confirmed) {
    return (
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-10">
        <CheckCircle2 className="w-16 h-16 mx-auto text-success mb-4" />
        <h2 className="text-2xl font-extrabold text-success">Submitted!</h2>
        <p className="text-muted mt-2">Your work has been saved and locked.</p>
      </motion.div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
      <div className="flex items-center gap-3 mb-6">
        <AlertTriangle className="w-6 h-6 text-amber-500" />
        <h2 className="text-xl font-extrabold">Review & Submit</h2>
      </div>

      <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 mb-6">
        <div className="flex items-center gap-2 mb-1">
          <Lock className="w-4 h-4 text-red-600" />
          <p className="text-sm font-bold text-red-700">Once submitted, you cannot change your answers!</p>
        </div>
        <p className="text-xs text-red-600">Make sure everything is correct before submitting.</p>
      </div>

      {/* Quiz answers summary */}
      {work.quizAnswers.length > 0 && (
        <div className="glass rounded-xl p-4 mb-4">
          <h4 className="font-bold text-sm mb-3">Quiz Answers ({work.quizAnswers.filter(a => a.isCorrect).length}/{work.quizAnswers.length} correct)</h4>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {work.quizAnswers.map((a, i) => (
              <div key={i} className={`text-xs p-2 rounded-lg ${a.isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <p className="font-medium">{a.question}</p>
                <p>Your answer: <span className={a.isCorrect ? 'text-green-700 font-semibold' : 'text-red-700 font-semibold'}>{a.selected}</span></p>
                {!a.isCorrect && <p className="text-green-700">Correct: {a.correct}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Writing summary */}
      {work.writingText && (
        <div className="glass rounded-xl p-4 mb-4">
          <h4 className="font-bold text-sm mb-2">Writing Exercise</h4>
          <p className="text-xs text-muted max-h-32 overflow-y-auto whitespace-pre-wrap">{work.writingText}</p>
        </div>
      )}

      {/* Sentence builder */}
      {work.sentenceBuilderAnswers.length > 0 && (
        <div className="glass rounded-xl p-4 mb-4">
          <h4 className="font-bold text-sm mb-2">Sentence Builder</h4>
          <p className="text-sm">{work.sentenceBuilderAnswers.join(' ')}</p>
        </div>
      )}

      {/* Practice answers */}
      {work.practiceAnswers.filter(Boolean).length > 0 && (
        <div className="glass rounded-xl p-4 mb-4">
          <h4 className="font-bold text-sm mb-2">Practice Problems</h4>
          <div className="space-y-1 max-h-32 overflow-y-auto">
            {work.practiceAnswers.filter(Boolean).map((a, i) => (
              <div key={i} className="text-xs">
                <span className="font-medium">Q{i + 1}:</span> {a.answer} {a.correct ? '✓' : `✗ (${a.correctAnswer})`}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Notebook task */}
      {work.notebookResponse && (
        <div className="glass rounded-xl p-4 mb-4">
          <h4 className="font-bold text-sm mb-2">Notebook Task</h4>
          <p className="text-xs text-muted max-h-32 overflow-y-auto whitespace-pre-wrap">{work.notebookResponse}</p>
        </div>
      )}

      <div className="flex gap-3 mt-6">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
          className="flex-1 bg-gradient-to-r from-success to-green-600 text-white py-3 rounded-xl font-bold cursor-pointer text-sm"
        >
          Submit — I'm sure!
        </motion.button>
      </div>
    </motion.div>
  )
}

function Complete({ subject, dayData, store, onClose, setShowConfetti, alreadySubmitted }) {
  const dayNum = dayData.day || 1

  useState(() => {
    if (!alreadySubmitted) {
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 3500)
    }
  })

  if (alreadySubmitted) {
    const submission = store.getSubmission(subject, dayNum)
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-6">
        <Lock className="w-12 h-12 mx-auto text-muted mb-3" />
        <h2 className="text-xl font-extrabold text-muted">Already Submitted</h2>
        <p className="text-sm text-muted mt-1">Submitted {submission?.submittedAt ? new Date(submission.submittedAt).toLocaleDateString() : ''}</p>
        <p className="text-xs text-muted mt-4">Your answers are locked and visible to parents.</p>
        <motion.button whileTap={{ scale: 0.95 }} onClick={onClose} className="mt-6 bg-primary text-white px-8 py-3 rounded-full font-bold cursor-pointer">
          Back to Dashboard →
        </motion.button>
      </motion.div>
    )
  }

  return (
    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-10">
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-6xl mb-4">
        <Trophy className="w-16 h-16 mx-auto text-secondary" />
      </motion.div>
      <h2 className="text-2xl font-extrabold">Day Complete!</h2>
      <p className="text-muted mt-1">Amazing work, Aadit! Keep the streak going!</p>
      <p className="text-xl font-bold text-primary mt-3">+50 XP Day Bonus!</p>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={onClose}
        className="mt-6 bg-primary text-white px-8 py-3 rounded-full font-bold cursor-pointer"
      >
        Back to Dashboard →
      </motion.button>
    </motion.div>
  )
}
