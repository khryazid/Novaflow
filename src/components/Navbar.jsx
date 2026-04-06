import { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Diagnóstico', href: '#diagnostico' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-primary/95 backdrop-blur-xl border-b border-border shadow-lg shadow-black/10'
          : 'bg-primary/80 backdrop-blur-md'
      }`}
    >
      <div className="section-wrap flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-cta flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Zap className="w-5 h-5 text-white" fill="white" />
          </div>
          <span className="text-lg font-extrabold text-text tracking-tight">
            Nova<span className="text-accent">Flow</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-text-muted hover:text-text transition-colors text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
          <a href="#diagnostico" className="btn-cta !text-sm !py-2.5 !px-5">
            Agendar Consultoría
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          id="mobile-menu-toggle"
          className="lg:hidden p-2 text-text-muted hover:text-text transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="section-wrap pb-6 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-text-muted hover:text-text hover:bg-surface/60 transition-all text-base font-medium py-3 px-4 rounded-lg"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#diagnostico"
            onClick={() => setMenuOpen(false)}
            className="btn-cta mt-2 text-center"
          >
            Agendar Consultoría
          </a>
        </div>
      </div>
    </nav>
  )
}
