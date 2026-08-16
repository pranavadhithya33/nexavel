'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Check, Download, PhoneCall, Sparkles, MessageSquare } from 'lucide-react'
import { useSuit } from '../context/SuitContext'
import WebHanging from '../components/WebHanging'

const scopeOptions = [
  { id: 'web', name: 'Custom Next.js Web App', desc: 'High-speed React/Next.js frontend with animations' },
  { id: 'seo', name: 'Technical SEO Surge', desc: 'Page 1 Google ranking & keyword optimization' },
  { id: 'brand', name: 'Brand Identity & Logo', desc: 'Complete visual identity system & style guides' },
  { id: 'ads', name: 'Full-Funnel Paid Ads', desc: 'Meta, Google & LinkedIn high-ROI ad campaign' },
  { id: 'video', name: 'Motion Video & Reels', desc: 'Explainer videos & cinematic motion graphics' },
]

const addOnOptions = [
  { id: 'cms', name: 'CMS Content Manager' },
  { id: 'multilang', name: 'Multi-Language Support' },
  { id: 'motion3d', name: '3D Web Animations' },
  { id: 'aichat', name: 'AI Chatbot Integration' },
]

export default function ProjectEstimator() {
  const { playWebSound } = useSuit()
  const [selectedScopes, setSelectedScopes] = useState<string[]>(['web', 'seo'])
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['motion3d'])
  const [downloadSuccess, setDownloadSuccess] = useState(false)

  const toggleScope = (id: string) => {
    playWebSound('thwip')
    setSelectedScopes((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const toggleAddon = (id: string) => {
    playWebSound('thwip')
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const generateBlueprintText = () => {
    const selectedScopeNames = scopeOptions
      .filter((s) => selectedScopes.includes(s.id))
      .map((s) => s.name)
    const selectedAddonNames = addOnOptions
      .filter((a) => selectedAddons.includes(a.id))
      .map((a) => a.name)

    return `================================================
NEXAVEL DIGITAL AGENCY — CONFIDENTIAL BLUEPRINT
================================================
Requested Services:
${selectedScopeNames.map((s) => ` - ${s}`).join('\n')}

Included Add-ons:
${selectedAddonNames.map((a) => ` - ${a}`).join('\n')}

Est. Delivery Speed: 2-3 Weeks (Supercharged Deployment)
Confidentiality Status: Lock-In Direct Call Request
================================================
Send this specification to Nexavel for an immediate confidential consultation.
WhatsApp / Phone Direct: +1 (800) NEXAVEL
================================================`
  }

  const handleDownloadBlueprint = () => {
    playWebSound('win')
    const element = document.createElement('a')
    const file = new Blob([generateBlueprintText()], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = 'Nexavel_Confidential_Project_Blueprint.txt'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)

    setDownloadSuccess(true)
    setTimeout(() => setDownloadSuccess(false), 4000)
  }

  const handleWhatsAppEnquiry = () => {
    playWebSound('thwip')
    const selectedScopeNames = scopeOptions
      .filter((s) => selectedScopes.includes(s.id))
      .map((s) => s.name)
      .join(', ')
    const text = encodeURIComponent(
      `Hello Nexavel Team! I generated a project blueprint for: ${selectedScopeNames}. I would like to request a secret quote and consultation call.`
    )
    window.open(`https://wa.me/?text=${text}`, '_blank')
  }

  const scrollToContact = () => {
    playWebSound('thwip')
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="estimator" className="py-24 px-[5%] bg-spider-dark relative overflow-hidden">
      {/* Spider Emblem Texture Card Header Background */}
      <div className="absolute top-10 right-10 w-[300px] h-[300px] opacity-10 pointer-events-none rounded-full overflow-hidden">
        <img src="/images/spiderman-emblem.jpg" alt="Spider Suit Armor" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center max-w-[700px] mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full spider-glassmorphism border border-white/10 text-xs font-semibold uppercase tracking-wider text-spider-gold mb-4">
            <Shield className="w-4 h-4 text-spider-gold" />
            Confidential Project Builder (Zero DB)
          </div>
          <h2 className="text-[clamp(30px,4vw,52px)] font-extrabold mb-4 accent-gradient-text">
            Assemble Your Digital Suit
          </h2>
          <p className="text-base text-white/70 leading-relaxed">
            Select your project requirements to generate a private, downloadable project specification blueprint.
            Pricing remains 100% confidential — click to request a secret direct consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Options Matrix */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="spider-glass-card rounded-2xl p-6 relative web-stick-corner">
              <WebHanging position="top-right" />
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-spider-red" />
                1. Core Mission Scope
              </h3>
              <div className="flex flex-col gap-3">
                {scopeOptions.map((item) => {
                  const isSelected = selectedScopes.includes(item.id)
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleScope(item.id)}
                      className={`flex items-start justify-between p-4 rounded-xl text-left border transition-all duration-200 ${
                        isSelected
                          ? 'bg-white/10 border-[var(--accent-primary)] shadow-[0_0_20px_var(--accent-glow)]'
                          : 'bg-white/5 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div>
                        <h4 className="text-base font-bold text-white">{item.name}</h4>
                        <p className="text-xs text-white/60 mt-0.5">{item.desc}</p>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-md flex items-center justify-center border mt-0.5 transition-colors ${
                          isSelected
                            ? 'bg-[var(--accent-primary)] border-[var(--accent-primary)] text-white'
                            : 'border-white/30 text-transparent'
                        }`}
                      >
                        <Check className="w-4 h-4" />
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Add-ons */}
            <div className="spider-glass-card rounded-2xl p-6 relative web-stick-corner">
              <h3 className="text-lg font-bold text-white mb-3">2. Power Add-ons</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addOnOptions.map((addon) => {
                  const isSelected = selectedAddons.includes(addon.id)
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-center justify-between p-3.5 rounded-xl border text-sm font-medium transition-all ${
                        isSelected
                          ? 'bg-white/10 border-[var(--accent-primary)] text-white'
                          : 'bg-white/5 border-white/10 text-white/70 hover:border-white/20'
                      }`}
                    >
                      <span>{addon.name}</span>
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center border ${
                          isSelected
                            ? 'bg-[var(--accent-primary)] border-[var(--accent-primary)] text-white'
                            : 'border-white/30 text-transparent'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Blueprint Card Output */}
          <div className="lg:col-span-5 spider-glass-card rounded-2xl p-8 relative border-2 border-[var(--accent-primary)] shadow-[0_0_30px_var(--accent-glow)] web-stick-corner">
            <WebHanging position="top-left" />

            {/* Emblem Image Badge */}
            <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/20 mb-6 shadow-lg">
              <img src="/images/spiderman-emblem.jpg" alt="Spider Emblem" className="w-full h-full object-cover" />
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-2">Secret Blueprint Ready</h3>
            <p className="text-sm text-white/60 mb-6">
              Your custom project blueprint is compiled locally in browser. Pricing is confidential.
            </p>

            <div className="space-y-4 mb-8 bg-black/40 p-4 rounded-xl border border-white/10 text-xs font-mono">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/50">Selected Scope:</span>
                <span className="text-white font-bold">{selectedScopes.length} Modules</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/50">Add-ons Selected:</span>
                <span className="text-white font-bold">{selectedAddons.length} Extras</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/50">Estimated Timeline:</span>
                <span className="text-spider-gold font-bold">2 - 3 Weeks</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Quote Status:</span>
                <span className="text-[var(--accent-text)] font-bold">Confidential Proposal</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleDownloadBlueprint}
                className="w-full py-3.5 px-5 accent-glow-button rounded-xl text-white text-sm font-bold flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                {downloadSuccess ? 'Blueprint Downloaded!' : 'Download Secret Blueprint (.TXT)'}
              </button>

              <button
                onClick={handleWhatsAppEnquiry}
                className="w-full py-3.5 px-5 bg-green-600/90 hover:bg-green-600 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-600/20"
              >
                <MessageSquare className="w-4 h-4" />
                Send Scope via WhatsApp
              </button>

              <button
                onClick={scrollToContact}
                className="w-full py-3 px-5 bg-white/10 hover:bg-white/15 text-white/90 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-colors border border-white/10"
              >
                <PhoneCall className="w-4 h-4 text-spider-gold" />
                Request Secret Phone Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
