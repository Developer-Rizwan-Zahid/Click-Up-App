"use client";

import { motion } from "framer-motion";
import { Search, FileText, CheckSquare, MessageSquare, Link as LinkIcon, Sparkles } from "lucide-react";

export const GptDemo = () => {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto">

                    {/* Chat Interface */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-1 shadow-2xl relative overflow-hidden"
                    >
                        {/* Glow effect */}
                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

                        <div className="bg-[#111] rounded-[22px] min-h-[500px] flex flex-col relative overflow-hidden">

                            {/* Chat Header */}
                            <div className="p-6 border-b border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-purple-900/40">
                                        <Sparkles size={16} className="text-white" />
                                    </div>
                                    <div className="font-bold text-white">BrainGPT</div>
                                </div>
                                <div className="text-sm text-gray-500">Connected to Workspace</div>
                            </div>

                            {/* Messages */}
                            <div className="flex-1 p-8 space-y-8">
                                {/* Answer */}
                                <div className="flex gap-6">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-fuchsia-600 flex items-center justify-center shrink-0">
                                        <Sparkles size={16} className="text-white" />
                                    </div>
                                    <div className="space-y-4 max-w-3xl">
                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            Based on the project roadmap, the <span className="text-white font-medium">Sprint 4 launch</span> is scheduled for next Tuesday. The <span className="text-white font-medium">Marketing Team</span> is waiting on the final video assets before they can proceed.
                                        </p>

                                        {/* Dynamic Context Cards */}
                                        <div className="flex flex-wrap gap-3 mt-4">
                                            <div className="bg-[#1A1A1A] border border-white/5 rounded-lg px-3 py-2 flex items-center gap-2 hover:bg-[#222] cursor-pointer transition-colors group">
                                                <div className="bg-blue-500/20 p-1 rounded text-blue-500"><FileText size={12} /></div>
                                                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Product Roadmap.doc</span>
                                            </div>
                                            <div className="bg-[#1A1A1A] border border-white/5 rounded-lg px-3 py-2 flex items-center gap-2 hover:bg-[#222] cursor-pointer transition-colors group">
                                                <div className="bg-green-500/20 p-1 rounded text-green-500"><CheckSquare size={12} /></div>
                                                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Video Assets Task</span>
                                            </div>
                                            <div className="bg-[#1A1A1A] border border-white/5 rounded-lg px-3 py-2 flex items-center gap-2 hover:bg-[#222] cursor-pointer transition-colors group">
                                                <div className="bg-orange-500/20 p-1 rounded text-orange-500"><MessageSquare size={12} /></div>
                                                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">#marketing-sync</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating User Question (Simulated) */}
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4">
                                <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-4 flex items-center gap-4 shadow-2xl backdrop-blur-md">
                                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs text-white shrink-0">You</div>
                                    <div className="flex-1 text-gray-500">What is the status of the launch?</div>
                                    <div className="p-2 bg-purple-600 rounded-lg text-white">
                                    <Search size={16}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
