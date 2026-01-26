'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Building2, Briefcase, Mail, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function HeroB2B() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', company: '', role: '', email: '' });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  const OWNER_PHONE = "918700236923";
  const avatars = ["1560250097-0b93528c311a", "1494790108377-be9c29b29330", "1507003211169-0a1dd7228f2d", "1599566150163-29194dcaad36"];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Strategy Call Request*%0A*Name:* ${formData.name}%0A*Company:* ${formData.company}%0A*Role:* ${formData.role}%0A*Email:* ${formData.email}`;
    window.open(`https://wa.me/${OWNER_PHONE}?text=${message}`, '_blank');
    setIsModalOpen(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; z: number; px: number; py: number }[] = [];
    const numStars = 800;
    const speed = 0.8;

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width - canvas.width / 2,
          y: Math.random() * canvas.height - canvas.height / 2,
          z: Math.random() * canvas.width,
          px: 0,
          py: 0
        });
      }
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(2, 6, 23, 0.4)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2 + (mousePos.current.x * 0.05);
      const cy = canvas.height / 2 + (mousePos.current.y * 0.05);

      ctx.translate(cx, cy);

      stars.forEach((s) => {
        s.z -= speed;
        if (s.z <= 0) {
          s.z = canvas.width;
          s.x = Math.random() * canvas.width - canvas.width / 2;
          s.y = Math.random() * canvas.height - canvas.height / 2;
        }

        const x = (s.x / s.z) * canvas.width;
        const y = (s.y / s.z) * canvas.width;
        const radius = Math.max(0, (1 - s.z / canvas.width) * 2.5);

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        const alpha = 1 - s.z / canvas.width;
        ctx.fillStyle = `rgba(147, 197, 253, ${alpha})`;
        ctx.fill();

        if (s.px !== 0) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha * 0.2})`;
            ctx.lineWidth = radius;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(s.px, s.py);
            ctx.stroke();
        }
        s.px = x;
        s.py = y;
      });

      ctx.translate(-cx, -cy);
      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2
      };
    };

    setup();
    draw();
    window.addEventListener('resize', setup);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setup);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-30 pb-30 px-4 overflow-hidden bg-[#020617] selection:bg-blue-500/30">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none will-change-transform" />
      
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0%,transparent_70%)]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-6xl mx-auto text-center"
      >
        <header>
          <motion.div 
            whileHover={{ y: -2 }}
            className="mb-10 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl"
          >
            <div className="flex -space-x-2.5">
              {avatars.map((id, i) => (
                <img 
                  key={i} 
                  src={`https://images.unsplash.com/photo-${id}?w=100&h=100&fit=crop`} 
                  className="w-8 h-8 rounded-full border-2 border-[#020617] object-cover" 
                  alt="Verified Partner"
                />
              ))}
            </div>
            <div className="h-4 w-px bg-white/20" />
            <span className="text-blue-200 text-[6px] md:text-xs font-bold tracking-[0.2em] flex items-center gap-2 uppercase">
              <Sparkles size={14} className="text-blue-400 animate-pulse" />
              The Future of Work is Autonomous
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-9xl font-black text-white mb-8 tracking-tight leading-[0.9]">
            Command Your <br /> 
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-100 to-blue-400">
              AI Empire
            </span>
          </h1>
        </header>

        <p className="max-w-3xl mx-auto text-slate-300 text-sm md:text-2xl mb-12 leading-relaxed px-4 opacity-80">
          We build custom AI workforces that don&apos;t just &quot;help&quot;—they <strong>execute</strong>. 
          Slash overhead by 70% and scale operations to infinity.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4">
          <motion.button 
            onClick={() => window.open(`https://wa.me/${OWNER_PHONE}?text=I want to deploy AI Agents.`, '_blank')}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(37,99,235,0.3)' }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full sm:w-auto px-12 py-6 bg-blue-600 text-white font-bold rounded-2xl flex items-center justify-center gap-3 overflow-hidden transition-all shadow-blue-500/20 shadow-lg"
          >
            <span className="relative text-sm">Deploy My AI Workforce</span>
            <ArrowRight size={22} className="relative group-hover:translate-x-2 transition-transform" />
          </motion.button>
          
          <motion.button 
            onClick={() => setIsModalOpen(true)}
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)', scale: 1.05 }}
            className="w-full sm:w-auto px-12 py-6 bg-white/5 border border-white/20 text-white font-bold rounded-2xl backdrop-blur-md transition-all text-sm"
          >
            Watch Demo
          </motion.button>
        </div>

        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="mt-16 flex items-center justify-center gap-8 text-slate-500"
        >
          <div className="flex items-center gap-1"><ShieldCheck size={18}/> <span className="text-xs font-medium capitalize tracking-widest">Enterprise Secure</span></div>
          <div className="hidden md:block w-12 h-px bg-white/10" />
          <div className="flex items-center gap-1"><Sparkles size={18}/> <span className="text-xs font-medium capitalize tracking-widest">Zero Latency Agents</span></div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-[#020617]/90 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-xl bg-gradient-to-b from-slate-900 to-[#020617] border border-white/10 rounded-[3rem] p-8 md:p-14 shadow-2xl"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-8 right-8 text-slate-500 hover:text-white transition-colors">
                <X size={28} />
              </button>

              <div className="mb-10 text-left">
                <h3 className="text-4xl font-bold text-white mb-3">Scale Your Vision.</h3>
                <p className="text-slate-400 text-lg">Enter your details for a 1-on-1 AI strategy session.</p>
              </div>
              
              <form onSubmit={handleFormSubmit} className="space-y-5">
                {[
                  { icon: User, name: 'name', placeholder: 'Full Name', type: 'text' },
                  { icon: Building2, name: 'company', placeholder: 'Company Name', type: 'text' },
                  { icon: Briefcase, name: 'role', placeholder: 'Industry/Role', type: 'text' },
                  { icon: Mail, name: 'email', placeholder: 'Work Email', type: 'email' },
                ].map((field) => (
                  <div key={field.name} className="relative group">
                    <field.icon className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={20} />
                    <input 
                      required 
                      type={field.type}
                      placeholder={field.placeholder} 
                      className="w-full pl-14 pr-6 py-5 bg-white/[0.03] border border-white/10 rounded-2xl text-white outline-none focus:border-blue-500 focus:bg-white/[0.07] transition-all" 
                      onChange={(e) => setFormData({...formData, [field.name as keyof typeof formData]: e.target.value})} 
                    />
                  </div>
                ))}
                
                <button type="submit" className="w-full py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black rounded-2xl mt-6 shadow-xl transition-all active:scale-95 text-lg uppercase tracking-wider">
                  Reserve Your Call Now
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}