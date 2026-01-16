'use client';
import React from 'react';
import B2CHeader from '@/components/b2c/B2CHeader';
import Footer from '@/components/b2c/Footer';
import { ShieldCheck, UserCheck } from 'lucide-react';

export default function AdvisoryCouncil() {
  return (
    <main className="min-h-screen bg-black text-white">
      <B2CHeader />
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="inline-block p-4 bg-blue-600/10 rounded-3xl text-blue-500 mb-6">
            <ShieldCheck size={48} />
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Guided by the <br/><span className="text-blue-600">Industry Giants</span></h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">Our council consists of veterans from MIT, Stanford, and Fortune 500 tech firms, ensuring our curriculum stays 5 years ahead.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
            {[1,2,3,4].map(i => (
               <div key={i} className="aspect-square bg-white/5 rounded-[2rem] border border-white/10 flex flex-col items-center justify-center p-6 text-center hover:bg-white hover:text-black transition-all cursor-pointer">
                  <UserCheck className="mb-4" />
                  <span className="font-black uppercase text-xs tracking-tighter">Board Member {i}</span>
               </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}