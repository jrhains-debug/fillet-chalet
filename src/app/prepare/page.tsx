export default function PreparePage() {
  return (
    <div className="texture-overlay">
      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="heading-section text-center mb-12">
            Come Prepared
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* What to Bring */}
            <div className="card">
              <h2 className="heading-subsection mb-4">Bring</h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-coral-500 rounded-full flex-shrink-0" />
                  <span className="text-slate-700">Swimsuit</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-coral-500 rounded-full flex-shrink-0" />
                  <span className="text-slate-700">Water bottle</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-coral-500 rounded-full flex-shrink-0" />
                  <span className="text-slate-700">Towel (we recommend 2!)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-coral-500 rounded-full flex-shrink-0" />
                  <span className="text-slate-700">Sandals</span>
                </li>
              </ul>
            </div>

            {/* Available On-Site */}
            <div className="card">
              <h2 className="heading-subsection mb-4">Available On-Site</h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-olive-500 rounded-full flex-shrink-0" />
                  <span className="text-slate-700">Towel rental: $5</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-olive-500 rounded-full flex-shrink-0" />
                  <span className="text-slate-700">Changing tent</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Before You Arrive */}
          <div className="card mt-8">
            <h2 className="heading-subsection mb-4">Before You Arrive</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-slate-400 rounded-full flex-shrink-0" />
                <span className="text-slate-700">Eat a light snack</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-slate-400 rounded-full flex-shrink-0" />
                <span className="text-slate-700">Come well hydrated</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
