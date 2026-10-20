import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/detailingData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Packages & Quote', href: '#calculator' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Service Area', href: '#service-area' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly compliant Top Bar Contract: Zone 1 (Wordmark) - Zone 2 (4-5 nav links) - Zone 3 (1 primary action) */}
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark (Single text element wordmark, no pill tag clutter) */}
          <a
            href="#"
            className="flex items-center gap-3 text-xl font-bold tracking-tight text-white hover:text-sky-400 transition-colors whitespace-nowrap shrink-0 group"
          >
            <div className="w-9 h-9 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-neutral-950 transition-colors">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span>{BUSINESS_INFO.name}</span>
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-sky-400 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white px-3 py-2 transition-colors whitespace-nowrap shrink-0"
              aria-label="Call Hawkeye Auto Detail"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-sky-400 hover:bg-sky-300 rounded-lg shadow-sm hover:shadow-sky-500/20 transition-all cursor-pointer whitespace-nowrap shrink-0 active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Detail</span>
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-neutral-400 hover:text-white rounded-lg border border-neutral-800 bg-neutral-900/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-neutral-800 bg-neutral-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-base font-medium text-neutral-200 hover:text-white hover:bg-neutral-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2.5">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-neutral-900 text-neutral-200 font-semibold text-sm border border-neutral-800"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-sky-400 hover:bg-sky-300 text-neutral-950 font-bold text-sm tracking-wide transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Detail or Get Quote</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
