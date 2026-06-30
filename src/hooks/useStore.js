import { useState, useCallback } from 'react'

const KEYS = {
  xp: 'aadit_xp',
  streak: 'aadit_streak',
  completed: 'aadit_completed',
  quizScores: 'aadit_quiz_scores',
  activityLog: 'aadit_activity_log',
  submissions: 'aadit_submissions',
}

function load() {
  return {
    xp: parseInt(localStorage.getItem(KEYS.xp)) || 0,
    streak: JSON.parse(localStorage.getItem(KEYS.streak) || '{"count":0,"lastDate":null}'),
    completed: JSON.parse(localStorage.getItem(KEYS.completed) || '{"english":[1],"maths":[1],"science":[1]}'),
    quizScores: JSON.parse(localStorage.getItem(KEYS.quizScores) || '[]'),
    activityLog: JSON.parse(localStorage.getItem(KEYS.activityLog) || '[]'),
    submissions: JSON.parse(localStorage.getItem(KEYS.submissions) || '{}'),
  }
}

function save(state) {
  localStorage.setItem(KEYS.xp, state.xp)
  localStorage.setItem(KEYS.streak, JSON.stringify(state.streak))
  localStorage.setItem(KEYS.completed, JSON.stringify(state.completed))
  localStorage.setItem(KEYS.quizScores, JSON.stringify(state.quizScores))
  localStorage.setItem(KEYS.activityLog, JSON.stringify(state.activityLog))
  localStorage.setItem(KEYS.submissions, JSON.stringify(state.submissions))
}

export function useStore() {
  const [state, setState] = useState(load)

  const addXP = useCallback((amount) => {
    setState(prev => {
      const next = { ...prev, xp: prev.xp + amount }
      save(next)
      return next
    })
  }, [])

  const logActivity = useCallback((entry) => {
    setState(prev => {
      const log = [{ ...entry, timestamp: new Date().toISOString() }, ...prev.activityLog].slice(0, 200)
      const next = { ...prev, activityLog: log }
      save(next)
      return next
    })
  }, [])

  const logQuizScore = useCallback((subject, day, score, total) => {
    setState(prev => {
      const scores = [{ subject, day, score, total, date: new Date().toISOString() }, ...prev.quizScores].slice(0, 200)
      const next = { ...prev, quizScores: scores }
      save(next)
      return next
    })
  }, [])

  // Save all work for a lesson (quiz answers, writing, notebook task, etc.)
  // key = `${subject}_day${dayNum}` — once submitted, locked
  const submitWork = useCallback((subject, dayNum, work) => {
    setState(prev => {
      const key = `${subject}_day${dayNum}`
      if (prev.submissions[key]?.locked) return prev // already locked
      const submissions = { ...prev.submissions, [key]: { ...work, locked: true, submittedAt: new Date().toISOString() } }
      const activityLog = [
        { type: 'submission', subject, day: dayNum, timestamp: new Date().toISOString() },
        ...prev.activityLog
      ].slice(0, 200)
      const next = { ...prev, submissions, activityLog }
      save(next)
      return next
    })
  }, [])

  const isSubmitted = useCallback((subject, dayNum) => {
    const key = `${subject}_day${dayNum}`
    return !!state.submissions[key]?.locked
  }, [state.submissions])

  const getSubmission = useCallback((subject, dayNum) => {
    const key = `${subject}_day${dayNum}`
    return state.submissions[key] || null
  }, [state.submissions])

  const completeDay = useCallback((subject, dayNum) => {
    setState(prev => {
      const completed = { ...prev.completed }
      if (!completed[subject].includes(dayNum)) {
        completed[subject] = [...completed[subject], dayNum]
      }
      const today = new Date().toDateString()
      let streak = { ...prev.streak }
      if (streak.lastDate !== today) {
        const yesterday = new Date(Date.now() - 86400000).toDateString()
        streak = {
          count: streak.lastDate === yesterday ? streak.count + 1 : 1,
          lastDate: today,
        }
      }
      const activityLog = [
        { type: 'dayComplete', subject, day: dayNum, timestamp: new Date().toISOString() },
        ...prev.activityLog
      ].slice(0, 200)
      const next = { ...prev, xp: prev.xp + 50, streak, completed, activityLog }
      save(next)
      return next
    })
  }, [])

  const currentDay = (() => {
    for (let d = 1; d <= 21; d++) {
      const all = state.completed.english.includes(d) && state.completed.maths.includes(d) && state.completed.science.includes(d)
      if (!all) return d
    }
    return 21
  })()

  const getLevel = (xp) => {
    if (xp >= 1000) return 'Champion'
    if (xp >= 500) return 'Achiever'
    if (xp >= 200) return 'Learner'
    return 'Beginner'
  }

  const getLevelProgress = (xp) => {
    const t = [0, 200, 500, 1000, 2000]
    for (let i = 1; i < t.length; i++) {
      if (xp < t[i]) return { current: xp - t[i - 1], needed: t[i] - t[i - 1] }
    }
    return { current: 1, needed: 1 }
  }

  return { state, addXP, completeDay, currentDay, getLevel, getLevelProgress, logQuizScore, logActivity, submitWork, isSubmitted, getSubmission }
}
