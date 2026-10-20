import React, { useState, useEffect } from 'react';
import { Calendar, Send, CheckCircle2, Phone, Mail, Clock, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, ADD_ONS } from '../data/detailingData';
import { BookingFormData, VehicleSize } from '../types';

interface BookingAndContactSectionProps {
  preselectedServiceId?: string;
  preselectedVehicleSize?: VehicleSize;
  preselectedAddOns?: string[];
}

export const BookingAndContactSection: React.FC<BookingAndContactSectionProps> = ({
  preselectedServiceId,
  preselectedVehicleSize,
  preselectedAddOns,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    vehicleYearMakeModel: '',
    vehicleSize: preselectedVehicleSize || 'midsize_suv_truck',
    serviceId: preselectedServiceId || 'interior-detail',
    serviceLocation: 'studio',
    preferredDate: '',
    preferredTime: 'morning',
    addOnIds: preselectedAddOns || [],
    notes: '',
  });

  useEffect(() => {
    if (preselectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: preselectedServiceId }));
    }
  }, [preselectedServiceId]);

  useEffect(() => {
    if (preselectedVehicleSize) {
      setFormData((prev) => ({ ...prev, vehicleSize: preselectedVehicleSize }));
    }
  }, [preselectedVehicleSize]);

  useEffect(() => {
    if (preselectedAddOns) {
      setFormData((prev) => ({ ...prev, addOnIds: preselectedAddOns }));
    }
  }, [preselectedAddOns]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your name.';
    if (!formData.phone.trim() || formData.phone.length < 10)
      errs.phone = 'Please provide a valid 10-digit phone number.';
    if (!formData.email.trim() || !formData.email.includes('@'))
      errs.email = 'Please provide a valid email address.';
    if (!formData.vehicleYearMakeModel.trim())
      errs.vehicleYearMakeModel = 'Please include vehicle year, make, and model.';
    if (!formData.preferredDate) errs.preferredDate = 'Please select a preferred date.';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      vehicleYearMakeModel: '',
      vehicleSize: 'midsize_suv_truck',
      serviceId: 'interior-detail',
      serviceLocation: 'studio',
      preferredDate: '',
      preferredTime: 'morning',
      addOnIds: [],
      notes: '',
    });
  };

  const selectedService = SERVICES.find((s) => s.id === formData.serviceId) || SERVICES[0];

  return (
    <section id="booking" className="py-20 lg:py-28 bg-neutral-950 border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-400 mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Schedule Service & Request Quote</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white [text-wrap:balance]">
            Book Your Detail or Inquire Directly
          </h2>
          <p className="mt-4 text-base text-neutral-400 font-normal leading-relaxed">
            Fill out the brief schedule form below. Our detailing manager will confirm your appointment within 2 business hours.
          </p>
        </div>

        {/* 2-Column Grid: Form + Quick Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-neutral-900/60 p-6 sm:p-8 rounded-2xl border border-neutral-800 shadow-2xl">
            {submitted ? (
              <div className="py-10 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Detailing Request Received!</h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-white">{formData.fullName}</span>. We have reserved your provisional time slot for <span className="font-semibold text-sky-400">{formData.preferredDate}</span> ({selectedService.name}).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-left max-w-md mx-auto space-y-2 text-xs">
                  <div className="flex justify-between text-neutral-400">
                    <span>Vehicle:</span>
                    <span className="text-white font-medium">{formData.vehicleYearMakeModel}</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Service:</span>
                    <span className="text-white font-medium">{selectedService.name}</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Location:</span>
                    <span className="text-white font-medium">
                      {formData.serviceLocation === 'studio' ? 'Christine Rd Studio' : 'Mobile On-Site'}
                    </span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Contact Phone:</span>
                    <span className="text-white font-medium">{formData.phone}</span>
                  </div>
                </div>

                <p className="text-xs text-neutral-400">
                  Our team will call or text to confirm check-in directions or arrival window.
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-white transition-colors cursor-pointer"
                  >
                    Submit Another Vehicle
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Contact Basics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. John Miller"
                      className={`w-full px-4 py-3 rounded-xl bg-neutral-950 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-sky-400 ${
                        errors.fullName ? 'border-red-500/80' : 'border-neutral-800'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(940) 555-0123"
                      className={`w-full px-4 py-3 rounded-xl bg-neutral-950 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-sky-400 ${
                        errors.phone ? 'border-red-500/80' : 'border-neutral-800'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-neutral-950 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-sky-400 ${
                        errors.email ? 'border-red-500/80' : 'border-neutral-800'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Vehicle Year, Make & Model *
                    </label>
                    <input
                      type="text"
                      value={formData.vehicleYearMakeModel}
                      onChange={(e) => setFormData({ ...formData, vehicleYearMakeModel: e.target.value })}
                      placeholder="e.g. 2022 Ford F-150"
                      className={`w-full px-4 py-3 rounded-xl bg-neutral-950 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-sky-400 ${
                        errors.vehicleYearMakeModel ? 'border-red-500/80' : 'border-neutral-800'
                      }`}
                    />
                    {errors.vehicleYearMakeModel && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.vehicleYearMakeModel}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Select Detailing Pillar
                  </label>
                  <select
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} (from ${s.startingPrice})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Location Preference */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Service Location Preference
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, serviceLocation: 'studio' })}
                      className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                        formData.serviceLocation === 'studio'
                          ? 'bg-sky-500/10 border-sky-400 text-white shadow-sm ring-1 ring-sky-400'
                          : 'bg-neutral-950/70 border-neutral-800 text-neutral-400'
                      }`}
                    >
                      <div className="text-xs font-bold text-white">Christine Rd Studio Bay</div>
                      <div className="text-[11px] text-neutral-400 mt-0.5">Wichita Falls, TX 76302</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, serviceLocation: 'mobile' })}
                      className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                        formData.serviceLocation === 'mobile'
                          ? 'bg-sky-500/10 border-sky-400 text-white shadow-sm ring-1 ring-sky-400'
                          : 'bg-neutral-950/70 border-neutral-800 text-neutral-400'
                      }`}
                    >
                      <div className="text-xs font-bold text-white">Mobile Detailing Unit</div>
                      <div className="text-[11px] text-neutral-400 mt-0.5">To your home or office</div>
                    </button>
                  </div>
                </div>

                {/* Date & Time Preferences */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-neutral-950 border text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-400 ${
                        errors.preferredDate ? 'border-red-500/80' : 'border-neutral-800'
                      }`}
                    />
                    {errors.preferredDate && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.preferredDate}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Preferred Time Window
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                    >
                      <option value="morning">Morning (8:00 AM – 11:00 AM)</option>
                      <option value="afternoon">Afternoon (12:00 PM – 3:00 PM)</option>
                      <option value="late_afternoon">Late Afternoon (3:00 PM – 6:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Notes & Special Requests */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Notes or Specific Concerns (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Tough pet hair in rear hatch, hard water spots on driver door, ceramic coating question..."
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl text-sm font-bold uppercase tracking-wider text-neutral-950 bg-sky-400 hover:bg-sky-300 disabled:opacity-60 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 active:scale-95"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Request...</span>
                    </div>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Detailing Request</span>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-neutral-500">
                  No payment collected now. Pricing finalized after vehicle assessment.
                </p>

              </form>
            )}
          </div>

          {/* Right Column: Direct Contact & Hours Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white">Direct Communication</h3>
              
              <div className="space-y-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-neutral-950 border border-neutral-800/80 hover:border-sky-500/50 hover:bg-sky-500/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 block">Call or Text Anytime</span>
                    <span className="text-base font-bold text-white group-hover:text-sky-300">
                      {BUSINESS_INFO.phone}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-neutral-950 border border-neutral-800/80 hover:border-sky-500/50 hover:bg-sky-500/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 block">Email Inquiries</span>
                    <span className="text-sm font-semibold text-white group-hover:text-sky-300 truncate">
                      {BUSINESS_INFO.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-neutral-950 border border-neutral-800/80">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 block">Studio Address</span>
                    <span className="text-sm font-semibold text-white block">
                      {BUSINESS_INFO.street}
                    </span>
                    <span className="text-xs text-neutral-400">
                      {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
                    </span>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="pt-4 border-t border-neutral-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-300">
                  <Clock className="w-4 h-4 text-sky-400" />
                  <span>Studio & Mobile Operating Hours</span>
                </div>

                <div className="space-y-2 text-xs">
                  {BUSINESS_INFO.hours.map((h, i) => (
                    <div key={i} className="flex items-center justify-between py-1 border-b border-neutral-800/60 last:border-0">
                      <span className="text-neutral-400">{h.days}</span>
                      <span className="font-semibold text-white font-mono">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Same-Day Guarantee Box */}
            <div className="p-5 rounded-2xl bg-neutral-900/50 border border-neutral-800 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-sky-400 shrink-0" />
              <div className="text-xs text-neutral-300 leading-snug">
                <span className="font-bold text-white block">Rapid Response Guarantee</span>
                Requests received during business hours are reviewed within 60 minutes.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
