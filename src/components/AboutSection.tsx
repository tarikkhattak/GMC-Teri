import React from 'react';
import { Info, Clock, UserCheck, ShieldCheck, HeartHandshake } from 'lucide-react';
import { ABOUT_PILLARS } from '../data/medicalData';

export const AboutSection: React.FC = () => {
  const getIcon = (title: string) => {
    switch (title) {
      case '24 Hours Services':
        return <Clock className="w-5 h-5 text-blue-600" />;
      case 'Medical Staff':
        return <UserCheck className="w-5 h-5 text-teal-600" />;
      case 'Modern Facilities':
        return <ShieldCheck className="w-5 h-5 text-purple-600" />;
      case 'Quality Care':
        return <HeartHandshake className="w-5 h-5 text-cyan-600" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Hospital Building Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 aspect-4/3 group">
              <img
                src="/src/assets/images/clinic_building_1790755009942.jpg"
                alt="Ghazni Medical Centre Exterior Complex"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

              {/* Overlaid Banner at Bottom matching screenshot */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
                <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-teal-500 text-slate-950">
                  24/7 Healthcare Complex
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading drop-shadow-xs">
                  Ghazni Medical Centre
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 font-normal">
                  Equipped with 24 Hours Emergency & Ambulance Facility
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: About Us narrative and 4 Pillar Cards */}
          <div className="lg:col-span-6 space-y-6">
            {/* Kicker badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
              <Info className="w-3.5 h-3.5" />
              <span>About Us</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0b2d4f] font-heading leading-tight">
              Ghazni Medical Centre <br />
              <span className="text-teal-600">For a Healthier Life</span>
            </h2>

            {/* Body paragraph */}
            <p className="text-base text-slate-600 leading-relaxed">
              Ghazni Medical Centre is committed to providing comprehensive healthcare services with modern technology and a comfortable environment for patients. We offer 24-hour emergency care, professional medical staff, and a wide range of specialist clinics including maternal, orthopedic, pediatric, and surgical departments.
            </p>

            {/* 4 Feature Cards (2x2 grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {ABOUT_PILLARS.map((pillar, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100/60 transition-colors flex items-center gap-3.5 shadow-2xs"
                >
                  <div className={`w-11 h-11 rounded-lg ${pillar.bg} flex items-center justify-center shrink-0 shadow-2xs`}>
                    {getIcon(pillar.title)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium leading-snug">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
