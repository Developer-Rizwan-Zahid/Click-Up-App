'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function WhiteboardsFooter() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-[2.5rem] overflow-hidden bg-[#0a0a0b] bg-gradient-to-br from-[#0a0a0b] via-[#1a1a2e] to-[#2d1b4d] min-h-[500px] flex flex-col lg:flex-row items-center"
                >
                    {/* Background Glows */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[100px] rounded-full -mr-64 -mt-32" />
                    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-600/10 blur-[100px] rounded-full -mr-32 -mb-32" />

                    {/* Left Content */}
                    <div className="relative z-10 w-full lg:w-1/2 p-10 lg:p-20 text-left">
                        <div className="flex items-center gap-2 mb-8">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 10C4 10 4 17 12 17C20 17 20 10 20 10" stroke="#7B68EE" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7 8L12 3L17 8" stroke="#E348B4" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-2xl font-black tracking-tighter text-white">ClickUp</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-6 leading-[1.1] tracking-tight">
                            Everything you need to <br className="hidden md:block" />
                            stay organized and <br className="hidden md:block" />
                            get work done.
                        </h2>

                        <p className="text-xl text-zinc-400 mb-10 font-medium">
                            Supercharge your productivity
                        </p>

                        <button className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-zinc-100 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5">
                            Get started free
                        </button>
                    </div>

                    {/* Right Mockup */}
                    <div className="relative w-full lg:w-1/2 h-[300px] lg:h-full flex items-end justify-end pt-10 lg:pt-0 pr-0">
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="w-[90%] lg:w-[120%] h-full bg-white/5 backdrop-blur-sm rounded-tl-[2rem] border-t border-l border-white/10 p-4 lg:p-8 lg:translate-x-10 translate-y-6 overflow-hidden"
                        >
                            {/* Mock Whiteboard Content */}
                            <div className="relative w-full h-full bg-white/10 rounded-xl p-6 border border-white/5 shadow-2xl">
                                <div className="flex items-center gap-2 mb-8 bg-white/5 w-fit px-3 py-1.5 rounded-lg border border-white/10">
                                    <div className="w-4 h-4 rounded-sm border border-indigo-400" />
                                    <span className="text-[10px] uppercase font-bold text-indigo-300">Whiteboard</span>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-teal-400/20 border border-teal-400/30 rounded-lg">
                                        <div className="text-[10px] font-bold text-teal-300 mb-2">Unique Visualization Capabilities</div>
                                        <div className="text-[8px] text-teal-100/60 leading-tight">Allow users to visualize a wide range of data.</div>
                                    </div>
                                    <div className="p-4 bg-amber-400/20 border border-amber-400/30 rounded-lg mt-8">
                                        <div className="text-[10px] font-bold text-amber-300 mb-2">Redesign Whiteboards AI feature</div>
                                    </div>
                                </div>

                                {/* Cursor Mockups */}
                                <div className="absolute bottom-20 right-20">
                                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-500 rounded-full text-white text-[10px] font-bold shadow-lg">
                                        Dean Phillips
                                    </div>
                                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-purple-500 ml-4" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                <div className="mt-12 text-center text-zinc-400 text-sm">
                    Free forever. No credit card required.
                </div>
            </div>
        </section>
    );
}

