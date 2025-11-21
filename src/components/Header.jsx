import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About Me', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Project', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
  }, [open])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/85 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]' : 'backdrop-blur-md bg-white/70'} `}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="text-xl font-semibold tracking-tight text-slate-900">Yesh</a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate-700 hover:text-indigo-600 transition-colors font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            aria-label="Open Menu"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/60 shadow-sm ring-1 ring-black/5"
            onClick={() => setOpen(true)}
          >
            <Menu size={22} className="text-slate-700" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-white/90 backdrop-blur-xl">
          <div className="flex items-center justify-between px-6 h-16">
            <span className="text-lg font-semibold">Yesh</span>
            <button aria-label="Close Menu" onClick={() => setOpen(false)} className="w-10 h-10 inline-flex items-center justify-center rounded-lg bg-white/70 shadow ring-1 ring-black/5">
              <X size={22} />
            </button>
          </div>
          <div className="px-6 py-4 space-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block w-full px-4 py-3 rounded-xl bg-slate-50/70 hover:bg-indigo-50 text-slate-800 font-medium shadow-sm ring-1 ring-black/5"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
