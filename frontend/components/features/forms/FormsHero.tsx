'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, ArrowRight } from 'lucide-react';

export default function FormsHero() {
    return (
        <section className="relative pt-32 pb-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center mb-16 px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-7xl lg:text-[80px] leading-[1.05] font-black text-zinc-900 mb-8 tracking-tight"
                    >
                        Forms that integrate with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">everything else</span> you're doing
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl md:text-2xl text-zinc-500 font-medium mb-12 leading-relaxed max-w-3xl mx-auto"
                    >
                        Take action faster with connected forms that centralize feedback, kickoff workflows, and drive AI-powered analysis.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
                    >
                        <button className="bg-[#1f2128] hover:bg-black text-white px-10 py-6 rounded-2xl text-[20px] font-bold h-auto shadow-2xl transition-all hover:scale-105 active:scale-95 group">
                            Get started. It's FREE
                            <ArrowRight className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm font-bold text-zinc-400"
                    >
                        <div className="flex items-center gap-4">
                            <div className="flex gap-0.5">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <span className="text-zinc-500 uppercase tracking-wider">25,000+ reviews from</span>
                        </div>
                        <div className="flex items-center gap-6 grayscale opacity-40">
                            {/* Mock Logos */}
                            <div className="h-4 w-12 bg-zinc-200 rounded" />
                            <div className="h-4 w-12 bg-zinc-200 rounded" />
                            <div className="h-4 w-12 bg-zinc-200 rounded" />
                        </div>
                    </motion.div>
                </div>

                {/* Hero Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="relative max-w-6xl mx-auto"
                >
                    <div className="relative bg-zinc-900 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] p-4 border border-white/10 aspect-[16/10] overflow-hidden">
                        {/* Mock Form Builder Header */}
                        <div className="h-14 border-b border-white/10 flex items-center justify-between px-8">
                            <div className="flex items-center gap-4">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="w-px h-6 bg-white/10" />
                                <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg">
                                    <div className="w-4 h-4 rounded-sm border border-blue-400" />
                                    <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest">Creative request</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="h-8 w-24 bg-white/5 rounded-lg border border-white/5" />
                                <div className="h-8 w-24 bg-blue-600 rounded-lg shadow-lg shadow-blue-500/20" />
                            </div>
                        </div>

                        {/* Split Mock Content */}
                        <div className="flex h-[calc(100%-3.5rem)]">
                            {/* Left: Fields List */}
                            <div className="w-64 border-r border-white/10 p-6 hidden md:block">
                                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-6">Standard Fields</div>
                                <div className="space-y-3">
                                    {[1, 2, 3, 4, 5, 6].map(i => (
                                        <div key={i} className="h-10 w-full bg-white/5 rounded-xl border border-white/5 flex items-center px-3 gap-3">
                                            <div className="w-4 h-4 bg-zinc-700 rounded-sm" />
                                            <div className="h-2 w-20 bg-zinc-700 rounded" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Middle: Form Canvas */}
                            <div className="flex-1 bg-black/40 p-10 overflow-hidden relative">
                                <div className="max-w-md mx-auto space-y-8">
                                    <div className="space-y-4">
                                        <div className="h-8 w-48 bg-white/10 rounded-xl" />
                                        <div className="h-4 w-72 bg-white/5 rounded-lg" />
                                    </div>
                                    <div className="space-y-6">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="space-y-3">
                                                <div className="h-3 w-24 bg-zinc-700 rounded" />
                                                <div className="h-12 w-full bg-white/5 rounded-xl border border-white/10" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Floating Cursor Annotations */}
                                <div className="absolute top-1/2 left-3/4">
                                    <div className="bg-blue-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-xl">
                                        Assign tasks to
                                    </div>
                                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-blue-500 ml-4" />
                                </div>
                            </div>

                            {/* Right: Settings Toggle Panel */}
                            <div className="w-80 border-l border-white/10 p-6 hidden lg:block bg-zinc-900/50">
                                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-6">Form Settings</div>
                                <div className="space-y-6">
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5 space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="h-2 w-20 bg-zinc-500 rounded" />
                                            <div className="w-8 h-4 bg-blue-600 rounded-full" />
                                        </div>
                                        <div className="h-2 w-full bg-zinc-700 rounded" />
                                    </div>
                                    <div className="p-4 bg-white/10 rounded-2xl border border-blue-500/30 space-y-4 shadow-lg shadow-blue-500/5">
                                        <div className="flex items-center gap-2">
                                            <Shield className="w-4 h-4 text-blue-400" />
                                            <div className="h-2 w-24 bg-blue-300 rounded" />
                                        </div>
                                        <div className="h-2 w-4/5 bg-blue-300/30 rounded" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Background Gradients */}
                    <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full -z-10" />
                    <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full -z-10" />
                </motion.div>
            </div>
        </section>
    );
}
