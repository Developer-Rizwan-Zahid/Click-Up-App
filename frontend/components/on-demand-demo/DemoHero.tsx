"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Play } from "lucide-react";
import { useState } from "react";

export function DemoHero() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
            <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">

                {/* Left Column: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="lg:w-1/2 text-left"
                >
                    <div className="text-[#7b68ee] font-bold tracking-widest text-sm uppercase mb-4">
                        Explore ClickUp
                    </div>

                    <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-6 text-[#292D34] leading-[1.1]">
                        See ClickUp <br /> in action!
                    </h1>

                    <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-lg">
                        Explore the complete solution for everything work, no signup or credit card required.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-8">
                        <Link href="/signup">
                            <Button className="h-14 px-8 bg-[#292D34] hover:bg-black text-white text-lg font-bold rounded-xl shadow-lg transition-transform hover:scale-105">
                                Get started today
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button className="h-14 px-8 bg-gray-100 hover:bg-gray-200 text-[#292D34] text-lg font-bold rounded-xl transition-colors">
                                Contact sales
                            </Button>
                        </Link>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                        <div className="flex text-yellow-400 gap-0.5">
                            {[1, 2, 3, 4, 5].map(s => <span key={s}>★</span>)}
                        </div>
                        <span>25,000+ reviews from</span>
                        <div className="flex gap-2 opacity-70 grayscale">
                            {/* Icons representing G2, Capterra, etc. - using simple shapes/text for reliability */}
                            <div className="w-4 h-4 bg-orange-500 rounded-sm" title="G2"></div>
                            <div className="w-4 h-4 bg-blue-500 rounded-sm" title="Capterra"></div>
                            <div className="w-4 h-4 bg-purple-500 rounded-sm"></div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Video Player */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="lg:w-1/2 relative"
                >
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-30 transform scale-105 -z-10" />

                    <div className="bg-white p-2 rounded-2xl shadow-2xl border border-gray-100">
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-black group">
                            {!isPlaying ? (
                                <div
                                    className="absolute inset-0 bg-cover bg-center cursor-pointer"
                                    style={{ backgroundImage: "url('https://img.youtube.com/vi/_3v1zR5pchM/maxresdefault.jpg')" }}
                                    onClick={() => setIsPlaying(true)}
                                >
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#292D34] rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                                        <Play fill="white" className="text-white ml-2" size={32} />
                                    </div>
                                </div>
                            ) : (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/_3v1zR5pchM?autoplay=1&rel=0"
                                    title="ClickUp Demo"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Trusted By Logos - Integrated to match screenshot flow */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="pt-10 border-t border-transparent" // Just spacing
            >
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">Trusted by the best</span>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 w-full grayscale">
                        {/* Wayfair */}
                        <div className="flex items-center gap-1">
                            <span className="font-bold text-xl text-purple-900" style={{ fontFamily: 'serif' }}>wayfair</span>
                        </div>
                        {/* Deloitte */}
                        <div className="flex items-center gap-0.5">
                            <span className="font-bold text-xl tracking-tight text-black">Deloitte.</span>
                        </div>
                        {/* Pfizer */}
                        <div className="flex items-center gap-1">
                            <span className="font-bold text-xl text-blue-800 italic" style={{ fontFamily: 'serif' }}>Pfizer</span>
                        </div>
                        {/* Adobe */}
                        <div className="flex items-center gap-1">
                            <div className="text-red-600 font-bold text-2xl">A</div>
                            <span className="font-bold text-xl text-red-600">Adobe</span>
                        </div>
                        {/* American Airlines (implied 'American') */}
                        <div className="flex items-center gap-1">
                            <span className="font-sans text-lg font-medium tracking-tighter text-gray-600">American</span>
                        </div>
                        {/* NBCUniversal */}
                        <div className="flex items-center gap-1">
                            <span className="font-bold text-lg text-black">NBCUniversal</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
