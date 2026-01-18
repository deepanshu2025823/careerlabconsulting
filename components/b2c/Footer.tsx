'use client';

import React from 'react';
import { 
  Github, Twitter, Linkedin, Mail, ArrowUpRight, 
  Home, Layout, CreditCard, HelpCircle, MapPin, 
  Phone, Navigation, Globe 
} from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "919810984968";

  const locations = [
    {
      country: "Head Quarter (India)",
      address: "5th Floor, Cyber Green Part-1, DLF Building No -2, Sector 25, Gurugram, Haryana 122002",
      phone: "+91 8700236923"
    },
    {
      country: "Branch Office (India)",
      address: "21, Raheja Towers, Mahatma Gandhi Rd, Craig Park Layout, Ashok Nagar, Bengaluru, Karnataka 560001",
      phone: "+91 8700236923"
    },
    {
      country: "USA",
      address: "128 Geary St, San Francisco California 94108, United States",
      phone: "+1 (212) 814-6245"
    },
    {
      country: "United Kingdom",
      address: "2nd Floor, 23 Great Portland Street, London",
      phone: "+44 7888873245"
    },
    {
      country: "Dubai",
      address: "R308 BUILDING - Office-403 - Al Mankhool - Dubai - United Arab Emirates",
      phone: "+971 52 400 9232"
    },
    {
      country: "Singapore",
      address: "TripleOne Somerset, 111 Somerset Road, #04-01, Singapore, 238164",
      phone: "+65 6815 1432"
    },
    {
      country: "South Africa",
      address: "3, Deneb House, 371 Browning Road, Cape Town, Western Cape, 7872, South Africa",
      phone: "+27 8755063412"
    },
    {
      country: "Germany",
      address: "Grünberger Str. 54, 10245 Berlin, Germany",
      phone: "+49 30 51588345"
    }
  ];

  return (
    <>
      <footer className="bg-[#020617] pt-16 pb-24 md:pb-12 border-t border-white/5 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-blue-600/5 blur-[120px] -z-10" />

        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            
            {/* --- LEFT COLUMN --- */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="w-42 h-20 relative mb-4">
                <img 
                  src="/logo.png" 
                  alt="Career Lab Consulting" 
                  className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                />
              </div>
              
              <p className="text-slate-400 text-sm max-w-sm leading-relaxed font-medium mb-8">
                Advancing human potential through neural-integrated learning. Join our elite cohort of engineers shipping the future.
              </p>

              <div className="flex gap-4">
                {[
                  { Icon: Github, href: "https://github.com" },
                  { Icon: Twitter, href: "https://twitter.com" },
                  { Icon: Linkedin, href: "https://linkedin.com" },
                  { Icon: Mail, href: "mailto:support@careerlabconsulting.com" }
                ].map((social, i) => (
                  <Link 
                    key={i} 
                    href={social.href} 
                    target="_blank"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all"
                  >
                    <social.Icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-4">
              <div className="space-y-6">
                <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Protocols</h4>
                <ul className="space-y-4 text-slate-500 text-sm font-bold">
                  <li><Link href="/b2c/protocols/neural-lms" className="hover:text-blue-400 transition-colors flex items-center gap-1 group">Neural LMS <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
                  <li><Link href="/b2c/protocols/outcomes" className="hover:text-blue-400 transition-colors">Career Outcomes</Link></li>
                  <li><Link href="/b2c/protocols/mentorship" className="hover:text-blue-400 transition-colors">Mentorship</Link></li>
                  <li><Link href="/b2c/protocols/verify-certificate" className="hover:text-blue-400 transition-colors">Verify Certificate</Link></li>
                  <li><Link href="/b2c/protocols/clc-review" className="hover:text-blue-400 transition-colors">CLC Review</Link></li>
                </ul>
              </div>

              <div className="space-y-6">
                <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Infrastructure</h4>
                <ul className="space-y-4 text-slate-500 text-sm font-bold">
                  <li><Link href="/b2c/infrastructure/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                  <li><Link href="/b2c/infrastructure/docs" className="hover:text-blue-400 transition-colors">Documentation</Link></li>
                  <li><Link href="/b2c/infrastructure/api" className="hover:text-blue-400 transition-colors">API Access</Link></li>
                  <li><Link href="/b2c/infrastructure/status" className="hover:text-blue-400 transition-colors">System Status</Link></li>
                  <li><Link href="/b2c/infrastructure/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
                </ul>
              </div>

              <div className="space-y-8 col-span-1 sm:col-span-2 md:col-span-1">
                <div className="space-y-4">
                    <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Contact Details</h4>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                            <p className="text-slate-400 text-xs leading-relaxed">5th Floor, Cyber Green Part-1, DLF Building No -2, Sector 25, Gurugram, Haryana 122002</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                            <a href="tel:+918700236923" className="text-slate-400 text-xs hover:text-white transition-colors">+91 8700236923</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                            <a href="mailto:support@careerlabconsulting.com" className="text-slate-400 text-xs hover:text-white transition-colors">support@careerlabconsulting.com</a>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Newsletter</h4>
                    <div className="relative w-full group">
                    <input 
                        type="email" 
                        placeholder="uplink@email.com" 
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 text-xs text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-slate-600"
                    />
                    <button className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-[9px] font-black uppercase tracking-widest transition-all">
                        Join
                    </button>
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
              <Globe className="w-5 h-5 text-blue-500" />
              <h3 className="text-white font-bold text-lg tracking-wide uppercase text-[12px]">Global Presence</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {locations.map((loc, idx) => (
                <div 
                  key={idx} 
                  className="group relative bg-[#0a0f1d]/50 hover:bg-blue-600/5 border border-white/5 hover:border-blue-500/30 rounded-2xl p-6 transition-all duration-500 flex flex-col justify-between h-full backdrop-blur-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-blue-400 font-bold text-[10px] uppercase tracking-widest">{loc.country}</span>
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                        <MapPin className="w-4 h-4 text-slate-500 group-hover:text-blue-400" />
                      </div>
                    </div>
                    
                    <p className="text-slate-400 text-xs leading-relaxed mb-6 min-h-[48px]">
                      {loc.address}
                    </p>
                    
                    <div className="flex items-center gap-2 text-slate-500 text-[11px] mb-6 font-medium">
                      <Phone className="w-3.5 h-3.5 text-blue-500/50" />
                      <span>{loc.phone}</span>
                    </div>
                  </div>

                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border border-white/5 hover:border-transparent group-hover:shadow-[0_0_20px_rgba(37,99,235,0.2)]"
                  >
                    <Navigation className="w-3 h-3" />
                    Get Directions
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">© 2015 - {new Date().getFullYear()} Career Lab Consulting</span>
              <div className="h-1 w-1 rounded-full bg-slate-800 hidden md:block" />
              <Link href="/privacy" className="text-[10px] text-slate-600 font-bold uppercase tracking-widest hover:text-slate-400 transition-colors">Privacy Policy</Link>
            </div>

            <div className="flex items-center gap-3 px-4 py-2 bg-emerald-500/5 border border-emerald-500/10 rounded-full">
              <div className="relative">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping absolute" />
                <div className="w-2 h-2 bg-emerald-500 rounded-full relative" />
              </div>
              <span className="text-[10px] text-emerald-500/80 font-black uppercase tracking-widest">Core Systems: Operational</span>
            </div>
          </div>
        </div>
      </footer>

      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md h-16 bg-[#0a0f1d]/90 backdrop-blur-xl border border-white/10 rounded-3xl z-[100] md:hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-around px-2">
        <Link href="/" className="flex flex-col items-center gap-1 text-slate-500 hover:text-blue-400 transition-colors">
          <Home className="w-5 h-5" />
          <span className="text-[8px] font-bold uppercase">Home</span>
        </Link>
        <Link href="/b2c/protocols/neural-lms" className="flex flex-col items-center gap-1 text-slate-500 hover:text-blue-400 transition-colors">
          <Layout className="w-5 h-5" />
          <span className="text-[8px] font-bold uppercase">LMS</span>
        </Link>

        <Link 
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          className="relative -top-7 w-16 h-16 bg-[#25D366] rounded-full border-[6px] border-[#020617] flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.123.544 4.197 1.583 6.012L0 24l6.117-1.605a11.745 11.745 0 005.925 1.603h.005c6.635 0 12.028-5.391 12.032-12.027a11.812 11.812 0 00-3.476-8.513z"/>
          </svg>
        </Link>

        <Link href="/b2c/plans" className="flex flex-col items-center gap-1 text-slate-500 hover:text-blue-400 transition-colors">
          <CreditCard className="w-5 h-5" />
          <span className="text-[8px] font-bold uppercase">Plans</span>
        </Link>
        <Link href="/support" className="flex flex-col items-center gap-1 text-slate-500 hover:text-blue-400 transition-colors">
          <HelpCircle className="w-5 h-5" />
          <span className="text-[8px] font-bold uppercase">Support</span>
        </Link>
      </nav>
    </>
  );
}