'use client';

import React, { useState, useEffect } from 'react';
import { Check, Zap, Crown, Terminal, ShieldCheck, Sparkles, Rocket, X, QrCode, MessageCircle, Loader2, LucideIcon, Globe } from 'lucide-react';

interface Tier {
  id: string;
  name: string;
  priceINR: string;
  rawPriceINR: string;
  priceUSD: string;
  rawPriceUSD: string;
  description: string;
  features: string[];
  cta: string;
  highlight: boolean;
  icon: LucideIcon;
}

interface SelectedPlan extends Tier {
  upiLink: string;
}

const tiers: Tier[] = [
  {
    id: "plan-essential",
    name: "Essential",
    priceINR: "₹50,000",
    rawPriceINR: "50000",
    priceUSD: "$599",
    rawPriceUSD: "599",
    description: "Build & Own Your First AI Career Asset. Best for first-time AI learners.",
    features: ["1 Real AI Project", "ResumeNFT + GitHub Proof", "Group Mentorship", "Avg CTC: ₹10-12 LPA"],
    cta: "Enroll Now",
    highlight: false,
    icon: Terminal
  },
  {
    id: "plan-accelerator",
    name: "Accelerator",
    priceINR: "₹75,000",
    rawPriceINR: "75000",
    priceUSD: "$899",
    rawPriceUSD: "899",
    description: "Mentored Growth with AI Proof. Best for career switchers.",
    features: ["2 Real AI Projects", "1-on-1 Mentorship", "Mock Interviews", "Avg CTC: ₹15-20 LPA"],
    cta: "Enroll Now",
    highlight: false,
    icon: Rocket
  },
  {
    id: "plan-elite",
    name: "Elite",
    priceINR: "₹1,00,000",
    rawPriceINR: "100000",
    priceUSD: "$1,199",
    rawPriceUSD: "1199",
    description: "Job Guaranteed. Globally Hired. Best for international roles.",
    features: ["100% Job Guarantee", "3 Real AI Projects", "Weekly 1-on-1", "Avg CTC: ₹30-50 LPA"],
    cta: "Enroll Now",
    highlight: true,
    icon: Crown
  }
];

export default function PricingSection() {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [showQR, setShowQR] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<SelectedPlan | null>(null);
  const [isProcessing, setIsProcessing] = useState(true); 
  
  const vpa = "mr.deepanshujoshi@okicici";
  const ownerPhone = "918700236923";

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = showQR ? 'hidden' : 'unset';
    }
    
    let timer: ReturnType<typeof setTimeout> | undefined;

    if (showQR) {
      setIsProcessing(true);
      timer = setTimeout(() => {
        setIsProcessing(false);
      }, 10000); 
    }

    return () => {
      if (typeof document !== 'undefined') document.body.style.overflow = 'unset';
      if (timer) clearTimeout(timer);
    };
  }, [showQR]);

  const handlePayment = (tier: Tier) => {
    if (currency === 'USD') {
        // Logic for International users (e.g., redirect to Stripe or WhatsApp for invoice)
        const message = `Hello InternX AI Team,\n\nI want to enroll in the *${tier.name}* plan (${tier.priceUSD}). I am an international student. Please guide me with the payment link.`;
        window.open(`https://wa.me/${ownerPhone}?text=${encodeURIComponent(message)}`, '_blank');
        return;
    }

    const name = "InternX AI";
    const note = `Enrollment for ${tier.name}`;
    const upiLink = `upi://pay?pa=${vpa}&pn=${encodeURIComponent(name)}&am=${tier.rawPriceINR}&cu=INR&tn=${encodeURIComponent(note)}`;

    if (typeof window !== 'undefined') {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = upiLink;
      }
      setSelectedPlan({ ...tier, upiLink });
      setShowQR(true);
    }
  };

  const confirmOnWhatsApp = () => {
    if (!selectedPlan) return;
    const priceText = currency === 'INR' ? selectedPlan.priceINR : selectedPlan.priceUSD;
    const message = `Hello InternX AI Team,\n\nI have completed the payment for the *${selectedPlan.name}* (${priceText}).\n\nPlease verify my enrollment.\n\nThank you!`;
    const whatsappUrl = `https://wa.me/${ownerPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 md:py-32 bg-[#020617] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Sparkles className="w-3 h-3 text-blue-400" />
            <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest">InternX-AI Protocols</span>
          </div>
          <h2 className="text-3xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase leading-tight">
            Start Your <span className="italic text-slate-500 font-serif">Evolution</span>
          </h2>

          {/* CURRENCY SWITCHER */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-xs font-bold ${currency === 'INR' ? 'text-white' : 'text-slate-500'}`}>INR</span>
            <button 
                onClick={() => setCurrency(currency === 'INR' ? 'USD' : 'INR')}
                className="w-14 h-7 bg-white/5 border border-white/10 rounded-full relative p-1 transition-all"
            >
                <div className={`w-5 h-5 bg-blue-500 rounded-full transition-all duration-300 transform ${currency === 'USD' ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>
            <span className={`text-xs font-bold ${currency === 'USD' ? 'text-white' : 'text-slate-500'}`}>USD</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div key={tier.id} className={`relative p-8 md:p-10 rounded-[2.5rem] border flex flex-col transition-all duration-500 ${tier.highlight ? 'bg-[#0a1229] border-blue-500 shadow-2xl shadow-blue-500/20 lg:scale-105 z-20' : 'bg-white/[0.02] border-white/10 hover:border-white/20'}`}>
              <div className="mb-8">
                <tier.icon className={`w-12 h-12 mb-6 ${tier.highlight ? 'text-blue-400' : 'text-slate-500'}`} />
                <h3 className="text-2xl font-black text-white mb-2 uppercase">{tier.name}</h3>
                <p className="text-4xl font-black text-white tracking-tight">
                    {currency === 'INR' ? tier.priceINR : tier.priceUSD}
                </p>
                <p className="text-slate-500 text-xs mt-4 leading-relaxed">{tier.description}</p>
              </div>

              <div className="space-y-4 mb-10 flex-1 border-t border-white/5 pt-6">
                {tier.features.map((feature) => (
                  <div key={`${tier.id}-${feature}`} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span className="text-slate-300 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                type="button"
                onClick={() => handlePayment(tier)}
                className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-2 transition-all active:scale-95 ${tier.highlight ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}`}
              >
                {currency === 'INR' ? 'Enroll via UPI' : 'Enroll Internationally'} <Zap className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* UPI QR Modal (Only for INR) */}
      {showQR && selectedPlan && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={() => setShowQR(false)} />
          
          <div className="relative bg-[#0f172a] border border-blue-500/30 p-8 rounded-[2.5rem] max-w-md w-full text-center shadow-2xl">
            <button 
              type="button"
              onClick={() => setShowQR(false)} 
              className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors p-2"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-500/20 text-blue-400">
                <QrCode className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">Enrollment Portal</h3>
              <p className="text-slate-400 text-sm mt-2">Plan: <span className="text-white font-bold">{selectedPlan.name}</span></p>
            </div>

            <div className="bg-white p-4 rounded-3xl inline-block mb-6 shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]">
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(selectedPlan.upiLink)}`} 
                alt="Payment QR"
                width={200}
                height={200}
                className="w-48 h-48 block mx-auto"
              />
            </div>

            <div className="min-h-[120px] flex flex-col items-center justify-center">
              {isProcessing ? (
                <div className="flex flex-col items-center gap-3 animate-pulse">
                  <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                  <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest">Waiting for Transaction...</p>
                  <p className="text-slate-500 text-[9px]">Scan the QR and complete payment in your app</p>
                </div>
              ) : (
                <div className="w-full space-y-4">
                  <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-2xl">
                    <div className="flex items-center justify-center gap-2 text-green-400 mb-3">
                      <Check className="w-4 h-4" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Payment Ready to Verify</span>
                    </div>
                    
                    <button 
                      onClick={confirmOnWhatsApp}
                      className="w-full py-4 bg-green-600 hover:bg-green-500 text-white rounded-xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" /> I have paid, Confirm Now
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 flex items-center justify-center gap-4 opacity-50">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              <span className="text-[9px] text-white uppercase font-bold tracking-widest italic">InternX-AI Secure Gateway</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}