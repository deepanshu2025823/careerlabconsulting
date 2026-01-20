'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence, MotionValue } from 'framer-motion';
import { X, MapPin } from 'lucide-react';

interface User {
  id: number;
  name: string;
  course: string;
  img: string;
  lat: number;
  lng: number;
  country: string;
}

const lmsUsers: User[] = [
  { id: 1, name: "Arjun Mehta", course: "Full Stack Dev", img: "https://i.pravatar.cc/150?u=11", lat: 20.59, lng: 78.96, country: "India" },
  { id: 2, name: "Sarah Chen", course: "Data Science", img: "https://i.pravatar.cc/150?u=12", lat: 37.09, lng: -95.71, country: "USA" },
  { id: 3, name: "James Wilson", course: "Cyber Security", img: "https://i.pravatar.cc/150?u=13", lat: 55.37, lng: -3.43, country: "UK" },
  { id: 4, name: "Fatima Al-Sayed", course: "UI/UX Design", img: "https://i.pravatar.cc/150?u=14", lat: 25, lng: 55, country: "UAE" },
  { id: 5, name: "Yuki Tanaka", course: "AI & ML", img: "https://i.pravatar.cc/150?u=15", lat: 36.20, lng: 138.25, country: "Japan" },
  { id: 6, name: "Carlos Gomes", course: "Mobile App Dev", img: "https://i.pravatar.cc/150?u=16", lat: -14.23, lng: -51.92, country: "Brazil" },
];

export default function GlobalLmsNetwork() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [mounted, setMounted] = useState(false);
  const isDragging = useRef(false);
  const isHovered = useRef(false);
  
  const dragX = useMotionValue(0);

  const rotation = useSpring(dragX, { 
    stiffness: 25, 
    damping: 35,
    restDelta: 0.001 
  });
  
  const backgroundPos = useTransform(rotation, (r) => `${(r / 10) % 100}% center`);

  useEffect(() => {
    setMounted(true);
    let controls: number;
    
    const speed = 0.12; 

    const step = () => {
      if (!isDragging.current && !isHovered.current && !selectedUser) {
        dragX.set(dragX.get() - speed);
      }
      controls = requestAnimationFrame(step);
    };

    controls = requestAnimationFrame(step);
    return () => cancelAnimationFrame(controls);
  }, [dragX, selectedUser]);

  if (!mounted) return <div className="min-h-screen bg-[#02040a]" />;

  return (
    <div className="bg-[#02040a] w-full min-h-screen overflow-hidden flex flex-col font-sans selection:bg-blue-500/30">
      <section className="relative flex-1 flex flex-col items-center justify-center p-4">
        
        <div className="text-center z-30 mb-8 select-none">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter"
          >
            Global <span className="text-blue-500 italic">Network</span>
          </motion.h2>
          <p className="text-slate-500 text-[10px] uppercase tracking-widest mt-2">Live Community Map</p>
        </div>

        <div 
          className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[580px] md:h-[580px] flex items-center justify-center"
          onMouseEnter={() => isHovered.current = true}
          onMouseLeave={() => isHovered.current = false}
        >
          
          <motion.div 
            drag="x"
            onDragStart={() => isDragging.current = true}
            onDragEnd={() => isDragging.current = false}
            onDrag={(_, info) => dragX.set(dragX.get() + info.delta.x * 0.5)}
            className="absolute inset-0 rounded-full z-40 cursor-grab active:cursor-grabbing"
          />
          
          <div className="absolute inset-0 rounded-full z-10 overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,120,255,0.15)] bg-[#000814]">
            <motion.div 
              className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
              style={{ 
                backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Blue_Marble_2002.png/2560px-Blue_Marble_2002.png")', 
                backgroundSize: 'cover', 
                backgroundRepeat: 'repeat',
                backgroundPosition: backgroundPos,
                filter: 'brightness(1.1) contrast(1.2) saturate(1.2)'
              }} 
            />
            <div className="absolute inset-0 shadow-[inset_-50px_-20px_100px_rgba(0,0,0,1),inset_30px_20px_80px_rgba(255,255,255,0.05)] rounded-full pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/5 pointer-events-none" />
          </div>

          <div className="absolute inset-0 z-20 pointer-events-none" style={{ perspective: '2000px' }}>
            {lmsUsers.map((user) => (
              <StudentPin 
                key={user.id} 
                user={user} 
                rotation={rotation} 
                onClick={() => setSelectedUser(user)} 
                active={selectedUser?.id === user.id} 
              />
            ))}
          </div>
        </div>

        <AnimatePresence>
          {selectedUser && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="absolute bottom-10 z-50 px-4"
            >
               <div className="bg-slate-900/90 backdrop-blur-2xl border border-white/20 p-4 rounded-3xl flex items-center gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] min-w-[300px]">
                  <img src={selectedUser.img} className="w-14 h-14 rounded-2xl border-2 border-blue-500 object-cover shadow-lg" alt="" />
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-lg leading-tight">{selectedUser.name}</h4>
                    <p className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">{selectedUser.course}</p>
                    <div className="flex items-center gap-1 mt-1 text-slate-400 text-xs">
                        <MapPin size={12} className="text-red-500" /> {selectedUser.country}
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedUser(null)} 
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X size={20} className="text-slate-400" />
                  </button>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}

function StudentPin({ user, rotation, onClick, active }: { user: User, rotation: MotionValue<number>, onClick: () => void, active: boolean }) {
  const [radius, setRadius] = useState(300);
  
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) setRadius(150);
      else if (window.innerWidth < 1024) setRadius(225);
      else setRadius(290);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const angleRad = useTransform(rotation, (rot) => {
    // Formula to place markers based on Longitude
    return (user.lng + rot - 180) * (Math.PI / 180);
  });

  const x = useTransform(angleRad, (a) => Math.sin(a) * radius);
  const z = useTransform(angleRad, (a) => Math.cos(a) * radius);
  const y = Math.sin(user.lat * (Math.PI / 180)) * -radius;

  const opacity = useTransform(z, [-50, 100], [0, 1]);
  const scale = useTransform(z, [0, radius], [0.5, active ? 1.3 : 1]);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 pointer-events-auto"
      style={{ x, y, opacity, scale, zIndex: active ? 100 : 40 }}
      onClick={(e) => { e.stopPropagation(); onClick(); }}
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
        <div className={`absolute inset-0 rounded-full transition-all duration-700 ${active ? 'bg-blue-500/60 blur-2xl scale-150' : 'group-hover:bg-blue-400/20 blur-lg'}`} />
        
        <div className={`relative w-10 h-10 md:w-14 md:h-14 rounded-full border-2 transition-all duration-300 shadow-2xl overflow-hidden ${active ? 'border-blue-400 scale-110' : 'border-white/30 bg-black group-hover:border-blue-500 group-hover:scale-105'}`}>
          <img src={user.img} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#02040a] shadow-lg" />
      </div>
    </motion.div>
  );
}