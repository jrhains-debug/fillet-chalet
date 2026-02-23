export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">

      <section className="relative pt-40 pb-20 bg-pitch">
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-ember/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="font-display text-xs font-medium tracking-[0.2em] uppercase text-ember mb-4">About</p>
          <h1 className="font-display font-black text-cream"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em', lineHeight: '1.0' }}>
            About the sauna.
          </h1>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-ash to-transparent" />

      <section className="py-24 bg-coal">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-display text-xs font-medium tracking-[0.2em] uppercase text-ember mb-4">The Sauna</p>
              <h2 className="font-display font-bold text-cream mb-6"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
                A wood heated sauna, maintained around 200°F.
              </h2>
            </div>
            <div className="space-y-5">
              <p className="font-body text-parchment text-lg leading-relaxed">
                Fillet Chalet is a converted ice fishing shack on a reinforced trailer, heated by a Lamppa Kuuma wood stove — handcrafted in Tower, Minnesota. It seats up to six people.
              </p>
              <p className="font-body text-parchment text-lg leading-relaxed">
                The heat is real. Nothing about the experience is manufactured or scripted. You come in, you get hot, you go outside, you do it again.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-ash to-transparent" />

      <section className="py-24 bg-pitch">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-display text-xs font-medium tracking-[0.2em] uppercase text-ember mb-4">The Cycle</p>
          <h2 className="font-display font-bold text-cream mb-16"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
            Hot. Cold. Repeat.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Get in the sauna', body: 'Spend 10–15 minutes inside. The temperature holds around 200°F. Let yourself sweat.' },
              { step: '02', title: 'Cool down outside', body: "Step outside. Breathe cold air. If there's water nearby, get in it. Give yourself a few minutes." },
              { step: '03', title: 'Repeat 3–5 times', body: 'Each round feels different. Your body adjusts. Most people stay longer than they planned.' },
            ].map(({ step, title, body }) => (
              <div key={step} className="border-t border-ash/60 pt-8">
                <span className="font-display text-ember text-xs font-medium tracking-[0.2em] block mb-3">{step}</span>
                <h3 className="font-display text-cream font-bold text-xl mb-4">{title}</h3>
                <p className="font-body text-parchment text-base leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-ash to-transparent" />

      <section className="py-24 bg-coal">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-display text-xs font-medium tracking-[0.2em] uppercase text-ember mb-4">After</p>
          <h2 className="font-display font-bold text-cream mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
            Enjoy the endorphin high.
          </h2>
          <p className="font-body text-parchment text-xl leading-relaxed mb-5">
            The contrast of heat and cold triggers a release that most people describe as a full-body reset. You'll feel it for hours.
          </p>
          <p className="font-body text-parchment text-lg leading-relaxed">
            Drink a lot of water. Come back soon.
          </p>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-ash to-transparent" />

      <section className="py-24 bg-pitch">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-display text-xs font-medium tracking-[0.2em] uppercase text-ember mb-4">Session Formats</p>
          <h2 className="font-display font-bold text-cream mb-12"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
            Who's in the room.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { type: 'Co-ed', note: 'Clothing required', body: 'Open to all genders. Swimwear mandatory inside the sauna.' },
              { type: 'Gendered', note: 'Clothing optional', body: 'Women-only or men-only sessions. Clothing optional inside.' },
              { type: 'Queer', note: 'Clothing optional', body: 'LGBTQ+ focused sessions. Clothing optional inside.' },
            ].map(({ type, note, body }) => (
              <div key={type} className="bg-coal border border-ash/50 p-8">
                <span className="font-display text-ember text-xs font-medium tracking-[0.2em] uppercase block mb-2">{type}</span>
                <span className="font-body text-driftwood text-sm italic block mb-4">{note}</span>
                <p className="font-body text-parchment text-base leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-driftwood text-sm mt-8 italic">
            Clothing must always be worn outside the sauna. No sexual activity.
          </p>
        </div>
      </section>

    </main>
  )
}
