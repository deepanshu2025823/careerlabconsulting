"use client";

import React, { useState, useEffect } from 'react';

interface Article {
  title: string;
  category: string;
  readTime: string;
  img: string;
  desc: string;
}

const TrustAndArticles = () => {
  const [selectedBlog, setSelectedBlog] = useState<Article | null>(null);
  const [comment, setComment] = useState('');
  const myWhatsAppNumber = "918700236923";

  useEffect(() => {
    if (selectedBlog) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedBlog]);

  const awards = [
    { img: 'https://vstorm.co/app/uploads/2023/11/top_clutch.co_artificial_intelligence_company_2023_award.png', text: 'Top AI Development Firm 2024' },
    { img: 'https://vstorm.co/app/uploads/2024/12/deloitte-logo-square.png', text: 'Deloitte Technology Fast 50 Winner' },
    { img: 'https://vstorm.co/app/uploads/2024/01/top_the_manifest_artificial_intelligence_company_toronto_2023_award.png', text: 'Most Reviewed AI Partner' },
  ];

  const articles: Article[] = [
    { 
      title: 'Autonomous AI Agents: The Shift from SaaS to Agent-as-Service', 
      category: 'AI Strategy',
      readTime: '6 min',
      img: 'https://img.freepik.com/free-photo/robot-working-as-cashier-instead-humans_23-2150911987.jpg',
      desc: `In 2026, the focus has shifted from simple chatbots to Autonomous AI Agents...`
    },
    { 
      title: 'Optimizing RAG Pipelines for Enterprise-Grade Accuracy', 
      category: 'Technical',
      readTime: '8 min',
      img: 'https://img.freepik.com/free-photo/businessman-working-futuristic-office_23-2151003750.jpg',
      desc: `Retrieval-Augmented Generation (RAG) is no longer just about vector databases...`
    },
    { 
      title: 'Next-Gen SEO: Ranking in the Age of AI Search (SGE)', 
      category: 'Marketing',
      readTime: '5 min',
      img: 'https://img.freepik.com/free-photo/face-recognition-personal-identification-collage_23-2150165610.jpg',
      desc: `Traditional SEO is evolving into GEO (Generative Engine Optimization)...`
    }
  ];

  const handleWhatsAppComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim() || !selectedBlog) return;
    
    const message = encodeURIComponent(`*AI Strategy Discussion*\n*Topic:* ${selectedBlog.title}\n*Message:* ${comment}`);
    window.open(`https://wa.me/${myWhatsAppNumber}?text=${message}`, '_blank');
    setComment('');
  };

  return (
    <section className="bg-black py-16 md:py-24 px-6 sm:px-10 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase">Trusted Excellence</h2>
          <div className="h-1 w-20 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {awards.map((award, i) => (
            <div key={i} className="flex flex-col items-center p-8 bg-[#0a0a0a] rounded-3xl border border-gray-900 transition-all hover:border-red-500/50">
              <img src={award.img} alt={award.text} className="h-24 w-auto object-contain mb-6 filter brightness-90" loading="lazy" />
              <p className="text-gray-400 text-center font-bold text-sm tracking-wide uppercase">{award.text}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-red-600 font-bold tracking-[0.3em] text-xs uppercase">Knowledge Base</span>
            <h2 className="text-4xl md:text-6xl font-black mt-2">Latest Insights.</h2>
          </div>
          <button className="text-xs font-bold py-3 px-6 border border-gray-800 rounded-full hover:bg-white hover:text-black transition-all uppercase tracking-widest">
            Explore All ↗
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, i) => (
            <article 
              key={i} 
              onClick={() => setSelectedBlog(art)}
              className="group cursor-pointer bg-[#0a0a0a] border border-gray-900 rounded-[2rem] overflow-hidden hover:scale-[1.02] transition-all duration-500"
            >
              <div className="h-64 relative overflow-hidden">
                <img src={art.img} alt={art.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {art.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between text-gray-500 text-[10px] font-bold uppercase tracking-tighter mb-4">
                  <span>CLC Labs</span>
                  <span>{art.readTime} Read</span>
                </div>
                <h3 className="text-xl font-bold leading-tight group-hover:text-red-500 transition-colors">
                  {art.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedBlog && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/98 backdrop-blur-sm" onClick={() => setSelectedBlog(null)}></div>
          
          <div className="relative bg-[#050505] w-full max-w-4xl h-full max-h-[90vh] overflow-y-auto rounded-[2rem] border border-gray-800 shadow-2xl">
            <div className="w-full h-64 md:h-[400px] relative">
              <img src={selectedBlog.img} className="w-full h-full object-cover" alt="Article Header" />
              <button 
                onClick={() => setSelectedBlog(null)} 
                className="absolute top-6 right-6 bg-white text-black w-10 h-10 rounded-full font-bold flex items-center justify-center hover:bg-red-600 hover:text-white transition-all z-[101]"
              >✕</button>
            </div>

            <div className="p-8 md:p-12 lg:p-16">
              <div className="flex items-center gap-4 mb-6">
                 <span className="w-12 h-[1px] bg-red-600"></span>
                 <span className="text-red-600 font-bold uppercase tracking-widest text-xs">{selectedBlog.category}</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-[1.1]">{selectedBlog.title}</h2>
              
              <div className="grid grid-cols-3 gap-4 mb-10">
                 <div className="p-4 bg-gray-900/40 rounded-xl border border-gray-800 text-center">
                    <p className="text-[9px] text-gray-500 uppercase font-black mb-1">PageSpeed</p>
                    <p className="text-xl font-bold text-green-500">100</p>
                 </div>
                 <div className="p-4 bg-gray-900/40 rounded-xl border border-gray-800 text-center">
                    <p className="text-[9px] text-gray-500 uppercase font-black mb-1">SEO Score</p>
                    <p className="text-xl font-bold text-blue-500">A+</p>
                 </div>
                 <div className="p-4 bg-gray-900/40 rounded-xl border border-gray-800 text-center">
                    <p className="text-[9px] text-gray-500 uppercase font-black mb-1">Privacy</p>
                    <p className="text-xl font-bold">Safe</p>
                 </div>
              </div>

              <div className="text-gray-300 text-lg leading-relaxed space-y-6 mb-12 whitespace-pre-wrap font-light">
                {selectedBlog.desc}
              </div>

              <div className="bg-[#0a0a0a] p-8 rounded-3xl border border-gray-800">
                <h4 className="text-xl font-bold mb-4">Request AI Strategy Session</h4>
                <form onSubmit={handleWhatsAppComment} className="space-y-4">
                  <textarea 
                    className="w-full bg-black border border-gray-800 rounded-xl p-5 text-white focus:outline-none focus:border-red-600 transition-all"
                    rows={3}
                    placeholder="Describe your AI use case..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                  />
                  <button type="submit" className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all">
                    Send to WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TrustAndArticles;