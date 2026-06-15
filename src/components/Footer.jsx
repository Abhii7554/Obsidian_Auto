import React from 'react';

export default function Footer({ onBookClick }) {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#0c0c0c] border-t border-brand-dark-border py-16 md:py-24 text-brand-secondary/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
        
        {/* Brand Column (Col Span 4) */}
        <div className="lg:col-span-4 space-y-6">
          <a 
            href="#hero" 
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex flex-col w-fit"
          >
            <span className="font-serif text-2xl tracking-[0.3em] text-brand-secondary">
              OBSIDIAN
            </span>
            <span className="text-[0.7rem] tracking-[0.45em] text-brand-accent font-serif -mt-1 font-bold">
              AUTO SPA
            </span>
          </a>
          <p className="text-brand-muted-dark text-xs sm:text-sm leading-relaxed font-light tracking-wide max-w-sm">
            Bespoke detailing, paint protection film, and ceramic coatings engineered for exotics, classics, and luxury automobiles. Beyond clean. Protected. Perfected.
          </p>
          {/* Social Links */}
          <div className="flex space-x-6 pt-2">
            {['Instagram', 'Facebook', 'YouTube', 'LinkedIn'].map((platform) => (
              <a
                key={platform}
                href={`#${platform.toLowerCase()}`}
                className="text-[10px] uppercase tracking-widest text-brand-muted-dark hover:text-brand-accent transition-colors duration-300 font-semibold"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>

        {/* Services Links (Col Span 3) */}
        <div className="lg:col-span-3 lg:col-start-6 space-y-6">
          <h3 className="font-serif text-xs uppercase tracking-[0.25em] text-brand-secondary font-bold">
            Treatments
          </h3>
          <ul className="space-y-3">
            {[
              { name: "Ceramic Coating", href: "#services" },
              { name: "Paint Correction", href: "#services" },
              { name: "PPF Installation", href: "#services" },
              { name: "Exterior Detailing", href: "#services" },
              { name: "Interior Restoration", href: "#services" },
              { name: "Maintenance Plans", href: "#services" }
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xs text-brand-muted-dark hover:text-brand-secondary transition-colors duration-300 font-light tracking-wider"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation Links (Col Span 2) */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="font-serif text-xs uppercase tracking-[0.25em] text-brand-secondary font-bold">
            Studio
          </h3>
          <ul className="space-y-3">
            {[
              { name: "Services", href: "#services" },
              { name: "Before & After", href: "#before-after" },
              { name: "Why Us", href: "#why-us" },
              { name: "Process", href: "#process" },
              { name: "Showcase", href: "#showcase" },
              { name: "FAQ", href: "#faq" }
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xs text-brand-muted-dark hover:text-brand-secondary transition-colors duration-300 font-light tracking-wider"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Links (Col Span 3) */}
        <div className="lg:col-span-3 space-y-6">
          <h3 className="font-serif text-xs uppercase tracking-[0.25em] text-brand-secondary font-bold">
            Contact
          </h3>
          <ul className="space-y-4">
            <li className="flex flex-col space-y-1">
              <span className="text-[9px] uppercase tracking-widest text-brand-muted-dark font-bold">Phone</span>
              <a 
                href="tel:+919876543210" 
                className="text-xs text-brand-secondary hover:text-brand-accent transition-colors duration-300 font-light tracking-wider"
              >
                +91 98765 43210
              </a>
            </li>
            <li className="flex flex-col space-y-1">
              <span className="text-[9px] uppercase tracking-widest text-brand-muted-dark font-bold">Email</span>
              <a 
                href="mailto:contact@obsidianautospa.com" 
                className="text-xs text-brand-secondary hover:text-brand-accent transition-colors duration-300 font-light tracking-wider"
              >
                contact@obsidianautospa.com
              </a>
            </li>
            <li className="flex flex-col space-y-1">
              <span className="text-[9px] uppercase tracking-widest text-brand-muted-dark font-bold">Studio Location</span>
              <p className="text-xs text-brand-secondary/80 font-light leading-relaxed tracking-wider">
                12, Golf Course Road, Sector 54,<br />
                Gurugram, Haryana, 122002, India
              </p>
            </li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="h-[1px] bg-brand-dark-border w-full mb-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-widest text-brand-muted-dark">
          <p>
            © {new Date().getFullYear()} OBSIDIAN AUTO SPA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-brand-secondary transition-colors duration-300">Privacy Policy</a>
            <a href="#terms" className="hover:text-brand-secondary transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
