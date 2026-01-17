'use client';

import React from 'react';
import { CheckCircle2, Star, Users2, ArrowUpRight } from 'lucide-react';

const pillars = [
  {
    category: "School of Technology and AI",
    title: "Shape the Technological Landscape of Tomorrow",
    desc: "Embark on a journey into the future at Career Lab. We nurture minds with cutting-edge professional training in Data Science, AI, and Cybersecurity.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    stats: [
      { label: "Students", value: "15,000+", icon: CheckCircle2 },
      { label: "Trainers", value: "1,500+", icon: Star },
      { label: "Partners", value: "350+", icon: Users2 },
    ],
    accent: "from-blue-600 to-cyan-500"
  },
  {
    category: "Learning Management System",
    title: "The Beating Heart of Strategic Education",
    desc: "We don't just cultivate leaders; we tailor expertise to meet the demands of a dynamic business landscape with real-world insights.",
    image: "https://img.freepik.com/free-photo/empty-modern-office-business-entrepreneur-with-laptop_482257-91248.jpg",
    stats: [
      { label: "Students", value: "1,500+", icon: CheckCircle2 },
      { label: "Trainers", value: "718+", icon: Star },
      { label: "Partners", value: "350+", icon: Users2 },
    ],
    accent: "from-purple-600 to-blue-500"
  }
];

export default function PillarsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#020617] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
        
        <div className="text-center mb-12 md:mb-20">
          <span className="text-blue-500 font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-[9px] md:text-[10px] block mb-3">Why Choose Us</span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
            Our Pillars of <br className="block md:hidden" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 italic"> Excellence</span>
          </h2>
        </div>

        <div className="space-y-20 md:space-y-32">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 md:gap-12 lg:gap-20`}
            >
              <div className="w-full lg:w-1/2 group relative">
                <div className={`absolute -inset-2 md:-inset-4 bg-gradient-to-tr ${pillar.accent} opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500`} />
                <div className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-[16/10] md:aspect-[4/3]">
                  <img 
                    src={pillar.image} 
                    alt={pillar.category} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
                    <div className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] md:text-xs font-bold uppercase tracking-widest">
                      {pillar.category}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight uppercase">
                    {pillar.category}
                  </h3>
                  <p className="text-slate-400 text-sm md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                    {pillar.desc}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 md:gap-4 pt-2">
                  {pillar.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="space-y-1 md:space-y-2 flex flex-col items-center lg:items-start">
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <stat.icon className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
                        <span className="text-lg md:text-2xl font-black text-white">{stat.value}</span>
                      </div>
                      <p className="text-[8px] md:text-[10px] text-slate-500 font-bold uppercase tracking-wider leading-none">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button className="group w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl md:rounded-2xl bg-blue-600 text-white font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-blue-500 transition-all active:scale-95 shadow-lg shadow-blue-600/20">
                    Know More <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/4 -left-64 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/5 md:bg-blue-600/10 blur-[80px] md:blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-600/5 md:bg-cyan-600/10 blur-[80px] md:blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}