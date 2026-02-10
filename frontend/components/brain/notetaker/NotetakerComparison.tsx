"use client";

import { motion } from "framer-motion";
import { X, Check, ArrowRight, Layers } from "lucide-react";

export const NotetakerComparison = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-gray-300 mb-6 uppercase tracking-wider">
                            <Layers size={12} className="text-gray-400" /> our solution
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
                            Meetings are broken. <br />
                            We fixed them.
                        </h2>
                    </div>
                    <p className="text-xl text-gray-400 max-w-sm mb-2">
                        Turn the mess after meetings into clear, actionable insights.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-stretch">

                    {/* The Old Way (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 relative"
                    >
                        <h3 className="text-2xl font-bold text-gray-200 mb-12 text-center md:text-left">The old way</h3>

                        <div className="space-y-8">
                            {[
                                "\"What were the action items, again?\"",
                                "\"Where are my call notes?\"",
                                "\"Everyone is quietly watching me type notes.\"",
                                "\"What did we agree on, last week?\"",
                                "\"Which call did we discuss that on??\""
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-4 text-gray-400 font-medium">
                                    <div className="w-8 h-8 rounded-full border border-red-500/50 flex items-center justify-center shrink-0">
                                        <X size={14} className="text-red-500" />
                                    </div>
                                    <span className="text-lg">{text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Subtle red glow background */}
                        <div className="absolute inset-0 bg-red-900/5 blur-[100px] pointer-events-none" />
                    </motion.div>

                    {/* The ClickUp Way (Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="bg-gradient-to-b from-purple-600 via-[#1a0b2e] to-[#0E0E12] rounded-[40px] p-10 md:p-12 h-full border border-white/10 overflow-hidden relative">
                            {/* Grain/Texture Overlay could go here */}
                            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/20 to-purple-600/10 pointer-events-none" />

                            <div className="relative z-10 flex flex-col h-full">
                                <h3 className="text-3xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
                                    The <ClickUpLogo /> way
                                </h3>

                                <div className="space-y-8 flex-1 mb-12">
                                    {[
                                        "\"We all know what to do!\"",
                                        "\"I can ask Brain about any of my meetings.\"",
                                        "\"No one has to watch me update a doc!\"",
                                        "\"I'm caught up on that call...without having to join it.\""
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-center gap-4 text-white font-bold">
                                            <div className="w-8 h-8 rounded-full bg-fuchsia-600 flex items-center justify-center shrink-0 shadow-lg shadow-fuchsia-600/30">
                                                <Check size={16} className="text-white" />
                                            </div>
                                            <span className="text-lg leading-tight">{text}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className="w-full py-4 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg">
                                    Get Started. It's free <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const ClickUpLogo = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 21.5L2 16.5L16 2.5L30 16.5L25 21.5L16 12.5L7 21.5Z" fill="white" />
        <path d="M7 29.5L16 20.5L25 29.5" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)
