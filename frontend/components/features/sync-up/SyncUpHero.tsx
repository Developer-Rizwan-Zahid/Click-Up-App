"use client";

import Link from "next/link";
import { ArrowRight, Mic, Video, Monitor, X } from "lucide-react";
import Image from "next/image";

const SyncUpHero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-white text-black">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Left Content */}
                    <div className="flex-1 text-left">
                        <span className="text-[#A855F7] font-medium mb-4 block">Sync Ups</span>

                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                            Instant meetings,
                            <br />
                            right where
                            <br />
                            work happens.
                        </h1>

                        <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                            Jump into audio or video calls, share your screen, and get AI-powered summaries and action items—without leaving your workspace.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                            <button className="px-8 py-3.5 bg-gradient-to-r from-[#3B82F6] to-[#d946ef] text-white rounded-lg font-bold text-base hover:opacity-90 transition-all flex items-center gap-2">
                                Get started. It's FREE
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <div className="text-xs text-gray-400">
                                <div className="font-medium text-gray-300">Free forever.</div>
                                <div>No credit card.</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-yellow-400 text-sm">
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-gray-400 ml-1">25,000+ reviews from</span>
                            <div className="flex gap-1 opacity-70">
                                {/* Simplified icons for review platforms */}
                                <div className="w-4 h-4 bg-red-500 rounded-sm" />
                                <div className="w-4 h-4 bg-blue-500 rounded-sm" />
                                <div className="w-4 h-4 bg-orange-500 rounded-sm" />
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="flex-1 w-full max-w-2xl relative">
                        {/* Glow Effect */}
                        <div className="absolute -inset-10 bg-gradient-to-tr from-[#A855F7]/30 via-[#EC4899]/30 to-[#EAB308]/30 blur-[80px] rounded-full opacity-50 pointer-events-none" />

                        <div className="relative bg-white rounded-[32px] p-2 md:p-3 shadow-2xl overflow-hidden min-h-[400px]">
                            <div className="bg-white rounded-[24px] overflow-hidden h-full flex flex-col relative z-10">
                                {/* Video Grid */}
                                <div className="flex-1 p-4 grid grid-cols-2 gap-4 h-[320px]">
                                    {/* User 1 */}
                                    <div className="relative rounded-2xl overflow-hidden bg-gray-100">
                                        <img
                                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
                                            alt="Woman video call"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-medium flex items-center gap-2">
                                            You
                                            <div className="flex gap-0.5">
                                                <div className="w-0.5 h-2 bg-blue-400 animate-pulse" />
                                                <div className="w-0.5 h-3 bg-blue-400 animate-pulse delay-75" />
                                                <div className="w-0.5 h-2 bg-blue-400 animate-pulse delay-150" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* User 2 */}
                                    <div className="relative rounded-2xl overflow-hidden bg-gray-100">
                                        <img
                                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400"
                                            alt="Man video call"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-medium">
                                            Andrew
                                        </div>
                                    </div>
                                </div>

                                {/* Controls */}
                                <div className="flex justify-center items-center gap-4 pb-6 mt-auto">
                                    <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
                                        <Mic className="w-5 h-5" />
                                    </button>
                                    <button className="w-12 h-12 rounded-full bg-gray-500 text-white flex items-center justify-center hover:bg-gray-600 transition-colors">
                                        <Video className="w-5 h-5" />
                                    </button>
                                    <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
                                        <Monitor className="w-5 h-5" />
                                    </button>
                                    <button className="w-12 h-12 rounded-full bg-[#FF4E4E] text-white flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg shadow-red-500/20">
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trusted By Section */}
                <div className="mt-24 text-center">
                    <p className="text-gray-500 text-sm font-medium mb-8">Trusted by the world's leading businesses</p>

                    <div className="overflow-hidden relative w-full">
                        <div className="flex gap-16 items-center animate-scroll whitespace-nowrap opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                            {/* Duplicate logos for infinite scroll effect */}
                            {[...Array(2)].map((_, setIndex) => (
                                <div key={setIndex} className="flex gap-16 items-center min-w-full">
                                    {["AT&T", "American Airlines", "Cartoon Network", "Sephora", "Paramount", "Wayfair", "Logitech", "Chick-fil-A", "Zillow"].map((logo, idx) => (
                                        <span key={`${setIndex}-${idx}`} className="text-xl font-bold text-gray-400 font-serif flex items-center gap-2">
                                            {/* Placeholder for actual logos - using text with icons for now to simulate */}
                                            <div className="w-6 h-6 bg-current rounded-full opacity-20" />
                                            {logo}
                                        </span>
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* Gradient masks */}
                        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
                        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                    display: flex;
                    width: max-content;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default SyncUpHero;
