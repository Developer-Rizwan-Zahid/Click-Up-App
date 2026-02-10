'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function KnowledgeCTA() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-[3rem] overflow-hidden bg-[#0a0a0b] py-24 px-10 text-center"
                >
                    {/* Background Branded Glows */}
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-[-50%] left-[-20%] w-[100%] h-[100%] bg-purple-600/20 blur-[150px] opacity-60 rounded-full" />
                        <div className="absolute bottom-[-50%] right-[-20%] w-[100%] h-[100%] bg-indigo-600/10 blur-[150px] opacity-40 rounded-full" />
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-[64px] leading-[1.1] font-bold text-white mb-8 tracking-tight">
                            Get answers faster, with <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">ClickUp Knowledge Management.</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-zinc-400 font-medium mb-12 leading-relaxed">
                            Get a shared source of truth and complete context from a single Brain that literally knows it all.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="xl" className="bg-[#7B68EE] hover:bg-[#6853E6] text-white px-12 py-7 rounded-2xl text-xl font-bold h-auto shadow-2xl shadow-indigo-500/40 transition-all hover:scale-105 active:scale-95">
                                Try ClickUp free
                            </Button>
                        </div>

                        <p className="mt-8 text-zinc-500 text-sm">
                            Free forever. No credit card required.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
