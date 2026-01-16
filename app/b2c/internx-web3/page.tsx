'use client';

import React from 'react';
import B2CHeader from '@/components/b2c/B2CHeader';
import Footer from '@/components/b2c/Footer';
import { Globe, Cpu, Zap, Shield, Link as LinkIcon, Layers, ArrowUpRight, Coins, Repeat } from 'lucide-react';

export default function InternXWeb3() {
  const web3Pillars = [
    { icon: <Coins className="w-6 h-6" />, title: "Tokenomics", desc: "Design sustainable economy models for decentralized protocols." },
    { icon: <Repeat className="w-6 h-6" />, title: "DEX Protocol", desc: "Building automated market makers and liquidity pools." },
    { icon: <Shield className="w-6 h-6" />, title: "DAO Governance", desc: "Community-driven decision making via smart voting systems." },
  ];

  return (
    <main className="min-h-screen bg-[#000000] text-white selection:bg-blue-600/30 overflow-x-hidden">
      <B2CHeader />

      {/* --- HERO SECTION: DECENTRALIZED WEB --- */}
      <section className="relative pt-32 pb-16 md:pt-52 md:pb-32 px-4 md:px-6">
        {/* Blue & Indigo Mesh Background */}
        <div className="absolute top-0 right-0 w-full max-w-[700px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none opacity-60" />
        <div className="absolute bottom-0 left-0 w-full max-w-[500px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-3xl">
              <LinkIcon className="w-3 h-3 text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-300">Web 3.0 Protocol Live</span>
            </div>

            <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-black tracking-[-0.06em] leading-[0.85] uppercase">
              OWN THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-300 italic">INTERNET</span>
            </h1>

            <p className="text-slate-400 text-lg md:text-2xl max-w-3xl font-medium leading-relaxed">
              Transition from user to owner. Build dApps that are permissionless, trustless, and censorship-resistant.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-12 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 group">
                Enter Metaverse <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-12 py-5 border border-white/10 hover:bg-white/5 text-white rounded-2xl font-black uppercase tracking-widest transition-all">
                The Ecosystem
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE FEATURES BENTO --- */}
      <section className="py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8">
            
            {/* Massive Web3 Vision Card */}
            <div className="md:col-span-8 p-10 md:p-14 bg-[#050505] border border-white/5 rounded-[3rem] flex flex-col justify-between group hover:border-blue-500/30 transition-all min-h-[400px] overflow-hidden relative">
               <div className="absolute -right-20 -top-20 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Globe className="w-80 h-80 text-blue-500" />
               </div>
               <div className="relative z-10">
                  <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-10">
                    <Layers className="w-7 h-7" />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black uppercase italic leading-none mb-6">Permissionless<br/>Innovation</h3>
                  <p className="text-slate-500 max-w-md text-base md:text-xl">Build on top of open protocols. No gatekeepers, no limits, just pure code execution.</p>
               </div>
            </div>

            {/* Indigo Highlight Card */}
            <div className="md:col-span-4 p-10 bg-gradient-to-br from-indigo-700 to-blue-800 rounded-[3rem] flex flex-col justify-between min-h-[400px] shadow-2xl group">
               <Zap className="w-12 h-12 text-white fill-current animate-pulse" />
               <div>
                  <h3 className="text-4xl font-black text-white uppercase italic leading-none mb-4">Fast<br/>Finality</h3>
                  <p className="text-indigo-100/60 font-bold uppercase tracking-widest text-[10px]">L2 Solutions Ready</p>
               </div>
            </div>

            {/* Feature Triplets */}
            {web3Pillars.map((pillar, i) => (
              <div key={i} className="md:col-span-4 p-10 bg-[#080808] border border-white/5 rounded-[2.5rem] hover:bg-blue-600/5 transition-all group">
                <div className="text-blue-500 mb-8 p-4 bg-white/5 w-fit rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {pillar.icon}
                </div>
                <h4 className="text-xl font-black uppercase mb-4 text-white italic">{pillar.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INTERACTIVE HUB SECTION --- */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-[4rem] p-10 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-8">Uplink to <br/> the Chain</h2>
              <p className="text-slate-400 text-lg mb-10 max-w-md">Connect your wallet and start deploying smart contracts on our high-speed testnet environment.</p>
              <button className="px-10 py-5 bg-white text-black rounded-full font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
                Connect Wallet
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               {[
                { label: 'Market Cap', val: '$2.4T' },
                { label: 'Active Wallets', val: '85M' },
                { label: 'Total Volume', val: '120B+' },
                { label: 'Avg Gas', val: '12 Gwei' },
               ].map((stat, i) => (
                 <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-3xl">
                   <div className="text-2xl font-black text-white">{stat.val}</div>
                   <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}