'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Timer, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function TimeEstimatesHero() {
    return (
        <section className="relative pt-32 pb-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-8"
                >
                    <Timer className="w-4 h-4 text-purple-600" />
                    <span className="text-[12px] font-bold text-purple-700 uppercase tracking-widest">Time Estimates & Capacity</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-[84px] leading-[1.02] font-black text-zinc-900 mb-8 tracking-tight"
                >
                    Forecast and set expectations <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 text-nowrap">with time estimates</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl md:text-[22px] text-zinc-500 font-medium mb-12 leading-relaxed max-w-3xl mx-auto"
                >
                    Set time estimates to create clear timelines and manage your team's workload effectively. Always know how long a project will take.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                >
                    <Button size="xl" className="bg-[#1f2128] hover:bg-black text-white px-10 py-7 rounded-2xl text-xl font-bold h-auto shadow-2xl transition-all hover:scale-105 active:scale-95 group">
                        Get started. It's FREE
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                </motion.div>

                {/* Hero Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative max-w-5xl mx-auto"
                >
                    <div className="relative aspect-[16/9] bg-zinc-900 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-white/10 overflow-hidden group">
                        {/* Mock App Context */}
                        <div className="absolute inset-0 p-8 flex flex-col">
                            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                                        <Clock className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div className="text-left">
                                        <div className="h-3 w-32 bg-white/20 rounded mb-2" />
                                        <div className="h-2 w-20 bg-white/5 rounded" />
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="h-8 w-8 bg-white/5 rounded-full" />
                                    <div className="h-8 w-8 bg-white/5 rounded-full" />
                                </div>
                            </div>

                            {/* Center: Time Estimate Popover */}
                            <div className="flex-1 flex items-center justify-center">
                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl shadow-purple-500/20 text-left border border-purple-100"
                                >
                                    <div className="flex items-center justify-between mb-8">
                                        <h3 className="text-xl font-black text-zinc-900">Time Estimate</h3>
                                        <div className="px-3 py-1 bg-purple-50 text-purple-600 text-sm font-bold rounded-lg border border-purple-100">
                                            3h 30m Total
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center justify-between group-hover:bg-purple-50 transition-colors">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-indigo-500 rounded-full border-2 border-white shadow-sm" />
                                                <span className="font-bold text-zinc-900">Amy</span>
                                            </div>
                                            <span className="font-mono font-bold text-zinc-500">2h</span>
                                        </div>
                                        <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center justify-between group-hover:bg-purple-50 transition-colors">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-purple-500 rounded-full border-2 border-white shadow-sm" />
                                                <span className="font-bold text-zinc-900">Maria</span>
                                            </div>
                                            <span className="font-mono font-bold text-zinc-500">1h 30m</span>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-zinc-100">
                                        <button className="w-full py-4 bg-purple-600 text-white rounded-2xl font-bold shadow-xl shadow-purple-500/20 hover:bg-purple-700 transition-colors">
                                            Save Estimate
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute top-[-50%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[120px] rounded-full" />
                        <div className="absolute bottom-[-30%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[100px] rounded-full" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
