'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function HeroB2B() {
  const [avatars, setAvatars] = useState<string[]>([]);
  
  // Logos for the marquee (Placeholder icons/text)
  const logos = [
    "TECHFLOW", "QUANTUM", "SYNERGY", "NEXUS", "APEX", "CORE AI", "VELOCITY"
  ];

  useEffect(() => {
    const avatarPool = [
      "1560250097-0b93528c311a", "1494790108377-be9c29b29330", 
      "1573496359-136d94205579", "1519085360753-af0119f7cbe7", 
      "1507003211169-0a1dd7228f2d", "1500648767791-00dcc994a43e", 
      "1438761681033-6461ffad8d80"
    ];
    const shuffled = [...avatarPool].sort(() => 0.5 - Math.random());
    setAvatars(shuffled.slice(0, 3));
  }, []);

  return (
    <section className="relative min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 px-4 overflow-hidden bg-[#030712] selection:bg-blue-500/30">
      
      {/* --- BACKGROUND ANIMATIONS --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-5%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-blue-600/10 blur-[120px] rounded-full"
        />
        <div className="absolute inset-0 opacity-[0.1]" 
             style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`, backgroundSize: '40px 40px' }}>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Trusted By Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-12 shadow-2xl"
        >
          <div className="flex -space-x-2">
            {avatars.map((id, i) => (
              <img key={i} src={`https://images.unsplash.com/photo-${id}?w=100&h=100&fit=crop`} className="w-8 h-8 rounded-full border-2 border-[#030712]" alt="user" />
            ))}
          </div>
          <p className="text-blue-100 text-xs font-medium">Trusted by <span className="text-blue-400 font-bold">50+ Global Enterprises</span></p>
        </motion.div>

        {/* Hero Title */}
        <div className="text-center mb-12 space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white"
          >
            Operate at the <br />
            <span className="bg-gradient-to-b from-white via-blue-200 to-blue-600 bg-clip-text text-transparent italic">Speed of Thought</span>
          </motion.h1>
          <p className="text-slate-400 text-lg md:text-2xl max-w-2xl mx-auto font-light">
            Deploy <span className="text-white font-medium">Autonomous Neural Agents</span> that master your business logic in hours.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-24 w-full sm:w-auto">
          <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            Initialize AI Workforce
          </button>
          <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
            Watch System Demo
          </button>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="w-full max-w-5xl bg-[#0b0f1a]/80 border border-white/10 rounded-[2.5rem] backdrop-blur-3xl overflow-hidden mb-20"
        >
           <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
              {[
                { title: 'Task Autonomy', val: '99.4%', color: 'text-blue-400' },
                { title: 'Process Velocity', val: '22ms', color: 'text-cyan-400' },
                { title: 'Cost Efficiency', val: '85%', color: 'text-indigo-400' }
              ].map((stat, i) => (
                <div key={i} className="p-10 group">
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">{stat.title}</p>
                  <h3 className={`text-5xl font-black ${stat.color} tracking-tighter`}>{stat.val}</h3>
                </div>
              ))}
            </div>
        </motion.div>

        {/* --- INFINITE LOGO MARQUEE --- */}
        <div className="w-full mt-10 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#030712] to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#030712] to-transparent z-10"></div>
          
          <motion.div 
            className="flex gap-12 items-center whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <span key={i} className="text-slate-600 text-xl md:text-2xl font-black tracking-widest opacity-50 hover:opacity-100 transition-opacity cursor-default">
                {logo}
              </span>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}