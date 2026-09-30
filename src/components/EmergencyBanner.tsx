import React, { useState } from 'react';
import { Phone, CheckCircle2, ArrowRight, Ambulance } from 'lucide-react';

interface EmergencyBannerProps {
  onOpenBooking: () => void;
  onOpenAmbulance: () => void;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({
  onOpenBooking,
  onOpenAmbulance
}) => {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const copyNumber = (num: string) => {
    navigator.clipboard.writeText(num.replace(/[^0-9]/g, ''));
    setCopiedNumber(num);
    setTimeout(() => setCopiedNumber(null), 2500);
  };

  return (
    <section className="py-12 md:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Blue Curved Container matching screenshot */}
        <div className="relative rounded-3xl bg-[#0a2744] text-white p-8 sm:p-12 lg:p-14 overflow-hidden shadow-xl border border-blue-900/60">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-900/80 text-teal-300 border border-teal-500/30">
                Ready to Serve 24 Hours
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading leading-tight">
                Need Immediate Medical Assistance?
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
                We are ready to serve you 24 hours a day, 7 days a week. Our on-call doctors and IGD (Emergency Department) nurses are always on standby for emergency care and consultation.
              </p>

              {/* 3 Checkpoints */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs sm:text-sm font-semibold text-teal-200">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>24 Hours OPD</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Professional Medical Staff</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Complete Facilities</span>
                </div>
              </div>

              {/* Emergency Ambulance Dispatch Trigger */}
              <div className="pt-2">
                <button
                  onClick={onOpenAmbulance}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600/90 hover:bg-red-600 text-white text-xs font-bold transition-all shadow-md cursor-pointer border border-red-400/40"
                >
                  <Ambulance className="w-4 h-4" />
                  <span>Dispatch 24/7 Ambulance Directly to Your Location</span>
                </button>
              </div>
            </div>

            {/* Right Column: Floating White Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 sm:p-8 text-slate-900 shadow-2xl border border-slate-100 flex flex-col justify-between">
                
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    <Phone className="w-4 h-4 text-teal-600" />
                    <span>Contact Us Directly</span>
                  </div>

                  {/* Big bold landline */}
                  <div className="mb-2">
                    <button
                      onClick={() => copyNumber("(0927) 290248")}
                      className="text-2xl sm:text-3xl font-black text-[#0b2d4f] font-heading hover:text-teal-700 transition-colors cursor-pointer text-left block"
                      title="Click to copy"
                    >
                      (0927) 290248
                    </button>
                  </div>

                  {/* Mobile numbers */}
                  <div className="text-xs text-slate-600 font-medium space-y-1 mb-6">
                    <p>
                      <span className="font-semibold text-slate-700">Mobile: </span>
                      <button 
                        onClick={() => copyNumber("0348-9542969")} 
                        className="hover:text-teal-600 font-semibold cursor-pointer underline decoration-dotted"
                      >
                        0348-9542969
                      </button>
                      {' / '}
                      <button 
                        onClick={() => copyNumber("0337-5168513")} 
                        className="hover:text-teal-600 font-semibold cursor-pointer underline decoration-dotted"
                      >
                        0337-5168513
                      </button>
                    </p>
                    {copiedNumber && (
                      <span className="text-[11px] text-teal-600 font-bold block animate-fade-in">
                        ✓ Number {copiedNumber} copied to clipboard!
                      </span>
                    )}
                  </div>
                </div>

                {/* Make Appointment Button */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <span className="text-xs text-slate-500 font-medium block">
                    Or Make an Appointment Now:
                  </span>
                  
                  <button
                    onClick={onOpenBooking}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-sm text-white bg-[#0b2d4f] hover:bg-[#071f37] active:scale-98 shadow-md hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <span>Make Appointment</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
