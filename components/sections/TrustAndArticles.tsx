"use client";

import React, { useState } from 'react';

interface Article {
  title: string;
  category: string;
  readTime: string;
  img: string;
}

const TrustAndArticles = () => {
  const myWhatsAppNumber = "918700236923";

  const awards = [
    { img: 'https://quintagroup.com/blog/blog-images/clutch-badge.png/@@images/ddd091dd-4684-4302-ba86-b2931f9078f5.png', text: 'Top AI Development Firm 2019' },
    { img: 'https://www.catalyst2.com/wp-content/uploads/2018/01/Deloitte-fast-50-UK-technology-company.png', text: 'Deloitte Technology Fast 50 Winner' },
    { img: 'https://www.redeagle.tech/img/logo/partner/microsoftpartner-multiline-light.webp?v=F59uTJJDUIM0Wom_OXRUn4OTWKA4fQc8XEp7IYNfPns', text: 'Most Reviewed AI Partner' },
  ];

  const articles: Article[] = [
    { 
      title: 'Autonomous AI Agents: The Shift from SaaS to Agent-as-Service', 
      category: 'AI Strategy',
      readTime: '6 min',
      img: 'https://img.freepik.com/free-photo/robot-working-as-cashier-instead-humans_23-2150911987.jpg'
    },
    { 
      title: 'Optimizing RAG Pipelines for Enterprise-Grade Accuracy', 
      category: 'Technical',
      readTime: '8 min',
      img: 'https://img.freepik.com/free-photo/businessman-working-futuristic-office_23-2151003750.jpg'
    },
    { 
      title: 'Next-Gen SEO: Ranking in the Age of AI Search (SGE)', 
      category: 'Marketing',
      readTime: '5 min',
      img: 'https://img.freepik.com/free-photo/face-recognition-personal-identification-collage_23-2150165610.jpg'
    }
  ];

  const handleArticleClick = (title: string) => {
    const message = encodeURIComponent(`Hi, I'm interested in learning more about: ${title}`);
    window.open(`https://wa.me/${myWhatsAppNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="bg-[#020617] py-16 md:py-24 px-4 sm:px-10 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase">Trusted Excellence</h2>
          <div className="h-1 w-20 bg-red-600 mx-auto" aria-hidden="true"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {awards.map((award, i) => (
            <div key={i} className="flex flex-col items-center p-8 bg-white rounded-3xl border border-gray-900 transition-transform hover:-translate-y-2 duration-300 shadow-xl">
              <img 
                src={award.img} 
                alt={award.text} 
                className="h-16 w-auto object-contain mb-6" 
                loading="lazy"
              />
              <p className="text-black text-center font-bold text-[10px] tracking-widest uppercase">{award.text}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-red-600 font-bold tracking-[0.3em] text-xs uppercase">Knowledge Base</span>
            <h2 className="text-4xl md:text-6xl font-black mt-2">Latest Insights.</h2>
          </div>
          <button className="text-xs font-bold py-3 px-6 border border-gray-800 rounded-full hover:bg-white hover:text-black transition-all uppercase tracking-widest">
            Explore All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, i) => (
            <article 
              key={i} 
              onClick={() => handleArticleClick(art.title)}
              className="group cursor-pointer bg-slate-900/10 border border-gray-900 rounded-[2rem] overflow-hidden hover:border-red-600/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.1)]"
            >
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={art.img} 
                  alt={art.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">
                  {art.category}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between text-gray-500 text-[10px] font-bold uppercase tracking-tighter mb-4">
                  <span>Career Lab Consulting</span>
                  <span>{art.readTime} Read</span>
                </div>
                <h3 className="text-xl font-bold leading-tight group-hover:text-red-500 transition-colors mb-4">
                  {art.title}
                </h3>
                <div className="flex items-center text-red-600 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Read More
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustAndArticles;