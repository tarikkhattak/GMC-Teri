import React, { useState } from 'react';
import { Phone, Clock, Calendar, Menu, X, HeartPulse, Shield, Ticket, Ambulance } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/medicalData';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenMyAppointments: () => void;
  onOpenAmbulance: () => void;
  savedAppointmentsCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenMyAppointments,
  onOpenAmbulance,
  savedAppointmentsCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const copyNumber = (num: string) => {
    navigator.clipboard.writeText(num.replace(/[^0-9]/g, ''));
    setCopiedPhone(num);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-xs bg-white">
      {/* 24/7 Emergency Triage Top Ribbon */}
      <div className="bg-[#0b2545] text-white text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Emergency Status & Contact */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-red-600 text-white shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              24/7 Emergency
            </span>
            <div className="flex items-center gap-1.5 text-slate-200">
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span className="text-slate-300 hidden sm:inline">Immediate Medical Triage:</span>
              <button 
                onClick={() => copyNumber("0927-290248")}
                className="font-bold text-white hover:text-teal-300 transition-colors cursor-pointer"
                title="Click to copy number"
              >
                0927-290248
              </button>
              <span className="text-slate-500">|</span>
              <button 
                onClick={() => copyNumber("0348-9542969")}
                className="font-bold text-white hover:text-teal-300 transition-colors cursor-pointer"
                title="Click to copy number"
              >
                0348-9542969
              </button>
              {copiedPhone && (
                <span className="text-[11px] text-teal-300 font-semibold ml-1 animate-fade-in">
                  ✓ Copied
                </span>
              )}
            </div>
          </div>

          {/* Right: Round the clock care & Quick Ambulance dispatch */}
          <div className="flex items-center gap-4 text-slate-300">
            <div className="hidden md:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              <span>Round-the-Clock Critical Care</span>
            </div>
            <button
              onClick={onOpenAmbulance}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-300 hover:text-amber-200 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-400/30 transition-colors"
            >
              <Ambulance className="w-3 h-3 text-amber-300" />
              Dispatch Ambulance
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo matching GMC header */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#0a2540] to-[#12406f] flex items-center justify-center shadow-md border border-slate-200 group-hover:scale-105 transition-transform">
              <div className="relative flex items-center justify-center">
                <HeartPulse className="w-6 h-6 text-teal-400 stroke-[2.2]" />
                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-extrabold tracking-tight text-[#0b2d4f] font-heading">
                  GMC
                </span>
                <span className="text-[11px] font-semibold tracking-wider text-teal-600 uppercase bg-teal-50 px-1.5 py-0.2 rounded border border-teal-200">
                  Terri Karak
                </span>
              </div>
              <span className="text-xs font-semibold text-slate-500 tracking-wide">
                Ghazni Medical Centre
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            <a href="#home" className="hover:text-teal-600 transition-colors py-1">Home</a>
            <a href="#about" className="hover:text-teal-600 transition-colors py-1">About Us</a>
            <a href="#services" className="hover:text-teal-600 transition-colors py-1">Services & Facilities</a>
            <a href="#doctors" className="hover:text-teal-600 transition-colors py-1">Doctors</a>
            <a href="#future-plans" className="hover:text-teal-600 transition-colors py-1">Future Plans</a>
            <a href="#contact" className="hover:text-teal-600 transition-colors py-1">Contact</a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* My Appointments Pill */}
            <button
              onClick={onOpenMyAppointments}
              className="relative inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200 cursor-pointer"
              title="View your booked tokens and slips"
            >
              <Ticket className="w-4 h-4 text-teal-600" />
              <span>My Tokens</span>
              {savedAppointmentsCount > 0 && (
                <span className="bg-teal-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                  {savedAppointmentsCount}
                </span>
              )}
            </button>

            {/* Book Appointment CTA */}
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#0b2d4f] hover:bg-[#071f37] active:scale-98 shadow-sm transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-teal-300" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="sm:hidden inline-flex items-center p-2 rounded-lg bg-[#0b2d4f] text-white"
              title="Book Appointment"
            >
              <Calendar className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 animate-fade-in shadow-xl">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
            <a 
              href="#home" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100"
            >
              About Us
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100"
            >
              Services & Facilities
            </a>
            <a 
              href="#doctors" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100"
            >
              Doctors
            </a>
            <a 
              href="#future-plans" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100"
            >
              Future Plans
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100"
            >
              Contact
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMyAppointments();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 rounded-lg"
            >
              <Ticket className="w-4 h-4 text-teal-600" />
              <span>My Tokens ({savedAppointmentsCount})</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-[#0b2d4f] rounded-lg shadow-sm"
            >
              <Calendar className="w-4 h-4 text-teal-300" />
              <span>Book Appointment</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAmbulance();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-red-700 bg-red-50 border border-red-200 rounded-lg"
            >
              <Ambulance className="w-4 h-4 text-red-600" />
              <span>Emergency 24/7 Ambulance Call</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
