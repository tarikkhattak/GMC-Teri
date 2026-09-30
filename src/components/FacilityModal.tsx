import React from 'react';
import { X, Clock, ShieldCheck, CheckCircle2, Phone, Calendar } from 'lucide-react';
import { ClinicalFacility, VisualService } from '../types/medical';

interface FacilityModalProps {
  facility?: ClinicalFacility | null;
  service?: VisualService | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const FacilityModal: React.FC<FacilityModalProps> = ({
  facility,
  service,
  onClose,
  onOpenBooking
}) => {
  if (!facility && !service) return null;

  const title = facility ? facility.name : service?.title;
  const description = facility ? facility.description : service?.description;
  const timing = facility ? facility.timing : "Operational 24/7 & Daily OPD";
  const equipment = facility?.equipment || [
    "Sterile Clinical Environment",
    "Digital Patient Record Tracking",
    "Emergency Backup Power Unit",
    "PMDC Certified Specialist Supervision"
  ];
  const departments = service?.departments || [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden animate-scale-in">
        
        {/* Header */}
        <div className="bg-[#0b2d4f] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-teal-300 text-xs font-bold uppercase tracking-wider block mb-1">
            GMC Clinical Department
          </span>
          <h3 className="text-2xl font-bold font-heading text-white">
            {title}
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            {description}
          </p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {/* Timing & Operational status */}
          <div className="flex items-center gap-2 p-3 bg-teal-50 rounded-xl border border-teal-200 text-xs text-teal-900">
            <Clock className="w-4 h-4 text-teal-700 shrink-0" />
            <div>
              <span className="font-bold">Operating Hours: </span>
              <span>{timing}</span>
            </div>
          </div>

          {/* Details */}
          {facility?.details && (
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                Clinical Overview
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {facility.details}
              </p>
            </div>
          )}

          {/* Service Departments or Equipment */}
          {departments.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Sub-Specialty Clinics & Wings
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {departments.map((dept, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>{dept}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {equipment && equipment.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Medical Equipment & Infrastructure
              </h4>
              <div className="space-y-1.5">
                {equipment.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                    <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Triage hotline & Booking CTA */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="flex-1 py-3 px-4 rounded-xl font-bold text-xs text-white bg-[#0b2d4f] hover:bg-[#071f37] flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Calendar className="w-4 h-4 text-teal-300" />
              <span>Book Appointment</span>
            </button>
            <a
              href="tel:0927290248"
              className="py-3 px-4 rounded-xl font-bold text-xs text-slate-800 bg-slate-100 hover:bg-slate-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-slate-600" />
              <span>Call Triage: 0927-290248</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
