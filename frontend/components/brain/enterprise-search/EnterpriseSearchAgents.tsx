"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Search, FileText, MessageSquare, CheckCircle2, Sparkles, MoreHorizontal, Database } from "lucide-react";

export const EnterpriseSearchAgents = () => {
    return (
        <section className="bg-black py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-white">
            <div className="max-w-7xl mx-auto relative z-10">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-900/30 border border-fuchsia-500/30 text-fuchsia-300 text-sm font-medium mb-6">
                            <Bot size={16} />
                            AI Agents & Assistants
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
                            Offload busywork to AI agents <br />
                            and turbocharge output fivefold
                        </h2>
                    </div>
                    <button className="whitespace-nowrap px-6 py-3 rounded-xl bg-[#1a1a1a] border border-white/10 text-white font-bold flex items-center gap-2 hover:bg-[#2a2a2a] transition-colors group">
                        Get started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Card 1: Search across tools */}
                    <div className="bg-[#0b0b0f] border border-white/10 rounded-3xl p-8 flex flex-col h-full group hover:border-white/20 transition-colors">
                        <div className="h-[240px] bg-gradient-to-br from-[#1a1a2e] to-[#0b0b0f] rounded-xl mb-8 border border-white/5 relative overflow-hidden flex items-center justify-center p-6">
                            {/* Visual Mockup */}
                            <div className="w-full max-w-[280px] bg-[#1a1a1a] border border-white/10 rounded-lg p-3 shadow-2xl relative z-10">
                                <div className="flex items-center gap-2 text-xs text-gray-400 mb-2 pb-2 border-b border-white/5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 bg-black/50 p-2 rounded text-[10px] text-gray-300 border border-white/5">
                                        <Search size={12} />
                                        What are the brand guidelines...
                                    </div>
                                    <div className="space-y-1 pl-1">
                                        <div className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-1">Apps</div>
                                        <AppRow name="Dropbox" color="bg-blue-500" />
                                        <AppRow name="Drive" color="bg-green-500" />
                                        <AppRow name="Figma" color="bg-purple-500" />
                                        <AppRow name="Sharepoint" color="bg-teal-500" />
                                    </div>
                                </div>
                            </div>
                            {/* Background Elements */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_rgba(120,50,255,0.15),_transparent_70%)]" />
                        </div>
                        <div className="mt-auto">
                            <h3 className="text-xl font-bold text-white mb-3">Search across all your tools and apps</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                From Drive and Notion to Slack and Gmail – every app, connected and searchable from one place.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Deep questions */}
                    <div className="bg-[#0b0b0f] border border-white/10 rounded-3xl p-8 flex flex-col h-full group hover:border-white/20 transition-colors">
                        <div className="h-[240px] bg-gradient-to-br from-[#1a1a2e] to-[#0b0b0f] rounded-xl mb-8 border border-white/5 relative overflow-hidden flex items-center justify-center p-6">
                            {/* Visual Mockup */}
                            <div className="w-full max-w-[280px] bg-[#1a1a1a] border border-white/10 rounded-lg p-4 shadow-2xl relative z-10">
                                <div className="text-[10px] text-gray-400 mb-3 border-b border-white/5 pb-2">Deep search for 'latest cybersecurity threats'</div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-xs text-fuchsia-400 font-medium">
                                        <Sparkles size={12} /> Thinking...
                                    </div>
                                    <div className="border-l-2 border-fuchsia-500/20 pl-3 space-y-2 py-1">
                                        <div className="flex items-center gap-2 text-[10px] text-gray-400">
                                            <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 animate-pulse" />
                                            Performing a deep search...
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] text-gray-500">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                                            Synthesizing search results...
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] text-gray-500">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                                            Generating answer...
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Background Elements */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_rgba(255,50,150,0.1),_transparent_70%)]" />
                        </div>
                        <div className="mt-auto">
                            <h3 className="text-xl font-bold text-white mb-3">Ask deep questions, get meaningful results.</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Define workflows and triggers, then let Brain handle progress tracking and reports.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Stay up-to-date */}
                    <div className="bg-[#0b0b0f] border border-white/10 rounded-3xl p-8 flex flex-col h-full group hover:border-white/20 transition-colors">
                        <div className="h-[240px] bg-gradient-to-br from-[#1a1a2e] to-[#0b0b0f] rounded-xl mb-8 border border-white/5 relative overflow-hidden flex items-center justify-center p-6">
                            {/* Visual Mockup */}
                            <div className="relative z-10">
                                {/* Floating Icons */}
                                <div className="absolute -top-6 -left-6 opacity-20"><Database size={32} className="text-blue-500" /></div>
                                <div className="absolute -bottom-4 -right-4 opacity-20"><MessageSquare size={32} className="text-green-500" /></div>

                                {/* Central Card */}
                                <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-4 shadow-2xl w-[220px]">
                                    <div className="flex justify-center -mt-8 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                                            <Bot className="text-white" size={24} />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <NotificationItem text="Analyzed relevant tasks" subbox="Bug Report, Jan 1" />
                                        <NotificationItem text="Read latest Docs" subbox="Notes - Design Review" blue />
                                        <NotificationItem text="Checked relevant chats" subbox="Slack channels" />
                                    </div>
                                </div>
                            </div>
                            {/* Background Elements */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_rgba(50,100,255,0.15),_transparent_70%)]" />
                        </div>
                        <div className="mt-auto">
                            <h3 className="text-xl font-bold text-white mb-3">Stay up-to-date, without hitting refresh</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Brain indexes content frequently, so your searches are up to the minute.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const AppRow = ({ name, color }: { name: string, color: string }) => (
    <div className="flex items-center gap-2 p-1 hover:bg-white/5 rounded transition-colors cursor-pointer">
        <div className={`w-2 h-2 rounded-sm ${color}`} />
        <span className="text-[10px] text-gray-400">{name}</span>
        <div className="ml-auto w-2 h-2 rounded-full border border-gray-600" />
    </div>
);

const NotificationItem = ({ text, subbox, blue }: { text: string, subbox: string, blue?: boolean }) => (
    <div className="relative pl-4 border-l border-white/10 pb-2 last:pb-0">
        <div className={`absolute -left-[3px] top-1 w-1.5 h-1.5 rounded-full ${blue ? 'bg-blue-500' : 'bg-gray-500'}`} />
        <div className="text-[9px] text-gray-400 mb-1">{text}</div>
        <div className="bg-black/40 border border-white/5 rounded px-2 py-1 text-[10px] text-gray-300 inline-block">
            {subbox}
        </div>
    </div>
);
