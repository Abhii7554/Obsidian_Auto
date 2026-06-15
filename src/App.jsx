import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import FeaturedVehicles from './components/FeaturedVehicles';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  const scrollToServices = () => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = servicesSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-brand-primary text-brand-secondary font-sans selection:bg-brand-accent selection:text-brand-primary antialiased">
      {/* Sticky Header Navbar */}
      <Navbar onBookClick={openBooking} />

      {/* Main Content Sections */}
      <main>
        
        {/* Hero Section */}
        <Hero onBookClick={openBooking} onExploreClick={scrollToServices} />

        {/* Trust Metrics */}
        <Metrics />

        {/* Service Packages */}
        <Services onBookClick={openBooking} />

        {/* Interactive Before & After Slider */}
        <BeforeAfter />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Process Roadmap */}
        <Process />

        {/* Curated Vehicle Showcase Gallery */}
        <FeaturedVehicles />

        {/* Realistic Customer Testimonials */}
        <Testimonials />

        {/* Interactive FAQ accordions */}
        <FAQ />

        {/* Call to Action Banner */}
        <CTA onBookClick={openBooking} />

      </main>

      {/* Footer */}
      <Footer onBookClick={openBooking} />

      {/* Booking Drawer Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}

export default App;
