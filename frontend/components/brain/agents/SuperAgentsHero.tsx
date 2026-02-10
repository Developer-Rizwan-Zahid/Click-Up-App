"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

export const SuperAgentsHero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // --- Phase 1: Intro ---
    const introOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const introScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
    const introY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

    // --- Background Text Effect ---
    // const bgTextOpacity = useTransform(scrollYProgress, [0, 0.3], [0.1, 0]);
    // const bgTextScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);

    // --- Character Transitions ---
    // Character moves up slightly and stays central
    const characterY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
    const characterScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

    // --- Phase 2: Details Fade In ---
    const detailsOpacity = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
    const detailsY = useTransform(scrollYProgress, [0.25, 0.5], [50, 0]);

    // Floating UI Elements (Left side)
    const leftPanelX = useTransform(scrollYProgress, [0.25, 0.5], [-50, 0]);

    // Floating UI Elements (Right side)
    const rightPanelX = useTransform(scrollYProgress, [0.25, 0.5], [50, 0]);

    return (
        <div ref={containerRef} className="h-[250vh] relative bg-white">
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center bg-white">

                {/* Scroll Progress Indicator for context (Optional) */}
                <motion.div style={{ scaleX: scrollYProgress }} className="absolute top-0 left-0 right-0 h-1 bg-purple-600 origin-left z-50" />

                {/* --- Main Content Grid --- */}
                <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 h-full flex flex-col justify-center">

                    {/* Intro Sequence (Fades out) */}
                    <motion.div
                        style={{ opacity: introOpacity, pointerEvents: introOpacity.get() < 0.1 ? 'none' : 'auto' }}
                        className="absolute inset-0 flex flex-col items-center justify-center z-30 bg-white"
                    >
                        <h1 className="text-6xl md:text-9xl font-black text-gray-900 mb-6 tracking-tighter text-center">
                            Super<br />Agents
                        </h1>
                        <p className="text-xl text-gray-500 mb-8">Scroll to meet your new team</p>
                        <div className="animate-bounce text-gray-400"><Plus size={24} /></div>
                    </motion.div>

                    {/* Main Interface (Fades In) with PREMIUM LAYOUT */}
                    <motion.div
                        style={{ opacity: detailsOpacity }}
                        className="w-full h-full flex items-center"
                    >
                        <div className="w-full grid grid-cols-12 gap-8 items-center relative">

                            {/* LEFT COLUMN */}
                            <motion.div style={{ x: leftPanelX }} className="col-span-12 lg:col-span-4 space-y-10 relative z-20">

                                {/* Header Group */}
                                <div>
                                    <h3 className="text-[#5D5FEF] font-bold tracking-[0.2em] text-xs mb-5 uppercase">A new era of humans, with AI Super Agents.</h3>
                                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[0.95] tracking-tight mb-8">
                                        They're just<br />like humans
                                    </h1>
                                    <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                                        Maximize human productivity with agentic teammates - @mention, assign tasks, & message directly. Choose when, how, and what they work on - always improving with infinite knowledge & memory.
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className="h-px w-full bg-gray-100" />

                                {/* Human Powers */}
                                <div>
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Human Powers</div>
                                    <div className="space-y-3">
                                        {['Assign', 'Message', 'Mention', '500+ Human Skills'].map((item) => (
                                            <div key={item} className="group flex items-center gap-3 bg-gray-50 hover:bg-white px-5 py-3 rounded-full w-fit transition-all cursor-default border border-transparent hover:border-gray-200 hover:shadow-sm">
                                                <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 group-hover:border-gray-900 group-hover:text-gray-900 transition-colors">
                                                    <Plus size={8} />
                                                </div>
                                                <span className="font-semibold text-sm text-gray-700 group-hover:text-gray-900">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </motion.div>

                            {/* CENTER COLUMN (Image) */}
                            <div className="col-span-12 lg:col-span-4 relative h-[600px] flex items-center justify-center z-10">
                                {/* Connecting Lines (Decorative) */}
                                <div className="absolute top-[28%] left-0 w-full h-px bg-gray-100 -z-10" />
                                <div className="absolute bottom-[28%] left-0 w-full h-px bg-gray-100 -z-10" />

                                <motion.div
                                    style={{ y: characterY, scale: characterScale }}
                                    className="relative w-full h-full scale-110"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white z-20" /> {/* Blur at bottom */}
                                    <Image
                                        src="/assets/super-agents/character-1.png"
                                        alt="AI Super Agent"
                                        fill
                                        className="object-contain drop-shadow-2xl"
                                        priority
                                    />
                                </motion.div>
                            </div>

                            {/* RIGHT COLUMN */}
                            <motion.div style={{ x: rightPanelX }} className="col-span-12 lg:col-span-4 space-y-10 flex flex-col items-end text-right z-20">

                                {/* Divider Top */}
                                <div className="h-px w-full bg-gray-100" />

                                {/* Superpowers */}
                                <div className="w-full flex flex-col items-end">
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 w-full text-right">Superpowers</div>
                                    <div className="space-y-3 flex flex-col items-end">
                                        {['24/7', 'Ambient', 'Automated', 'Self-learning'].map((item) => (
                                            <div key={item} className="group flex flex-row-reverse items-center gap-3 bg-gray-50 hover:bg-white px-5 py-3 rounded-full w-fit transition-all cursor-default border border-transparent hover:border-gray-200 hover:shadow-sm">
                                                <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 group-hover:border-gray-900 group-hover:text-gray-900 transition-colors">
                                                    <Plus size={8} />
                                                </div>
                                                <span className="font-semibold text-sm text-gray-700 group-hover:text-gray-900">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Divider Mid */}
                                <div className="h-px w-full bg-gray-100" />

                                {/* Superintelligence */}
                                <div className="max-w-md w-full">
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 text-right">Superintelligence</div>
                                    <div className="bg-gray-50/50 backdrop-blur-sm p-8 rounded-[32px] border border-gray-200/50 mb-8 text-left hover:bg-white hover:shadow-lg transition-all duration-300">
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            <span className="font-bold text-gray-900">Infinite Memory.</span> Recent memory, working memory, and long-term memory are automatically stored and recalled.
                                        </p>
                                    </div>
                                    <div className="flex justify-end">
                                        <div className="group flex flex-row-reverse items-center gap-3 bg-white border border-gray-200 px-6 py-3 rounded-full hover:shadow-md transition-all cursor-pointer">
                                            <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 group-hover:border-gray-900 group-hover:text-gray-900 transition-colors">
                                                <Plus size={10} />
                                            </div>
                                            <span className="font-bold text-gray-900 text-sm">Infinite Knowledge</span>
                                        </div>
                                    </div>
                                </div>

                            </motion.div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};
