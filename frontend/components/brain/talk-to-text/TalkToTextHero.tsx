"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Mic, Keyboard, Download, Activity, Wind, Zap, Clock, GripHorizontal } from "lucide-react";
import { BrainCircuit } from "lucide-react";

export const TalkToTextHero = () => {
    return (
        <section className="relative pt-10 pb-32 flex flex-col items-center text-center px-4 overflow-hidden">

            {/* Header / Logo Area */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-12"
            >
                <div className="flex items-center gap-2">
                    {/* Colorful Brain Logo Simulation */}
                    <div className="relative">
                        <BrainCircuit className="text-white w-8 h-8" />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-lg opacity-50" />
                    </div>
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-white">Brain</span>
                    <span className="bg-[#5D5FEF] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">GPT</span>
                </div>
                <div className="h-6 w-px bg-gray-700 mx-2" />
                <span className="text-xl font-medium text-white">Talk to Text</span>
            </motion.div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto z-10 flex flex-col items-center"
            >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight mb-6">
                    Write as fast as you talk
                </h1>
                <p className="text-gray-400 text-lg md:text-xl font-medium mb-10 max-w-2xl">
                    AI-polished dictation that works in any app, personalized to you.
                </p>

                {/* CTA Button */}
                <div className="flex flex-col items-center gap-3 mb-20">
                    <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white text-lg font-bold px-8 py-6 rounded-full shadow-[0_0_30px_rgba(192,38,211,0.4)] transition-all hover:scale-105 flex items-center gap-2">
                        <div className="grid grid-cols-2 gap-0.5">
                            <div className="w-1.5 h-1.5 bg-white rounded-[1px]" />
                            <div className="w-1.5 h-1.5 bg-white rounded-[1px]" />
                            <div className="w-1.5 h-1.5 bg-white rounded-[1px]" />
                            <div className="w-1.5 h-1.5 bg-white rounded-[1px]" />
                        </div>
                        Download for Windows
                    </Button>
                    <div className="text-xs text-center text-gray-400 space-y-1">
                        <p className="font-semibold text-white">Start working 4x faster. Free to try.</p>
                        <p>No credit card required.</p>
                    </div>
                </div>

                {/* Visual Comparison: Keyboard vs Waveform */}
                <div className="relative w-full max-w-4xl grid grid-cols-2 items-end mb-24">
                    {/* Left: Keyboard (Darker, Slower) */}
                    <div className="relative z-10 flex flex-col items-center pr-8 border-r border-gray-800/50">
                        <div className="w-full bg-gradient-to-b from-[#1a1b1e] to-[#0f1012] rounded-l-2xl border border-gray-800 p-6 opacity-60">
                            {/* Mock Keyboard Visual */}
                            <div className="grid grid-cols-10 gap-1.5 mb-2">
                                {[...Array(10)].map((_, i) => <div key={i} className="h-8 bg-gray-800 rounded-md" />)}
                            </div>
                            <div className="grid grid-cols-10 gap-1.5 mb-2 pl-4">
                                {[...Array(9)].map((_, i) => <div key={i} className="h-8 bg-gray-800 rounded-md" />)}
                            </div>
                            <div className="grid grid-cols-10 gap-1.5 mb-2 pl-8">
                                {[...Array(7)].map((_, i) => <div key={i} className="h-8 bg-gray-800 rounded-md" />)}
                            </div>
                            <div className="flex justify-center mt-2">
                                <div className="h-8 w-48 bg-gray-800 rounded-md" />
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <div className="text-5xl font-black text-gray-600 mb-1">45 <span className="text-xl font-bold uppercase">WPM</span></div>
                            <p className="text-gray-500 text-sm">Words per minute<br />on keyboard</p>
                        </div>
                    </div>

                    {/* Right: Waveform (Glowing, Faster) */}
                    <div className="relative z-20 flex flex-col items-center pl-8 -ml-[1px]">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-purple-600/20 blur-[60px] rounded-full" />

                        <div className="w-full bg-[#1a1b1e] rounded-r-2xl border border-purple-500/30 p-8 shadow-[0_0_40px_rgba(168,85,247,0.15)] relative overflow-hidden">
                            {/* Floating Particles */}
                            <div className="absolute top-4 left-4 w-1 h-1 bg-white rounded-full animate-pulse" />
                            <div className="absolute bottom-8 right-12 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-75" />

                            {/* Waveform Visualization */}
                            <div className="flex items-center justify-center gap-1 h-24">
                                {[...Array(20)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ height: [20, 40 + Math.random() * 40, 20] }}
                                        transition={{ repeat: Infinity, duration: 1, delay: i * 0.05 }}
                                        className="w-1.5 bg-white rounded-full bg-gradient-to-t from-purple-500 to-white"
                                    />
                                ))}
                            </div>
                            <div className="flex justify-between items-center mt-4 text-purple-300/50 text-xs font-mono uppercase tracking-widest">
                                <span>Listening...</span>
                                <div><button className="hover:text-white transition-colors">Close</button> <span className="mx-2">Esc</span></div>
                            </div>
                        </div>

                        <div className="mt-6 text-center relative">
                            <div className="text-5xl font-black text-white mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">220 <span className="text-xl font-bold uppercase text-purple-300">WPM</span></div>
                            <p className="text-white text-sm">Words per minute<br />with Talk to Text</p>
                        </div>
                    </div>

                    {/* Divider Line Gradient */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-50" />
                </div>


                {/* Badges / Laurels */}
                <div className="flex flex-wrap justify-center gap-16 md:gap-24">
                    <div className="flex items-center gap-4 text-center relative">
                        {/* Laurel Left */}
                        <GripHorizontal className="text-gray-600 absolute -left-8 top-0 h-16 w-8 rotate-90" /> {/* Placeholder for Laurel */}

                        <div className="flex flex-col items-center">
                            <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-1">Write</span>
                            <span className="text-4xl font-bold text-white">400% more</span>
                            <span className="text-gray-400 text-sm">without typing</span>
                        </div>

                        {/* Laurel Right */}
                        <GripHorizontal className="text-gray-600 absolute -right-8 top-0 h-16 w-8 -rotate-90" />
                    </div>

                    <div className="flex items-center gap-4 text-center relative">
                        {/* Laurel Left */}
                        <GripHorizontal className="text-gray-600 absolute -left-8 top-0 h-16 w-8 rotate-90" />

                        <div className="flex flex-col items-center">
                            <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-1">Save</span>
                            <span className="text-4xl font-bold text-white">1 hour</span>
                            <span className="text-gray-400 text-sm">daily</span>
                        </div>

                        {/* Laurel Right */}
                        <GripHorizontal className="text-gray-600 absolute -right-8 top-0 h-16 w-8 -rotate-90" />
                    </div>
                </div>

            </motion.div>
        </section>
    );
};
