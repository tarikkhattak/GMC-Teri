import React, { useState } from 'react';
import { Stethoscope, ShieldCheck, ChevronRight, Award, Calendar, Check, Search } from 'lucide-react';
import { DOCTORS } from '../data/medicalData';
import { Doctor } from '../types/medical';
import { DoctorAvatar } from './DoctorAvatar';

interface DoctorsSectionProps {
  onSelectDoctor: (doctor: Doctor) => void;
  onBookDoctor: (doctor: Doctor) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({
  onSelectDoctor,
  onBookDoctor
}) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('all');
  const [doctorSearch, setDoctorSearch] = useState<string>('');

  const specialties = [
    { id: 'all', label: 'All Specialists' },
    { id: 'medicine', label: 'Internal Medicine' },
    { id: 'gynae', label: 'Gynae & Obs' },
    { id: 'ortho', label: 'Orthopedic & Spine' },
    { id: 'cardio', label: 'Cardiology' },
    { id: 'pediatric', label: 'Pediatrics & NICU' },
    { id: 'surgery', label: 'General Surgery' }
  ];

  const filteredDoctors = DOCTORS.filter(doc => {
    let matchesSpecialty = true;
    if (selectedSpecialty === 'medicine') matchesSpecialty = doc.id === 'dr-ghazni-gul';
    if (selectedSpecialty === 'gynae') matchesSpecialty = doc.id === 'dr-rukhsana-naseer';
    if (selectedSpecialty === 'ortho') matchesSpecialty = doc.id === 'dr-naseer-ullah';
    if (selectedSpecialty === 'cardio') matchesSpecialty = doc.id === 'dr-hamad-azam';
    if (selectedSpecialty === 'pediatric') matchesSpecialty = doc.id === 'dr-ayub-sabir';
    if (selectedSpecialty === 'surgery') matchesSpecialty = doc.id === 'dr-sajjad-anwar';

    const matchesSearch = 
      doc.name.toLowerCase().includes(doctorSearch.toLowerCase()) ||
      doc.title.toLowerCase().includes(doctorSearch.toLowerCase()) ||
      doc.treatments.some(t => t.toLowerCase().includes(doctorSearch.toLowerCase())) ||
      doc.pmdcReg.toLowerCase().includes(doctorSearch.toLowerCase());

    return matchesSpecialty && matchesSearch;
  });

  const getTagBadgeClass = (color?: string) => {
    switch (color) {
      case 'sky':
        return 'bg-sky-50 text-sky-700 border-sky-200';
      case 'purple':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'emerald':
      default:
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    }
  };

  return (
    <section id="doctors" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Specialist Doctors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0b2d4f] font-heading">
            Experienced Specialist Doctor
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl font-normal leading-relaxed">
            Our distinguished medical consultants are verified by the Pakistan Medical & Dental Council (PMDC), ensuring patient-first clinical excellence.
          </p>
        </div>

        {/* Filter Tabs & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 text-xs font-medium">
            {specialties.map(spec => (
              <button
                key={spec.id}
                onClick={() => setSelectedSpecialty(spec.id)}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedSpecialty === spec.id
                    ? 'bg-[#0b2d4f] text-white shadow-xs font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {spec.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search doctor or condition..."
              value={doctorSearch}
              onChange={(e) => setDoctorSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-teal-500 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* 6 Doctor Cards Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-teal-300 transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Top & Photo */}
              <div className="p-6">
                
                {/* Header Tag Badges */}
                <div className="flex items-center justify-between min-h-6 mb-4">
                  <div>
                    {doctor.isCeo && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-extrabold uppercase tracking-wider bg-[#0b2d4f] text-white shadow-2xs">
                        <Award className="w-3 h-3 text-amber-300" />
                        CEO
                      </span>
                    )}
                  </div>
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${getTagBadgeClass(doctor.scheduleTagColor)}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {doctor.scheduleTag}
                  </span>
                </div>

                {/* Portrait Thumbnail */}
                <div className="flex flex-col items-center text-center mb-4">
                  <div 
                    onClick={() => onSelectDoctor(doctor)}
                    className="cursor-pointer group/avatar relative"
                    title="Click to view doctor credentials"
                  >
                    <DoctorAvatar doctor={doctor} size="md" />
                  </div>

                  {/* CEO Ribbon if applicable */}
                  {doctor.isCeo && (
                    <div className="mt-2.5 px-3 py-0.5 rounded-full bg-amber-50 border border-amber-300 text-[10px] font-extrabold tracking-wider text-amber-900 uppercase">
                      Chief Executive Officer (CEO)
                    </div>
                  )}

                  {/* Doctor Name */}
                  <h3 
                    onClick={() => onSelectDoctor(doctor)}
                    className="text-lg font-bold text-slate-900 mt-3 font-heading group-hover:text-teal-700 transition-colors cursor-pointer"
                  >
                    {doctor.name}
                  </h3>

                  {/* Qualifications & PMDC Reg */}
                  <div className="text-xs text-slate-500 font-medium mt-1">
                    <span>{doctor.qualifications}</span>
                  </div>
                  <div className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200 mt-1 inline-flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-teal-600" />
                    <span>PMDC Reg: {doctor.pmdcReg}</span>
                  </div>
                </div>

                {/* Specialty Title */}
                <div className="border-t border-slate-100 pt-3 text-left">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                    {doctor.title.replace('Chief Executive Officer (CEO) & ', '')}
                  </h4>

                  {/* Specialized Treatment list */}
                  <div className="mt-2">
                    <span className="text-[11px] font-semibold text-slate-500 block">
                      Specialized Treatment:
                    </span>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed mt-0.5 line-clamp-2">
                      {doctor.treatments.map(t => t.split(' ')[0]).join(', ')} management
                    </p>
                  </div>
                </div>

              </div>

              {/* Card Footer: Schedule + Book Slot CTA */}
              <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-medium">
                <div className="flex items-center gap-1.5 text-slate-600">
                  <Calendar className="w-3.5 h-3.5 text-teal-600" />
                  <span>Schedule: {doctor.schedule}</span>
                </div>

                <button
                  onClick={() => onBookDoctor(doctor)}
                  className="inline-flex items-center gap-1 font-bold text-[#0b2d4f] hover:text-teal-700 transition-colors cursor-pointer"
                >
                  <span>Book Slot</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
