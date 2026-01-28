'use client';

import React from 'react';
import Image from 'next/image'; 
import { Phone, Award, CheckCircle2, ArrowRight } from 'lucide-react';

const FoundersVision = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-transparent overflow-hidden" style={{ contain: 'layout' }}>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10 hidden md:block"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        <div className="relative w-full lg:w-1/2 group">
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
            <Image 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" 
              alt="Career Lab Consulting leadership team discussing AI strategy" 
              width={800}
              height={1000}
              className="w-full h-[450px] md:h-[550px] object-cover brightness-[0.8] transition-all duration-700 group-hover:brightness-100"
              priority={false} 
              loading="lazy" 
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
          </div>
          
          <div className="absolute -top-6 -left-4 z-20 bg-[#0f172a]/80 backdrop-blur-xl p-5 rounded-2xl border border-white/20 shadow-2xl flex items-center gap-4 animate-bounce-slow">
            <div className="bg-blue-500/20 p-2 rounded-full text-blue-400 ring-4 ring-blue-500/10" aria-hidden="true">
              <Award size={28} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-blue-300 font-bold">Nominated</p>
              <p className="text-sm font-bold text-white">Leaders 2024</p>
            </div>
          </div>

          <div className="absolute -bottom-8 -right-4 z-20 bg-slate-900/90 backdrop-blur-2xl text-white p-6 rounded-[1.5rem] border border-blue-500/30 shadow-xl max-w-[240px]">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 size={18} className="text-emerald-400" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Verified Strategy</span>
            </div>
            <p className="text-sm font-semibold leading-snug">Driving exponential ROI for 500+ Global Enterprises</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-10">
          <header className="space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span className="text-blue-400 font-bold tracking-[0.2em] text-xs uppercase font-mono">Founder's Vision</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tight">
              "We strive to lead the field and we won't stop until we are the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">best at what we do"</span>
            </h2>
          </header>
          
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500/50 rounded-full"></div>
            <p className="pl-8 text-slate-300 text-lg md:text-xl leading-relaxed">
              At <strong className="text-white font-bold">Career Lab Consulting</strong>, our mission is personal. We believe growth is only transformative when it solves real human problems through <span className="text-blue-400 font-medium">Agentic AI</span>.
            </p>
          </div>

          <div className="pt-6 space-y-8">
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="tel:+918700236923" 
                aria-label="Call Career Lab Consulting"
                className="group flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 rounded-2xl font-bold transition-all shadow-lg hover:shadow-blue-500/40"
              >
                <Phone size={20} className="group-hover:rotate-12 transition-transform" />
                <span className="text-lg">+91 870023 6923</span>
              </a>
              
              <button className="group flex items-center justify-center gap-2 px-8 py-5 border border-white/10 hover:border-blue-500/40 bg-white/5 rounded-2xl font-bold text-white transition-all">
                Schedule Consultation
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            
            <div className="flex items-center gap-4 text-slate-400 bg-white/[0.03] w-fit px-5 py-3 rounded-xl border border-white/5">
              <div className="flex -space-x-2" aria-hidden="true">
                {[1,2,3].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold ${i === 1 ? 'bg-blue-600' : 'bg-indigo-600'}`}>
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-xs md:text-sm font-medium">
                <span className="text-emerald-400 font-bold uppercase text-[10px] block">Live Status</span>
                Accepting New Partnerships for Q1 2026-27
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersVision;