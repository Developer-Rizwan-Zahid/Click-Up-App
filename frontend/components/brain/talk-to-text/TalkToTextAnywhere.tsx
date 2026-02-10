"use client";

import { motion } from "framer-motion";
import { Mic, Mail, Hash, Github, FileText, Calendar, Cloud, MessageSquare, Zap } from "lucide-react";

export const TalkToTextAnywhere = () => {
    return (
        <section className="py-32 px-4 bg-black text-white relative overflow-hidden">

            {/* Background Dot Pattern */}
            <div className="absolute inset-0 opacity-20"
                style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '24px 24px' }}
            />

            {/* Radial Fade for Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_80%)]" />

            <div className="container mx-auto max-w-6xl relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-medium border border-white/10 mb-8 backdrop-blur-sm">
                        <Zap size={14} className="text-white" />
                        <span>No app-switching</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                        Speak once to type everywhere
                    </h2>
                    <p className="text-xl text-gray-400 font-medium flex items-center justify-center gap-2">
                        Use Talk to Text wherever your cursor is – just press <span className="bg-gray-800 border border-gray-700 rounded px-1.5 py-0.5 text-sm font-mono text-gray-300">fn</span> and speak.
                    </p>
                </div>

                {/* Orbit Visual */}
                <div className="relative w-[600px] h-[600px] mx-auto flex items-center justify-center">

                    {/* Central Glowing Button */}
                    <div className="relative z-20 w-32 h-32 rounded-full bg-gradient-to-b from-fuchsia-500 to-purple-600 shadow-[0_0_80px_rgba(192,38,211,0.6)] flex items-center justify-center border-4 border-black box-content">
                        <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse" />
                        <div className="flex gap-1 items-center">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ height: [12, 32 + Math.random() * 20, 12] }}
                                    transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.1 }}
                                    className="w-1.5 bg-white rounded-full shadow-[0_0_10px_white]"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Orbit Ring 1 (Inner) */}
                    <div className="absolute w-[300px] h-[300px] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#1c1c1e] rounded-full border border-white/10 flex items-center justify-center shadow-lg -rotate-[0deg]">
                            <Mail size={20} className="text-red-500" />
                        </div>
                        <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-10 h-10 bg-[#1c1c1e] rounded-full border border-white/10 flex items-center justify-center shadow-lg -rotate-[180deg]">
                            <MessageSquare size={18} className="text-blue-500" />
                        </div>
                    </div>

                    {/* Orbit Ring 2 (Outer) */}
                    <div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse]">
                        <div className="absolute top-1/4 -left-3 w-14 h-14 bg-[#1c1c1e] rounded-full border border-white/10 flex items-center justify-center shadow-lg rotate-[45deg]">
                            <Cloud size={24} className="text-sky-500" /> {/* Salesforce-ish */}
                        </div>
                        <div className="absolute bottom-1/4 -right-3 w-16 h-16 bg-[#1c1c1e] rounded-full border border-white/10 flex items-center justify-center shadow-lg -rotate-[45deg]">
                            <FileText size={28} className="text-amber-500" /> {/* Drive-ish */}
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-[#1c1c1e] rounded-full border border-white/10 flex items-center justify-center shadow-lg">
                            <Github size={20} className="text-white" />
                        </div>
                    </div>

                    {/* Floating Bubbles (Static for now, could be animated) */}
                    {/* Bubble 1 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 20 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        className="absolute top-20 right-0 z-30 bg-[#1c1c1e]/90 backdrop-blur border border-white/10 p-4 rounded-xl rounded-bl-sm shadow-2xl max-w-[200px]"
                    >
                        <p className="text-xs text-gray-300 leading-relaxed">
                            "Remind <span className="text-fuchsia-400">@Libby</span> to prioritize <span className="text-blue-400">Sprint 12 backlog</span> for tomorrow's retro."
                        </p>
                    </motion.div>

                    {/* Bubble 2 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: -20 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="absolute bottom-20 left-10 z-30 bg-[#1c1c1e]/90 backdrop-blur border border-white/10 p-4 rounded-xl rounded-tr-sm shadow-2xl max-w-[220px]"
                    >
                        <p className="text-xs text-gray-300 leading-relaxed">
                            "Schedule a sync with <span className="text-fuchsia-400">@Josh</span> on the MQL pipeline before our EOD standup."
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
