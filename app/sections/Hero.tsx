'use client'

import { motion } from 'framer-motion'
import { Sparkles, Shield, ArrowRight, Zap, ShieldCheck } from 'lucide-react'
import { useSuit } from '../context/SuitContext'
import WebHanging from '../components/WebHanging'

export default function Hero() {
  const { playWebSound } = useSuit()

  const scrollToServices = () => {
    playWebSound('thwip')
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollToEstimator = () => {
    playWebSound('thwip')
    document.querySelector('#estimator')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden py-28 px-[5%]">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-[1400px] mx-auto gap-12">
        {/* Text Content */}
        <motion.div
          className="flex-1 max-w-[640px] text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Superhero Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full spider-glass-card border border-[var(--accent-primary)]/40 text-xs font-extrabold uppercase tracking-wider text-[var(--accent-text)] mb-6 shadow-[0_0_20px_var(--accent-glow)]">
            <Zap className="w-4 h-4 text-spider-gold animate-pulse" />
            Nexavel Superhero Digital Agency
          </div>

          <h1 className="text-[clamp(38px,5.5vw,68px)] font-black leading-[1.08] mb-6 tracking-tight">
            Behind Every <span className="accent-gradient-text">Great Brand</span> Is a <span className="text-[var(--accent-text)]">Hero</span>
          </h1>

          <p className="text-lg text-white/80 leading-relaxed mb-8">
            We are Nexavel — the digital agency that swings into action when your business needs to explode.
            High-performance Next.js web engineering, technical SEO surge, and brand identity — all under one suit.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12">
            <button
              onClick={scrollToEstimator}
              className="px-8 py-4 accent-glow-button text-white text-base font-bold rounded-xl flex items-center gap-2 tracking-wide"
            >
              Build Secret Blueprint
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={scrollToServices}
              className="px-7 py-4 bg-white/5 hover:bg-white/10 text-white text-base font-semibold rounded-xl border border-white/15 transition-all flex items-center gap-2 hover:border-[var(--accent-primary)]"
            >
              Explore Powers
            </button>
          </div>

          {/* Metric Bar */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/15">
            <div>
              <h4 className="text-3xl font-extrabold text-white accent-gradient-text">+340%</h4>
              <p className="text-xs text-white/60 mt-1 uppercase tracking-wider font-semibold">Organic Traffic Surge</p>
            </div>
            <div>
              <h4 className="text-3xl font-extrabold text-white accent-gradient-text">150+</h4>
              <p className="text-xs text-white/60 mt-1 uppercase tracking-wider font-semibold">Missions Accomplished</p>
            </div>
            <div>
              <h4 className="text-3xl font-extrabold text-white accent-gradient-text">99.4%</h4>
              <p className="text-xs text-white/60 mt-1 uppercase tracking-wider font-semibold">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>

        {/* Dual Superhero Showcase (NO MASK REVEAL GIMMICK) */}
        <motion.div
          className="relative flex-1 w-full max-w-[600px] flex items-center justify-center gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main Unmasked Spider-Man Photo Card */}
          <div className="relative flex-1 aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[var(--accent-primary)] shadow-[0_0_50px_var(--accent-glow)] web-stick-corner group">
            <WebHanging position="top-right" />
            <img
              src="/images/peter-spiderman-reveal.jpg"
              alt="Peter Parker Spider-Man Reveal"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-left">
              <span className="inline-block px-3 py-1 bg-[var(--accent-primary)] text-white text-[11px] font-extrabold uppercase rounded tracking-wider mb-1">
                Night Mission: Web Engineering
              </span>
              <p className="text-xs text-white/80 font-medium">Ultra-Fast React &amp; Next.js Systems</p>
            </div>
          </div>

          {/* Secondary Corporate Suit Card */}
          <div className="relative flex-1 aspect-[3/4] rounded-2xl overflow-hidden border border-white/20 shadow-2xl web-stick-corner group hidden sm:block">
            <WebHanging position="top-left" />
            <img
              src="/images/peter-parker-suit.jpg"
              alt="Peter Parker Corporate Strategist"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-left">
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md text-spider-gold border border-white/20 text-[11px] font-extrabold uppercase rounded tracking-wider mb-1">
                Day Mission: Growth Strategy
              </span>
              <p className="text-xs text-white/80 font-medium">Business Branding &amp; High ROI Ads</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}