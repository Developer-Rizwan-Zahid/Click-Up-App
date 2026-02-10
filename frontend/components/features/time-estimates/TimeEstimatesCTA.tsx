'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function TimeEstimatesCTA() {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-[4rem] overflow-hidden bg-[#1f2128] py-24 px-10 text-center border border-white/5 shadow-2xl"
                >
                    {/* Background Decorative Rings */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] border-[40px] border-white/5 rounded-full" />
                        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] border-[30px] border-white/5 rounded-full" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-600/10 blur-[150px] opacity-60 rounded-full" />
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto text-white">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="inline-block p-4 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 mb-8"
                        >
                            <Sparkles className="w-8 h-8 text-purple-400" />
                        </motion.div>

                        <h2 className="text-4xl md:text-[72px] leading-[1.05] font-black mb-8 tracking-tight">
                            Ready to set your <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">first time estimate?</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-zinc-400 font-medium mb-12 leading-relaxed max-w-2xl mx-auto">
                            Join over 2 million teams using ClickUp to manage their time and productivity effectively.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Button size="xl" className="bg-[#7B68EE] hover:bg-[#6a56e0] text-white px-12 py-7 rounded-2xl text-xl font-bold h-auto shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3">
                                Get started for free
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </div>

                        <p className="mt-8 text-zinc-500 text-sm font-bold uppercase tracking-widest">
                            No credit card required. Free forever.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
