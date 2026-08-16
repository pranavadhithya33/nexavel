'use client'

import { useEffect, useRef, useState } from 'react'
import { ExternalLink, ShieldCheck } from 'lucide-react'
import { useSuit } from '../context/SuitContext'
import WebHanging from '../components/WebHanging'

const projects = [
  {
    title: 'Urban Threads E-Commerce',
    category: 'E-Commerce',
    description: 'Next.js 15 e-commerce overhaul & technical SEO surge strategy',
    result: '+340% organic revenue',
    image: '/images/spiderman-city-swing.jpg',
    tags: ['Next.js 15', 'Stripe', 'Tailwind', 'SEO Surge'],
    stats: 'Conversion rate surged from 1.2% to 4.8%',
  },
  {
    title: 'CloudSync SaaS Platform',
    category: 'SaaS & Tech',
    description: 'High-converting SaaS dashboard & paid ad acquisition funnel',
    result: '-42% cost per acquisition',
    image: '/images/spiderman-emblem.jpg',
    tags: ['React', 'Framer Motion', 'Meta Ads', 'Analytics'],
    stats: 'Acquired 12,000 active users in 60 days',
  },
  {
    title: 'Savor & Stone Hospitality',
    category: 'Hospitality',
    description: 'Local Google SEO domination & social media growth campaign',
    result: '+200% foot traffic',
    image: '/images/spiderman-chilling-headphones.jpg',
    tags: ['Local SEO', 'Google Maps #1', 'Instagram Growth'],
    stats: 'Booked out 4 weeks in advance',
  },
  {
    title: 'IronPulse Fitness & Gear',
    category: 'Fitness',
    description: 'Brand identity system & high-energy motion video marketing',
    result: '50K+ new followers',
    image: '/images/spiderman-crouch.jpg',
    tags: ['Reels / Motion', 'Brand Identity', 'Community'],
    stats: 'Generated $180k in membership sales',
  },
]

export default function Portfolio() {
  const { playWebSound } = useSuit()
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const categories = ['All', 'E-Commerce', 'SaaS & Tech', 'Hospitality', 'Fitness']

  const filteredProjects = projects.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  )

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
    <section id="portfolio" className="py-24 lg:py-32 px-[5%] bg-spider-dark relative">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-12 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full spider-glass-card border border-[var(--accent-primary)]/40 text-xs font-extrabold uppercase tracking-wider text-spider-gold mb-4 shadow-[0_0_15px_var(--accent-glow)]">
            <ShieldCheck className="w-4 h-4 text-spider-gold" />
            Proven Superhero Track Record
          </div>
          <h2 className="text-[clamp(30px,4vw,52px)] font-extrabold mb-4 accent-gradient-text">
            Spider-Verse Case Files
          </h2>
          <p className="text-base text-white/70 leading-relaxed">
            Real missions accomplished for real businesses. Click any case file to inspect the project blueprint.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playWebSound('thwip')
                setActiveCategory(cat)
              }}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                activeCategory === cat
                  ? 'bg-white/15 border-[var(--accent-primary)] text-white shadow-[0_0_15px_var(--accent-glow)]'
                  : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              onClick={() => {
                playWebSound('thwip')
                setSelectedProject(project)
              }}
              className="reveal spider-glass-card rounded-2xl overflow-hidden border border-white/15 cursor-pointer group hover:border-[var(--accent-primary)] transition-all duration-300 relative web-stick-corner"
            >
              <WebHanging position="top-right" />
              <div className="relative h-[280px] overflow-hidden bg-black/60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-transparent to-transparent opacity-90" />
                <span className="absolute top-4 left-4 bg-black/90 backdrop-blur-md px-3 py-1 rounded-md text-xs font-extrabold text-spider-gold border border-white/15">
                  {project.category}
                </span>
                <span className="absolute bottom-4 right-4 bg-[var(--accent-primary)]/90 backdrop-blur-md px-3 py-1 rounded-md text-xs font-extrabold text-white border border-white/20 shadow-lg">
                  {project.result}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-extrabold text-white mb-1 group-hover:text-[var(--accent-text)] transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                </h3>
                <p className="text-xs text-white/70 leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span key={t} className="text-[10px] px-2.5 py-1 rounded bg-white/5 text-white/60 border border-white/10 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case File Inspect Modal */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="spider-glass-card rounded-2xl p-8 max-w-[600px] w-full border-2 border-[var(--accent-primary)] shadow-[0_0_60px_var(--accent-glow)] relative overflow-hidden"
          >
            <WebHanging position="top-right" />
            <div className="h-[240px] rounded-xl overflow-hidden mb-6 border border-white/10 relative bg-black/60">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-3 left-3 bg-[var(--accent-primary)] px-3 py-1 rounded text-xs font-bold text-white">
                {selectedProject.result}
              </div>
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-2">{selectedProject.title}</h3>
            <p className="text-sm text-white/70 mb-4">{selectedProject.description}</p>

            <div className="bg-black/60 p-4 rounded-xl border border-white/10 mb-6">
              <span className="text-xs font-bold text-spider-gold uppercase tracking-wider block mb-1">
                Mission Accomplishment Metric
              </span>
              <p className="text-sm font-semibold text-white">{selectedProject.stats}</p>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 accent-glow-button text-white text-xs font-bold rounded-xl"
              >
                Close Case File
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}