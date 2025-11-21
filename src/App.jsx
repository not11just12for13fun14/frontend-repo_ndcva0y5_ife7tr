import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main>
        <Hero />
        <About />
        <section id="education" className="relative py-24">
          <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(99,102,241,0.05),transparent_60%)]" />
          <div className="relative max-w-7xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard>
                <h3 className="text-lg font-semibold">B.Tech in Computer Science</h3>
                <p className="text-slate-600 mt-1">XYZ University • 2018–2022</p>
                <p className="text-slate-600 mt-3">Focused on software engineering, human–computer interaction, and product design.</p>
              </GlassCard>
              <GlassCard>
                <h3 className="text-lg font-semibold">Design & Photography</h3>
                <p className="text-slate-600 mt-1">Workshops & Certifications</p>
                <p className="text-slate-600 mt-3">Explored composition, lighting, and visual storytelling for digital products.</p>
              </GlassCard>
            </div>
          </div>
        </section>

        <section id="experience" className="relative py-24">
          <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_80%_10%,rgba(14,165,233,0.05),transparent_60%)]" />
          <div className="relative max-w-7xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">Experience</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <GlassCard>
                <h3 className="text-lg font-semibold">Frontend Developer</h3>
                <p className="text-slate-600 mt-1">ABC Studio • 2022–Present</p>
                <p className="text-slate-600 mt-3">Built high‑performance UIs with React, Tailwind, and motion design.</p>
              </GlassCard>
              <GlassCard>
                <h3 className="text-lg font-semibold">Freelance Designer</h3>
                <p className="text-slate-600 mt-1">2019–Present</p>
                <p className="text-slate-600 mt-3">Delivered brand systems and landing pages with minimalist aesthetics.</p>
              </GlassCard>
              <GlassCard>
                <h3 className="text-lg font-semibold">Photography</h3>
                <p className="text-slate-600 mt-1">Personal / Client Work</p>
                <p className="text-slate-600 mt-3">Portraits and product shots emphasizing clarity and mood.</p>
              </GlassCard>
            </div>
          </div>
        </section>

        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

function GlassCard({ children }) {
  return (
    <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-xl ring-1 ring-black/5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)]">
      {children}
    </div>
  )
}

export default App
