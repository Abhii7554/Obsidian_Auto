import React from 'react';

export default function Metrics() {
  const metricsList = [
    {
      value: "2500+",
      label: "Vehicles Detailed",
      description: "From classic luxury sedans to modern hypercars, finished to perfection."
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      description: "Our reputation is built on meticulous attention to every single detail."
    },
    {
      value: "5+",
      label: "Years Experience",
      description: "Certified technicians trained in advanced paint correction & film application."
    },
    {
      value: "24hr",
      label: "Response Time",
      description: "Seamless booking, quick digital quotes, and prompt consultation."
    }
  ];

  return (
    <section className="bg-brand-primary py-20 border-b border-brand-dark-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metricsList.map((metric, index) => (
            <div 
              key={index} 
              className="group relative bg-brand-dark-card border border-brand-dark-border p-8 md:p-10 transition-all duration-500 hover:border-brand-accent/40"
            >
              {/* Card Corner Accents */}
              <span className="absolute top-0 right-0 w-2 h-[1px] bg-brand-accent/30 group-hover:bg-brand-accent transition-colors duration-300"></span>
              <span className="absolute top-0 right-0 h-2 w-[1px] bg-brand-accent/30 group-hover:bg-brand-accent transition-colors duration-300"></span>
              
              {/* Metric Number */}
              <p className="font-serif text-4xl lg:text-5xl font-light text-brand-accent mb-4 tracking-tight">
                {metric.value}
              </p>
              
              {/* Divider */}
              <div className="w-8 h-[1px] bg-brand-secondary/20 mb-6 group-hover:w-16 transition-all duration-500"></div>

              {/* Title */}
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-secondary mb-3">
                {metric.label}
              </h3>
              
              {/* Description */}
              <p className="text-brand-muted-dark text-xs leading-relaxed font-light tracking-wide">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
