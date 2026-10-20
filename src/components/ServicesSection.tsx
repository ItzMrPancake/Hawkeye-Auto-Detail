import React from 'react';
import { Clock, Check, ArrowRight, Sparkles, Shield, Droplets } from 'lucide-react';
import { SERVICES } from '../data/detailingData';
import { ServicePackage } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServicePackage) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Precision Automotive Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white [text-wrap:balance]">
            Core Detailing Services Engineered for Wichita Falls Vehicles
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed font-normal">
            Whether your vehicle requires deep cabin sterilization, safe scratch-free exterior decontamination, or permanent multi-year ceramic paint armor, Hawkeye Auto Detail delivers meticulous perfection.
          </p>
        </div>

        {/* 3 Core Services Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {SERVICES.map((service, index) => {
            const icons = [
              <Sparkles key="1" className="w-5 h-5 text-sky-400" />,
              <Droplets key="2" className="w-5 h-5 text-sky-400" />,
              <Shield key="3" className="w-5 h-5 text-sky-400" />,
            ];

            return (
              <div
                key={service.id}
                className="flex flex-col rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 overflow-hidden group shadow-lg"
              >
                {/* Visual Header with fallback support */}
                <div className="relative h-60 w-full overflow-hidden bg-neutral-950">
                  <img
                    src={service.image}
                    alt={`${service.name} at Hawkeye Auto Detail`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
                  
                  {/* Service Number & Category Indicator (Clean unboxed editorial styling) */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
                    <span className="font-mono text-neutral-300 bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-neutral-800">
                      0{index + 1}
                    </span>
                    <span className="text-sky-300 font-semibold bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-sky-500/30">
                      {service.badge}
                    </span>
                  </div>

                  {/* Starting Price and Estimated Time at bottom of image */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                    <div>
                      <span className="text-xs text-neutral-400 block">Starting at</span>
                      <span className="text-2xl font-extrabold text-white font-mono tabular-nums">
                        ${service.startingPrice}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-neutral-300 bg-neutral-950/80 backdrop-blur-sm px-2.5 py-1 rounded border border-neutral-800">
                      <Clock className="w-3.5 h-3.5 text-neutral-400" />
                      <span className="font-mono">{service.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/20">
                        {icons[index]}
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                        {service.name}
                      </h3>
                    </div>

                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <div className="pt-3 border-t border-neutral-800/80">
                      <div className="text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-3">
                        What's Included:
                      </div>
                      <ul className="space-y-2.5">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                            <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-4 border-t border-neutral-800">
                    <button
                      onClick={() => onSelectService(service)}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-neutral-800 hover:bg-sky-400 hover:text-neutral-950 transition-colors cursor-pointer group/btn"
                    >
                      <span>Book {service.name}</span>
                      <ArrowRight className="w-4 h-4 text-sky-400 group-hover/btn:text-neutral-950 group-hover/btn:translate-x-1 transition-all" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom request notice */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-white">Need a combination or fleet detailing package?</h4>
            <p className="text-sm text-neutral-400">
              We service company trucks, dealerships, boats, and multi-vehicle households across Wichita County.
            </p>
          </div>
          <a
            href="tel:+19405554295"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 hover:text-white px-5 py-3 rounded-xl border border-sky-500/30 hover:border-sky-400 hover:bg-sky-500/10 transition-all whitespace-nowrap shrink-0"
          >
            <span>Call for Fleet Pricing (940) 555-4295</span>
          </a>
        </div>

      </div>
    </section>
  );
};
