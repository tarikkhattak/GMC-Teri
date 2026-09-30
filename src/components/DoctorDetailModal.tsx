import React from 'react';
import { X, ShieldCheck, Calendar, Clock, MapPin, CheckCircle2, Award, DollarSign } from 'lucide-react';
import { Doctor } from '../types/medical';
import { DoctorAvatar } from './DoctorAvatar';

interface DoctorDetailModalProps {
  doctor: Doctor | null;
  onClose: () => void;
  onBook: (doctor: Doctor) => void;
}

export const DoctorDetailModal: React.FC<DoctorDetailModalProps> = ({
  doctor,
  onClose,
  onBook
}) => {
  if (!doctor) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-scale-in">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#0b2d4f] via-[#103a64] to-[#0c2a49] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-5">
            <DoctorAvatar doctor={doctor} size="lg" />
            <div className="space-y-1">
              {doctor.isCeo && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-amber-400 text-slate-950 mb-1">
                  <Award className="w-3 h-3 text-slate-900" />
                  Chief Executive Officer (CEO)
                </span>
              )}
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                {doctor.name}
              </h3>
              <p className="text-xs text-teal-300 font-medium">
                {doctor.qualifications}
              </p>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-200 border border-teal-400/30 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-300" />
                <span>PMDC Reg: {doctor.pmdcReg} (Verified)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Bio */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              Consultant Profile
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {doctor.bio}
            </p>
          </div>

          {/* Clinical Schedule & OPD details */}
          <div className="grid grid-cols-2 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200/80 text-xs">
            <div className="space-y-1">
              <span className="text-slate-400 block font-medium">OPD SCHEDULE</span>
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <Calendar className="w-4 h-4 text-teal-600" />
                <span>{doctor.schedule}</span>
              </div>
              <span className="text-[11px] text-slate-500">{doctor.opdHours}</span>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 block font-medium">CONSULTATION & LOCATION</span>
              <div className="flex items-center gap-1 font-bold text-slate-900">
                <span>Fee: Rs. {doctor.consultationFee}</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-slate-500">
                <MapPin className="w-3 h-3 text-slate-400" />
                <span>{doctor.roomNumber}</span>
              </div>
            </div>
          </div>

          {/* Specialized Treatments */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Specialized Treatments & Procedures
            </h4>
            <div className="space-y-1.5">
              {doctor.treatments.map((treatment, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                  <span>{treatment}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onBook(doctor);
              }}
              className="flex-1 py-3 px-5 rounded-xl font-bold text-sm text-white bg-[#0b2d4f] hover:bg-[#071f37] transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-teal-300" />
              <span>Book Appointment with {doctor.name.split(' ')[1]}</span>
            </button>
            <button
              onClick={onClose}
              className="py-3 px-4 rounded-xl font-semibold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
