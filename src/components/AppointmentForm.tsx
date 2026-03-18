import React, { useState } from 'react';
import { cn } from '@/src/lib/utils';

interface AppointmentFormProps {
  initialTreatment?: string;
  onSuccess?: () => void;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({ initialTreatment = '', onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSuccess) {
        setTimeout(onSuccess, 2000);
      }
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-emerald-100 p-3 text-emerald-600">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h4 className="text-xl font-semibold text-slate-900">Request Received</h4>
        <p className="mt-2 text-slate-600">Our team will contact you shortly to confirm your appointment.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
        <input
          required
          type="text"
          placeholder="John Doe"
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
        <input
          required
          type="tel"
          placeholder="+1 (555) 000-0000"
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Treatment Required</label>
        <select
          defaultValue={initialTreatment}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10 appearance-none"
        >
          <option value="">Select a treatment</option>
          <option value="whitening">Teeth Whitening</option>
          <option value="implants">Dental Implants</option>
          <option value="root-canal">Root Canal</option>
          <option value="orthodontics">Braces & Aligners</option>
          <option value="cosmetic">Cosmetic Dentistry</option>
          <option value="general">General Checkup</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Preferred Date</label>
        <input
          type="date"
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Message (Optional)</label>
        <textarea
          rows={3}
          placeholder="Tell us more about your needs..."
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10 resize-none"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full rounded-xl bg-brand-600 py-4 font-semibold text-white transition-all hover:bg-brand-700 active:scale-[0.98]",
          isSubmitting && "opacity-70 cursor-not-allowed"
        )}
      >
        {isSubmitting ? "Processing..." : "Submit Request"}
      </button>
    </form>
  );
};
