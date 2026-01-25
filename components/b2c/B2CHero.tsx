'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, Target, Award, CheckCircle2, 
  Sparkles, X, MapPin, BookOpen, Clock, Layers 
} from 'lucide-react';

const OWNER_PHONE = "918700236923";

const students = [
  { name: "Aryan Sharma", batch: "Advanced AI", country: "India", id: "CLC-IN-1024", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100", progress: "65%", rank: "1.2k", score: "A+" },
  { name: "Sarah Jenkins", batch: "Neural Ops", country: "USA", id: "CLC-US-8821", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100", progress: "82%", rank: "0.8k", score: "S" },
  { name: "Omar Al-Zayed", batch: "Agentic Systems", country: "Dubai", id: "CLC-DXB-4402", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100", progress: "45%", rank: "2.1k", score: "B+" },
  { name: "Marcus Thorne", batch: "Core AI", country: "Germany", id: "CLC-DE-3119", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100", progress: "91%", rank: "0.3k", score: "A++" },
  { name: "Chen Wei", batch: "Neural Ops", country: "Singapore", id: "CLC-SG-7721", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100", progress: "74%", rank: "1.1k", score: "A" }
];

export default function B2CHero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % students.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const s = students[index];

  return (
    <section className="relative min-h-screen pt-10 pb-12 md:pt-5 md:pb-20 overflow-hidden bg-[#020617] flex items-center">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-blue-600/20 blur-[100px] md:blur-[150px] rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="w-full lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-blue-400" />
              <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">Next Cohort: Jan 2026</span>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1" />
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-[0.95] mb-8 tracking-tighter">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">BEYOND</span> <br/> 
              <span className="relative inline-block italic text-blue-400">
                LEARNING.
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none"><path d="M1 9.5C50.5 3.5 150.5 1.5 299 9.5" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"/></svg>
              </span> <br/>
              DEPLOYMENT.
            </h1>

            <p className="text-slate-400 text-base md:text-xl mb-10 max-w-md leading-relaxed font-medium">
              Don't just watch tutorials. Deploy <span className="text-white font-bold underline decoration-blue-500/50">Autonomous Agents</span> and <span className="text-white font-bold underline decoration-cyan-500/50">Neural Protocols</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <button 
                onClick={() => window.open(`https://wa.me/${OWNER_PHONE}`, '_blank')}
                className="relative px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase text-xs tracking-[0.2em] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] flex items-center justify-center gap-3 group overflow-hidden"
              >
                Connect Now <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => setIsVideoOpen(true)} className="px-10 py-5 bg-white/[0.03] hover:bg-white/[0.08] text-white border border-white/10 rounded-2xl font-black uppercase text-xs tracking-widest transition-all flex items-center justify-center gap-3 backdrop-blur-md">
                <Play className="w-4 h-4 fill-white" /> Watch Demo
              </button>
            </div>
          </div>

          <div className="w-full lg:col-span-7 flex justify-center lg:justify-end order-2">
            <AnimatePresence mode="wait">
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "anticipate" }}
                className="w-full max-w-[500px] bg-[#0a0f1d]/90 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-6 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)]"
              >
                <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <img src={s.img} className="w-14 h-14 rounded-2xl object-cover border-2 border-blue-500/50" alt="Student" />
                    <div>
                      <h3 className="text-white font-bold text-lg">{s.name}</h3>
                      <div className="flex items-center gap-2">
                        <MapPin size={10} className="text-blue-400" />
                        <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest">{s.country} • {s.id}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-emerald-500 text-[9px] font-black uppercase">Syncing</span>
                  </div>
                </motion.div>

                <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-5">
                    <Target className="w-5 h-5 text-blue-400 mb-3" />
                    <p className="text-slate-500 text-[8px] font-black uppercase mb-1">Deployment</p>
                    <p className="text-white font-black text-xl">{s.progress}</p>
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-5">
                    <Award className="w-5 h-5 text-emerald-400 mb-3" />
                    <p className="text-slate-500 text-[8px] font-black uppercase mb-1">Batch</p>
                    <p className="text-white font-black text-[11px] leading-tight">{s.batch}</p>
                  </div>
                </motion.div>

                <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="pt-6 border-t border-white/5 flex items-center justify-between px-2">
                   <div>
                      <div className="text-white font-black text-2xl tracking-tighter">{s.rank}</div>
                      <div className="text-[8px] text-slate-500 font-black uppercase tracking-widest">Global Rank</div>
                   </div>
                   <div className="w-px h-8 bg-white/10" />
                   <div>
                      <div className="text-blue-500 font-black text-2xl tracking-tighter">{s.score}</div>
                      <div className="text-[8px] text-slate-500 font-black uppercase tracking-widest">Sync Score</div>
                   </div>
                   <div className="w-px h-8 bg-white/10" />
                   <button className="px-4 py-2 bg-blue-600/10 border border-blue-600/20 text-blue-400 text-[9px] font-black uppercase rounded-xl">
                      View Node
                   </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isVideoOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsVideoOpen(false)} className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden border border-white/10">
              <button onClick={() => setIsVideoOpen(false)} className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"><X size={24} /></button>
              <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" className="w-full h-full" allow="autoplay" allowFullScreen />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}