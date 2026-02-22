export default function PrivateBookingPage() {
  return (
    <div className="texture-overlay">
      <section className="section-padding">
        <div className="container-narrow">
          {/* Back link */}
          <a href="/" className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-700 text-sm mb-8">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </a>

          <h1 className="heading-section text-center mb-4">
            Private Booking
          </h1>

          <p className="text-center text-slate-600 mb-8">
            $250 flat rate · 2 hours
          </p>

          {/* Session Info */}
          <div className="card mb-8">
            <h2 className="font-semibold text-slate-900 mb-3">What you get</h2>
            <ul className="text-slate-600 text-sm space-y-2">
              <li>• Exclusive use of the sauna for your group</li>
              <li>• 2-hour session at popup location</li>
              <li>• Up to 6 people</li>
              <li>• Towels and water provided</li>
              <li>• Your rules (clothing optional for private groups)</li>
            </ul>
          </div>

          {/* Add-ons */}
          <div className="card mb-8">
            <h2 className="font-semibold text-slate-900 mb-3">Add-ons</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-600">Extra hour</span>
                <span className="text-slate-900 font-medium">+$100</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-600">Delivery to your location (Greater Portland)</span>
                <span className="text-slate-900 font-medium">+$75</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-slate-600">Overnight rental</span>
                <a href="mailto:info@filletchalet.com" className="link">Email for quote</a>
              </div>
            </div>
          </div>

          {/* Cal.com Embed Placeholder */}
          <div className="mb-8">
            <h2 className="heading-subsection mb-4">Select a date & time</h2>

            {/*
              TODO: Replace with Cal.com embed

              1. npm install @calcom/embed-react
              2. Add "use client" to top of file
              3. Import and configure:

              import Cal, { getCalApi } from "@calcom/embed-react";
              import { useEffect } from "react";

              useEffect(() => {
                (async function () {
                  const cal = await getCalApi();
                  cal("ui", {
                    theme: "light",
                    styles: { branding: { brandColor: "#f94565" } },
                  });
                })();
              }, []);

              <Cal
                calLink="filletchalet/private-booking"
                style={{ width: "100%", height: "600px", overflow: "scroll" }}
                config={{ layout: "month_view" }}
              />
            */}

            <div className="card bg-slate-50 border-dashed border-2 border-slate-300">
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-slate-500 mb-1">Calendar booking coming soon</p>
                <p className="text-slate-400 text-sm">Cal.com integration pending</p>
              </div>
            </div>
          </div>

          {/* Payment note */}
          <p className="text-center text-slate-500 text-sm">
            Payment collected at time of booking via Stripe
          </p>
        </div>
      </section>
    </div>
  );
}
