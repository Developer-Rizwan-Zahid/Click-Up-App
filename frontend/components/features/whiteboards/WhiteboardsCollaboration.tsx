'use client';

import React from 'react';
import { Users, MousePointer2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhiteboardsCollaboration() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    <div className="lg:w-1/2">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#7b68ee] via-[#ff3366] to-[#4a9eff] rounded-[2.5rem] opacity-[0.08] blur-3xl animate-pulse" />
                            <div className="relative bg-white border border-zinc-100 rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]">
                                {/* Mock Interface showing Cursors */}
                                <div className="bg-zinc-50/50 p-6 border-b border-zinc-100 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="flex -space-x-3">
                                            {[1, 2, 3, 4].map(i => (
                                                <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-zinc-${i * 100 + 100}`} />
                                            ))}
                                        </div>
                                        <span className="text-sm text-zinc-400 font-semibold">+ 12 others</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-8 h-8 rounded-full bg-zinc-100" />
                                        <div className="w-8 h-8 rounded-full bg-zinc-100" />
                                    </div>
                                </div>
                                <div className="aspect-[4/3] bg-white relative p-12">
                                    {/* Floating Cursors Animation */}
                                    <motion.div
                                        animate={{ x: [0, 50, -20, 0], y: [0, -40, 30, 0] }}
                                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute top-1/4 left-1/4 z-10"
                                    >
                                        <MousePointer2 className="w-6 h-6 text-[#ff3366] fill-[#ff3366]" />
                                        <div className="bg-[#ff3366] text-white text-[10px] font-bold px-2 py-1 rounded-md ml-4 shadow-lg">Sarah</div>
                                    </motion.div>

                                    <motion.div
                                        animate={{ x: [0, -60, 40, 0], y: [0, 50, -20, 0] }}
                                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                        className="absolute top-1/2 right-1/3 z-10"
                                    >
                                        <MousePointer2 className="w-6 h-6 text-[#4a9eff] fill-[#4a9eff]" />
                                        <div className="bg-[#4a9eff] text-white text-[10px] font-bold px-2 py-1 rounded-md ml-4 shadow-lg">Mike</div>
                                    </motion.div>

                                    {/* Content Mockup */}
                                    <div className="w-full h-full border-2 border-dashed border-zinc-100 rounded-3xl flex flex-col items-center justify-center gap-6 p-8">
                                        <div className="w-24 h-24 bg-[#7b68ee10] rounded-2xl flex items-center justify-center">
                                            <Users className="w-10 h-10 text-[#7b68ee]" />
                                        </div>
                                        <div className="space-y-3 w-full max-w-[200px]">
                                            <div className="h-2 w-full bg-zinc-50 rounded-full" />
                                            <div className="h-2 w-[80%] bg-zinc-50 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7b68ee08] border border-[#7b68ee15] text-[11px] font-bold tracking-wider text-[#7b68ee] uppercase mb-8">
                            <Users className="w-4 h-4" />
                            BETTER TEAMWORK
                        </div>
                        <h2 className="text-[2.5rem] md:text-[3.5rem] leading-[1.1] font-bold text-zinc-900 mb-8 font-sans">
                            Collaborate in Real-Time
                        </h2>
                        <p className="text-lg md:text-[20px] text-zinc-500 font-medium leading-[1.6] mb-12">
                            See your team's cursors, add comments, and work together on the same canvas without missing a beat. Whether you're in the same room or across the world, it feels like you're right there.
                        </p>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                "Live cursors & presence",
                                "Instant updates",
                                "Built-in chat & comments",
                                "Follow mode for presentations"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-zinc-600 font-semibold">
                                    <div className="w-8 h-8 rounded-full bg-[#7b68ee10] flex items-center justify-center text-[#7b68ee]">
                                        <Users className="w-4 h-4" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
