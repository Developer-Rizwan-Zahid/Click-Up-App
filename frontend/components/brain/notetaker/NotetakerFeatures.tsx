"use client";

import { motion } from "framer-motion";
import { Sparkles, Search, CheckCircle2, Share2, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";

export const NotetakerFeatures = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 mb-6">
                            <Sparkles size={12} /> Why ClickUp AI Notetaker?
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                            Stay in the call, <br />
                            not in your notes
                        </h2>
                    </div>
                    <p className="text-lg text-gray-400 max-w-sm text-left md:text-right">
                        Let AI Notetaker get the details, while you keep the convo going.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">

                    {/* Card 1: Searchable Transcripts */}
                    <FeatureCard
                        title="Searchable transcripts"
                        description="Figure out who said what across any of your meetings, right inside ClickUp."
                        visual={
                            <div className="relative w-full h-full bg-[#111] p-6 overflow-hidden flex flex-col justify-center">
                                {/* Search Bar Mock */}
                                <div className="bg-[#1a1a1a] rounded-lg p-3 flex items-center gap-3 border border-white/10 mb-4">
                                    <Search size={14} className="text-gray-500" />
                                    <span className="text-[10px] text-gray-500">What was discussed on <span className="text-white font-bold">January 10th</span> with the Sales Team?</span>
                                </div>
                                {/* Result Mock */}
                                <div className="bg-[#1a1a1a]/50 rounded-lg p-3 border border-white/5 relative">
                                    <div className="absolute -left-1 top-3 w-1 h-8 bg-fuchsia-500 rounded-r-full" />
                                    <div className="text-[10px] text-gray-400 leading-relaxed">
                                        On Jan 10th, the Sales Team reviewed Q1 targets, product updates, and customer feedback. Sarah Johnson suggested a targeted <span className="bg-fuchsia-500/20 text-white px-1 rounded">email campaign to push</span> ...
                                    </div>
                                    <div className="mt-2 h-1 w-1/3 bg-gray-800 rounded" />
                                </div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 blur-[40px] rounded-full pointer-events-none" />
                            </div>
                        }
                    />

                    {/* Card 2: Smart Summaries */}
                    <FeatureCard
                        title="Smart summaries of every call"
                        description="Zoned out for a few? Had a conflict? We'll be there when you can't — in TL;DR form."
                        visual={
                            <div className="relative w-full h-full bg-[#111] p-4 flex flex-col items-center justify-center overflow-hidden">
                                {/* Mini Hero Mock */}
                                <div className="flex gap-2 mb-3">
                                    <div className="w-16 h-12 bg-neutral-800 rounded-lg overflow-hidden relative">
                                        <Image src="/images/brain/notetaker/user1.png" alt="User" fill className="object-cover opacity-60" />
                                    </div>
                                    <div className="w-16 h-12 bg-neutral-800 rounded-lg overflow-hidden relative">
                                        <Image src="/images/brain/notetaker/user2.png" alt="User" fill className="object-cover opacity-60" />
                                    </div>
                                </div>
                                <div className="bg-[#1a1a1a] border border-white/10 rounded-full px-3 py-1 flex items-center gap-2 mb-2 scale-90">
                                    <div className="w-2 h-2 rounded-full border border-fuchsia-500 animate-spin border-t-transparent" />
                                    <span className="text-[8px] text-gray-300">AI is taking notes...</span>
                                </div>
                                <div className="text-[8px] text-gray-400 bg-fuchsia-900/20 px-2 py-1 rounded border border-fuchsia-500/20">
                                    The <span className="bg-fuchsia-500/30 text-white px-0.5 rounded">onboarding flow UX</span> could be improved...
                                </div>
                            </div>
                        }
                    />

                    {/* Card 3: Review Topics */}
                    <FeatureCard
                        title="Easily review important topics"
                        description="Let ClickUp AI capture what you need to know at a glance."
                        visual={
                            <div className="relative w-full h-full bg-[#111] p-6 flex flex-col justify-center overflow-hidden">
                                <div className="space-y-4 relative z-10">
                                    <div>
                                        <div className="text-[10px] font-bold text-white mb-1">Key Takeaways</div>
                                        <div className="space-y-1 pl-2 border-l border-gray-800">
                                            <div className="text-[8px] text-gray-400 flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-gray-600" /> Marketing and design coordination</div>
                                            <div className="text-[8px] text-gray-400 flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-gray-600" /> Communication is crucial for resolving...</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-white mb-1">Topics</div>
                                        <div className="space-y-1 pl-2 border-l border-gray-800">
                                            <div className="text-[8px] text-gray-500">› Marketing and design coordination</div>
                                            <div className="text-[8px] text-gray-500">› Workload and Task Conflicts</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#000] to-transparent z-20" />
                            </div>
                        }
                    />

                    {/* Card 4: Meeting Tasks (Wide) */}
                    <div className="md:col-span-2 bg-[#0E0E12] border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-colors group flex flex-col md:flex-row">
                        <div className="flex-1 p-8 relative overflow-hidden min-h-[300px] bg-[#111]">
                            {/* Task Creation UI Mock */}
                            <div className="absolute top-8 left-8 right-8 bottom-0 bg-[#1a1a1a] rounded-t-xl border border-white/10 p-4 shadow-2xl">
                                <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
                                    <div className="text-xs font-bold text-white">Create Brief</div>
                                    <div className="flex gap-2">
                                        <span className="text-[8px] bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded">To Do</span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full border border-blue-500 bg-blue-500/20 flex items-center justify-center"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /></div>
                                        <div className="text-[10px] text-white">Call Notes</div>
                                    </div>
                                    <div className="flex items-center gap-2 opacity-50">
                                        <div className="w-3 h-3 rounded-full border border-gray-600" />
                                        <div className="text-[10px] text-gray-400">Resource allocations</div>
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-white/5">
                                        <div className="text-[8px] text-gray-500 mb-2">Action items</div>
                                        <div className="bg-[#222] rounded p-2 text-[8px] text-gray-400 mb-1">Complete market research</div>
                                        <div className="bg-[#222] rounded p-2 text-[8px] text-gray-400">Audience sizing</div>
                                    </div>
                                </div>
                            </div>
                            {/* Blue Glow */}
                            <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500/10 blur-[60px] rounded-full pointer-events-none" />
                        </div>
                        <div className="p-8 flex flex-col justify-center max-w-sm">
                            <h3 className="text-xl font-bold text-white mb-2">Meeting tasks get created + added, automatically</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">ClickUp AI will update docs and turn action items into assigned tasks as soon as the meeting ends.</p>
                        </div>
                    </div>

                    {/* Card 5: Share outcomes (Wide) */}
                    <div className="md:col-span-1 bg-[#0E0E12] border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-colors group flex flex-col">
                        <div className="h-[240px] bg-[#111] p-6 relative overflow-hidden">
                            {/* Chat UI Mock */}
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center"><span className="text-xs font-bold text-pink-500">I</span></div>
                                <div className="flex-1">
                                    <div className="flex items-baseline gap-2 mb-1">
                                        <span className="text-xs font-bold text-white">Ivan</span>
                                        <span className="text-[8px] text-gray-500">4:12 pm</span>
                                    </div>
                                    <div className="text-[10px] text-gray-400 mb-3">Here's a summary of today's marketing strategy meeting.</div>

                                    <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-3 relative">
                                        <div className="absolute -left-1 top-3 w-1 h-6 bg-blue-500 rounded-r-full" />
                                        <div className="text-[8px] font-bold text-gray-400 mb-2">Action items</div>
                                        <div className="space-y-1">
                                            <div className="flex justify-between items-center text-[8px] text-blue-300">
                                                <span>● Finalize ad campaign brief</span>
                                                <span className="text-gray-600">Design sync</span>
                                            </div>
                                            <div className="flex justify-between items-center text-[8px] text-gray-400 opacity-60">
                                                <span>○ Launch campaign</span>
                                                <span className="text-gray-600">Design sync</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[40px] rounded-full pointer-events-none" />
                        </div>
                        <div className="p-8 flex flex-col justify-center">
                            <h3 className="text-xl font-bold text-white mb-2">Share meeting outcomes, faster</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">Answers are always up to date with your latest work.</p>
                        </div>
                    </div>

                </div>

                {/* Get Time Back Section */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
                    <div className="relative w-full max-w-sm aspect-square bg-[#0E0E12] border border-white/10 rounded-3xl p-8 flex items-center justify-center overflow-hidden">
                        {/* Clock Visual */}
                        <div className="relative w-48 h-48 rounded-full border-4 border-gray-800 flex items-center justify-center bg-black shadow-2xl">
                            {/* Clock Hands */}
                            <div className="absolute w-1 h-20 bg-gradient-to-t from-fuchsia-500 to-transparent top-4 left-1/2 -translate-x-1/2 origin-bottom transform rotate-0" />
                            <div className="absolute w-1 h-16 bg-gray-600 top-8 left-1/2 -translate-x-1/2 origin-bottom transform rotate-45" />
                            <div className="absolute w-3 h-3 bg-white rounded-full z-10" />

                            {/* Glow Ring */}
                            <div className="absolute inset-0 rounded-full border border-fuchsia-500/30 blur-md" />
                            <div className="absolute -inset-4 rounded-full border border-purple-500/10 blur-xl" />
                        </div>
                    </div>

                    <div className="max-w-md text-center md:text-left">
                        <h3 className="text-3xl font-bold text-white mb-4">Get time back</h3>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            Prioritize the meetings that matter, and let AI Notetaker report back on the rest.
                        </p>
                        <button className="w-full md:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                            Get Started. It's free <ArrowRight size={16} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

function FeatureCard({ title, description, visual }: { title: string, description: string, visual: React.ReactNode }) {
    return (
        <div className="bg-[#0E0E12] border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-colors group flex flex-col h-[400px]">
            <div className="h-[220px] border-b border-white/5 group-hover:bg-[#111] transition-colors relative">
                {visual}
            </div>
            <div className="flex-1 p-6 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
