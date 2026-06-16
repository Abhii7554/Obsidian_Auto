import React from 'react';

export default function Services({ onBookClick }) {
  const getAsset = (path) => import.meta.env.BASE_URL + path.slice(1);

  const servicesList = [
    {
      num: "01",
      title: "Exterior Detailing",
      desc: "Deep cleaning, decontamination, multi-stage polishing, and paint enhancement designed to restore showroom gloss.",
      image: getAsset('/assets/hero_car.png') // Reuse hero image for exterior
    },
    {
      num: "02",
      title: "Interior Restoration",
      desc: "Deep cleaning and conditioning of fabric, leather, dashboard, carpets, and advanced odor neutralizing treatments.",
      image: getAsset('/assets/after_interior.png') // Clean interior image
    },
    {
      num: "03",
      title: "Ceramic Coating",
      desc: "Long-lasting hydrophobic gloss and premium protection against environmental contaminants, chemical etching, and UV rays.",
      image: getAsset('/assets/service_ceramic.png') // Hydrophobic water-beading
    },
    {
      num: "04",
      title: "Paint Correction",
      desc: "Multi-stage machine polishing for complete removal of swirl marks, light scratches, oxidation, and paint imperfections.",
      image: getAsset('/assets/after_paint.png') // Corrected paint image
    },
    {
      num: "05",
      title: "PPF Installation",
      desc: "Advanced clear Paint Protection Film (PPF) wrap for long-term stone chip defense, self-healing scratches, and physical protection.",
      image: getAsset('/assets/service_ppf.png') // PPF application image
    },
    {
      num: "06",
      title: "Premium Maintenance Plans",
      desc: "Bespoke monthly and quarterly detailing packages to maintain your vehicle's pristine condition year-round.",
      image: getAsset('/assets/featured_sports.png') // Sleek sports car representation
    }
  ];

  return (
    <section id="services" className="bg-brand-primary py-24 border-b border-brand-dark-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header (Editorial composition) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16">
          <div className="lg:col-span-6">
            <div className="flex items-center space-x-3 mb-4">
              <span className="h-[1px] w-6 bg-brand-accent"></span>
              <p className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-accent">Studio Capabilities</p>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-brand-secondary">
              Professional Care <br />
              <span className="font-serif italic font-normal text-brand-accent">Bespoke Treatments</span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-brand-muted-dark text-xs sm:text-sm font-light leading-relaxed max-w-lg tracking-wide lg:ml-auto">
              Our detailing services are tailored to the specific needs of each vehicle. We use only premium pH-balanced solutions, advanced compound technologies, and master-level application techniques to ensure unmatched longevity and aesthetics.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="group flex flex-col bg-brand-dark-card border border-brand-dark-border overflow-hidden transition-all duration-500 hover:border-brand-accent/30"
            >
              {/* Card Image Wrapper */}
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-primary">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out select-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-brand-primary/0 transition-all duration-500"></div>
                
                {/* Number Badge */}
                <div className="absolute top-4 left-4 bg-brand-primary/90 text-brand-accent text-xs font-semibold px-3 py-1 font-serif tracking-widest border border-brand-dark-border">
                  {service.num}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow justify-between border-t border-brand-dark-border">
                <div className="space-y-4">
                  <h3 className="font-serif text-lg md:text-xl tracking-wider text-brand-secondary group-hover:text-brand-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-brand-muted-dark text-xs leading-relaxed font-light tracking-wide">
                    {service.desc}
                  </p>
                </div>
                
                {/* Action Inquire Link */}
                <button 
                  onClick={onBookClick}
                  className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] font-semibold text-brand-accent group-hover:text-brand-secondary transition-colors duration-300 mt-6 pt-4 border-t border-brand-secondary/5 text-left cursor-pointer"
                >
                  <span>Inquire Package</span>
                  <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
