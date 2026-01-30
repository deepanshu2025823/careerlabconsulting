'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script'; 
import B2CHeader from '@/components/b2c/B2CHeader';
import Footer from '@/components/b2c/Footer';
import { 
  Terminal, Database, Activity, Cpu, Bot, Rocket, 
  Shield, Lock, CheckCircle2, XCircle, ChevronRight, 
  Globe, Briefcase, GraduationCap, Layers, Search, 
  Users, Coins, BarChart3, Star, Zap, Code2, 
  Layout, Server, BrainCircuit, Network, Trophy, 
  FileCheck, Medal, Timer, Play, ChevronDown, Plus,
  TrendingUp, Wallet
} from 'lucide-react';

// --- DATA CONSTANTS ---

const foundationSyllabus = [
  {
    month: "Month 1",
    title: "Programming & AI Foundations",
    topics: ["Python Fundamentals & Modular Coding", "Data Structures (Lists, Dicts, Tuples)", "Debugging & Clean Coding Standards", "Git & GitHub Basics"],
    project: "Python Utility & Data Automation Tool",
    icon: <Terminal className="w-6 h-6 text-blue-400" />
  },
  {
    month: "Month 2",
    title: "Data Handling & SQL",
    topics: ["Data Lifecycle in AI Projects", "SQL (Joins, Subqueries, CRUD)", "Python + SQL Integration", "Data Cleaning Pipelines"],
    project: "Analytics-Ready Dataset Pipeline",
    icon: <Database className="w-6 h-6 text-purple-400" />
  },
  {
    month: "Month 3",
    title: "Applied Math & Statistics",
    topics: ["Mean, Median, Variance, Distributions", "Feature Scaling & Normalization", "Bias-Variance Intuition", "Data Leakage Prevention"],
    project: "Insight Generation & Analysis Tool",
    icon: <Activity className="w-6 h-6 text-emerald-400" />
  },
  {
    month: "Month 4",
    title: "Machine Learning Foundations",
    topics: ["Supervised Learning (Regression/Classification)", "Unsupervised Learning Basics", "Model Evaluation Metrics", "Overfitting & Validation Logic"],
    project: "Predictive ML System (Lead Scoring)",
    icon: <Cpu className="w-6 h-6 text-orange-400" />
  },
  {
    month: "Month 5",
    title: "NLP & LLMs (GenAI)",
    topics: ["Tokenization & Vector Basics", "Prompt Engineering (Practical)", "GPT APIs & LLM Workflows", "Intro to RAG (Conceptual)"],
    project: "Chatbot & Content Automation Tool",
    icon: <Bot className="w-6 h-6 text-pink-400" />
  },
  {
    month: "Month 6",
    title: "AI Applications & Deployment",
    topics: ["High-Level AI System Architecture", "APIs using Flask/FastAPI", "Connecting ML/LLMs to Apps", "GitHub Documentation"],
    project: "End-to-End Deployed AI Micro-service",
    icon: <Rocket className="w-6 h-6 text-cyan-400" />
  }
];

const eliteSyllabus = [
  {
    month: "Month 7",
    title: "Advanced ML Engineering",
    topics: ["End-to-end ML Pipeline Design", "Feature Engineering & Validation", "Experiment Tracking", "Model Packaging"],
    project: "Production-Style ML Pipeline (FinTech/D2C)",
    icon: <Layout className="w-6 h-6 text-indigo-400" />
  },
  {
    month: "Month 8",
    title: "MLOps & AI Systems",
    topics: ["CI/CD for ML Workflows", "Model Monitoring & Drift Detection", "Retraining Strategies", "Docker & Containerization"],
    project: "Monitored ML System with Alerts",
    icon: <Server className="w-6 h-6 text-indigo-400" />
  },
  {
    month: "Month 9",
    title: "Deep Learning Engineering",
    topics: ["Neural Network Foundations", "PyTorch Training Loops", "CNN Architectures", "Transfer Learning"],
    project: "Deep Learning Model Deployment (Vision/Text)",
    icon: <BrainCircuit className="w-6 h-6 text-indigo-400" />
  },
  {
    month: "Month 10",
    title: "GenAI Systems & RAG",
    topics: ["Embeddings & Vector Databases", "Retrieval Augmented Generation (RAG)", "Prompt Engineering as a System"],
    project: "Enterprise-Grade RAG Application",
    icon: <Bot className="w-6 h-6 text-indigo-400" />
  },
  {
    month: "Month 11",
    title: "Agentic AI & Multi-Agent Systems",
    topics: ["Agent Architectures (ReAct, Planning)", "LangChain & LangGraph", "Multi-Agent Coordination", "Tool-Using Agents"],
    project: "Multi-Agent AI Workflow Automation",
    icon: <Network className="w-6 h-6 text-indigo-400" />
  },
  {
    month: "Month 12",
    title: "LLMOps & Scaling",
    topics: ["LLM Evaluation & Monitoring", "Cost Optimization & Scaling", "Security & Access Control", "Final Defense"],
    project: "Enterprise AI System Delivery",
    icon: <Globe className="w-6 h-6 text-indigo-400" />
  }
];

const competitors = [
  { feature: "Live Weekend Delivery", internx: true, bootcamps: true, recorded: false },
  { feature: "Real Startup Projects", internx: true, bootcamps: false, recorded: false },
  { feature: "Public GitHub Portfolio", internx: true, bootcamps: "Optional", recorded: false },
  { feature: "ResumeNFT Proof", internx: true, bootcamps: false, recorded: false },
  { feature: "Elite Career Pathway", internx: true, bootcamps: false, recorded: false },
  { feature: "Agentic AI & GenAI Systems", internx: true, bootcamps: "Limited", recorded: false },
  { feature: "Full Ecosystem Access", internx: true, bootcamps: false, recorded: false },
];

const ecosystem = [
  { title: "Products", desc: "AI SaaS Platforms (Sales, Marketing)", icon: <Layers /> },
  { title: "Services", desc: "Enterprise AI & GenAI Solutions", icon: <Briefcase /> },
  { title: "Job Portal", desc: "HireX AI-Focused Hiring Platform", icon: <Search /> },
  { title: "Freelancing", desc: "AI & Tech Project Marketplace", icon: <Globe /> },
  { title: "EdTech", desc: "Foundation → Elite Programs", icon: <GraduationCap /> },
];

const tools = [
  { name: "Python", icon: "🐍" },
  { name: "OpenAI API", icon: "🤖" },
  { name: "LangChain", icon: "🦜" },
  { name: "GitHub", icon: "🐙" },
  { name: "SQL", icon: "🗄️" },
  { name: "Zapier/Make", icon: "⚡" },
  { name: "PyTorch", icon: "🔥" },
  { name: "FastAPI", icon: "🚀" }
];

const gamificationData = [
  {
    id: "quizzes",
    label: "Weekly Quizzes",
    icon: <Timer className="w-5 h-5" />,
    title: "Structured Knowledge Checks",
    desc: "Every weekend session ends with a rapid-fire quiz to cement your Python and AI concepts immediately.",
    stat: "24+ Quizzes",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    video: "https://www.pexels.com/download/video/4487958/" 
  },
  {
    id: "tests",
    label: "Surprise Tests",
    icon: <Zap className="w-5 h-5" />,
    title: "Real-World Readiness",
    desc: "Random pop-quizzes simulating urgent client requirements or bug fixes. Keeps you interview-ready at all times.",
    stat: "Randomized",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    video: "https://www.pexels.com/download/video/6985525/"
  },
  {
    id: "leaderboards",
    label: "Leaderboards",
    icon: <Trophy className="w-5 h-5" />,
    title: "Competitive Ranking",
    desc: "Top performers get featured visibility with our hiring partners. Compete on code quality, not just speed.",
    stat: "Global Rank",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    video: "https://www.pexels.com/download/video/8136082/"
  },
  {
    id: "rewards",
    label: "ResumeNFT",
    icon: <Medal className="w-5 h-5" />,
    title: "Verifiable On-Chain Proof",
    desc: "Unlock permanent proof of your skills. Every module cleared mints a new block on your ResumeNFT.",
    stat: "Blockchain Verified",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    video: "https://www.pexels.com/download/video/7014805/"
  }
];

const faqs = [
  { q: "Is there a job guarantee?", a: "No. We offer 'Performance-Based Hiring'. Elite graduates get unlimited interviews, but selection depends on your skills and the interview." },
  { q: "Is Foundation compulsory for Elite?", a: "Yes. Unless you can pass the direct entry test (reserved for experienced devs), Foundation is the mandatory eligibility layer." },
  { q: "Do I need prior coding experience?", a: "No. Foundation starts from zero (Variables, Loops) and builds you up to building AI apps." },
  { q: "What happens if I fail the Unified Test?", a: "You receive the Foundation certificate but cannot proceed to Elite. You can re-attempt after remediation." },
  { q: "How do the weekend classes work?", a: "Classes are live on Saturday & Sunday. Weekdays (Mon-Fri) are for optional practice sessions and mentor support." }
];

const careerGrowth = [
  { 
    year: "Year 1", 
    role: "Jr. AI Engineer / Data Analyst", 
    ctc: "₹4L - ₹7L", 
    h: "25%", 
    color: "from-slate-600 to-slate-500" 
  },
  { 
    year: "Year 2", 
    role: "AI Engineer / Backend (AI)", 
    ctc: "₹7L - ₹12L", 
    h: "45%", 
    color: "from-blue-900 to-blue-700" 
  },
  { 
    year: "Year 3", 
    role: "Sr. ML Engineer / AI Lead", 
    ctc: "₹12L - ₹18L", 
    h: "65%", 
    color: "from-blue-700 to-blue-500" 
  },
  { 
    year: "Year 5", 
    role: "AI Architect / Product Mgr", 
    ctc: "₹25L+", 
    h: "90%", 
    color: "from-blue-500 to-cyan-400" 
  },
];

const hiringPartners = ["Zapier", "Notion", "Turing", "Freshworks", "Loom", "OutSystems", "HubSpot", "Monday.com"];

export default function InternXAIPage() {
  const [activeTab, setActiveTab] = useState('foundation');
  const [activeGamification, setActiveGamification] = useState(gamificationData[0]);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);

  // --- RAZORPAY HANDLER ---
  const handlePayment = (planName: string, amount: number) => {
    if (typeof window === 'undefined' || !(window as any).Razorpay) {
      alert("Payment gateway failed to load. Please refresh.");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, 
      amount: amount * 100, 
      currency: "INR",
      name: "InternX AI",
      description: `Enrollment for ${planName}`,
      image: "https://careerlabconsulting.com/logo.png",
      handler: function (response: any) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "",
        email: "",
        contact: ""
      },
      theme: {
        color: "#2563EB"
      }
    };

    const rzp1 = new (window as any).Razorpay(options);
    rzp1.open();
  };

  return (
    <div className="bg-[#020617] min-h-screen flex flex-col font-sans text-slate-100">
      <B2CHeader />
      
      {/* Load Razorpay Script */}
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />

      <main className="flex-grow">
        
        {/* --- SECTION 1: HERO & POSITIONING --- */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
          
          <div className="max-w-7xl mx-auto text-center">
            {/* Sub-headline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 animate-in fade-in slide-in-from-bottom-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold tracking-widest uppercase text-blue-400">Foundation → Elite Pathway</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-tight text-white">
              InternX-AI Developer<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Foundation
              </span>
            </h1>

            {/* Supporting Line */}
            <p className="max-w-3xl mx-auto text-slate-300 text-lg md:text-xl leading-relaxed mb-10">
              A 6-month, weekend-only AI program to build <strong>real projects</strong>, 
              earn <strong>ResumeNFT™ proof</strong>, and become eligible for Elite AI roles.
              <span className="block mt-4 text-sm text-slate-500 font-medium tracking-wide">
                PROJECTS → PROOF → INTERVIEWS → ELITE ELIGIBILITY
              </span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#pricing" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20">
                <Rocket className="w-5 h-5" /> Download Full Syllabus
              </Link>
              <Link href="#eligibility" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2">
                <FileCheck className="w-5 h-5" /> Check Elite Eligibility
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-16 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-80">
              {[
                { val: "15,000+", label: "Learners Trained" },
                { val: "27+", label: "Countries" },
                { val: "3,500+", label: "Projects Shipped" },
                { val: "Certifications", label: "Microsoft / IBM / NASSCOM" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-xl md:text-2xl font-black text-white">{stat.val}</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 text-center">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 2: POSITIONING STATEMENT --- */}
        <section className="py-12 bg-blue-950/20 border-y border-white/5">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h2 className="text-2xl md:text-3xl font-black italic text-white/90">
              &quot;Real AI Careers. Built with Projects. Verified with Proof. Hired with Confidence.&quot;
            </h2>
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm font-bold text-slate-400">
              <span className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> No Course Fatigue</span>
              <span className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> No Fake Resumes</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Only Proof-Driven Careers</span>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: WHY IT EXISTS & JOURNEY --- */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-red-500/10 border border-red-500/20 p-8 rounded-2xl mb-8">
                <h3 className="text-red-400 font-black uppercase tracking-widest text-sm mb-4">The Problem</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-slate-300"><XCircle className="w-5 h-5 text-red-500 shrink-0" /> Most learners jump straight into advanced AI and fail.</li>
                  <li className="flex gap-3 text-slate-300"><XCircle className="w-5 h-5 text-red-500 shrink-0" /> Certificates without proof don&apos;t help in hiring.</li>
                  <li className="flex gap-3 text-slate-300"><XCircle className="w-5 h-5 text-red-500 shrink-0" /> Recruiters care about what you&apos;ve built, not watched.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-white">The Foundation Philosophy</h2>
                <p className="text-slate-400 mb-6">Foundation is not the destination. It is the qualification layer for Elite. We start from zero, build fundamentals correctly, and create verifiable proof.</p>
                <div className="p-4 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg">
                  <p className="text-blue-400 font-bold">&quot;Foundation is the eligibility layer. Elite is the acceleration layer.&quot;</p>
                </div>
              </div>
            </div>
            
            {/* Visual Journey Map */}
            <div className="relative border border-white/10 rounded-3xl p-8 bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl">
              <h3 className="text-white font-bold mb-6 text-center border-b border-white/10 pb-4">Full Learning Journey</h3>
              <div className="space-y-6">
                {[
                  { step: "1", text: "Learn AI Fundamentals" },
                  { step: "2", text: "Build Real Projects" },
                  { step: "3", text: "Publish GitHub Portfolio" },
                  { step: "4", text: "Earn ResumeNFT Proof" },
                  { step: "5", text: "Qualify for Elite" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white group-hover:scale-110 transition-transform">{item.step}</div>
                    <div className="h-0.5 flex-1 bg-white/10 group-hover:bg-blue-500/50 transition-colors"></div>
                    <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 4: CLC ECOSYSTEM --- */}
        <section className="py-20 bg-[#03081a] px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">The CLC Ecosystem</h2>
              <p className="text-slate-400">InternX-AI operates inside the full Career Lab Consulting ecosystem, not as a standalone course.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {ecosystem.map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors text-center group">
                  <div className="mx-auto w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 5: SYLLABUS OVERVIEW --- */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center space-x-4 mb-12">
              <button 
                onClick={() => setActiveTab('foundation')}
                className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'foundation' ? 'bg-blue-600 text-white' : 'bg-white/5 text-slate-400 border border-white/10'}`}
              >
                Foundation (Months 1-6)
              </button>
              <button 
                onClick={() => setActiveTab('elite')}
                className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'elite' ? 'bg-purple-600 text-white' : 'bg-white/5 text-slate-400 border border-white/10'}`}
              >
                Elite (Months 7-12)
              </button>
            </div>

            {activeTab === 'foundation' ? (
              <div className="animate-in fade-in slide-in-from-bottom-4">
                 <div className="flex flex-col md:flex-row justify-between items-end mb-8">
                  <div>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">Foundation Syllabus</h2>
                    <p className="text-blue-400 font-bold uppercase tracking-widest mt-2">Weekend-Only • Assessed • Certified</p>
                  </div>
                  <div className="mt-4 md:mt-0 flex flex-col gap-2">
                      <span className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-xs font-bold border border-green-500/20 text-center">
                        Beginner Friendly • No Coding Required
                      </span>
                      <span className="text-[10px] text-slate-500 text-right uppercase">Weekday Sessions: Practice Only (Optional)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {foundationSyllabus.map((mod, i) => (
                    <div key={i} className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all group">
                      <div className="flex justify-between items-start mb-4">
                        <div className="bg-blue-900/20 p-3 rounded-lg text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">{mod.icon}</div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{mod.month}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3 min-h-[56px]">{mod.title}</h3>
                      <ul className="space-y-2 mb-6 min-h-[100px]">
                        {mod.topics.map((t, idx) => (
                          <li key={idx} className="flex gap-2 text-xs text-slate-400">
                            <div className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 shrink-0" /> {t}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t border-white/5 bg-white/5 -mx-6 -mb-6 p-4">
                        <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">Industry Project</p>
                        <p className="text-xs font-bold text-blue-300">{mod.project}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-4">
                 <div className="flex flex-col md:flex-row justify-between items-end mb-8">
                  <div>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Elite Syllabus</h2>
                    <p className="text-purple-400 font-bold uppercase tracking-widest mt-2">Advanced AI Engineering • System Design</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                      <span className="bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-xs font-bold border border-purple-500/20">
                        Selection Based Only • Global Readiness
                      </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {eliteSyllabus.map((mod, i) => (
                    <div key={i} className="bg-[#0b0f1f] border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/60 transition-all group">
                      <div className="flex justify-between items-start mb-4">
                        <div className="bg-purple-900/20 p-3 rounded-lg text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">{mod.icon}</div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{mod.month}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3 min-h-[56px]">{mod.title}</h3>
                      <ul className="space-y-2 mb-6 min-h-[100px]">
                        {mod.topics.map((t, idx) => (
                          <li key={idx} className="flex gap-2 text-xs text-slate-400">
                            <div className="w-1 h-1 bg-purple-500 rounded-full mt-1.5 shrink-0" /> {t}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t border-white/5 bg-purple-900/10 -mx-6 -mb-6 p-4">
                        <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">Enterprise Project</p>
                        <p className="text-xs font-bold text-purple-300">{mod.project}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* --- SECTION 6: TOOLS & TECH STACK --- */}
        <section className="py-12 bg-white/5 border-y border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-center text-sm font-black uppercase tracking-widest text-slate-500 mb-8">Tools You Will Master</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
              {tools.map((tool, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <span className="text-3xl filter drop-shadow-lg">{tool.icon}</span>
                  <span className="text-xs font-bold text-white">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 7: THE UNIFIED TEST / THE GATE --- */}
        <section id="eligibility" className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#020617] to-indigo-950/20">
          <div className="max-w-5xl mx-auto border border-blue-500/30 bg-[#03081a] rounded-3xl p-8 md:p-12 relative z-10 shadow-2xl shadow-blue-900/20">
            <div className="absolute top-0 right-0 p-4">
               <Lock className="w-12 h-12 text-white/5" />
            </div>
            
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">
                The Qualification <span className="text-blue-500">Gate</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Serious learner directly commit to elite. You must pass the <strong>Unified Qualification Test</strong>.
                This ensures outsourcing, copy-pasting, and ChatGPT-only shortcuts do not work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors">
                <Code2 className="w-10 h-10 mx-auto text-blue-400 mb-4" />
                <h4 className="font-bold text-white mb-2">Build from Scratch</h4>
                <p className="text-xs text-slate-400">4-6 hour live practical build. No step-by-step instructions. You build a real AI app.</p>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors">
                <Shield className="w-10 h-10 mx-auto text-purple-400 mb-4" />
                <h4 className="font-bold text-white mb-2">Anti-Cheat Design</h4>
                <p className="text-xs text-slate-400">Randomized datasets and constraints per learner. Group cheating is mathematically impossible.</p>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-green-500/50 transition-colors">
                <Users className="w-10 h-10 mx-auto text-green-400 mb-4" />
                <h4 className="font-bold text-white mb-2">Live Viva Defense</h4>
                <p className="text-xs text-slate-400">If you can&apos;t explain your code logic in the live viva, you fail. Even if the code works.</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-block bg-white/10 px-6 py-3 rounded-xl border border-white/10">
                <p className="font-bold text-white">Outcome: <span className="text-green-400">Pass = Elite Eligible</span> | <span className="text-red-400">Fail = Foundation Certificate Only (Re-Attempt)</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 8: GAMIFIED ASSESSMENT (INTERACTIVE LMS DASHBOARD UI) --- */}
        <section className="py-24 px-6 bg-[#050b24]">
          <div className="max-w-6xl mx-auto">
             <div className="text-center mb-12">
                <div className="inline-flex justify-center p-3 bg-yellow-400/10 rounded-full mb-6 border border-yellow-400/20">
                   <Trophy className="w-8 h-8 text-yellow-400" />
                </div>
                <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-4">Gamified LMS Experience</h2>
                <p className="text-slate-400">Structured assessment. Not gimmicky. Earn your proof step by step.</p>
             </div>

             <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Left: Tab Navigation */}
                <div className="w-full lg:w-1/3 flex flex-col gap-3">
                   {gamificationData.map((item) => (
                      <button 
                        key={item.id}
                        onClick={() => setActiveGamification(item)}
                        className={`text-left p-5 rounded-xl border transition-all duration-300 flex items-center gap-4 ${activeGamification.id === item.id ? 'bg-white/10 border-white/20 shadow-lg' : 'bg-transparent border-transparent hover:bg-white/5'}`}
                      >
                         <div className={`${item.color} p-2 bg-white/5 rounded-lg`}>{item.icon}</div>
                         <div>
                            <span className={`block font-bold text-sm ${activeGamification.id === item.id ? 'text-white' : 'text-slate-400'}`}>{item.label}</span>
                         </div>
                         {activeGamification.id === item.id && <ChevronRight className="ml-auto w-4 h-4 text-white/50" />}
                      </button>
                   ))}
                </div>

                {/* Right: Mock LMS Window & Video */}
                <div className="w-full lg:w-2/3">
                   <div className="bg-[#0f172a] border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl relative">
                      {/* Browser Header Mock */}
                      <div className="bg-[#1e293b] px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                         <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                         </div>
                         <div className="flex-1 text-center">
                            <div className="inline-block bg-[#020617] px-4 py-1 rounded text-[10px] text-slate-400 font-mono">
                               lms.internx.ai/assessments/{activeGamification.id}
                            </div>
                         </div>
                      </div>

                      {/* Video Content Area */}
                      <div className="relative aspect-video bg-black group">
                         <video 
                           key={activeGamification.video} 
                           className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                           src={activeGamification.video}
                           autoPlay
                           loop
                           muted
                           playsInline
                         />
                         
                         {/* Content Overlay */}
                         <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent">
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${activeGamification.bg} ${activeGamification.border} border mb-4 w-fit`}>
                               <span className={`w-2 h-2 rounded-full bg-current ${activeGamification.color}`}></span>
                               <span className={`text-xs font-bold uppercase tracking-wider ${activeGamification.color}`}>{activeGamification.stat}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{activeGamification.title}</h3>
                            <p className="text-slate-300 text-sm max-w-lg mb-4">{activeGamification.desc}</p>
                            
                            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                               SYSTEM ACTIVE • MODULE LOCKED
                            </div>
                         </div>

                         {/* Play Button Overlay (Visual Only) */}
                         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                               <Play className="w-6 h-6 text-white fill-white ml-1" />
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* --- SECTION 9: REAL INDUSTRY TRACKS --- */}
        <section className="py-20 bg-white/5 border-y border-white/5 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-black uppercase mb-8 text-white">Real Industry Domains</h2>
            <p className="text-slate-400 mb-12 max-w-2xl mx-auto">Projects are pre-defined and guided for Foundation. Custom tracks are Elite-only.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
                <Coins className="w-8 h-8 mx-auto text-yellow-400 mb-2" />
                <h4 className="font-bold text-white">FinTech</h4>
                <p className="text-xs text-slate-400 mt-1">Lead Scoring & Fraud</p>
              </div>
              <div className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
                <GraduationCap className="w-8 h-8 mx-auto text-blue-400 mb-2" />
                <h4 className="font-bold text-white">EdTech</h4>
                <p className="text-xs text-slate-400 mt-1">AI Tutors & Content</p>
              </div>
              <div className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
                <Users className="w-8 h-8 mx-auto text-pink-400 mb-2" />
                <h4 className="font-bold text-white">HRTech</h4>
                <p className="text-xs text-slate-400 mt-1">Resume Screening</p>
              </div>
              <div className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
                <Globe className="w-8 h-8 mx-auto text-green-400 mb-2" />
                <h4 className="font-bold text-white">D2C/Retail</h4>
                <p className="text-xs text-slate-400 mt-1">Customer Automation</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 10: COMPETITOR COMPARISON --- */}
        <section className="py-24 px-6 bg-[#03081a]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-center mb-16 text-white">InternX-AI vs The Rest</h2>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-6 text-xs font-black uppercase tracking-widest text-slate-500">Feature</th>
                    <th className="p-6 text-lg font-black uppercase text-blue-400 bg-blue-900/10 border-x border-blue-500/20 text-center">InternX-AI</th>
                    <th className="p-6 text-xs font-black uppercase tracking-widest text-slate-500 text-center">Bootcamps</th>
                    <th className="p-6 text-xs font-black uppercase tracking-widest text-slate-500 text-center">Recorded Courses</th>
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((row, i) => (
                    <tr key={i} className="border-t border-white/5 hover:bg-white/5">
                      <td className="p-6 font-bold text-sm text-white">{row.feature}</td>
                      <td className="p-6 text-center bg-blue-900/5 border-x border-blue-500/10">
                        {row.internx === true ? <CheckCircle2 className="w-6 h-6 text-green-400 mx-auto" /> : <span className="text-white font-bold">{row.internx}</span>}
                      </td>
                      <td className="p-6 text-center">
                        {row.bootcamps === true ? <CheckCircle2 className="w-6 h-6 text-green-400 mx-auto" /> : 
                        row.bootcamps === false ? <XCircle className="w-6 h-6 text-red-500 mx-auto opacity-50" /> : 
                        <span className="text-slate-500 text-xs font-bold">{row.bootcamps}</span>}
                      </td>
                      <td className="p-6 text-center">
                        <XCircle className="w-6 h-6 text-red-500 mx-auto opacity-50" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-slate-500 mt-6 text-sm">Competitor data based on standard industry offerings as of 2025.</p>
          </div>
        </section>

        {/* --- SECTION 11: EARNINGS GRAPH (UPDATED WITH ROLES & CTC) --- */}
        <section className="py-24 px-6 bg-slate-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">Earnings Projection (India)</h2>
              <p className="text-slate-400 mt-4">Typical career progression for AI Engineers with real project experience.</p>
            </div>
            
            <div className="bg-[#020617] p-8 md:p-12 rounded-3xl border border-white/10 relative shadow-2xl">
               <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                  <TrendingUp className="w-32 h-32 text-blue-500" />
               </div>

               <div className="flex flex-col md:flex-row items-end justify-center gap-6 md:gap-8 h-auto md:h-96 relative z-10 pt-10">
                  {/* Bars & Labels Loop */}
                  {careerGrowth.map((item, idx) => (
                     <div key={idx} className="w-full md:w-1/4 h-full flex flex-col justify-end group">
                        
                        {/* The Bar */}
                        <div className="relative flex-grow flex items-end justify-center mb-4">
                           <div 
                              className={`w-16 md:w-24 rounded-t-lg bg-gradient-to-t ${item.color} shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110 relative`}
                              style={{ height: item.h }}
                           >
                              {/* Floating CTC Badge on Top of Bar */}
                              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-blue-950 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-lg flex items-center gap-1 opacity-100 transition-all">
                                 <Wallet className="w-3 h-3" />
                                 {item.ctc}
                              </div>
                           </div>
                        </div>
                        
                        {/* The Labels (Year & Role) */}
                        <div className="text-center border-t border-white/10 pt-4">
                           <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-1">{item.year}</div>
                           <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{item.role}</div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            
            <p className="text-center text-slate-500 text-sm italic mt-8">&quot;AI won&apos;t take your job. Someone trained in Agentic AI will. Be that someone.&quot;</p>
          </div>
        </section>

        {/* --- SECTION 12: PRICING (WITH RAZORPAY) --- */}
        <section id="pricing" className="py-24 px-6 bg-[#03081a]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black uppercase text-white">Program Fees</h2>
              <p className="text-slate-400">Scholarships up to 30% available based on test performance.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Foundation Card */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500/50 transition-all group relative">
                <h3 className="text-2xl font-bold mb-2 text-white">Foundation</h3>
                <p className="text-slate-400 text-sm mb-6">6 Months • Beginner Friendly</p>
                <div className="text-4xl font-black mb-1 text-white">₹1,49,999</div>
                <p className="text-sm text-slate-500 mb-6">or ~$2,000 USD (Global)</p>
                <div className="mb-6 p-3 bg-blue-500/10 rounded-lg text-xs font-bold text-blue-400 text-center">
                   EMI starts at ₹5,208/month (India)
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-green-400" /> Weekend Live Classes</li>
                  <li className="flex gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-green-400" /> Real Industry Projects</li>
                  <li className="flex gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-green-400" /> ResumeNFT Proof</li>
                  <li className="flex gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-green-400" /> Elite Eligibility Test</li>
                </ul>
                <button 
                  onClick={() => handlePayment('Foundation', 149999)}
                  className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-colors shadow-lg shadow-white/10"
                >
                  Apply for Foundation
                </button>
              </div>

              {/* Elite Card */}
              <div className="bg-[#0b0f1f] border border-purple-500/30 rounded-3xl p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase">Career Accelerator</div>
                <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Elite</h3>
                <p className="text-slate-400 text-sm mb-6">12 Months • Full Career Path</p>
                <div className="text-4xl font-black mb-1 text-white">₹2,49,999</div>
                <p className="text-sm text-slate-500 mb-6">or ~$3,000 USD (Global)</p>
                <div className="mb-6 p-3 bg-purple-500/10 rounded-lg text-xs font-bold text-purple-400 text-center">
                   Includes Foundation + Advanced Layer
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-purple-400" /> <strong>Everything in Foundation</strong></li>
                  <li className="flex gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Advanced MLOps & GenAI</li>
                  <li className="flex gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Enterprise-Grade Projects</li>
                  <li className="flex gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Unlimited Interviews</li>
                </ul>
                <button 
                  onClick={() => handlePayment('Elite', 249999)}
                  className="w-full py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/20"
                >
                  Check Elite Eligibility
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 13: FAQ (ACCORDION UI) --- */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black uppercase mb-12 text-center text-white">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div 
                  key={i} 
                  className={`bg-white/5 border rounded-xl overflow-hidden transition-all duration-300 ${activeFaqIndex === i ? 'border-blue-500/50 bg-white/10' : 'border-white/10'}`}
                >
                  <button 
                    onClick={() => setActiveFaqIndex(activeFaqIndex === i ? null : i)}
                    className="w-full flex justify-between items-center p-6 text-left"
                    aria-expanded={activeFaqIndex === i}
                  >
                    <h4 className="font-bold text-white pr-4">{faq.q}</h4>
                    {activeFaqIndex === i ? <ChevronDown className="w-5 h-5 text-blue-400" /> : <Plus className="w-5 h-5 text-slate-500" />}
                  </button>
                  
                  <div 
                    className={`px-6 text-sm text-slate-300 overflow-hidden transition-all duration-300 ease-in-out ${activeFaqIndex === i ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 14: PARTNERS & FINAL CTA --- */}
        <section className="py-12 border-t border-white/5 opacity-50">
          <div className="max-w-7xl mx-auto px-6 overflow-hidden">
              <p className="text-center text-xs uppercase tracking-widest mb-8 text-slate-500">Hiring Partners & Alumni Work At</p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale">
                {hiringPartners.map((p, i) => (
                  <span key={i} className="text-xl font-black text-slate-400">{p}</span>
                ))}
              </div>
          </div>
        </section>

        <section className="py-24 px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 text-white">Start where you belong.<br/>Advance when you&apos;re ready.</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-900/50">
              Start with Foundation
            </button>
            <button className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-bold rounded-xl transition-all">
              Book Free Career Call
            </button>
          </div>
          <p className="mt-6 text-slate-500 text-sm">Elite is earned, not enrolled.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}