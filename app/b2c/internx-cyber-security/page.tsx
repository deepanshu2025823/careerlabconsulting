'use client';

import React from 'react';
import B2CHeader from '@/components/b2c/B2CHeader';
import Footer from '@/components/b2c/Footer';
import { ShieldCheck, Lock, Eye, Zap, Terminal, ShieldAlert, Cpu, Fingerprint, Radar } from 'lucide-react';

export default function InternXCyberSecurity() {
  const securityModules = [
    { icon: <Lock className="w-6 h-6" />, title: "Ethical Hacking", status: "Operational", level: "Advanced" },
    { icon: <ShieldAlert className="w-6 h-6" />, title: "Threat Intel", status: "Scanning", level: "Expert" },
    { icon: <Fingerprint className="w-6 h-6" />, title: "Forensics", status: "Secure", level: "Intermediate" },
    { icon: <Radar className="w-6 h-6" />, title: "Network Def", status: "Active", level: "Pro" },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-red-500/30">
      <B2CHeader />

      {/* --- HERO SECTION: STEALTH MODE --- */}
      <section className="relative pt-32 pb-20 lg:pt-56 lg:pb-32 px-6">
        {/* Cyber Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Red Security Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-red-500/30 bg-red-500/5 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span className="text-red-500 text-[10px] font-black uppercase tracking-widest">
                  System Shield: Active
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-[0.9] uppercase">
                Cyber <span className="text-red-600 italic">Security</span><br/>
                Protocols
              </h1>
              
              <p className="text-slate-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-medium">
                Master the art of digital defense. From penetration testing to advanced cryptography—build the walls that hackers can't scale.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-black uppercase tracking-widest transition-all shadow-lg shadow-red-600/20 flex items-center gap-3">
                  Join the Frontline <ShieldCheck className="w-5 h-5" />
                </button>
                <button className="px-10 py-4 border border-white/10 hover:bg-white/5 text-white rounded-xl font-black uppercase tracking-widest transition-all">
                  Security Audit
                </button>
              </div>
            </div>

            {/* Visual Element: Security Interface */}
            <div className="lg:w-1/2 w-full">
              <div className="relative p-1 bg-gradient-to-br from-red-600/20 to-transparent rounded-[2rem]">
                <div className="bg-[#0a0a0a] rounded-[1.9rem] p-8 border border-white/5 relative overflow-hidden">
                  <div className="flex justify-between items-center mb-10">
                    <Terminal className="w-6 h-6 text-red-500" />
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <div className="w-2 h-2 rounded-full bg-red-500/30" />
                      <div className="w-2 h-2 rounded-full bg-red-500/30" />
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {securityModules.map((m, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-red-500/5 transition-all group">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-red-500/10 rounded-xl text-red-500 group-hover:scale-110 transition-transform">
                            {m.icon}
                          </div>
                          <div>
                            <div className="text-sm font-black uppercase tracking-tight">{m.title}</div>
                            <div className="text-[10px] text-slate-500 font-bold uppercase">{m.level}</div>
                          </div>
                        </div>
                        <div className="text-[10px] font-mono text-red-500 bg-red-500/10 px-3 py-1 rounded-full animate-pulse">
                          {m.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURE SECTION: THE CORE --- */}
      <section className="py-24 px-6 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 bg-[#0a0a0a] rounded-[2.5rem] border border-white/5 hover:border-red-500/30 transition-all group">
            <Eye className="w-12 h-12 text-red-500 mb-6 group-hover:rotate-12 transition-transform" />
            <h3 className="text-2xl font-black mb-4 uppercase italic leading-none">Vulnerability Analysis</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Deep scan system architectures to identify and patch zero-day vulnerabilities before they are exploited.</p>
          </div>
          
          <div className="p-10 bg-red-600 rounded-[2.5rem] border border-red-500/30 group hover:-translate-y-2 transition-all shadow-2xl shadow-red-600/40">
            <Zap className="w-12 h-12 text-white fill-current mb-6" />
            <h3 className="text-2xl font-black mb-4 uppercase italic leading-none text-white">Rapid Incident Response</h3>
            <p className="text-red-100 text-sm leading-relaxed">Deploy counter-measures in milliseconds. Our automated response protocols ensure zero downtime during attacks.</p>
          </div>

          <div className="p-10 bg-[#0a0a0a] rounded-[2.5rem] border border-white/5 hover:border-red-500/30 transition-all group">
            <Cpu className="w-12 h-12 text-red-500 mb-6 group-hover:rotate-12 transition-transform" />
            <h3 className="text-2xl font-black mb-4 uppercase italic leading-none">Quantum Encryption</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Implement next-generation cryptographic standards that are resistant to quantum computing decryption.</p>
          </div>
        </div>
      </section>

      {/* --- STATS / CLIENT TRUST --- */}
      <section className="py-20 bg-[#080808] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center gap-10 opacity-50 grayscale hover:grayscale-0 transition-all">
             <span className="text-2xl font-black tracking-widest uppercase">Fort-Knox</span>
             <span className="text-2xl font-black tracking-widest uppercase italic text-red-600 underline">Cyber-Mesh</span>
             <span className="text-2xl font-black tracking-widest uppercase">Secure-Core</span>
             <span className="text-2xl font-black tracking-widest uppercase italic">Sentinel</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}