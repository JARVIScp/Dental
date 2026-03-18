import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-display font-bold text-lg">
              L
            </div>
            <span className="font-display text-lg font-bold tracking-tight text-slate-900">
              LUMINA<span className="text-brand-600">DENTAL</span>
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-brand-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-600 transition-colors">Patient Portal</a>
            <a href="#" className="hover:text-brand-600 transition-colors">Careers</a>
          </div>
          
          <div className="text-sm text-slate-400">
            © 2026 Lumina Dental Studio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
