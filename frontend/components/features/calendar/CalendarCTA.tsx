'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export default function CalendarCTA() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#121212] to-[#1f1f21] py-24 px-10 text-center border border-white/5"
                >
                    {/* Background Decorative Glow */}
                    <div className="absolute top-[-50%] left-[-20%] w-[100%] h-[100%] bg-blue-600/10 blur-[150px] opacity-60 rounded-full" />

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-[64px] leading-[1.1] font-bold text-white mb-8 tracking-tight">
                            Get back all the <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">time you need.</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-zinc-400 font-medium mb-12 leading-relaxed max-w-2xl mx-auto">
                            ClickUp has transformed your calendar into a time (management) machine.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Button size="xl" className="bg-[#5c4ce1] hover:bg-[#4a3bc2] text-white px-12 py-7 rounded-2xl text-xl font-bold h-auto shadow-2xl transition-all hover:scale-105 active:scale-95">
                                Try it out
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
