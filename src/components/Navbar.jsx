import { useState, useEffect } from 'react'

export default function Navbar({ onBookClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // 1. Scrolled backdrop styling
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Scroll-spy tracking active section
      const sections = ['services', 'before-after', 'why-us', 'process', 'showcase', 'faq'];
      
      if (window.scrollY < 200) {
        setActiveSection('');
        return;
      }

      let currentActive = '';
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 120; // adjust for sticky header offset
          const bottom = top + el.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            currentActive = id;
          }
        }
      });
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Before & After', href: '#before-after' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // height of navbar
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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-brand-primary/95 backdrop-blur-md py-4 border-b border-brand-dark-border shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Left Side: Brand Logo (Always flex-shrink-0 to prevent compression) */}
        <div className="flex-shrink-0">
          <a 
            href="#hero" 
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex flex-col w-fit group"
          >
            <span className="font-serif text-base sm:text-lg lg:text-xl xl:text-2xl tracking-[0.3em] text-brand-secondary group-hover:text-brand-accent transition-colors duration-300">
              OBSIDIAN
            </span>
            <span className="text-[0.55rem] sm:text-[0.6rem] lg:text-[0.65rem] xl:text-[0.7rem] tracking-[0.45em] text-brand-accent font-serif -mt-1 font-bold">
              AUTO SPA
            </span>
          </a>
        </div>

        {/* Center: Navigation Links (Visible on Tablet & Desktop) */}
        <nav className="hidden md:flex items-center justify-center space-x-3 lg:space-x-5 xl:space-x-8 mx-4 flex-grow">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-[9.5px] lg:text-[10.5px] xl:text-[12px] uppercase tracking-[0.18em] font-semibold transition-all duration-300 relative py-2 group whitespace-nowrap cursor-pointer ${
                  isActive ? 'text-brand-accent' : 'text-brand-secondary/70 hover:text-brand-secondary'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-[1.5px] bg-brand-accent transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            );
          })}
        </nav>

        {/* Right Side: Actions (Visible on Desktop / Adaptive) */}
        <div className="flex items-center space-x-3 lg:space-x-4 xl:space-x-6 flex-shrink-0">
          
          {/* Phone Link: Visible only on large screens (>=1280px) to prevent overlapping on standard desktop/tablets */}
          <a 
            href="tel:+919876543210" 
            className="hidden xl:inline-block text-[11px] xl:text-[12px] uppercase tracking-[0.15em] font-bold text-brand-secondary/65 hover:text-brand-accent transition-colors duration-300 whitespace-nowrap cursor-pointer"
          >
            +91 98765 43210
          </a>
          
          {/* Book Appointment: Always visible for max conversion */}
          <button
            onClick={onBookClick}
            id="nav-book-btn"
            className="px-3.5 py-2 lg:px-5 lg:py-2.5 bg-transparent border border-brand-accent text-brand-accent text-[9px] lg:text-[10px] xl:text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-brand-accent hover:text-brand-primary transition-all duration-400 cursor-pointer whitespace-nowrap"
          >
            Book Appointment
          </button>

          {/* Mobile Drawer Hamburger: Toggle button visible only on mobile (<768px) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-brand-secondary hover:text-brand-accent transition-colors duration-300 focus:outline-none cursor-pointer p-1"
            aria-label="Toggle Menu"
            id="mobile-menu-toggle"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>

      </div>

      {/* Mobile Menu Drawer (Below 768px viewports) */}
      <div 
        className={`fixed inset-0 top-[65px] bg-brand-primary/98 backdrop-blur-lg z-40 transition-transform duration-500 md:hidden border-t border-brand-dark-border ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-between p-12">
          <nav className="flex flex-col space-y-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-base uppercase tracking-[0.25em] font-serif transition-colors duration-300 cursor-pointer ${
                    isActive ? 'text-brand-accent font-medium' : 'text-brand-secondary hover:text-brand-accent'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
          
          <div className="flex flex-col space-y-6 pb-20">
            <div className="h-[1px] bg-brand-dark-border w-full"></div>
            <a 
              href="tel:+919876543210" 
              className="text-sm uppercase tracking-[0.2em] text-brand-secondary/70 hover:text-brand-accent font-bold"
            >
              +91 98765 43210
            </a>
            <p className="text-[10px] uppercase tracking-[0.15em] text-brand-muted-dark font-medium">
              12, Golf Course Road, Gurugram, India
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
