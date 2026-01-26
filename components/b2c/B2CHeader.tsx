'use client';

import React, { useState, useMemo, useCallback, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronDown,
  Search,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Cpu,
  Cloud,
  Shield,
  Blocks,
  TrendingUp,
  Building2,
  Bot,
  Rocket,
} from 'lucide-react';

// --- DATA (Defined outside to prevent re-creation on render) ---
const megaMenuCategories = [
  {
    id: 'ai-data',
    title: 'AI & Data',
    icon: Cpu,
    programs: [
      { name: 'InternX-AI Developer', href: '/b2c/internx-ai-engineer' },
      { name: 'InternX-Data Engineer', href: '/b2c/internx-data-engineer' },
      { name: 'InternX-AI Quality & Safety Engineer', href: '/b2c/internx-ai-quality-safety-engineer' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    programs: [{ name: 'InternX-Cloud & AI Engineer', href: '/b2c/internx-cloud-ai-engineer' }],
  },
  {
    id: 'cyber',
    title: 'Cybersecurity',
    icon: Shield,
    programs: [{ name: 'InternX-Cyber Security Expert', href: '/b2c/internx-cyber-security-expert' }],
  },
  {
    id: 'blockchain',
    title: 'Blockchain & Web3',
    icon: Blocks,
    programs: [{ name: 'InternX-Blockchain Developer', href: '/b2c/internx-blockchain-developer' }],
  },
  {
    id: 'product',
    title: 'Product & Growth',
    icon: TrendingUp,
    programs: [
      { name: 'InternX-AI Product Manager', href: '/b2c/internx-ai-product-manager' },
      { name: 'InternX-AI Marketing Specialist', href: '/b2c/internx-ai-marketing-specialist' },
    ],
  },
  {
    id: 'industry',
    title: 'Industry-Specific AI',
    icon: Building2,
    programs: [
      { name: 'InternX-FinTech AI Specialist', href: '/b2c/internx-fintech-ai-specialist' },
      { name: 'InternX-HealthTech AI Specialist', href: '/b2c/internx-healthtech-ai-specialist' },
    ],
  },
  {
    id: 'robotics',
    title: 'Robotics & IoT',
    icon: Bot,
    programs: [
      { name: 'InternX-Robotics Engineer', href: '/b2c/internx-robotics-engineer' },
      { name: 'InternX-AI & IoT Engineer', href: '/b2c/internx-ai-iot-engineer' },
      { name: 'InternX-Drone & Automation Engineer', href: '/b2c/internx-drone-automation-engineer' },
    ],
  },
  {
    id: 'future',
    title: 'Advanced Future Tech',
    icon: Rocket,
    programs: [
      { name: 'InternX-Humanoid Robotics Engineer', href: '/b2c/internx-humanoid-robotics-engineer' },
      { name: 'InternX-Smart Mobility Engineer', href: '/b2c/internx-smart-mobility-engineer' },
      { name: 'InternX-XR & AI Developer', href: '/b2c/internx-xr-ai-developer' },
    ],
  },
];

const navLinks = [
  { name: 'Masterclass', href: '/b2c/masterclass' },
  { name: 'Alumni', href: '/b2c/alumni' },
  { name: 'Research', href: '/b2c/research' },
  { name: 'Advisory Council', href: '/b2c/advisory-council' },
  { name: 'Freelancer', href: '#' },
  { name: 'Job Portal', href: '#' },
];

export default function B2CHeader() {
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState(megaMenuCategories[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Optimization: Memoize the active category object
  const activeCategory = useMemo(() => 
    megaMenuCategories.find(cat => cat.id === activeCategoryId) || megaMenuCategories[0],
    [activeCategoryId]
  );

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setIsSearching(true);
    // Mimic API delay
    setTimeout(() => {
      setSearchResult(`Our InternX ${searchQuery} program results: Applications are open for the 2026 cohort.`);
      setIsSearching(false);
    }, 600);
  }, [searchQuery]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10" role="banner">
        <div className="max-w-[1400px] mx-auto px-4 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-10">
            {/* LOGO - Fixed dimensions prevent CLS */}
            <Link href="/" className="relative block w-[150px] h-[40px]" aria-label="Career Lab Home">
              <Image 
                src="/logo.png" 
                alt="Career Lab Logo" 
                width={150} 
                height={40} 
                priority 
                className="object-contain"
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary Navigation">
              <div
                className="relative h-20 flex items-center"
                onMouseEnter={() => setIsProgramsOpen(true)}
                onMouseLeave={() => setIsProgramsOpen(false)}
              >
                <button 
                  className="flex items-center gap-2 px-4 py-2 text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
                  aria-expanded={isProgramsOpen}
                  aria-haspopup="true"
                >
                  Internship
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isProgramsOpen ? 'rotate-180' : ''}`} />
                </button>

                {isProgramsOpen && (
                  <div className="fixed left-0 right-0 top-20 z-[95] animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="absolute inset-0 bg-black/60 h-screen backdrop-blur-sm" aria-hidden="true" />
                    <div className="relative mx-auto w-full max-w-[1200px] bg-[#0b0f1a] border border-white/10 rounded-b-2xl shadow-2xl overflow-hidden">
                      <div className="grid grid-cols-[280px_1fr] min-h-[450px]">
                        
                        {/* CATEGORIES SIDEBAR */}
                        <aside className="bg-[#0a0d16] p-4 border-r border-white/5">
                          <h2 className="px-4 mb-4 text-[10px] font-bold text-blue-500 uppercase tracking-widest">Domains</h2>
                          {megaMenuCategories.map((cat) => {
                            const Icon = cat.icon;
                            return (
                              <button
                                key={cat.id}
                                onMouseEnter={() => setActiveCategoryId(cat.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                                  activeCategoryId === cat.id ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:bg-white/5'
                                }`}
                              >
                                <Icon className="w-4 h-4" />
                                <span className="text-sm font-bold">{cat.title}</span>
                              </button>
                            );
                          })}
                        </aside>

                        {/* PROGRAMS GRID */}
                        <div className="p-8 bg-[#0b0f1a]">
                          <div className="flex justify-between items-end mb-6">
                            <div>
                              <h3 className="text-blue-400 text-xs font-black uppercase tracking-widest mb-1">{activeCategory.title}</h3>
                              <p className="text-slate-400 text-sm font-medium">Specialized Professional Programs</p>
                            </div>
                            <Link href="/b2c/all-programs" className="text-xs font-bold text-white hover:text-blue-400 flex items-center gap-2">
                              View All <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            {activeCategory.programs.map((p) => (
                              <Link key={p.name} href={p.href} className="group p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-blue-500/50 hover:bg-blue-600/5 transition-all">
                                <span className="block text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{p.name}</span>
                                <span className="block text-[10px] text-slate-500 uppercase mt-2 font-bold tracking-tight">Full-Stack Certification</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {navLinks.map((l) => (
                <Link key={l.name} href={l.href} className="px-4 py-2 text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
                  {l.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSearchOpen(true)} 
              className="p-2 text-slate-400 hover:text-white transition-transform active:scale-90"
              aria-label="Search Programs"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link
              href="/b2c/login"
              className="hidden md:inline-flex bg-blue-600 hover:bg-blue-500 text-white px-7 py-3 rounded-xl font-black text-[11px] uppercase tracking-widest shadow-lg shadow-blue-600/20 transition-all active:scale-95"
            >
              Portal Login
            </Link>

            <button 
              onClick={() => setIsMobileMenuOpen(true)} 
              className="lg:hidden p-2 bg-white/5 rounded-lg border border-white/10"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU - Rendered only when needed (Better TBT Score) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-[#0a0a0a] flex flex-col animate-in slide-in-from-right duration-300">
          <div className="p-6 flex justify-between items-center border-b border-white/10 bg-[#0a0a0a]">
            <Image src="/logo.png" alt="Logo" width={120} height={32} />
            <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close Menu">
              <X className="w-7 h-7 text-white" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto p-6 space-y-4" aria-label="Mobile Navigation">
            {megaMenuCategories.map((cat) => (
              <details key={cat.id} className="group border border-white/10 rounded-2xl overflow-hidden">
                <summary className="flex justify-between items-center px-5 py-4 cursor-pointer list-none bg-white/[0.02]">
                  <div className="flex items-center gap-3">
                    <cat.icon className="w-5 h-5 text-blue-500" />
                    <span className="font-bold text-white uppercase text-xs tracking-widest">{cat.title}</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-500 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-4 flex flex-col gap-3 bg-black">
                  {cat.programs.map((p) => (
                    <Link key={p.name} href={p.href} onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-slate-400 hover:text-blue-400 py-2 border-b border-white/5 last:border-0">
                      {p.name}
                    </Link>
                  ))}
                </div>
              </details>
            ))}
            <div className="pt-6 grid gap-4">
              {navLinks.map((l) => (
                <Link key={l.name} href={l.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-black text-white uppercase tracking-tighter hover:text-blue-500">
                  {l.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}

      {/* SEARCH OVERLAY */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6 animate-in fade-in zoom-in-95 duration-200">
          <button onClick={() => setIsSearchOpen(false)} className="absolute top-8 right-8 text-white/50 hover:text-white" aria-label="Close Search">
            <X className="w-10 h-10" />
          </button>

          <div className="w-full max-w-3xl text-center">
            <form onSubmit={handleSearch} className="relative mb-12">
              <input
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What technology do you want to master?"
                className="w-full bg-transparent border-b-2 border-white/20 py-6 text-2xl md:text-4xl text-white outline-none focus:border-blue-500 transition-colors placeholder:text-white/10"
              />
              <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2" aria-label="Perform Search">
                <Sparkles className={`w-10 h-10 ${isSearching ? 'text-blue-500 animate-pulse' : 'text-blue-500/40 hover:text-blue-500'}`} />
              </button>
            </form>

            {searchResult && (
              <div className="p-8 rounded-3xl bg-blue-600/10 border border-blue-500/20 text-left animate-in slide-in-from-bottom-4">
                <p className="text-xl text-blue-100 font-medium leading-relaxed italic">"{searchResult}"</p>
                <Link href="/b2c/all-programs" onClick={() => setIsSearchOpen(false)} className="mt-6 inline-flex items-center gap-2 text-blue-400 font-bold hover:underline">
                  Browse Programs <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}