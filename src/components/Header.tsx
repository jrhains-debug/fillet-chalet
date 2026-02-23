'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-pitch/95 backdrop-blur-sm border-b border-ash/40' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="group">
          <span className="font-display text-xl font-bold text-cream tracking-tight group-hover:text-ember transition-colors duration-200">
            Fillet Chalet Mobile Sauna
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className="font-body text-parchment hover:text-cream transition-colors duration-200 text-base">About</Link>
          <Link href="/prepare" className="font-body text-parchment hover:text-cream transition-colors duration-200 text-base">What to Bring</Link>
          <Link href="/contact" className="font-body text-parchment hover:text-cream transition-colors duration-200 text-base">Contact</Link>
          <Link href="/book" className="font-display text-sm font-medium tracking-widest uppercase bg-ember text-cream px-5 py-2.5 hover:bg-flame transition-colors duration-200">Book</Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-parchment hover:text-cream transition-colors"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </nav>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-coal/98 border-t border-ash/40 px-6 py-6 flex flex-col gap-5">
          <Link href="/about" onClick={() => setMenuOpen(false)} className="font-body text-lg text-parchment hover:text-cream">About</Link>
          <Link href="/prepare" onClick={() => setMenuOpen(false)} className="font-body text-lg text-parchment hover:text-cream">What to Bring</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="font-body text-lg text-parchment hover:text-cream">Contact</Link>
          <Link href="/book" onClick={() => setMenuOpen(false)} className="font-display text-sm font-medium tracking-widest uppercase bg-ember text-cream px-5 py-3 text-center hover:bg-flame transition-colors">Book a Session</Link>
        </div>
      </div>
    </header>
  )
}
