'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

function useScrollReveal(selector = '.anim-ready') {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('anim-in') },
      { threshold: 0.1 }
    )
    el.querySelectorAll(selector).forEach(child => observer.observe(child))
    return () => observer.disconnect()
  }, [selector])
  return ref
}

export default function HomePage() {
  const ref = useScrollReveal()

  return (
    <main ref={ref} className="overflow-x-hidden">

      <section className="relative min-h-screen flex flex-col justify-end bg-pitch pb-20 pt-32">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-ember/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-pitch/80 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <p className="font-display text-ember text-sm font-medium tracking-[0.2em] uppercase mb-6">
            Mobile · Wood-Fired · Portland, Maine
          </p>
          <p className="font-body text-parchment text-xl leading-relaxed max-w-xl mb-10">
            Public sessions, private rentals, and overnight delivery.
            Popups starting early spring 2026 in South Portland.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/book" className="btn-primary text-center">Book a Session</Link>
            <Link href="/about" className="btn-ghost text-center">How It Works</Link>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-ash to-transparent" />

      <section className="py-24 bg-coal">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="anim-ready">
              <p className="font-display text-xs font-medium tracking-[0.2em] uppercase text-ember mb-4">The Setup</p>
              <h2 className="font-display font-bold text-cream"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.02em', lineHeight: '1.05' }}>
                An old ice fishing shack, rebuilt for heat.
              </h2>
            </div>
            <div className="anim-ready" style={{ transitionDelay: '150ms' }}>
              <p className="font-body text-parchment text-xl leading-relaxed">
                Fillet Chalet is a wood heated sauna. Seating for up to six people.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-ash to-transparent" />

      <section className="py-24 bg-pitch">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14 anim-ready">
            <p className="font-display text-xs font-medium tracking-[0.2em] uppercase text-ember mb-4">Sessions</p>
            <h2 className="font-display font-bold text-cream"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.02em', lineHeight: '1.05' }}>
              How to get in.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Intro Session', price: '$20', unit: 'per person', body: '40 minutes. Two good rounds, a cool-down break, and a story to tell. The right way to try this for the first time.', link: '/book', cta: 'Book intro →', delay: '0ms' },
              { label: 'Standard Session', price: '$30', unit: 'per person', body: '75 minutes. The full experience — co-ed, women-only, and queer sessions available.', link: '/book', cta: 'See schedule →', delay: '120ms' },
              { label: 'Private Rental', price: '$175', unit: 'flat / 75 min', body: 'Exclusive use at Bug Light for up to six people. Good for couples, small celebrations, and people who want the place to themselves.', link: '/book/private', cta: 'Book private →', delay: '240ms' },
              { label: 'Overnight Delivery', price: '$500', unit: '/ ~18 hrs', body: 'We deliver to your property — waterfront, campsite, backyard. Yours for the night.', link: '/contact', cta: 'Get in touch →', delay: '360ms' },
            ].map(({ label, price, unit, body, link, cta, delay }) => (
              <div key={label} className="anim-ready bg-coal border border-ash/50 p-8 hover:border-ember/50 transition-colors duration-300" style={{ transitionDelay: delay }}>
                <span className="font-display text-ember text-xs font-medium tracking-[0.2em] uppercase block mb-2">{label}</span>
                <div className="mb-5">
                  <span className="font-display text-4xl font-bold text-cream">{price}</span>
                  <span className="font-body text-driftwood text-base ml-2">{unit}</span>
                </div>
                <p className="font-body text-parchment text-base leading-relaxed mb-6">{body}</p>
                <Link href={link} className="font-display text-sm font-medium tracking-widest uppercase text-ember hover:text-flame transition-colors">
                  {cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-ash to-transparent" />

      <section className="py-24 bg-coal">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl anim-ready">
            <p className="font-display text-xs font-medium tracking-[0.2em] uppercase text-ember mb-4">The Ritual</p>
            <h2 className="font-display font-bold text-cream mb-8"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.02em', lineHeight: '1.05' }}>
              Hot. Cold. Repeat.
            </h2>
            <p className="font-body text-parchment text-xl leading-relaxed mb-6">
              The Finns have been doing this for a thousand years: get as hot as you can tolerate,
              then go somewhere cold. In Maine, "somewhere cold" is never far.
            </p>
            <p className="font-body text-parchment text-lg leading-relaxed mb-10">
              At Bug Light Park, you're steps from the harbor. Bring a towel, bring
              your people, and plan on staying longer than you expected.
            </p>
            <Link href="/about" className="btn-ghost">Learn the cycle</Link>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-ash to-transparent" />

      <section className="py-32 bg-pitch relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-ember/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 text-center anim-ready">
          <h2 className="font-display font-black text-cream mb-10"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', letterSpacing: '-0.03em', lineHeight: '1' }}>
            Early spring 2026.<br />
            <em className="text-ember not-italic">Bug Light Park.</em>
          </h2>
          <Link href="/book" className="btn-primary">Reserve Your Spot</Link>
        </div>
      </section>

    </main>
  )
}
