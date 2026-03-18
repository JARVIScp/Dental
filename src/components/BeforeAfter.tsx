import React, { useState } from 'react';
import { motion } from 'motion/react';

export const BeforeAfter: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - container.left) / container.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4">Transformations</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Real Results, Real Smiles
          </h2>
          <p className="text-lg text-slate-600">
            See the life-changing results our patients achieve through our specialized cosmetic and restorative treatments.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            className="relative aspect-[16/9] rounded-[2rem] overflow-hidden shadow-2xl cursor-ew-resize select-none"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
          >
            {/* After Image */}
            <img 
              src="after.jpg" 
              alt="After Treatment - Perfectly Arranged Teeth"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            
            {/* Before Image (Clipped) */}
            <div 
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src="before.jpg" 
                alt="Before Treatment - Alignment in Progress"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Slider Line */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-1 h-4 bg-brand-200 rounded-full" />
                  <div className="w-1 h-4 bg-brand-600 rounded-full" />
                  <div className="w-1 h-4 bg-brand-200 rounded-full" />
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest z-30">
              Before
            </div>
            <div className="absolute bottom-6 right-6 bg-brand-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest z-30">
              After
            </div>
          </div>
          
          <div className="mt-8 flex justify-center gap-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">Treatment</div>
              <div className="text-sm text-slate-500">Smile Makeover</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">Duration</div>
              <div className="text-sm text-slate-500">4 Weeks</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">Specialist</div>
              <div className="text-sm text-slate-500">Dr. Elena Vance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
