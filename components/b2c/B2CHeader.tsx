'use client';

import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
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

const megaMenuCategories = [
  {
    id: 'ai-data',
    title: 'AI & Data',
    icon: Cpu,
    programs: [
      { name: 'InternX-AI', href: '/internship/internx-ai' },
      { name: 'InternX-Data Engineer', href: '/internship/internx-data-engineer' },
      { name: 'InternX-AI Quality & Safety Engineer', href: '/internship/internx-ai-quality-safety-engineer' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    programs: [{ name: 'InternX-Cloud & AI Engineer', href: '/internship/internx-cloud-ai-engineer' }],
  },
  {
    id: 'cyber',
    title: 'Cybersecurity',
    icon: Shield,
    programs: [{ name: 'InternX-Cyber Security Expert', href: '/internship/internx-cyber-security-expert' }],
  },
  {
    id: 'blockchain',
    title: 'Blockchain & Web3',
    icon: Blocks,
    programs: [{ name: 'InternX-Blockchain Developer', href: '/internship/internx-blockchain-developer' }],
  },
  {
    id: 'product',
    title: 'Product & Growth',
    icon: TrendingUp,
    programs: [
      { name: 'InternX-AI Product Manager', href: '/internship/internx-ai-product-manager' },
      { name: 'InternX-AI Marketing Specialist', href: '/internship/internx-ai-marketing-specialist' },
    ],
  },
  {
    id: 'industry',
    title: 'Industry-Specific AI',
    icon: Building2,
    programs: [
      { name: 'InternX-FinTech AI Specialist', href: '/internship/internx-fintech-ai-specialist' },
      { name: 'InternX-HealthTech AI Specialist', href: '/internship/internx-healthtech-ai-specialist' },
    ],
  },
  {
    id: 'robotics',
    title: 'Robotics & IoT',
    icon: Bot,
    programs: [
      { name: 'InternX-Robotics Engineer', href: '/internship/internx-robotics-engineer' },
      { name: 'InternX-AI & IoT Engineer', href: '/internship/internx-ai-iot-engineer' },
      { name: 'InternX-Drone & Automation Engineer', href: '/internship/internx-drone-automation-engineer' },
    ],
  },
  {
    id: 'future',
    title: 'Advanced Future Tech',
    icon: Rocket,
    programs: [
      { name: 'InternX-Humanoid Robotics Engineer', href: '/internship/internx-humanoid-robotics-engineer' },
      { name: 'InternX-Smart Mobility Engineer', href: '/internship/internx-smart-mobility-engineer' },
      { name: 'InternX-XR & AI Developer', href: '/internship/internx-xr-ai-developer' },
    ],
  },
];

const navLinks = [
  { name: 'Masterclass', href: '/internship/masterclass' },
  { name: 'Alumni', href: '/internship/alumni' },
  { name: 'Research', href: '/internship/research' },
  { name: 'Advisory Council', href: '/internship/advisory-council' },
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
  
  // Ref for click-outside detection
  const navRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const activeCategory = useMemo(() => 
    megaMenuCategories.find(cat => cat.id === activeCategoryId) || megaMenuCategories[0],
    [activeCategoryId]
  );

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsProgramsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus management for search
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setSearchResult(`Our InternX ${searchQuery} program results: Applications are open for the 2026 cohort.`);
      setIsSearching(false);
    }, 600);
  }, [searchQuery]);

  // Keyboard navigation handler for the mega menu
  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 shadow-sm" role="banner">
        <div className="max-w-[1400px] mx-auto px-4 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-10">
            <Link href="/" className="relative block w-[150px] h-[40px]" aria-label="Career Lab Home">
              <Image 
                src="/logo.png" 
                alt="Career Lab Logo" 
                fill
                sizes="150px" // Critical for PageSpeed LCP
                priority 
                className="object-contain"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1" aria-label="Desktop Navigation">
              <div
                ref={navRef}
                className="relative h-20 flex items-center"
                onMouseEnter={() => setIsProgramsOpen(true)}
                onMouseLeave={() => setIsProgramsOpen(false)}
                onFocus={() => setIsProgramsOpen(true)} // Accessibility Fix
                onBlur={(e) => {
                   if (!e.currentTarget.contains(e.relatedTarget)) {
                     setIsProgramsOpen(false);
                   }
                }}
              >
                <button 
                  className="flex items-center gap-2 px-4 py-2 text-[11px] font-black uppercase tracking-widest text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                  aria-expanded={isProgramsOpen}
                  aria-haspopup="true"
                  aria-controls="mega-menu-dropdown"
                  onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                >
                  Internship
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isProgramsOpen ? 'rotate-180' : ''}`} />
                </button>

                {isProgramsOpen && (
                  <div 
                    id="mega-menu-dropdown"
                    className="fixed left-0 right-0 top-20 z-[95] animate-in fade-in slide-in-from-top-2 duration-300"
                  >
                    {/* Backdrop for visual focus */}
                    <div className="absolute inset-0 bg-black/60 h-[calc(100vh-80px)] backdrop-blur-sm" aria-hidden="true" onClick={() => setIsProgramsOpen(false)} />
                    
                    <div className="relative mx-auto w-full max-w-[1200px] bg-[#0b0f1a] border border-white/10 rounded-b-2xl shadow-2xl overflow-hidden">
                      <div className="grid grid-cols-[280px_1fr] min-h-[450px]">
                        
                        {/* Sidebar */}
                        <aside className="bg-[#0a0d16] p-4 border-r border-white/5" aria-label="Program Categories">
                          <h2 className="px-4 mb-4 text-[10px] font-bold text-blue-500 uppercase tracking-widest">Domains</h2>
                          <div role="tablist" aria-orientation="vertical">
                            {megaMenuCategories.map((cat) => {
                              const Icon = cat.icon;
                              const isActive = activeCategoryId === cat.id;
                              return (
                                <button
                                  key={cat.id}
                                  role="tab"
                                  aria-selected={isActive}
                                  aria-controls={`panel-${cat.id}`}
                                  onMouseEnter={() => setActiveCategoryId(cat.id)}
                                  onFocus={() => setActiveCategoryId(cat.id)} // Keyboard Friendly
                                  onClick={() => setActiveCategoryId(cat.id)}
                                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    isActive ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-300 hover:bg-white/5'
                                  }`}
                                >
                                  <Icon className="w-4 h-4" aria-hidden="true" />
                                  <span className="text-sm font-bold">{cat.title}</span>
                                </button>
                              );
                            })}
                          </div>
                        </aside>

                        {/* Content Area */}
                        <div 
                          className="p-8 bg-[#0b0f1a]" 
                          role="tabpanel" 
                          id={`panel-${activeCategory.id}`}
                        >
                          <div className="flex justify-between items-end mb-6">
                            <div>
                              <h3 className="text-blue-400 text-xs font-black uppercase tracking-widest mb-1">{activeCategory.title}</h3>
                              <p className="text-slate-300 text-sm font-medium">Specialized Professional Programs</p>
                            </div>
                            <Link href="/internship/all-programs" className="text-xs font-bold text-white hover:text-blue-400 flex items-center gap-2 focus:outline-none focus:underline">
                              View All <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            {activeCategory.programs.map((p) => (
                              <Link 
                                key={p.name} 
                                href={p.href} 
                                className="group p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-blue-500/50 hover:bg-blue-600/5 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                              >
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
                <Link 
                  key={l.name} 
                  href={l.href} 
                  className="px-4 py-2 text-[11px] font-black uppercase tracking-widest text-slate-300 hover:text-white transition-colors focus:outline-none focus:text-white focus:underline decoration-blue-500 decoration-2 underline-offset-4"
                >
                  {l.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSearchOpen(true)} 
              className="p-2 text-slate-300 hover:text-white transition-transform active:scale-90 focus:outline-none focus:ring-2 focus:ring-white/20 rounded-full"
              aria-label="Open Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link
              href="/internship/login"
              className="hidden md:inline-flex bg-blue-600 hover:bg-blue-500 text-white px-7 py-3 rounded-xl font-black text-[11px] uppercase tracking-widest shadow-lg shadow-blue-600/20 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 focus:ring-offset-black"
            >
              Portal Login
            </Link>

            <button 
              onClick={() => setIsMobileMenuOpen(true)} 
              className="lg:hidden p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              aria-label="Open Mobile Menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-[#0a0a0a] flex flex-col animate-in slide-in-from-right duration-300" role="dialog" aria-modal="true" aria-label="Mobile Menu">
          <div className="p-6 flex justify-between items-center border-b border-white/10 bg-[#0a0a0a]">
             {/* Simple Logo for Mobile to avoid duplicate H1/SEO issues if needed */}
             <div className="relative w-[120px] h-[32px]">
                <Image src="/logo.png" alt="Logo" fill sizes="120px" className="object-contain" />
             </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)} 
              aria-label="Close Mobile Menu"
              className="p-2 text-white/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20 rounded-full"
            >
              <X className="w-7 h-7" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto p-6 space-y-4" aria-label="Mobile Navigation">
            {megaMenuCategories.map((cat) => (
              <details key={cat.id} className="group border border-white/10 rounded-2xl overflow-hidden">
                <summary className="flex justify-between items-center px-5 py-4 cursor-pointer list-none bg-white/[0.02] hover:bg-white/5 transition-colors focus:outline-none focus:bg-white/10">
                  <div className="flex items-center gap-3">
                    <cat.icon className="w-5 h-5 text-blue-500" aria-hidden="true" />
                    <span className="font-bold text-white uppercase text-xs tracking-widest">{cat.title}</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-500 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-4 flex flex-col gap-3 bg-black/50">
                  {cat.programs.map((p) => (
                    <Link 
                      key={p.name} 
                      href={p.href} 
                      onClick={() => setIsMobileMenuOpen(false)} 
                      className="text-sm text-slate-400 hover:text-blue-400 py-2 border-b border-white/5 last:border-0 pl-8 block"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              </details>
            ))}
            <div className="pt-6 grid gap-4 border-t border-white/10 mt-4">
              {navLinks.map((l) => (
                <Link 
                  key={l.name} 
                  href={l.href} 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-lg font-black text-white uppercase tracking-tighter hover:text-blue-500 px-2"
                >
                  {l.name}
                </Link>
              ))}
               <Link
                href="/internship/login"
                onClick={() => setIsMobileMenuOpen(false)} 
                className="mt-4 text-center bg-blue-600 hover:bg-blue-500 text-white px-7 py-4 rounded-xl font-black text-xs uppercase tracking-widest"
              >
                Portal Login
              </Link>
            </div>
          </nav>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div 
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6 animate-in fade-in zoom-in-95 duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Search Programs"
        >
          <button 
            onClick={() => setIsSearchOpen(false)} 
            className="absolute top-8 right-8 text-white/50 hover:text-white p-2 focus:outline-none focus:ring-2 focus:ring-white rounded-full" 
            aria-label="Close Search"
          >
            <X className="w-10 h-10" />
          </button>

          <div className="w-full max-w-3xl text-center">
            <form onSubmit={handleSearch} className="relative mb-12">
              <label htmlFor="search-input" className="sr-only">Search Technology</label>
              <input
                id="search-input"
                ref={searchInputRef}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What technology do you want to master?"
                className="w-full bg-transparent border-b-2 border-white/20 py-6 text-2xl md:text-4xl text-white outline-none focus:border-blue-500 transition-colors placeholder:text-white/10"
                autoComplete="off"
              />
              <button 
                type="submit" 
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full focus:outline-none focus:bg-white/10" 
                aria-label="Perform Search"
              >
                <Sparkles className={`w-10 h-10 ${isSearching ? 'text-blue-500 animate-pulse' : 'text-blue-500/40 hover:text-blue-500'}`} />
              </button>
            </form>

            {searchResult && (
              <div 
                className="p-8 rounded-3xl bg-blue-600/10 border border-blue-500/20 text-left animate-in slide-in-from-bottom-4"
                aria-live="polite"
              >
                <p className="text-xl text-blue-100 font-medium leading-relaxed italic">"{searchResult}"</p>
                <Link 
                  href="/internship/all-programs" 
                  onClick={() => setIsSearchOpen(false)} 
                  className="mt-6 inline-flex items-center gap-2 text-blue-400 font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
                >
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