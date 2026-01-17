'use client';

import React from 'react';
import B2CHeader from '@/components/b2c/B2CHeader';
import B2CHero from '@/components/b2c/B2CHero';
import LMSPreview from '@/components/b2c/LMSPreview'; 
import CourseGrid from '@/components/b2c/CourseGrid';
import StatsSection from '@/components/b2c/StatsSection';
import AdvantagesSection from '@/components/b2c/AdvantagesSection';
import PillarsSection from '@/components/b2c/PillarsSection';
import GlobalNetwork from '@/components/b2c/GlobalNetwork';
import MediaPresence from '@/components/b2c/MediaPresence';
import LogoSection from '@/components/b2c/LogoSection';
import CurriculumSection from '@/components/b2c/CurriculumSection';
import MentorshipSection from '@/components/b2c/MentorshipSection';
import AlumniSuccess from '@/components/b2c/AlumniSuccess';
import FAQSection from '@/components/b2c/FAQSection';
import PricingSection from '@/components/b2c/PricingSection';
import Footer from '@/components/b2c/Footer';
import { ArrowRight, Brain, Shield, Database, LayoutPanelTop, Box } from 'lucide-react';

const domains = [
  { 
    name: 'InternX-AI', 
    icon: Brain, 
    desc: 'Autonomous Agent Deployment & Neural Training.',
    video: 'https://www.youtube.com/embed/whqLvigQWoE?autoplay=1&mute=1&loop=1&playlist=whqLvigQWoE',
    isYoutube: true 
  },
  { 
    name: 'InternX-Cyber Security', 
    icon: Shield, 
    desc: 'Advanced AI Security & Threat Intelligence.',
    video: 'https://www.youtube.com/embed/vViMFjvVT9E?autoplay=1&mute=1&loop=1&playlist=vViMFjvVT9E', 
    isYoutube: true
  },
  { 
    name: 'InternX-Blockchain', 
    icon: Database, 
    desc: 'Decentralized Ledger & Smart Contract AI.',
    video: 'https://www.youtube.com/embed/qOVAbKKSH10?autoplay=1&mute=1&loop=1&playlist=qOVAbKKSH10',
    isYoutube: true
  },
  { 
    name: 'InternX-Cloud & DevOps', 
    icon: LayoutPanelTop, 
    desc: 'Scalable Infrastructure for Global AI.',
    video: 'https://www.youtube.com/embed/kriafQfqGZE?autoplay=1&mute=1&loop=1&playlist=kriafQfqGZE',
    isYoutube: true
  },
  { 
    name: 'InternX-Web3', 
    icon: Box, 
    desc: 'Next-Gen Decentralized Applications & Web3 Protocols.',
    video: 'https://www.youtube.com/embed/4XO3g7Rfamk?autoplay=1&mute=1&loop=1&playlist=4XO3g7Rfamk',
    isYoutube: true
  },
];

export default function B2CPage() {
  return (
    <main className="min-h-screen bg-[#020617]">
      <B2CHeader />
      
      <div className="pt-20">
        <B2CHero />

        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">
              Internship Domains
            </h2>
            <p className="text-slate-400">Select your specialization in the Career Lab Ecosystem.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {domains.map((item, index) => (
              <div 
                key={item.name} 
                className={`flex flex-col p-6 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group w-full md:w-[calc(33.333%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]`}
              >
                <div className="relative w-full aspect-video mb-6 rounded-2xl overflow-hidden bg-black/40 border border-white/5 shadow-2xl">
                  {item.isYoutube ? (
                    <iframe
                      className="w-full h-full pointer-events-none scale-125" 
                      src={item.video}
                      title={item.name}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-80">
                      <source src={item.video} type="video/mp4" />
                    </video>
                  )}
                  <div className="absolute inset-0 bg-transparent z-10"></div>
                </div>

                <div className="flex items-center gap-4 mb-4">
                   <div className="p-3 rounded-xl bg-blue-500/10">
                    <item.icon className="w-6 h-6 text-blue-500 group-hover:rotate-12 transition-transform" />
                   </div>
                   <h3 className="text-xl font-bold text-white tracking-tight">{item.name}</h3>
                </div>

                <p className="text-slate-400 text-sm mb-8 leading-relaxed flex-grow">
                  {item.desc}
                </p>

                <button className="w-full py-4 rounded-2xl flex items-center justify-center gap-2 bg-white/5 text-blue-400 font-extrabold text-xs uppercase tracking-[0.2em] border border-white/5 hover:bg-blue-600 hover:text-white hover:border-blue-400 transition-all active:scale-95">
                  Join Program <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        <LMSPreview />
        <CourseGrid />
        <StatsSection />
        <AdvantagesSection />
        <PillarsSection />
        <GlobalNetwork />
        <MediaPresence />
        <LogoSection />
        <CurriculumSection />
        <MentorshipSection />
        <AlumniSuccess />
        <FAQSection />
        <PricingSection />
        <Footer />
      </div>
    </main>
  );
}