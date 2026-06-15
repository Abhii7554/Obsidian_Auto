import React from 'react';

export default function CTA({ onBookClick }) {
  return (
    <section className="bg-brand-primary py-28 relative overflow-hidden border-b border-brand-dark-border">
      
      {/* Background design elements */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <span className="font-serif text-[15rem] font-bold text-brand-secondary absolute -bottom-16 -left-12 select-none">
          OBSIDIAN
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10 space-y-8">
        
        {/* Subtle detail */}
        <div className="flex items-center justify-center space-x-3">
          <span className="h-[1px] w-6 bg-brand-accent"></span>
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-accent">Exquisite Car Care</p>
          <span className="h-[1px] w-6 bg-brand-accent"></span>
        </div>

        {/* Title */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-brand-secondary leading-tight">
          Protect Your Investment<span className="text-brand-accent">.</span>
        </h2>

        {/* Description */}
        <p className="text-brand-muted-dark text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-xl mx-auto tracking-wide">
          Whether it's your daily drive or your dream car, give it the attention it deserves. Preserve paint integrity and interior luxury.
        </p>

        {/* Action Button */}
        <div className="pt-4">
          <button
            onClick={onBookClick}
            id="cta-book-btn"
            className="px-10 py-4 bg-brand-accent border border-brand-accent text-brand-primary text-xs uppercase tracking-[0.25em] font-bold hover:bg-transparent hover:text-brand-accent transition-all duration-400 cursor-pointer shadow-2xl"
          >
            Book Your Visit
          </button>
        </div>

      </div>
    </section>
  );
}
