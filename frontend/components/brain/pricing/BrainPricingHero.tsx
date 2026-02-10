"use client";

import { motion } from "framer-motion";

export const BrainPricingHero = () => {
    return (
        <section className="bg-black pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-white flex flex-col items-center text-center">

            {/* Flower Glow Visual */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative mb-12 w-48 h-48 flex items-center justify-center"
            >
                {/* Abstract petals/glows */}
                <div className="absolute inset-0 bg-blue-500/30 blur-[60px] rounded-full animate-pulse" />
                <div className="relative z-10 w-32 h-32">
                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                        <g className="mix-blend-screen">
                            <path d="M100 100 C 130 40, 170 40, 160 100 C 170 160, 130 160, 100 100" fill="url(#p1)" className="animate-[spin_10s_linear_infinite]" style={{ transformOrigin: '100px 100px' }} />
                            <path d="M100 100 C 70 40, 30 40, 40 100 C 30 160, 70 160, 100 100" fill="url(#p2)" className="animate-[spin_10s_linear_infinite_reverse]" style={{ transformOrigin: '100px 100px' }} />
                            <circle cx="100" cy="100" r="40" fill="url(#core)" />
                            <path d="M100 60 Q 140 20, 100 20 Q 60 20, 100 60" fill="#FF9E9E" opacity="0.8" />
                            <path d="M140 100 Q 180 60, 180 100 Q 180 140, 140 100" fill="#8F00FF" opacity="0.8" />
                            <path d="M100 140 Q 60 180, 100 180 Q 140 180, 100 140" fill="#D864FF" opacity="0.8" />
                            <path d="M60 100 Q 20 140, 20 100 Q 20 60, 60 100" fill="#FFA500" opacity="0.8" />
                        </g>
                        <defs>
                            <linearGradient id="p1" x1="100" y1="40" x2="160" y2="160" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#4F46E5" />
                                <stop offset="1" stopColor="#EC4899" />
                            </linearGradient>
                            <linearGradient id="p2" x1="100" y1="40" x2="40" y2="160" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F59E0B" />
                                <stop offset="1" stopColor="#EF4444" />
                            </linearGradient>
                            <radialGradient id="core" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 100) rotate(90) scale(40)">
                                <stop stopColor="#FFFFFF" />
                                <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rotate-45 blur-sm" />
                    </div>
                </div>
            </motion.div>

            {/* Pill */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
            >
                <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-500/30 text-blue-300 text-sm font-medium">
                    <span className="text-fuchsia-400 font-bold mr-1">New:</span> Super Agents
                </span>
            </motion.div>

            {/* Subtext */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2 text-[#7F7F7F] text-sm md:text-base font-medium mb-6 uppercase tracking-wider"
            >
                <span className="text-[#2F8AE7]">$</span> One subscription for all your AI, at a fraction of the cost
            </motion.div>

            {/* Headline */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight max-w-4xl leading-[1.1]"
            >
                The most innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D864FF] to-[#8F00FF]">AI</span> <br className="hidden md:block" />
                <span className="text-white">platform on the planet.</span>
            </motion.h1>

        </section>
    );
};
