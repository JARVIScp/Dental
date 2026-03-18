import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Modern Clinic"
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-100 rounded-3xl -z-10" />
            <div className="absolute top-1/2 -left-10 w-20 h-20 bg-brand-500 rounded-full blur-2xl opacity-20" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4">About Our Clinic</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Excellence in Modern Dentistry for Your Entire Family
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At Lumina Dental Studio, we believe that a visit to the dentist should be a premium, stress-free experience. Our clinic combines world-class expertise with the latest dental innovations to provide care that is as comfortable as it is effective.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                'Patient-centric philosophy focusing on long-term health',
                'State-of-the-art diagnostic and treatment equipment',
                'Highly specialized team with international training',
                'Luxurious environment designed for your comfort'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-500 mt-1 shrink-0" size={20} />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200" 
                  alt="Dr. Elena Vance"
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold text-slate-900 text-lg">Dr. Elena Vance</div>
                  <div className="text-sm text-slate-500">Chief Medical Director</div>
                </div>
              </div>
              <p className="mt-4 text-slate-600 italic">
                "Our mission is to provide life-changing dental care through precision, artistry, and genuine compassion."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
