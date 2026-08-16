'use client'

import Logo from '../components/Logo'
import { useSuit } from '../context/SuitContext'

const footerLinks = [
  { href: '#services', label: 'Powers' },
  { href: '#estimator', label: 'Secret Blueprint' },
  { href: '#audit', label: 'Spider-Sense HUD' },
  { href: '#about', label: 'Multiverse Squad' },
  { href: '#portfolio', label: 'Case Files' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const { playWebSound } = useSuit()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    playWebSound('thwip')
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="px-[5%] py-12 bg-[#040407] border-t border-white/10 relative z-10">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Logo size={32} />
          <span className="text-lg font-extrabold text-white tracking-[2px]">
            NEX<span className="text-[var(--accent-text)]">AVEL</span>
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-xs font-semibold text-white/50 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="text-center text-xs text-white/30 mt-8 pt-6 border-t border-white/5">
        &copy; {new Date().getFullYear()} Nexavel Digital Agency. All rights reserved. Powered by Superhero Web Engineering.
      </div>
    </footer>
  )
}