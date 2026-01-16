'use client';
import React from 'react';
import B2CHeader from '@/components/b2c/B2CHeader';
import Footer from '@/components/b2c/Footer';
import { FileText, Database, Share2 } from 'lucide-react';

export default function Research() {
  return (
    <main className="min-h-screen bg-black text-white">
      <B2CHeader />
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-6xl font-black uppercase italic mb-16 border-b border-white/10 pb-10">Research Papers</h1>
        <div className="space-y-6">
          {[1, 2, 4].map((i) => (
            <div key={i} className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 bg-white/5 rounded-3xl hover:bg-blue-600/10 transition-all group">
              <div>
                <span className="text-blue-500 font-mono text-xs uppercase tracking-widest">Paper #0241</span>
                <h3 className="text-2xl font-black uppercase mt-2 group-hover:text-blue-400 transition-colors">Distributed Ledger Consensus in AI Clusters</h3>
              </div>
              <button className="mt-4 md:mt-0 px-6 py-3 border border-white/10 rounded-xl flex items-center gap-2 hover:bg-white hover:text-black transition-all">
                Download PDF <FileText size={18}/>
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}