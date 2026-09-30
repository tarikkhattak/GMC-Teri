import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle2, ShieldCheck, Printer, AlertCircle } from 'lucide-react';
import { Doctor, Appointment } from '../types/medical';
import { DOCTORS } from '../data/medicalData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDoctor?: Doctor | null;
  onAppointmentBooked: (appointment: Appointment) => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedDoctor,
  onAppointmentBooked
}) => {
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>(preselectedDoctor?.id || DOCTORS[0].id);
  const [appointmentDate, setAppointmentDate] = useState<string>('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
  const [patientName, setPatientName] = useState<string>('');
  const [patientPhone, setPatientPhone] = useState<string>('');
  const [patientAge, setPatientAge] = useState<string>('');
  const [patientGender, setPatientGender] = useState<'Male' | 'Female' | 'Other'>('Male');
  const [symptoms, setSymptoms] = useState<string>('');
  const [confirmedAppointment, setConfirmedAppointment] = useState<Appointment | null>(null);
  const [dateError, setDateError] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedDoctor) {
      setSelectedDoctorId(preselectedDoctor.id);
    }
  }, [preselectedDoctor]);

  // Set default appointment date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setAppointmentDate(dateStr);
  }, []);

  if (!isOpen) return null;

  const currentDoctor = DOCTORS.find(d => d.id === selectedDoctorId) || DOCTORS[0];

  // Validate doctor availability for selected date
  const validateDoctorSchedule = (dateString: string, doctor: Doctor): boolean => {
    if (!dateString) return true;
    const dateObj = new Date(dateString + 'T00:00:00');
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = dayNames[dateObj.getDay()];

    if (!doctor.availableDays.includes(dayName)) {
      setDateError(`${doctor.name} is only available on: ${doctor.schedule} (${doctor.availableDays.join(', ')}). Please pick a matching day.`);
      return false;
    }
    setDateError(null);
    return true;
  };

  const handleDateChange = (newDate: string) => {
    setAppointmentDate(newDate);
    validateDoctorSchedule(newDate, currentDoctor);
  };

  const handleDoctorChange = (doctorId: string) => {
    setSelectedDoctorId(doctorId);
    const doc = DOCTORS.find(d => d.id === doctorId);
    if (doc && appointmentDate) {
      validateDoctorSchedule(appointmentDate, doc);
    }
  };

  // Generate realistic time slots
  const getTimeSlots = () => {
    if (currentDoctor.id === 'dr-sajjad-anwar') {
      return ["08:30 AM", "09:30 AM", "10:30 AM", "11:30 AM", "02:00 PM", "03:30 PM", "04:30 PM", "05:15 PM"];
    }
    if (currentDoctor.id === 'dr-hamad-azam') {
      return ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:30 PM", "03:30 PM", "04:15 PM"];
    }
    return [
      "09:15 AM", "10:00 AM", "10:45 AM", "11:30 AM", "12:15 PM",
      "05:30 PM", "06:15 PM", "07:00 PM", "07:45 PM", "08:15 PM"
    ];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateDoctorSchedule(appointmentDate, currentDoctor)) {
      return;
    }
    if (!selectedTimeSlot) {
      alert("Please select an available consultation time slot.");
      return;
    }

    const tokenNumber = `GMC-${Math.floor(1000 + Math.random() * 9000)}`;
    const newAppointment: Appointment = {
      id: 'apt-' + Date.now(),
      tokenNumber,
      patientName,
      patientPhone,
      patientAge,
      patientGender,
      doctorId: currentDoctor.id,
      doctorName: currentDoctor.name,
      doctorSpecialty: currentDoctor.title,
      doctorPmdc: currentDoctor.pmdcReg,
      date: appointmentDate,
      timeSlot: selectedTimeSlot,
      symptoms: symptoms || 'General OPD Consultation',
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    };

    onAppointmentBooked(newAppointment);
    setConfirmedAppointment(newAppointment);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-scale-in">
        
        {/* Modal Header */}
        <div className="bg-[#0b2d4f] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-400/30 flex items-center justify-center">
              <Calendar className="w-4 h-4 text-teal-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-heading">
                {confirmedAppointment ? 'Appointment Confirmed' : 'Book OPD Appointment'}
              </h3>
              <p className="text-xs text-slate-300">
                Ghazni Medical Centre · PMDC Verified Specialist Clinic
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

        {/* Modal Body */}
        <div className="p-6">
          {confirmedAppointment ? (
            /* Confirmation & Printable Slip Screen */
            <div className="space-y-6">
              <div className="text-center py-4 bg-emerald-50 rounded-2xl border border-emerald-200">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-2 shadow-md">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 font-heading">
                  Token #{confirmedAppointment.tokenNumber} Reserved!
                </h4>
                <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
                  Your OPD consultation slot has been confirmed in the Ghazni Medical Centre registry.
                </p>
              </div>

              {/* Printable Medical Slip Card */}
              <div className="border-2 border-dashed border-slate-300 rounded-2xl p-5 bg-slate-50/50 space-y-4 font-mono text-xs">
                <div className="flex justify-between items-start border-b border-slate-200 pb-3">
                  <div>
                    <span className="font-extrabold text-sm text-[#0b2d4f] block font-sans">
                      GHAZNI MEDICAL CENTRE (GMC)
                    </span>
                    <span className="text-[10px] text-slate-500 block">
                      Terri, Tehsil Banda Daud Shah, Karak
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="bg-[#0b2d4f] text-white px-2 py-0.5 rounded text-[10px] font-bold">
                      TOKEN {confirmedAppointment.tokenNumber}
                    </span>
                    <span className="text-[10px] text-slate-500 block mt-1">
                      Status: CONFIRMED
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-slate-700">
                  <div>
                    <span className="text-slate-400 block text-[10px]">PATIENT NAME:</span>
                    <span className="font-bold text-slate-900 text-sm font-sans">{confirmedAppointment.patientName}</span>
                    <span className="text-[11px] block">{confirmedAppointment.patientAge} yrs · {confirmedAppointment.patientGender}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">CONSULTANT:</span>
                    <span className="font-bold text-slate-900 text-xs font-sans">{confirmedAppointment.doctorName}</span>
                    <span className="text-[10px] text-teal-700 block">PMDC: {confirmedAppointment.doctorPmdc}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 border-t border-slate-200 pt-3">
                  <div>
                    <span className="text-slate-400 block text-[10px]">APPOINTMENT DATE:</span>
                    <span className="font-bold text-slate-900">{confirmedAppointment.date}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">APPOINTED TIME:</span>
                    <span className="font-bold text-slate-900">{confirmedAppointment.timeSlot}</span>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-2 text-[10px] text-slate-500">
                  * Please arrive 15 minutes before your slot. Bring previous lab reports & prescriptions. Emergency Hotline: 0927-290248.
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  onClick={handlePrint}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl border border-slate-300 font-semibold text-slate-800 bg-white hover:bg-slate-50 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Printer className="w-4 h-4 text-slate-600" />
                  <span>Print Slip / Save PDF</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl font-semibold text-white bg-[#0b2d4f] hover:bg-[#071f37] flex items-center justify-center cursor-pointer shadow-md"
                >
                  Done & Back to Site
                </button>
              </div>
            </div>
          ) : (
            /* Multi-step Booking Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Step 1: Doctor Picker */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  1. Select Specialist Consultant
                </label>
                <select
                  value={selectedDoctorId}
                  onChange={(e) => handleDoctorChange(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:border-teal-600 focus:bg-white transition-all cursor-pointer"
                >
                  {DOCTORS.map((doc) => (
                    <option key={doc.id} value={doc.id}>
                      {doc.name} — {doc.title.replace('Chief Executive Officer (CEO) & ', '')} ({doc.scheduleTag})
                    </option>
                  ))}
                </select>

                {/* Selected Doctor Summary Card */}
                <div className="mt-2.5 p-3 rounded-xl bg-teal-50/60 border border-teal-200/80 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-[#0b2d4f] block">{currentDoctor.name}</span>
                    <span className="text-teal-800 text-[11px] block">{currentDoctor.qualifications} · PMDC: {currentDoctor.pmdcReg}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-slate-900 block">Fee: Rs. {currentDoctor.consultationFee}</span>
                    <span className="text-[11px] text-slate-500 block">{currentDoctor.roomNumber}</span>
                  </div>
                </div>
              </div>

              {/* Step 2: Date & Available Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    2. Appointment Date
                  </label>
                  <input
                    type="date"
                    required
                    value={appointmentDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => handleDateChange(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-teal-600 focus:bg-white transition-all"
                  />
                  {dateError && (
                    <div className="mt-1.5 flex items-start gap-1 text-[11px] text-red-600 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>{dateError}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    3. Select Time Slot
                  </label>
                  <div className="grid grid-cols-2 gap-1.5 max-h-36 overflow-y-auto pr-1">
                    {getTimeSlots().map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`py-1.5 px-2 text-xs rounded-lg font-medium border text-center transition-all cursor-pointer ${
                          selectedTimeSlot === slot
                            ? 'bg-[#0b2d4f] text-white border-[#0b2d4f] shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 3: Patient Information */}
              <div className="border-t border-slate-200 pt-4 space-y-3">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  4. Patient Details
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Patient Full Name"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-teal-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Contact Mobile (e.g. 0348-XXXXXXX)"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-teal-600 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <input
                      type="number"
                      required
                      min="1"
                      max="120"
                      placeholder="Age (Years)"
                      value={patientAge}
                      onChange={(e) => setPatientAge(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-teal-600 focus:bg-white"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    {(['Male', 'Female', 'Other'] as const).map(g => (
                      <button
                        type="button"
                        key={g}
                        onClick={() => setPatientGender(g)}
                        className={`flex-1 py-2 text-xs rounded-xl font-medium border text-center cursor-pointer transition-colors ${
                          patientGender === g
                            ? 'bg-teal-700 text-white border-teal-700'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <textarea
                    rows={2}
                    placeholder="Chief Complaint / Symptoms (e.g. fever, joint ache, pregnancy checkup, sugar follow-up)..."
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-teal-600 focus:bg-white resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex items-center justify-between gap-4">
                <span className="text-[11px] text-slate-500 font-medium">
                  Instant token generated upon booking
                </span>
                <button
                  type="submit"
                  disabled={!selectedTimeSlot || !patientName || !patientPhone}
                  className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#0b2d4f] hover:bg-[#071f37] disabled:opacity-50 disabled:cursor-not-allowed shadow-md cursor-pointer transition-all"
                >
                  Confirm Appointment
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
