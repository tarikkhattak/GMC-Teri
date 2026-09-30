import React from 'react';
import { Eye, Beaker, HeartPulse, Activity, Bell, Sparkles } from 'lucide-react';
import { FUTURE_PLANS } from '../data/medicalData';
import { FuturePlan } from '../types/medical';

interface FuturePlansSectionProps {
  onSelectPlan: (plan: FuturePlan) => void;
}

export const FuturePlansSection: React.FC<FuturePlansSectionProps> = ({ onSelectPlan }) => {
  const getPlanIcon = (iconName: string) => {
    switch (iconName) {
      case 'Eye':
        return <Eye className="w-6 h-6 text-cyan-600" />;
      case 'Beaker':
        return <Beaker className="w-6 h-6 text-teal-600" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-rose-500" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-indigo-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-teal-600" />;
    }
  };

  return (
    <section id="future-plans" className="py-16 md:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold tracking-wider uppercase">
            Strategic Expansion
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0b2d4f] font-heading">
            Expanding Healthcare Horizons: Future Plans
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            We are actively installing infrastructure and onboarding top consultants for these upcoming specialized medical wings.
          </p>
        </div>

        {/* 4 Future Wing Cards matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FUTURE_PLANS.map((plan) => (
            <div
              key={plan.id}
              onClick={() => onSelectPlan(plan)}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-teal-300 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Icon + Coming Soon Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {getPlanIcon(plan.iconName)}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                    Coming Soon
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-slate-900 text-base font-heading group-hover:text-teal-700 transition-colors">
                  {plan.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-500 font-normal leading-relaxed mt-2.5">
                  {plan.description}
                </p>
              </div>

              {/* Card Bottom: Notify action */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 group-hover:text-teal-700 font-semibold transition-colors">
                <span className="text-[11px] font-medium text-slate-400">Target: {plan.expectedDate}</span>
                <span className="inline-flex items-center gap-1">
                  <Bell className="w-3.5 h-3.5" />
                  Notify Me
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
