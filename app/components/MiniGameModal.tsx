'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Bug, Trophy, Copy, Check } from 'lucide-react'
import { useSuit } from '../context/SuitContext'

interface BugItem {
  id: number
  x: number
  y: number
  type: string
}

export default function MiniGameModal() {
  const { miniGameOpen, setMiniGameOpen, playWebSound, claimDiscount, discountClaimed } = useSuit()
  const [bugs, setBugs] = useState<BugItem[]>([])
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(15)
  const [gameActive, setGameActive] = useState(false)
  const [gameFinished, setGameFinished] = useState(false)
  const [copied, setCopied] = useState(false)

  const startGame = useCallback(() => {
    playWebSound('thwip')
    setScore(0)
    setTimeLeft(15)
    setGameActive(true)
    setGameFinished(false)
    setBugs([])
  }, [playWebSound])

  // Timer countdown
  useEffect(() => {
    if (!gameActive) return
    if (timeLeft <= 0) {
      setGameActive(false)
      setGameFinished(true)
      playWebSound('win')
      if (score >= 5) {
        claimDiscount()
      }
      return
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [gameActive, timeLeft, score, playWebSound, claimDiscount])

  // Spawn bugs loop
  useEffect(() => {
    if (!gameActive) return
    const spawnTimer = setInterval(() => {
      if (bugs.length < 5) {
        const newBug: BugItem = {
          id: Date.now() + Math.random(),
          x: Math.floor(Math.random() * 80) + 10,
          y: Math.floor(Math.random() * 70) + 15,
          type: Math.random() > 0.5 ? 'Slow Page Speed' : 'Weak SEO',
        }
        setBugs((prev) => [...prev, newBug])
      }
    }, 800)
    return () => clearInterval(spawnTimer)
  }, [gameActive, bugs])

  const catchBug = (id: number) => {
    playWebSound('thwip')
    setScore((prev) => prev + 1)
    setBugs((prev) => prev.filter((b) => b.id !== id))
  }

  const copyDiscountCode = () => {
    navigator.clipboard.writeText('NEXAVEL_SUPERHERO_10')
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  if (!miniGameOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative w-full max-w-[600px] h-[500px] spider-glass-card rounded-2xl border-2 border-[var(--accent-primary)] shadow-[0_0_50px_var(--accent-glow)] p-6 flex flex-col justify-between overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <Bug className="w-5 h-5 text-[var(--accent-text)] animate-bounce" />
              <h3 className="text-lg font-extrabold text-white">Catch the Digital Bugs!</h3>
            </div>
            <button
              onClick={() => setMiniGameOpen(false)}
              className="p-1 rounded-lg text-white/60 hover:text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Game Canvas Area */}
          {!gameActive && !gameFinished && (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
              <Trophy className="w-16 h-16 text-spider-gold mb-4 animate-pulse" />
              <h4 className="text-xl font-extrabold text-white mb-2">Spider-Web Challenge</h4>
              <p className="text-sm text-white/70 max-w-[400px] mb-6">
                Shoot webs to catch at least 5 digital performance bugs in 15 seconds to unlock an exclusive
                10% Superhero Discount Code!
              </p>
              <button
                onClick={startGame}
                className="px-8 py-3.5 accent-glow-button text-white text-sm font-bold rounded-xl"
              >
                Start Web Challenge
              </button>
            </div>
          )}

          {gameActive && (
            <div className="flex-1 relative my-4 rounded-xl bg-black/60 border border-white/10 overflow-hidden cursor-crosshair">
              {/* HUD Bar */}
              <div className="absolute top-3 left-4 right-4 flex justify-between text-xs font-mono text-white/80 z-10 pointer-events-none">
                <span>
                  Bugs Caught: <strong className="text-spider-gold">{score}</strong>
                </span>
                <span>
                  Time Remaining: <strong className="text-spider-red">{timeLeft}s</strong>
                </span>
              </div>

              {/* Bugs Floating */}
              {bugs.map((bug) => (
                <button
                  key={bug.id}
                  onClick={() => catchBug(bug.id)}
                  style={{ top: `${bug.y}%`, left: `${bug.x}%` }}
                  className="absolute p-3 bg-red-500/20 border border-red-500/50 rounded-full text-white text-xs font-bold flex items-center gap-1 -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform animate-pulse"
                >
                  <Bug className="w-4 h-4 text-spider-red" />
                  <span className="text-[10px] hidden sm:inline">{bug.type}</span>
                </button>
              ))}
            </div>
          )}

          {gameFinished && (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
              {score >= 5 ? (
                <>
                  <Trophy className="w-16 h-16 text-emerald-400 mb-3" />
                  <h4 className="text-2xl font-extrabold text-white mb-1">Mission Accomplished!</h4>
                  <p className="text-sm text-white/70 mb-4">
                    You caught {score} bugs! Here is your official Nexavel superhero code:
                  </p>
                  <div className="flex items-center gap-2 bg-black/60 border border-emerald-500/50 px-5 py-3 rounded-xl mb-4">
                    <code className="text-emerald-400 font-bold tracking-wider text-base">NEXAVEL_SUPERHERO_10</code>
                    <button
                      onClick={copyDiscountCode}
                      className="p-1.5 bg-emerald-500/20 hover:bg-emerald-500/30 rounded text-emerald-400"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <Bug className="w-16 h-16 text-spider-red mb-3" />
                  <h4 className="text-2xl font-extrabold text-white mb-1">Nice Try!</h4>
                  <p className="text-sm text-white/70 mb-4">You caught {score} bugs. Catch 5 or more to win!</p>
                </>
              )}

              <button
                onClick={startGame}
                className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-lg border border-white/10"
              >
                Play Again
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
