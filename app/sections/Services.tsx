'use client'

import { useEffect, useRef, useState } from 'react'
import { Globe, TrendingUp, Search, Palette, Share2, Video, CheckCircle, ArrowUpRight } from 'lucide-react'
import { useSuit } from '../context/SuitContext'
import WebHanging from '../components/WebHanging'

const services = [
  {
    icon: Globe,
    title: 'Web Engineering',
    description: 'Custom React & Next.js web applications built for lightning speed, zero lag, and ultra-high conversion.',
    tags: ['Next.js 15', 'React', 'E-Commerce', 'Web Vitals 99+'],
  },
  {
    icon: TrendingUp,
    title: 'Full-Funnel Marketing',
    description: 'Data-driven paid ads and growth funnels that turn cold visitors into high-paying loyal clients.',
    tags: ['Google Ads', 'Meta Campaigns', 'Conversion Rate'],
  },
  {
    icon: Search,
    title: 'Technical SEO Surge',
    description: 'In-depth page-1 ranking strategies, schema markup, and keyword domination to beat all competition.',
    tags: ['Page 1 Ranking', 'On-Page SEO', 'Backlink Surge'],
  },
  {
    icon: Palette,
    title: 'Brand Identity & Design',
    description: 'Complete visual identity systems, vector logos, typography, and memorable UI/UX design components.',
    tags: ['Logo Design', 'UI/UX Design', 'Design Systems'],
  },
  {
    icon: Share2,
    title: 'Social Growth Strategy',
    description: 'High-engagement social media management, community building, and viral content strategies.',
    tags: ['Content Strategy', 'Community Growth', 'Analytics'],
  },
  {
    icon: Video,
    title: 'Motion & Video Ads',
    description: 'Cinematic video editing, motion graphics, and high-impact reel ads that command total attention.',
    tags: ['Motion Graphics', 'Reels / Shorts', 'Video Ads'],
  },
]

export default function Services() {
  const { playWebSound } = useSuit()
  const sectionRef = useRef<HTMLDivElement>(null)
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = sectionRef.current?.querySelectorAll('.reveal')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-24 lg:py-32 px-[5%] bg-spider-dark relative">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-16 reveal">
          <h2 className="text-[clamp(30px,4vw,52px)] font-extrabold mb-4 accent-gradient-text">Our Digital Powers</h2>
          <p className="text-base text-white/70 leading-relaxed">
            Everything your business needs to conquer the web. Engineered with superhero precision.
          </p>
        </div>

        {/* Feature Hero Banner: spiderman-chilling-headphones.jpg */}
        <div className="reveal spider-glass-card rounded-2xl p-8 mb-12 border border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 web-stick-corner">
          <WebHanging position="top-left" />
          <div className="w-full md:w-1/2 aspect-video rounded-xl overflow-hidden border border-white/10 relative shadow-xl">
            <img
              src="/images/spiderman-chilling-headphones.jpg"
              alt="Spider-Man Chilling with Headphones"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded text-xs font-semibold text-spider-gold border border-white/10">
              Hassle-Free Agency Growth
            </span>
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-extrabold text-white mb-3">Sit Back &amp; Relax — We Got This</h3>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              You don&apos;t need to stress over code, SEO algorithms, or ad managers. Nexavel handles 100% of your digital pipeline while you enjoy predictable, scalable growth.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-white/80">
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle className="w-4 h-4 text-emerald-400" /> 100% Managed Tech
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle className="w-4 h-4 text-emerald-400" /> Weekly Growth Reports
              </span>
            </div>
          </div>
        </div>

        {/* Grid of 6 Service Cards */}
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              onClick={() => {
                playWebSound('thwip')
                setSelectedService(service)
              }}
              className="reveal spider-glass-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 accent-border-glow cursor-pointer relative group overflow-hidden web-stick-corner"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <WebHanging position="top-right" />

              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 mb-6 group-hover:border-[var(--accent-primary)] transition-colors">
                <service.icon className="w-7 h-7 text-white group-hover:text-[var(--accent-text)] transition-colors" />
              </div>

              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-extrabold text-white">{service.title}</h3>
                <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-[var(--accent-text)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>

              <p className="text-sm text-white/65 leading-relaxed mb-6">{service.description}</p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-white/60 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedService && (
        <div
          onClick={() => setSelectedService(null)}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="spider-glass-card rounded-2xl p-8 max-w-[500px] w-full border-2 border-[var(--accent-primary)] shadow-[0_0_50px_var(--accent-glow)] relative"
          >
            <WebHanging position="top-right" />
            <h3 className="text-2xl font-extrabold text-white mb-2">{selectedService.title}</h3>
            <p className="text-sm text-white/70 mb-6">{selectedService.description}</p>
            <div className="space-y-2 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-spider-gold">Key Deliverables</h4>
              {selectedService.tags.map((t) => (
                <div key={t} className="flex items-center gap-2 text-xs text-white/80">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setSelectedService(null)}
              className="w-full py-3 accent-glow-button text-white text-xs font-bold rounded-xl"
            >
              Close Blueprint
            </button>
          </div>
        </div>
      )}
    </section>
  )
}