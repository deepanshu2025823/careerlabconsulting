'use client';

import React from 'react';
import B2CHeader from '@/components/b2c/B2CHeader';
import Footer from '@/components/b2c/Footer';
import { Bot, Cpu, Zap, Shield, Rocket, Terminal, ChevronRight, Fingerprint, Activity } from 'lucide-react';

export default function InternXAI() {
  return (
    <main className="min-h-screen bg-[#000000] text-white selection:bg-blue-500/30">
      <B2CHeader />

      {/* --- HERO SECTION: MESH GRADIENT --- */}
      <section className="relative pt-32 pb-20 lg:pt-56 lg:pb-40 px-6 overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-600/10 blur-[100px] rounded-full" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl">
              <Activity className="w-3 h-3 text-blue-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-300">
                Neural Protocol Active
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black mb-8 tracking-[ -0.05em] leading-[0.85]">
              INTERN<span className="text-blue-600 underline decoration-blue-600/30 underline-offset-[12px]">X</span>
              <span className="text-white/20 italic font-light">-AI</span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed font-light italic">
              "The bridge between human logic and autonomous intelligence."
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button className="group relative px-12 py-5 bg-white text-black rounded-full font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 flex items-center gap-3">
                Initialize Uplink <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <button className="px-10 py-5 border border-white/20 hover:bg-white hover:text-black rounded-full font-bold uppercase tracking-widest transition-all">
                The Ecosystem
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- BENTO GRID FEATURES --- */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            
            {/* Big Feature 1 */}
            <div className="md:col-span-8 group relative bg-[#0a0a0a] border border-white/10 rounded-[3rem] p-12 overflow-hidden hover:border-blue-500/50 transition-all duration-500">
              <div className="absolute top-0 right-0 p-12 opacity-20 group-hover:opacity-40 transition-opacity">
                <Bot className="w-48 h-48 text-blue-500" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end">
                <h3 className="text-3xl font-black mb-4 uppercase italic">Autonomous Agents</h3>
                <p className="text-slate-500 max-w-md">Master the architecture behind self-thinking AI agents that execute complex multi-step workflows.</p>
              </div>
            </div>

            {/* Small Feature 1 */}
            <div className="md:col-span-4 bg-blue-600 rounded-[3rem] p-12 flex flex-col justify-between group cursor-pointer hover:rotate-2 transition-transform">
              <Zap className="w-12 h-12 text-white fill-current" />
              <div>
                <h3 className="text-2xl font-black text-white uppercase">Fast Track</h3>
                <p className="text-blue-100 text-sm mt-2">Zero to Neural Expert in 12 weeks.</p>
              </div>
            </div>

            {/* Small Feature 2 */}
            <div className="md:col-span-4 bg-[#0a0a0a] border border-white/10 rounded-[3rem] p-10 flex flex-col items-center justify-center text-center group hover:bg-white hover:text-black transition-all duration-500">
              <Shield className="w-16 h-16 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-black uppercase tracking-tighter">Secure Core</h3>
              <p className="text-slate-500 text-xs mt-2 group-hover:text-black/60 font-bold uppercase">Ethical AI Standards</p>
            </div>

            {/* Big Feature 2 */}
            <div className="md:col-span-8 bg-[#0a0a0a] border border-white/10 rounded-[3rem] p-12 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="flex flex-col md:flex-row h-full items-center gap-10">
                 <div className="md:w-1/2">
                   <h3 className="text-3xl font-black uppercase mb-4 leading-none">Neural Fabric<br/>Integration</h3>
                   <button className="mt-6 flex items-center gap-2 text-blue-500 font-black uppercase text-xs tracking-[0.2em]">
                     Explore Protocols <ChevronRight className="w-4 h-4" />
                   </button>
                 </div>
                 <div className="md:w-1/2 bg-white/5 rounded-2xl p-6 font-mono text-[10px] text-blue-400">
                    <p className="text-white/40">// Deployment Script</p>
                    <p className="mt-2 text-green-500 italic">stable_diffusion_xl.run()</p>
                    <p>gpt4_orchestrator.initialize()</p>
                    <p>internx_core.uplink()</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-24 border-y border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: 'Ecosystem Partners', val: '450+' },
            { label: 'Neural Deployments', val: '12K' },
            { label: 'Agent Uptime', val: '99.9%' },
            { label: 'Global Ranking', val: '#1' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl font-black mb-2 text-white">{stat.val}</div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}