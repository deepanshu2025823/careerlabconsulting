'use client';

import React from 'react';
// Import paths ko aapke folder structure ke hisaab se adjust kiya hai
import B2CHeader from '@/components/b2c/B2CHeader';
import Footer from '@/components/b2c/Footer';
import { Bot, Cpu, Zap, Shield, Rocket, Terminal } from 'lucide-react';

export default function InternXAI() {
  const features = [
    { icon: <Bot className="w-8 h-8 text-blue-500" />, title: "Autonomous Agents", desc: "Build AI agents that can think and act independently within the ecosystem." },
    { icon: <Cpu className="w-8 h-8 text-purple-500" />, title: "Neural Networks", desc: "Deep dive into complex brain-inspired computing models and LLMs." },
    { icon: <Zap className="w-8 h-8 text-yellow-500" />, title: "Rapid Deployment", desc: "Deploy high-speed AI inference protocols in record time." },
    { icon: <Shield className="w-8 h-8 text-green-500" />, title: "Neural Security", desc: "Ensure your AI protocols are safe and ethically aligned with core values." },
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <B2CHeader />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Neural Protocol v1.0
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase">
            InternX-<span className="text-blue-600 italic">AI</span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            Next-generation autonomous agent deployment. Master the art of building decentralized intelligence and scalable neural networks.
          </p>
          
          <div className="flex flex-wrap justify-center gap-5">
            <button className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-600/20 flex items-center gap-3 group">
              Start Training <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <button className="px-10 py-5 border border-white/10 hover:bg-white/5 text-white rounded-2xl font-black uppercase tracking-widest transition-all">
              View Ecosystem
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-10 bg-[#0a1229]/50 backdrop-blur-sm border border-white/5 rounded-[3rem] hover:border-blue-500/40 transition-all group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="mb-8 p-5 bg-blue-500/10 w-fit rounded-[1.5rem] group-hover:scale-110 transition-transform duration-500">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight uppercase text-white">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Terminal Preview */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-black rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 px-6 py-4 bg-white/5 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-4 flex items-center gap-2">
              <Terminal className="w-3 h-3" /> system_core_initialize.sh
            </div>
          </div>
          <div className="p-10 font-mono text-sm space-y-2 text-blue-400/80">
            <p className="text-green-500 animate-pulse">{'>'} Initializing InternX-AI Protocol...</p>
            <p>{'>'} Loading Neural Weights... Done</p>
            <p>{'>'} Connecting to Autonomous Agent Mesh... OK</p>
            <p>{'>'} Status: <span className="text-blue-500">Ready for Deployment</span></p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}