export default function BookPage() {
  return (
    <div className="texture-overlay">
      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="heading-section text-center mb-12">
            Book Your Session
          </h1>

          {/* Session Types & Pricing */}
          <div className="mb-12">
            <h2 className="heading-subsection mb-6">Session Types &amp; Pricing</h2>

            <div className="space-y-4">
              <div className="card">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-slate-900">Public Sessions</h3>
                    <p className="text-slate-600 text-sm mt-1">75 minutes</p>
                  </div>
                  <span className="text-coral-600 font-semibold">$25 per person</span>
                </div>
              </div>

              <div className="card">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-slate-900">Private Rental</h3>
                    <p className="text-slate-600 text-sm mt-1">2 hours at popup location</p>
                  </div>
                  <span className="text-coral-600 font-semibold">$250</span>
                </div>
              </div>

              <div className="card">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-slate-900">Overnight Rental</h3>
                    <p className="text-slate-600 text-sm mt-1">House or rental property</p>
                  </div>
                  <a href="mailto:info@filletchalet.com" className="link text-sm">
                    Email for details
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Session Formats */}
          <div className="mb-12">
            <h2 className="heading-subsection mb-6">Session Formats</h2>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="card text-center">
                <h3 className="font-semibold text-slate-900 mb-2">Co-ed</h3>
                <p className="text-slate-600 text-sm">Clothing mandatory</p>
              </div>

              <div className="card text-center">
                <h3 className="font-semibold text-slate-900 mb-2">Gendered</h3>
                <p className="text-slate-600 text-sm">Clothing optional</p>
              </div>

              <div className="card text-center">
                <h3 className="font-semibold text-slate-900 mb-2">Queer</h3>
                <p className="text-slate-600 text-sm">Clothing optional</p>
              </div>
            </div>

            <p className="text-slate-500 text-sm mt-4">
              Clothing must always be worn outside the sauna itself. No sexual activity allowed.
            </p>
          </div>

          {/* Cal.com Embed Section */}
          <div className="mb-12">
            <h2 className="heading-subsection mb-6">Select a Time</h2>

            {/*
              CAL.COM INTEGRATION INSTRUCTIONS:

              1. Create a Cal.com account at https://cal.com
              2. Set up your event types for each session format
              3. Install the Cal.com embed package:
                 npm install @calcom/embed-react

              4. Replace the placeholder below with:

                 import Cal, { getCalApi } from "@calcom/embed-react";
                 import { useEffect } from "react";

                 Then in your component:

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
                   calLink="your-username/session-type"
                   style={{ width: "100%", height: "100%", overflow: "scroll" }}
                   config={{ layout: "month_view" }}
                 />

              5. For Stripe payment integration:
                 - Connect your Stripe account in Cal.com settings
                 - Enable "Require payment" on each event type
                 - Set the price for each session type

              More info: https://cal.com/docs/integrations/embed
            */}

            <div className="card bg-slate-50 border-dashed">
              <div className="text-center py-12">
                <p className="text-slate-500 mb-2">Calendar booking integration will be added here using Cal.com</p>
                <p className="text-slate-400 text-sm">See code comments for setup instructions</p>
              </div>
            </div>
          </div>

          {/* Payment Note */}
          <div className="text-center">
            <p className="text-slate-600">
              All sessions require payment at time of booking.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
