import { useState } from 'react';

export default function FeaturedVehicles() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Showcase' },
    { id: 'luxury', label: 'Luxury Cars' },
    { id: 'suv', label: 'SUVs' },
    { id: 'sports', label: 'Sports Cars' },
    { id: 'daily', label: 'Daily Drivers' }
  ];

  const vehicles = [
    {
      id: 1,
      title: "Porsche 911 GT3 RS",
      category: "sports",
      treatment: "Full PPF Wrap + Gold Ceramic Layer",
      year: "2025",
      image: "/assets/featured_sports.png"
    },
    {
      id: 2,
      title: "Bentley Flying Spur",
      category: "luxury",
      treatment: "3-Stage Correction + 9H Ceramic Shield",
      year: "2024",
      image: "/assets/featured_luxury.png"
    },
    {
      id: 3,
      title: "Range Rover Autobiography",
      category: "suv",
      treatment: "Decontamination + Stealth PPF Wrap",
      year: "2025",
      image: "/assets/featured_suv.png"
    },
    {
      id: 4,
      title: "Audi RS7 Sportback",
      category: "daily",
      treatment: "Signature Obsidian Exterior Refinement",
      year: "2024",
      image: "/assets/hero_car.png"
    }
  ];

  const filteredVehicles = activeFilter === 'all' 
    ? vehicles 
    : vehicles.filter(v => v.category === activeFilter);

  return (
    <section id="showcase" className="bg-brand-primary py-24 border-b border-brand-dark-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16">
          <div className="lg:col-span-6">
            <div className="flex items-center space-x-3 mb-4">
              <span className="h-[1px] w-6 bg-brand-accent"></span>
              <p className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-accent">The Gallery</p>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-brand-secondary">
              Obsidian Curated <br />
              <span className="font-serif italic font-normal text-brand-accent">Finished Showpieces</span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-4 py-2 text-[10px] uppercase tracking-widest font-semibold transition-all duration-300 border border-brand-dark-border cursor-pointer ${
                    activeFilter === cat.id 
                      ? 'bg-brand-accent border-brand-accent text-brand-primary' 
                      : 'bg-brand-dark-card text-brand-muted-dark hover:text-brand-secondary'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredVehicles.map((vehicle) => (
            <div 
              key={vehicle.id} 
              className="group flex flex-col bg-brand-dark-card border border-brand-dark-border overflow-hidden transition-all duration-500 hover:border-brand-accent/20"
            >
              {/* Image box */}
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-primary">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.title} 
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out select-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-brand-primary/0 transition-all duration-500"></div>
              </div>

              {/* Editorial Info details */}
              <div className="p-8 flex justify-between items-start border-t border-brand-dark-border">
                <div className="space-y-2">
                  <h3 className="font-serif text-lg tracking-wider text-brand-secondary group-hover:text-brand-accent transition-colors duration-300">
                    {vehicle.title}
                  </h3>
                  <p className="text-brand-muted-dark text-xs font-light tracking-wider uppercase">
                    {vehicle.treatment}
                  </p>
                </div>
                
                {/* Vintage details card */}
                <div className="text-right pl-4">
                  <span className="text-[10px] uppercase tracking-widest text-brand-accent font-mono border border-brand-accent/20 px-2.5 py-1 bg-brand-accent/5">
                    {vehicle.year}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
