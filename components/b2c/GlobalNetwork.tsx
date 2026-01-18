'use client';

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence, MotionValue } from 'framer-motion';
import { X, MapPin, PlayCircle, ArrowRight } from 'lucide-react';

// 1. Define the User Interface for TypeScript
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
  // 2. Add Type to State
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => { setMounted(true); }, []);

  const dragX = useMotionValue(0);
  const rotation = useSpring(useTransform(dragX, (value) => value / 2.5), {
    stiffness: 40,
    damping: 25
  });

  const textureX = useTransform(rotation, (r) => `${(r * 2.5) % 100}%`); 

  if (!mounted) return <div className="min-h-screen bg-[#02040a]" />;

  return (
    <div className="bg-[#02040a] w-full overflow-x-hidden scroll-smooth">
      <section className="relative h-[80vh] md:h-screen flex flex-col items-center justify-start pt-10 md:pt-16">
        <div className="text-center z-30 px-4">
          <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
            Global <span className="text-blue-500 italic">Learners</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <p className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em]">Live Community Hub</p>
          </div>
        </div>

        <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[580px] md:h-[580px] mt-10 flex items-center justify-center">
          <motion.div 
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDrag={(_, info) => dragX.set(dragX.get() + info.delta.x)}
            className="absolute inset-0 rounded-full z-40 cursor-grab active:cursor-grabbing"
          />
          <div className="absolute inset-[-15px] rounded-full bg-blue-600/5 blur-[40px] md:blur-[80px] pointer-events-none" />
          <div className="absolute inset-0 rounded-full z-10 overflow-hidden border border-white/5 shadow-2xl bg-black">
            <motion.div 
              className="absolute inset-0 w-[400%] h-full"
              style={{ 
                backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Blue_Marble_2002.png/2560px-Blue_Marble_2002.png")', 
                backgroundSize: '50% 100%', 
                backgroundRepeat: 'repeat-x',
                x: textureX,
                filter: 'brightness(1.1) contrast(1.1)'
              }} 
            />
            <div className="absolute inset-0 shadow-[inset_-30px_-10px_60px_rgba(0,0,0,0.9),inset_10px_10px_40px_rgba(255,255,255,0.05)] md:shadow-[inset_-50px_-30px_120px_rgba(0,0,0,1),inset_30px_20px_80px_rgba(255,255,255,0.1)] rounded-full pointer-events-none" />
          </div>

          <div className="absolute inset-0 z-20 pointer-events-none perspective-[1000px] md:perspective-[1500px]">
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
              initial={{ opacity: 0, y: 20, scale: 0.9 }} 
              animate={{ opacity: 1, y: 0, scale: 1 }} 
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="absolute bottom-10 md:bottom-20 z-50 w-[90%] md:w-full max-w-md bg-slate-900/80 backdrop-blur-2xl border border-white/10 p-4 md:p-5 rounded-3xl flex items-center gap-4 shadow-2xl"
            >
              <img src={selectedUser.img} className="w-12 h-12 md:w-16 md:h-16 rounded-2xl border-2 border-blue-500 object-cover" alt="" />
              <div className="flex-1 overflow-hidden">
                <h4 className="text-white font-bold text-sm md:text-lg truncate">{selectedUser.name}</h4>
                <p className="text-blue-400 text-[10px] md:text-xs font-black uppercase tracking-widest truncate">{selectedUser.course}</p>
                <div className="flex items-center gap-1 mt-1">
                    <MapPin size={12} className="text-red-500" />
                    <span className="text-slate-400 text-[10px]">{selectedUser.country}</span>
                </div>
              </div>
              <button onClick={() => setSelectedUser(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={20} className="text-slate-400" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-[#02040a]">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-blue-700 via-indigo-900 to-black p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 border border-white/5 shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -mr-48 -mt-48" />
            <div className="flex-1 text-center lg:text-left z-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-500/20 text-black text-[10px] font-bold uppercase tracking-widest mb-6">
                <PlayCircle size={14} /> Free Master Class Series
              </span>
              <h3 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[0.9] tracking-tighter">
                ELEVATE YOUR <br /> <span className="text-black italic">CAREER PATH.</span>
              </h3>
              <p className="text-white text-sm md:text-lg mb-8 max-w-xl leading-relaxed">
                Join thousands of students at the Boston Institute of Analytics. Experience our premium curriculum firsthand with zero cost.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-widest rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20 active:scale-95">
                  Start For Free <ArrowRight size={20} />
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl transition-all border border-white/10">
                  View Curriculum
                </button>
              </div>
            </div>
            <div className="flex-1 w-full z-10">
              <div className="relative group aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-3xl bg-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                  alt="Training"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer">
                    <PlayCircle size={40} className="text-white fill-white/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// 3. Define props for StudentPin
interface StudentPinProps {
    user: User;
    rotation: MotionValue<number>;
    onClick: () => void;
    active: boolean;
}

function StudentPin({ user, rotation, onClick, active }: StudentPinProps) {
  const [radius, setRadius] = useState(280);
  
  useEffect(() => {
    const updateSize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 640) setRadius(140);
        else if (window.innerWidth < 1024) setRadius(190);
        else setRadius(290);
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const x = useTransform(rotation, (rot) => Math.sin((user.lng + rot) * (Math.PI / 180)) * radius);
  const z = useTransform(rotation, (rot) => Math.cos((user.lng + rot) * (Math.PI / 180)) * radius);
  const y = (user.lat * (radius / 90)) * -1;

  const opacity = useTransform(z, [-radius, -radius/2, 0, radius], [0, 0, 0.4, 1]);
  const scale = useTransform(z, [0, radius], [0.6, active ? 1.4 : 1]);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 pointer-events-auto"
      style={{ x, y, opacity, scale, zIndex: active ? 100 : 40 }}
      onClick={(e) => { e.stopPropagation(); onClick(); }}
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
        <div className={`absolute inset-0 rounded-full transition-all duration-700 ${active ? 'bg-blue-500/40 blur-xl scale-150' : ''}`} />
        <div className={`relative w-10 h-10 md:w-16 md:h-16 rounded-full border-2 transition-all duration-500 overflow-hidden ${active ? 'border-blue-400 ring-4 ring-blue-500/20' : 'border-white/20 bg-black shadow-lg shadow-black/50'}`}>
          <img src={user.img} alt="" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
        </div>
        <div className="absolute -top-0.5 -right-0.5 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 md:border-[3px] border-[#02040a] z-50 shadow-sm" />
      </div>
    </motion.div>
  );
}