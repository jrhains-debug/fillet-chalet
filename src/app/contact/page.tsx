export const metadata = {
  title: "Contact | Fillet Chalet",
  description:
    "Get in touch with Fillet Chalet for questions about overnight rentals or private bookings.",
};

export default function ContactPage() {
  return (
    <div className="texture-overlay">
      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="heading-section text-center mb-12">
            Contact
          </h1>

          <div className="max-w-lg mx-auto">
            {/* Email Link */}
            <div className="text-center mb-12">
              <a
                href="mailto:info@filletchalet.com"
                className="text-coral-600 hover:text-coral-700 text-lg underline underline-offset-2"
              >
                info@filletchalet.com
              </a>
            </div>

            {/* Contact Form */}
            <div className="card">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-slate-700 text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-md
                               text-slate-800 placeholder-slate-400
                               focus:outline-none focus:border-coral-500 focus:ring-1 focus:ring-coral-500
                               transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-slate-700 text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-md
                               text-slate-800 placeholder-slate-400
                               focus:outline-none focus:border-coral-500 focus:ring-1 focus:ring-coral-500
                               transition-colors"
                    placeholder="you@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-slate-700 text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-md
                               text-slate-800 placeholder-slate-400
                               focus:outline-none focus:border-coral-500 focus:ring-1 focus:ring-coral-500
                               transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Note */}
            <p className="text-slate-500 text-sm text-center mt-8">
              Questions about overnight rentals or private bookings? Get in touch.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
