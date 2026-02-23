'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="overflow-x-hidden">

      <section className="relative pt-40 pb-20 bg-pitch">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-ember/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="font-display text-xs font-medium tracking-[0.2em] uppercase text-ember mb-4">Contact</p>
          <h1 className="font-display font-black text-cream"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em', lineHeight: '1.0' }}>
            Get in touch.
          </h1>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-ash to-transparent" />

      <section className="py-24 bg-coal">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

            <div>
              <p className="font-body text-parchment text-xl leading-relaxed mb-10">
                Questions about overnight rentals, private bookings, or anything else — send a message or email directly.
              </p>
              <div className="space-y-0">
                <div className="border-t border-ash/50 py-6">
                  <span className="font-display text-xs font-medium tracking-[0.2em] uppercase text-ember block mb-2">Email</span>
                  <a href="mailto:info@filletchalet.com"
                     className="font-body text-parchment text-lg hover:text-cream transition-colors">
                    info@filletchalet.com
                  </a>
                </div>
                <div className="border-t border-ash/50 py-6">
                  <span className="font-display text-xs font-medium tracking-[0.2em] uppercase text-ember block mb-2">Location</span>
                  <p className="font-body text-parchment text-lg">
                    Bug Light Park<br />
                    South Portland, Maine
                  </p>
                  <p className="font-body text-driftwood text-base mt-2 italic">
                    Popups starting early spring 2026.
                  </p>
                </div>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="border border-ash/50 p-10">
                  <span className="font-display text-ember text-xs font-medium tracking-[0.2em] uppercase block mb-3">Sent</span>
                  <p className="font-body text-parchment text-lg">We'll be in touch.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
                  className="space-y-6"
                >
                  <div>
                    <label className="font-display text-xs font-medium tracking-[0.2em] uppercase text-driftwood block mb-2">Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-pitch border border-ash/60 text-cream font-body text-base px-4 py-3 focus:outline-none focus:border-ember/60 transition-colors placeholder:text-bark"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="font-display text-xs font-medium tracking-[0.2em] uppercase text-driftwood block mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-pitch border border-ash/60 text-cream font-body text-base px-4 py-3 focus:outline-none focus:border-ember/60 transition-colors placeholder:text-bark"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="font-display text-xs font-medium tracking-[0.2em] uppercase text-driftwood block mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full bg-pitch border border-ash/60 text-cream font-body text-base px-4 py-3 focus:outline-none focus:border-ember/60 transition-colors placeholder:text-bark resize-none"
                      placeholder="What's on your mind?"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full text-center cursor-pointer">
                    Send Message
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}
