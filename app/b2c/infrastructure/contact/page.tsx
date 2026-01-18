'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Globe, Send, 
  MessageSquare, Clock, ArrowRight, ShieldCheck 
} from 'lucide-react';
import B2CHeader from '@/components/b2c/B2CHeader';
import Footer from '@/components/b2c/Footer';

export default function ContactPage() {
  const MAP_SRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.662988882718!2d77.0623762!3d28.4896943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5b02b6f908d%3A0x3f9da383c70066be!2sCareer%20Lab%20Consulting%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1768710425552!5m2!1sen!2sin";

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col selection:bg-blue-500/30">
      <B2CHeader />

      <main className="flex-grow pt-32 pb-20">
        <section className="px-4 max-w-7xl mx-auto text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <MessageSquare size={14} /> Get In Touch
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none mb-6">
            Let's Talk <span className="text-blue-500 font-outline-2">Career.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have questions about our protocols or placement support? Our career experts are here to help you navigate your journey.
          </p>
        </section>

        <section className="px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 bg-white/[0.02] border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 italic uppercase">
              Send a <span className="text-blue-500 underline decoration-2 underline-offset-8">Message</span>
            </h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-500 ml-2">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-all text-white placeholder:text-slate-600" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-500 ml-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-all text-white placeholder:text-slate-600" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-500 ml-2">Interested Protocol (Course)</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-all text-white appearance-none">
                  <option className="bg-slate-900">Data Analytics Protocol</option>
                  <option className="bg-slate-900">Full Stack Engineering</option>
                  <option className="bg-slate-900">Cyber Security</option>
                  <option className="bg-slate-900">Other Inquiries</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-500 ml-2">Your Message</label>
                <textarea rows={4} placeholder="How can we help you?" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-all text-white placeholder:text-slate-600 resize-none"></textarea>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.01] active:scale-95 shadow-xl shadow-blue-600/20 uppercase tracking-widest">
                Submit Inquiry <Send size={18} />
              </button>

              <p className="text-center text-slate-500 text-xs flex items-center justify-center gap-2">
                <ShieldCheck size={14} className="text-emerald-500" /> Your data is secured and encrypted.
              </p>
            </form>
          </motion.div>

          <div className="lg:col-span-5 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid grid-cols-1 gap-4"
            >
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl flex items-start gap-5 hover:bg-white/[0.08] transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase text-slate-400 mb-1">Our Headquarters</h4>
                  <p className="text-sm text-slate-200 leading-relaxed font-medium">
                    5th Floor, Cyber Green Part-1, DLF Building No -2, Sector 25, Gurugram, Haryana 122002
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-[32px] space-y-6">
                <a href="tel:08700236923" className="flex items-center gap-4 text-slate-300 hover:text-blue-500 transition-colors group">
                  <Phone size={20} className="text-blue-500" />
                  <span className="font-bold">08700236923</span>
                  <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-all" />
                </a>
                <a href="mailto:support@careerlabconsulting.com" className="flex items-center gap-4 text-slate-300 hover:text-blue-500 transition-colors group">
                  <Mail size={20} className="text-blue-500" />
                  <span className="font-bold">support@careerlabconsulting.com</span>
                  <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-all" />
                </a>
                <a href="https://careerlabconsulting.com/" target="_blank" className="flex items-center gap-4 text-slate-300 hover:text-blue-500 transition-colors group">
                  <Globe size={20} className="text-blue-500" />
                  <span className="font-bold">careerlabconsulting.com</span>
                  <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              </div>

              <div className="bg-blue-600/10 border border-blue-500/20 p-6 rounded-3xl flex items-center gap-4">
                <Clock className="text-blue-400" />
                <div className="text-xs font-bold text-blue-100">
                  OFFICE HOURS: MON - SAT (10:00 AM - 7:00 PM)
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[40px] overflow-hidden border border-white/10 h-[300px] shadow-2xl relative group"
            >
              <iframe 
                src={MAP_SRC} 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8)' }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 bg-blue-500/10 pointer-events-none group-hover:bg-transparent transition-all" />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}