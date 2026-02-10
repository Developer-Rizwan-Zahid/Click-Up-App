"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lock, Play, Pause, MoreHorizontal, User, Send, CheckCircle2, FileText, CheckSquare, MessageSquare } from "lucide-react";

export const NotetakerIntegration = () => {
    return (
        <section className="py-32 bg-black relative overflow-hidden">
            {/* Background dots/grid effect */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-dots-pattern opacity-20 pointer-events-none" />

            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a0b2e] border border-white/10 text-xs font-semibold text-fuchsia-300 mb-8">
                            <Lock size={12} /> Team Collaboration
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                            Connect your meeting <br />
                            conversations with the rest <br />
                            of your work
                        </h2>
                    </div>
                    <div className="flex flex-col items-start gap-8">
                        <p className="text-xl text-gray-400 max-w-sm leading-relaxed">
                            Stop switching between meeting notes and disconnected apps, and bring conversations directly into your workflow
                        </p>
                        <button className="px-6 py-3 rounded-xl bg-[#1a1a1a] border border-white/10 text-white font-bold flex items-center gap-2 hover:bg-[#2a2a2a] transition-colors group">
                            Get started <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Card 1: Docs */}
                    <IntegrationCard
                        title="Meetings Notes + Docs"
                        description="Get transcripts, video, and summaries in your private Docs."
                        visual={
                            <div className="w-full h-full bg-[#111] p-6 flex flex-col relative overflow-hidden">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-6 h-6 rounded bg-orange-500/20 flex items-center justify-center"><FileText size={14} className="text-orange-500" /></div>
                                    <span className="text-sm font-bold text-white">Design Sync Call notes</span>
                                </div>

                                <div className="flex items-center gap-2 text-[10px] text-gray-500 mb-4">
                                    <div className="w-4 h-4 rounded-full bg-gray-700" /> Zach <span className="text-gray-600">•</span> Last updated: Today at 2:20
                                </div>

                                {/* Audio Player Mock */}
                                <div className="bg-[#1a1a1a] rounded-lg p-3 flex items-center gap-3 mb-6">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <Play size={12} className="text-white fill-current" />
                                    </div>
                                    <div className="flex-1 h-8 flex items-center gap-0.5 opacity-50">
                                        {[...Array(20)].map((_, i) => (
                                            <div key={i} className="w-1 bg-white rounded-full" style={{ height: `${Math.random() * 100}%` }} />
                                        ))}
                                    </div>
                                    <span className="text-[10px] text-gray-500">32:42</span>
                                </div>

                                <div className="space-y-3">
                                    <div className="text-xs font-bold text-gray-400">Summary</div>
                                    <div className="space-y-2">
                                        <div className="h-2 w-full bg-white/10 rounded" />
                                        <div className="h-2 w-5/6 bg-white/10 rounded" />
                                        <div className="h-2 w-4/6 bg-white/10 rounded" />
                                    </div>
                                </div>
                                {/* Glow */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-orange-500/10 blur-[50px] rounded-full pointer-events-none" />
                            </div>
                        }
                    />

                    {/* Card 2: Tasks */}
                    <IntegrationCard
                        title="Meetings Notes + Tasks"
                        description="Turn every action item from your calls into actionable tasks."
                        visual={
                            <div className="w-full h-full bg-[#111] p-6 relative overflow-hidden">
                                <div className="text-xs font-bold text-gray-500 mb-4">Action items</div>
                                <div className="space-y-3 relative z-10">
                                    <div className="flex items-start gap-3 group cursor-pointer">
                                        <div className="w-4 h-4 mt-0.5 rounded-full border border-blue-500 bg-blue-500/20 flex items-center justify-center text-blue-500"><div className="w-2 h-2 rounded-full bg-blue-500" /></div>
                                        <span className="text-sm text-white">Finalize ad campaign brief</span>
                                    </div>
                                    <div className="flex items-start gap-3 opacity-50">
                                        <div className="w-4 h-4 mt-0.5 rounded-full border border-gray-600" />
                                        <span className="text-sm text-gray-400">Launch campaign</span>
                                    </div>
                                    <div className="flex items-start gap-3 opacity-50">
                                        <div className="w-4 h-4 mt-0.5 rounded-full border border-gray-600" />
                                        <span className="text-sm text-gray-400">Resource allocations</span>
                                    </div>
                                    <div className="h-2 w-full bg-white/5 rounded mt-4" />
                                    <div className="h-2 w-2/3 bg-white/5 rounded" />
                                </div>

                                {/* Floating Task Card */}
                                <div className="absolute top-8 right-4 bg-[#1e1e1e] border border-white/10 rounded-xl p-3 shadow-2xl w-48 scale-105 border-blue-500/30">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-4 h-4 bg-blue-500 rounded flex items-center justify-center"><CheckSquare size={10} className="text-white" /></div>
                                        <span className="text-[10px] text-gray-400">Task • clk-12</span>
                                    </div>
                                    <div className="text-xs font-bold text-white mb-2">Finalize ad campaign</div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded">IN PROGRESS</span>
                                        <div className="flex -space-x-1"><div className="w-4 h-4 rounded-full bg-gray-500" /><div className="w-4 h-4 rounded-full bg-gray-600" /></div>
                                    </div>
                                </div>
                                <div className="absolute top-1/2 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full pointer-events-none" />
                            </div>
                        }
                    />

                    {/* Card 3: Chat */}
                    <IntegrationCard
                        title="Meeting Notes + Chat"
                        description="Ask questions and get aggregated answers from all your meeting notes."
                        visual={
                            <div className="w-full h-full bg-[#111] p-6 flex flex-col relative overflow-hidden">
                                <div className="flex gap-3 mb-6">
                                    <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center"><User size={14} className="text-pink-500" /></div>
                                    <div>
                                        <div className="flex items-baseline gap-2 mb-1">
                                            <span className="text-sm font-bold text-white">Ivan</span>
                                            <span className="text-[10px] text-gray-500">4:12 pm</span>
                                        </div>
                                        <div className="text-xs text-gray-400 leading-relaxed mb-3">
                                            What were the action items from the last marketing stand-up?
                                        </div>
                                        {/* AI Response Block */}
                                        <div className="bg-[#1a1a1a] border border-white/5 rounded-lg p-3 relative">
                                            <div className="absolute -left-1 top-3 w-1 h-8 bg-purple-500 rounded-r-full" />
                                            <div className="text-xs font-bold text-gray-400 mb-2">Action items</div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                <span className="text-[10px] text-blue-300">Finalize ad campaign brief</span>
                                                <span className="ml-auto text-[8px] text-gray-600">Design sync</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                                                <span className="text-[10px] text-gray-400">Launch campaign</span>
                                                <span className="ml-auto text-[8px] text-gray-600">Design sync</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto relative">
                                    <div className="absolute inset-x-0 bottom-full h-8 bg-gradient-to-t from-[#111] to-transparent" />
                                    <div className="bg-[#1a1a1a] rounded-full px-4 py-2 flex items-center justify-between text-gray-500 text-xs border border-white/5">
                                        <span>Write to Marketing...</span>
                                        <Send size={12} />
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full pointer-events-none" />
                            </div>
                        }
                    />

                </div>
            </div>
        </section>
    );
};

function IntegrationCard({ title, description, visual }: { title: string, description: string, visual: React.ReactNode }) {
    return (
        <div className="bg-[#0E0E12] border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-colors group flex flex-col h-[500px]">
            <div className="h-[320px] border-b border-white/5 group-hover:bg-[#111] transition-colors">
                {visual}
            </div>
            <div className="flex-1 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
