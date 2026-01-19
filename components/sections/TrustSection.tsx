'use client';

import React from 'react';
import { Shield, Zap, Globe, Lock, CheckCircle2 } from 'lucide-react';

export default function TrustSection() {
  // Yahan maine generic logos ke bajaye actual PNG URLs ka structure ready kar diya hai
  const logos = [
    { name: "Google", url: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png" },
    { name: "Amazon", url: "https://cdn-icons-png.flaticon.com/512/5968/5968202.png" },
    { name: "Microsoft", url: "https://cdn-icons-png.flaticon.com/512/732/732221.png" },
    { name: "Meta", url: "https://cdn-icons-png.flaticon.com/512/6033/6033716.png" },
    { name: "Tesla", url: "https://cdn-icons-png.flaticon.com/512/5969/5969031.png" },
    { name: "Adobe", url: "https://cdn-icons-png.flaticon.com/512/732/732172.png" },
    { name: "Nvidia", url: "https://cdn-icons-png.flaticon.com/512/5969/5969193.png" }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#020617] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <p className="text-blue-500 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase mb-12">
            Trusted by Industry Leaders
          </p>
          
          {/* Logos Grid with Images */}
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-20 opacity-40 hover:opacity-100 transition-opacity duration-500">
            {logos.map((logo) => (
              <div key={logo.name} className="group flex items-center gap-3">
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="h-8 md:h-10 w-auto object-contain grayscale invert hover:grayscale-0 hover:invert-0 transition-all duration-300"
                />
                <span className="hidden md:block text-xl font-bold text-white tracking-tighter">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Shield className="w-3 h-3 text-blue-400" />
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Enterprise Grade</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-6">
              Security that <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Scale Safely.</span>
            </h2>
            
            <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              Humara architecture sirf fast nahi, balki bulletproof hai. Har agent ek isolated secure environment mein run hota hai.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "End-to-End Encryption", desc: "AES-256 Bit Security" },
                { title: "SOC2 Type II", desc: "Compliance Certified" },
                { title: "99.99% Uptime", desc: "Reliability Guaranteed" },
                { title: "GDPR Ready", desc: "Global Data Privacy" }
              ].map((item, i) => (
                <div key={i} className="group p-4 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] transition-all">
                  <div className="flex items-center gap-3 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    <span className="text-white font-bold text-sm">{item.title}</span>
                  </div>
                  <p className="text-slate-500 text-xs pl-7">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2rem] blur-xl opacity-20 animate-pulse"></div>      
            <div className="relative bg-[#0b0f1a] border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl backdrop-blur-3xl">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent h-1/2 w-full top-0 animate-[scan_3s_linear_infinite] pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-12">
                  <div className="space-y-1.5">
                    <div className="h-1.5 w-16 bg-blue-500 rounded-full"></div>
                    <div className="h-1.5 w-10 bg-slate-700 rounded-full"></div>
                  </div>
                  <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-md">
                    <span className="text-[10px] text-green-500 font-mono font-bold uppercase tracking-tighter">System_Secure</span>
                  </div>
                </div>

                <div className="flex flex-col items-center py-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full"></div>
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-blue-500/30 flex items-center justify-center bg-[#020617] relative z-10">
                      <Lock className="w-10 h-10 md:w-14 md:h-14 text-blue-500 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  
                  <div className="mt-10 text-center">
                    <h4 className="text-white text-xl md:text-2xl font-black tracking-tight mb-2">Privacy Core V2</h4>
                    <p className="text-slate-500 text-sm font-mono tracking-tighter">Shielding 4.2M+ Requests/Sec</p>
                  </div>
                </div>

                <div className="mt-10 space-y-4">
                   <div className="space-y-2">
                      <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase">
                        <span>Data Integrity</span>
                        <span>100%</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 w-full"></div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
}