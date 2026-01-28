'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image'; 
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Sparkles, ArrowRight } from 'lucide-react';

export default function HeroB2B() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const OWNER_PHONE = "918700236923";
  
  const avatars = useMemo(() => [
    { id: "1560250097-0b93528c311a", name: "AI Strategy Expert" }, 
    { id: "1494790108377-be9c29b29330", name: "Automation Lead" }, 
    { id: "1507003211169-0a1dd7228f2d", name: "Technical Consultant" }, 
    { id: "1599566150163-29194dcaad36", name: "Growth Specialist" }
  ], []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false }); 
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; z: number }[] = [];
    const numStars = 200; 

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: numStars }, () => ({
        x: Math.random() * canvas.width - canvas.width / 2,
        y: Math.random() * canvas.height - canvas.height / 2,
        z: Math.random() * canvas.width
      }));
    };

    const draw = () => {
      ctx.fillStyle = '#020617'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      for (let i = 0; i < numStars; i++) {
        const s = stars[i];
        s.z -= 1.2;
        if (s.z <= 0) s.z = canvas.width;

        const x = centerX + (s.x / s.z) * canvas.width;
        const y = centerY + (s.y / s.z) * canvas.width;
        
        if (x < 0 || x > canvas.width || y < 0 || y > canvas.height) continue;

        const radius = (1 - s.z / canvas.width) * 1.5;
        const opacity = 1 - s.z / canvas.width;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 197, 253, ${opacity})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    setup();
    draw();
    window.addEventListener('resize', setup);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setup);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-30 pb-20 px-4 overflow-hidden bg-[#020617]">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true" />
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-6xl mx-auto text-center"
      >
        <div className="flex flex-col items-center">
          <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="flex -space-x-2">
              {avatars.map((avatar, i) => (
                <div key={i} className="relative w-8 h-8 rounded-full border-2 border-[#020617] overflow-hidden bg-slate-800">
                  <Image 
                    src={`https://images.unsplash.com/photo-${avatar.id}?w=64&h=64&fit=crop`} 
                    alt={avatar.name}
                    fill
                    priority={i < 4} 
                    sizes="32px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="h-4 w-px bg-white/20" />
            <p className="text-blue-200 text-[6px] md:text-xs font-bold tracking-widest uppercase flex items-center gap-2">
              <Sparkles size={14} className="text-blue-400" />
              The Future of Work is Autonomous
            </p>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
            Command Your <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-200 to-blue-500">
              AI Empire
            </span>
          </h1>
        </div>

        <p className="max-w-2xl mx-auto text-slate-300 text-base md:text-xl mb-12 leading-relaxed px-4">
          Deploy custom AI workforces that <strong>execute tasks</strong> autonomously. 
          Reduce overhead by 70% and scale your business without increasing headcount.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            aria-label="Contact on WhatsApp to deploy AI workforce"
            onClick={() => window.open(`https://wa.me/${OWNER_PHONE}?text=I want to deploy AI Agents.`, '_blank')}
            className="group w-full sm:w-auto px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 hover:bg-blue-500 transition-all active:scale-95"
          >
            <span>Deploy My AI Workforce</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            aria-label="Open strategy session booking modal"
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all active:scale-95"
          >
            Watch Demo
          </button>
        </div>
      </motion.div>

      <AnimatePresence mode="popLayout">
        {isModalOpen && (
          <motion.div 
            key="modal-container"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            <div className="absolute inset-0 bg-[#020617]/95 backdrop-blur-md" onClick={() => setIsModalOpen(false)} />
            <motion.div 
              initial={{ scale: 0.95, y: 20 }} 
              animate={{ scale: 1, y: 0 }} 
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-slate-900 border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-slate-500 hover:text-white" aria-label="Close modal">
                <X size={24} />
              </button>
              <h2 className="text-3xl font-bold text-white mb-2">Scale Your Vision</h2>
              <form onSubmit={(e) => {
                e.preventDefault();
                const message = `*AI Strategy Call Request*%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}`;
                window.open(`https://wa.me/${OWNER_PHONE}?text=${message}`, '_blank');
                setIsModalOpen(false);
              }} className="space-y-4 mt-8">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input required aria-label="Enter your full name" type="text" placeholder="Full Name" className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-blue-500 transition-colors" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input required aria-label="Enter your work email" type="email" placeholder="Work Email" className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-blue-500 transition-colors" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
                <button type="submit" className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl mt-4 transition-all uppercase tracking-widest text-sm shadow-lg shadow-blue-500/25">
                  Reserve Call
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}