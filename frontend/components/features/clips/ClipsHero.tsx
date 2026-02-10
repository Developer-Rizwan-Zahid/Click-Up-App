"use client";

import { ArrowRight, Star } from "lucide-react";

const ClipsHero = () => {
    return (
        <section className="relative pt-24 pb-20 overflow-hidden bg-white text-black font-sans">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-24">
                    {/* Left Content */}
                    <div className="flex-1 text-left">
                        <div className="inline-flex items-center gap-2 mb-6">
                            <span className="text-[#7B68EE] font-bold tracking-widest text-sm uppercase">CLICKUP CLIPS</span>
                            <span className="text-gray-300">|</span>
                            <span className="text-[#7B68EE] font-bold tracking-widest text-sm uppercase">REPLACES LOOM</span>
                        </div>

                        <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-[#292D34]">
                            Share screen
                            <br />
                            recordings of your
                            <br />
                            work—instantly
                        </h1>

                        <p className="text-xl text-gray-500 mb-10 max-w-lg leading-relaxed">
                            Part of the Everything App for Work: Say (and show) what you mean faster, with screen recordings that connect to the rest of your work.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                            <button className="px-8 py-4 bg-[#1A1A1A] text-white rounded-xl font-bold text-lg hover:bg-black transition-all flex items-center gap-2 shadow-lg">
                                Get started. It's FREE
                            </button>
                            <div className="text-xs text-gray-500 text-left">
                                <div className="font-medium text-gray-800">Free Forever.</div>
                                <div>No credit card.</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-yellow-400 text-sm">
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
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

                    {/* Right Visual - Interactive Mockup with YouTube Video */}
                    <div className="flex-1 w-full max-w-3xl relative">
                        {/* Mockup Container */}
                        <div className="relative rounded-[20px] bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden aspect-video">
                            {/* Browser Header Mock */}
                            <div className="h-8 bg-[#f3f4f6] border-b border-gray-200 flex items-center px-4 gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                                </div>
                                <div className="ml-4 flex-1 max-w-sm h-5 bg-white rounded border border-gray-200" />
                            </div>

                            {/* Main Content Area - YouTube Embed */}
                            <div className="w-full h-full bg-black relative">
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src="https://www.youtube.com/embed/2y06rChX6uQ?autoplay=0&mute=0&controls=1&rel=0"
                                    title="ClickUp Clips"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trusted By Section - Centered Bottom */}
                <div className="text-center pt-12 border-t border-gray-100/50">
                    <div className="flex items-center justify-center gap-4 opacity-60 grayscale mb-10">
                        <span className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">TRUSTED BY THE BEST</span>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all">
                        {["amazon", "NVIDIA", "adidas", "verizon", "Spotify", "HARVARD"].map((logo, idx) => (
                            <span key={idx} className="text-xl md:text-2xl font-bold font-serif text-gray-600 uppercase flex items-center gap-2">
                                {logo === "HARVARD" ? (
                                    <>
                                        <div className="w-6 h-7 border border-current flex items-center justify-center text-[10px] font-serif">VE</div>
                                        <div>
                                            <div className="text-[10px] leading-none">HARVARD</div>
                                            <div className="text-[6px] leading-none tracking-wider">UNIVERSITY</div>
                                        </div>
                                    </>
                                ) : (
                                    logo
                                )}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClipsHero;
