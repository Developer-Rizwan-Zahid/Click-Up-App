
"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function DashboardsBottomCta() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 sm:px-6 lg:px-8">

                <div className="bg-black rounded-[2.5rem] relative overflow-hidden py-16 px-8 md:px-16 flex flex-col lg:flex-row items-center gap-16 shadow-2xl">

                    {/* Background Glows */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 max-w-xl text-left relative z-10"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 relative">
                                {/* Simple logo mock using generic icons/shapes */}
                                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#7C3AED" />
                                    <path d="M2 17L12 22L22 17" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 12L12 17L22 12" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-white">ClickUp</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-white">
                            Put your data to work, with Dashboards.
                        </h2>
                        <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                            Build what you need in seconds, with all of the information you need from all of your work in ClickUp.
                        </p>

                        <button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white font-bold py-3 px-8 rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-purple-500/30 text-lg">
                            Try ClickUp free
                            <ArrowRight className="w-5 h-5" />
                        </button>

                        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                                <span>Free forever</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                                <span>No credit card</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Side (Mockup Image) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1 w-full relative z-10"
                    >
                        {/* We simulate the screenshot's dashboard view which looks like a zoomed in version of a sprint board */}
                        <div className="relative rounded-xl overflow-hidden shadow-2xl skew-y-2 transform perspective-1000 border border-white/10 bg-slate-900/50 backdrop-blur-sm group hover:skew-y-0 transition-all duration-500">

                            {/* Header Mock */}
                            <div className="h-10 border-b border-white/10 flex items-center px-4 gap-4 bg-white/5">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                </div>
                                <div className="w-32 h-2 rounded-full bg-white/10"></div>
                            </div>

                            {/* Content Mock */}
                            <div className="p-6 grid grid-cols-3 gap-4">
                                {/* Card 1 */}
                                <div className="bg-white/5 border border-white/10 rounded-lg p-4 col-span-1">
                                    <div className="text-xs text-slate-400 mb-2">Unassigned</div>
                                    <div className="text-2xl font-bold text-white mb-1">14</div>
                                    <div className="text-[10px] text-slate-500">tasks</div>
                                </div>
                                {/* Card 2 */}
                                <div className="bg-white/5 border border-white/10 rounded-lg p-4 col-span-1">
                                    <div className="text-xs text-slate-400 mb-2">Open</div>
                                    <div className="text-2xl font-bold text-white mb-1">12</div>
                                    <div className="text-[10px] text-slate-500">tasks</div>
                                </div>
                                {/* Card 3 */}
                                <div className="bg-white/5 border border-white/10 rounded-lg p-4 col-span-1">
                                    <div className="text-xs text-slate-400 mb-2">In Progress</div>
                                    <div className="text-2xl font-bold text-white mb-1">6</div>
                                    <div className="text-[10px] text-slate-500">tasks</div>
                                </div>

                                {/* Chart Area */}
                                <div className="col-span-3 bg-white/5 border border-white/10 rounded-lg p-4 mt-2">
                                    <div className="flex justify-between mb-8">
                                        <div className="w-24 h-3 bg-white/10 rounded-md"></div>
                                        <div className="w-16 h-3 bg-white/10 rounded-md"></div>
                                    </div>
                                    <div className="h-32 w-full relative">
                                        {/* Lines Mock */}
                                        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                                            <path d="M0,80 L50,70 L100,50 L150,60 L200,40 L250,50" stroke="#F87171" strokeWidth="2" fill="none" />
                                            <path d="M0,60 L50,50 L100,40 L150,30 L200,20 L250,10" stroke="#60A5FA" strokeWidth="2" fill="none" />
                                            <path d="M0,80 L250,80" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
