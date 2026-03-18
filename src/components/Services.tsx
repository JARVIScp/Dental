import React from 'react';
import { motion } from 'motion/react';
import { SERVICES, Service } from '@/src/constants';
import { ArrowRight, Sparkles, ShieldCheck, Stethoscope, Smile, Star, Heart } from 'lucide-react';

interface ServicesProps {
  onServiceClick: (service: Service) => void;
}

const IconMap: Record<string, any> = {
  Sparkles,
  ShieldCheck,
  Stethoscope,
  Smile,
  Star,
  Heart
};

export const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  return (
    <section id="treatments" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive Dental Treatments
          </h2>
          <p className="text-lg text-slate-600">
            We offer a full spectrum of dental services using advanced technology to ensure the best outcomes for your oral health.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            const Icon = IconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                      <Icon size={24} />
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-8 line-clamp-2">
                    {service.description}
                  </p>
                  <button
                    onClick={() => onServiceClick(service)}
                    className="flex items-center gap-2 text-brand-600 font-bold group/btn"
                  >
                    Learn More
                    <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
