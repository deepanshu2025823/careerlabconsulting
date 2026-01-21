'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, Bot, Zap, Check, X, 
  Sparkles, Globe, Shield, Activity, Loader2,
  Lock, Gauge, Search, ChevronRight
} from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';

export default function WebsiteSuitePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [domain, setDomain] = useState('');
  const [step, setStep] = useState<'input' | 'scanning' | 'success' | 'report'>('input');

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // --- Functionality: Start Analysis ---
  const handleStartAnalysis = async () => {
    if (!domain.includes('.') || domain.length < 4) {
      alert("Please enter a valid domain (e.g., careerlabconsulting.com)");
      return;
    }
    setStep('scanning');
    await new Promise((resolve) => setTimeout(resolve, 2500));
    setStep('success');
  };

  // --- Functionality: View Full Report ---
  const handleViewReport = () => {
    setStep('report');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setStep('input');
      setDomain('');
    }, 300);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#030303] text-white selection:bg-indigo-500/40 overflow-x-hidden">
      <Navbar />

      {/* --- Background Effects --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10">
        {/* --- Hero Section --- */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase mb-8">
                <Sparkles size={14} /> The Future of Web is Autonomous
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-8">
                Build <span className="text-indigo-500">Fast.</span> <br />
                Scale <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Itself.</span>
              </h1>
              <p className="text-slate-400 text-base md:text-xl max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
                The first AI-native website suite that monitors, secures, and optimizes your conversions without manual code.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button onClick={() => setIsModalOpen(true)} className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-full font-bold transition-all flex items-center justify-center gap-2 shadow-lg">
                  Launch Your Engine <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>

            {/* --- Hero Visual --- */}
            <motion.div style={{ y: y1 }} className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-[450px] flex items-center justify-center">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border border-white/5 rounded-[4rem]" />
                <div className="relative z-10 p-8 bg-slate-900/80 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-2xl w-64 text-center">
                  <Bot size={40} className="mx-auto mb-4 text-indigo-500" />
                  <div className="text-[10px] text-slate-500 font-mono mb-1">SYSTEM_STATUS</div>
                  <div className="text-emerald-400 font-bold tracking-widest text-xs uppercase">Optimization Active</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Features Grid --- */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-12 lg:col-span-8 p-10 rounded-[2.5rem] bg-white/5 border border-white/10 flex flex-col justify-center min-h-[300px]">
              <Zap className="text-indigo-400 mb-6" size={40} />
              <h3 className="text-3xl font-bold mb-4">Edge-Native Deployment</h3>
              <p className="text-slate-400 text-lg">Sub-second load times worldwide with zero-latency scaling.</p>
            </div>
            <div className="md:col-span-12 lg:col-span-4 p-10 rounded-[2.5rem] bg-indigo-600 flex flex-col justify-between min-h-[300px]">
              <Shield size={40} className="text-white" />
              <h3 className="text-2xl font-bold">Self-Securing Architecture</h3>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* --- MULTI-STEP FUNCTIONAL MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal} className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.9, opacity: 0, y: 20 }} 
              className="relative w-full max-w-xl bg-zinc-900 border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <button onClick={closeModal} className="absolute top-6 right-6 text-slate-500 hover:text-white z-50"><X size={24} /></button>

              {/* STEP 1: INPUT */}
              {step === 'input' && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h3 className="text-3xl font-bold mb-2">Connect Domain</h3>
                  <p className="text-slate-400 mb-8">Let our AI scan your current infrastructure.</p>
                  <div className="space-y-4">
                    <input 
                      value={domain}
                      onChange={(e) => setDomain(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-indigo-500 outline-none text-lg transition-all" 
                      placeholder="yourdomain.com" 
                    />
                    <button 
                      onClick={handleStartAnalysis}
                      className="w-full py-5 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-500 transition-all flex items-center justify-center gap-2 text-lg shadow-xl shadow-indigo-600/20"
                    >
                      Start Analysis <Sparkles size={20} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: SCANNING */}
              {step === 'scanning' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                  <Loader2 className="w-16 h-16 text-indigo-500 animate-spin mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-2 tracking-tight">AI Neural Scan in Progress</h3>
                  <p className="text-slate-400 font-mono text-sm">Target: {domain}</p>
                </motion.div>
              )}

              {/* STEP 3: SUCCESS */}
              {step === 'success' && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
                  <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check size={40} strokeWidth={3} />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Scan Successful</h3>
                  <p className="text-slate-400 mb-10 text-lg">We've identified key bottlenecks on {domain}.</p>
                  <button 
                    onClick={handleViewReport}
                    className="w-full py-5 bg-white text-black font-black rounded-2xl hover:bg-slate-200 transition-all text-lg shadow-2xl"
                  >
                    View Full Report
                  </button>
                </motion.div>
              )}

              {/* STEP 4: FULL REPORT (The Fix) */}
              {step === 'report' && (
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400"><Search size={20} /></div>
                    <h3 className="text-2xl font-bold">Optimization Report</h3>
                  </div>
                  
                  <div className="grid gap-4">
                    {[
                      { icon: <Gauge size={18} />, label: "Performance Score", val: "42/100", color: "text-red-400", sub: "LCP is too high" },
                      { icon: <Shield size={18} />, label: "Security Layer", val: "Critical", color: "text-orange-400", sub: "No WAF detected" },
                      { icon: <Lock size={18} />, label: "SEO Health", val: "Poor", color: "text-yellow-400", sub: "Missing Meta-tags" }
                    ].map((item, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-slate-500">{item.icon}</div>
                          <div>
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{item.label}</div>
                            <div className="text-sm text-slate-400">{item.sub}</div>
                          </div>
                        </div>
                        <div className={`font-black ${item.color}`}>{item.val}</div>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => window.open('https://calendly.com', '_blank')}
                    className="w-full py-5 bg-indigo-600 text-white font-black rounded-2xl flex items-center justify-center gap-2 hover:bg-indigo-500 transition-all mt-4"
                  >
                    Fix All Issues with AI <ChevronRight size={20} />
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}