import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: 'Experienced Specialists',
      description: 'Our team consists of internationally trained dentists with decades of combined experience.'
    },
    {
      title: 'Latest Dental Technology',
      description: 'From 3D imaging to laser dentistry, we invest in tools that make treatments faster and safer.'
    },
    {
      title: 'Comfortable & Pain-Free Care',
      description: 'We prioritize your comfort with sedation options and gentle techniques for a stress-free visit.'
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden costs. We provide clear treatment plans and pricing before any procedure begins.'
    },
    {
      title: 'Personalized Treatment Plans',
      description: 'Every smile is unique. We tailor our approach to your specific needs and aesthetic goals.'
    }
  ];

  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4">Why Patients Trust Us</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-10 leading-tight">
              A Higher Standard of Dental Excellence
            </h2>
            
            <div className="space-y-8">
              {points.map((point, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 shrink-0">
                    <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                      <CheckCircle2 size={16} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">{point.title}</h3>
                    <p className="text-slate-600">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img 
                  src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=600" 
                  alt="Dental Tech"
                  className="rounded-3xl shadow-lg w-full h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600" 
                  alt="Dental Care"
                  className="rounded-3xl shadow-lg w-full h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600" 
                  alt="Dental Implants"
                  className="rounded-3xl shadow-lg w-full h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600" 
                  alt="Teeth Whitening"
                  className="rounded-3xl shadow-lg w-full h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            {/* Stats Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white p-8 rounded-full w-40 h-40 flex flex-col items-center justify-center text-center shadow-2xl border-4 border-white">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-[10px] font-bold uppercase tracking-widest">Hygiene Safety</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
