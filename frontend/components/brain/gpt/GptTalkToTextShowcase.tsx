"use client";

import { motion } from "framer-motion";
import { Mic, Check, X, MoreHorizontal, MessageSquare, Mail, Calendar, Video, FileText, Slack, Figma, Github, Disc } from "lucide-react";
import Image from "next/image";

export const GptTalkToTextShowcase = () => {
    return (
        <section className="bg-black py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto text-center">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="flex items-center justify-center gap-2 text-red-500 font-bold mb-6 text-sm uppercase tracking-widest">
                        <Mic size={14} /> Talk to Text
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 italic pr-2">faster</span> than humanly possible,
                        <br />
                        with a new superpower – your voice.
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Dictate your ideas into instantly polished messages with AI-powered Talk to Text.
                    </p>
                </motion.div>

                {/* Main UI Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-5xl mx-auto"
                >
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-red-500/10 blur-[120px] rounded-full pointer-events-none" />

                    {/* Main Container */}
                    <div className="relative bg-[#0E0E12] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl p-8 md:p-12 min-h-[600px] text-left">

                        {/* Mock UI Layer */}
                        <div className="flex flex-col gap-6 relative z-10">

                            {/* Recording Bar */}
                            <div className="bg-[#18181B] border border-white/10 rounded-full p-2 pl-6 flex items-center justify-between shadow-lg w-full max-w-xl mx-auto mb-10">
                                <div className="flex items-center gap-4">
                                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                                    <div className="flex items-center gap-1 h-8">
                                        {[...Array(12)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                animate={{ height: [12, 24, 12] }}
                                                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.05 }}
                                                className="w-1 bg-white/20 rounded-full"
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="px-6 py-2 bg-white text-black font-bold rounded-full text-sm hover:bg-gray-200 transaction-colors">Stop</button>
                                </div>
                            </div>

                            {/* Transcript Area Mock */}
                            <div className="bg-[#18181B] border border-white/5 rounded-2xl p-6 relative max-w-2xl mx-auto w-full">
                                <div className="text-xs text-gray-500 mb-4 flex justify-between items-center">
                                    <span>Talk to Text</span>
                                    <span>00:14</span>
                                </div>
                                <div className="text-white text-lg font-medium leading-relaxed mb-4">
                                    <span className="text-purple-400">@Team</span> the latest website copy is ready for final review.
                                    Great work getting this done ahead of schedule! Let's ship it by EOD.
                                </div>
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/20">42 words</span>
                                    <span className="px-3 py-1 bg-white/5 text-gray-400 text-xs rounded-full border border-white/5">Perfect grammer</span>
                                    <span className="px-3 py-1 bg-white/5 text-gray-400 text-xs rounded-full border border-white/5">72% faster</span>
                                </div>
                            </div>

                            {/* Floating App Icons */}
                            <div className="absolute top-20 -left-10 md:left-10 animate-float-slow">
                                <div className="w-16 h-16 bg-[#18181B] border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl rotate-[-12deg]">
                                    <Video className="text-blue-500 w-8 h-8" />
                                </div>
                            </div>
                            <div className="absolute bottom-40 -right-4 md:right-20 animate-float-delayed">
                                <div className="w-16 h-16 bg-[#18181B] border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl rotate-[12deg]">
                                    <div className="w-8 h-8 bg-transparent"><img src="https://cdn.worldvectorlogo.com/logos/figma-1.svg" alt="Figma" /></div>
                                </div>
                            </div>
                            <div className="absolute top-1/2 right-10 md:right-32 animate-float">
                                <div className="w-12 h-12 bg-[#18181B] border border-white/10 rounded-xl flex items-center justify-center shadow-2xl rotate-[6deg]">
                                    <Slack className="text-white w-6 h-6" />
                                </div>
                            </div>
                            <div className="absolute bottom-20 left-20 animate-float-delayed">
                                <div className="w-16 h-16 bg-[#18181B] border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl rotate-[-6deg]">
                                    <div className="w-8 h-8 bg-transparent"><img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" /></div>
                                </div>
                            </div>

                        </div>

                        {/* Faded Background UI */}
                        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                            <div className="p-8 grid grid-cols-2 gap-4 filter blur-[2px]">
                                <div className="h-40 bg-white/5 rounded-2xl" />
                                <div className="h-40 bg-white/5 rounded-2xl" />
                                <div className="h-60 bg-white/5 rounded-2xl col-span-2" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
