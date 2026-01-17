'use client';

import React from 'react';
import { 
  MonitorPlay, 
  Award, 
  Users, 
  Briefcase, 
  LifeBuoy, 
  GraduationCap 
} from 'lucide-react';

const advantages = [
  {
    title: "IMMERSIVE CLASSROOM EXPERIENCE",
    desc: "With live, in-person professional training courses by industry experts, immerse yourself in a classroom experience that transcends traditional learning.",
    icon: MonitorPlay,
    color: "text-orange-500"
  },
  {
    title: "GLOBALLY RECOGNIZED CERTIFICATION",
    desc: "Career Lab Certification, globally recognized by leading multinational corporations, provides you an international edge with an industry-focused curriculum.",
    icon: Award,
    color: "text-red-500"
  },
  {
    title: "HANDS-ON TRAINING BY INDUSTRY EXPERTS",
    desc: "Immerse yourself in a transformative learning experience as leading industry professionals guide you through hands-on training.",
    icon: GraduationCap,
    color: "text-orange-400"
  },
  {
    title: "REAL WORLD PROJECTS & CASE STUDIES",
    desc: "Navigate the complexities of rapidly evolving technology industry by tackling real-world projects and case studies.",
    icon: Briefcase,
    color: "text-blue-500"
  },
  {
    title: "360° DEGREE CAREER SUPPORT",
    desc: "Supercharge your career journey with personalized resume building, interview prep, and exclusive partner access.",
    icon: LifeBuoy,
    color: "text-emerald-500"
  },
  {
    title: "ALUMNI STATUS",
    desc: "Attain Career Lab Alumni Status and become part of an elite community, enjoying privileged connections and lifetime access.",
    icon: Users,
    color: "text-cyan-500"
  }
];

export default function AdvantagesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        
        {/* Header - Mobile friendly spacing */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
            The <span className="text-blue-500 italic">Career Lab</span> <br className="md:hidden" /> Advantage
          </h2>
          <div className="h-1.5 w-16 md:w-20 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Grid - 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {advantages.map((item, index) => (
            <div 
              key={index} 
              className="p-6 md:p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-300 group flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              {/* Icon Container */}
              <div className={`mb-6 p-4 rounded-2xl bg-white/[0.03] w-fit group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-7 h-7 md:w-8 md:h-8 ${item.color}`} />
              </div>

              {/* Text Content */}
              <h3 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-[280px] sm:max-w-none">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}