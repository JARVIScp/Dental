import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-50/50 -skew-x-12 translate-x-1/4" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} className="fill-brand-500 text-brand-500" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Trusted by 5,000+ Patients</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
              Redefining Your Smile with <span className="text-brand-600">Precision</span> & Care
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
              Advanced dental treatments with modern technology, experienced specialists, and a patient-first approach.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-brand-600/20 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
              >
                Book Appointment
                <ArrowRight size={20} />
              </button>
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all active:scale-95"
              >
                Get Consultation
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-slate-900">15+</div>
                <div className="text-sm text-slate-500">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">10k+</div>
                <div className="text-sm text-slate-500">Happy Patients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">99%</div>
                <div className="text-sm text-slate-500">Success Rate</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Dental Clinic Interior"
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 z-20 glass-card p-6 rounded-2xl max-w-[240px]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <Star size={20} fill="currentColor" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Top Rated</div>
                  <div className="text-xs text-slate-500">In Cosmetic Care</div>
                </div>
              </div>
              <p className="text-sm text-slate-600">"The best dental experience I've ever had. Highly professional!"</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
