
"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, BarChart3, ArrowRight } from "lucide-react";

export default function DashboardsReporting() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-lg font-bold text-purple-600 mb-4">
                        Why Dashboards?
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                        Build reports to get all your pressing questions answered, like...
                    </h3>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Content Side (Left) */}
                    <div className="flex-1 text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                "How did we do?"
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Quickly see how your campaigns, pipeline, and sprint delivery have been performing. Just decide what you want to track, then ClickUp will turn complicated performance metrics into simple visuals.
                            </p>
                        </motion.div>
                    </div>

                    {/* Visual Side (Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 w-full"
                    >
                        <div className="relative bg-[#F8F9FC] p-2 rounded-xl border border-slate-200 shadow-2xl">
                            {/* Browser/Window Bar */}
                            <div className="h-6 bg-white rounded-t-lg border-b border-slate-100 flex items-center px-4 gap-2 mb-2">
                                <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                                <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                                <div className="w-16 h-1.5 rounded-full bg-slate-100 ml-2"></div>
                            </div>

                            <div className="p-4 grid grid-cols-2 gap-4">
                                {/* Chart 1: Sprint Velocity */}
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                                    <div className="text-xs font-bold text-slate-700 mb-4">Sprint velocity</div>
                                    <div className="h-24 flex items-end gap-1">
                                        {[40, 60, 45, 70, 55, 80, 65].map((h, i) => (
                                            <div key={i} className="flex-1 flex gap-0.5 items-end h-full">
                                                <div style={{ height: `${h}%` }} className="w-1.5 bg-purple-200 rounded-t-sm"></div>
                                                <div style={{ height: `${h * 0.7}%` }} className="w-1.5 bg-indigo-500 rounded-t-sm"></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Chart 2: Cumulative Flow */}
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                                    <div className="text-xs font-bold text-slate-700 mb-4">Cumulative Flow</div>
                                    <div className="h-24 relative overflow-hidden rounded-md">
                                        <svg viewBox="0 0 100 50" className="w-full h-full" preserveAspectRatio="none">
                                            <path d="M0,50 L0,30 C20,25 40,35 60,20 C80,10 100,5 100,0 L100,50 Z" fill="#E0E7FF" />
                                            <path d="M0,50 L0,40 C20,35 40,45 60,30 C80,20 100,15 100,10 L100,50 Z" fill="#818CF8" />
                                            <path d="M0,50 L0,45 C20,40 40,48 60,35 C80,25 100,20 100,15 L100,50 Z" fill="#4F46E5" />
                                            <path d="M0,50 L0,48 C20,45 40,49 60,40 C80,35 100,30 100,25 L100,50 Z" fill="#312E81" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Chart 3: Burndown */}
                                <div className="col-span-2 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                                    <div className="flex justify-between mb-4">
                                        <div className="text-xs font-bold text-slate-700">Sprint burndown</div>
                                        <div className="text-[10px] text-slate-400">Sprint 12 • Remaining: 4d</div>
                                    </div>
                                    <div className="h-20 w-full relative">
                                        <div className="absolute inset-0 flex items-end">
                                            <div className="w-full h-[1px] bg-slate-100 mb-0"></div>
                                        </div>
                                        <svg viewBox="0 0 200 80" className="w-full h-full overflow-visible">
                                            {/* Ideal Line */}
                                            <path d="M0,0 L200,80" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                                            {/* Actual Line */}
                                            <path d="M0,0 L40,10 L80,5 L120,30 L160,25" stroke="#8B5CF6" strokeWidth="2" fill="none" />
                                            <circle cx="160" cy="25" r="3" fill="#8B5CF6" />
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
