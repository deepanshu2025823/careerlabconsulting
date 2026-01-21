'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Search, Mic, X, Menu, ChevronDown, Zap, Code, Globe, Shield, 
  Headphones, Users, Package, GraduationCap, TrendingUp, Briefcase, 
  Sparkles, Database, Blocks, BarChart, Settings, BookOpen, 
  ShoppingCart, Cpu, Layers, ArrowRight 
} from 'lucide-react';

interface Service {
  title: string;
  description: string;
  category: string;
  keywords: string[];
}

interface MegaMenuItem {
  icon: any;
  title: string;
  description: string;
  href: string;
}

export default function Navbar({ portal = 'B2B' }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Partial<Service>[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  
  const searchRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  const singleSuiteProducts: MegaMenuItem[] = [
    { icon: TrendingUp, title: 'Sales Suite', description: 'CRM & Sales Management', href: '/products/sales-suite' },
    { icon: Sparkles, title: 'Marketing Suite', description: 'Marketing Automation', href: '/products/marketing-suite' },
    { icon: Globe, title: 'AI Website & Content', description: 'Web & Content AI', href: '/products/website-suite' },
    { icon: ShoppingCart, title: 'Finance & Commerce', description: 'Finance & eCommerce', href: '/products/finance-suite' },
    { icon: Users, title: 'People Suite', description: 'HR & Team Management', href: '/products/people-suite' },
    { icon: Headphones, title: 'Support Suite', description: 'Customer Support AI', href: '/products/support-suite' },
    { icon: Zap, title: 'Automation Platform', description: 'Workflow Automation', href: '/products/automation-platform' },
    { icon: BarChart, title: 'Intelligence Suite', description: 'Analytics & Insights', href: '/products/intelligence-suite' },
    { icon: Shield, title: 'Governance Suite', description: 'Compliance & Security', href: '/products/governance-suite' },
    { icon: Package, title: 'Supply Chain Suite', description: 'Logistics & Operations', href: '/products/inventory-suite' },
    { icon: GraduationCap, title: 'Education Suite', description: 'Learning Management', href: '/products/education-suite' },
  ];

  const comboSuiteProducts: MegaMenuItem[] = [
    { icon: Briefcase, title: 'Business Suite', description: 'Sales + Marketing + Website', href: '/products/business-suite' },
    { icon: Settings, title: 'Operations Suite', description: 'People + Finance + Inventory', href: '/products/operations-suite' },
    { icon: TrendingUp, title: 'Growth Suite', description: 'Business + Finance + Support', href: '/products/growth-suite' },
    { icon: Cpu, title: 'Execution Suite', description: 'Automation + Support + Governance', href: '/products/execution-suite' },
  ];

  const servicesMenu: MegaMenuItem[] = [
    { icon: Sparkles, title: 'AI & Digital Consulting', description: 'Strategy, roadmap & AI readiness', href: '/services/consulting' },
    { icon: Cpu, title: 'AI Systems Engineering', description: 'Custom AI, LLM & RAG systems', href: '/services/ai-engineering' },
    { icon: Code, title: 'Intelligent App Dev', description: 'AI-powered web & mobile apps', href: '/services/app-development' },
    { icon: Blocks, title: 'Blockchain & Web3', description: 'Smart contracts & dApps', href: '/services/blockchain' },
    { icon: Shield, title: 'Security & Compliance', description: 'SOC2 + ISO 27001 certified', href: '/services/security' },
    { icon: Database, title: 'Managed AI Operations', description: 'AI/LLM Ops & managed services', href: '/services/managed-ops' },
    { icon: Users, title: 'Dedicated AI Teams', description: 'AI engineers & delivery teams', href: '/services/talent' },
  ];

  const industryItems: MegaMenuItem[] = [
    { icon: TrendingUp, title: 'Finance', description: 'Banking & Fintech Solutions', href: '/industries/finance' },
    { icon: Headphones, title: 'Healthcare', description: 'Medical & Health Tech', href: '/industries/healthcare' },
    { icon: Package, title: 'Manufacturing', description: 'Industrial Automation', href: '/industries/manufacturing' },
    { icon: ShoppingCart, title: 'Retail', description: 'Commerce & Retail Tech', href: '/industries/retail' },
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setSearchQuery(transcript);
          handleSearch(transcript);
          setIsListening(false);
        };
        recognitionRef.current.onerror = () => setIsListening(false);
        recognitionRef.current.onend = () => setIsListening(false);
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) setSearchOpen(false);
      if (!(event.target as HTMLElement).closest('.nav-group')) setActiveDropdown(null);
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const toggleVoiceSearch = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current?.start();
        setIsListening(true);
      } catch (e) { console.error(e); }
    }
  };

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    setIsLoading(true);
    const query_lower = query.toLowerCase();
    
    const allServices: Service[] = [
      { title: 'Sales Suite', description: 'CRM & Sales Management Platform', category: 'Single Suite', keywords: ['sales', 'crm'] },
      { title: 'Marketing Suite', description: 'Marketing Automation Platform', category: 'Single Suite', keywords: ['marketing', 'automation'] },
      { title: 'Business Suite', description: 'Sales + Marketing + Website', category: 'Combo Suite', keywords: ['business', 'flagship'] },
      { title: 'AI Consulting', description: 'AI & Digital Transformation Consulting', category: 'Services', keywords: ['consulting', 'strategy'] },
      { title: 'AI Engineering', description: 'Custom AI & Agentic Systems', category: 'Services', keywords: ['ai', 'llm', 'engineering'] },
    ];

    const matched = allServices.filter(s => 
      s.title.toLowerCase().includes(query_lower) || 
      s.description.toLowerCase().includes(query_lower) ||
      s.keywords.some(k => k.includes(query_lower))
    ).slice(0, 5);

    setTimeout(() => {
      setSearchResults(matched);
      setIsLoading(false);
    }, 300); 
  };

  const ProductsMegaMenu = () => (
    <div 
      className="fixed left-0 top-[80px] w-full bg-[#020617]/95 backdrop-blur-2xl border-t border-slate-800 shadow-2xl z-[80] animate-in fade-in slide-in-from-top-2 duration-200"
      onMouseEnter={() => setActiveDropdown('Products')}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 max-h-[calc(100vh-5rem)] overflow-y-auto custom-scrollbar">
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-2 mb-6 pb-2 border-b border-white/5">
              <Layers className="w-4 h-4 text-blue-400" />
              <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest">Single Suite Products</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {singleSuiteProducts.map((item, idx) => (
                <a key={idx} href={item.href} className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all">
                  <div className="p-2.5 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200 group-hover:text-white">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 group-hover:text-slate-400 line-clamp-1">{item.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 flex flex-col h-full">
            
            <div className="mb-8">
                <div className="flex items-center gap-2 mb-6 pb-2 border-b border-white/5">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Combo Suites</h3>
                </div>
                <div className="space-y-2">
                {comboSuiteProducts.map((item, idx) => (
                    <a key={idx} href={item.href} className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all">
                    <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-all shrink-0">
                        <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-slate-200 group-hover:text-white">{item.title}</h4>
                        <p className="text-xs text-slate-500">{item.description}</p>
                    </div>
                    </a>
                ))}
                </div>
            </div>

            <div className="mt-auto p-5 bg-gradient-to-br from-blue-900/40 to-slate-900/40 border border-blue-500/30 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                <Zap className="w-24 h-24 text-white" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-yellow-500/20 rounded-md">
                    <Zap className="w-4 h-4 text-yellow-400" />
                  </div>
                  <h3 className="text-sm font-bold text-white">CLC One – Master Suite</h3>
                </div>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                   The complete All-in-One AI SaaS Platform for total enterprise dominance.
                </p>
                <a href="/products/clc-one" className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-blue-300 transition-colors">
                  Explore CLC One <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );

  const ServicesMegaMenu = () => (
    <div 
      className="fixed left-0 top-[80px] w-full bg-[#020617]/95 backdrop-blur-2xl border-t border-slate-800 shadow-2xl z-[80] animate-in fade-in slide-in-from-top-2 duration-200"
      onMouseEnter={() => setActiveDropdown('Services')}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 max-h-[calc(100vh-5rem)] overflow-y-auto">
        <div className="flex items-center gap-2 mb-8">
            <Code className="w-5 h-5 text-indigo-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Expert Services & Consulting</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesMenu.map((item, idx) => (
            <a key={idx} href={item.href} className="group flex items-start gap-4 p-4 rounded-2xl bg-slate-900/40 hover:bg-slate-800/80 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300">
              <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-lg shadow-indigo-500/5 group-hover:shadow-indigo-500/20 shrink-0">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-slate-100 group-hover:text-white mb-1.5">{item.title}</h4>
                <p className="text-sm text-slate-400 group-hover:text-slate-300 leading-snug">{item.description}</p>
              </div>
            </a>
          ))}
          
          <a href="/contact" className="group flex flex-col justify-center items-center p-4 rounded-2xl border border-dashed border-slate-700 hover:border-indigo-500/50 bg-transparent hover:bg-indigo-900/10 transition-all text-center">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white" />
            </div>
            <h4 className="text-sm font-semibold text-slate-300 group-hover:text-white">View All Services</h4>
            <p className="text-xs text-slate-500 mt-1">Book a strategy call today</p>
          </a>
        </div>
      </div>
    </div>
  );

  const IndustriesDropdown = () => (
    <div 
      className="absolute top-[60px] left-0 w-72 bg-[#0f172a] border border-slate-700 rounded-xl shadow-2xl z-[80] py-2 animate-in fade-in slide-in-from-top-2 duration-200"
      onMouseEnter={() => setActiveDropdown('Industries')}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      {industryItems.map((item, idx) => (
        <a key={idx} href={item.href} className="group flex items-start gap-3 px-4 py-3 hover:bg-white/5 transition-all mx-2 rounded-lg">
          <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
            <item.icon className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-200 group-hover:text-white">{item.title}</h4>
            <p className="text-xs text-slate-500 mt-0.5">{item.description}</p>
          </div>
        </a>
      ))}
    </div>
  );

  return (
    <>
      <nav className="flex justify-between items-center px-4 md:px-8 border-b border-slate-800 sticky top-0 bg-[#020617]/80 backdrop-blur-xl z-[90] h-20">
        <div className="flex items-center gap-10 h-full">
          <a href="/">
            <img src="/logo.png" alt="Logo" width={150} height={20} className="h-8 w-auto" />
          </a>
          
          <div className="hidden xl:flex gap-1 h-full">
            <div className="nav-group h-full flex items-center" onMouseEnter={() => setActiveDropdown('Products')} onMouseLeave={() => setActiveDropdown(null)}>
                <button className={`px-4 py-2 flex items-center gap-1.5 text-sm font-medium transition-colors rounded-full hover:bg-white/5 ${activeDropdown === 'Products' ? 'text-blue-400 bg-white/5' : 'text-slate-300'}`}>
                  Products <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'Products' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'Products' && <ProductsMegaMenu />}
            </div>

            <div className="nav-group h-full flex items-center" onMouseEnter={() => setActiveDropdown('Services')} onMouseLeave={() => setActiveDropdown(null)}>
                <button className={`px-4 py-2 flex items-center gap-1.5 text-sm font-medium transition-colors rounded-full hover:bg-white/5 ${activeDropdown === 'Services' ? 'text-blue-400 bg-white/5' : 'text-slate-300'}`}>
                  Services <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'Services' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'Services' && <ServicesMegaMenu />}
            </div>

            <div className="nav-group h-full flex items-center relative" onMouseEnter={() => setActiveDropdown('Industries')} onMouseLeave={() => setActiveDropdown(null)}>
                <button className={`px-4 py-2 flex items-center gap-1.5 text-sm font-medium transition-colors rounded-full hover:bg-white/5 ${activeDropdown === 'Industries' ? 'text-blue-400 bg-white/5' : 'text-slate-300'}`}>
                  Industries <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'Industries' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'Industries' && <IndustriesDropdown />}
            </div>
            <a href="#" className="h-full flex items-center px-4 text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">Freelance</a>
            <a href="#" className="h-full flex items-center px-4 text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">Job Portal</a>
            <a href="/case-studies" className="h-full flex items-center px-4 text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">Case Studies</a>
            <a href="/insights" className="h-full flex items-center px-4 text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">Insights</a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={() => setSearchOpen(true)} className="p-2.5 rounded-full bg-slate-900/50 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition-all group">
            <Search className="w-5 h-5 text-slate-400 group-hover:text-blue-400" />
          </button>
          <a href={portal === 'B2B' ? '/b2c' : '/b2b'}>
            <button className="hidden sm:block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-blue-900/20 hover:shadow-blue-500/30 hover:scale-105 transition-all">
              {portal === 'B2B' ? 'Get Internship' : 'Enterprise'}
            </button>
          </a>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="xl:hidden p-2 text-slate-300 hover:text-white">
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-20 bg-[#020617] z-[95] overflow-y-auto animate-in slide-in-from-right duration-300">
          <div className="p-6 space-y-1">
            <div className="border-b border-white/5 pb-2">
              <button onClick={() => setMobileDropdown(mobileDropdown === 'Products' ? null : 'Products')} className="w-full flex justify-between items-center text-slate-200 text-lg py-3 font-medium">
                Products <ChevronDown className={`w-5 h-5 transition-transform ${mobileDropdown === 'Products' ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdown === 'Products' && (
                <div className="space-y-1 mt-2 pl-2">
                  <div className="text-xs text-blue-400 font-bold uppercase tracking-wider mb-2 mt-2">Single Suites</div>
                  {singleSuiteProducts.map((item, idx) => (
                    <a key={idx} href={item.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800/50 active:bg-slate-800">
                      <item.icon className="w-5 h-5 text-blue-400" />
                      <div>
                        <div className="text-sm font-medium text-slate-200">{item.title}</div>
                      </div>
                    </a>
                  ))}
                  <div className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-2 mt-6">Combo Suites</div>
                  {comboSuiteProducts.map((item, idx) => (
                    <a key={idx} href={item.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800/50">
                      <item.icon className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="text-sm font-medium text-slate-200">{item.title}</div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-white/5 pb-2">
              <button onClick={() => setMobileDropdown(mobileDropdown === 'Services' ? null : 'Services')} className="w-full flex justify-between items-center text-slate-200 text-lg py-3 font-medium">
                Services <ChevronDown className={`w-5 h-5 transition-transform ${mobileDropdown === 'Services' ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdown === 'Services' && (
                <div className="space-y-1 mt-2 pl-2">
                  {servicesMenu.map((item, idx) => (
                    <a key={idx} href={item.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800/50">
                      <item.icon className="w-5 h-5 text-indigo-400" />
                      <div>
                        <div className="text-sm font-medium text-slate-200">{item.title}</div>
                        <div className="text-xs text-slate-500 line-clamp-1">{item.description}</div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="border-b border-white/5 pb-2">
                <button onClick={() => setMobileDropdown(mobileDropdown === 'Industries' ? null : 'Industries')} className="w-full flex justify-between items-center text-slate-200 text-lg py-3 font-medium">
                  Industries <ChevronDown className={`w-5 h-5 transition-transform ${mobileDropdown === 'Industries' ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdown === 'Industries' && (
                <div className="space-y-1 mt-2 pl-2">
                  {industryItems.map((item, idx) => (
                    <a key={idx} href={item.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800/50">
                      <item.icon className="w-5 h-5 text-indigo-400" />
                      <div>
                        <div className="text-sm font-medium text-slate-200">{item.title}</div>
                        <div className="text-xs text-slate-500 line-clamp-1">{item.description}</div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="#" className="block text-slate-200 text-lg py-4 border-b border-white/5 font-medium">Freelance</a>
            <a href="#" className="block text-slate-200 text-lg py-4 border-b border-white/5 font-medium">Job Portal</a>
            <a href="/case-studies" className="block text-slate-200 text-lg py-4 border-b border-white/5 font-medium">Case Studies</a>
            <a href="/insights" className="block text-slate-200 text-lg py-4 border-b border-white/5 font-medium">Insights</a>
            <div className="pt-6">
                 <a href="/b2c" className="block w-full text-center bg-blue-600 text-white font-bold py-3 rounded-xl">Get Internship</a>
            </div>
          </div>
        </div>
      )}

      {searchOpen && (
        <div className="fixed inset-0 bg-[#020617]/90 backdrop-blur-md z-[200] flex items-start justify-center pt-20 px-4 animate-in fade-in duration-200">
          <div ref={searchRef} className="w-full max-w-2xl bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/10">
            <div className="flex items-center gap-4 p-4 border-b border-white/5">
              <Search className="w-5 h-5 text-slate-500" />
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(e) => {setSearchQuery(e.target.value); handleSearch(e.target.value);}}
                placeholder="Search products, services..."
                className="flex-1 bg-transparent text-white text-lg outline-none placeholder:text-slate-600"
              />
              <button onClick={toggleVoiceSearch} className={`p-2 rounded-full transition-all ${isListening ? 'bg-red-500 animate-pulse text-white' : 'hover:bg-slate-800 text-slate-400'}`}>
                <Mic className="w-5 h-5" />
              </button>
              <button onClick={() => setSearchOpen(false)} className="p-2 hover:bg-slate-800 rounded-full text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
              {isLoading ? (
                <div className="p-12 text-center text-slate-500 flex flex-col items-center gap-3">
                  <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  Searching...
                </div>
              ) : searchResults.length > 0 ? (
                <div className="p-2">
                    {searchResults.map((result, idx) => (
                    <a href="#" key={idx} className="p-4 hover:bg-white/5 rounded-xl transition-all cursor-pointer group flex items-start gap-4 mb-1">
                        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-600 group-hover:text-white mt-1">
                          <Zap className="w-5 h-5" />
                        </div>
                        <div>
                        <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-white font-semibold group-hover:text-blue-400">{result.title}</h4>
                            <span className="text-[10px] px-2 py-0.5 bg-slate-800 text-slate-400 rounded-full border border-slate-700">{result.category}</span>
                        </div>
                        <p className="text-slate-400 text-sm">{result.description}</p>
                        </div>
                    </a>
                    ))}
                </div>
              ) : searchQuery && (
                <div className="p-12 text-center text-slate-600">No results found for "{searchQuery}"</div>
              )}
              {!searchQuery && (
                <div className="p-6">
                  <p className="text-slate-500 text-xs mb-4 uppercase tracking-wider font-bold">Suggested Searches</p>
                  <div className="flex flex-wrap gap-2">
                    {['Sales Suite', 'AI Consulting', 'Business Suite', 'CLC One'].map(t => 
                      <button key={t} onClick={() => {setSearchQuery(t); handleSearch(t);}} className="px-4 py-2 bg-slate-800/50 border border-slate-700 hover:border-blue-500 text-slate-300 rounded-lg text-sm transition-all hover:bg-slate-800 hover:text-white">{t}</button>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="p-3 border-t border-white/5 text-[10px] text-slate-600 text-center uppercase tracking-widest flex justify-center gap-4">
                <span>Press ESC to exit</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}