'use client'

import { useState, useEffect } from 'react'
import Logo from './Logo'
import { useSuit } from '../context/SuitContext'
import { Zap, Phone } from 'lucide-react'

const navLinks = [
  { href: '#services', label: 'Powers' },
  { href: '#estimator', label: 'Secret Blueprint' },
  { href: '#audit', label: 'Spider-Sense HUD' },
  { href: '#about', label: 'Multiverse Squad' },
  { href: '#portfolio', label: 'Case Files' },
  { href: '#contact', label: 'Call Us' },
]

export default function Navbar() {
  const { playWebSound } = useSuit()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const totalHeight = document.body.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    playWebSound('thwip')
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-spider-dark/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-spider-dark/95 via-spider-dark/50 to-transparent py-5'
      }`}
    >
      {/* Scroll Progress Line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="flex items-center justify-between px-[5%] max-w-[1400px] mx-auto">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            playWebSound('thwip')
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center gap-3 group"
        >
          <div className="p-1 rounded-xl bg-white/5 border border-white/10 group-hover:border-[var(--accent-primary)] transition-colors">
            <Logo size={36} />
          </div>
          <span className="text-xl font-extrabold text-white tracking-[2px] font-sans">
            NEX<span className="text-[var(--accent-text)]">AVEL</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-7 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-white/70 text-xs font-bold uppercase tracking-wider hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--accent-primary)] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className="px-5 py-2.5 accent-glow-button rounded-xl text-white text-xs font-bold flex items-center gap-2 tracking-wide"
          >
            <Phone className="w-3.5 h-3.5" />
            Enquire Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg border border-white/10 bg-white/5"
          onClick={() => {
            playWebSound('thwip')
            setMobileOpen(!mobileOpen)
          }}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-spider-dark/98 backdrop-blur-2xl border-t border-white/10 mt-3 py-4">
          <ul className="flex flex-col gap-1 px-[5%]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="block py-3 px-4 rounded-xl text-white/80 hover:text-white hover:bg-white/10 text-sm font-semibold transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}