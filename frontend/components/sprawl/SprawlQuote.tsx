"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const SprawlQuote = () => {
    return (
        <section className="bg-black py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="relative max-w-5xl mx-auto bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Text Side */}
                        <div className="p-12 flex flex-col justify-center relative z-10">
                            {/* Decorative quotes */}
                            <span className="absolute top-8 left-8 text-6xl text-purple-500/30 font-serif">“</span>

                            <blockquote className="relative">
                                <p className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                                    We’re about to see a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">new economic frontier</span> emerge, accompanied by disruption on an unprecedented scale.
                                </p>
                            </blockquote>
                            {/* Decorative lines */}
                            <div className="flex gap-2 mt-4">
                                <div className="w-12 h-1 bg-pink-500 rounded-full" />
                                <div className="w-4 h-1 bg-purple-500 rounded-full" />
                            </div>
                        </div>

                        {/* Image Side */}
                        <div className="relative h-[400px] md:h-auto min-h-[400px]">
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a0a0a] z-10 md:bg-gradient-to-l" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />

                            <Image
                                src="/images/statue.png"
                                alt="AI Statue"
                                fill
                                className="object-cover object-center transform scale-110 hover:scale-105 transition-transform duration-700"
                            />

                            {/* Glitch Overlay Effects */}
                            <div className="absolute top-10 right-10 w-20 h-1 bg-cyan-400/50 blur-[2px]" />
                            <div className="absolute bottom-20 right-1/3 w-32 h-0.5 bg-pink-500/50 blur-[1px]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
