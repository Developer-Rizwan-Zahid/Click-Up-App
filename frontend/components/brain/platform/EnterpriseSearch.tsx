"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, Database, Globe, Bot, Sparkles, MessageSquare, FileText, Command } from "lucide-react";

export const EnterpriseSearch = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-2 mb-4">
                        <Search className="text-orange-500 w-5 h-5" />
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 text-sm tracking-wider uppercase">
                            Enterprise AI Search & Ask
                        </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-4xl">
                            Cut the searching with answers<br />
                            <span className="text-gray-500">from your Workspace and beyond</span>
                        </h2>
                        <button className="bg-[#1f2127] hover:bg-[#2c2e36] text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all border border-white/10 hover:border-white/20">
                            Get started <ArrowRight size={16} />
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Card 1: Connected Knowledge */}
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-orange-500/30 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="h-56 mb-8 relative flex flex-col justify-center">
                            {/* Visual: Search Bar with Icons */}
                            <div className="bg-[#111] border border-white/10 rounded-xl p-6 shadow-xl relative z-10 scale-100 group-hover:scale-105 transition-transform duration-500">
                                <div className="text-xl text-gray-500 mb-4 font-light">Agents<span className="animate-pulse">|</span></div>
                                <div className="flex items-center gap-3 border-t border-white/5 pt-4 overflow-x-auto pb-1 no-scrollbar opacity-60">
                                    <span className="text-xs font-bold text-gray-400 shrink-0">All</span>
                                    <div className="w-5 h-5 bg-blue-500/20 rounded flex items-center justify-center shrink-0"><Database size={12} className="text-blue-500" /></div>
                                    <div className="w-5 h-5 bg-indigo-500/20 rounded flex items-center justify-center shrink-0"><MessageSquare size={12} className="text-indigo-500" /></div>
                                    <div className="w-5 h-5 bg-green-500/20 rounded flex items-center justify-center shrink-0"><FileText size={12} className="text-green-500" /></div>
                                    <div className="w-5 h-5 bg-yellow-500/20 rounded flex items-center justify-center shrink-0"><Globe size={12} className="text-yellow-500" /></div>
                                    <div className="w-5 h-5 bg-gray-500/20 rounded flex items-center justify-center shrink-0"><Bot size={12} className="text-gray-500" /></div>
                                </div>
                                {/* Fake Results */}
                                <div className="mt-4 space-y-2 opacity-40 blur-[1px]">
                                    <div className="h-2 w-3/4 bg-gray-800 rounded"></div>
                                    <div className="h-2 w-1/2 bg-gray-800 rounded"></div>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">Connected Knowledge</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Search across tasks, docs, chats, and tools to get instant answers with full context.
                        </p>
                    </div>

                    {/* Card 2: Org-Wide Search */}
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="h-56 mb-8 relative flex flex-col justify-center">
                            {/* Visual: Brain Answer */}
                            <div className="bg-[#111] border border-white/10 rounded-xl p-5 shadow-xl relative z-10 w-full">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-6 h-6 rounded bg-gradient-to-tr from-pink-500 to-orange-500 flex items-center justify-center">
                                        <Sparkles size={12} className="text-white" />
                                    </div>
                                    <span className="font-bold text-gray-200 text-sm">Brain answer</span>
                                </div>
                                <div className="space-y-3 pl-2 border-l border-white/10 ml-3">
                                    <div className="flex items-center gap-2 text-[10px] text-gray-500">
                                        <div className="w-1.5 h-1.5 bg-gray-600 rounded-full" /> Searched
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <div className="flex items-center gap-1.5 bg-[#1E1E1E] border border-white/5 px-2 py-1 rounded text-[9px] text-gray-300">
                                            <div className="w-3 h-3 bg-green-500/20 rounded flex items-center justify-center"><Database size={8} className="text-green-500" /></div>
                                            Onboarding Flow Redesign
                                        </div>
                                        <div className="flex items-center gap-1.5 bg-[#1E1E1E] border border-white/5 px-2 py-1 rounded text-[9px] text-gray-300">
                                            <div className="w-3 h-3 bg-blue-500/20 rounded flex items-center justify-center"><MessageSquare size={8} className="text-blue-500" /></div>
                                            #onboarding-re...
                                        </div>
                                    </div>
                                    <div className="text-[10px] text-gray-600 pl-1">+5 more</div>
                                    <div className="flex items-center gap-2 text-[10px] text-gray-600 animate-pulse">
                                        <div className="w-1.5 h-1.5 bg-gray-600 rounded-full" /> Generating answer...
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">Org-Wide Search</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            One search gets you the right file, message, or task from across your Workspace, apps, and teams.
                        </p>
                    </div>

                    {/* Card 3: Every Premium LLM, One Brain */}
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-purple-500/30 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="h-56 mb-8 relative flex flex-col justify-center items-center">
                            {/* Visual: Model Selector */}
                            <div className="bg-[#151515] border border-white/10 rounded-xl p-2 shadow-2xl w-[220px]">
                                <div className="flex items-center justify-between px-3 py-2 bg-[#1E1E1E] rounded-lg border border-white/5 mb-2 cursor-pointer hover:bg-[#252525] transition-colors">
                                    <div className="flex items-center gap-2">
                                        <Sparkles size={12} className="text-purple-400" />
                                        <span className="text-xs font-bold text-white">ClickUp Brain</span>
                                    </div>
                                    <ArrowRight size={10} className="transform rotate-90 text-gray-500" />
                                </div>

                                <div className="space-y-1 p-1">
                                    <div className="flex items-start gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer group/item">
                                        <div className="w-4 h-4 rounded-full border border-gray-600 bg-black mt-0.5 group-hover/item:border-white transition-colors" />
                                        <div>
                                     <div className="text-xs font-bold text-gray-200">Gpt-4o</div>
                                     <div className="text-[9px] text-gray-500">Chat with 4o without leaving ClickUp.</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 p-2 bg-[#1E1E1E] border border-purple-500/30 rounded-lg shadow-sm">
                                        <div className="w-4 h-4 rounded-full border border-purple-500 bg-purple-500/20 flex items-center justify-center mt-0.5">
                                            <Sparkles size={8} className="text-purple-400" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-white">Gemini 2.5 Flash</div>
                                            <div className="text-[9px] text-gray-400">Best for complex data & heavy tasks.</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer opacity-50">
                                        <div className="w-4 h-4 rounded-full border border-gray-600 bg-black mt-0.5" />
                                        <div>
                                            <div className="text-xs font-bold text-gray-200">Claude 3.7 Sonnet</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">Every Premium LLM, One Brain</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Use every major AI model in one place. ChatGPT, Claude, and much more.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};
