"use client";

import { motion } from "framer-motion";
import { Sparkles, ClipboardList, Calendar, Search, PenTool, CheckCircle2, User, MoreHorizontal, Mic, Video, AlignLeft, SpellCheck, Wand2, Smile } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

export const AiToolsStack = () => {
    return (
        <section className="py-32 bg-black text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-gray-300 mb-6 tracking-wide">
                        <Sparkles size={12} className="text-white" />
                        <span>The complete end-to-end AI stack</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                        Transform your business<br />
                        <span className="text-gray-500">with best-in-class AI tools</span>
                    </h2>
                </div>

                <div className="space-y-6">
                    {/* Row 1: Two Large Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Card 1: AI Agents */}
                        <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden relative group">
                            <div className="relative z-10 flex flex-col items-center text-center mb-12">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mb-6 shadow-lg shadow-pink-500/20">
                                    <Smile className="text-white" size={24} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">AI Agents</h3>
                                <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
                                    Offload the busywork with custom AI agents that act, respond, and execute for your team.
                                </p>
                            </div>

                            {/* Visual */}
                            <div className="relative h-[200px] w-full bg-white/5 rounded-xl border border-white/5 overflow-hidden p-6 flex items-center justify-center">
                                {/* Simulated Cards */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10" />

                                <div className="relative flex gap-4">
                                    {/* Floating Card 1 */}
                                    <motion.div
                                        className="bg-[#1E1E1E] border border-white/10 p-4 rounded-xl shadow-2xl w-[200px] absolute -left-10 -top-4"
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400">
                                                <Smile size={16} />
                                            </div>
                                            <div className="w-8 h-4 bg-pink-500 rounded-full" />
                                        </div>
                                        <div className="text-xs font-bold text-white">Autonomous Answers</div>
                                        <div className="text-[10px] text-gray-500">by ClickUp</div>
                                    </motion.div>

                                    {/* Floating Card 2 */}
                                    <motion.div
                                        className="bg-[#1E1E1E] border border-white/10 p-4 rounded-xl shadow-2xl w-[200px] z-20"
                                        animate={{ y: [0, 5, 0] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                                <Smile size={16} />
                                            </div>
                                            <div className="w-8 h-4 bg-blue-500 rounded-full" />
                                        </div>
                                        <div className="text-xs font-bold text-white">Brand Copywriter</div>
                                        <div className="text-[10px] text-gray-500">by ClickUp</div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Autonomous Projects */}
                        <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden relative group">
                            <div className="relative z-10 flex flex-col items-center text-center mb-12">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20">
                                    <ClipboardList className="text-white" size={24} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Autonomous Projects</h3>
                                <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
                                    Work moves forward on its own with task assigning, progress tracking, and prioritization.
                                </p>
                            </div>

                            {/* Visual */}
                            <div className="relative h-[200px] w-full bg-white/5 rounded-xl border border-white/5 overflow-hidden p-6">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10" />
                                <div className="space-y-3 opacity-80">
                                    {/* Task Row 1 */}
                                    <div className="flex items-center gap-3 p-2 bg-[#1E1E1E] rounded-lg border border-white/5">
                                        <div className="w-4 h-4 rounded-full border border-gray-600" />
                                        <div className="flex-1 h-2 bg-gray-700 rounded-full w-24" />
                                        <div className="flex -space-x-1">
                                            <div className="w-5 h-5 rounded-full bg-gray-600 border border-black" />
                                        </div>
                                    </div>
                                    {/* Task Row 2 (Active) */}
                                    <div className="flex items-center gap-3 p-3 bg-purple-900/10 rounded-lg border border-purple-500/30 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-shimmer" />
                                        <div className="w-4 h-4 rounded-full border border-purple-400 bg-purple-400/20" />
                                        <div className="flex-1">
                                            <div className="h-2 bg-white/20 rounded-full w-32 mb-1.5" />
                                            <div className="flex items-center gap-1 text-[10px] text-purple-300">
                                                <Sparkles size={10} /> Generating...
                                            </div>
                                        </div>
                                        <div className="px-2 py-0.5 rounded text-[10px] bg-red-900/50 text-red-400 border border-red-800">Urgent</div>
                                    </div>
                                    {/* Task Row 3 */}
                                    <div className="flex items-center gap-3 p-2 bg-[#1E1E1E] rounded-lg border border-white/5">
                                        <div className="w-4 h-4 rounded-full border border-gray-600" />
                                        <div className="flex-1 h-2 bg-gray-700 rounded-full w-20" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Row 2: Three Small Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Card 3: AI Meetings */}
                        <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 md:p-8 overflow-hidden group">
                            <div className="flex flex-col items-center text-center mb-8">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400">
                                    <Calendar size={20} />
                                </div>
                                <h3 className="text-lg font-bold mb-2">AI Meetings</h3>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    Every meeting becomes notes, tasks, agendas, and follow-ups, automatically.
                                </p>
                            </div>
                            {/* Visual */}
                            <div className="h-[150px] bg-[#111] rounded-xl border border-white/5 p-3 relative overflow-hidden">
                                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10" />
                                <div className="grid grid-cols-2 gap-2 mb-2">
                                    <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center text-gray-600">
                                        <User size={16} />
                                    </div>
                                    <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center text-gray-600">
                                        <User size={16} />
                                    </div>
                                </div>
                                <div className="bg-[#1E1E1E] rounded-lg p-2 flex gap-2 items-start border border-white/5">
                                    <div className="text-[10px] text-gray-500 font-mono mt-0.5">11:02</div>
                                    <div>
                                        <div className="text-xs text-gray-300 font-bold">Sarah:</div>
                                        <div className="text-[10px] text-gray-400">Yes, that works for me.</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 4: Enterprise Search */}
                        <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 md:p-8 overflow-hidden group">
                            <div className="flex flex-col items-center text-center mb-8">
                                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 text-orange-400">
                                    <Search size={20} />
                                </div>
                                <h3 className="text-lg font-bold mb-2">Enterprise AI Search & Ask</h3>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    Get trusted answers from every corner of your Workspace, instantly and in full context.
                                </p>
                            </div>
                            {/* Visual */}
                            <div className="h-[150px] bg-[#111] rounded-xl border border-white/5 p-4 relative overflow-hidden">
                                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10" />
                                <div className="flex items-center gap-2 mb-3 text-xs text-orange-400 font-bold">
                                    <Sparkles size={12} /> Brain answer
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 bg-gray-800 rounded w-32" />
                                    <div className="flex gap-2">
                                        <div className="bg-[#1E1E1E] border border-white/5 rounded px-1.5 py-0.5 text-[8px] text-gray-400 flex items-center gap-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Onboarding Doc
                                        </div>
                                        <div className="bg-[#1E1E1E] border border-white/5 rounded px-1.5 py-0.5 text-[8px] text-gray-400 flex items-center gap-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Review Task
                                        </div>
                                    </div>
                                    <div className="h-2 bg-gray-800 rounded w-full" />
                                    <div className="h-2 bg-gray-800 rounded w-2/3" />
                                </div>
                            </div>
                        </div>

                        {/* Card 5: AI Creator */}
                        <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 md:p-8 overflow-hidden group">
                            <div className="flex flex-col items-center text-center mb-8">
                                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 text-cyan-400">
                                    <PenTool size={20} />
                                </div>
                                <h3 className="text-lg font-bold mb-2">AI Creator</h3>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    Turn ideas into visuals, writing, and tasks with zero prompt engineering or manual work.
                                </p>
                            </div>
                            {/* Visual */}
                            <div className="h-[150px] bg-[#1E1E1E] rounded-xl border border-white/5 p-4 relative overflow-hidden">
                                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10" />
                                <div className="flex items-center gap-2 mb-3 text-xs text-gray-400 border-b border-white/5 pb-2">
                                    <Sparkles size={12} className="text-fuchsia-400" />
                                    <span className="text-gray-500">Ask Brain to edit or write...</span>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 p-1.5 hover:bg-white/5 rounded cursor-pointer transition-colors">
                                        <AlignLeft size={10} className="text-gray-400" />
                                        <span className="text-[10px] text-gray-300">Improve writing</span>
                                    </div>
                                    <div className="flex items-center gap-2 p-1.5 hover:bg-white/5 rounded cursor-pointer transition-colors">
                                        <SpellCheck size={10} className="text-gray-400" />
                                        <span className="text-[10px] text-gray-300">Fix spelling</span>
                                    </div>
                                    <div className="flex items-center gap-2 p-1.5 hover:bg-white/5 rounded cursor-pointer transition-colors">
                                        <Wand2 size={10} className="text-gray-400" />
                                        <span className="text-[10px] text-gray-300">Make longer</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};
