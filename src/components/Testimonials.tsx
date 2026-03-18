import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '@/src/constants';
import { Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4">Patient Experiences</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What Our Patients Say
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 relative"
            >
              <div className="absolute top-10 right-10 text-brand-100">
                <Quote size={48} fill="currentColor" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-500 text-brand-500" />
                ))}
              </div>
              
              <p className="text-lg text-slate-700 mb-8 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-200 flex items-center justify-center text-brand-700 font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
