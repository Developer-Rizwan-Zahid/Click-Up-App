"use client";

import { motion } from "framer-motion";
import { ArrowRight, PenTool, Sparkles, Image as ImageIcon, FileText, ListTodo, AlignLeft, SpellCheck, Wand2, Type } from "lucide-react";

export const AiCreator = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-2 mb-4">
                        <PenTool className="text-green-500 w-5 h-5" />
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 text-sm tracking-wider uppercase">
                            AI Creator
                        </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-4xl">
                            Create faster than ever with AI that turns<br />
                            <span className="text-gray-500">ideas into visuals, words, and action</span>
                        </h2>
                        <button className="bg-[#1f2127] hover:bg-[#2c2e36] text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all border border-white/10 hover:border-white/20">
                            Get started <ArrowRight size={16} />
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Card 1: AI Image Generator */}
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-green-500/30 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="h-64 mb-8 relative flex flex-col justify-center items-center">
                            {/* Visual: Image Generation */}
                            <div className="relative w-full max-w-[260px]">
                                {/* User Prompt */}
                                <div className="absolute top-[-20px] right-0 bg-[#1E1E1E] border border-white/10 px-3 py-2 rounded-xl rounded-tr-sm text-[10px] text-gray-300 shadow-xl max-w-[200px]">
                                    Generate an image based on this doc <span className="inline-flex items-center gap-1 bg-white/10 px-1 rounded text-white"><FileText size={8} /> Promo guidelines</span>
                                </div>

                                {/* Main Card */}
                                <div className="mt-8 bg-[#111] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                                    <div className="p-3 border-b border-white/5 flex items-center gap-2">
                                        <Sparkles size={12} className="text-fuchsia-500 animate-pulse" />
                                        <span className="text-xs text-gray-400">Generating image...</span>
                                    </div>
                                    <div className="h-32 bg-black relative">
                                        {/* Pixel/Dot Effect */}
                                        <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] gap-0.5 opacity-50 p-4">
                                            {[...Array(100)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="bg-green-500 rounded-full w-full h-full animate-pulse"
                                                    style={{
                                                        opacity: ((i * 37) % 100) / 100 + 0.1, // Deterministic pseudo-random
                                                        animationDelay: `${((i * 17) % 20) / 10}s`
                                                    }}
                                                />
                                            ))}
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">AI Image Generator</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Generates on-brand visuals from your writing, no design skills or prompting required.
                        </p>
                    </div>

                    {/* Card 2: AI Doc Writer */}
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="h-64 mb-8 relative flex flex-col justify-center items-center">
                            {/* text background */}
                            <div className="absolute top-4 left-4 right-4 text-[10px] text-gray-600 space-y-2 opacity-50">
                                <div className="w-full h-2 bg-gray-800 rounded" />
                                <div className="w-2/3 h-2 bg-gray-800 rounded" />
                                <div className="flex items-center gap-1">
                                    <span className="text-green-800">We introduced a brand new tier — Basic with...</span>
                                </div>
                            </div>

                            {/* Context Menu Visual */}
                            <div className="relative z-10 bg-[#151515]/95 backdrop-blur-xl border border-white/10 rounded-xl p-2 w-[240px] shadow-2xl">
                                <div className="flex items-center gap-2 px-2 py-2 border-b border-white/5 mb-1">
                                    <Sparkles size={12} className="text-green-400" />
                                    <input
                                        type="text"
                                        placeholder="Ask Brain to edit or write..."
                                        className="bg-transparent border-none text-[10px] text-white placeholder-gray-500 focus:outline-none w-full"
                                        readOnly
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-1 p-1">
                                    <MenuOption icon={AlignLeft} label="Improve writing" />
                                    <MenuOption icon={Type} label="Continue writing" />
                                    <MenuOption icon={SpellCheck} label="Fix spelling" />
                                    <MenuOption icon={Wand2} label="Explain this" />
                                    <MenuOption icon={ListTodo} label="Make longer" />
                                    <MenuOption icon={Sparkles} label="Summarize" />
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">AI Doc Writer</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Pulls action items from docs, chats, and meetings and turns them into fully built plans.
                        </p>
                    </div>

                    {/* Card 3: AI Task Builder */}
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-teal-500/30 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="h-64 mb-8 relative flex flex-col justify-center items-center">

                            <div className="relative w-full max-w-[260px] space-y-4">
                                {/* Prompt */}
                                <div className="bg-[#1E1E1E] border border-white/10 p-3 rounded-xl rounded-br-sm text-[10px] text-gray-300 shadow-lg ml-auto max-w-[220px]">
                                    Create tasks based on this doc <br />
                                    <span className="inline-flex items-center gap-1 bg-white/10 px-1.5 py-0.5 rounded text-white mt-1 border border-white/5"><FileText size={8} /> Usage Analytics Overview</span>
                                </div>

                                {/* Response */}
                                <div className="bg-[#111] border border-white/10 p-4 rounded-xl shadow-2xl">
                                    <div className="flex items-start gap-2 mb-3">
                                        <Sparkles size={12} className="text-teal-400 mt-0.5" />
                                        <div className="text-[10px] text-gray-300">Sure thing, I've created the following tasks:</div>
                                    </div>
                                    <div className="space-y-2 pl-5">
                                        <div className="flex items-center gap-2 group/task cursor-pointer">
                                            <div className="w-1.5 h-1.5 bg-green-500 rounded-sm" />
                                            <span className="text-[10px] text-gray-300 font-medium group-hover/task:text-white transition-colors bg-[#1E1E1E] px-2 py-1 rounded border border-white/5 w-full">Optimize Dashboard Load Time</span>
                                        </div>
                                        <div className="flex items-center gap-2 group/task cursor-pointer">
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-sm" />
                                            <span className="text-[10px] text-gray-300 font-medium group-hover/task:text-white transition-colors bg-[#1E1E1E] px-2 py-1 rounded border border-white/5 w-full">Improve Billing Error Handling</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">AI Task Builder</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Creates detailed tasks from chats, docs, or meetings - no details missed.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

function MenuOption({ icon: Icon, label }: any) {
    return (
        <div className="flex items-center gap-2 p-1.5 hover:bg-white/10 rounded cursor-pointer transition-colors text-gray-400 hover:text-white group">
            <Icon size={10} className="group-hover:text-green-400 transition-colors" />
            <span className="text-[9px] font-medium">{label}</span>
        </div>
    )
}
