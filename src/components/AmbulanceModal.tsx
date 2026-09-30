import React, { useState } from 'react';
import { X, Ambulance, Phone, MapPin, AlertTriangle, CheckCircle2, Clock } from 'lucide-react';

interface AmbulanceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AmbulanceModal: React.FC<AmbulanceModalProps> = ({ isOpen, onClose }) => {
  const [callerName, setCallerName] = useState('');
  const [callerPhone, setCallerPhone] = useState('');
  const [pickupAddress, setPickupAddress] = useState('');
  const [emergencyType, setEmergencyType] = useState('Trauma / Road Accident');
  const [needOxygen, setNeedOxygen] = useState(true);
  const [dispatched, setDispatched] = useState(false);

  if (!isOpen) return null;

  const handleDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    setDispatched(true);
  };

  const handleReset = () => {
    setDispatched(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-red-200 overflow-hidden animate-scale-in">
        
        {/* Header */}
        <div className="bg-red-700 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Ambulance className="w-6 h-6 text-white animate-bounce" />
            </div>
            <div>
              <span className="text-red-200 text-xs font-bold uppercase tracking-wider block">
                Emergency 24/7
              </span>
              <h3 className="text-xl font-bold font-heading text-white">
                GMC Ambulance Fleet Dispatch
              </h3>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {dispatched ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-heading">
                Ambulance En Route!
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Emergency unit with paramedic crew and oxygen equipment has been alerted for pickup at <span className="font-bold text-slate-900">{pickupAddress}</span>.
              </p>
              
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-left space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Emergency Case:</span>
                  <span className="font-bold text-slate-900">{emergencyType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Contact Number:</span>
                  <span className="font-bold text-slate-900">{callerPhone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Estimated Response Time:</span>
                  <span className="font-bold text-red-600">8–15 Minutes</span>
                </div>
              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-center gap-2 text-left">
                <Clock className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Our emergency coordinator is dialing your number right now to verify the landmark. Keep your phone line clear.</span>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-3 rounded-xl font-bold text-xs text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-md"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {/* Emergency Hotline Banner */}
              <div className="p-3 bg-red-50 rounded-2xl border border-red-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-red-600 shrink-0" />
                  <div>
                    <span className="text-[11px] text-red-700 font-semibold block">DIRECT EMERGENCY PHONE</span>
                    <a href="tel:0927290248" className="text-sm font-extrabold text-red-900 hover:underline">
                      0927-290248 / 0348-9542969
                    </a>
                  </div>
                </div>
                <a
                  href="tel:0927290248"
                  className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-xs"
                >
                  Call Now
                </a>
              </div>

              {/* Form */}
              <form onSubmit={handleDispatch} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Pickup Location / Address in Karak / Terri
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Near Terri Chowk, Old Larri Adda..."
                      value={pickupAddress}
                      onChange={(e) => setPickupAddress(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:border-red-600 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Caller / Attendant Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={callerName}
                      onChange={(e) => setCallerName(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:border-red-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Attendant Contact Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="03XX-XXXXXXX"
                      value={callerPhone}
                      onChange={(e) => setCallerPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:border-red-600 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nature of Emergency
                  </label>
                  <select
                    value={emergencyType}
                    onChange={(e) => setEmergencyType(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:border-red-600 focus:bg-white font-medium"
                  >
                    <option value="Trauma / Road Accident">Trauma / Road Accident / Bone Fracture</option>
                    <option value="Cardiac / Severe Chest Pain">Cardiac / Severe Chest Pain / Heart Attack</option>
                    <option value="Maternity / Labor Pain">Maternity / Active Labor Pain / Emergency Delivery</option>
                    <option value="Pediatric / Infant Emergency">Pediatric / Infant High Fever / Breathing Distress</option>
                    <option value="Acute Bleeding or Burn">Acute Bleeding, Burn or High Fall</option>
                  </select>
                </div>

                <label className="flex items-center gap-2 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={needOxygen}
                    onChange={(e) => setNeedOxygen(e.target.checked)}
                    className="w-4 h-4 rounded text-red-600 focus:ring-red-500"
                  />
                  <span className="text-xs text-slate-700 font-medium">
                    Continuous Oxygen Cylinder & Paramedic Required
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!pickupAddress || !callerName || !callerPhone}
                  className="w-full py-3.5 rounded-xl font-bold text-xs text-white bg-red-600 hover:bg-red-700 disabled:opacity-50 transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <Ambulance className="w-4 h-4" />
                  <span>Confirm Rapid Ambulance Dispatch</span>
                </button>
              </form>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
