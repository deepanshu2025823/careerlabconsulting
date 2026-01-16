'use client';
import React from 'react';
import B2CHeader from '@/components/b2c/B2CHeader';
import Footer from '@/components/b2c/Footer';
import { PlayCircle, Users, Calendar, Award, ArrowRight } from 'lucide-react';

export default function Masterclass() {
  return (
    <main className="min-h-screen bg-black text-white">
      <B2CHeader />
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase italic tracking-tighter">
            Expert <span className="text-blue-600">Masterclass</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12">Learn from the architects of the future. Deep-dive sessions into AI, Web3, and DeepTech.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
            <div className="group relative aspect-video bg-white/5 rounded-[3rem] border border-white/10 flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
               <PlayCircle className="w-20 h-20 text-white z-10" />
            </div>
            <div className="text-left flex flex-col justify-center space-y-6">
               <h3 className="text-4xl font-black uppercase">Advanced Neural Architecture</h3>
               <div className="flex gap-4 text-sm font-bold text-blue-500 uppercase">
                  <span className="flex items-center gap-1"><Calendar size={16}/> 24th Jan</span>
                  <span className="flex items-center gap-1"><Users size={16}/> 500+ Enrolled</span>
               </div>
               <button className="w-fit px-10 py-4 bg-white text-black rounded-full font-black uppercase hover:bg-blue-600 hover:text-white transition-all">Book Seat</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}