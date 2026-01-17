'use client';

import React from 'react';
import { motion } from 'framer-motion';

const alumniCompanies = [
  { name: "Accenture", url: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
  { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Oracle", url: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Netflix", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Meta", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" }
];

export default function AlumniSuccess() {
  const duplicatedLogos = [...alumniCompanies, ...alumniCompanies, ...alumniCompanies];

  return (
    <section className="relative py-16 md:py-28 bg-[#020617] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-5xl font-black text-white tracking-tighter uppercase italic leading-none">
              CLC<span className="align-top text-[10px] md:text-sm not-italic ml-1">®</span> 
              <span className="text-blue-500 ml-3">ALUMNI SUCCESS</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-blue-500" />
              <p className="text-slate-400 text-[9px] md:text-xs font-bold uppercase tracking-[0.4em]">
                Global Placement Partners
              </p>
              <div className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-blue-500" />
            </div>
          </motion.div>
        </div>

        <div className="relative flex items-center group">
          <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#020617] via-[#020617]/90 to-transparent z-20 pointer-events-none" />

          <motion.div 
            className="flex whitespace-nowrap items-center py-4"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30, 
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center px-10 md:px-16 min-w-[160px] md:min-w-[280px] transition-all duration-300 opacity-40 group-hover:opacity-20 hover:!opacity-100"
              >
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="h-7 md:h-12 w-auto object-contain brightness-0 invert"
                  loading={index < 10 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <div className="px-4 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm">
             <p className="text-[8px] text-slate-500 font-bold tracking-[0.2em] uppercase">Infinite Career Loop</p>
          </div>
        </div>
      </div>
    </section>
  );
}