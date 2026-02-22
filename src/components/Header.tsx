"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/prepare", label: "What to Bring" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookDropdownOpen, setBookDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setBookDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <nav className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-display text-xl text-slate-900 hover:text-coral-600 transition-colors">
            Fillet Chalet
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-slate-900 transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}

            {/* Book a Session Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setBookDropdownOpen(!bookDropdownOpen)}
                className="btn-primary text-sm flex items-center gap-1"
              >
                Book a Session
                <svg
                  className={`w-4 h-4 transition-transform ${bookDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {bookDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
                  <Link
                    href="/book/public"
                    className="block px-4 py-3 text-slate-700 hover:bg-coral-50 hover:text-coral-600 transition-colors"
                    onClick={() => setBookDropdownOpen(false)}
                  >
                    <span className="font-medium">Public Session</span>
                    <span className="block text-xs text-slate-500 mt-0.5">$25/person · 75 min</span>
                  </Link>
                  <Link
                    href="/book/private"
                    className="block px-4 py-3 text-slate-700 hover:bg-coral-50 hover:text-coral-600 transition-colors"
                    onClick={() => setBookDropdownOpen(false)}
                  >
                    <span className="font-medium">Private Booking</span>
                    <span className="block text-xs text-slate-500 mt-0.5">$250 · 2 hours</span>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors py-3 px-4 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 space-y-2">
                <p className="px-4 text-xs font-medium text-slate-400 uppercase tracking-wide">Book a Session</p>
                <Link
                  href="/book/public"
                  className="block py-3 px-4 bg-coral-50 text-coral-700 rounded hover:bg-coral-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="font-medium">Public Session</span>
                  <span className="block text-xs text-coral-600 mt-0.5">$25/person · 75 min</span>
                </Link>
                <Link
                  href="/book/private"
                  className="block py-3 px-4 bg-coral-50 text-coral-700 rounded hover:bg-coral-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="font-medium">Private Booking</span>
                  <span className="block text-xs text-coral-600 mt-0.5">$250 · 2 hours</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
