import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-neutral-900/40 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Proof of Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white [text-wrap:balance]">
            Experience the Hawkeye Transformation
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-400 font-normal">
            Drag the slider horizontally to reveal swirl-free multi-stage paint correction and deep ceramic glass clarity.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative h-72 sm:h-96 md:h-[480px] rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl select-none cursor-ew-resize group"
            onMouseDown={() => setIsDragging(true)}
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
          >
            {/* "After" Image (Full background) */}
            <img
              src="/src/assets/images/service_paint_protection_1792463321512.jpg"
              alt="Hawkeye Auto Detail paint correction after ceramic coating"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 bg-neutral-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-sky-500/40 text-xs font-bold uppercase tracking-wider text-sky-400 z-10">
              After: 9H Ceramic Coating
            </div>

            {/* "Before" Layer (Clipped to slider position) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/src/assets/images/hero_detail_gloss_1792463321207.jpg"
                alt="Vehicle prior to detailing"
                className="absolute inset-0 w-full h-full object-cover filter contrast-75 brightness-75 grayscale-[40%]"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%', maxWidth: 'none' }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-neutral-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-800 text-xs font-bold uppercase tracking-wider text-neutral-300 z-10">
                Before: Swirls & Road Film
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_15px_rgba(255,255,255,0.7)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-neutral-900 border-2 border-white flex items-center justify-center text-white shadow-xl hover:scale-110 active:scale-95 transition-transform">
                <MoveHorizontal className="w-4 h-4 text-sky-400" />
              </div>
            </div>

            {/* Subtle help overlay at bottom */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-neutral-950/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-neutral-800 text-xs text-neutral-300 pointer-events-none">
              Drag slider left or right to compare
            </div>
          </div>

          {/* Adjacency proof note */}
          <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-neutral-400 gap-2 px-1">
            <span>Machine dual-action corrected with Sonax & Menzerna compounds</span>
            <span className="font-semibold text-neutral-300">Christine Rd Detailing Studio, Wichita Falls</span>
          </div>
        </div>

      </div>
    </section>
  );
};
