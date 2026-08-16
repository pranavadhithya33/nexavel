import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import ProjectEstimator from './sections/ProjectEstimator'
import AuditSimulator from './sections/AuditSimulator'
import About from './sections/About'
import Portfolio from './sections/Portfolio'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <ProjectEstimator />
      <AuditSimulator />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}