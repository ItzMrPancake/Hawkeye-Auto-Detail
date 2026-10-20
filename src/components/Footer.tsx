import React, { useState } from 'react';
import { ShieldCheck, Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/detailingData';

export const Footer: React.FC = () => {
  const [footerEmail, setFooterEmail] = useState('');
  const [footerMessage, setFooterMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!footerEmail.trim()) return;
    setSent(true);
    setTimeout(() => {
      setFooterEmail('');
      setFooterMessage('');
    }, 2000);
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-400">
      {/* Upper Footer: 4-Column Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Identity (span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white group">
              <div className="w-8 h-8 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span>{BUSINESS_INFO.name}</span>
            </a>

            <p className="text-sm text-neutral-400 leading-relaxed">
              Wichita Falls' trusted choice for high-precision automotive detailing, steam interior restoration, and certified ceramic coatings. Studio drop-off on Christine Rd and mobile units across North Texas.
            </p>

            <div className="space-y-2 pt-2 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.street}, {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Business Hours (span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-200">
              <Clock className="w-4 h-4 text-sky-400" />
              <span>Business Hours</span>
            </div>

            <div className="space-y-2.5 text-xs">
              {BUSINESS_INFO.hours.map((h, i) => (
                <div key={i} className="pb-2 border-b border-neutral-900 last:border-0">
                  <div className="text-neutral-400 font-medium">{h.days}</div>
                  <div className="text-white font-mono font-semibold mt-0.5">{h.hours}</div>
                </div>
              ))}
            </div>

            <p className="text-xs text-neutral-400 pt-1">
              Early morning key drop-box available at our Christine Rd studio.
            </p>
          </div>

          {/* Col 3: Service Area Info (span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-200">
              <MapPin className="w-4 h-4 text-sky-400" />
              <span>Service Area</span>
            </div>

            <ul className="space-y-1.5 text-xs">
              {BUSINESS_INFO.serviceAreas.slice(0, 6).map((area, idx) => (
                <li key={idx} className="text-neutral-300 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-sky-400" />
                  <span>{area}</span>
                </li>
              ))}
              <li className="text-neutral-400 text-[11px] pt-1">
                + Surrounding Texoma communities
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Contact Mini-Form (span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-200">
              <Send className="w-4 h-4 text-sky-400" />
              <span>Quick Contact Form</span>
            </div>

            <p className="text-xs text-neutral-400">
              Have a quick question? Send a direct message to our Christine Rd shop.
            </p>

            {sent ? (
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Message received! We will reply promptly.</span>
              </div>
            ) : (
              <form onSubmit={handleQuickContact} className="space-y-2.5">
                <input
                  type="email"
                  required
                  placeholder="Your Email or Phone"
                  value={footerEmail}
                  onChange={(e) => setFooterEmail(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-lg bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-sky-400"
                />
                <textarea
                  rows={2}
                  required
                  placeholder="Your message or vehicle info..."
                  value={footerMessage}
                  onChange={(e) => setFooterMessage(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-lg bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-sky-400 resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-lg bg-sky-400 hover:bg-sky-300 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Send Direct Note
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Lower Legal & Copyright Bar */}
        <div className="mt-14 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. Christine Rd, Wichita Falls, TX 76302.
          </div>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#calculator" className="hover:text-white transition-colors">Pricing</a>
            <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
            <a href="#booking" className="hover:text-white transition-colors">Book Online</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
