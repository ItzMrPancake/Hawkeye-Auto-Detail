import React, { useState } from 'react';
import { Star, ShieldCheck, Quote, CheckCircle2 } from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '../data/detailingData';

export const ReviewsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'interior' | 'exterior' | 'paint_protection'>('all');

  const filteredReviews = activeCategory === 'all'
    ? REVIEWS
    : REVIEWS.filter((r) => r.serviceCategory === activeCategory);

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-neutral-950 border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block with Prominent 5-Star Scoreboard */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-400 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Customer Endorsements & Proof</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white [text-wrap:balance]">
              Wichita Falls Trusts Hawkeye for 5-Star Automotive Perfection
            </h2>
            <p className="mt-4 text-base text-neutral-400 font-normal">
              Read real verified experiences from local truck owners, daily commuters, sports car drivers, and military families stationed at Sheppard AFB.
            </p>
          </div>

          {/* Prominent Rating Card */}
          <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xl flex items-center gap-6 shrink-0">
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white font-mono tabular-nums">5.0</span>
                <span className="text-lg text-neutral-400 font-mono">/ 5.0</span>
              </div>
              <div className="flex items-center text-amber-400 gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <div className="text-xs text-neutral-400 mt-1">
                {BUSINESS_INFO.reviewCount}+ Google Reviews
              </div>
            </div>

            <div className="h-12 w-px bg-neutral-800" />

            <div className="space-y-1 text-xs text-neutral-300">
              <div className="flex items-center gap-1.5 font-medium text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>100% Recommended</span>
              </div>
              <div className="text-neutral-400">Verified Local Clients</div>
              <div className="text-neutral-400">Christine Rd Studio</div>
            </div>
          </div>
        </div>

        {/* Interactive Filter Tabs (functional buttons with handlers) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-neutral-900">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-sky-400 text-neutral-950 shadow-sm'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            All Reviews ({REVIEWS.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('interior')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeCategory === 'interior'
                ? 'bg-sky-400 text-neutral-950 shadow-sm'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            Interior Restoration
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('exterior')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeCategory === 'exterior'
                ? 'bg-sky-400 text-neutral-950 shadow-sm'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            Exterior Wash & Decon
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('paint_protection')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeCategory === 'paint_protection'
                ? 'bg-sky-400 text-neutral-950 shadow-sm'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            Ceramic & Paint Protection
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-colors shadow-lg relative group"
            >
              <div className="space-y-4">
                {/* Header: Rating & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-neutral-500 font-mono">{review.date}</span>
                </div>

                {/* Review Title */}
                <h3 className="text-base font-bold text-white leading-snug group-hover:text-sky-300 transition-colors">
                  "{review.title}"
                </h3>

                {/* Review Body */}
                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  {review.comment}
                </p>
              </div>

              {/* Attribution Footer */}
              <div className="pt-5 mt-6 border-t border-neutral-800/80 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">{review.name}</div>
                  <div className="text-xs text-neutral-400 flex items-center gap-1.5 mt-0.5">
                    <span>{review.vehicle}</span>
                    <span className="text-neutral-600" aria-hidden="true">·</span>
                    <span className="text-neutral-500">{review.location}</span>
                  </div>
                </div>
                <Quote className="w-5 h-5 text-neutral-700 shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Social Proof Bar */}
        <div className="mt-12 text-center text-xs text-neutral-400 flex flex-wrap items-center justify-center gap-3">
          <span>Official Google Business Profile</span>
          <span className="text-neutral-600" aria-hidden="true">·</span>
          <span>100% Real Wichita Falls Area Customers</span>
          <span className="text-neutral-600" aria-hidden="true">·</span>
          <span className="text-sky-400 font-medium">Christine Rd, Wichita Falls, TX 76302</span>
        </div>

      </div>
    </section>
  );
};
