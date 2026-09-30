import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, HeartPulse } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/medicalData';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenAmbulance: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenAmbulance }) => {
  return (
    <footer id="contact" className="bg-[#071727] text-slate-400 text-xs border-t border-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Hospital thumbnail & bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Hospital thumbnail */}
            <div className="w-48 h-20 rounded-xl overflow-hidden border border-slate-700/80 bg-slate-800 shadow-md">
              <img
                src="/src/assets/images/clinic_building_1790755009942.jpg"
                alt="Ghazni Medical Centre"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-slate-300 leading-relaxed text-xs max-w-sm">
              Ghazni Medical Centre (GMC) provides world-class compassionate healthcare with 24/7 emergency service, specialized gynecology, orthopedic surgery, pediatrics, and intensive newborn care units.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-950 border border-blue-800 text-teal-300 text-[11px] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                PMDC Licensed
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-950 border border-blue-800 text-teal-300 text-[11px] font-semibold">
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                Open 24/7
              </span>
            </div>
          </div>

          {/* Column 2: MENU (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-heading">
              Menu
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#home" className="hover:text-teal-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-teal-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-400 transition-colors">Services & Facilities</a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-teal-400 transition-colors">Specialist Doctors</a>
              </li>
              <li>
                <a href="#future-plans" className="hover:text-teal-400 transition-colors">Future Plans</a>
              </li>
              <li>
                <button 
                  onClick={onOpenBooking} 
                  className="text-teal-400 hover:text-teal-300 font-semibold cursor-pointer text-left"
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: LAYANAN MEDIS / Clinical Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-heading">
              Layanan Medis
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-1.5 text-slate-300">
                <span className="text-teal-400">✓</span>
                <span>24-Hour Emergency & First Aid</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <span className="text-teal-400">✓</span>
                <span>Neonatal ICU & Adult ICU</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <span className="text-teal-400">✓</span>
                <span>Labor Room & Modular OTs</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <span className="text-teal-400">✓</span>
                <span>Digital X-Ray & ECG / Echo</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <span className="text-teal-400">✓</span>
                <span>24h Ambulance Transport</span>
              </li>
            </ul>
          </div>

          {/* Column 4: HUBUNGI KAMI / Contact Us (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-heading">
              Hubungi Kami
            </h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Near Darul Uloom Arabia, Old Larri Adda Terri, Tehsil Banda Daud Shah, District Karak
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <a href="tel:0927290248" className="hover:text-teal-300 block">0927-290248</a>
                  <a href="tel:03489542969" className="hover:text-teal-300 block">0348-9542969</a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <HeartPulse className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <a href="tel:03375168513" className="hover:text-teal-300 block">
                    0337-5168513 <span className="text-slate-400 text-[11px]">(Emergency)</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <a href={`mailto:${HOSPITAL_INFO.email}`} className="hover:text-teal-300 break-all">
                  {HOSPITAL_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © 2025 Ghazni Medical Centre (GMC). All rights reserved.
          </div>
          <div className="text-slate-400 font-medium">
            Designed & Created By Tarik Khattak
          </div>
        </div>

      </div>
    </footer>
  );
};
