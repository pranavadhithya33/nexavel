'use client'

import { useEffect, useRef, useState } from 'react'
import { Star, Quote, HeartHandshake } from 'lucide-react'
import WebHanging from '../components/WebHanging'

const testimonials = [
  {
    text: "Nexavel completely transformed our online presence. Our site went from an afterthought to our #1 sales channel within 3 weeks. They act like true digital partners.",
    name: 'Peter Parker',
    role: 'Founder, Parker Growth Labs',
    avatar: '/images/peter-parker-suit.jpg',
    rating: 5,
  },
  {
    text: "The SEO surge results speak for themselves. We went from page 5 to page 1 in record time. Nexavel doesn't just promise — they execute like superheroes.",
    name: 'Gwen Stacy',
    role: 'CEO, Horizon Science Tech',
    avatar: '/images/spiderman-city-gwen.jpg',
    rating: 5,
  },
  {
    text: "Working with Nexavel felt like having an elite superhero team on speed dial. Fast, sharp, and always thinking three steps ahead.",
    name: 'Miles Morales',
    role: 'Creative Director, Spider-Verse Media',
    avatar: '/images/peter-spiderman-reveal.jpg',
    rating: 5,
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

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
    <section className="py-24 lg:py-32 px-[5%] bg-spider-dark relative">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full spider-glass-card border border-[var(--accent-primary)]/40 text-xs font-extrabold uppercase tracking-wider text-spider-gold mb-4 shadow-[0_0_15px_var(--accent-glow)]">
            <HeartHandshake className="w-4 h-4 text-spider-gold" />
            Client Trust &amp; Partnerships
          </div>
          <h2 className="text-[clamp(30px,4vw,52px)] font-extrabold mb-4 accent-gradient-text">
            What Our Alliances Say
          </h2>
          <p className="text-base text-white/70 leading-relaxed">
            Real growth for real businesses. Read how our superhero agency partners with founders to win.
          </p>
        </div>

        {/* Feature Image Card: spiderman-city-gwen.jpg */}
        <div className="reveal spider-glass-card rounded-2xl p-8 mb-12 border border-white/15 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 web-stick-corner">
          <WebHanging position="top-right" />
          <div className="w-full md:w-1/2 aspect-video rounded-xl overflow-hidden border border-white/10 relative shadow-xl bg-black/60">
            <img
              src="/images/spiderman-city-gwen.jpg"
              alt="Spider-Man with Gwen Stacy - Client Trust"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 bg-black/90 backdrop-blur-md px-3 py-1 rounded text-xs font-bold text-white border border-white/15">
              Trusted Client Partnerships
            </span>
          </div>

          <div className="w-full md:w-1/2">
            <Quote className="w-10 h-10 text-[var(--accent-text)] mb-3 opacity-80" />
            <p className="text-base text-white/95 italic leading-relaxed mb-4">
              &ldquo;{testimonials[activeIndex].text}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <img
                src={testimonials[activeIndex].avatar}
                alt={testimonials[activeIndex].name}
                className="w-12 h-12 rounded-full object-cover border-2 border-[var(--accent-primary)] shadow-lg"
              />
              <div>
                <h4 className="text-base font-bold text-white">{testimonials[activeIndex].name}</h4>
                <p className="text-xs text-white/60 font-medium">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid Switcher */}
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              onClick={() => setActiveIndex(idx)}
              className={`reveal spider-glass-card rounded-2xl p-6 border transition-all duration-300 cursor-pointer web-stick-corner ${
                activeIndex === idx
                  ? 'border-[var(--accent-primary)] shadow-[0_0_25px_var(--accent-glow)] bg-white/10'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <WebHanging position="top-left" />
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              <p className="text-xs leading-relaxed text-white/80 mb-6 line-clamp-3">&ldquo;{t.text}&rdquo;</p>

              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/20"
                />
                <div>
                  <h5 className="text-xs font-bold text-white">{t.name}</h5>
                  <p className="text-[11px] text-white/60">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}