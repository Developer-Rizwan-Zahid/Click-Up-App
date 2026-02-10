"use client";

import { motion } from "framer-motion";

export const SprawlLandingHero = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-black text-center pt-20">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Glowing borders */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent shadow-[0_0_20px_rgba(6,182,212,0.5)]" />
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent shadow-[0_0_20px_rgba(236,72,153,0.5)]" />
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
                <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />

                {/* Radial glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 blur-[150px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">
                        Presented by <span className="text-white">ClickUp</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.9] mb-12">
                        It's time <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                            to kill
                        </span> <br />
                        Work Sprawl <br />
                        for good.
                    </h1>

                    <div className="h-24 w-[1px] bg-gradient-to-b from-white/20 to-transparent mx-auto mt-12 animate-pulse" />
                </motion.div>
            </div>
        </section>
    );
};
