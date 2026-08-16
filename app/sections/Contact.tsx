'use client'

import { useState } from 'react'
import { Send, CheckCircle, PhoneCall, Shield, MessageSquare } from 'lucide-react'
import { useSuit } from '../context/SuitContext'
import WebHanging from '../components/WebHanging'

export default function Contact() {
  const { playWebSound } = useSuit()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    business: '',
    notes: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    playWebSound('win')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: '', phone: '', email: '', business: '', notes: '' })
  }

  return (
    <section id="contact" className="py-24 lg:py-32 px-[5%] bg-spider-dark relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent-primary)]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-[1000px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full spider-glass-card border border-white/10 text-xs font-semibold uppercase tracking-wider text-[var(--accent-text)] mb-4">
            <PhoneCall className="w-4 h-4 text-spider-gold" />
            Direct Line &amp; Confidential Consultation
          </div>
          <h2 className="text-[clamp(32px,4.5vw,56px)] font-extrabold mb-4">
            Ready to <span className="accent-gradient-text">Suit Up</span>?
          </h2>
          <p className="text-base text-white/70">
            Submit your phone number and project notes. We&apos;ll swing into action within 24 hours with a confidential proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* User Image: spiderman-crouch.jpg (Action Crouching Spider-Man Pose) */}
          <div className="lg:col-span-5 relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[var(--accent-primary)] shadow-[0_0_40px_var(--accent-glow)] web-stick-corner">
            <WebHanging position="top-left" />
            <img
              src="/images/spiderman-crouch.jpg"
              alt="Spider-Man Action Crouch"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <span className="inline-block px-4 py-1.5 bg-black/80 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/20">
                Ready to Leap Into Action For You
              </span>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7 spider-glass-card rounded-2xl p-8 border border-white/10 relative web-stick-corner">
            <WebHanging position="top-right" />

            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <CheckCircle className="w-16 h-16 text-emerald-400 mb-4 animate-bounce" />
                <h3 className="text-2xl font-extrabold text-white mb-2">Inquiry Web-Transmitted!</h3>
                <p className="text-sm text-white/70 max-w-[350px]">
                  Thank you! Our superhero team received your secret inquiry and will call your number within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-white/70 mb-1 block">Your Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Peter Parker"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white text-sm outline-none focus:border-[var(--accent-primary)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-white/70 mb-1 block">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="e.g. +1 (555) 019-2834"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white text-sm outline-none focus:border-[var(--accent-primary)] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-white/70 mb-1 block">Email Address</label>
                    <input
                      type="email"
                      placeholder="peter@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white text-sm outline-none focus:border-[var(--accent-primary)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-white/70 mb-1 block">Company / Business Name</label>
                    <input
                      type="text"
                      placeholder="Daily Bugle Inc."
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white text-sm outline-none focus:border-[var(--accent-primary)] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-white/70 mb-1 block">Project Scope &amp; Notes</label>
                  <textarea
                    placeholder="Tell us about your project goals, website ideas, or requirements..."
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white text-sm outline-none focus:border-[var(--accent-primary)] transition-colors resize-y min-h-[100px]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 accent-glow-button text-white text-base font-bold rounded-xl flex items-center justify-center gap-2 tracking-wide"
                >
                  Request Secret Consultation Call
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}