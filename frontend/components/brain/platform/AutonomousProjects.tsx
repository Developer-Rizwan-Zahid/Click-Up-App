"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, User, MessageSquare, List, CheckCircle2 } from "lucide-react";

export const AutonomousProjects = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <Sparkles className="text-purple-500 w-5 h-5" />
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-sm tracking-wider uppercase">
                            AI Project Management
                        </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-4xl">
                            Autonomous projects without the<br />
                            <span className="text-gray-500">busywork or micromanagement</span>
                        </h2>
                        <button className="bg-[#1f2127] hover:bg-[#2c2e36] text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all border border-white/10 hover:border-white/20 group">
                            Get started <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {/* Card 1: Auto-Tracking Progress */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-purple-500/30 transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="h-48 mb-8 relative">
                            {/* Visual: Progress Cards */}
                            <div className="absolute top-4 left-4 right-4 bg-[#1A1A1A] border border-white/10 rounded-xl p-4 shadow-lg transform rotate-[-2deg] opacity-60 scale-95 origin-bottom transition-transform group-hover:rotate-[-4deg] duration-500">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-500"><List size={16} /></div>
                                    <div className="h-2 w-24 bg-gray-700 rounded-full" />
                                </div>
                            </div>
                            <div className="absolute top-8 left-4 right-4 bg-[#1E1E1E] border border-white/10 rounded-xl p-4 shadow-xl transition-transform group-hover:scale-105 duration-500">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-500"><CheckCircle2 size={16} /></div>
                                        <div className="text-sm font-bold text-gray-200">Check for blockers</div>
                                    </div>
                                    <div className="w-8 h-4 bg-purple-500 rounded-full" />
                                </div>
                                <div className="text-xs text-gray-500">Every Monday at 10 AM PST</div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">Auto-Tracking Progress</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Everything gets tracked for you, from risks to milestones. No follow-ups, no check-ins.
                        </p>
                    </motion.div>

                    {/* Card 2: AI Stand-ups */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="h-48 mb-8 relative flex items-center justify-center">
                            <div className="bg-[#151515] border border-white/10 rounded-2xl p-5 w-full max-w-[280px] shadow-2xl relative group-hover:translate-y-[-5px] transition-transform duration-500">
                                <div className="flex items-start gap-4 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-xs font-bold">: )</span>
                                    </div>
                                    <div>
                                        <div className="flex items-baseline justify-between w-full mb-1">
                                            <span className="text-xs font-bold text-white">StandUp Agent</span>
                                            <span className="text-[10px] text-gray-500">5:59 pm</span>
                                        </div>
                                        <div className="text-[10px] text-gray-400 mb-2">@Amy</div>
                                        <p className="text-gray-300 text-xs leading-relaxed">
                                            Amy has been playing a key role in providing direction and valuable input on our design efforts.
                                        </p>
                                        <div className="mt-3 text-[10px] text-gray-400">
                                            @Lucas<br />
                                            <span className="text-purple-400">Lucas was quite busy on...</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">AI Stand-ups</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Daily tasks and blockers are compiled into one clear, meeting-free summary.
                        </p>
                    </motion.div>

                    {/* Card 3: Intelligent Task Assigning */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-pink-500/30 transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="h-48 mb-8 relative px-4 pt-6">
                            <div className="mb-2 flex items-center gap-2 text-xs text-purple-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Sparkles size={12} /> Auto assigning...
                            </div>
                            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500">
                                <div className="p-3 border-b border-white/5 text-[10px] text-gray-500 uppercase font-bold">Assignee</div>
                                <div className="p-2 space-y-1">
                                    <div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer">
                                        <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center text-[10px]">O</div>
                                        <span className="text-sm text-gray-300">Olga</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer">
                                        <div className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-500 flex items-center justify-center text-[10px]">I</div>
                                        <span className="text-sm text-gray-300">Ivan</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-2 bg-purple-500/10 rounded-lg border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)] scale-100 group-hover:scale-105 transition-transform">
                                        <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-[10px] text-white">M</div>
                                        <span className="text-sm text-white font-bold">Magda</span>
                                        <Sparkles size={10} className="ml-auto text-purple-400" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">Intelligent Task Assigning</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            AI assigns each task to the right person based on expertise, availability, and workload.
                        </p>
                    </motion.div>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Card 4: Self-Prioritizing Tasks */}
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-12 img-card group hover:border-orange-500/30 transition-all duration-500">

                        <div className="mb-10 relative">
                            {/* Visual: Tasks List */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-[#151515] opacity-50">
                                    <div className="w-4 h-4 rounded-full border border-gray-600" />
                                    <div className="flex-1 text-sm text-gray-500">Email Campaign S...</div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 rounded-full bg-gray-700" />
                                        <div className="text-[10px] bg-yellow-900/30 text-yellow-600 px-2 py-0.5 rounded">Medium</div>
                                    </div>
                                </div>

                                {/* Highlighted Task */}
                                <div className="relative">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                                    <div className="relative flex items-center gap-4 p-4 rounded-xl border border-purple-500/30 bg-[#1A1A1A] shadow-xl">
                                        <div className="w-4 h-4 rounded-full border-2 border-purple-500" />
                                        <div className="flex-1 text-sm text-white font-bold">Ad Copywriting</div>
                                        <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center border border-white/10"><User size={12} className="text-white" /></div>
                                        <div className="flex items-center gap-2">
                                            <Sparkles size={12} className="text-purple-400" />
                                            <div className="text-[10px] bg-red-900/30 text-red-500 px-2 py-0.5 rounded font-bold">Urgent</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-[#151515] opacity-50">
                                    <div className="w-4 h-4 rounded-full border border-gray-600" />
                                    <div className="flex-1 text-sm text-gray-500">Product Photogra...</div>
                                    <div className="text-[10px] bg-blue-900/30 text-blue-600 px-2 py-0.5 rounded">Normal</div>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-3">Self-Prioritizing Tasks</h3>
                        <p className="text-gray-500 leading-relaxed max-w-sm">
                            High-impact work stays in focus because priorities adapt automatically as things move.
                        </p>
                    </div>

                    {/* Card 5: Fields That Fill Themselves */}
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-12 img-card group hover:border-green-500/30 transition-all duration-500">

                        <div className="mb-10 relative">
                            {/* Visual: Auto-complete Field */}
                            <div className="bg-[#151515] border border-white/10 rounded-xl p-4 shadow-lg max-w-sm mx-auto">
                                <div className="flex items-center gap-2 text-xs text-gray-400 mb-4 border-b border-white/5 pb-2">
                                    <Sparkles size={12} className="text-purple-400" /> Add AI Field
                                </div>
                                <div className="space-y-2">
                                    <div className="bg-purple-500/10 p-2 rounded-lg border border-purple-500/20 text-xs text-purple-200">
                                        + AI Summary
                                    </div>
                                    <div className="pl-4 border-l-2 border-white/5 text-gray-500 text-xs space-y-2">
                                        <p>Product meeting concluded with...</p>
                                        <p className="text-gray-400">The analysis is complete, with key...</p>
                                        <div className="flex items-center gap-2">
                                            <span>The follow-up email has b...</span>
                                            <span className="w-1.5 h-4 bg-purple-500 animate-pulse" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-3">Fields That Fill Themselves</h3>
                        <p className="text-gray-500 leading-relaxed max-w-sm">
                            From statuses to summaries, project data updates itself so you never lift a finger.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};
