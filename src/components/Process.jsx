import React from 'react';

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Inspection",
      desc: "Comprehensive paint depth measurements, leather grade evaluation, and client consult."
    },
    {
      num: "02",
      title: "Treatment Plan",
      desc: "Tailoring paint correction stages and selecting protection layers based on findings."
    },
    {
      num: "03",
      title: "Precision Work",
      desc: "Careful multi-stage correction, decontamination, coating, and interior detailing."
    },
    {
      num: "04",
      title: "Quality Review",
      desc: "Multi-point inspection under high CRI lights followed by custom owner walkthrough."
    }
  ];

  return (
    <section id="process" className="bg-brand-primary py-24 border-b border-brand-dark-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <span className="h-[1px] w-6 bg-brand-accent"></span>
            <p className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-accent">Our Methodology</p>
            <span className="h-[1px] w-6 bg-brand-accent"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-brand-secondary">
            The Obsidian Process
          </h2>
          <p className="text-brand-muted-dark text-xs sm:text-sm font-light leading-relaxed max-w-lg mx-auto tracking-wide">
            How we translate meticulous craftsmanship into long-lasting automotive beauty.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Horizontal line for desktop connecting steps */}
          <div className="absolute top-[35px] left-0 right-0 h-[1px] bg-brand-dark-border hidden lg:block z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col space-y-4 relative z-10 bg-brand-primary pr-4">
              
              {/* Step Number Circle */}
              <div className="w-[70px] h-[70px] rounded-full border border-brand-dark-border bg-brand-dark-card flex items-center justify-center font-serif text-lg text-brand-accent group-hover:border-brand-accent/40 select-none">
                {step.num}
              </div>

              {/* Step Content */}
              <div className="space-y-2 pt-2">
                <h3 className="font-serif text-lg tracking-wider text-brand-secondary">
                  {step.title}
                </h3>
                <p className="text-brand-muted-dark text-xs sm:text-sm leading-relaxed font-light tracking-wide">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
