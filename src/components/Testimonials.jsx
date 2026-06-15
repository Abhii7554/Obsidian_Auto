import React from 'react';

export default function Testimonials() {
  const reviews = [
    {
      quote: "The paint correction work on my AMG GT was absolute artistry. Every single swirl mark left by previous automatic washes was completely leveled. The depth of reflection in the obsidian black paint is now deeper than the day I purchased it.",
      author: "Vikram Malhotra",
      vehicle: "Mercedes-AMG GT S",
      treatment: "3-Stage Correction + 9H Ceramic Coating"
    },
    {
      quote: "Obsidian handles my classic 911 with absolute care. What sets them apart is their documentation—receiving digital paint thickness maps and daily high-resolution photo updates during its stay gives me complete peace of mind.",
      author: "Aditya Roy",
      vehicle: "Porsche 911 Carrera (1995)",
      treatment: "Heritage Leather Restoration + Paint Correction"
    },
    {
      quote: "The monthly concierge plan is flawless. They collect the vehicle from my Gurugram office and return it immaculate. The hydrophobic properties of their ceramic shield makes mid-week dust slide off with a simple rinse.",
      author: "Priya Sharma",
      vehicle: "Audi RS e-tron GT",
      treatment: "Full PPF + Signature Maintenance Plan"
    }
  ];

  return (
    <section id="testimonials" className="bg-brand-primary py-24 border-b border-brand-dark-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <span className="h-[1px] w-6 bg-brand-accent"></span>
            <p className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-accent">Verified Reviews</p>
            <span className="h-[1px] w-6 bg-brand-accent"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-brand-secondary">
            Client Testimonials
          </h2>
          <p className="text-brand-muted-dark text-xs sm:text-sm font-light leading-relaxed max-w-lg mx-auto tracking-wide">
            Read what luxury collectors and daily drivers say about our attention to detail.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="flex flex-col justify-between bg-brand-dark-card border border-brand-dark-border p-8 md:p-10 relative group hover:border-brand-accent/20 transition-all duration-500"
            >
              {/* Quote marks styling */}
              <span className="font-serif text-6xl text-brand-accent/10 absolute top-4 left-4 select-none pointer-events-none">“</span>
              
              {/* Quote text */}
              <p className="text-brand-secondary/90 text-sm leading-relaxed font-light tracking-wide relative z-10 italic mb-8">
                {review.quote}
              </p>

              {/* Author & Vehicle */}
              <div className="border-t border-brand-secondary/5 pt-6 space-y-2">
                <p className="font-serif text-sm tracking-wider text-brand-secondary">
                  {review.author}
                </p>
                <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-brand-muted-dark font-medium">
                  <span>{review.vehicle}</span>
                  <span className="text-brand-accent font-semibold">{review.treatment}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
