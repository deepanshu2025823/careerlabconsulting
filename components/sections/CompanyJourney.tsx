"use client";

import React from 'react';

const steps = [
  { solutions: "45+", logos: ["P&G", "3M", "ESPN", "Hershey's"], tech: ["Web", "iOS", "Android"], height: "h-32" },
  { solutions: "80+", logos: ["Eton", "Budweiser", "Siemens"], tech: ["AWS", "Microservices"], height: "h-40" },
  { solutions: "90+", logos: ["Hawaii Revealed", "Trace RX"], tech: ["DevOps", "Blockchain"], height: "h-48" },
  { solutions: "100+", logos: ["Kinesis", "Oman"], tech: ["AR", "Alexa Skills"], height: "h-56" },
  { solutions: "125+", logos: ["XinFin", "Sight Sciences"], tech: ["Metaverse", "NFT"], height: "h-64" },
  { solutions: "150+", logos: ["Rackspace", "NSG"], tech: ["Web 3", "Generative AI"], height: "h-72" },
  { solutions: "160+", logos: ["Quic", "Regal"], tech: ["Machine Learning"], height: "h-80" },
];

const CompanyJourney = () => {
  return (
    <section className="relative pt-20 bg-[#01040d] overflow-hidden min-h-[900px] flex flex-col justify-center font-sans">
      
      <div className="absolute inset-0 z-0 opacity-40">
        <div 
          className="w-full h-full bg-repeat animate-[move-stars_120s_linear_infinite]"
          style={{ backgroundImage: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/123163/stars.png')", backgroundSize: '700px auto' }}
        ></div>
      </div>

      <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-32 relative">
          <span className="text-blue-500 font-mono text-sm tracking-[0.5em] uppercase mb-4 block animate-pulse">
            Evolution Timeline
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">COSMIC</span> JOURNEY
          </h2>
          <div className="mt-6 flex justify-center items-center gap-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-blue-500"></div>
            <p className="text-gray-400 text-sm max-w-md font-light tracking-wide italic">
              Pushing the boundaries of digital space since day one
            </p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-blue-500"></div>
          </div>
        </div>

        <div className="flex items-end justify-between min-h-[550px] relative pt-20 overflow-x-auto lg:overflow-x-visible pb-10 scrollbar-hide">
          
          {steps.map((step, index) => (
            <div key={index} className="flex-1 min-w-[150px] flex flex-col items-center group relative">
              
              <div className="mb-10 flex flex-col items-center space-y-2 opacity-50 group-hover:opacity-100 transform group-hover:-translate-y-4 transition-all duration-500">
                {step.tech.map((t, i) => (
                  <span key={i} className="text-[9px] font-bold uppercase tracking-widest text-cyan-300 bg-blue-900/20 border border-cyan-500/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mb-8 flex flex-col items-center justify-end h-32 space-y-6">
                {step.logos.map((logo, i) => (
                  <div key={i} className="text-[11px] font-extrabold text-gray-500 group-hover:text-blue-200 transition-all duration-300 tracking-wider uppercase">
                    {logo}
                  </div>
                ))}
              </div>

              <div className={`w-full relative transition-all duration-1000 ${step.height} 
                flex flex-col items-center justify-end pb-10
                bg-gradient-to-t from-blue-900/90 via-blue-700 to-blue-500
                shadow-[0_-10px_30px_-5px_rgba(37,99,235,0.3)]
                group-hover:shadow-[0_-20px_50px_-10px_rgba(59,130,246,0.6)]
                group-hover:scale-[1.02] origin-bottom
                border-t border-blue-400/50
                `}>
                
                <div className="absolute -top-2.5 w-5 h-5 bg-white rounded-full shadow-[0_0_20px_#22d3ee,0_0_40px_#22d3ee] flex items-center justify-center">
                   <div className="w-2 h-2 bg-cyan-500 rounded-full animate-ping"></div>
                </div>
                
                <div className="text-white text-center z-10 px-2 pointer-events-none">
                  <p className="text-3xl font-black tracking-tighter drop-shadow-lg">{step.solutions}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100 opacity-80">Digital Solutions</p>
                </div>

                <div className="absolute top-4 right-2 w-[2px] h-12 bg-gradient-to-b from-white/20 to-transparent"></div>
              </div>
              
              <div className="w-full h-3 bg-blue-950/80 border-t border-blue-500/30"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes move-stars {
          from { background-position: 0 0; }
          to { background-position: -800px -800px; }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default CompanyJourney;