import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "How long does detailing take?",
      a: "The duration depends on the treatment. A premium exterior and interior wash can take 4–6 hours. However, advanced services like multi-stage paint correction, ceramic coatings, or full PPF wrapping require 2 to 5 days. This allows correct curing times, clean application conditions, and meticulous final inspections under high-CRI detailing lights."
    },
    {
      q: "What is ceramic coating?",
      a: "Ceramic coating is a premium liquid polymer that chemically bonds with your vehicle's factory clear coat. Once cured, it forms a semi-permanent, glass-like barrier. This layer provides extreme hydrophobic properties (water beading), intense gloss, UV protection, resistance to chemical stains (bird droppings, acid rain), and minor swirl protection. It does not wash off and can last up to 5+ years with proper maintenance."
    },
    {
      q: "How often should I detail my vehicle?",
      a: "For optimal paint preservation, we recommend a thorough exterior decontamination and paint enhancement twice a year (every 6 months). For coated or wrapped vehicles, a monthly or quarterly specialized maintenance wash is ideal to clear environmental film, maintain hydrophobic properties, and inspect the protective layers."
    },
    {
      q: "Do you work on luxury vehicles?",
      a: "Yes, luxury vehicles, sports cars, classics, and exotics are our primary focus. We follow strict safety protocols, including digital paint depth measurement across all panels before touch, tape protection of delicate trims, and using only pH-neutral, non-abrasive compounding agents tailored to specific paint chemistry (soft Japanese clear coats vs. hard German clear coats)."
    },
    {
      q: "How long does PPF last?",
      a: "Our premium Paint Protection Films (PPF) are constructed from advanced polyurethane and carry a 10-year manufacturer warranty. This covers yellowing, cracking, bubbling, and peeling. Additionally, our PPF features self-healing topcoats that automatically repair swirl marks and light physical scratches under heat (sunlight or warm water)."
    }
  ];

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section id="faq" className="bg-brand-primary py-24 border-b border-brand-dark-border">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <span className="h-[1px] w-6 bg-brand-accent"></span>
            <p className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-accent">Inquiries</p>
            <span className="h-[1px] w-6 bg-brand-accent"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-brand-secondary">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-muted-dark text-xs sm:text-sm font-light leading-relaxed max-w-lg mx-auto tracking-wide">
            Clear, detailed information regarding our processes, treatments, and expectations.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className="bg-brand-dark-card border border-brand-dark-border transition-colors duration-300 hover:border-brand-accent/25"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                  id={`faq-btn-${index}`}
                >
                  <span className="font-serif text-xs md:text-sm uppercase tracking-[0.2em] text-brand-secondary font-medium">
                    {faq.q}
                  </span>
                  
                  {/* Plus/Minus Indicator */}
                  <span className={`text-brand-accent text-lg font-light transition-transform duration-300 transform ${
                    isOpen ? 'rotate-45' : 'rotate-0'
                  }`}>
                    ＋
                  </span>
                </button>

                {/* Accordion Content */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[300px] border-t border-brand-secondary/5' : 'max-h-0'
                  }`}
                >
                  <p className="p-6 md:p-8 text-brand-muted-dark text-xs sm:text-sm leading-relaxed font-light tracking-wide">
                    {faq.a}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
