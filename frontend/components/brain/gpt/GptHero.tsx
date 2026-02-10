"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, Mic, Plus, Command, Layout, MessageSquare, Bot, Brain, Sparkles, Database, Slack, FileText, Calendar, HardDrive, Chrome, Download, Trophy } from "lucide-react";

export const GptHero = () => {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-32 relative overflow-visible">

            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center">

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-7xl font-bold mb-6 flex flex-col md:flex-row items-center justify-center gap-4 tracking-tight"
                >
                    <span>Work smarter with</span>
                    <span className="flex items-center gap-2">
                        <Brain className="w-12 h-12 text-pink-500" fill="currentColor" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Brain</span>
                        <span className="px-2 py-0 border border-white/20 rounded-md text-sm font-medium text-gray-400 self-start mt-2">GPT</span>
                    </span>
                </motion.h1>

                {/* Subheadline with Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="flex items-center gap-3 text-xl text-gray-400 mb-10"
                >
                    <span>Search your apps</span>
                    <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-[#3F0E40] flex items-center justify-center border border-gray-800"><Slack size={16} /></div>
                        <div className="w-8 h-8 rounded-full bg-[#0F9D58] flex items-center justify-center border border-gray-800"><FileText size={16} /></div>
                        <div className="w-8 h-8 rounded-full bg-[#4285F4] flex items-center justify-center border border-gray-800"><HardDrive size={16} /></div>
                        <div className="w-8 h-8 rounded-full bg-[#F4B400] flex items-center justify-center border border-gray-800"><Layout size={16} /></div>
                    </div>
                    <span>or Chat with</span>
                    <span className="flex items-center gap-1 text-blue-400"><Sparkles size={16} /> Gemini</span>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 mb-20"
                >
                    <button className="flex items-center gap-3 bg-[#111] hover:bg-[#222] border border-gray-800 text-white px-6 py-3 rounded-full font-medium transition-all group">
                        <Chrome size={20} />
                        Get Chrome Extension
                    </button>
                    <button className="flex items-center gap-3 bg-gradient-to-r from-pink-500 to-rose-600 hover:opacity-90 text-white px-6 py-3 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(236,72,153,0.3)]">
                        <Download size={20} />
                        Download for Windows
                    </button>
                </motion.div>

                <p className="text-gray-500 text-sm mb-16 -mt-12">Free forever. No credit card required.</p>

                {/* Social Proof */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-8 md:gap-16 mb-24 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                >
                    <div className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-full bg-tranparent border border-gray-700 flex items-center justify-center text-xl font-bold font-serif group-hover:border-purple-500 transition-colors">P</div>
                        <div className="text-left">
                            <div className="text-[10px] uppercase font-bold text-gray-500">#1 Product of the Week</div>
                            <div className="text-sm font-bold text-white">Productivity</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-full bg-tranparent border border-gray-700 flex items-center justify-center text-xl font-bold font-serif group-hover:border-purple-500 transition-colors">P</div>
                        <div className="text-left">
                            <div className="text-[10px] uppercase font-bold text-gray-500">#1 Product of the Week</div>
                            <div className="text-sm font-bold text-white">Artificial Intelligence</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 group">
                        <Trophy className="w-10 h-10 text-orange-400" />
                        <div className="text-left">
                            <div className="text-[10px] uppercase font-bold text-gray-500">Product Hunt</div>
                            <div className="text-sm font-bold text-white">#1 Product of the Week</div>
                        </div>
                    </div>
                </motion.div>

                {/* Dashboard Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.6, duration: 1, type: "spring" }}
                    className="w-full max-w-6xl relative"
                >
                    {/* Glow overlay */}
                    <div className="absolute inset-0 bg-purple-600/20 blur-[100px] z-0 rounded-[40px]" />

                    {/* Main Container */}
                    <div className="relative z-10 bg-[#0E0E12] border border-white/10 rounded-[24px] overflow-hidden shadow-2xl flex min-h-[700px] text-left">

                        {/* Sidebar */}
                        <div className="w-[260px] border-r border-white/5 p-4 flex flex-col gap-6 hidden md:flex bg-[#0E0E12]">

                            <div className="flex items-center gap-2 text-white font-bold px-2">
                                <Bot className="text-purple-500" /> Brain <span className="text-[10px] align-top text-gray-500">GPT</span>
                            </div>

                            <div className="space-y-1">
                                <div className="flex items-center gap-3 text-gray-400 hover:bg-white/5 p-2 rounded-lg text-sm cursor-pointer"><Layout size={16} /> Home</div>
                                <div className="flex items-center gap-3 text-gray-400 hover:bg-white/5 p-2 rounded-lg text-sm cursor-pointer"><Mic size={16} /> Talk To Text</div>
                            </div>

                            <div className="space-y-4 mt-2">
                                <div className="text-xs font-bold text-gray-600 uppercase px-2">Models</div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-3 text-white bg-white/5 p-2 rounded-lg text-sm cursor-pointer"><Bot size={16} className="text-purple-400" /> Brain</div>
                                    <div className="flex items-center gap-3 text-gray-400 hover:bg-white/5 p-2 rounded-lg text-sm cursor-pointer"><Sparkles size={16} /> Gemini</div>
                                    <div className="flex items-center gap-3 text-gray-400 hover:bg-white/5 p-2 rounded-lg text-sm cursor-pointer"><Bot size={16} /> OpenAI</div>
                                    <div className="flex items-center gap-3 text-gray-400 hover:bg-white/5 p-2 rounded-lg text-sm cursor-pointer"><Bot size={16} /> DeepSeek</div>
                                    <div className="flex items-center gap-3 text-gray-400 hover:bg-white/5 p-2 rounded-lg text-sm cursor-pointer"><Bot size={16} /> Claude</div>
                                </div>
                            </div>
                            
                            <div className="space-y-4 mt-2">
                                <div className="text-xs font-bold text-gray-600 uppercase px-2">Apps</div>
                                <div className="space-y-1 opacity-60">
                                    <div className="flex items-center gap-3 text-gray-400 text-sm cursor-pointer"><div className="w-4 h-4 bg-purple-500 rounded-sm"></div> ClickUp</div>
                                    <div className="flex items-center gap-3 text-gray-400 text-sm cursor-pointer"><div className="w-4 h-4 bg-green-500 rounded-sm"></div> Google Drive</div>
                                    <div className="flex items-center gap-3 text-gray-400 text-sm cursor-pointer"><div className="w-4 h-4 bg-blue-500 rounded-sm"></div> Dropbox</div>
                                    <div className="flex items-center gap-3 text-gray-400 text-sm cursor-pointer"><div className="w-4 h-4 bg-orange-500 rounded-sm"></div> Google Calendar</div>
                                    <div className="flex items-center gap-3 text-gray-500 text-sm cursor-pointer pl-6">+ Connect app</div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 relative flex flex-col justify-center items-center p-8 bg-gradient-to-b from-[#0E0E12] to-[#1a1a20]">

                            {/* Center Logo */}
                            <div className="mb-8 flex flex-col items-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-purple-500/50 blur-[40px]" />
                                    <Bot size={48} className="text-white relative z-10" />
                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full z-20 border-2 border-[#0E0E12]" />
                                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-500 rounded-full z-20 border-2 border-[#0E0E12]" />
                                    <div className="absolute -top-1 -left-1 w-3 h-3 bg-green-500 rounded-full z-20 border-2 border-[#0E0E12]" />
                                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full z-20 border-2 border-[#0E0E12]" />
                                </div>
                            </div>

                            <h2 className="text-4xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-500 to-purple-500">
                                Search everything, <span className="text-gray-500">ask anything</span>
                            </h2>

                            {/* Search Bar */}
                            <div className="w-full max-w-2xl bg-[#1E1E24] border border-white/10 rounded-2xl p-4 shadow-xl mb-6 group focus-within:border-gray-500 transition-colors">
                                <div className="flex items-center gap-3 text-gray-500 mb-3 border-b border-white/5 pb-3">
                                    <span className="text-sm">Search or Ask...</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <button className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"><Plus size={16} /></button>
                                        <span className="text-gray-400 text-sm bg-black/30 px-3 py-1.5 rounded-md flex items-center gap-2">Search <div className="flex -space-x-1"><div className="w-3 h-3 rounded-full bg-blue-500" /> <div className="w-3 h-3 rounded-full bg-red-500" /> <div className="w-3 h-3 rounded-full bg-yellow-500" /></div></span>
                                    </div>
                                    <Mic className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
                                </div>
                            </div>

                            {/* Quick Suggestions */}
                            <div className="flex flex-wrap justify-center gap-3 mb-24">
                                <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-xs text-gray-400 border border-white/5 transition-colors">
                                    <div className="w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-[10px]">●</div>
                                    Summarize my work
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-xs text-gray-400 border border-white/5 transition-colors">
                                    <div className="w-4 h-4 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-[10px]">●</div>
                                    Create a task
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-xs text-gray-400 border border-white/5 transition-colors">
                                    <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-[10px]">●</div>
                                    Write a report on my team's performace
                                </button>
                            </div>

                            {/* Bottom Cards */}
                            <div className="absolute bottom-8 left-8 right-8 flex gap-4">
                                <div className="flex-1 bg-[#1E1E24]/80 backdrop-blur-md rounded-xl p-4 border border-white/5 flex items-center gap-4 hover:bg-[#1E1E24] transition-colors cursor-pointer group">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                                        <Mic size={20} />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-white font-medium text-sm group-hover:text-purple-400 transition-colors">Talk To Text</div>
                                        <div className="text-gray-500 text-xs">Magical voice input</div>
                                    </div>
                                </div>
                                <div className="flex-1 bg-[#1E1E24]/80 backdrop-blur-md rounded-xl p-4 border border-white/5 flex items-center gap-4 hover:bg-[#1E1E24] transition-colors cursor-pointer group">
                                    <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-white border border-gray-700">
                                        <Database size={20} />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-white font-medium text-sm group-hover:text-purple-400 transition-colors">Connect Apps</div>
                                        <div className="text-gray-500 text-xs">Easily integrate your favorite tools</div>
                                    </div>
                                </div>

                                {/* Recents Mock (Partially hidden) */}
                                <div className="flex-1 bg-transparent p-4 hidden lg:block opacity-50">
                                    <div className="text-xs font-bold text-gray-600 uppercase mb-2">Recents</div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-xs text-gray-500"><div className="w-2 h-2 bg-green-500 rounded-[1px]" /> Put Request example</div>
                                        <div className="flex items-center gap-2 text-xs text-gray-500"><div className="w-2 h-2 bg-green-500 rounded-[1px]" /> Get user data</div>
                                    </div>
                                </div>
                                <div className="flex-1 bg-transparent p-4 hidden lg:block opacity-50">
                                    <div className="text-xs font-bold text-gray-600 uppercase mb-2">Google Calendar</div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-xs text-gray-500">10:00 Design Critiques</div>
                                        <div className="flex items-center gap-2 text-xs text-gray-500">11:45 Brain Daily Sync</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
