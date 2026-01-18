'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mic, MicOff, Volume2, Bot, BrainCircuit, 
  Settings2, User, UserCheck, RefreshCw, Sparkles 
} from 'lucide-react';
import B2CHeader from '@/components/b2c/B2CHeader';
import Footer from '@/components/b2c/Footer';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);

export default function AIVoicePage() {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [status, setStatus] = useState('Idle'); 
  
  // Voice Selection States
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceIndex, setSelectedVoiceIndex] = useState<number>(0);
  const [genderFilter, setGenderFilter] = useState<'all' | 'male' | 'female'>('female');

  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    // Initialize Web Speech API
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = async (event: any) => {
        const text = event.results[0][0].transcript;
        setTranscript(text);
        processWithAI(text);
      };
      recognitionRef.current.onend = () => setIsListening(false);
    }

    // Load Voices
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      // Simple logic to prefer English voices
      const englishVoices = availableVoices.filter(v => v.lang.includes('en'));
      setVoices(englishVoices);
    };

    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
    synthRef.current = window.speechSynthesis;
  }, []);

  // Filter voices based on Gender (approximation based on name)
  const filteredVoices = voices.filter(v => {
    if (genderFilter === 'all') return true;
    const name = v.name.toLowerCase();
    if (genderFilter === 'female') return name.includes('female') || name.includes('samantha') || name.includes('google us english') || name.includes('victoria');
    if (genderFilter === 'male') return name.includes('male') || name.includes('daniel') || name.includes('microsoft david');
    return true;
  });

  const processWithAI = async (userInput: string) => {
    setStatus('Processing');
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `You are an AI Career Expert at Career Lab Consulting (CLC). Keep response under 30 words. Question: ${userInput}`;
      const result = await model.generateContent(prompt);
      const text = result.response.text();
      setAiResponse(text);
      speak(text);
    } catch (error) {
      console.error("AI Error:", error);
      setStatus('Idle');
    }
  };

  const speak = (text: string) => {
    if (!synthRef.current) return;
    setStatus('Speaking');
    setIsSpeaking(true);
    
    // Stop any current speech
    synthRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    if (filteredVoices[selectedVoiceIndex]) {
      utterance.voice = filteredVoices[selectedVoiceIndex];
    }
    utterance.rate = 1;
    utterance.pitch = genderFilter === 'female' ? 1.1 : 0.9;
    
    utterance.onend = () => {
      setIsSpeaking(false);
      setStatus('Idle');
    };
    synthRef.current.speak(utterance);
  };

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      setTranscript('');
      setAiResponse('');
      recognitionRef.current?.start();
      setIsListening(true);
      setStatus('Listening');
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col selection:bg-blue-500/30">
      <B2CHeader />

      <main className="flex-grow flex flex-col items-center justify-center px-4 pt-28 pb-20 overflow-hidden">
        
        {/* Voice Personalization Bar */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10 bg-white/5 border border-white/10 p-2 rounded-2xl backdrop-blur-md"
        >
          <div className="flex bg-slate-900 rounded-xl p-1">
            <button onClick={() => setGenderFilter('female')} className={`px-4 py-2 rounded-lg text-xs font-black transition-all ${genderFilter === 'female' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-white'}`}>FEMALE</button>
            <button onClick={() => setGenderFilter('male')} className={`px-4 py-2 rounded-lg text-xs font-black transition-all ${genderFilter === 'male' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-white'}`}>MALE</button>
          </div>
          <div className="h-6 w-px bg-white/10 hidden md:block" />
          <select 
            className="bg-transparent text-xs font-bold outline-none border-none cursor-pointer text-blue-400"
            onChange={(e) => setSelectedVoiceIndex(Number(e.target.value))}
          >
            {filteredVoices.map((v, i) => (
              <option key={i} value={i} className="bg-[#020617]">{v.name.split(' (')[0]}</option>
            ))}
          </select>
        </motion.div>

        {/* Neural Core */}
        <div className="relative group">
          {/* Glowing Aura */}
          <div className={`absolute inset-0 rounded-full blur-[120px] transition-all duration-1000 ${isListening ? 'bg-blue-600/20' : isSpeaking ? 'bg-purple-600/20' : 'bg-transparent'}`} />
          
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center border border-white/10 rounded-full bg-[#020617] shadow-3xl overflow-hidden">
            {/* Animated Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-[1px] border-dashed border-white/5 rounded-full"
            />
            
            <div className="flex flex-col items-center z-10 text-center px-8">
              <motion.div
                animate={isSpeaking ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 0.5, repeat: Infinity }}
                className={`w-24 h-24 rounded-3xl flex items-center justify-center mb-6 shadow-2xl ${isListening ? 'bg-blue-600' : 'bg-white/5 border border-white/10'}`}
              >
                {isSpeaking ? <Volume2 size={40} className="text-white animate-pulse" /> : <Bot size={40} className={isListening ? 'text-white' : 'text-blue-500'} />}
              </motion.div>
              
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-blue-500 mb-2">{status}</h2>
              <p className="text-sm text-slate-400 italic font-medium leading-relaxed">
                {transcript || "I'm your CLC AI. Ask me about your career growth."}
              </p>
            </div>

            {/* Visualizer Lines */}
            <div className="absolute bottom-10 flex gap-1 h-8 items-center">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={isListening || isSpeaking ? { height: [4, Math.random() * 32 + 4, 4] } : { height: 2 }}
                  transition={{ duration: 0.4, repeat: Infinity, delay: i * 0.03 }}
                  className="w-1 bg-blue-500 rounded-full"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="mt-16 text-center">
          <button 
            onClick={toggleListening}
            className={`p-10 rounded-full transition-all active:scale-95 group relative ${isListening ? 'bg-red-500 shadow-[0_0_60px_rgba(239,68,68,0.3)]' : 'bg-blue-600 shadow-[0_0_60px_rgba(59,130,246,0.3)]'}`}
          >
            {isListening ? <MicOff size={36} /> : <Mic size={36} />}
            <div className="absolute -inset-4 border border-white/10 rounded-full animate-ping opacity-20" />
          </button>
          <p className="mt-8 text-[10px] font-black uppercase tracking-[0.5em] text-slate-600">
            {isListening ? 'LISTENING NOW' : 'TAP TO START'}
          </p>
        </div>

        {/* Subtitles / AI Transcript */}
        <AnimatePresence>
          {aiResponse && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 max-w-2xl bg-white/[0.03] border border-white/10 p-8 rounded-[32px] backdrop-blur-lg"
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={14} className="text-blue-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Neural Response</span>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed italic leading-tight">"{aiResponse}"</p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}