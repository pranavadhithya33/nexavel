'use client'

import React from 'react'
import { Volume2, VolumeX, Gamepad2, ArrowUp, Shield, MessageSquare, Phone } from 'lucide-react'
import { useSuit, SuitMode } from '../context/SuitContext'

export default function InteractiveDock() {
  const { currentSuit, setSuit, soundEnabled, toggleSound, playWebSound, setMiniGameOpen } = useSuit()

  const handleSuitChange = (suit: SuitMode) => {
    playWebSound('thwip')
    setSuit(suit)
  }

  const scrollToTop = () => {
    playWebSound('thwip')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 p-2.5 rounded-full spider-glass-card border-2 border-[var(--accent-primary)] shadow-[0_0_30px_var(--accent-glow)] max-w-[95vw] overflow-x-auto no-scrollbar">
      {/* Suit Lab Switcher Widget */}
      <div className="flex items-center gap-1 bg-black/60 p-1 rounded-full border border-white/10">
        <button
          onClick={() => handleSuitChange('classic')}
          title="Classic Tobey Red/Blue Suit"
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
            currentSuit === 'classic'
              ? 'bg-spider-red text-white shadow-[0_0_12px_rgba(226,54,54,0.6)]'
              : 'text-white/60 hover:text-white'
          }`}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-spider-red border border-white/40" />
          <span className="hidden sm:inline">Classic</span>
        </button>

        <button
          onClick={() => handleSuitChange('iron')}
          title="Iron Spider Tech-Gold Suit"
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
            currentSuit === 'iron'
              ? 'bg-spider-gold text-black shadow-[0_0_12px_rgba(234,179,8,0.6)]'
              : 'text-white/60 hover:text-white'
          }`}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-spider-gold border border-black/40" />
          <span className="hidden sm:inline">Iron</span>
        </button>

        <button
          onClick={() => handleSuitChange('symbiote')}
          title="Black Symbiote Cyber-Silver Suit"
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
            currentSuit === 'symbiote'
              ? 'bg-slate-700 text-white shadow-[0_0_12px_rgba(148,163,184,0.6)]'
              : 'text-white/60 hover:text-white'
          }`}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300 border border-white/40" />
          <span className="hidden sm:inline">Symbiote</span>
        </button>
      </div>

      <div className="h-5 w-[1px] bg-white/15 hidden sm:block" />

      {/* Mini-Game Launcher */}
      <button
        onClick={() => {
          playWebSound('thwip')
          setMiniGameOpen(true)
        }}
        title="Play Spider Bug Challenge"
        className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors relative group border border-white/10"
      >
        <Gamepad2 className="w-4 h-4 text-spider-gold group-hover:scale-110 transition-transform" />
      </button>

      {/* Sound Toggle */}
      <button
        onClick={toggleSound}
        title={soundEnabled ? 'Mute Web Audio' : 'Unmute Web Audio'}
        className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors border border-white/10"
      >
        {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-white/40" />}
      </button>

      {/* Direct WhatsApp Call */}
      <a
        href="https://wa.me/?text=Hi%20Nexavel!%20I%20want%20to%20enquire%20about%20your%20digital%20powers."
        target="_blank"
        rel="noopener noreferrer"
        title="Direct WhatsApp Enquiry"
        className="p-2.5 rounded-full bg-green-600/80 hover:bg-green-600 text-white transition-colors border border-green-400/30"
      >
        <MessageSquare className="w-4 h-4" />
      </a>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        title="Web-Swing to Top"
        className="p-2.5 rounded-full accent-glow-button text-white transition-transform hover:-translate-y-1"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  )
}
