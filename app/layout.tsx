import type { Metadata } from 'next'
import './globals.css'
import { SuitProvider } from './context/SuitContext'
import WebShooterEffect from './components/WebShooterEffect'
import InteractiveDock from './components/InteractiveDock'
import MiniGameModal from './components/MiniGameModal'

export const metadata: Metadata = {
  title: 'Nexavel — Superhero Digital Agency & Growth Engine',
  description:
    'Behind every great brand is a hero. We are Nexavel — the superhero agency that swings into action with Next.js web engineering, SEO surge, branding, and high-ROI marketing.',
  keywords: 'digital agency, spiderman theme, next.js agency, web development, SEO surge, branding, growth marketing',
  openGraph: {
    title: 'Nexavel — Superhero Digital Agency',
    description: 'Behind every great brand is a hero. We are Nexavel.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-spider-dark text-white relative min-h-screen antialiased selection:bg-spider-red/30">
        <SuitProvider>
          {/* Master Background Layer — spiderman-city-swing.jpg */}
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <img
              src="/images/spiderman-city-swing.jpg"
              alt="NYC Spider-Man Background"
              className="w-full h-full object-cover object-center opacity-30 mix-blend-screen scale-105 filter saturate-150 contrast-125"
            />
            {/* Ambient Radial Vignette & Red/Blue Lighting */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#05050A]/70 via-[#05050A]/85 to-[#05050A]" />
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[var(--accent-primary)]/15 rounded-full blur-[160px]" />
            <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-[var(--accent-secondary)]/20 rounded-full blur-[160px]" />
            {/* Spider Web Grid Overlay */}
            <div className="absolute inset-0 spider-mesh-bg animate-web-pulse" />
          </div>

          {/* Interactive Web Shooter FX */}
          <WebShooterEffect />

          {/* Main Web App Content */}
          <div className="relative z-10">{children}</div>

          {/* Floating Action Dock */}
          <InteractiveDock />

          {/* Bug Challenge Easter Egg Modal */}
          <MiniGameModal />
        </SuitProvider>
      </body>
    </html>
  )
}