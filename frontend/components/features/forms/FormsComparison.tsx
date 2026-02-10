'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';

const OldWay = () => (
    <div className="bg-zinc-50 rounded-[2.5rem] p-8 md:p-12 border border-zinc-100 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <X className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900">The old way</h3>
        </div>
        <div className="space-y-6 flex-1">
            <div className="p-5 bg-white rounded-2xl border border-zinc-100 shadow-sm opacity-60 flex items-center gap-4">
                <div className="w-10 h-10 bg-zinc-100 rounded-lg" />
                <div className="space-y-2 flex-1">
                    <div className="h-2 w-24 bg-zinc-100 rounded" />
                    <div className="h-2 w-full bg-zinc-50 rounded" />
                </div>
            </div>
            <div className="text-center py-4">
                <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Manual Data Entry</span>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-zinc-100 shadow-sm opacity-60 flex items-center gap-4">
                <div className="w-10 h-10 bg-zinc-100 rounded-lg" />
                <div className="space-y-2 flex-1">
                    <div className="h-2 w-32 bg-zinc-100 rounded" />
                    <div className="h-2 w-4/5 bg-zinc-50 rounded" />
                </div>
            </div>
        </div>
        <p className="mt-8 text-zinc-500 font-medium leading-relaxed">
            Disconnected, manual, and messy. Feedback gets lost in spreadsheets and never turns into action.
        </p>
    </div>
);

const ClickUpWay = () => (
    <div className="bg-[#0a0a0b] text-white rounded-[2.5rem] p-8 md:p-12 border border-white/5 flex flex-col h-full relative overflow-hidden group">
        <div className="absolute top-[-50%] left-[-20%] w-[100%] h-[100%] bg-blue-600/10 blur-[120px] rounded-full group-hover:bg-blue-600/20 transition-colors duration-700" />

        <div className="relative z-10 flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                <Check className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">The ClickUp way</h3>
        </div>

        <div className="relative z-10 space-y-4 flex-1">
            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4 shadow-xl">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Check className="w-7 h-7 text-white" />
                </div>
                <div className="space-y-2 flex-1">
                    <div className="h-2 w-32 bg-blue-400/50 rounded" />
                    <div className="h-2 w-full bg-white/10 rounded" />
                </div>
            </div>
            <div className="flex justify-center text-blue-400 my-2">
                <ArrowRight className="w-6 h-6 rotate-90" />
            </div>
            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div className="h-2 w-40 bg-white/20 rounded" />
                    <div className="h-6 w-20 bg-blue-500/20 rounded-full border border-blue-500/30 flex items-center justify-center text-[10px] font-bold text-blue-400">AUTOMATED</div>
                </div>
                <div className="h-4 w-full bg-white/5 rounded-lg border border-white/5" />
            </div>
        </div>

        <p className="relative z-10 mt-8 text-zinc-400 font-medium leading-relaxed">
            Connected, automated, and streamlined. Form submissions instantly kick off workflows and AI analysis.
        </p>
    </div>
);

export default function FormsComparison() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-20 px-4">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-[64px] leading-[1.1] font-bold text-zinc-900 mb-6 tracking-tight"
                    >
                        Build <span className="text-blue-600">better</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <OldWay />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <ClickUpWay />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
