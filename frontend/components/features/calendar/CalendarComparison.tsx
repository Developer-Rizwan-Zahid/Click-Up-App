'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, Clock, AlertTriangle } from 'lucide-react';

export default function CalendarComparison() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-20 px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-[64px] leading-[1.1] font-bold text-zinc-900 mb-6 tracking-tight"
                    >
                        Master your <span className="text-blue-600">time</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {/* The Old Way */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-50 rounded-[3rem] p-10 md:p-14 border border-zinc-100"
                    >
                        <div className="flex items-center gap-3 mb-12">
                            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                                <AlertTriangle className="w-6 h-6 text-red-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-zinc-900 uppercase tracking-widest">The old way</h3>
                        </div>

                        <div className="space-y-8">
                            {[
                                "Manually hunting for meeting links",
                                "Disconnected calendar and tasks",
                                "Zero visibility into team bandwidth"
                            ].map((text, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                        <X className="w-4 h-4 text-red-400" />
                                    </div>
                                    <p className="text-lg text-zinc-500 font-medium">{text}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* The ClickUp Way */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#0a0a0b] text-white rounded-[3rem] p-10 md:p-14 border border-white/5 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/20 blur-[100px] rounded-full transition-all group-hover:bg-blue-600/30" />

                        <div className="relative z-10 flex items-center gap-3 mb-12">
                            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                                <Check className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white uppercase tracking-widest">The ClickUp way</h3>
                        </div>

                        <div className="relative z-10 space-y-8">
                            {[
                                "AI-transcribed meeting notes and action items",
                                "Tasks and events unified in one smart view",
                                "Automated scheduling tailored to your goals"
                            ].map((text, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 flex-shrink-0">
                                        <Check className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <p className="text-lg text-zinc-300 font-medium">{text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4">
                            <Clock className="w-6 h-6 text-blue-400" />
                            <div className="h-2 flex-1 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '85%' }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="h-full bg-blue-500"
                                />
                            </div>
                            <span className="text-sm font-bold text-blue-400">85% Faster</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
