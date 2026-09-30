import React, { useState } from 'react';
import { 
  CheckCircle2, ArrowRight, Flame, Pill, FlaskConical, Scan, HeartPulse, 
  Activity, Radio, HeartHandshake, Scissors, Heart, Baby, Sun, Droplet, 
  BedDouble, Truck, Search, ChevronRight, Stethoscope
} from 'lucide-react';
import { VISUAL_SERVICES, CLINICAL_FACILITIES } from '../data/medicalData';
import { ClinicalFacility, VisualService } from '../types/medical';

interface ServicesSectionProps {
  onSelectFacility: (facility: ClinicalFacility) => void;
  onSelectService: (service: VisualService) => void;
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectFacility,
  onSelectService,
  onOpenBooking
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Icon mapper helper
  const getFacilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-5 h-5 text-red-500" />;
      case 'Pill': return <Pill className="w-5 h-5 text-teal-500" />;
      case 'FlaskConical': return <FlaskConical className="w-5 h-5 text-emerald-500" />;
      case 'Scan': return <Scan className="w-5 h-5 text-blue-500" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-rose-500" />;
      case 'Activity': return <Activity className="w-5 h-5 text-sky-500" />;
      case 'Waveform': return <Radio className="w-5 h-5 text-pink-500" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-purple-500" />;
      case 'Scissors': return <Scissors className="w-5 h-5 text-teal-600" />;
      case 'Heart': return <Heart className="w-5 h-5 text-red-600" />;
      case 'Baby': return <Baby className="w-5 h-5 text-cyan-600" />;
      case 'Sun': return <Sun className="w-5 h-5 text-amber-500" />;
      case 'Droplet': return <Droplet className="w-5 h-5 text-rose-600" />;
      case 'BedDouble': return <BedDouble className="w-5 h-5 text-indigo-500" />;
      case 'Truck': return <Truck className="w-5 h-5 text-blue-600" />;
      default: return <Stethoscope className="w-5 h-5 text-teal-600" />;
    }
  };

  const filteredFacilities = CLINICAL_FACILITIES.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Services & Facilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0b2d4f] font-heading">
              Our Medical Services & Facilities
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl font-normal">
              Complete diagnosis, immediate intervention, and in-patient treatment under one roof.
            </p>
          </div>

          <a 
            href="#all-facilities" 
            className="inline-flex items-center gap-1.5 text-sm font-bold text-teal-700 hover:text-teal-800 transition-colors group cursor-pointer"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 6 Visual Service Cards Row matching flyer */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {VISUAL_SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="bg-white rounded-2xl p-3 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-teal-300 transition-all cursor-pointer group flex flex-col items-center text-center"
            >
              {/* Image thumbnail */}
              <div className="w-full aspect-4/3 rounded-xl overflow-hidden bg-slate-100 mb-3 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-1.5 right-1.5 w-6 h-6 rounded-md bg-white/90 backdrop-blur-xs flex items-center justify-center text-teal-700 shadow-2xs">
                  {getFacilityIcon(service.iconName)}
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-bold text-slate-900 text-sm font-heading group-hover:text-teal-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-[11px] text-slate-500 font-medium leading-tight mt-1">
                {service.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* All Clinical Facilities Card with 15 Departments */}
        <div id="all-facilities" className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-slate-200">
          
          {/* Card Header with Department count badge & search */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                All Clinical Facilities at Ghazni Medical Centre
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-slate-600 bg-slate-100 border border-slate-200">
                15 Departments
              </span>
            </div>
          </div>

          {/* Department Filters & Search */}
          <div className="pt-4 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  activeCategory === 'all' 
                    ? 'bg-[#0b2d4f] text-white shadow-xs' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All (15)
              </button>
              <button
                onClick={() => setActiveCategory('emergency')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  activeCategory === 'emergency' 
                    ? 'bg-[#0b2d4f] text-white shadow-xs' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Emergency
              </button>
              <button
                onClick={() => setActiveCategory('critical')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  activeCategory === 'critical' 
                    ? 'bg-[#0b2d4f] text-white shadow-xs' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                ICU & Surgeries
              </button>
              <button
                onClick={() => setActiveCategory('diagnostic')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  activeCategory === 'diagnostic' 
                    ? 'bg-[#0b2d4f] text-white shadow-xs' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Diagnostics & Lab
              </button>
              <button
                onClick={() => setActiveCategory('maternity')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  activeCategory === 'maternity' 
                    ? 'bg-[#0b2d4f] text-white shadow-xs' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Maternity & Neonatal
              </button>
            </div>

            {/* Quick search input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search facility..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-teal-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* 15 Facilities Grid matching flyer */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredFacilities.map((facility) => (
              <div
                key={facility.id}
                onClick={() => onSelectFacility(facility)}
                className="p-4 rounded-xl border border-slate-100 hover:border-teal-200 bg-slate-50/60 hover:bg-white hover:shadow-xs transition-all cursor-pointer flex items-start gap-3.5 group"
              >
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {getFacilityIcon(facility.iconName)}
                </div>
                <div className="space-y-1 flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-900 text-sm group-hover:text-teal-700 transition-colors truncate">
                      {facility.name}
                    </h4>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-teal-600 transition-colors shrink-0" />
                  </div>
                  <p className="text-xs text-slate-500 leading-snug line-clamp-2">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom helper prompt */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <span>Need immediate doctor consultation or specialized surgery?</span>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1.5 font-bold text-teal-700 hover:text-teal-800 transition-colors"
            >
              <span>Schedule OPD Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
