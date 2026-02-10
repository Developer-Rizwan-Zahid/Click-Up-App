"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, ChevronDown, Plus, Search, MessageSquare, Bell, HelpCircle } from "lucide-react";
import Image from "next/image";

export default function GanttHero() {
    return (
        <section className="pt-32 pb-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 max-w-2xl text-left"
                    >
                        <div className="inline-block mb-6">
                            <span className="text-purple-600 font-bold tracking-widest text-sm uppercase">ClickUp Gantt Charts</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
                            Visualize projects as organized timelines
                        </h1>

                        <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                            ClickUp&apos;s drag-and-drop <span className="font-bold text-slate-900">Gantt Charts</span> give you a clear picture of your team&apos;s progress, dependencies, and any dangerously over-optimistic deadlines.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                            <button className="w-full sm:w-auto px-8 py-4 bg-[#1f2127] hover:bg-[#121316] text-white font-bold rounded-xl text-lg flex items-center justify-center gap-2 transition-all shadow-lg">
                                Get Started. It&apos;s FREE
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <div className="flex flex-col text-xs text-slate-500 font-medium">
                                <span>Free Forever.</span>
                                <span>No credit card.</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 mb-16">
                            <div className="flex text-yellow-400">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                            </div>
                            <span className="text-sm font-bold text-slate-500">25,000+ reviews from</span>
                            <div className="flex gap-2 opacity-60 grayscale">
                                {/* Placeholders for G2, Capterra, GetApp icons */}
                                <div className="w-5 h-5 bg-orange-500 rounded-sm"></div>
                                <div className="w-5 h-5 bg-blue-500 rounded-sm"></div>
                                <div className="w-5 h-5 bg-green-500 rounded-sm"></div>
                            </div>
                        </div>


                    </motion.div>

                    {/* Hero Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 w-full"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative">
                            {/* App Header */}
                            <div className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-6 h-6 rounded bg-orange-500 flex items-center justify-center text-white text-xs font-bold">M</div>
                                    <span className="font-bold text-sm text-slate-700">Mango Tech</span>
                                    <div className="h-4 w-px bg-slate-200"></div>
                                    <span className="text-xs text-slate-500">All Hands in 13m</span>
                                </div>
                                <div className="w-1/3 bg-slate-50 h-8 rounded-lg border border-slate-200 flex items-center px-3 text-xs text-slate-400">Search...</div>
                                <div className="flex gap-3 text-slate-400">
                                    <MessageSquare className="w-4 h-4" />
                                    <Bell className="w-4 h-4" />
                                </div>
                            </div>

                            <div className="flex h-[500px]">
                                {/* Sidebar */}
                                <div className="w-16 bg-[#1f2127] flex flex-col items-center py-4 gap-6 shrink-0">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500"></div>
                                    <div className="flex flex-col gap-6 text-slate-400">
                                        <div className="w-6 h-6 bg-slate-700/50 rounded"></div>
                                        <div className="w-6 h-6 bg-slate-700/50 rounded"></div>
                                        <div className="w-6 h-6 bg-slate-700/50 rounded"></div>
                                    </div>
                                </div>

                                {/* Main Content */}
                                <div className="flex-1 flex flex-col bg-white">
                                    {/* View Header */}
                                    <div className="h-24 border-b border-slate-200 px-6 py-4 flex flex-col justify-between">
                                        <div className="flex items-center gap-2 text-slate-700 font-bold">
                                            <div className="w-4 h-4 bg-red-500 rounded flex items-center justify-center text-[10px] text-white">✓</div>
                                            4.0 Launch
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-1 text-sm font-medium text-slate-500 bg-slate-100 p-1 rounded-lg">
                                                <span className="px-3 py-1">List</span>
                                                <span className="px-3 py-1">Board</span>
                                                <span className="px-3 py-1 bg-white text-purple-600 shadow-sm rounded-md font-bold">Gantt</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <button className="px-3 py-1.5 border border-slate-200 rounded text-xs font-bold text-slate-600">Sort</button>
                                                <button className="px-3 py-1.5 border border-slate-200 rounded text-xs font-bold text-slate-600">Filter</button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Gantt Area */}
                                    <div className="flex-1 relative overflow-hidden bg-slate-50">
                                        {/* Grid Lines */}
                                        <div className="absolute inset-0 flex">
                                            {[1, 2, 3, 4, 5, 6, 7].map(i => (
                                                <div key={i} className="flex-1 border-r border-slate-200 h-full"></div>
                                            ))}
                                        </div>

                                        {/* Tasks */}
                                        <div className="relative pt-10 pl-4 space-y-12 z-10">
                                            {/* Bar 1 */}
                                            <div className="ml-16 w-56 h-10 bg-[#e0317e] rounded-full shadow-lg flex items-center px-2 relative group z-20">
                                                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[10px] text-white">JD</div>
                                                <span className="text-white text-xs font-bold ml-2">Finalize campaign brief</span>
                                                <div className="absolute right-0 top-1/2 w-3 h-3 bg-white border-2 border-[#e0317e] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                                            </div>

                                            {/* Bar 2 */}
                                            <div className="ml-80 w-48 h-10 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full shadow-lg flex items-center px-2 relative z-20">
                                                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[10px] text-white">AK</div>
                                                <span className="text-white text-xs font-bold ml-2">Market research</span>
                                                <div className="absolute left-0 top-1/2 w-3 h-3 bg-white border-2 border-pink-400 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                                            </div>

                                            {/* Connection Line 1 */}
                                            <svg className="absolute top-5 left-[18rem] w-64 h-24 -z-10 pointer-events-none fill-none stroke-slate-300 stroke-2">
                                                <path d="M0,0 L20,0 L20,60 L40,60" />
                                            </svg>

                                            {/* Bar 3 */}
                                            <div className="ml-8 w-64 h-10 bg-[#007aff] rounded-full shadow-lg flex items-center px-2 relative z-20 mt-8">
                                                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[10px] text-white">SR</div>
                                                <span className="text-white text-xs font-bold ml-2">Target Audience Analysis</span>
                                                <div className="absolute right-0 top-1/2 w-3 h-3 bg-white border-2 border-[#007aff] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                                            </div>

                                            {/* Bar 4 */}
                                            <div className="ml-80 w-64 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-lg flex items-center px-2 relative z-20">
                                                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[10px] text-white">MR</div>
                                                <span className="text-white text-xs font-bold ml-2">Define Campaign Objectives</span>
                                                <div className="absolute left-0 top-1/2 w-3 h-3 bg-white border-2 border-purple-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                                            </div>

                                            {/* Connection Line 2 */}
                                            <svg className="absolute top-[8rem] left-[18rem] w-64 h-24 -z-10 pointer-events-none fill-none stroke-slate-300 stroke-2">
                                                <path d="M0,0 L20,0 L20,50 L40,50" />
                                            </svg>
                                        </div>

                                        {/* Current Time Indicator */}
                                        <div className="absolute top-0 bottom-0 left-[45%] w-px bg-red-400 z-0">
                                            <div className="absolute top-0 -translate-x-1/2 bg-red-400 text-white text-[9px] font-bold px-1 rounded-b">TODAY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Trusted By Logos - Centered Bottom */}
                <div className="border-t border-slate-100 mt-20 pt-10 text-center">
                    <div className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-8">Trusted by the best</div>
                    <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-50 contrast-0 hover:contrast-100 transition-all duration-500">
                        {/* Wayfair */}
                        <svg viewBox="0 0 100 24" className="h-8 w-auto fill-current text-slate-400 opacity-60 hover:opacity-100 hover:text-[#7F187F] transition-all">
                            <path d="M12.5 18.2L9.8 8.4h-3L10.9 22h3.2l5.6-17.8h-3l-4.2 14zM24.2 13.9c-2.6 0-4.3 1.8-4.3 4.2 0 2.4 1.7 4.2 4.3 4.2 1.6 0 2.9-.6 3.6-1.7v1.4h2.8V14h-2.8v1.2c-.7-1-2-1.3-3.6-1.3zm.2 6c-1.2 0-2.1-.9-2.1-2.1 0-1.1.9-2.1 2.1-2.1 1.2 0 2.1.9 2.1 2.1 0 1.2-.9 2.1-2.1 2.1zM34.9 14.1l2.4 6.8 2.3-6.8H43L39 23.8l-1.3 3.5c-.8 2.2-2.1 3-4.8 3-.8 0-1.5-.1-2.1-.2v-2.1c.5.1.9.2 1.4.2 1.1 0 1.9-.3 2.3-1.4l.6-1.7-4.2-11h4zM49.6 4.7c-1.1 0-2 .9-2 2 0 1.1 1 2 2 2 1.1 0 2-.9 2-2s-1-2-2-2zm-3.8 3.5h2.3v2c.5-1.1 1.6-2.2 3.1-2.2.3 0 .6 0 .8.1V10c-.3-.1-.6-.1-1-.1-1.6 0-2.9 1.2-2.9 2.9V22h-2.3V8.2zM63.8 13.9c-2.6 0-4.3 1.8-4.3 4.2 0 2.4 1.7 4.2 4.3 4.2 1.6 0 2.9-.6 3.6-1.7v1.4h2.8V14h-2.8v1.2c-.7-1-2-1.3-3.6-1.3zm.2 6c-1.2 0-2.1-.9-2.1-2.1 0-1.1.9-2.1 2.1-2.1 1.2 0 2.1.9 2.1 2.1 0 1.2-.9 2.1-2.1 2.1zM73.4 8.2h2.8V22h-2.8zM74.8 4.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8 1.8-.8 1.8-1.8-.8-1.8-1.8-1.8zM82.8 8.4h-2.4V22h2.8v-6.6c0-1.9 1-2.9 2.7-2.9.3 0 .5 0 .8.1V9.8c-.3-.1-.7-.1-1.1-.1-1.5 0-2.5 1-2.8 2V8.4z" />
                        </svg>

                        {/* Deloitte */}
                        <svg viewBox="0 0 100 24" className="h-6 w-auto fill-current text-slate-400 opacity-60 hover:opacity-100 hover:text-[#86BC25] transition-all group">
                            <path d="M12.9 4.2c2.5 0 4.6.9 6.2 2.4 1.7 1.6 2.6 3.7 2.6 6.1s-.9 4.5-2.6 6.1c-1.6 1.6-3.7 2.4-6.2 2.4H3.8V4.2h9.1zm-.3 13.4c1.5 0 2.7-.5 3.6-1.4.9-.9 1.4-2.1 1.4-3.5 0-1.4-.5-2.6-1.4-3.5-.9-.9-2.1-1.4-3.6-1.4H7.8v9.8h4.8zM26.8 11.2c.2-2.1 1.8-3.6 4-3.6 2.3 0 3.8 1.6 3.8 4v.8h-5.6c.1 1.1.9 1.9 2.1 1.9.8 0 1.5-.4 1.8-1l1.9.9c-.8 1.5-2.3 2.3-3.9 2.3-2.6 0-4.3-1.8-4.3-4.5 0-2.6 1.7-4.4 4.3-4.4 2.6 0 4.2 1.7 4.2 4.2v.3H26.8z" className="group-hover:text-black transition-colors" />
                            <path d="M37.8 2.8h2.2v18.4h-2.2V2.8zM44.4 7.6h2.2v13.6h-2.2V7.6zM50.4 11.2c.2-2.1 1.8-3.6 4-3.6 2.3 0 3.8 1.6 3.8 4v.8h-5.6c.1 1.1.9 1.9 2.1 1.9.8 0 1.5-.4 1.8-1l1.9.9c-.8 1.5-2.3 2.3-3.9 2.3-2.6 0-4.3-1.8-4.3-4.5 0-2.6 1.7-4.4 4.3-4.4 2.6 0 4.2 1.7 4.2 4.2v.3H50.4zM61 7.6h2.2v2.4h-2.2V7.6zm0 4.2h2.2v9.4H61v-9.4zM67.8 5.6h2.2v4.4h1.8v2.2H70v9h-2.2v-9h-1.2v-2.2h1.2V5.6zM74.8 5.6h2.2v4.4h1.8v2.2H77v9h-2.2v-9h-1.2v-2.2h1.2V5.6zM83.4 11.2c.2-2.1 1.8-3.6 4-3.6 2.3 0 3.8 1.6 3.8 4v.8h-5.6c.1 1.1.9 1.9 2.1 1.9.8 0 1.5-.4 1.8-1l1.9.9c-.8 1.5-2.3 2.3-3.9 2.3-2.6 0-4.3-1.8-4.3-4.5 0-2.6 1.7-4.4 4.3-4.4 2.6 0 4.2 1.7 4.2 4.2v.3H83.4z" className="group-hover:text-black transition-colors" />
                            <circle cx="94" cy="19" r="2.5" className="fill-[#86BC25]" />
                        </svg>

                        {/* Pfizer */}
                        <svg viewBox="0 0 100 24" className="h-8 w-auto fill-current text-slate-400 opacity-60 hover:opacity-100 hover:text-[#0000ff] transition-all">
                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" className="fill-blue-600" />
                            <path d="M12 6c-2.2 0-4 1.8-4 4v8h2v-3h2c1.7 0 3-1.3 3-3V9c0-1.7-1.3-3-3-3h-2v1h2c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2h-2v3h-2v-3H8v-3h2v-1h2v-1h2v-1h-2z" className="fill-blue-600" />
                            <text x="30" y="18" fontFamily="serif" fontStyle="italic" fontSize="18" fontWeight="bold">Pfizer</text>
                        </svg>

                        {/* Adobe */}
                        <svg viewBox="0 0 100 24" className="h-8 w-auto fill-current text-slate-400 opacity-60 hover:opacity-100 hover:text-[#FF0000] transition-all">
                            <path d="M6 2h6v20H6z" className="fill-red-600" />
                            <path d="M18 2h6l6.5 16h-5L24 13h-5L18 2z" className="fill-red-600" />
                            <path d="M38 2h-6v20h6V2z" className="fill-red-600" />
                            <text x="45" y="18" fontFamily="sans-serif" fontWeight="bold" fontSize="18">Adobe</text>
                        </svg>

                        {/* American */}
                        <svg viewBox="0 0 100 24" className="h-6 w-auto fill-current text-slate-400 opacity-60 hover:opacity-100 hover:text-[#0078D2] transition-all">
                            <path d="M10 2l12 20H15L3 2h7z" className="fill-blue-600" />
                            <path d="M22 2l-6 10 4 10h6L22 2z" className="fill-red-600" />
                            <text x="35" y="18" fontFamily="sans-serif" fontWeight="bold" fontSize="16">American</text>
                        </svg>

                        {/* NBCUniversal */}
                        <svg viewBox="0 0 120 24" className="h-6 w-auto fill-current text-slate-400 opacity-60 hover:opacity-100 hover:text-purple-600 transition-all">
                            <text x="0" y="18" fontFamily="sans-serif" fontWeight="bold" fontSize="16">NBCUniversal</text>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
