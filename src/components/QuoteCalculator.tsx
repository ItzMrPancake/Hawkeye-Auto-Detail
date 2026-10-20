import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Clock, ShieldCheck, Sparkles, Car } from 'lucide-react';
import { SERVICES, ADD_ONS, VEHICLE_SIZE_RATES } from '../data/detailingData';
import { VehicleSize } from '../types';

interface QuoteCalculatorProps {
  onQuoteCalculated: (data: {
    vehicleSize: VehicleSize;
    serviceId: string;
    addOnIds: string[];
    estimatedTotal: number;
    estimatedDuration: string;
  }) => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ onQuoteCalculated }) => {
  const [selectedSize, setSelectedSize] = useState<VehicleSize>('midsize_suv_truck');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('interior-detail');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  // Base pricing
  const currentService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];
  const sizeMultiplier = VEHICLE_SIZE_RATES[selectedSize].multiplier;
  
  const basePrice = Math.round(currentService.startingPrice * sizeMultiplier);
  const addOnsTotal = selectedAddOns.reduce((sum, addOnId) => {
    const item = ADD_ONS.find((a) => a.id === addOnId);
    return sum + (item ? item.price : 0);
  }, 0);

  const estimatedTotal = basePrice + addOnsTotal;

  const toggleAddOn = (id: string) => {
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter((item) => item !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };

  const handleApplyQuote = () => {
    onQuoteCalculated({
      vehicleSize: selectedSize,
      serviceId: selectedServiceId,
      addOnIds: selectedAddOns,
      estimatedTotal,
      estimatedDuration: currentService.duration,
    });
  };

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-400 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Transparent Pricing Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white [text-wrap:balance]">
            Instant Detailing Quote Calculator
          </h2>
          <p className="mt-4 text-base text-neutral-400 font-normal leading-relaxed">
            Configure your vehicle and desired service for immediate, transparent pricing with no hidden fees.
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Vehicle Size */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-sky-400">Step 1 of 3</span>
                <span className="text-xs text-neutral-400">Select Vehicle Dimension</span>
              </div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Car className="w-5 h-5 text-sky-400" />
                <span>Vehicle Size</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(Object.keys(VEHICLE_SIZE_RATES) as VehicleSize[]).map((sizeKey) => {
                  const info = VEHICLE_SIZE_RATES[sizeKey];
                  const isSelected = selectedSize === sizeKey;
                  return (
                    <button
                      key={sizeKey}
                      type="button"
                      onClick={() => setSelectedSize(sizeKey)}
                      className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-sky-500/10 border-sky-400 text-white shadow-sm ring-1 ring-sky-400'
                          : 'bg-neutral-950/70 border-neutral-800 hover:border-neutral-700 text-neutral-300'
                      }`}
                    >
                      <div className="text-sm font-bold">{info.label}</div>
                      <div className="text-xs text-neutral-400 mt-1 line-clamp-2">{info.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Core Package */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-sky-400">Step 2 of 3</span>
                <span className="text-xs text-neutral-400">Select Core Pillar</span>
              </div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sky-400" />
                <span>Service Package</span>
              </h3>

              <div className="space-y-3">
                {SERVICES.map((service) => {
                  const isSelected = selectedServiceId === service.id;
                  const adjustedPrice = Math.round(service.startingPrice * sizeMultiplier);
                  return (
                    <div
                      key={service.id}
                      onClick={() => setSelectedServiceId(service.id)}
                      className={`p-4 rounded-xl border flex items-center justify-between gap-4 cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-sky-500/10 border-sky-400 shadow-sm ring-1 ring-sky-400'
                          : 'bg-neutral-950/70 border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white">{service.name}</span>
                          {service.popular && (
                            <span className="text-xs text-sky-400 bg-sky-400/10 px-2 py-0.5 rounded border border-sky-400/20 font-medium">
                              Most Popular
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-neutral-400">{service.tagline}</p>
                        <div className="flex items-center gap-2 text-xs text-neutral-400 pt-1 font-mono">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{service.duration}</span>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-lg font-extrabold text-white font-mono tabular-nums">
                          ${adjustedPrice}
                        </span>
                        <div className="text-xs text-neutral-400">est. base</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Optional Add-ons */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-sky-400">Step 3 of 3</span>
                <span className="text-xs text-neutral-400">Optional Enhancements</span>
              </div>
              <h3 className="text-lg font-bold text-white">Custom Add-Ons</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ADD_ONS.map((addon) => {
                  const isChecked = selectedAddOns.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className={`p-3.5 rounded-xl border flex items-start justify-between gap-3 cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-sky-500/10 border-sky-400 shadow-sm'
                          : 'bg-neutral-950/70 border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                              isChecked
                                ? 'bg-sky-400 border-sky-400 text-neutral-950'
                                : 'border-neutral-600 bg-neutral-900'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="text-xs font-bold text-white">{addon.name}</span>
                        </div>
                        <p className="text-xs text-neutral-400 pl-6">{addon.description}</p>
                      </div>
                      <span className="text-xs font-mono font-bold text-sky-300 shrink-0 tabular-nums">
                        +${addon.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Sticky Summary Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl space-y-6">
              
              <div className="border-b border-neutral-800 pb-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-sky-400">
                  Estimated Summary
                </span>
                <h4 className="text-2xl font-bold text-white mt-1">Your Custom Quote</h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Christine Rd Detailing Studio or Mobile On-Site Service
                </p>
              </div>

              {/* Breakdown */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between text-neutral-300">
                  <span>Selected Package:</span>
                  <span className="font-semibold text-white">{currentService.name}</span>
                </div>

                <div className="flex items-center justify-between text-neutral-300">
                  <span>Vehicle Classification:</span>
                  <span className="font-semibold text-white">
                    {VEHICLE_SIZE_RATES[selectedSize].label}
                  </span>
                </div>

                <div className="flex items-center justify-between text-neutral-300">
                  <span>Estimated Duration:</span>
                  <span className="font-mono text-neutral-200">{currentService.duration}</span>
                </div>

                {selectedAddOns.length > 0 && (
                  <div className="pt-2 border-t border-neutral-800/80">
                    <span className="text-xs text-neutral-400 block mb-2">Selected Add-ons:</span>
                    {selectedAddOns.map((id) => {
                      const item = ADD_ONS.find((a) => a.id === id);
                      if (!item) return null;
                      return (
                        <div key={id} className="flex items-center justify-between text-xs text-neutral-300 py-0.5">
                          <span>+ {item.name}</span>
                          <span className="font-mono text-neutral-300 tabular-nums">${item.price}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Total Display */}
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-neutral-400 block uppercase font-mono tracking-wide">
                    Estimated Total
                  </span>
                  <span className="text-xs text-neutral-400">No deposit required</span>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-extrabold text-white font-mono tabular-nums">
                    ${estimatedTotal}
                  </span>
                </div>
              </div>

              {/* CTA Action */}
              <button
                type="button"
                onClick={handleApplyQuote}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-sm font-bold uppercase tracking-wider text-neutral-950 bg-sky-400 hover:bg-sky-300 shadow-md hover:shadow-sky-500/20 transition-all cursor-pointer group active:scale-95"
              >
                <span>Lock In Quote & Reserve Time</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="space-y-2 pt-2 border-t border-neutral-800/80 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Exact final inspection upon vehicle check-in</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Studio drop-off on Christine Rd or Mobile to your driveway</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
