import React from 'react';
import { Doctor } from '../types/medical';
import { Stethoscope, Award, User, ShieldCheck } from 'lucide-react';

interface DoctorAvatarProps {
  doctor: Doctor;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const DoctorAvatar: React.FC<DoctorAvatarProps> = ({ doctor, className = '', size = 'md' }) => {
  // Tailored styling and avatar representations for each doctor
  const getDoctorStyle = (id: string) => {
    switch (id) {
      case 'dr-ghazni-gul':
        return {
          gradient: 'from-blue-600 via-sky-600 to-indigo-700',
          accent: 'border-blue-200 text-blue-800',
          initials: 'GG',
          specialtyTag: 'Medical Specialist',
          icon: <Stethoscope className="w-4 h-4 text-white" />
        };
      case 'dr-rukhsana-naseer':
        return {
          gradient: 'from-teal-600 via-emerald-600 to-cyan-700',
          accent: 'border-teal-200 text-teal-800',
          initials: 'RN',
          specialtyTag: 'Gynae & Obs',
          icon: <ShieldCheck className="w-4 h-4 text-white" />
        };
      case 'dr-naseer-ullah':
        return {
          gradient: 'from-slate-800 via-blue-900 to-slate-900',
          accent: 'border-amber-300 text-amber-900',
          initials: 'NU',
          specialtyTag: 'CEO & Orthopedic',
          icon: <Award className="w-4 h-4 text-amber-300" />
        };
      case 'dr-hamad-azam':
        return {
          gradient: 'from-sky-600 via-indigo-600 to-blue-700',
          accent: 'border-sky-200 text-sky-800',
          initials: 'HA',
          specialtyTag: 'Interventional Cardiology',
          icon: <Stethoscope className="w-4 h-4 text-white" />
        };
      case 'dr-ayub-sabir':
        return {
          gradient: 'from-emerald-600 via-teal-600 to-green-700',
          accent: 'border-emerald-200 text-emerald-800',
          initials: 'AS',
          specialtyTag: 'Pediatrics & Neonatology',
          icon: <User className="w-4 h-4 text-white" />
        };
      case 'dr-sajjad-anwar':
        return {
          gradient: 'from-purple-700 via-indigo-700 to-slate-800',
          accent: 'border-purple-200 text-purple-800',
          initials: 'SA',
          specialtyTag: 'Laparoscopic Surgeon',
          icon: <Stethoscope className="w-4 h-4 text-white" />
        };
      default:
        return {
          gradient: 'from-blue-600 to-teal-600',
          accent: 'border-blue-200 text-blue-800',
          initials: 'DR',
          specialtyTag: 'Consultant',
          icon: <Stethoscope className="w-4 h-4 text-white" />
        };
    }
  };

  const style = getDoctorStyle(doctor.id);

  const sizeClasses = {
    sm: 'w-16 h-16 text-lg',
    md: 'w-28 h-28 text-2xl',
    lg: 'w-36 h-36 text-3xl'
  };

  return (
    <div className={`relative rounded-xl overflow-hidden shadow-inner border border-slate-200/80 bg-gradient-to-br ${style.gradient} flex flex-col items-center justify-center p-3 select-none ${sizeClasses[size]} ${className}`}>
      {/* Decorative medical pattern */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:8px_8px]" />
      
      {/* Doctor Initial / Representation */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center mb-1 text-white border border-white/30 shadow-sm">
          {doctor.id === 'dr-sajjad-anwar' ? (
            // Surgical cap icon style
            <span className="font-bold text-xs tracking-wider">SURG</span>
          ) : doctor.id === 'dr-rukhsana-naseer' ? (
            <span className="font-bold text-xs tracking-wider">FCPS</span>
          ) : doctor.isCeo ? (
            <Award className="w-5 h-5 text-amber-300" />
          ) : (
            <User className="w-5 h-5 text-white" />
          )}
        </div>
        <span className="font-bold text-white tracking-wide text-xs drop-shadow-xs">
          {doctor.name.split(' ').slice(0, 2).join(' ')}
        </span>
        <span className="text-[10px] text-teal-100 font-medium tracking-tight">
          {doctor.specialty.split(' ')[0]}
        </span>
      </div>

      {/* Floating Mini Icon */}
      <div className="absolute bottom-1.5 right-1.5 w-6 h-6 rounded-full bg-slate-900/60 backdrop-blur-xs flex items-center justify-center border border-white/20">
        {style.icon}
      </div>
    </div>
  );
};
