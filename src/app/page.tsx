import Link from "next/link";

export default function Home() {
  return (
    <div className="texture-overlay">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h1 className="heading-display text-balance mb-4">
            Fillet Chalet
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-2">
            Mobile Wood-Fired Sauna
          </p>
          <p className="text-lg text-slate-500 mb-8">
            Portland, Maine
          </p>
          <p className="text-coral-600 font-medium mb-12">
            Popups starting late winter 2026
          </p>

          <div className="max-w-xl mx-auto mb-16">
            <p className="text-slate-600 text-lg leading-relaxed">
              A traditional wood-fired sauna on wheels.
              Seats up to 6 people. Available for public sessions,
              private rentals, and special events throughout Greater Portland.
            </p>
          </div>

          <Link href="/book" className="btn-primary text-lg px-8 py-4">
            Book a Session
          </Link>
        </div>
      </section>
    </div>
  );
}
