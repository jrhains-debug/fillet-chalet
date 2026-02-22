import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="font-display text-lg text-slate-900">
              Fillet Chalet
            </Link>
            <p className="text-slate-500 text-sm mt-1">
              Mobile Wood-Fired Sauna · Portland, Maine
            </p>
          </div>

          {/* Contact */}
          <div className="text-sm text-slate-600">
            <a
              href="mailto:info@filletchalet.com"
              className="hover:text-coral-600 transition-colors"
            >
              info@filletchalet.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Fillet Chalet
          </p>
        </div>
      </div>
    </footer>
  );
}
