import { useState, useRef, useEffect } from 'react';

export default function BeforeAfter() {
  const [activeTab, setActiveTab] = useState('paint'); // 'paint', 'interior', 'ceramic'
  const [sliderX, setSliderX] = useState(50); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const tabs = [
    { id: 'paint', label: 'Paint Correction' },
    { id: 'interior', label: 'Interior Restoration' },
    { id: 'ceramic', label: 'Ceramic Coating' }
  ];

  const slideData = {
    paint: {
      before: 'assets/before_paint.png',
      after: 'assets/after_paint.png',
      desc: "Remove paint swirls, micro-scratches, and oxidation to restore deep reflections."
    },
    interior: {
      before: 'assets/before_interior.png',
      after: 'assets/after_interior.png',
      desc: "Deep decontamination, leather rejuvenation, and meticulous stain extraction."
    },
    ceramic: {
      before: 'assets/before_paint.png', // base paint before treatment
      after: 'assets/service_ceramic.png', // glossy coated finish
      desc: "Extreme wet-look gloss combined with hydrophobic barrier protection."
    }
  };

  const currentData = slideData[activeTab];

  // Handle movements for mouse and touch dragging
  useEffect(() => {
    const handleGlobalMove = (e) => {
      if (!isDragging || !containerRef.current) return;
      
      const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let percentage = (x / rect.width) * 100;
      
      // Bound percentage between 0 and 100
      if (percentage < 0) percentage = 0;
      if (percentage > 100) percentage = 100;
      
      setSliderX(percentage);
    };

    const handleGlobalUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleGlobalMove);
      window.addEventListener('mouseup', handleGlobalUp);
      window.addEventListener('touchmove', handleGlobalMove, { passive: true });
      window.addEventListener('touchend', handleGlobalUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleGlobalMove);
      window.removeEventListener('mouseup', handleGlobalUp);
      window.removeEventListener('touchmove', handleGlobalMove);
      window.removeEventListener('touchend', handleGlobalUp);
    };
  }, [isDragging]);

  const handleStartDrag = (e) => {
    // Prevent default behavior to avoid text selection issues
    if (e.cancelable && e.type !== 'touchstart') {
      e.preventDefault();
    }
    setIsDragging(true);
  };

  const handleContainerClick = (e) => {
    if (isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderX(percentage);
  };

  return (
    <section id="before-after" className="bg-brand-primary py-24 border-b border-brand-dark-border">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <span className="h-[1px] w-6 bg-brand-accent"></span>
            <p className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-accent">Case Studies</p>
            <span className="h-[1px] w-6 bg-brand-accent"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-brand-secondary">
            Visual Proof of Perfection
          </h2>
          <p className="text-brand-muted-dark text-xs sm:text-sm font-light leading-relaxed max-w-lg mx-auto tracking-wide">
            Interact with our slider below to view direct transformation results of our craftsmanship.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center space-x-2 md:space-x-4 mb-8 border-b border-brand-dark-border pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setSliderX(50); // Reset position
              }}
              className={`px-4 py-2 text-xs uppercase tracking-widest font-semibold transition-all duration-300 border-b-2 cursor-pointer ${
                activeTab === tab.id 
                  ? 'border-brand-accent text-brand-accent' 
                  : 'border-transparent text-brand-muted-dark hover:text-brand-secondary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Description of Current Tab */}
        <p className="text-center text-xs text-brand-secondary/80 font-light tracking-widest mb-6 uppercase h-5">
          {currentData.desc}
        </p>

        {/* Interactive Comparison Slider Container */}
        <div className="relative border border-brand-dark-border bg-brand-dark-card overflow-hidden shadow-2xl">
          
          {/* Draggable Area Wrapper */}
          <div 
            ref={containerRef}
            onClick={handleContainerClick}
            className="relative w-full aspect-[16/10] md:aspect-[16/9] overflow-hidden select-none cursor-ew-resize"
          >
            {/* BOTTOM LAYER: BEFORE IMAGE */}
            <img 
              src={currentData.before} 
              alt="Before treatment" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            
            {/* Before Label (Shown on the Left half) */}
            <div className="absolute top-4 left-4 bg-brand-primary/95 text-brand-secondary text-[10px] tracking-[0.2em] uppercase font-bold py-1 px-3 border border-brand-dark-border z-10">
              Before
            </div>

            {/* TOP LAYER: AFTER IMAGE (Clipped dynamically) */}
            <img 
              src={currentData.after} 
              alt="After treatment" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              style={{
                clipPath: `polygon(${sliderX}% 0, 100% 0, 100% 100%, ${sliderX}% 100%)`
              }}
            />
            
            {/* After Label (Shown on the Right half) */}
            <div className="absolute top-4 right-4 bg-brand-accent/95 text-brand-primary text-[10px] tracking-[0.2em] uppercase font-bold py-1 px-3 border border-brand-accent/20 z-10">
              After
            </div>

            {/* SLIDER LINE */}
            <div 
              className="absolute top-0 bottom-0 w-[2px] bg-brand-accent pointer-events-none z-20"
              style={{ left: `${sliderX}%` }}
            >
              {/* SLIDER HANDLE BUTTON */}
              <div 
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-primary border border-brand-accent shadow-2xl flex items-center justify-center pointer-events-auto cursor-ew-resize transition-transform duration-300 hover:scale-110 active:scale-95"
                onMouseDown={handleStartDrag}
                onTouchStart={handleStartDrag}
                style={{ touchAction: 'none' }}
              >
                <div className="flex items-center space-x-1 text-brand-accent text-sm font-bold">
                  <span>‹</span>
                  <span>›</span>
                </div>
              </div>
            </div>

          </div>

        </div>
        
        {/* Help Tip */}
        <p className="text-center text-[10px] text-brand-muted-dark uppercase tracking-widest mt-6">
          Drag the center handle to compare before and after details
        </p>

      </div>
    </section>
  );
}
