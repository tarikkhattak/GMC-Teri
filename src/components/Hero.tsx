import React from 'react';
import { ArrowRight, Calendar, CheckCircle2, ShieldCheck, HeartPulse, Users, BedDouble, Award, Stethoscope } from 'lucide-react';
import { QUICK_STATS } from '../data/medicalData';

interface HeroProps {
  onOpenBooking: () => void;
  onViewServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onViewServices }) => {
  return (
    <section id="home" className="relative pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Background subtle ambiance */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Left copy, Right visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Pill Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold tracking-wide shadow-2xs">
              <Stethoscope className="w-3.5 h-3.5 text-teal-600" />
              <span>Your Health, Our Utmost Priority</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-[#0c2b48] leading-[1.15] font-heading">
              Excellence in Medical Care, Every Step of the Way
            </h1>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
              Providing expert medical care, trusted specialist doctors, and 24/7 advanced emergency services under one roof in Ghazni.
            </p>

            {/* CTA Buttons matching flyer */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onViewServices}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-[#0b2d4f] hover:bg-[#071f37] active:scale-98 shadow-md hover:shadow-lg transition-all cursor-pointer group"
              >
                <span>View Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs hover:border-slate-400 active:scale-98 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-teal-600" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Trust Checkmarks below buttons */}
            <div className="flex items-center gap-6 pt-3 text-xs sm:text-sm font-medium text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>PMDC Verified Staff</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>24h Modern Pharmacy</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Photo Container with elegant rounded corners */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-4/3">
                <img
                  src="/src/assets/images/hero_consultation_1790754997221.jpg"
                  alt="Doctor consulting patient at Ghazni Medical Centre"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />

                {/* Top-Right Badge: Ghazni Medical Logo watermark */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-md border border-white/60 flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-teal-600 flex items-center justify-center text-white font-bold text-xs">
                    +
                  </div>
                  <div className="text-left leading-none">
                    <span className="text-[10px] font-bold text-[#0b2d4f] tracking-wider block">GHAZNI</span>
                    <span className="text-[9px] font-semibold text-teal-700 tracking-wider block">MEDICAL</span>
                  </div>
                </div>

                {/* Bottom-Left Overlaid Badge: Verified Specialists */}
                <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-white/80 max-w-xs flex items-center gap-3 animate-fade-in">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0">
                    <Stethoscope className="w-5 h-5 text-teal-700" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold text-slate-900">Verified Specialists</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                    </div>
                    <span className="text-[11px] text-slate-600 font-medium block">
                      FCPS Qualified Consultants
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Quick Stats Bar matching screenshot */}
        <div className="mt-14 pt-8 border-t border-slate-200/80">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/90 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Stat 1: Specialist Doctors */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-blue-600">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0b2d4f] tracking-tight block font-heading tabular-nums">
                  10+
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-500">
                  Specialist Doctors
                </span>
              </div>
            </div>

            {/* Stat 2: Served Patients */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 text-teal-600">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0b2d4f] tracking-tight block font-heading tabular-nums">
                  25000+
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-500">
                  Served Patients
                </span>
              </div>
            </div>

            {/* Stat 3: Modern Facilities */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 text-indigo-600">
                <BedDouble className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0b2d4f] tracking-tight block font-heading tabular-nums">
                  17+
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-500">
                  Modern Facilities
                </span>
              </div>
            </div>

            {/* Stat 4: Patient Satisfaction */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 text-amber-600">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0b2d4f] tracking-tight block font-heading tabular-nums">
                  99%
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-500">
                  Patient Satisfaction
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
