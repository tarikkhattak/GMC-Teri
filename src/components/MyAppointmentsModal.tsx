import React from 'react';
import { X, Ticket, Calendar, Clock, User, Trash2, Printer, AlertCircle } from 'lucide-react';
import { Appointment } from '../types/medical';

interface MyAppointmentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  appointments: Appointment[];
  onCancelAppointment: (id: string) => void;
  onOpenBooking: () => void;
}

export const MyAppointmentsModal: React.FC<MyAppointmentsModalProps> = ({
  isOpen,
  onClose,
  appointments,
  onCancelAppointment,
  onOpenBooking
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-scale-in">
        
        {/* Header */}
        <div className="bg-[#0b2d4f] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Ticket className="w-5 h-5 text-teal-300" />
            <div>
              <h3 className="text-lg font-bold font-heading">
                My Booked OPD Tokens
              </h3>
              <p className="text-xs text-slate-300">
                GMC Patient Registration & Queue Management
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-4">
          {appointments.length === 0 ? (
            <div className="text-center py-10 space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                <Ticket className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-800 text-sm">
                No active appointments found
              </h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                You haven't booked any doctor consultation tokens yet. Click below to book an OPD slot with our specialist consultants.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="mt-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#0b2d4f] hover:bg-[#071f37] transition-colors shadow-md cursor-pointer"
              >
                Book Your First Appointment
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {appointments.map((apt) => (
                <div
                  key={apt.id}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-300 transition-colors space-y-3"
                >
                  {/* Top: Token Number & Status */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-white bg-[#0b2d4f] px-2.5 py-1 rounded-md">
                      TOKEN: #{apt.tokenNumber}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      ✓ Confirmed
                    </span>
                  </div>

                  {/* Doctor & Patient info */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">Patient</span>
                      <span className="font-bold text-slate-900 block">{apt.patientName}</span>
                      <span className="text-slate-500 text-[11px]">{apt.patientAge}y · {apt.patientGender}</span>
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">Doctor</span>
                      <span className="font-bold text-slate-900 block">{apt.doctorName}</span>
                      <span className="text-teal-700 text-[11px] font-medium">{apt.doctorSpecialty.split('&')[0]}</span>
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-700 pt-1 border-t border-slate-200/60">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-teal-600" />
                      <span>{apt.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-teal-600" />
                      <span>{apt.timeSlot}</span>
                    </div>
                  </div>

                  {/* Actions: Print and Cancel */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 text-xs">
                    <button
                      onClick={handlePrint}
                      className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 font-medium cursor-pointer"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Print Slip</span>
                    </button>
                    <button
                      onClick={() => onCancelAppointment(apt.id)}
                      className="inline-flex items-center gap-1 text-red-600 hover:text-red-700 font-semibold cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Cancel Token</span>
                    </button>
                  </div>
                </div>
              ))}

              <div className="pt-2 flex justify-between items-center text-xs">
                <button
                  onClick={() => {
                    onClose();
                    onOpenBooking();
                  }}
                  className="font-bold text-teal-700 hover:text-teal-800 cursor-pointer"
                >
                  + Book Another Doctor Slot
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 font-semibold cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
