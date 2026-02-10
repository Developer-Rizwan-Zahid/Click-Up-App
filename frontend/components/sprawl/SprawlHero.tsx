"use client";

import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

export const SprawlHero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">

            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-900/20 blur-[120px] rounded-full" />

            {/* Floating Hexagons */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Hexagon 1 (Top Left) */}
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-32 left-10 md:left-32 w-32 h-32 opacity-50"
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                        <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="url(#grad1)" stroke="rgba(168,85,247,0.5)" strokeWidth="1" />
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="rgba(50,50,50,0.5)" />
                                <stop offset="100%" stopColor="rgba(20,20,20,0.5)" />
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>

                {/* Hexagon 2 (Top Right) */}
                <motion.div
                    animate={{ y: [0, 25, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-48 right-10 md:right-48 w-24 h-24 opacity-60"
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(236,72,153,0.4)]">
                        <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="none" stroke="rgba(236,72,153,0.6)" strokeWidth="2" />
                    </svg>
                </motion.div>

                {/* Hexagon 3 (Bottom Right) */}
                <motion.div
                    animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-40 right-20 w-40 h-40 opacity-40"
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                        <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="url(#grad2)" stroke="rgba(139,92,246,0.3)" strokeWidth="1" />
                        <defs>
                            <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="rgba(88,28,135,0.2)" />
                                <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>
            </div>

            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">
                        <span className="text-white">The AI</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-pink-500 to-purple-600">
                            Workforce
                        </span>
                    </h1>

                    <div className="flex items-center justify-center gap-3 mb-8 opacity-90">
                        {/* ClickUp Logo */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 10C4 10 4 17 12 17C20 17 20 10 20 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7 8L12 3L17 8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-xl font-bold text-white">ClickUp</span>
                    </div>

                    <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10 leading-relaxed">
                        A look at how AI is reshaping the workforce, the real impact of AI on productivity, and why most organizations are still missing the mark on true AI transformation.
                    </p>

                    <Button className="bg-white text-black hover:bg-gray-200 font-bold px-8 py-6 rounded-lg text-base shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all">
                        <Download className="w-4 h-4 mr-2" />
                        Download white paper (pdf)
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};
