import Link from 'next/link'

export default function BookPage() {
  return (
    <main className="overflow-x-hidden">

      <section className="relative pt-40 pb-20 bg-pitch">
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-ember/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="font-display text-xs font-medium tracking-[0.2em] uppercase text-ember mb-4">Book</p>
          <h1 className="font-display font-black text-cream"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em', lineHeight: '1.0' }}>
            Book a session.
          </h1>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-ash to-transparent" />

      <section className="py-24 bg-coal">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-pitch border border-ash/50 p-10 hover:border-ember/40 transition-colors duration-300">
              <span className="font-display text-ember text-xs font-medium tracking-[0.2em] uppercase block mb-3">Intro Session</span>
              <div className="mb-5">
                <span className="font-display text-5xl font-bold text-cream">$20</span>
                <span className="font-body text-driftwood text-base ml-2">per person</span>
              </div>
              <p className="font-body text-parchment text-base leading-relaxed mb-2">40 minutes · Up to 6 guests</p>
              <p className="font-body text-parchment text-lg leading-relaxed mb-8">
                Two good rounds and a cool-down break. The right way to try this for the first time. It lowers the barrier — most people come back for the full session.
              </p>
              <Link href="/book/public" className="btn-primary">Book Intro</Link>
            </div>

            <div className="bg-pitch border border-ash/50 p-10 hover:border-ember/40 transition-colors duration-300">
              <span className="font-display text-ember text-xs font-medium tracking-[0.2em] uppercase block mb-3">Standard Session</span>
              <div className="mb-5">
                <span className="font-display text-5xl font-bold text-cream">$30</span>
                <span className="font-body text-driftwood text-base ml-2">per person</span>
              </div>
              <p className="font-body text-parchment text-base leading-relaxed mb-2">75 minutes · Up to 6 guests</p>
              <p className="font-body text-parchment text-lg leading-relaxed mb-8">
                The full experience. Co-ed, women-only, and queer sessions available — check the calendar for upcoming dates and formats.
              </p>
              <Link href="/book/public" className="btn-primary">See Schedule</Link>
            </div>

            <div className="bg-pitch border border-ash/50 p-10 hover:border-ember/40 transition-colors duration-300">
              <span className="font-display text-ember text-xs font-medium tracking-[0.2em] uppercase block mb-3">Private Rental</span>
              <div className="mb-5">
                <span className="font-display text-5xl font-bold text-cream">$175</span>
                <span className="font-body text-driftwood text-base ml-2">flat rate</span>
              </div>
              <p className="font-body text-parchment text-base leading-relaxed mb-2">75 minutes · Exclusive use at Bug Light</p>
              <p className="font-body text-parchment text-lg leading-relaxed mb-8">
                Your group, your session. Up to six people. Good for couples, small celebrations, and people who just want the place to themselves.
              </p>
              <Link href="/book/private" className="btn-primary">Book Private</Link>
            </div>

            <div className="bg-pitch border border-ash/50 p-10 hover:border-ember/40 transition-colors duration-300">
              <span className="font-display text-ember text-xs font-medium tracking-[0.2em] uppercase block mb-3">Overnight Delivery</span>
              <div className="mb-5">
                <span className="font-display text-5xl font-bold text-cream">$500</span>
                <span className="font-body text-driftwood text-base ml-2">/ ~18 hrs</span>
              </div>
              <p className="font-body text-parchment text-base leading-relaxed mb-2">Delivered to your property</p>
              <p className="font-body text-parchment text-lg leading-relaxed mb-8">
                We deliver the sauna to your waterfront, campsite, or backyard. Yours for the night — fire it up yourself, go home when you're done.
              </p>
              <Link href="/contact" className="btn-ghost">Get in Touch</Link>
            </div>

          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-ash to-transparent" />

      <section className="py-24 bg-pitch">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-display text-xs font-medium tracking-[0.2em] uppercase text-ember mb-4">Calendar</p>
          <h2 className="font-display font-bold text-cream mb-12"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
            Check availability.
          </h2>
          <div className="border border-ash/50 p-12 text-center">
            <p className="font-body text-driftwood text-lg italic">
              Booking calendar coming soon — sessions open for reservation in early spring 2026.
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}
