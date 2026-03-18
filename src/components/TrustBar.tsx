import React from 'react';
import { UserCheck, Zap, Heart, ShieldCheck } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const points = [
    { icon: UserCheck, text: 'Experienced Dentists' },
    { icon: Zap, text: 'Advanced Technology' },
    { icon: Heart, text: 'Pain-Free Procedures' },
    { icon: ShieldCheck, text: 'Hygiene & Safety Focus' },
  ];

  return (
    <div className="bg-white border-y border-slate-100 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {points.map((point, i) => (
            <div key={i} className="flex flex-col items-center md:flex-row md:items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600">
                <point.icon size={24} />
              </div>
              <span className="font-semibold text-slate-700 text-sm md:text-base">{point.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
