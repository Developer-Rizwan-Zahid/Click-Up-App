'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function KnowledgeHero() {
    return (
        <section className="relative pt-32 pb-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Left: Text Content */}
                    <div className="w-full lg:w-1/2 text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-[12px] font-bold text-[#7B68EE] uppercase tracking-[0.2em] mb-6"
                        >
                            AI KNOWLEDGE MANAGEMENT
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-[84px] leading-[1.02] font-black text-zinc-900 mb-8 tracking-[-0.03em]"
                        >
                            Unlock your <br />
                            team's collective <br />
                            knowledge
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl md:text-[22px] text-zinc-500 font-medium mb-12 leading-[1.5] max-w-[550px]"
                        >
                            Connected Docs, wikis, and the world's most complete Work AI mean answers are automatic and your company's knowledge is always available.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center gap-4 mb-8"
                        >
                            <button className="bg-[#1f2128] hover:bg-black text-white px-8 py-5 rounded-2xl text-[18px] font-bold h-auto shadow-2xl transition-all hover:scale-105 active:scale-95">
                                Get started. It's FREE
                            </button>
                            <button className="bg-[#eff2f5] hover:bg-[#e4e8ec] text-[#1f2128] font-bold text-[18px] px-8 py-5 rounded-2xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                                Learn More ↓
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex items-center gap-4 text-sm font-bold text-zinc-400"
                        >
                            <div className="flex gap-0.5">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <span className="text-zinc-500">25,000+ reviews from</span>
                            <div className="flex items-center gap-2 grayscale opacity-60">
                                <div className="w-4 h-4 bg-red-500 rounded-sm" />
                                <div className="w-4 h-4 bg-teal-500 rounded-sm" />
                                <div className="w-4 h-4 bg-orange-500 rounded-sm" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Video Section */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#7B68EE] via-[#E348B4] to-[#FF7F50] p-1.5 shadow-2xl shadow-purple-500/20"
                        >
                            <div className="w-full h-full rounded-[2.3rem] overflow-hidden bg-white relative group">
                                <iframe
                                    src="https://www.youtube.com/embed/xjI98GHGU2o?autoplay=0&mute=1&controls=1"
                                    className="w-full h-full object-cover"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                                <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    <div className="w-20 h-20 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-2xl">
                                        <div className="w-0 h-0 border-l-[15px] border-l-purple-600 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-2" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-purple-100 rounded-full blur-[100px] opacity-40 -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}

