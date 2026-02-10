"use client";

import { motion } from "framer-motion";
import { Sparkles, Mic, FileText, Bot, Image as ImageIcon, MessageSquare, ArrowRight, CheckCircle2, User } from "lucide-react";
import React from "react";

export const ContextFeatures = () => {
    return (
        <section className="py-32 bg-black relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-purple-300 mb-6 tracking-wide backdrop-blur-sm">
                        <Sparkles size={12} />
                        <span>AI in every feature</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">AI with full context –</span>
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-200 to-gray-600">embedded in your workflows</span>
                    </h2>
                </div>

                {/* Bento Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">

                    {/* Card 1: AI SyncUps */}
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-1 overflow-hidden group hover:border-purple-500/30 transition-colors">
                        <div className="h-full bg-white/5 rounded-[20px] p-6 relative flex flex-col justify-between">
                            {/* Content Visualization */}
                            <div className="mb-8 relative">
                                <div className="bg-gray-800/50 rounded-xl p-4 border border-white/5 backdrop-blur-sm">
                                    <div className="flex items-center gap-3 mb-3 border-b border-white/5 pb-3">
                                        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                                            <Mic size={16} className="text-purple-400" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-gray-400 uppercase font-bold">Key takeaways</div>
                                            <div className="text-xs text-gray-200">Discussed launching the new campaign</div>
                                        </div>
                                    </div>
                                    {/* Audio Waveform Simulation */}
                                    <div className="flex items-center gap-2 mt-2">
                                        <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center text-[10px] font-bold">A</div>
                                        <div className="flex-1 h-8 flex items-center gap-0.5">
                                            {[...Array(12)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="w-1 bg-purple-500/50 rounded-full"
                                                    animate={{ height: [8, 16, 8] }}
                                                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">AI SyncUps & Notetaker</h3>
                                <p className="text-gray-400 text-sm">Start with your idea</p>
                                <div className="absolute bottom-6 right-6 w-6 h-6 rounded bg-white/10 flex items-center justify-center text-xs font-bold text-gray-400">1</div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: AI Tools */}
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-1 overflow-hidden group hover:border-blue-500/30 transition-colors">
                        <div className="h-full bg-white/5 rounded-[20px] p-6 relative flex flex-col justify-between">
                            {/* Content Visualization */}
                            <div className="mb-8 relative">
                                <div className="absolute right-0 top-0 bg-gray-800/80 rounded-lg p-2 text-[10px] text-gray-400 border border-white/5 backdrop-blur-sm max-w-[150px]">
                                    Create tasks based on the meeting notes
                                </div>

                                <div className="mt-12 bg-gray-900/80 rounded-xl p-3 border border-white/5 text-xs text-gray-300">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Sparkles size={12} className="text-blue-400" />
                                        <span>Sure! Here are the tasks I've created:</span>
                                    </div>
                                    <div className="space-y-1 pl-5">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 size={10} className="text-blue-500" />
                                            <span>Summer Promo</span>
                                        </div>
                                        <div className="flex items-center gap-2 opacity-50">
                                            <div className="w-2.5 h-2.5" />
                                            <span className="line-through decoration-blue-500/50">Description...</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">AI Tools</h3>
                                <p className="text-gray-400 text-sm">Brain creates the brief and tasks</p>
                                <div className="absolute bottom-6 right-6 w-6 h-6 rounded bg-white/10 flex items-center justify-center text-xs font-bold text-gray-400">2</div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: AI Image Generator */}
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-1 overflow-hidden group hover:border-pink-500/30 transition-colors">
                        <div className="h-full bg-white/5 rounded-[20px] p-6 relative flex flex-col justify-between">
                            {/* Content Visualization */}
                            <div className="mb-8 relative">
                                <div className="absolute right-0 top-0 bg-gray-800/80 rounded-lg p-2 text-[10px] text-gray-400 border border-white/5 backdrop-blur-sm">
                                    Generate an image based on this doc <FileText size={8} className="inline" /> Promo guidelines
                                </div>

                                <div className="mt-12 w-full aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl border border-white/10 relative overflow-hidden">
                                    <div className="absolute top-2 left-2 flex items-center gap-1 text-[10px] text-pink-300">
                                        <Sparkles size={10} /> Generating image...
                                    </div>
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pixels.png')] opacity-30 mix-blend-overlay"></div>
                                    {/* Pixel reveal effect */}
                                    <div className="absolute bottom-0 inset-x-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent"></div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">AI Image Generator</h3>
                                <p className="text-gray-400 text-sm">Brain Agents jump in to design</p>
                                <div className="absolute bottom-6 right-6 w-6 h-6 rounded bg-white/10 flex items-center justify-center text-xs font-bold text-gray-400">3</div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: AI Stand-ups (Wide) */}
                    <div className="md:col-span-2 bg-[#0A0A0A] border border-white/10 rounded-3xl p-1 overflow-hidden group hover:border-orange-500/30 transition-colors min-h-[250px]">
                        <div className="h-full bg-white/5 rounded-[20px] p-8 relative flex flex-col justify-between">

                            <div className="relative z-10 grid grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    {/* Fake list UI */}
                                    <div className="space-y-2">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/5 transition-colors">
                                                <div className={`w-3 h-3 rounded-full border border-gray-600 ${i === 2 ? 'bg-orange-500 border-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]' : ''}`} />
                                                <div className="flex-1 space-y-1">
                                                    <div className="h-2 w-20 bg-gray-700 rounded full" />
                                                </div>
                                                <div className="flex -space-x-1">
                                                    <div className="w-4 h-4 rounded-full bg-gray-600 border border-black" />
                                                    <div className="w-4 h-4 rounded-full bg-gray-500 border border-black" />
                                                </div>
                                                <div className={`text-[10px] px-1.5 py-0.5 rounded ${i === 2 ? 'bg-orange-500/20 text-orange-400' : 'bg-gray-800 text-gray-500'}`}>
                                                    {i === 2 ? 'Urgent' : 'Normal'}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative">
                                    {/* Floating Chat Bubble */}
                                    <div className="absolute -left-10 top-0 bg-[#1E1E1E] border border-white/10 p-4 rounded-2xl shadow-2xl max-w-[280px]">
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-full bg-fuchsia-500 flex items-center justify-center">
                                                <Bot size={16} className="text-white" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="font-bold text-white text-xs">StandUp Agent</span>
                                                    <span className="text-[10px] text-gray-500">9:12 am</span>
                                                </div>
                                                <p className="text-gray-300 text-xs leading-relaxed">Good morning team! what are you planning to work on today?</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 relative z-20">
                                <h3 className="text-xl font-bold text-white mb-2">AI Stand-ups & Answers Agent</h3>
                                <p className="text-gray-400 text-sm">Brain loops everyone in and answer questions</p>
                                <div className="absolute bottom-0 right-0 w-6 h-6 rounded bg-white/10 flex items-center justify-center text-xs font-bold text-gray-400">4</div>
                            </div>
                        </div>
                    </div>

                    {/* Card 5: Agents (Wide/Tall) */}
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-1 overflow-hidden group hover:border-purple-500/30 transition-colors">
                        <div className="h-full bg-white/5 rounded-[20px] p-6 relative flex flex-col justify-end">

                            <div className="absolute top-8 right-6 left-6">
                                <div className="bg-[#1E1E1E] border border-white/10 p-4 rounded-2xl shadow-xl ml-auto w-full">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                                            <Sparkles size={16} className="text-white" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="font-bold text-white text-xs">Answers Agent</span>
                                                <span className="text-[10px] text-gray-500">4:25 pm</span>
                                            </div>
                                            <p className="text-gray-300 text-xs leading-relaxed">
                                                I've assigned this task to <span className="text-blue-400">@Alex</span> based on their involvement in this doc.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-32">
                                <h3 className="text-xl font-bold text-white mb-2">Agents</h3>
                                <p className="text-gray-400 text-sm">Brain prioritizes and delegates</p>
                                <div className="absolute bottom-0 right-0 w-6 h-6 rounded bg-white/10 flex items-center justify-center text-xs font-bold text-gray-400">5</div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer CTAs */}
                <div className="flex justify-center gap-4">
                    <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all flex items-center gap-2">
                        Get Started <ArrowRight size={16} />
                    </button>
                    <button className="bg-transparent border border-white/20 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/5 transition-all">
                        Book a demo
                    </button>
                </div>

            </div>
        </section>
    );
};
