import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

interface AppointmentCTAProps {
  onBookClick: () => void;
}

export const AppointmentCTA: React.FC<AppointmentCTAProps> = ({ onBookClick }) => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden bg-brand-900 text-white p-12 md:p-24"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-800/30 -skew-x-12 translate-x-1/4" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
              <Calendar size={16} className="text-brand-300" />
              <span className="text-xs font-bold uppercase tracking-widest">Limited Slots Available</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Your Perfect Smile Starts with a Consultation
            </h2>
            
            <p className="text-lg text-brand-100 mb-10 leading-relaxed">
              Join thousands of happy patients who have transformed their lives through our premium dental care. Book your visit today.
            </p>
            
            <button
              onClick={onBookClick}
              className="bg-white text-brand-900 px-10 py-5 rounded-full font-bold text-lg transition-all hover:bg-brand-50 hover:-translate-y-1 active:scale-95 flex items-center gap-3 shadow-2xl shadow-black/20"
            >
              Book Your Appointment
              <ArrowRight size={20} />
            </button>
          </div>
          
          {/* Floating Image (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 right-24 -translate-y-1/2 w-80 h-80 rounded-3xl overflow-hidden border-8 border-white/10 shadow-2xl rotate-6">
            <img 
              src="https://www.shutterstock.com/image-photo/smiling-woman-curly-hair-enjoys-600nw-2672268185.jpg" 
              alt="Confident Smile"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
