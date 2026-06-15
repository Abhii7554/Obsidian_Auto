import React from 'react';

export default function WhyChooseUs() {
  const pillars = [
    {
      title: "Premium Products",
      desc: "We curate the world's finest coatings, compounding agents, and leather feed formulations, selected strictly for performance.",
      icon: (
        <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Certified Technicians",
      desc: "Our detailing specialists are master-certified in paint chemistry, wet-sanding techniques, and film physics.",
      icon: (
        <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Attention to Detail",
      desc: "From Q-tip air vent cleanings to digital paint thickness assessments, we verify work at a microscopic level.",
      icon: (
        <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Transparent Process",
      desc: "Get digital condition reports, paint thickness maps, and real-time photo/video updates during your vehicle's stay.",
      icon: (
        <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Long-Lasting Results",
      desc: "Our ceramic coatings and PPFs are backed by verified manufacturer warranties and comprehensive care guidelines.",
      icon: (
        <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Customer-First Approach",
      desc: "Enjoy personalized consultations, concierge vehicle pickup, and comfortable lounge facilities with high-speed Wi-Fi.",
      icon: (
        <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="why-us" className="bg-brand-primary py-24 border-b border-brand-dark-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="h-[1px] w-6 bg-brand-accent"></span>
              <p className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-accent">Our Philosophy</p>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-brand-secondary leading-[1.2]">
              Craftsmanship <br />
              <span className="font-serif italic font-normal text-brand-accent">Meets Protection</span>
            </h2>
            <div className="h-[1px] bg-brand-dark-border w-24"></div>
            <p className="text-brand-muted-dark text-xs sm:text-sm font-light leading-relaxed tracking-wide">
              We do not believe in templates or rush jobs. Every vehicle is treated as an individual project, requiring a bespoke solution based on paint thickness, material type, and owner usage.
            </p>
          </div>

          {/* Right Column: Pillars Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {pillars.map((pillar, index) => (
              <div key={index} className="space-y-4 group">
                {/* Icon Circle */}
                <div className="w-10 h-10 rounded-full border border-brand-dark-border bg-brand-dark-card flex items-center justify-center group-hover:border-brand-accent/40 group-hover:bg-brand-primary transition-all duration-300">
                  {pillar.icon}
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-base tracking-widest text-brand-secondary group-hover:text-brand-accent transition-colors duration-300">
                  {pillar.title}
                </h3>
                
                {/* Description */}
                <p className="text-brand-muted-dark text-xs sm:text-sm leading-relaxed font-light tracking-wide">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
