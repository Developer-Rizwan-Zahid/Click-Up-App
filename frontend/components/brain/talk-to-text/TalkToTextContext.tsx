"use client";

import { motion } from "framer-motion";
import { Sparkles, MessageSquare, Globe, Search, BrainCircuit, RefreshCw, Command, User, Bot, FileText, Lock, Users } from "lucide-react";
import Image from "next/image"; // Assuming we might use Image later, but for now building with Divs/Icons

export const TalkToTextContext = () => {
    return (
        <section className="py-24 px-4 bg-black text-white">
            <div className="container mx-auto max-w-6xl">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-medium border border-white/10 mb-8 backdrop-blur-sm">
                        <Sparkles size={14} className="text-white" />
                        <span>Personalized Talk to Text</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                        Unlock the power of working with AI that has full context
                    </h2>
                    <p className="text-xl text-gray-400 font-medium">
                        Dictate seamlessly with AI that knows how to handle the details for you.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Card 1: Context-aware @mentions (Wide) */}
                    <div className="col-span-1 md:col-span-2 bg-[#121214] border border-white/10 rounded-3xl p-10 relative overflow-hidden group">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="flex-1 space-y-4 relative z-10">
                                <h3 className="text-2xl font-bold text-white">Context-aware @mentions and links</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    Mention colleagues, tasks, or Docs – AI auto-connects the right people, with the correct links.
                                </p>
                            </div>

                            {/* Visual Mockup */}
                            <div className="flex-1 w-full relative">
                                <div className="bg-[#1c1c1e] rounded-xl border border-white/10 p-6 shadow-2xl relative z-10">
                                    {/* Original Message */}
                                    <div className="bg-[#2c2c2e] p-4 rounded-lg rounded-tl-none mb-6 text-sm text-gray-300 font-mono">
                                        "Hi! Mention <span className="text-white font-bold">Elie</span>, could you please review the <span className="text-white font-bold">College Branding Guidelines</span> doc and share your feedback when you have a moment? Thank you"
                                    </div>

                                    {/* Arrow */}
                                    <div className="absolute left-8 top-[45%] h-8 w-px bg-white/20" />
                                    <div className="absolute left-8 top-[60%] w-8 h-px bg-white/20" />

                                    {/* Processed Card */}
                                    <div className="bg-[#1c1c1e] border border-white/10 p-4 rounded-xl shadow-lg relative ml-auto w-[90%] flex gap-4 items-start">
                                        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center shrink-0">
                                            <User size={16} className="text-white" />
                                        </div>
                                        <div className="text-sm">
                                            <div className="font-bold text-white mb-1">Lin</div>
                                            <div className="text-gray-400 leading-relaxed">
                                                Hi <span className="text-[#E348B4] bg-[#E348B4]/10 px-1 rounded">@Ellie</span>, could you please review the <span className="text-[#5D5FEF] bg-[#5D5FEF]/10 px-1 rounded flex items-center gap-1 inline-flex"><FileText size={10} /> College Branding Guidelines</span> and share your feedback when you have a moment? Thank you!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Glow */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10 group-hover:bg-purple-500/20 transition-all duration-500" />
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Personal Vocabulary */}
                    <div className="bg-[#121214] border border-white/10 rounded-3xl p-8 min-h-[400px] flex flex-col justify-between group overflow-hidden relative">
                        <div className="relative z-10 mb-8 flex justify-center py-8">
                            {/* Tags Cloud Mock */}
                            <div className="grid grid-cols-5 gap-2 opacity-30 blur-[1px] scale-90">
                                {["Principle", "Spread", "Vesting", "Amortization", "Yield", "Blue chip", "APY", "APR", "ROI", "IPO"].map((tag, i) => (
                                    <div key={i} className="bg-white/5 px-2 py-1 rounded text-[10px] text-gray-500">{tag}</div>
                                ))}
                            </div>

                            {/* Selected Tag */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                                <div className="bg-[#2c2c2e] px-8 py-4 rounded-xl border border-white/10 shadow-2xl scale-125 z-20">
                                    <span className="text-white font-bold text-lg">IMO</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white mb-2">Your personal vocabulary</h3>
                            <p className="text-gray-400 text-sm">Auto-filled with your most-used words, expressions, work-specific jargon, nicknames, and more.</p>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#121214] pointer-events-none" />
                    </div>

                    {/* Card 3: Global Voice */}
                    <div className="bg-[#121214] border border-white/10 rounded-3xl p-8 min-h-[400px] flex flex-col justify-between group overflow-hidden relative">
                        <div className="relative z-10 flex items-center justify-center h-full pb-20">
                            {/* Visual Orbit Fake */}
                            <div className="relative w-40 h-40">
                                <div className="absolute inset-0 border border-white/10 rounded-full" />
                                <div className="absolute inset-4 border border-white/5 rounded-full" />

                                {/* Flags */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 bg-[#1c1c1e] p-1.5 rounded-full border border-white/10 text-xl shadow-lg">🇩🇪</div>
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3 bg-[#1c1c1e] p-1.5 rounded-full border border-white/10 text-xl shadow-lg">🇨🇳</div>
                                <div className="absolute top-1/2 right-0 translate-x-3 -translate-y-1/2 bg-[#1c1c1e] p-1.5 rounded-full border border-white/10 text-xl shadow-lg">🇰🇷</div>

                                {/* Center Card */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1c1c1e]/80 backdrop-blur-md p-3 rounded-2xl border border-white/10 flex items-center gap-4 shadow-2xl">
                                    <span className="text-2xl">🇺🇸</span>
                                    <RefreshCw size={20} className="text-gray-500 animate-[spin_5s_linear_infinite]" />
                                    <span className="text-2xl">🇧🇷</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white mb-2">Global voice</h3>
                            <p className="text-gray-400 text-sm">Speak in your own language, and type fluently in 50+ other languages.</p>
                        </div>
                    </div>

                    {/* Card 4: Premium AI Models */}
                    <div className="bg-[#121214] border border-white/10 rounded-3xl p-8 min-h-[350px] flex flex-col justify-between group overflow-hidden relative">
                        <div className="relative z-10 font-mono text-xs text-center pt-8">
                            <div className="flex gap-4 items-center justify-center opacity-30 grayscale filter mix-blend-screen">
                                {/* Placeholders for AI Logos */}
                                <div className="w-10 h-10 rounded-full bg-white/10" />
                                <div className="w-10 h-10 rounded-full bg-white/10" />
                                <div className="w-10 h-10 rounded-full bg-white/10" />
                                <div className="w-10 h-10 rounded-full bg-white/10" />
                            </div>

                            {/* Active Model */}
                            <div className="mt-6 flex justify-center">
                                <div className="bg-[#2c2c2e] p-4 rounded-2xl border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] flex flex-col items-center">
                                    <BrainCircuit size={32} className="text-white mb-2" />
                                    <span className="text-white font-bold">ChatGPT 4o</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-8">
                            <div className="flex items-center gap-2 mb-2">
                                <BrainCircuit size={20} className="text-[#3b82f6]" />
                                <h3 className="text-xl font-bold text-white">Ask the premium AI models anything</h3>
                            </div>
                            <p className="text-gray-400 text-sm">Chat with the latest AI models for coding, writing, complex reasoning, and more – without switching between apps.</p>
                        </div>
                    </div>

                    {/* Card 5: Search */}
                    <div className="bg-[#121214] border border-white/10 rounded-3xl p-8 min-h-[350px] flex flex-col justify-between group overflow-hidden relative">
                        <div className="relative z-10 pt-8">
                            {/* Search Bar Mock */}
                            <div className="bg-[#1c1c1e] rounded-xl border border-white/10 p-4 shadow-lg w-full max-w-sm mx-auto">
                                <div className="text-gray-400 text-xs mb-3">I'm looking for that OOH campaign we did last year</div>
                                <div className="flex gap-2 justify-between items-center mb-4">
                                    <div className="bg-white/5 px-2 py-1 rounded text-[10px] text-gray-500">All v</div>
                                    <div className="flex -space-x-1.5">
                                        {[...Array(5)].map((_, i) => <div key={i} className="w-4 h-4 rounded-full bg-gray-600 border border-[#1c1c1e]" />)}
                                    </div>
                                </div>
                                <div className="bg-[#2c2c2e] p-2 rounded-lg flex items-center gap-3">
                                    <div className="w-8 h-8 bg-blue-500/20 rounded flex items-center justify-center text-blue-400"><FileText size={14} /></div>
                                    <div>
                                        <div className="text-white text-xs font-bold">Billboard Mockup Madrid</div>
                                        <div className="text-[10px] text-gray-500">png • G-Drive / Marketing</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-8">
                            <div className="flex items-center gap-2 mb-2">
                                <Search size={20} className="text-[#22c55e]" />
                                <h3 className="text-xl font-bold text-white">Search across all your apps</h3>
                            </div>
                            <p className="text-gray-400 text-sm">No more digging for answers. Locate buried files, lost threads, and half-remembered conversations instantly.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
