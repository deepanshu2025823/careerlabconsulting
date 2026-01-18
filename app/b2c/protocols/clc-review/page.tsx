'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Phone, Globe, MessageSquare, ExternalLink, ArrowRight } from 'lucide-react';
import B2CHeader from '@/components/b2c/B2CHeader';
import Footer from '@/components/b2c/Footer';

// Real GMB Reviews from the screenshot
const reviews = [
  {
    id: 1,
    name: "Manish GUPTA",
    rating: 5,
    date: "3 weeks ago",
    text: "I joined InternX with the hope of upgrading my skills and getting proper career guidance. The training was well structured and focused on industry-relevant skills. The combination of theory and hands-on sessions was highly effective.",
    initial: "M",
    color: "bg-orange-600"
  },
  {
    id: 2,
    name: "Dushyant Singh",
    rating: 5,
    date: "1 month ago",
    text: "Very nice Infrastructure and Supportive Staff. The trainers are highly experienced and provide personalized attention to every student. It's the best place for career consulting in Gurugram.",
    initial: "D",
    color: "bg-blue-600"
  },
  {
    id: 3,
    name: "Sandeep Kumar",
    rating: 5,
    date: "2 months ago",
    text: "Excellent learning environment. The placement support is outstanding and they actually help you prepare for real-world interviews. Highly recommended for anyone looking to transition into Data Science.",
    initial: "S",
    color: "bg-emerald-600"
  },
  {
    id: 4,
    name: "Priya Sharma",
    rating: 5,
    date: "3 months ago",
    text: "The best part about Career Lab Consulting is their practical approach. The projects we worked on were very challenging and helped me understand the concepts deeply. Professional and dedicated team.",
    initial: "P",
    color: "bg-purple-600"
  }
];

export default function CLCReviewPage() {
  const GMB_REVIEW_URL = "https://www.google.com/search?q=career+lab+consulting#lrd=0x390ce5b02b6f908d:0x3f9da383c70066be,3,,,";
  const MAP_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.35338661642!2d77.0863260755025!3d28.49896027574046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5b02b6f908d%3A0x3f9da383c70066be!2sCareer%20Lab%20Consulting!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <div className="min-h-screen bg-[#020617] flex flex-col selection:bg-blue-500/30">
      <B2CHeader />

      <main className="flex-grow pt-24 pb-16 relative">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/5 blur-[120px] pointer-events-none" />

        {/* Hero Section */}
        <section className="px-4 max-w-7xl mx-auto text-center mb-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-6"
          >
            <Star size={16} className="fill-blue-400" />
            4.9/5 RATING BY 500+ STUDENTS
          </motion.div>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6 uppercase italic leading-none">
            Success Stories <br/> <span className="text-blue-500">From Google</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            Join the elite club of professionals who started their journey with Career Lab Consulting. Real reviews, real results.
          </p>
        </section>

        {/* Content Section */}
        <section className="px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 relative z-10">
          
          {/* Left Column: Fixed Info Card */}
          <div className="lg:col-span-4">
            <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/10 p-8 rounded-[32px] sticky top-28 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                  <MapPin className="text-white" size={28} />
                </div>
                <div>
                    <h3 className="text-xl font-black text-white uppercase italic">Visit Us</h3>
                    <p className="text-blue-500 text-xs font-bold tracking-widest uppercase">Gurugram HQ</p>
                </div>
              </div>
              
              <p className="text-slate-300 text-base leading-relaxed mb-8 font-medium italic">
                5th Floor, Cyber Green Part-1, DLF Building No -2, Sector 25, Gurugram, Haryana 122002
              </p>

              <div className="space-y-4 mb-10">
                <a href="tel:08700236923" className="flex items-center gap-4 text-slate-400 hover:text-white transition-all p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10">
                  <Phone size={18} className="text-blue-500" />
                  <span className="font-bold">08700236923</span>
                </a>
                <a href="https://careerlabconsulting.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-400 hover:text-white transition-all p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10">
                  <Globe size={18} className="text-blue-500" />
                  <span className="font-bold">careerlabconsulting.com</span>
                </a>
              </div>

              <button 
                onClick={() => window.open(GMB_REVIEW_URL, '_blank')}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all uppercase tracking-widest shadow-xl shadow-blue-600/25 active:scale-95"
              >
                Write A Review <ExternalLink size={20} />
              </button>
            </div>
          </div>

          {/* Right Column: Reviews Grid & Map */}
          <div className="lg:col-span-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review) => (
                <motion.div 
                  key={review.id}
                  whileHover={{ y: -8 }}
                  className="bg-white/[0.02] border border-white/10 p-8 rounded-[32px] hover:bg-white/[0.05] transition-all relative group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl ${review.color} flex items-center justify-center text-white text-xl font-black shadow-lg`}>
                        {review.initial}
                      </div>
                      <div>
                        <h4 className="text-white font-black text-sm uppercase tracking-tight">{review.name}</h4>
                        <div className="flex items-center gap-1 mt-1">
                           {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} className="fill-yellow-500 text-yellow-500" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">{review.date}</span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed italic font-medium">
                    "{review.text}"
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Map Integration */}
            <div className="rounded-[40px] overflow-hidden border border-white/10 h-[450px] relative shadow-2xl">
              <iframe 
                src={MAP_EMBED} 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.2)' }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex justify-between items-center z-20">
                 <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-white font-bold text-xs uppercase tracking-widest">Live from DLF Cyber City</span>
                 </div>
                 <button 
                  onClick={() => window.open('https://maps.app.goo.gl/0', '_blank')}
                  className="text-blue-500 font-bold text-xs flex items-center gap-1 hover:underline"
                 >
                    Get Directions <ArrowRight size={14} />
                 </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="px-4 max-w-6xl mx-auto">
          <div className="bg-blue-600 rounded-[50px] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
             <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase italic">Ready to transform?</h2>
                <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">Your career deserves the best guidance. Check out why we are the #1 choice in Haryana.</p>
                <button 
                  onClick={() => window.open(GMB_REVIEW_URL, '_blank')}
                  className="bg-white text-blue-600 font-black px-12 py-5 rounded-2xl hover:bg-blue-50 transition-all uppercase tracking-widest text-lg shadow-2xl shadow-black/20"
                >
                  Join the success story
                </button>
             </div>
             <MessageSquare className="absolute -top-10 -left-10 w-64 h-64 text-white/10 -rotate-12 pointer-events-none" />
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}