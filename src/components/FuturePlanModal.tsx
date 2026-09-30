import React, { useState } from 'react';
import { X, Bell, CheckCircle2, Calendar, ShieldCheck } from 'lucide-react';
import { FuturePlan } from '../types/medical';

interface FuturePlanModalProps {
  plan: FuturePlan | null;
  onClose: () => void;
}

export const FuturePlanModal: React.FC<FuturePlanModalProps> = ({ plan, onClose }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!plan) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden animate-scale-in">
        
        {/* Header */}
        <div className="bg-[#0b2d4f] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-slate-950 inline-block mb-2">
            Coming Soon · Strategic Expansion
          </span>
          <h3 className="text-xl font-bold font-heading text-white">
            {plan.title}
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            {plan.subtitle}
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900">
                You're on the Priority List!
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Thank you, {name}. As soon as the <span className="font-bold text-slate-800">{plan.title}</span> OPD wing inaugurates, we will notify you at <span className="font-bold text-slate-800">{contact}</span>.
              </p>
              <button
                onClick={onClose}
                className="mt-4 w-full py-2.5 rounded-xl font-bold text-xs text-white bg-[#0b2d4f] hover:bg-[#071f37]"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Scope of Service
                </span>
                <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">
                  {plan.description}
                </p>
              </div>

              <div className="p-3 bg-teal-50/70 rounded-xl border border-teal-200 text-xs text-teal-900 flex items-center justify-between">
                <span className="font-semibold">Target Opening:</span>
                <span className="font-bold text-teal-800">{plan.expectedDate}</span>
              </div>

              <div className="space-y-3 pt-1">
                <label className="block text-xs font-bold text-slate-700">
                  Get Notified for Priority Opening OPD Slot
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:border-teal-600 focus:bg-white"
                />
                <input
                  type="text"
                  required
                  placeholder="Mobile Number or Email"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:border-teal-600 focus:bg-white"
                />
              </div>

              <button
                type="submit"
                disabled={!name || !contact}
                className="w-full py-3 rounded-xl font-bold text-xs text-white bg-[#0b2d4f] hover:bg-[#071f37] disabled:opacity-50 transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Bell className="w-4 h-4 text-teal-300" />
                <span>Notify Me When Wing Launches</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
