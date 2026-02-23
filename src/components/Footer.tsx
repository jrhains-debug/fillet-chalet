import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-coal border-t border-ash/40">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <span className="font-display text-2xl font-bold text-cream block mb-3">Fillet Chalet</span>
            <p className="font-body text-driftwood text-base leading-relaxed">
              Mobile wood-fired sauna.<br />Portland, Maine.
            </p>
          </div>

          <div>
            <span className="font-display text-xs font-medium tracking-widest uppercase text-driftwood mb-4 block">Pages</span>
            <div className="flex flex-col gap-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/book', label: 'Book a Session' },
                { href: '/about', label: 'About' },
                { href: '/prepare', label: 'What to Bring' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="font-body text-parchment hover:text-cream transition-colors text-base">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <span className="font-display text-xs font-medium tracking-widest uppercase text-driftwood mb-4 block">Get in Touch</span>
            <a
              href="mailto:info@filletchalet.com"
              className="font-body text-parchment hover:text-ember transition-colors text-base"
            >
              info@filletchalet.com
            </a>
            <p className="font-body text-driftwood text-sm mt-3 leading-relaxed">
              Popups starting early spring 2026.<br />
              Bug Light Park, South Portland.
            </p>
          </div>
        </div>

        <div className="border-t border-ash/40 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <span className="font-body text-bark text-sm">© 2026 Fillet Chalet. All rights reserved.</span>
          <span className="font-body text-bark text-sm italic">Wood-fired in Maine.</span>
        </div>
      </div>
    </footer>
  )
}
