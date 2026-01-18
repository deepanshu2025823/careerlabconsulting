'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, Volume2, VolumeX, Sparkles, Zap, BrainCircuit, Bot } from 'lucide-react';
import B2CHeader from '@/components/b2c/B2CHeader';
import Footer from '@/components/b2c/Footer';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);

export default function AIVoicePage() {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [status, setStatus] = useState('Idle'); // Idle, Listening, Processing, Speaking

  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    // Initialize Web Speech API
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = async (event: any) => {
        const text = event.results[0][0].transcript;
        setTranscript(text);
        processWithAI(text);
      };

      recognitionRef.current.onend = () => {
        if (isListening) setIsListening(false);
      };
    }
    synthRef.current = window.speechSynthesis;
  }, []);

  const processWithAI = async (userInput: string) => {
    setStatus('Processing');
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `You are a helpful Career Lab Consulting (CLC) AI Assistant. Short and concise response only. Question: ${userInput}`;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
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

    const utterance = new SpeechSynthesisUtterance(text);
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
      setStatus('Idle');
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

      <main className="flex-grow flex flex-col items-center justify-center px-4 pt-20">
        
        {/* Top Branding */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">
            <BrainCircuit size={16} /> Neural Voice Engine
          </div>
          <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">
            Speak with <span className="text-blue-500">CLC AI</span>
          </h1>
        </motion.div>

        {/* AI Voice Visualizer Container */}
        <div className="relative w-full max-w-2xl aspect-square md:aspect-video flex items-center justify-center bg-white/[0.02] border border-white/10 rounded-[60px] overflow-hidden shadow-3xl backdrop-blur-sm">
          
          {/* Animated Background Pulse */}
          <AnimatePresence>
            {(isListening || isSpeaking) && (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className={`absolute w-64 h-64 rounded-full blur-[100px] ${isListening ? 'bg-blue-600/30' : 'bg-purple-600/30'}`}
              />
            )}
          </AnimatePresence>

          {/* Central Orbit / Brain */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            <motion.div 
              animate={isListening || isSpeaking ? {
                scale: [1, 1.1, 1],
                rotate: [0, 90, 180, 270, 360]
              } : {}}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-40 h-40 rounded-full border-2 border-dashed border-blue-500/50 flex items-center justify-center p-4"
            >
              <div className={`w-full h-full rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.5)] transition-colors duration-500 ${isListening ? 'bg-blue-600' : 'bg-slate-800'}`}>
                {isSpeaking ? <Volume2 size={40} className="animate-bounce" /> : <Bot size={40} />}
              </div>
            </motion.div>

            {/* Status Text */}
            <div className="text-center space-y-2">
              <p className="text-blue-400 font-black uppercase tracking-widest text-sm animate-pulse">
                {status}...
              </p>
              <p className="text-slate-400 italic text-sm max-w-sm px-6">
                {transcript || "Click the mic and ask: 'How can CLC help me with my career?'"}
              </p>
            </div>
          </div>

          {/* Audio Waveform Simulation */}
          <div className="absolute bottom-12 flex gap-1 h-12 items-center">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={isListening || isSpeaking ? {
                  height: [10, Math.random() * 40 + 10, 10]
                } : { height: 4 }}
                transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.05 }}
                className="w-1 bg-blue-500 rounded-full opacity-50"
              />
            ))}
          </div>
        </div>

        {/* Control Button */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <button 
            onClick={toggleListening}
            className={`group relative p-8 rounded-full transition-all transform active:scale-90 ${isListening ? 'bg-red-500 shadow-[0_0_40px_rgba(239,68,68,0.4)]' : 'bg-blue-600 shadow-[0_0_40px_rgba(59,130,246,0.4)]'}`}
          >
            {isListening ? <MicOff size={32} /> : <Mic size={32} />}
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-widest text-slate-500 whitespace-nowrap group-hover:text-blue-500 transition-colors">
              {isListening ? 'Stop Recording' : 'Start Conversation'}
            </span>
          </button>
        </div>

        {/* AI Response Display (Subtitles style) */}
        <AnimatePresence>
          {aiResponse && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-16 p-8 bg-white/5 border border-white/10 rounded-[32px] max-w-3xl text-center italic text-slate-300"
            >
              "{aiResponse}"
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      <Footer />
    </div>
  );
}