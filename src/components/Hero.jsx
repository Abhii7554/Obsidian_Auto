import React from 'react';

export default function Hero({ onBookClick, onExploreClick }) {
  return (
    <section 
      id="hero" 
      className="relative min-h-[95vh] flex items-center pt-28 pb-16 overflow-hidden bg-brand-primary border-b border-brand-dark-border"
    >
      {/* Background Subtle Editorial Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="max-w-7xl mx-auto h-full px-6 md:px-12 grid grid-cols-4 md:grid-cols-12 gap-8">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="h-full border-r border-brand-secondary"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col space-y-8 animate-fade-in-up">
            
            {/* Tagline / Subtitle */}
            <div className="flex items-center space-x-3">
              <span className="h-[1px] w-8 bg-brand-accent"></span>
              <p className="text-xs uppercase tracking-[0.4em] font-semibold text-brand-accent">
                Beyond Clean. Protected. Perfected.
              </p>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light tracking-tight text-brand-secondary leading-[1.1]">
              Your Vehicle <br />
              <span className="font-serif italic font-normal text-brand-accent">Deserves More</span> <br />
              Than a Wash<span className="text-brand-accent font-serif font-bold">.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-brand-muted-dark text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-light tracking-wide">
              Professional detailing, ceramic protection, paint correction, and interior restoration crafted for owners who care about every detail.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onBookClick}
                id="hero-book-btn"
                className="px-8 py-4 bg-brand-accent border border-brand-accent text-brand-primary text-xs uppercase tracking-[0.25em] font-bold hover:bg-transparent hover:text-brand-accent transition-all duration-400 shadow-lg cursor-pointer"
              >
                Book Appointment
              </button>
              <button
                onClick={onExploreClick}
                id="hero-explore-btn"
                className="px-8 py-4 bg-transparent border border-brand-secondary/30 text-brand-secondary text-xs uppercase tracking-[0.25em] font-bold hover:bg-brand-secondary hover:text-brand-primary transition-all duration-400 cursor-pointer"
              >
                Explore Services
              </button>
            </div>
            
            {/* Fine Print / Editorial note */}
            <div className="pt-8 grid grid-cols-2 gap-4 border-t border-brand-dark-border max-w-lg">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-brand-muted-dark font-semibold">Location</p>
                <p className="text-xs text-brand-secondary/80 font-light mt-1">Gurugram, Golf Course Rd</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-brand-muted-dark font-semibold">Studio Hours</p>
                <p className="text-xs text-brand-secondary/80 font-light mt-1">09:00 AM – 08:00 PM</p>
              </div>
            </div>

          </div>

          {/* Right Side: Premium Vehicle Showcase */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end animate-fade-in delay-200">
            {/* Decorative Offset Gold Frame */}
            <div className="absolute -top-4 -left-4 w-[60%] h-[60%] border-t border-l border-brand-accent/20 pointer-events-none hidden xl:block"></div>
            <div className="absolute -bottom-4 -right-4 w-[60%] h-[60%] border-b border-r border-brand-accent/20 pointer-events-none hidden xl:block"></div>

            {/* Image Container with Editorial Layout */}
            <div className="relative w-full max-w-lg lg:max-w-none aspect-[4/5] bg-brand-dark-card border border-brand-dark-border overflow-hidden group">
              
              {/* Subtle CSS Parallax Image Layer */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img 
                  src={import.meta.env.BASE_URL + 'assets/hero_car.png'} 
                  alt="Obsidian Auto Spa Luxury Detailing" 
                  className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-[6000ms] ease-out select-none"
                  loading="eager"
                />
              </div>

              {/* Dark Overlay for Luxury Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-brand-primary/20 opacity-60"></div>
              
              {/* Image Badge / Technical Specifications */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-brand-secondary z-10 bg-brand-primary/80 backdrop-blur-md p-4 border border-brand-dark-border">
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-brand-accent font-bold">Featured Treatment</p>
                  <p className="font-serif text-sm tracking-widest mt-0.5">OBSIDIAN SIGNATURE SHIELD</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] uppercase tracking-widest text-brand-muted-dark">Finish</p>
                  <p className="text-xs font-light tracking-wider mt-0.5">9H Ceramic + Paint Correction</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
