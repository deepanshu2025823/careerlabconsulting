'use client';
import React from 'react';
import B2CHeader from '@/components/b2c/B2CHeader';
import Footer from '@/components/b2c/Footer';
import { Globe, Briefcase, GraduationCap } from 'lucide-react';

export default function Alumni() {
  return (
    <main className="min-h-screen bg-black text-white">
      <B2CHeader />
      <section className="pt-40 pb-20 px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-black mb-20 uppercase tracking-tighter">Our <span className="text-blue-600">Legacy</span></h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-10 bg-[#080808] border border-white/5 rounded-[3rem] hover:border-blue-500/50 transition-all text-left">
              <div className="w-20 h-20 rounded-full bg-blue-600/20 mb-6" />
              <h4 className="text-2xl font-black uppercase">Alex Rivera</h4>
              <p className="text-blue-500 font-bold text-xs uppercase mb-4 tracking-widest">Senior AI Engineer @ Google</p>
              <p className="text-slate-500 text-sm">"InternX was the bridge between my curiosity and a global career in AI."</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}