"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Play, Search, LayoutGrid, CheckSquare, List, MessageSquare } from "lucide-react";

export default function DashboardsHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-white text-slate-900">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-left"
                    >
                        {/* Tag */}
                        <div className="inline-block mb-4">
                            <span className="text-lg font-bold text-[#7b68ee]">
                                ClickUp Dashboards
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-5xl md:text-[4rem] font-black tracking-tight mb-6 leading-[1.1] text-slate-900">
                            Build custom reports for almost anything
                        </h1>

                        {/* Subheading */}
                        <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                            <span className="font-bold text-slate-900">Dashboards</span> make it easy to see everything you need, in a glance. Customize perfect reports for anything from campaign performance to team productivity, to billable hours, and more.
                        </p>

                        {/* CTA Section */}
                        <div className="flex flex-col sm:flex-col items-start gap-4 mb-8">
                            <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#ff0080] to-[#7928ca] text-white font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30">
                                Get started. It's FREE
                            </button>
                        </div>

                        {/* Ratings / Social Proof */}
                        <div className="flex items-center gap-3">
                            <div className="flex gap-0.5">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <div className="text-sm font-medium text-slate-500">
                                <span className="text-slate-700 font-bold">25,000+</span> reviews from
                            </div>
                            {/* Platform Icons */}
                            <div className="flex items-center gap-2 grayscale opacity-80">
                                <div className="w-4 h-4 rounded bg-[#FF4F00]" title="G2"></div>
                                <div className="w-4 h-4 rounded bg-[#0069FF]" title="Capterra"></div>
                                <div className="w-4 h-4 rounded bg-[#4B4B4B]" title="Apple"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Purple Glow Background */}
                        <div className="absolute -inset-10 bg-purple-600/30 blur-[80px] rounded-full pointer-events-none"></div>

                        {/* Glow Container */}
                        <div className="relative rounded-2xl p-1 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 shadow-2xl">
                            <div className="relative bg-white rounded-xl overflow-hidden aspect-[16/10] flex flex-col">

                                {/* Fake Browser Header */}
                                <div className="bg-[#2B2D31] h-8 flex items-center px-4 justify-between select-none">
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
                                    </div>
                                    <div className="hidden md:flex bg-[#1E1F22] rounded text-[10px] text-slate-400 px-2 py-0.5 items-center gap-2 w-1/3">
                                        <Search className="w-3 h-3" />
                                        <span>Search...</span>
                                    </div>
                                    <div></div>
                                </div>

                                {/* App UI Mockup */}
                                <div className="flex-1 flex bg-[#F2F4F7]">
                                    {/* Sidebar */}
                                    <div className="w-16 md:w-48 bg-white border-r border-[#E3E5E8] flex flex-col pt-4 hidden md:flex">
                                        <div className="px-4 mb-4 flex items-center gap-2">
                                            <div className="w-6 h-6 bg-purple-600 rounded"></div>
                                            <span className="font-bold text-sm text-slate-700">Work</span>
                                        </div>
                                        {[
                                            { icon: LayoutGrid, text: "Dashboards", active: true },
                                            { icon: CheckSquare, text: "Tasks", active: false },
                                            { icon: List, text: "Docs", active: false },
                                            { icon: MessageSquare, text: "Chat", active: false },
                                        ].map((item, i) => (
                                            <div key={i} className={`px-4 py-2 mx-2 rounded-lg flex items-center gap-3 text-sm ${item.active ? 'bg-purple-50 text-purple-600 font-medium' : 'text-slate-500'}`}>
                                                <item.icon className="w-4 h-4" />
                                                <span>{item.text}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Main Content */}
                                    <div className="flex-1 p-6 relative">
                                        <h2 className="text-2xl font-bold text-slate-800 mb-6">Marketing Overview</h2>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                                                <div className="h-4 w-24 bg-slate-100 rounded mb-4"></div>
                                                <div className="flex items-end gap-2 h-24">
                                                    <div className="flex-1 bg-purple-100 rounded-t h-1/2"></div>
                                                    <div className="flex-1 bg-purple-200 rounded-t h-3/4"></div>
                                                    <div className="flex-1 bg-purple-500 rounded-t h-full"></div>
                                                    <div className="flex-1 bg-purple-300 rounded-t h-2/3"></div>
                                                </div>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                                                <div className="h-4 w-24 bg-slate-100 rounded mb-4"></div>
                                                <div className="flex justify-center">
                                                    <div className="w-24 h-24 rounded-full border-[8px] border-purple-500 border-r-pink-500"></div>
                                                </div>
                                            </div>
                                            <div className="col-span-2 bg-white p-4 rounded-lg shadow-sm border border-slate-200 flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-slate-100"></div>
                                                <div className="space-y-2 flex-1">
                                                    <div className="h-3 w-3/4 bg-slate-100 rounded"></div>
                                                    <div className="h-3 w-1/2 bg-slate-100 rounded"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Watch Video Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/5 backdrop-blur-[1px]">
                                            <button className="bg-[#242938] hover:bg-[#343a4b] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-3 shadow-2xl transition-all hover:scale-105 group">
                                                <div className="w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center">
                                                    <Play className="w-3 h-3 fill-white ml-0.5" />
                                                </div>
                                                Watch video
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>

                {/* Trusted By Section (Bottom) */}
                <div className="mt-32 text-center w-full max-w-[100vw] overflow-hidden">
                    <p className="text-sm font-medium text-slate-400 mb-8">Trusted by the world's leading businesses</p>

                    <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                        <motion.div
                            className="flex gap-16 items-center flex-nowrap pr-16"
                            animate={{
                                x: ["0%", "-50%"]
                            }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="flex gap-16 items-center whitespace-nowrap opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                                    <span className="text-xl font-bold font-mono text-purple-600">DATADOG</span>
                                    <span className="text-xl font-bold text-cyan-700 tracking-wider">SIEMENS</span>
                                    <span className="text-xl font-black text-blue-500">AT&T</span>
                                    <span className="text-sm font-bold uppercase tracking-widest text-slate-800 flex flex-col leading-tight text-left">
                                        <span>American</span>
                                        <span>Airlines</span>
                                    </span>
                                    <span className="text-2xl font-black text-black">CN</span>
                                    <span className="text-xl font-serif tracking-widest">SEPHORA</span>
                                    <span className="text-xl font-serif italic font-bold text-blue-900">Paramount</span>
                                    <span className="text-2xl font-bold text-purple-800 flex items-center gap-1"><span className="text-3xl">❖</span>wayfair</span>
                                    <span className="text-2xl font-bold text-slate-800">logitech</span>

                                    {/* Additional ones to ensure length */}
                                    <span className="text-xl font-serif italic font-bold">Chick-fil-A</span>
                                    <span className="text-2xl font-bold font-sans tracking-tight text-blue-600">Zillow</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
}
