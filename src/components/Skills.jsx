import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const groups = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'Python', level: 85 },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 80 },
      { name: 'FastAPI', level: 85 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Figma', level: 80 },
      { name: 'MongoDB', level: 75 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_80%_20%,rgba(14,165,233,0.06),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g) => (
            <Glass key={g.title}>
              <h3 className="text-lg font-semibold text-slate-800 mb-4">{g.title}</h3>
              <div className="space-y-4">
                {g.skills.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />)
                )}
              </div>
            </Glass>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillBar({ name, level }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20% 0px' })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) controls.start({ width: `${level}%` })
  }, [inView, level, controls])

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-slate-700">{name}</span>
        <span className="text-xs text-slate-500">{level}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-slate-200/70 overflow-hidden">
        <motion.div
          ref={ref}
          initial={{ width: 0 }}
          animate={controls}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 rounded-full shadow-[0_0_14px_rgba(99,102,241,0.35)]"
        />
      </div>
    </div>
  )
}

function Glass({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-2xl bg-white/60 backdrop-blur-xl ring-1 ring-black/5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)]"
    >
      {children}
    </motion.div>
  )
}
