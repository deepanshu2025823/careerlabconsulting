'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  BarChart3, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  Users, 
  MousePointerClick,
  Sparkles,
  Plus,
  X // Added for Modal Close
} from 'lucide-react';

// Note: Ensure these components exist in your project structure
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function SalesSuitePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  // --- WhatsApp Form Logic ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "918700236923"; 
    // Creating a clean WhatsApp message
    const message = `*New Lead Discovery*%0A%0A` + 
                    `*Name:* ${formData.name}%0A` + 
                    `*Email:* ${formData.email}%0A` + 
                    `*Company:* ${formData.company}%0A%0A` +
                    `Interested in Sales Suite Pro.`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setIsModalOpen(false); // Close modal after redirect
  };

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 selection:bg-blue-500/30 font-sans overflow-x-hidden scroll-smooth">
      <Navbar />

      <main>
        {/* --- Hero Section --- */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />
          
          <div className="max-w-7xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-sm font-medium mb-8 backdrop-blur-sm"
            >
              <Sparkles size={14} className="animate-pulse" />
              <span>New: AI-Powered Sales Forecasting</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]"
            >
              Close Deals Faster with <br /> 
              <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-400 bg-clip-text text-transparent">
                Sales Suite Pro
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-10 leading-relaxed"
            >
              The all-in-one platform to track leads, automate outreach, and scale your revenue. Designed for high-performance sales teams.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button 
                onClick={() => setIsModalOpen(true)} // Opens Modal
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group"
              >
                Start My Free Trial
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl font-bold transition-all"
              >
                Book a Demo
              </button>
            </motion.div>
          </div>
        </section>

        {/* --- Core Features Section --- */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Everything you need to grow</h2>
              <p className="text-slate-400 max-w-xl mx-auto text-lg">Stop juggling 10 different tools. We’ve unified your entire sales stack.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <BarChart3 className="text-blue-400" />,
                  title: "Advanced Analytics",
                  desc: "Visualize your entire sales pipeline with real-time data and predictive modeling."
                },
                {
                  icon: <Users className="text-purple-400" />,
                  title: "CRM Integration",
                  desc: "Sync perfectly with your existing customer data without losing a single lead."
                },
                {
                  icon: <MousePointerClick className="text-emerald-400" />,
                  title: "Smart Automation",
                  desc: "Automate repetitive tasks so your team can focus on actually closing deals."
                }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  variants={fadeIn}
                  initial="initial"
                  whileInView="whileInView"
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-14 h-14 rounded-2xl bg-slate-800/50 flex items-center justify-center mb-8 border border-slate-700 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-lg">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Workflow Section --- */}
        <section className="py-24 px-6 bg-[#03081c]/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Streamline your workflow from <span className="text-blue-500">Lead to Close.</span></h2>
                <div className="space-y-8">
                  {[
                    { step: "01", title: "Capture Leads", desc: "Automatically pull leads from LinkedIn, Email, and your website into one dashboard." },
                    { step: "02", title: "AI Scoring", desc: "Our AI identifies which deals are most likely to close so you know where to focus." },
                    { step: "03", title: "Instant Outreach", desc: "One-click personalized sequences to stay top-of-mind with prospects." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6">
                      <span className="text-4xl font-black text-blue-500/20">{item.step}</span>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                        <p className="text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                
                <div className="relative rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                    alt="Sales Suite Analytics Dashboard"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium text-slate-400">Monthly Revenue Growth</p>
                      <span className="text-emerald-400 text-xs font-bold">+24.5%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '75%' }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-blue-500" 
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- Pricing Section --- */}
        <section id="pricing" className="py-24 px-6 bg-[#03081c]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-6xl font-bold mb-3 tracking-tight text-white">Simple, Transparent Pricing</h2>
              <p className="text-slate-400 text-lg">Flexible plans for teams of all sizes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Entry Plan */}
              <div className="p-10 rounded-[2.5rem] bg-slate-900/50 border border-slate-800 flex flex-col h-full hover:bg-slate-900/80 transition-colors">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Entry</span>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-bold text-white">$49</span>
                  <span className="text-slate-500">/mo</span>
                </div>
                <ul className="space-y-5 mb-10 flex-grow">
                  {['Up to 5 Users', 'Basic Analytics', 'Email Integration', '24/7 Support'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-300 font-medium">
                      <CheckCircle2 size={20} className="text-blue-500 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <button onClick={() => setIsModalOpen(true)} className="w-full py-4 rounded-2xl border border-slate-700 hover:border-slate-500 hover:bg-white/5 transition-all font-bold text-white">Get Started</button>
              </div>

              {/* Growth Plan (Popular) */}
              <div className="p-10 rounded-[2.5rem] bg-blue-600 relative lg:scale-110 shadow-[0_20px_50px_rgba(37,99,235,0.3)] flex flex-col h-full z-10">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-blue-600 px-6 py-1.5 rounded-full text-xs font-black tracking-widest shadow-xl">
                  MOST POPULAR
                </div>
                <span className="text-sm font-bold text-blue-100 uppercase tracking-widest mb-4 opacity-80">Growth</span>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-6xl font-black text-white">$149</span>
                  <span className="text-blue-100/70">/mo</span>
                </div>
                <ul className="space-y-5 mb-10 flex-grow">
                  {['Unlimited Users', 'AI Sales Forecasting', 'Custom Reporting', 'Priority API Access'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white font-semibold">
                      <CheckCircle2 size={22} className="text-blue-200 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <button onClick={() => setIsModalOpen(true)} className="w-full py-5 rounded-2xl bg-white text-blue-600 hover:bg-slate-100 transition-all font-black text-lg shadow-lg">
                  Unlock Full Power
                </button>
              </div>

              {/* Scale Plan */}
              <div className="p-10 rounded-[2.5rem] bg-slate-900/50 border border-slate-800 flex flex-col h-full hover:bg-slate-900/80 transition-colors">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Scale</span>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-bold text-white">Custom</span>
                </div>
                <ul className="space-y-5 mb-10 flex-grow">
                  {['Custom Contracts', 'On-premise Options', 'SSO & Security', 'SLA Guarantee'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-300 font-medium">
                      <CheckCircle2 size={20} className="text-blue-500 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <button onClick={() => setIsModalOpen(true)} className="w-full py-4 rounded-2xl border border-slate-700 hover:border-slate-500 hover:bg-white/5 transition-all font-bold text-white">Contact Sales</button>
              </div>
            </div>
          </div>
        </section>

        {/* --- Testimonials --- */}
        <section className="py-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">Trusted by World-Class Teams</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  name: "Sarah Jenkins", 
                  role: "VP of Sales, TechCorp", 
                  text: "Sales Suite Pro transformed our pipeline visibility. We increased our closing rate by 34% in the first quarter.",
                  img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
                },
                { 
                  name: "Michael Chen", 
                  role: "Founder, ScaleUp", 
                  text: "The AI forecasting is eerily accurate. It's like having a crystal ball for our revenue goals.",
                  img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
                },
                { 
                  name: "Jessica Valli", 
                  role: "Director of Ops, GlobalFlow", 
                  text: "Best CRM integration we've ever used. The automation saves my team 15+ hours every single week.",
                  img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
                }
              ].map((testimonial, i) => (
                <motion.div 
                  key={i}
                  variants={fadeIn}
                  initial="initial"
                  whileInView="whileInView"
                  className="p-8 rounded-3xl bg-slate-900/30 border border-slate-800/50"
                >
                  <div className="flex gap-1 mb-4 text-blue-500">
                    {[...Array(5)].map((_, star) => <Sparkles key={star} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-300 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 border-blue-500/20" />
                    <div>
                      <h4 className="font-bold text-sm text-white">{testimonial.name}</h4>
                      <p className="text-xs text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FAQ Section --- */}
        <section className="py-24 px-6 bg-[#020617]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">Common Questions</h2>
            <div className="space-y-4">
              {[
                { q: "How long does setup take?", a: "Most teams are up and running in less than 30 minutes. Our onboarding wizard handles the data migration for you." },
                { q: "Can I cancel my subscription at any time?", a: "Yes! We offer monthly plans with no long-term contracts. You can cancel or change tiers whenever you need." },
                { q: "Do you offer a free trial?", a: "Absolutely. You can try any plan free for 14 days, no credit card required." }
              ].map((faq, i) => (
                <div key={i} className="rounded-2xl border border-slate-800 overflow-hidden transition-all duration-300">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full p-6 text-left flex justify-between items-center bg-slate-900/20 hover:bg-slate-900/40 transition-colors"
                  >
                    <span className="font-bold text-white">{faq.q}</span>
                    <Plus className={`transition-transform duration-300 text-white ${activeFaq === i ? 'rotate-45 text-blue-500' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-slate-900/10 border-t border-slate-800/50"
                      >
                        <div className="p-6 text-slate-400 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Final CTA Section --- */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              variants={fadeIn}
              initial="initial"
              whileInView="whileInView"
              className="relative p-12 md:p-24 rounded-[3.5rem] bg-blue-600 overflow-hidden text-center"
            >
              <div className="relative z-10">
                <h2 className="text-4xl md:text-7xl font-black mb-8 text-white leading-tight">Ready to crush your <br />sales targets?</h2>
                <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto opacity-90">Join 10,000+ sales professionals using Sales Suite Pro to dominate their market.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <button onClick={() => setIsModalOpen(true)} className="w-full sm:w-auto px-10 py-5 bg-white text-blue-600 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl">
                    Get Started Free
                  </button>
                  <button onClick={() => setIsModalOpen(true)} className="w-full sm:w-auto px-10 py-5 bg-blue-700 text-white border border-blue-500 rounded-2xl font-bold text-xl hover:bg-blue-800 transition-colors">
                    Talk to an Expert
                  </button>
                </div>
              </div>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 blur-[100px] rounded-full" />
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-400/20 blur-[100px] rounded-full" />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* --- WHATSAPP LEAD MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center px-6">
            {/* Dark Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
            />
            
            {/* Modal Card */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="mb-8">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Unlock Sales Suite Pro</h3>
                <p className="text-slate-400">Fill this quickly to start your journey via WhatsApp.</p>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Your Name</label>
                  <input 
                    required
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white"
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Work Email</label>
                  <input 
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Company Name</label>
                  <input 
                    required
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white"
                    placeholder="Your company name"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl mt-4 transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-600/20 group"
                >
                  Submit & Open WhatsApp 
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}