import React from 'react';
import { MapPin, Truck, Warehouse, CheckCircle2, Navigation, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '../data/detailingData';

export const ServiceAreaSection: React.FC = () => {
  return (
    <section id="service-area" className="py-20 lg:py-28 bg-neutral-900/30 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-400 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Local Presence & Mobility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white [text-wrap:balance]">
            Dedicated Christine Rd Studio & Mobile Detailing Across Texoma
          </h2>
          <p className="mt-4 text-base text-neutral-400 leading-relaxed font-normal">
            Whether you choose to drop off your vehicle at our climate-controlled detailing bay or have our fully equipped mobile detailing unit come directly to your driveway, Hawkeye provides unmatched convenience.
          </p>
        </div>

        {/* 2-Column Area Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Christine Rd Studio Bay */}
          <div className="lg:col-span-6 p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Warehouse className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-sky-400">Primary Detailing Studio</span>
                <h3 className="text-2xl font-bold text-white mt-1">Christine Rd Detailing Bay</h3>
                <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                  Our dedicated facility is optimized for multi-stage paint correction, infrared ceramic coating curing, and intense interior steam sanitization away from Texas wind, dust, and direct sun.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{BUSINESS_INFO.street}, {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}</span>
                </div>
                <p className="text-xs text-neutral-400 pl-6">
                  Convenient drop-off & pickup · Key drop available for early mornings
                </p>
              </div>

              <ul className="space-y-2.5 pt-2">
                <li className="flex items-center gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>High-intensity hex ceiling inspection lighting</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Multi-day ceramic coating controlled cure environments</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Comfortable client lounge with Wi-Fi & refreshments</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-neutral-800">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(`${BUSINESS_INFO.street}, ${BUSINESS_INFO.city}, ${BUSINESS_INFO.state} ${BUSINESS_INFO.zip}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 hover:text-white transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </div>

          {/* Card 2: Mobile Detailing Unit Coverage */}
          <div className="lg:col-span-6 p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Truck className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-sky-400">Mobile On-Site Fleet</span>
                <h3 className="text-2xl font-bold text-white mt-1">We Come to Your Home or Office</h3>
                <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                  Self-contained detailing vans equipped with 100 gallons of deionized spot-free water, whisper-quiet Honda generators, pressure washers, and commercial extractors.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300 block">
                  Service Area Communities:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {BUSINESS_INFO.serviceAreas.map((area, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-neutral-950/70 border border-neutral-800/80 text-xs text-neutral-300 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span className="truncate">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <ul className="space-y-2.5 pt-2">
                <li className="flex items-center gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>No water or power hookup needed from client</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Ideal for busy professionals, Sheppard AFB personnel & parents</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-neutral-800 flex items-center justify-between">
              <span className="text-xs text-neutral-400">Questions about your address?</span>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="text-xs font-bold text-sky-400 hover:text-white transition-colors"
              >
                Call (940) 555-4295
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
