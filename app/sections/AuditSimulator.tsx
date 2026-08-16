'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, AlertTriangle, CheckCircle2, RefreshCw, Radio } from 'lucide-react'
import { useSuit } from '../context/SuitContext'
import WebHanging from '../components/WebHanging'

const presets = [
  { name: 'My Current Store', initialPerf: 54, initialSeo: 62, initialUx: 58 },
  { name: 'SaaS Web App', initialPerf: 61, initialSeo: 70, initialUx: 64 },
  { name: 'Local Business Site', initialPerf: 48, initialSeo: 55, initialUx: 52 },
]

export default function AuditSimulator() {
  const { playWebSound } = useSuit()
  const [selectedPreset, setSelectedPreset] = useState(0)
  const [inputUrl, setInputUrl] = useState('')
  const [isScanning, setIsScanning] = useState(false)
  const [isFixed, setIsFixed] = useState(false)

  const preset = presets[selectedPreset]
  const currentPerf = isFixed ? 99 : preset.initialPerf
  const currentSeo = isFixed ? 100 : preset.initialSeo
  const currentUx = isFixed ? 98 : preset.initialUx

  const handleScan = () => {
    playWebSound('pulse')
    setIsScanning(true)
    setIsFixed(false)
    setTimeout(() => {
      setIsScanning(false)
    }, 2000)
  }

  const handleFixAll = () => {
    playWebSound('win')
    setIsFixed(true)
  }

  return (
    <section id="audit" className="py-24 px-[5%] bg-[#06060A] relative overflow-hidden">
      {/* Background Radar Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5 pointer-events-none" />

      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="text-center max-w-[700px] mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full spider-glassmorphism border border-white/10 text-xs font-semibold uppercase tracking-wider text-[var(--accent-text)] mb-4">
            <Radio className="w-4 h-4 animate-pulse text-[var(--accent-primary)]" />
            Spider-Sense Website Audit HUD
          </div>
          <h2 className="text-[clamp(30px,4vw,52px)] font-extrabold mb-4 accent-gradient-text">
            Test Your Website Power
          </h2>
          <p className="text-base text-white/70 leading-relaxed">
            Run an interactive Spider-Sense radar scan to detect digital performance bugs caught in cobwebs, then see how Nexavel web-shoots your scores to 99/100!
          </p>
        </div>

        {/* Simulator Control Box */}
        <div className="spider-glass-card rounded-2xl p-8 relative border border-white/10 web-stick-corner max-w-[900px] mx-auto">
          <WebHanging position="top-right" />

          {/* Preset Buttons & Input */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <div className="flex-1 w-full flex items-center bg-black/50 rounded-xl border border-white/10 px-4 py-2">
              <input
                type="text"
                placeholder="Enter your website URL (e.g. mybusiness.com)..."
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                className="bg-transparent text-sm text-white placeholder:text-white/40 outline-none w-full py-1"
              />
            </div>

            <button
              onClick={handleScan}
              disabled={isScanning}
              className="w-full sm:w-auto px-6 py-3 accent-glow-button text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <RefreshCw className={`w-4 h-4 ${isScanning ? 'animate-spin' : ''}`} />
              {isScanning ? 'Scanning Radar...' : 'Scan Spider-Sense'}
            </button>
          </div>

          {/* Preset Selection */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="text-xs text-white/50 font-medium">Or select preset template:</span>
            {presets.map((p, idx) => (
              <button
                key={p.name}
                onClick={() => {
                  setSelectedPreset(idx)
                  setIsFixed(false)
                  playWebSound('thwip')
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  selectedPreset === idx && !inputUrl
                    ? 'bg-white/15 border-[var(--accent-primary)] text-white'
                    : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Radar Radar Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Perf */}
            <div className="bg-black/40 rounded-xl p-6 border border-white/10 text-center relative overflow-hidden">
              <span className="text-xs font-semibold text-white/60 uppercase">Speed &amp; Performance</span>
              <div className="text-4xl font-extrabold my-3 tracking-tight text-white flex items-center justify-center gap-2">
                <span>{currentPerf}</span>
                <span className="text-sm font-normal text-white/40">/100</span>
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div
                  className="h-full transition-all duration-700 rounded-full"
                  style={{
                    width: `${currentPerf}%`,
                    backgroundColor: currentPerf > 90 ? '#10B981' : 'var(--accent-primary)',
                  }}
                />
              </div>
            </div>

            {/* SEO */}
            <div className="bg-black/40 rounded-xl p-6 border border-white/10 text-center relative overflow-hidden">
              <span className="text-xs font-semibold text-white/60 uppercase">Google SEO Ranking</span>
              <div className="text-4xl font-extrabold my-3 tracking-tight text-white flex items-center justify-center gap-2">
                <span>{currentSeo}</span>
                <span className="text-sm font-normal text-white/40">/100</span>
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div
                  className="h-full transition-all duration-700 rounded-full"
                  style={{
                    width: `${currentSeo}%`,
                    backgroundColor: currentSeo > 90 ? '#10B981' : '#EAB308',
                  }}
                />
              </div>
            </div>

            {/* UX */}
            <div className="bg-black/40 rounded-xl p-6 border border-white/10 text-center relative overflow-hidden">
              <span className="text-xs font-semibold text-white/60 uppercase">Mobile UX &amp; Conversion</span>
              <div className="text-4xl font-extrabold my-3 tracking-tight text-white flex items-center justify-center gap-2">
                <span>{currentUx}</span>
                <span className="text-sm font-normal text-white/40">/100</span>
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div
                  className="h-full transition-all duration-700 rounded-full"
                  style={{
                    width: `${currentUx}%`,
                    backgroundColor: currentUx > 90 ? '#10B981' : '#3B82F6',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Status Message & Action */}
          <div className="bg-black/60 rounded-xl p-5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {!isFixed ? (
                <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-500 animate-pulse">
                  <AlertTriangle className="w-5 h-5" />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              )}
              <div>
                <h4 className="text-sm font-bold text-white">
                  {!isFixed ? 'Spider-Sense Tingling! Bugs Caught in Webs' : 'Webs Cleared & Scores Maxed Out!'}
                </h4>
                <p className="text-xs text-white/60">
                  {!isFixed
                    ? 'Unoptimized images, slow code, and weak SEO are slowing down your growth.'
                    : 'Nexavel Next.js architecture delivers sub-second load times & 99/100 scores.'}
                </p>
              </div>
            </div>

            {!isFixed && (
              <button
                onClick={handleFixAll}
                className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white text-xs font-bold rounded-lg shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Zap className="w-4 h-4 fill-white" />
                Web-Shoot &amp; Fix All Bugs
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
