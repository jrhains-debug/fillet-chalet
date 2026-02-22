export const metadata = {
  title: "About | Fillet Chalet",
  description:
    "Learn about the Fillet Chalet wood-fired sauna experience and the traditional sauna cycle.",
};

export default function AboutPage() {
  return (
    <div className="texture-overlay">
      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="heading-section text-center mb-12">
            About the Sauna
          </h1>

          <div className="max-w-xl mx-auto mb-16">
            <p className="text-slate-600 text-lg leading-relaxed text-center">
              Fillet Chalet is a wood-fired sauna maintained around 200&deg;F.
            </p>
          </div>

          {/* The Sauna Cycle */}
          <div className="card mb-12">
            <h2 className="heading-subsection mb-6">The Sauna Cycle</h2>

            <ol className="space-y-6">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-coral-100 text-coral-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  1
                </span>
                <div>
                  <p className="text-slate-800 font-medium">Spend 10-15 minutes in the sauna</p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-coral-100 text-coral-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  2
                </span>
                <div>
                  <p className="text-slate-800 font-medium">Cool down outside for a few minutes</p>
                  <p className="text-slate-500 text-sm mt-1">Cold plunge recommended!</p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-coral-100 text-coral-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  3
                </span>
                <div>
                  <p className="text-slate-800 font-medium">Repeat 3-5 times</p>
                </div>
              </li>
            </ol>
          </div>

          {/* Closing */}
          <div className="text-center text-slate-600">
            <p className="text-lg leading-relaxed">
              Enjoy the natural endorphin high.<br />
              Drink lots of water.<br />
              Come back soon.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
