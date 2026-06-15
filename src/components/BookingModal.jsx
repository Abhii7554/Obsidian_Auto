import { useState, useEffect } from 'react';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleYear: '',
    vehicleModel: '',
    service: 'ceramic',
    preferredDate: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Disable page scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Reset state on close
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        vehicleYear: '',
        vehicleModel: '',
        service: 'ceramic',
        preferredDate: '',
        notes: ''
      });
      setErrors({});
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const services = [
    { value: 'ceramic', label: 'Ceramic Coating Protection' },
    { value: 'correction', label: 'Multi-Stage Paint Correction' },
    { value: 'ppf', label: 'PPF (Paint Protection Film) Wrap' },
    { value: 'exterior', label: 'Exterior Refinement & Polish' },
    { value: 'interior', label: 'Interior Rejuvenation & Detail' },
    { value: 'maintenance', label: 'Premium Maintenance Plan' }
  ];

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full Name is required.";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }

    const phoneRegex = /^[0-9+\s-]{10,15}$/;
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone)) {
      tempErrors.phone = "Please enter a valid phone number (10+ digits).";
    }

    if (!formData.vehicleModel.trim()) tempErrors.vehicleModel = "Vehicle Make/Model is required.";
    if (!formData.preferredDate) tempErrors.preferredDate = "Please choose a preferred date.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark Overlay Background */}
      <div 
        className="absolute inset-0 bg-brand-primary/95 backdrop-blur-md cursor-pointer transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Dialog */}
      <div 
        id="booking-modal-container"
        className="relative w-full max-w-xl bg-brand-dark-card border border-brand-dark-border p-8 md:p-12 overflow-y-auto max-h-[90vh] shadow-2xl z-10 animate-fade-in-up"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-booking-modal"
          className="absolute top-6 right-6 text-brand-secondary/60 hover:text-brand-accent transition-colors duration-300 text-2xl font-light focus:outline-none cursor-pointer"
          aria-label="Close Booking"
        >
          ✕
        </button>

        {!isSubmitted ? (
          /* BOOKING FORM */
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-accent">Inquiry Form</p>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-brand-secondary tracking-wide">
                Book Treatment
              </h2>
              <p className="text-brand-muted-dark text-xs font-light">
                Fill in your details below. A specialized detailing advisor will contact you within 24 hours to finalize your appointment.
              </p>
            </div>

            {/* Form Element */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Personal Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="flex flex-col space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-brand-secondary/80 font-bold" htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-brand-primary border border-brand-dark-border px-4 py-3 text-xs text-brand-secondary focus:border-brand-accent focus:outline-none transition-colors duration-300"
                    placeholder="Enter your name"
                  />
                  {errors.name && <span className="text-red-500 text-[10px] uppercase tracking-wider">{errors.name}</span>}
                </div>

                {/* Phone */}
                <div className="flex flex-col space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-brand-secondary/80 font-bold" htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-brand-primary border border-brand-dark-border px-4 py-3 text-xs text-brand-secondary focus:border-brand-accent focus:outline-none transition-colors duration-300"
                    placeholder="e.g. +91 98765 43210"
                  />
                  {errors.phone && <span className="text-red-500 text-[10px] uppercase tracking-wider">{errors.phone}</span>}
                </div>

              </div>

              {/* Email Address */}
              <div className="flex flex-col space-y-2">
                <label className="text-[9px] uppercase tracking-widest text-brand-secondary/80 font-bold" htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-brand-primary border border-brand-dark-border px-4 py-3 text-xs text-brand-secondary focus:border-brand-accent focus:outline-none transition-colors duration-300"
                  placeholder="e.g. contact@example.com"
                />
                {errors.email && <span className="text-red-500 text-[10px] uppercase tracking-wider">{errors.email}</span>}
              </div>

              {/* Vehicle Specifications */}
              <div className="grid grid-cols-3 gap-6">
                
                {/* Year */}
                <div className="flex flex-col space-y-2 col-span-1">
                  <label className="text-[9px] uppercase tracking-widest text-brand-secondary/80 font-bold" htmlFor="vehicleYear">Year</label>
                  <input
                    type="text"
                    id="vehicleYear"
                    name="vehicleYear"
                    value={formData.vehicleYear}
                    onChange={handleChange}
                    className="w-full bg-brand-primary border border-brand-dark-border px-4 py-3 text-xs text-brand-secondary focus:border-brand-accent focus:outline-none transition-colors duration-300"
                    placeholder="e.g. 2024"
                  />
                </div>

                {/* Make / Model */}
                <div className="flex flex-col space-y-2 col-span-2">
                  <label className="text-[9px] uppercase tracking-widest text-brand-secondary/80 font-bold" htmlFor="vehicleModel">Vehicle Model</label>
                  <input
                    type="text"
                    id="vehicleModel"
                    name="vehicleModel"
                    value={formData.vehicleModel}
                    onChange={handleChange}
                    className="w-full bg-brand-primary border border-brand-dark-border px-4 py-3 text-xs text-brand-secondary focus:border-brand-accent focus:outline-none transition-colors duration-300"
                    placeholder="e.g. Porsche 911 Carrera"
                  />
                  {errors.vehicleModel && <span className="text-red-500 text-[10px] uppercase tracking-wider col-span-2">{errors.vehicleModel}</span>}
                </div>

              </div>

              {/* Detailing Package & Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Package Select */}
                <div className="flex flex-col space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-brand-secondary/80 font-bold" htmlFor="service">Detailing Package</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-brand-primary border border-brand-dark-border px-4 py-3 text-xs text-brand-secondary focus:border-brand-accent focus:outline-none transition-colors duration-300 appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='%23C9A227' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>")`, backgroundPosition: 'right 12px center', backgroundRepeat: 'no-repeat' }}
                  >
                    {services.map(s => (
                      <option key={s.value} value={s.value} className="bg-brand-dark-card text-brand-secondary">{s.label}</option>
                    ))}
                  </select>
                </div>

                {/* Preferred Date */}
                <div className="flex flex-col space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-brand-secondary/80 font-bold" htmlFor="preferredDate">Preferred Date</label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full bg-brand-primary border border-brand-dark-border px-4 py-3 text-xs text-brand-secondary focus:border-brand-accent focus:outline-none transition-colors duration-300"
                  />
                  {errors.preferredDate && <span className="text-red-500 text-[10px] uppercase tracking-wider">{errors.preferredDate}</span>}
                </div>

              </div>

              {/* Special Notes */}
              <div className="flex flex-col space-y-2">
                <label className="text-[9px] uppercase tracking-widest text-brand-secondary/80 font-bold" htmlFor="notes">Special Requirements</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="3"
                  className="w-full bg-brand-primary border border-brand-dark-border px-4 py-3 text-xs text-brand-secondary focus:border-brand-accent focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="e.g. Matte finish care, heavy swirl removal needed, pick-up requested"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="submit-booking"
                className="w-full py-4 bg-brand-accent text-brand-primary text-xs uppercase tracking-[0.25em] font-bold hover:bg-brand-secondary hover:text-brand-primary transition-colors duration-300 cursor-pointer shadow-lg mt-2"
              >
                Request Consultation
              </button>

            </form>
          </div>
        ) : (
          /* SUCCESS SCREEN */
          <div className="text-center py-12 space-y-8 animate-fade-in">
            {/* Success Icon */}
            <div className="w-16 h-16 rounded-full border border-brand-accent flex items-center justify-center mx-auto bg-brand-accent/5">
              <svg className="w-8 h-8 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* Messages */}
            <div className="space-y-3">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-accent">Request Submitted</p>
              <h2 className="font-serif text-3xl font-light text-brand-secondary tracking-wide">
                Thank You, {formData.name.split(' ')[0]}
              </h2>
              <p className="text-brand-muted-dark text-xs md:text-sm leading-relaxed font-light tracking-wide max-w-sm mx-auto">
                We have received your request for the <span className="text-brand-secondary font-semibold">{services.find(s => s.value === formData.service)?.label}</span>.
              </p>
            </div>

            <div className="h-[1px] bg-brand-dark-border w-24 mx-auto"></div>

            {/* Custom summary block */}
            <div className="bg-brand-primary/50 border border-brand-dark-border p-6 text-left space-y-2 max-w-sm mx-auto">
              <p className="text-[9px] uppercase tracking-widest text-brand-muted-dark font-bold">Booking Details</p>
              <p className="text-xs font-light text-brand-secondary/85"><strong className="text-brand-secondary font-medium">Vehicle:</strong> {formData.vehicleYear} {formData.vehicleModel}</p>
              <p className="text-xs font-light text-brand-secondary/85"><strong className="text-brand-secondary font-medium">Requested Date:</strong> {formData.preferredDate}</p>
              <p className="text-xs font-light text-brand-secondary/85"><strong className="text-brand-secondary font-medium">Callback:</strong> within 24 Hours</p>
            </div>

            {/* Done button */}
            <button
              onClick={onClose}
              className="px-8 py-3 bg-brand-secondary text-brand-primary text-xs uppercase tracking-[0.2em] font-bold hover:bg-brand-accent hover:text-brand-primary transition-colors duration-300 cursor-pointer"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
