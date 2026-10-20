import React from 'react';
import { ShieldCheck, Star, Calendar, Calculator, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/detailingData';

interface HeroProps {
  onBookClick: () => void;
  onQuoteClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onQuoteClick }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-neutral-900 bg-radial from-sky-950/20 via-neutral-950 to-neutral-950">
      {/* Background ambient lighting subtle grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Unboxed editorial kicker / proof text with typographic separators (Strictly NO pills) */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-medium text-neutral-400 mb-6 tracking-wide">
          <div className="flex items-center text-amber-400 gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
            <span className="font-semibold text-white ml-1 tabular-nums">5.0</span>
          </div>
          <span className="text-neutral-600" aria-hidden="true">·</span>
          <span>128+ Verified 5-Star Reviews</span>
          <span className="text-neutral-600 hidden sm:inline" aria-hidden="true">·</span>
          <span className="hidden sm:inline text-neutral-300">Christine Rd Studio & Mobile Service</span>
          <span className="text-neutral-600 hidden md:inline" aria-hidden="true">·</span>
          <span className="hidden md:inline text-sky-400 font-semibold">Wichita Falls, TX</span>
        </div>

        {/* 2-Column Desktop Grid with tight alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Bold Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] [text-wrap:balance]">
              Flawless Auto Detailing & Ceramic Coatings in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-200 to-white">
                Wichita Falls, TX
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl leading-relaxed font-normal">
              Restore your vehicle to immaculate showroom condition. We specialize in deep interior steam extraction, multi-stage swirl-free paint correction, and 9H ceramic coatings engineered for tough Texas conditions.
            </p>

            {/* Location & Quick Assurance details */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-neutral-400 pt-1">
              <div className="flex items-center gap-2 text-neutral-300">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Christine Rd, Wichita Falls, TX 76302</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Mobile Detailing Available Throughout Texoma</span>
              </div>
            </div>

            {/* Primary Action Zone: Bold Header CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-bold uppercase tracking-wider text-neutral-950 bg-sky-400 hover:bg-sky-300 rounded-xl shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 transition-all cursor-pointer group active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4 text-neutral-950" />
                <span>Book a Detail</span>
              </button>

              <button
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 hover:border-sky-500/50 rounded-xl transition-all cursor-pointer group active:scale-[0.98]"
              >
                <Calculator className="w-4 h-4 text-sky-400 group-hover:rotate-6 transition-transform" />
                <span>Get an Instant Quote</span>
              </button>
            </div>

            {/* Quick Guarantees Row */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-neutral-900">
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Spot-Free Deionized Water</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-300 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Licensed & Fully Insured</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900 group">
              {/* High-Fidelity Generated Hero Photo */}
              <img
                src="/src/assets/images/hero_detail_gloss_1792463321207.jpg"
                alt="Hawkeye Auto Detail studio featuring pristine sports car under inspection lighting"
                className="w-full h-80 sm:h-96 lg:h-[460px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Scrim for contrast overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

              {/* Floating Content Card inside image */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-950/85 backdrop-blur-md border border-neutral-800/80 text-left">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-sky-400">
                      Studio & Mobile Rig
                    </p>
                    <p className="text-sm font-bold text-white mt-0.5">
                      Hawkeye Precision Detailing Bay
                    </p>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Christine Rd · Wichita Falls, TX 76302
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-mono text-neutral-400 block">Fast Booking</span>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-xs font-bold text-sky-400 hover:text-sky-300 tracking-tight"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Item Feature Strip Below Hero */}
        <div className="mt-12 pt-8 border-t border-neutral-900 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Master Craftsmanship</div>
            <div className="text-base font-bold text-white">Over 1,200 Vehicles Detailed</div>
            <div className="text-xs text-neutral-400">Exotics, trucks, daily drivers & family SUVs</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Ceramic Certified</div>
            <div className="text-base font-bold text-white">3 to 5 Year Warranty</div>
            <div className="text-xs text-neutral-400">Extreme UV protection against Texas sun</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Local & Reputable</div>
            <div className="text-base font-bold text-white">Christine Rd, Wichita Falls</div>
            <div className="text-xs text-neutral-400">Convenient drop-off & flexible mobile units</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Client Satisfaction</div>
            <div className="text-base font-bold text-white">5.0 Star Rated</div>
            <div className="text-xs text-neutral-400">128+ five-star reviews on Google</div>
          </div>
        </div>

      </div>
    </section>
  );
};
