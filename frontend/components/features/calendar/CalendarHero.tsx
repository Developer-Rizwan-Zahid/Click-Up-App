'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Check } from 'lucide-react';

const trustLogos = [
    { name: 'Wayfair', url: 'https://clickup.com/assets/images/brand-assets/logos/wayfair.svg' },
    { name: 'Deloitte', url: 'https://clickup.com/assets/images/brand-assets/logos/deloitte.svg' },
    { name: 'Pfizer', url: 'https://clickup.com/assets/images/brand-assets/logos/pfizer.svg' },
    { name: 'Adobe', url: 'https://clickup.com/assets/images/brand-assets/logos/adobe.svg' },
    { name: 'American', url: 'https://clickup.com/assets/images/brand-assets/logos/american-airlines.svg' },
    { name: 'NBCUniversal', url: 'https://clickup.com/assets/images/brand-assets/logos/nbc.svg' },
];

export default function CalendarHero() {
    return (
        <section className="relative pt-32 pb-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
                    {/* Left: Text Content */}
                    <div className="w-full lg:w-1/2 text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[#7B68EE] text-[13px] font-black uppercase tracking-[0.2em] mb-6"
                        >
                            New ClickUp Calendar
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-[76px] leading-[1.05] font-black text-[#1a1c21] mb-8 tracking-tight"
                        >
                            AI–powered <br />
                            calendar that <br />
                            adapts to <br />
                            your priorities
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl md:text-[22px] text-zinc-500 font-medium mb-12 leading-tight max-w-[480px]"
                        >
                            Let ClickUp AI plan your perfect schedule based on your tasks, events, and goals.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap items-center gap-6 mb-8"
                        >
                            <button className="bg-[#1f2128] hover:bg-black text-white px-8 py-5 rounded-2xl text-[19px] font-bold h-auto flex items-center gap-3 transition-all hover:scale-105 active:scale-95 group shadow-xl">
                                Get Started. It's FREE
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </button>
                            <div className="text-[14px] text-zinc-400 font-bold leading-tight">
                                Works with Outlook <br />
                                and Google Calendar
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center gap-3 text-[13px] font-black text-zinc-400 uppercase tracking-wider"
                        >
                            <div className="flex gap-0.5">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <span>25,000+ reviews from</span>
                            <div className="flex items-center gap-3 opacity-60">
                                <img src="https://clickup.com/assets/images/logos/g2-gray.svg" alt="G2" className="h-4" />
                                <img src="https://clickup.com/assets/images/logos/capterra-gray.svg" alt="Capterra" className="h-4" />
                                <img src="https://clickup.com/assets/images/logos/getapp-gray.svg" alt="GetApp" className="h-4" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Premium Mockup/Video Area */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative aspect-[16/11] rounded-[40px] overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 shadow-[0_50px_100px_-20px_rgba(37,99,235,0.3)] p-1"
                        >
                            <div className="w-full h-full bg-white rounded-[38px] overflow-hidden relative">
                                {/* Blurred App Background */}
                                <img
                                    src="https://clickup.com/assets/images/features/calendar/calendar-hero.png"
                                    alt="Calendar App"
                                    className="w-full h-full object-cover blur-[2px] opacity-20"
                                />

                                {/* Overlay Content Matching Screenshot */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                                    <div className="space-y-4 max-w-sm w-full">
                                        <motion.div
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.8 }}
                                            className="bg-white rounded-xl shadow-2xl p-4 flex items-center justify-between border border-zinc-100"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-4 h-4 rounded-sm bg-blue-500 flex-shrink-0" />
                                                <span className="text-sm font-bold text-zinc-800">Improved Operational Metrics</span>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 1 }}
                                            className="bg-white rounded-xl shadow-2xl p-4 flex items-center justify-between border border-zinc-100"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-4 h-4 rounded-sm bg-blue-400 flex-shrink-0" />
                                                <span className="text-sm font-bold text-zinc-800">Compile Department Reports</span>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* AI is taking notes indicator */}
                                    <motion.div
                                        animate={{ opacity: [0.6, 1, 0.6] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute bottom-12 px-5 py-2.5 bg-zinc-900 text-white rounded-full text-[12px] font-bold flex items-center gap-2 shadow-xl"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                                        AI is taking notes...
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Trust Logos */}
                <div className="mt-24 pt-20 border-t border-zinc-100">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="text-[12px] font-black text-zinc-400 uppercase tracking-[0.2em] whitespace-nowrap">
                            Trusted by the best
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-40">
                            {trustLogos.map((brand) => (
                                <img key={brand.name} src={brand.url} alt={brand.name} className="h-6 md:h-7" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full -z-10" />
        </section>
    );
}
