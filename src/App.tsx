import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BeforeAfter } from './components/BeforeAfter';
import { Testimonials } from './components/Testimonials';
import { AppointmentCTA } from './components/AppointmentCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Modal } from './components/Modal';
import { AppointmentForm } from './components/AppointmentForm';
import { Service } from './constants';
import { Phone, Mail, Clock } from 'lucide-react';

export default function App() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const openAppointmentModal = () => setIsAppointmentModalOpen(true);
  const closeAppointmentModal = () => setIsAppointmentModalOpen(false);

  const openCallModal = () => setIsCallModalOpen(true);
  const closeCallModal = () => setIsCallModalOpen(false);

  const openServiceModal = (service: Service) => {
    setSelectedService(service);
  };
  const closeServiceModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onBookClick={openAppointmentModal} onCallClick={openCallModal} />
      
      <main>
        <Hero onBookClick={openAppointmentModal} />
        <TrustBar />
        <About />
        <Services onServiceClick={openServiceModal} />
        <WhyChooseUs />
        <BeforeAfter />
        <Testimonials />
        <AppointmentCTA onBookClick={openAppointmentModal} />
        <Contact onBookClick={openAppointmentModal} onCallClick={openCallModal} />
      </main>

      <Footer />
      <WhatsAppButton />

      {/* Appointment Modal */}
      <Modal 
        isOpen={isAppointmentModalOpen} 
        onClose={closeAppointmentModal}
        title="Book Your Appointment"
      >
        <AppointmentForm onSuccess={closeAppointmentModal} />
      </Modal>

      {/* Call Modal */}
      <Modal
        isOpen={isCallModalOpen}
        onClose={closeCallModal}
        title="Contact Our Team"
      >
        <div className="space-y-6">
          <p className="text-slate-600">Our specialists are available to answer your questions and help you book your visit.</p>
          <div className="space-y-4">
            <a 
              href="tel:+919876543210"
              className="flex items-center gap-4 p-4 rounded-2xl bg-brand-50 border border-brand-100 text-brand-700 transition-all hover:bg-brand-100"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Phone size={20} />
              </div>
              <div>
                <div className="font-bold">Primary Line</div>
                <div className="text-sm opacity-80">+91 98765 43210</div>
              </div>
            </a>
            <a 
              href="mailto:hello@luminadental.com"
              className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 transition-all hover:bg-slate-100"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Mail size={20} />
              </div>
              <div>
                <div className="font-bold">Email Us</div>
                <div className="text-sm opacity-80">hello@luminadental.com</div>
              </div>
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500 justify-center pt-4">
            <Clock size={16} />
            <span>Available Mon-Sat, 9AM - 7PM</span>
          </div>
        </div>
      </Modal>

      {/* Service Detail Modal */}
      <Modal
        isOpen={!!selectedService}
        onClose={closeServiceModal}
        title={selectedService?.title}
        className="max-w-2xl"
      >
        {selectedService && (
          <div className="space-y-6">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={selectedService.image} 
                alt={selectedService.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg text-slate-700 leading-relaxed">
                {selectedService.fullDescription}
              </p>
              <div className="pt-6 border-t border-slate-100">
                <h4 className="font-bold text-slate-900 mb-4">Interested in this treatment?</h4>
                <button
                  onClick={() => {
                    closeServiceModal();
                    openAppointmentModal();
                  }}
                  className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold transition-all hover:bg-brand-700"
                >
                  Book a Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
