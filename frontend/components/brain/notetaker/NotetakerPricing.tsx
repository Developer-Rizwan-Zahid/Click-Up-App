"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";

export const NotetakerPricing = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 mb-6">
                            <Lock size={12} /> Talk &gt; Type. It's 4x faster.
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                            Real value <br />
                            at an unreal price
                        </h2>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-6">
                        <p className="text-lg text-gray-400 max-w-sm text-left md:text-right">
                            Get the only AI notetaker that connects to your work, for the best price on the market.
                        </p>
                        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
                            Get Started. It's free <ArrowRight size={16} />
                        </button>
                    </div>
                </div>

                {/* Comparison Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 border border-gray-800 rounded-xl overflow-hidden bg-[#0a0a0a]">

                    {/* ClickUp (Highlighted) */}
                    <div className="col-span-2 md:col-span-1 border-r border-gray-800 relative group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-transparent z-0" />
                        <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-900/50 via-purple-900/20 to-transparent opacity-100 z-0" />

                        <div className="relative z-10 flex flex-col items-center justify-center p-8 h-48 md:h-64 text-center">
                            <div className="mb-4">
                                <ClickUpLogo />
                            </div>
                            <div className="text-2xl font-black text-white mb-1">$12/mo</div>
                        </div>
                        {/* Bottom glow */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-fuchsia-500 to-purple-500" />
                    </div>

                    {/* Fathom */}
                    <div className="border-r border-gray-800 md:border-r bg-black flex flex-col items-center justify-center p-6 h-48 md:h-64 hover:bg-white/5 transition-colors">
                        <div className="mb-6 font-bold text-xl text-white tracking-widest flex items-center gap-2">
                            FATHOM <span className="text-blue-400">►</span>
                        </div>
                        <div className="text-lg font-medium text-gray-400">$19/mo</div>
                    </div>

                    {/* Fireflies.ai */}
                    <div className="border-r border-gray-800 bg-black flex flex-col items-center justify-center p-6 h-48 md:h-64 hover:bg-white/5 transition-colors">
                        <div className="mb-6 flex items-center gap-2">
                            <div className="w-6 h-6 bg-pink-500 rounded-sm" />
                            <span className="font-bold text-white text-lg">fireflies.ai</span>
                        </div>
                        <div className="text-lg font-medium text-gray-400">$18/mo</div>
                    </div>

                    {/* Otter.ai */}
                    <div className="border-r border-gray-800 bg-black flex flex-col items-center justify-center p-6 h-48 md:h-64 hover:bg-white/5 transition-colors">
                        <div className="mb-6 flex items-center gap-2">
                            <div className="text-blue-500 font-black text-2xl tracking-tighter">Otter.ai</div>
                        </div>
                        <div className="text-lg font-medium text-gray-400">$16.99/mo</div>
                    </div>

                    {/* Grain */}
                    <div className="bg-black flex flex-col items-center justify-center p-6 h-48 md:h-64 hover:bg-white/5 transition-colors">
                        <div className="mb-6 flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full border-4 border-green-500" />
                            <span className="font-bold text-white text-lg">Grain</span>
                        </div>
                        <div className="text-lg font-medium text-gray-400">$15/mo</div>
                    </div>

                </div>

            </div>
        </section>
    );
};

const ClickUpLogo = () => (
    <div className="flex flex-col items-center gap-2">
        <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 21.5L2 16.5L16 2.5L30 16.5L25 21.5L16 12.5L7 21.5Z" fill="white" />
            <path d="M7 29.5L16 20.5L25 29.5" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-2xl font-black text-white tracking-tight">ClickUp</span>
    </div>
)
