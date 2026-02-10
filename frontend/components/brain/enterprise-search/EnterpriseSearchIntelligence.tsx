"use client";

import { motion } from "framer-motion";
import { Lock, FileText, Image as ImageIcon, Play, Sparkles, Zap, CheckCircle2, MoreHorizontal } from "lucide-react";

export const EnterpriseSearchIntelligence = () => {
    return (
        <section className="bg-black py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 mb-6 text-white text-xs font-bold uppercase tracking-widest">
                            <Lock size={12} />
                            Know more. Guess less.
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-0 tracking-tight leading-[1.1]">
                            The intelligence layer <br />
                            behind every decision
                        </h2>
                    </div>
                    <p className="text-lg text-gray-400 max-w-md leading-relaxed">
                        Forget blue links. ClickUp Brain gives you real, trusted answers with citations, context, and actions ready to go.
                    </p>
                </div>

                {/* Intelligence Feature Blocks */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
                    {/* Card 1: Context */}
                    <div className="group">
                        <h3 className="text-xl font-bold text-white mb-2">Answers with full context</h3>
                        <p className="text-sm text-gray-500 mb-6 h-10">Pulls from tasks, docs, chats, and meetings to give the full picture.</p>
                        <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-[#0E0E12] relative overflow-hidden group-hover:border-white/20 transition-colors">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                            <div className="p-6 pt-8">
                                <div className="text-xs text-gray-500 mb-2">Agents|</div>
                                <div className="text-[10px] text-gray-600 mb-4 flex items-center gap-2">
                                    All <span className="w-16 h-1 bg-white/10 rounded-full" />
                                </div>
                                <div className="text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-wider">Results</div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-gray-300">
                                        <FileText size={14} className="text-gray-500" />
                                        <span className="text-sm">Agents Landing Page Copy</span>
                                        <div className="flex -space-x-1 ml-auto">
                                            <div className="w-4 h-4 rounded-full bg-red-500" />
                                            <div className="w-4 h-4 rounded-full bg-blue-500" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-300">
                                        <ImageIcon size={14} className="text-purple-400" />
                                        <span className="text-sm">Agents LP Design</span>
                                        <div className="flex -space-x-1 ml-auto">
                                            <div className="w-4 h-4 rounded-full bg-green-500" />
                                            <div className="w-4 h-4 rounded-full bg-yellow-500" />
                                            <div className="w-4 h-4 rounded-full bg-purple-500" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500 opacity-50">
                                        <div className="w-3.5 h-3.5 border border-gray-500 rounded-full" />
                                        <span className="text-sm">Agents Landing Page</span>
                                    </div>
                                </div>
                            </div>
                            {/* Glow */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-blue-500/10 blur-3xl rounded-full" />
                        </div>
                    </div>

                    {/* Card 2: Recaps */}
                    <div className="group">
                        <h3 className="text-xl font-bold text-white mb-2">Recaps without the rewatch</h3>
                        <p className="text-sm text-gray-500 mb-6 h-10">Summarizes meetings into searchable, actionable takeaways.</p>
                        <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-[#0E0E12] relative overflow-hidden group-hover:border-white/20 transition-colors">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                            <div className="p-6 flex flex-col justify-center h-full">
                                <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-4 relative z-20 shadow-2xl">
                                    <div className="text-xs font-bold text-gray-400 mb-3">Key takeaways</div>
                                    <div className="space-y-2 mb-4">
                                        <div className="flex gap-2">
                                            <div className="w-1 h-1 bg-gray-500 rounded-full mt-1.5" />
                                            <div className="text-[10px] text-gray-400">Discussed launching the new campaign</div>
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="w-1 h-1 bg-gray-500 rounded-full mt-1.5" />
                                            <div className="text-[10px] text-gray-400">Andrew suggested <span className="bg-blue-500/20 text-blue-300 px-1 rounded">@design-team</span> review</div>
                                        </div>
                                    </div>
                                    {/* Audio Player details */}
                                    <div className="bg-black/40 rounded-lg p-2 flex items-center gap-3 border border-white/5">
                                        <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                                            <Play size={10} className="fill-white text-white ml-0.5" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-[9px] text-white font-bold mb-0.5">1:1 Amy / Andrew</div>
                                            <div className="flex items-center gap-1.5">
                                                <div className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" />
                                                <div className="text-[8px] text-blue-400">Transcribing</div>
                                                <div className="flex-1 h-2 flex items-center gap-0.5 opacity-50">
                                                    {[...Array(15)].map((_, i) => (
                                                        <div key={i} className="w-[1px] bg-white rounded-full" style={{ height: `${Math.random() * 8 + 2}px` }} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Glow */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-purple-500/10 blur-3xl rounded-full" />
                        </div>
                    </div>

                    {/* Card 3: Real-time */}
                    <div className="group">
                        <h3 className="text-xl font-bold text-white mb-2">Real-time, every time</h3>
                        <p className="text-sm text-gray-500 mb-6 h-10">Answers are always up to date with your latest work.</p>
                        <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-[#0E0E12] relative overflow-hidden group-hover:border-white/20 transition-colors">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                            <div className="p-6">
                                <div className="bg-[#1a1a1a]/80 backdrop-blur-sm border border-white/10 rounded-xl p-4 relative z-20">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Sparkles size={14} className="text-fuchsia-400" />
                                        <span className="text-xs font-bold text-white">Brain answer</span>
                                    </div>
                                    <div className="space-y-3 pl-1 border-l border-white/10 ml-1.5">
                                        <div className="text-[10px] text-gray-500 flex items-center gap-2 pl-3">
                                            <div className="w-1 h-1 rounded-full bg-gray-500" /> Searched
                                        </div>
                                        <div className="pl-3 space-y-2">
                                            <div className="flex items-center gap-2 bg-white/5 rounded p-1.5 border border-white/5 w-fit">
                                                <div className="w-3 h-3 rounded bg-green-500" />
                                                <span className="text-[9px] text-white">Onboarding Flow Redesign</span>
                                            </div>
                                            <div className="flex items-center gap-2 bg-white/5 rounded p-1.5 border border-white/5 w-fit">
                                                <div className="w-3 h-3 rounded-full bg-purple-500" />
                                                <span className="text-[9px] text-white">Review Onboarding Flow</span>
                                            </div>
                                            <div className="text-[9px] text-gray-500">+5 more</div>
                                        </div>
                                        <div className="text-[10px] text-gray-500 flex items-center gap-2 pl-3 pt-1">
                                            <div className="w-1 h-1 rounded-full bg-gray-500" /> Generating answer...
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Glow */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-fuchsia-500/10 blur-3xl rounded-full" />
                        </div>
                    </div>
                </div>

                {/* Autonomous Agents Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Visuals */}
                    <div className="relative h-[400px]">
                        <div className="absolute top-10 left-10 w-[260px] bg-[#1a1a1a] border border-white/10 rounded-2xl p-4 shadow-2xl z-10 transition-transform hover:-translate-y-2 duration-300">
                            <div className="flex items-center justify-between mb-2">
                                <div className="w-8 h-8 rounded-lg bg-pink-400 flex items-center justify-center text-xl">🙂</div>
                                <div className="w-10 h-5 bg-fuchsia-600 rounded-full relative">
                                    <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow" />
                                </div>
                            </div>
                            <div className="text-sm font-bold text-white mb-0.5">Autonomous Answers</div>
                            <div className="text-[10px] text-gray-500">by ClickUp</div>
                        </div>

                        <div className="absolute bottom-20 right-10 w-[240px] bg-[#1a1a1a] border border-white/10 rounded-2xl p-4 shadow-2xl z-20 transition-transform hover:-translate-y-2 duration-300">
                            <div className="flex items-center justify-between mb-2">
                                <div className="w-8 h-8 rounded-lg bg-blue-400 flex items-center justify-center text-xl">🤖</div>
                                <div className="w-10 h-5 bg-fuchsia-600 rounded-full relative">
                                    <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow" />
                                </div>
                            </div>
                            <div className="text-sm font-bold text-white mb-0.5">Brand Copywriter</div>
                            <div className="text-[10px] text-gray-500">by ClickUp</div>
                        </div>

                        <div className="absolute bottom-0 left-0 w-[200px] bg-[#1a1a1a] border border-white/10 rounded-2xl p-4 shadow-xl opacity-40 z-0 grayscale">
                            <div className="flex items-center justify-between mb-2">
                                <div className="w-8 h-8 rounded-lg bg-green-400/50" />
                                <div className="w-10 h-5 bg-gray-700 rounded-full relative">
                                    <div className="absolute left-1 top-1 w-3 h-3 bg-gray-500 rounded-full" />
                                </div>
                            </div>
                            <div className="h-3 w-24 bg-gray-700 rounded mb-1" />
                            <div className="h-2 w-12 bg-gray-800 rounded" />
                        </div>
                        {/* Glows */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(217,70,239,0.1),_transparent_70%)] blur-3xl pointer-events-none" />
                    </div>

                    {/* Content */}
                    <div>
                        <h3 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                            Autonomous answer <br />
                            agents that know it all
                        </h3>
                        <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
                            Ambient Agents tap into every doc, task, message, and app to deliver trusted, real-time responses.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};
