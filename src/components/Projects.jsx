import { motion } from 'framer-motion'

const projects = [
  {
    title: 'BrightEdge Landing',
    desc: 'A sleek marketing page with immersive scroll animations and glassmorphism textures.',
    tags: ['Framer Motion', 'React', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
    url: 'https://brightedge.framer.website/',
  },
  {
    title: 'Portfolio Concept',
    desc: 'Minimal personal portfolio exploring depth, light, and micro-interactions.',
    tags: ['Vite', 'Spline 3D', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1200&auto=format&fit=crop',
    url: 'https://yesh-dev.vercel.app/',
  },
  {
    title: 'Fintech UI Pack',
    desc: 'Glassmorphic components for modern finance dashboards and onboarding flows.',
    tags: ['Design', 'UI Kit', 'Figma'],
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
    url: 'https://example.com',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_20%_80%,rgba(99,102,241,0.06),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">Featured Projects</h2>
        <div className="space-y-10">
          {projects.map((p, idx) => (
            <ProjectCard key={p.title} p={p} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ p, idx }) {
  return (
    <motion.a
      href={p.url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: idx * 0.05 }}
      className="block rounded-3xl overflow-hidden bg-white/60 backdrop-blur-xl ring-1 ring-black/5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-transform"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2 h-64 md:h-80 relative">
          <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
        </div>
        <div className="p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-slate-900">{p.title}</h3>
          <p className="mt-2 text-slate-600">{p.desc}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium ring-1 ring-black/5">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  )
}
