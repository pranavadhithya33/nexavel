'use client'

import { useEffect, useRef } from 'react'
import { Check, X, Zap, Sparkles } from 'lucide-react'
import WebHanging from '../components/WebHanging'

const comparison = [
  { feature: 'Turnaround Time', traditional: '2 to 4 Months (Slow)', nexavel: '2 to 3 Weeks (Sprint Deployment)' },
  { feature: 'Core Technology Stack', traditional: 'Slow Legacy Builders', nexavel: 'Next.js 15, React, Web Vitals 99+' },
  { feature: 'Pricing Model', traditional: 'Hidden Extra Fees', nexavel: '100% Secret Confidential Proposals' },
  { feature: 'Team Multiverse Alliance', traditional: 'Outsourced Freelancers', nexavel: 'Triple-Spider In-House Squad' },
  { feature: 'Post-Launch Guarantee', traditional: 'Ghosting after delivery', nexavel: 'Continuous Spider-Sense Audits' },
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )

    const items = sectionRef.current?.querySelectorAll('.reveal')
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 lg:py-32 px-[5%] bg-spider-dark relative overflow-hidden">
      {/* Background Watermark Image */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] opacity-10 pointer-events-none -translate-y-1/2 rounded-full overflow-hidden">
        <img src="/images/spiderman-emblem.jpg" alt="Spider Watermark" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Text Info */}
          <div className="lg:col-span-6 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full spider-glass-card border border-[var(--accent-primary)]/40 text-xs font-extrabold uppercase tracking-wider text-[var(--accent-text)] mb-4 shadow-[0_0_15px_var(--accent-glow)]">
              <Zap className="w-4 h-4 text-spider-gold" />
              The Multiverse Alliance
            </div>

            <h2 className="text-[clamp(30px,4vw,52px)] font-extrabold leading-tight mb-6">
              We Are the <span className="accent-gradient-text">Triple-Spider Squad</span>
            </h2>

            <p className="text-base text-white/80 leading-relaxed mb-6">
              Just like the 3 Spider-Men joining forces across the multiverse, Nexavel brings together three unstoppable core disciplines: <strong className="text-white">Web Engineering</strong>, <strong className="text-white">Brand Design</strong>, and <strong className="text-white">Performance Marketing</strong>.
            </p>

            <p className="text-base text-white/80 leading-relaxed mb-8">
              We don&apos;t build generic websites — we craft iconic digital weapons designed to dominate your market.
            </p>

            <div className="grid grid-cols-3 gap-6 p-5 rounded-xl bg-white/5 border border-white/15">
              <div>
                <h4 className="text-3xl font-extrabold accent-gradient-text">150+</h4>
                <p className="text-[12px] text-white/60 mt-1 font-semibold">Missions Accomplished</p>
              </div>
              <div>
                <h4 className="text-3xl font-extrabold accent-gradient-text">99%</h4>
                <p className="text-[12px] text-white/60 mt-1 font-semibold">Satisfaction Rate</p>
              </div>
              <div>
                <h4 className="text-3xl font-extrabold accent-gradient-text">5+</h4>
                <p className="text-[12px] text-white/60 mt-1 font-semibold">Years Battling</p>
              </div>
            </div>
          </div>

          {/* User Image: spiderman-trio.jpg (3 Spider-Men Alliance) */}
          <div className="lg:col-span-6 reveal relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[var(--accent-primary)] shadow-[0_0_45px_var(--accent-glow)] web-stick-corner">
            <WebHanging position="top-right" />
            <WebHanging position="bottom-left" />
            <img
              src="/images/spiderman-trio.jpg"
              alt="The 3 Spider-Men Alliance"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 bg-black/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-extrabold text-white border border-white/20 shadow-xl">
              Multiverse Power Trio: Engineering + Brand + Growth
            </span>
          </div>
        </div>

        {/* Animated Connecting Web Divider */}
        <div className="web-divider-line" />

        {/* Comparison Table */}
        <div className="spider-glass-card rounded-2xl p-8 border-2 border-white/15 web-stick-corner relative shadow-[0_0_40px_rgba(0,0,0,0.8)]">
          <WebHanging position="top-left" />
          <WebHanging position="bottom-right" />

          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-spider-gold mb-2">
              <Sparkles className="w-4 h-4 text-spider-gold" />
              Superhero Standards
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              Traditional Agencies vs <span className="accent-gradient-text">Nexavel Superhero Agency</span>
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/15 text-xs font-bold uppercase tracking-wider">
                  <th className="py-4 px-4 text-white/60 w-1/3">Feature</th>
                  <th className="py-4 px-4 text-red-400/90 w-1/3">Traditional Agency</th>
                  <th className="py-4 px-4 text-[var(--accent-text)] w-1/3">Nexavel Superhero Agency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {comparison.map((row) => (
                  <tr key={row.feature} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 font-bold text-white">{row.feature}</td>
                    <td className="py-4 px-4 text-white/70">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-400 shrink-0" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-extrabold text-white">
                      <div className="flex items-center gap-2 text-emerald-400">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{row.nexavel}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}