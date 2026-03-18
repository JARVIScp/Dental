import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

interface ContactProps {
  onBookClick: () => void;
  onCallClick: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onBookClick, onCallClick }) => {
  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4">Contact Us</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-10 leading-tight">
              Visit Our Modern Studio
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Our Location</h3>
                  <p className="text-slate-600">1st Floor, Sky Tower, MG Road<br />Bangalore, Karnataka 560001</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Phone Number</h3>
                  <p className="text-slate-600">+91 98765 43210<br />+91 80 1234 5678</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Email Address</h3>
                  <p className="text-slate-600">hello@luminadental.com<br />appointments@luminadental.com</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-600 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Working Hours</h3>
                  <p className="text-slate-600">Mon - Fri: 9:00 AM - 7:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={onBookClick}
                className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-brand-700 active:scale-95"
              >
                Book Appointment
              </button>
              <button
                onClick={onCallClick}
                className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold transition-all hover:bg-slate-50 active:scale-95 flex items-center gap-2"
              >
                <Phone size={18} />
                Call Now
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] lg:h-auto rounded-[3rem] overflow-hidden shadow-xl border-8 border-white"
          >
            {/* Placeholder for Google Maps */}
            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin size={48} className="text-slate-400 mx-auto mb-4" />
                <div className="font-bold text-slate-500">Google Maps Integration</div>
                <p className="text-sm text-slate-400 mt-2">Interactive map would be embedded here</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
                alt="Map Placeholder"
                className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
