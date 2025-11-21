import { motion } from 'framer-motion'
import { Sparkles, Star, Code2, Camera } from 'lucide-react'

export default function About() {
  const items = [
    { icon: <Sparkles size={18} />, label: 'Minimalist Aesthetic' },
    { icon: <Star size={18} />, label: 'Attention to Detail' },
    { icon: <Code2 size={18} />, label: 'Clean, Scalable Code' },
    { icon: <Camera size={18} />, label: 'Visual Storytelling' },
  ]

  const stats = [
    { k: 'Years Experience', v: '4+' },
    { k: 'Technologies', v: '20+' },
    { k: 'Projects', v: '15+' },
  ]

  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_40%,rgba(99,102,241,0.06),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <motion.h2 initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:0.4}} transition={{duration:0.5}} className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">About Me</motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <Glass className="p-6">
              <p className="text-slate-700 leading-relaxed">I’m Yesh, a multidisciplinary creator blending design, development, and photography to craft elegant digital products.</p>
              <p className="text-slate-700 leading-relaxed">I love building thoughtful interfaces with a focus on clarity, performance, and delightful micro-interactions.</p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {items.map((it) => (
                  <div key={it.label} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/60 backdrop-blur-md ring-1 ring-black/5 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-indigo-600">{it.icon}</span>
                    <span className="text-slate-800 text-sm font-medium">{it.label}</span>
                  </div>
                ))}
              </div>
            </Glass>
          </div>
          <div className="space-y-4">
            {stats.map((s) => (
              <Glass key={s.k} className="p-5 flex items-center justify-between">
                <span className="text-slate-600">{s.k}</span>
                <span className="text-slate-900 font-semibold">{s.v}</span>
              </Glass>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Glass({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={`rounded-2xl bg-white/60 backdrop-blur-xl ring-1 ring-black/5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)] ${className}`}
    >
      {children}
    </motion.div>
  )
}
