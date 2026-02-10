"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, CheckCircle2, MessageSquare, Zap, Clock, Users } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

export const AiAgentsSection = () => {
    return (
        <section className="py-32 bg-black text-white px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

                {/* Header Row */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <div className="flex items-center gap-2 text-[#E62E7B] font-bold uppercase tracking-wider text-xs mb-4">
                            <Bot size={14} />
                            <span>AI Agents & Assistants</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black leading-tight max-w-2xl">
                            Offload busywork to AI agents that turbocharge output
                        </h2>
                    </div>

                    <button className="group flex items-center gap-2 bg-[#1E1E1E] border border-white/10 hover:bg-[#2C2C2C] px-6 py-3 rounded-full transition-all text-sm font-bold">
                        Get started <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Card 1: Autonomous Answers */}
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-1 overflow-hidden group hover:border-pink-500/30 transition-colors h-full flex flex-col">
                        <div className="bg-[#111] rounded-[22px] flex flex-col h-full overflow-hidden">
                            {/* Visual */}
                            <div className="h-[280px] p-6 relative flex flex-col justify-center">
                                <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-transparent pointer-events-none" />

                                {/* Chat Simulation */}
                                <div className="space-y-4 relative z-10 scale-90 md:scale-100 origin-center">
                                    <div className="flex gap-3 items-start opacity-50">
                                        <div className="w-8 h-8 rounded-full bg-yellow-600/20 flex items-center justify-center">
                                            <div className="bg-yellow-500 w-full h-full rounded-full opacity-50" />
                                        </div>
                                        <div className="bg-[#1E1E1E] border border-white/5 p-3 rounded-2xl rounded-tl-none text-xs text-gray-400 max-w-[220px]">
                                            The discount code isn't applying in the checkout flow. Can we fix this?
                                        </div>
                                    </div>

                                    <div className="flex gap-3 items-start">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-rose-500 flex items-center justify-center shadow-lg shadow-pink-500/20">
                                            <Bot size={14} className="text-white" />
                                        </div>
                                        <div className="bg-[#1F1216] border border-pink-500/20 p-4 rounded-2xl rounded-tl-none w-full max-w-[260px] shadow-2xl relative">
                                            <div className="absolute top-0 left-0 w-full h-full bg-pink-500/5 rounded-2xl animate-pulse" />
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-[10px] font-bold text-pink-400">Agent</span>
                                                <span className="text-[9px] text-gray-600">5:59 pm</span>
                                            </div>
                                            <div className="text-[11px] text-gray-300 mb-2">Got it! I've created a task for this:</div>
                                            <div className="bg-black/40 rounded p-2 border border-white/5 mb-1">
                                                <div className="flex items-center gap-1.5 mb-1">
                                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-sm" />
                                                    <span className="text-[10px] font-bold text-white">Fix discount code issue</span>
                                                </div>
                                                <div className="flex flex-col gap-0.5 pl-3">
                                                    <span className="text-[9px] text-gray-500">• Priority: High</span>
                                                    <span className="text-[9px] text-gray-500">• Assignee: <span className="text-blue-400">@Ashley</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="p-8 mt-auto border-t border-white/5 bg-[#0F0F0F]">
                                <h3 className="text-xl font-bold mb-3">Autonomous Answers</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Delivers instant, context-rich answers that keep teams moving and up-to-date.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Autopilot Automations */}
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-1 overflow-hidden group hover:border-purple-500/30 transition-colors h-full flex flex-col">
                        <div className="bg-[#111] rounded-[22px] flex flex-col h-full overflow-hidden">
                            {/* Visual */}
                            <div className="h-[280px] p-6 relative flex flex-col items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none" />

                                <div className="relative z-10 w-full max-w-[240px]">
                                    {/* Step 1 */}
                                    <div className="bg-[#1E1E1E] border border-white/10 p-3 rounded-xl mb-8 relative">
                                        <div className="text-[10px] text-gray-500 font-bold uppercase mb-2">When</div>
                                        <div className="flex items-center gap-2 bg-[#0A0A0A] p-2 rounded-lg border border-white/5">
                                            <Clock size={12} className="text-gray-400" />
                                            <span className="text-xs text-gray-300">Due date arrives</span>
                                        </div>
                                        {/* Connector Line */}
                                        <div className="absolute left-6 -bottom-8 w-[1px] h-8 bg-gray-700" />
                                        <div className="absolute left-6 -bottom-8 w-16 h-[1px] bg-gray-700 md:hidden" /> {/* Mobile fix logic maybe? keeping simple line for now */}
                                        <svg className="absolute left-[23px] -bottom-8 w-12 h-12 text-gray-700 fill-none" viewBox="0 0 24 24">
                                            <path d="M1 0V12C1 17.5228 5.47715 22 11 22H24" stroke="currentColor" />
                                        </svg>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="bg-[#1E1E1E] border border-white/10 p-3 rounded-xl ml-12 shadow-[0_0_20px_rgba(168,85,247,0.1)] border-purple-500/20">
                                        <div className="text-[10px] text-purple-400 font-bold uppercase mb-2">Then</div>
                                        <div className="flex items-center gap-2 bg-[#0A0A0A] p-2 rounded-lg border border-purple-500/20">
                                            <Zap size={12} className="text-purple-400" />
                                            <span className="text-xs text-white">Change assignee</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="p-8 mt-auto border-t border-white/5 bg-[#0F0F0F]">
                                <h3 className="text-xl font-bold mb-3">Autopilot Automations</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Define workflows and triggers, then let Brain handle progress tracking and reports.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Custom Agents */}
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-1 overflow-hidden group hover:border-orange-500/30 transition-colors h-full flex flex-col">
                        <div className="bg-[#111] rounded-[22px] flex flex-col h-full overflow-hidden">
                            {/* Visual */}
                            <div className="h-[280px] p-6 relative flex flex-col items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent pointer-events-none" />

                                <div className="relative z-10 flex items-center justify-center">
                                    {/* Stacked Cards Effect */}
                                    <div className="absolute transform -translate-x-12 scale-90 opacity-40">
                                        <AgentMiniCard icon={Clock} color="text-yellow-400" bg="bg-yellow-500" label="Reminders" />
                                    </div>
                                    <div className="absolute transform -translate-x-6 scale-95 opacity-70">
                                        <AgentMiniCard icon={Users} color="text-teal-400" bg="bg-teal-500" label="Team Sync" />
                                    </div>
                                    <div className="relative transform z-10 shadow-2xl">
                                        <div className="bg-[#1A1A1A] border border-white/10 p-4 rounded-xl w-[200px] shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shadow-lg">
                                                    <Smile size={16} className="text-white" />
                                                </div>
                                                <div className="w-8 h-5 bg-pink-600 rounded-full p-0.5 flex justify-end">
                                                    <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                                                </div>
                                            </div>
                                            <h4 className="text-white font-bold mb-0.5">Answers</h4>
                                            <p className="text-[10px] text-gray-500">by ClickUp</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="p-8 mt-auto border-t border-white/5 bg-[#0F0F0F]">
                                <h3 className="text-xl font-bold mb-3">Custom Agents</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Build custom AI agents and assistants for any task without writing a line of code.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const Smile = ({ size, className }: any) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
)

function AgentMiniCard({ icon: Icon, color, bg, label }: any) {
    return (
        <div className="bg-[#1A1A1A] border border-white/5 p-4 rounded-xl w-[180px]">
            <div className="flex justify-between items-start mb-4">
                <div className={`w-8 h-8 rounded-lg ${color.replace('text-', 'bg-').replace('400', '500')}/20 flex items-center justify-center`}>
                    <Icon size={16} className={color} />
                </div>
                <div className="w-8 h-5 bg-gray-700 rounded-full p-0.5">
                    <div className="w-4 h-4 bg-gray-500 rounded-full" />
                </div>
            </div>
            <h4 className="text-gray-400 font-bold mb-0.5">{label}</h4>
            <p className="text-[10px] text-gray-600">by ClickUp</p>
        </div>
    )
}
