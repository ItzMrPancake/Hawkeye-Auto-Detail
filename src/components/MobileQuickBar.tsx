import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/detailingData';

interface MobileQuickBarProps {
  onBookClick: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onBookClick }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 p-2.5 px-4 shadow-2xl">
      <div className="flex items-center gap-2">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-100 text-xs font-bold whitespace-nowrap active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-sky-400" />
          <span>Call Now</span>
        </a>

        <button
          onClick={onBookClick}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-sky-400 text-neutral-950 text-xs font-bold uppercase tracking-wider shadow-sm active:scale-95 transition-transform cursor-pointer whitespace-nowrap"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Detail</span>
        </button>
      </div>
    </div>
  );
};
