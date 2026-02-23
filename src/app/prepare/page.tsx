export default function PreparePage() {
  return (
    <main className="overflow-x-hidden">

      <section className="relative pt-40 pb-20 bg-pitch">
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-ember/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="font-display text-xs font-medium tracking-[0.2em] uppercase text-ember mb-4">Prepare</p>
          <h1 className="font-display font-black text-cream"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em', lineHeight: '1.0' }}>
            Come prepared.
          </h1>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-ash to-transparent" />

      <section className="py-24 bg-coal">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="font-display text-xs font-medium tracking-[0.2em] uppercase text-ember mb-6">Bring</p>
              <div className="space-y-6">
                {[
                  { item: 'Swimsuit', note: 'Required for co-ed sessions. Clothing optional for gendered and queer.' },
                  { item: 'Water bottle', note: 'You will sweat a lot. Stay ahead of it.' },
                  { item: 'Two towels', note: 'One for sitting, one for drying off. Trust us on the second one.' },
                  { item: 'Sandals', note: 'For moving between the sauna and outside.' },
                ].map(({ item, note }) => (
                  <div key={item} className="border-t border-ash/50 pt-6">
                    <span className="font-display text-cream font-bold text-lg block mb-1">{item}</span>
                    <p className="font-body text-parchment text-base">{note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-display text-xs font-medium tracking-[0.2em] uppercase text-ember mb-6">On-Site</p>
              <div className="space-y-6">
                {[
                  { item: 'Towel rental', note: '$5. Available if you forget yours.' },
                  { item: 'Changing tent', note: 'On-site for getting changed before and after.' },
                ].map(({ item, note }) => (
                  <div key={item} className="border-t border-ash/50 pt-6">
                    <span className="font-display text-cream font-bold text-lg block mb-1">{item}</span>
                    <p className="font-body text-parchment text-base">{note}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16">
                <p className="font-display text-xs font-medium tracking-[0.2em] uppercase text-ember mb-6">Before You Arrive</p>
                <div className="space-y-6">
                  {[
                    { item: 'Eat a light snack', note: "Don't come on an empty stomach or a full one." },
                    { item: 'Hydrate', note: 'Start drinking water before you get here. Seriously.' },
                  ].map(({ item, note }) => (
                    <div key={item} className="border-t border-ash/50 pt-6">
                      <span className="font-display text-cream font-bold text-lg block mb-1">{item}</span>
                      <p className="font-body text-parchment text-base">{note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-ash to-transparent" />

      <section className="py-20 bg-pitch">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-display text-xs font-medium tracking-[0.2em] uppercase text-ember mb-4">A note</p>
          <p className="font-body text-parchment text-lg leading-relaxed">
            Sauna use is generally safe for healthy adults, but if you have a heart condition, are pregnant, or have any health concerns, check with a doctor before you come. Step outside whenever you need to — there's no pressure to push through discomfort.
          </p>
        </div>
      </section>

    </main>
  )
}
