import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/15551234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-90 group"
    >
      <MessageCircle size={32} fill="currentColor" />
      <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </a>
  );
};
