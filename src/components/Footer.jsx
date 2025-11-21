import { BookOpen } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_80%_50%,rgba(14,165,233,0.06),transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
        <div className="mx-auto w-12 h-12 rounded-2xl bg-white/70 backdrop-blur-md ring-1 ring-black/5 flex items-center justify-center shadow">
          <BookOpen className="text-indigo-600" size={22} />
        </div>
        <h3 className="mt-6 text-3xl md:text-4xl font-serif italic text-slate-900">Ready to build something amazing?</h3>
        <p className="mt-2 text-slate-600">I'd love to connect with you.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          <ContactCard label="Email" value="yesh@example.com" href="mailto:yesh@example.com" />
          <ContactCard label="LinkedIn" value="linkedin.com/in/yesh" href="https://linkedin.com/in/yesh" />
          <ContactCard label="Website" value="yesh-dev.vercel.app" href="https://yesh-dev.vercel.app" />
          <ContactCard label="GitHub" value="github.com/yesh" href="https://github.com/yesh" />
        </div>

        <div className="mt-12 text-slate-700">
          <span className="text-orange-500 italic font-semibold">Yeshwanth J</span> • © 2025
        </div>
      </div>
    </footer>
  )
}

function ContactCard({ label, value, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group flex items-center justify-between px-5 py-4 rounded-2xl bg-white/60 backdrop-blur-xl ring-1 ring-black/5 shadow hover:-translate-y-0.5 transition-transform">
      <div className="text-slate-600">{label}</div>
      <div className="text-slate-900 font-medium group-hover:text-indigo-600">{value}</div>
    </a>
  )
}
