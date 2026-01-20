'use client';

import React, { useState } from 'react';
import { Play, Star, Users, ArrowRight, Download, X } from 'lucide-react';

const courseData = {
  "Top Internship": [
    {
      title: "InternX-AI: Autonomous Agent Deployment",
      duration: "4-10 MONTHS",
      rating: "4.9/5",
      students: "15k+ Students",
      enrolled: "2152+ students enrolled in Jan 2026",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000", 
      category: "AI & ML",
      videoId: "whqLvigQWoE" 
    },
    {
      title: "InternX-Cyber Security: Threat Intelligence",
      duration: "4-10 MONTHS",
      rating: "4.9/5",
      students: "12k+ Students",
      enrolled: "1817+ students enrolled in Jan 2026",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000",
      category: "SECURITY",
      videoId: "vViMFjvVT9E"
    },
    {
      title: "InternX-Blockchain: Smart Contract AI",
      duration: "4-10 MONTHS",
      rating: "4.9/5",
      students: "13k+ Students",
      enrolled: "1777+ students enrolled in Jan 2026",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000",
      category: "WEB3",
      videoId: "qOVAbKKSH10"
    }
  ],
  "Technology & AI": [
    {
      title: "InternX-AI: Neural Training Protocols",
      duration: "6 MONTHS",
      rating: "4.9/5",
      students: "10k+ Students",
      enrolled: "1200+ enrolled",
      image: "https://images.unsplash.com/photo-1615938165708-feda49ca470c?q=80&w=1000",
      category: "AI",
      videoId: "whqLvigQWoE"
    },
    {
      title: "InternX-Cloud & DevOps: Global Infra",
      duration: "4-10 MONTHS",
      rating: "4.8/5",
      students: "9k+ Students",
      enrolled: "1100+ enrolled",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
      category: "CLOUD",
      videoId: "kriafQfqGZE"
    }
  ],
  "Web3 & Blockchain": [
    {
      title: "InternX-Web3: DApp Development",
      duration: "4 MONTHS",
      rating: "4.7/5",
      students: "8k+ Students",
      enrolled: "950+ enrolled",
      image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=1000",
      category: "BLOCKCHAIN",
      videoId: "4XO3g7Rfamk"
    }
  ],
  "Security & Cloud": [
    {
      title: "InternX-Cyber Security: Advanced Ops",
      duration: "5 MONTHS",
      rating: "4.9/5",
      students: "5k+ Students",
      enrolled: "600+ enrolled",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000",
      category: "CYBER",
      videoId: "vViMFjvVT9E"
    },
    {
      title: "InternX-Cloud & DevOps: AI Scaling",
      duration: "4 MONTHS",
      rating: "4.9/5",
      students: "7k+ Students",
      enrolled: "850+ enrolled",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000",
      category: "DEVOPS",
      videoId: "kriafQfqGZE"
    }
  ]
};

type TabName = keyof typeof courseData;

export default function CourseGrid() {
  const [activeTab, setActiveTab] = useState<TabName>("Top Internship");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const tabs: TabName[] = ['Top Internship', 'Technology & AI', 'Web3 & Blockchain', 'Security & Cloud'];

  return (
    <section className="py-16 md:py-24 bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase leading-tight">
            Internship Tailored to your <span className="text-blue-500 italic block sm:inline">Learning Goals</span>
          </h2>
          
          <div className="flex overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center gap-2 mt-8">
            {tabs.map((tab) => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                  activeTab === tab 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)]' 
                  : 'border-white/10 text-slate-400 hover:border-white/30 hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-[400px]">
          {courseData[activeTab].map((course, idx) => (
            <div 
              key={`${activeTab}-${idx}`} 
              className="group bg-[#0a1229] border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-blue-500/50 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
            >
              <div 
                className="relative h-56 sm:h-64 w-full overflow-hidden cursor-pointer"
                onClick={() => setSelectedVideo(course.videoId)}
              >
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1229] to-transparent" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-600/90 rounded-full flex items-center justify-center text-white backdrop-blur-sm group-hover:scale-110 transition-all duration-500 shadow-2xl">
                    <Play className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                  </div>
                </div>

                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                    {course.category}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-black text-white mb-4 leading-tight min-h-[3rem] line-clamp-2 italic uppercase">
                  {course.title}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
                    <span className="text-slate-500">{course.duration}</span>
                    <span className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-3 h-3 fill-current" /> {course.rating}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-400 text-[10px] font-black uppercase">
                    <Users className="w-3 h-3" /> {course.students}
                  </div>
                  <div className="text-slate-500 text-[9px] font-medium border-t border-white/5 pt-3 italic">
                    {course.enrolled}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 py-3 border border-white/10 rounded-2xl text-[10px] font-black uppercase text-slate-300 hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                    <Download className="w-3 h-3" /> Brochure
                  </button>
                  <button className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 rounded-2xl text-[10px] font-black uppercase text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20">
                    View Details <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Popup */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4">
          <div className="absolute inset-0 bg-black/98 backdrop-blur-md" onClick={() => setSelectedVideo(null)} />
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-0 sm:rounded-3xl overflow-hidden border-y sm:border border-white/10 shadow-2xl animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-all"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}