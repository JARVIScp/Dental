import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface HeaderProps {
  onBookClick: () => void;
  onCallClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick, onCallClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-sm py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white font-display font-bold text-xl">
            L
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-slate-900">
            LUMINA<span className="text-brand-600">DENTAL</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={onCallClick}
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-brand-600 transition-colors"
          >
            <Phone size={16} className="text-brand-600" />
            +91 98765 43210
          </button>
          <button
            onClick={onBookClick}
            className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-brand-600/20 active:scale-95"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-white border-b border-slate-100"
      >
        <div className="container-custom py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-700"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full bg-brand-600 text-white py-4 rounded-xl font-semibold"
            >
              Book Appointment
            </button>
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onCallClick();
              }}
              className="w-full border border-slate-200 text-slate-700 py-4 rounded-xl font-semibold text-center flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Call Us
            </button>
          </div>
        </div>
      </motion.div>
    </header>
  );
};
