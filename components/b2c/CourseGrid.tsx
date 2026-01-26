'use client';

import React, { useState, useMemo } from 'react';
import { Play, Star, Users, ArrowRight, Download, X } from 'lucide-react';

const allInternships = {
  "AI & Data": [
    { title: "InternX-AI Developer", id: "ai-dev", videoId: "whqLvigQWoE", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" },
    { title: "InternX-Data Engineer", id: "data-eng", videoId: "kriafQfqGZE", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
    { title: "InternX-AI Quality & Safety Engineer", id: "ai-safety", videoId: "vViMFjvVT9E", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
  ],
  "Cloud & Infra": [
    { title: "InternX-Cloud & AI Engineer", id: "cloud-ai", videoId: "kriafQfqGZE", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" },
  ],
  "Cybersecurity": [
    { title: "InternX-Cyber Security Expert", id: "cyber-exp", videoId: "vViMFjvVT9E", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800" },
  ],
  "Web3 & Blockchain": [
    { title: "InternX-Blockchain Developer", id: "eth-dev", videoId: "qOVAbKKSH10", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800" },
  ],
  "Product & Growth": [
    { title: "InternX-AI Product Manager", id: "ai-pm", videoId: "4XO3g7Rfamk", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" },
    { title: "InternX-AI Marketing Specialist", id: "ai-mkt", videoId: "whqLvigQWoE", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
  ],
  "Industry-Specific AI": [
    { title: "InternX-FinTech AI Specialist", id: "fintech-ai", videoId: "qOVAbKKSH10", image: "https://images.unsplash.com/photo-1611974714658-058e11ee23fb?auto=format&fit=crop&q=80&w=800" },
    { title: "InternX-HealthTech AI Specialist", id: "health-ai", videoId: "vViMFjvVT9E", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" },
  ],
  "Robotics & IoT": [
    { title: "InternX-Robotics Engineer", id: "robot-eng", videoId: "kriafQfqGZE", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" },
    { title: "InternX-AI & IoT Engineer", id: "iot-eng", videoId: "whqLvigQWoE", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
    { title: "InternX-Drone & Automation Engineer", id: "drone-eng", videoId: "4XO3g7Rfamk", image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800" },
  ],
  "Future Tech": [
    { title: "InternX-Humanoid Robotics Engineer", id: "humanoid", videoId: "vViMFjvVT9E", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800" },
    { title: "InternX-Smart Mobility Engineer", id: "mobility", videoId: "kriafQfqGZE", image: "https://images.unsplash.com/photo-1558444479-c8f01052478d?auto=format&fit=crop&q=80&w=800" },
    { title: "InternX-XR & AI Developer", id: "xr-ai", videoId: "4XO3g7Rfamk", image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80&w=800" },
  ]
};

const ALL_TAB = "All Internships";

export default function CourseGrid() {
  const [activeTab, setActiveTab] = useState<string>(ALL_TAB);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const tabs = useMemo(() => [ALL_TAB, ...Object.keys(allInternships)], []);

  const displayedCourses = useMemo(() => {
    if (activeTab === ALL_TAB) {
      return Object.values(allInternships).flat();
    }
    return allInternships[activeTab as keyof typeof allInternships] || [];
  }, [activeTab]);

  return (
    <section className="py-12 md:py-24 bg-[#020617] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-0 sm:px-2 lg:px-2">
        
        <div className="text-center mb-10 md:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tighter uppercase leading-tight">
            Explore All <span className="text-blue-500 italic block sm:inline">InternX Programs</span>
          </h2>
          
          <div className="relative w-full mt-8">
            <div className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar gap-2 sm:gap-3 pb-6 px-4 scroll-smooth">
              {tabs.map((tab) => (
                <button 
                  key={tab} 
                  onClick={() => setActiveTab(tab)}
                  className={`flex-shrink-0 px-5 py-2.5 rounded-full text-[10px] sm:text-[8px] font-black uppercase tracking-widest transition-all duration-300 border whitespace-nowrap ${
                    activeTab === tab 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                    : 'border-white/10 text-slate-400 hover:border-white/30 hover:bg-white/5'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="absolute right-0 top-0 bottom-6 w-12 bg-gradient-to-l from-[#020617] to-transparent pointer-events-none md:hidden" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 px-4 sm:px-0">
          {displayedCourses.map((course, idx) => (
            <article 
              key={`${course.id}-${idx}`} 
              className="group bg-[#0a1229] border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden hover:border-blue-500/50 transition-all duration-500 flex flex-col h-full"
            >
              <div 
                className="relative aspect-[16/9] sm:aspect-[16/10] w-full overflow-hidden cursor-pointer"
                onClick={() => setSelectedVideo(course.videoId)}
              >
                <img 
                  src={course.image} 
                  alt={course.title}
                  loading="lazy" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1229] to-transparent" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-600/90 rounded-full flex items-center justify-center text-white backdrop-blur-sm group-hover:scale-110 transition-all duration-500 shadow-2xl">
                    <Play className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                  </div>
                </div>

                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600/80 backdrop-blur-md text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-tighter border border-white/10">
                    Active
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-black text-white mb-4 leading-tight min-h-[3rem] line-clamp-2 italic uppercase">
                  {course.title}
                </h3>

                <div className="space-y-3 sm:space-y-4 mb-6">
                  <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-500">
                    <span>4-10 MONTHS</span>
                    <span className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-3.5 h-3.5 fill-current" /> 4.9/5
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-400 text-[10px] font-black uppercase">
                    <Users className="w-4 h-4" /> Global Cohort
                  </div>
                </div>

                <div className="mt-auto flex flex-row gap-3">
                  <button className="flex-1 py-3 border border-white/10 rounded-xl text-[9px] font-black uppercase text-slate-300 hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                    <Download className="w-3.5 h-3.5" /> Brochure
                  </button>
                  <button className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-[9px] font-black uppercase text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20">
                    Enroll <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={() => setSelectedVideo(null)} />
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden border border-white/10">
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-2 right-2 z-20 p-2 bg-black/50 rounded-full text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
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