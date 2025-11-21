import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] pt-20 overflow-hidden">
      {/* Background gradient and subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_10%,rgba(99,102,241,0.08),transparent_60%),radial-gradient(800px_circle_at_80%_20%,rgba(14,165,233,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="py-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900"
          >
            I’m Yesh
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-xl text-slate-600"
          >
            <Typewriter />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-slate-600 max-w-xl"
          >
            I craft thoughtful digital experiences—minimal, elegant, and purposeful. Explore my work and let’s build something exceptional together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex items-center gap-4"
          >
            <a href="#contact" className="px-5 py-3 rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-transform hover:-translate-y-0.5">Contact Me</a>
            <a href="#projects" className="px-5 py-3 rounded-xl bg-white/70 ring-1 ring-black/5 backdrop-blur-md text-slate-900 hover:bg-white hover:-translate-y-0.5 transition-transform">View Projects</a>
          </motion.div>
        </div>

        {/* Right 3D Spline */}
        <div className="relative h-[420px] md:h-[520px] lg:h-[620px] rounded-2xl overflow-hidden bg-white/40 ring-1 ring-black/5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
        </div>
      </div>
    </section>
  )
}

function Typewriter() {
  const roles = [
    "I’m a Photographer",
    "I’m a Developer",
    "I’m a Designer",
  ]
  return (
    <span className="inline-flex h-8 items-center">
      <span className="relative overflow-hidden">
        <motion.span
          initial={{ y: 0 }}
          animate={{ y: [0, -32, -64, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          className="block"
        >
          {roles.map((r) => (
            <span key={r} className="block h-8">{r}</span>
          ))}
        </motion.span>
      </span>
    </span>
  )
}
