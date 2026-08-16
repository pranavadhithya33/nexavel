'use client'

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

export type SuitMode = 'classic' | 'iron' | 'symbiote'

interface SuitContextType {
  currentSuit: SuitMode
  setSuit: (suit: SuitMode) => void
  soundEnabled: boolean
  toggleSound: () => void
  playWebSound: (type?: 'thwip' | 'pulse' | 'win') => void
  miniGameOpen: boolean
  setMiniGameOpen: (open: boolean) => void
  discountClaimed: boolean
  claimDiscount: () => void
}

const SuitContext = createContext<SuitContextType | undefined>(undefined)

export function SuitProvider({ children }: { children: React.ReactNode }) {
  const [currentSuit, setCurrentSuitState] = useState<SuitMode>('classic')
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [miniGameOpen, setMiniGameOpen] = useState(false)
  const [discountClaimed, setDiscountClaimed] = useState(false)

  // Sync suit attribute with document body
  const setSuit = useCallback((suit: SuitMode) => {
    setCurrentSuitState(suit)
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-suit', suit)
      try {
        localStorage.setItem('nexavel_suit', suit)
      } catch (e) {
        // ignore
      }
    }
  }, [])

  useEffect(() => {
    try {
      const saved = localStorage.getItem('nexavel_suit') as SuitMode
      if (saved && ['classic', 'iron', 'symbiote'].includes(saved)) {
        setSuit(saved)
      }
    } catch (e) {
      // ignore
    }
  }, [setSuit])

  const toggleSound = () => setSoundEnabled((prev) => !prev)

  // Web Audio API Synthesizer (No external MP3 files needed!)
  const playWebSound = useCallback((type: 'thwip' | 'pulse' | 'win' = 'thwip') => {
    if (!soundEnabled || typeof window === 'undefined') return
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (!AudioCtx) return
      const ctx = new AudioCtx()

      if (type === 'thwip') {
        // Web shooter THWIP sound
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = 'sine'
        osc.frequency.setValueAtTime(800, ctx.currentTime)
        osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.12)
        gain.gain.setValueAtTime(0.2, ctx.currentTime)
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12)
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.start()
        osc.stop(ctx.currentTime + 0.12)
      } else if (type === 'pulse') {
        // Spider sense warning pulse
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = 'triangle'
        osc.frequency.setValueAtTime(440, ctx.currentTime)
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.08)
        gain.gain.setValueAtTime(0.15, ctx.currentTime)
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2)
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.start()
        osc.stop(ctx.currentTime + 0.2)
      } else if (type === 'win') {
        // Superhero victory sound
        const notes = [523.25, 659.25, 783.99, 1046.5]
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator()
          const gain = ctx.createGain()
          osc.type = 'sine'
          osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08)
          gain.gain.setValueAtTime(0.15, ctx.currentTime + idx * 0.08)
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + idx * 0.08 + 0.2)
          osc.connect(gain)
          gain.connect(ctx.destination)
          osc.start(ctx.currentTime + idx * 0.08)
          osc.stop(ctx.currentTime + idx * 0.08 + 0.2)
        })
      }
    } catch (e) {
      // AudioContext policy catch
    }
  }, [soundEnabled])

  const claimDiscount = () => {
    setDiscountClaimed(true)
    playWebSound('win')
  }

  return (
    <SuitContext.Provider
      value={{
        currentSuit,
        setSuit,
        soundEnabled,
        toggleSound,
        playWebSound,
        miniGameOpen,
        setMiniGameOpen,
        discountClaimed,
        claimDiscount,
      }}
    >
      {children}
    </SuitContext.Provider>
  )
}

export function useSuit() {
  const context = useContext(SuitContext)
  if (!context) {
    throw new Error('useSuit must be used within a SuitProvider')
  }
  return context
}
