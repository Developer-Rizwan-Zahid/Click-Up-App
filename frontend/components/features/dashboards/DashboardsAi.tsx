
"use client";

import { motion } from "framer-motion";
import { Sparkles, Search, Plus, BarChart3, Home, MessageSquare, LayoutGrid, Settings, Grip } from "lucide-react";

export default function DashboardsAi() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Centered Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-lg font-bold text-purple-600 mb-4 font-script">
                            Still have questions?
                        </h2>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                            Get answers about your dashboards
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                            Why stare at charts when you can just ask what they mean? Ask ClickUp Brain any question, and we'll get you a reliable answer by searching every piece of data from every Dashboard you have.
                        </p>
                    </motion.div>
                </div>

                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative rounded-2xl shadow-2xl border border-slate-200 bg-white overflow-hidden font-sans"
                    >
                        {/* App Header Bar */}
                        <div className="h-12 border-b border-slate-100 flex items-center px-4 justify-between bg-white">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 px-2 py-1 hover:bg-slate-50 rounded cursor-pointer">
                                    <div className="w-5 h-5 bg-orange-100 rounded flex items-center justify-center text-orange-500">
                                        <Sparkles className="w-3 h-3" /> {/* Sun icon mock */}
                                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                    </div>
                                    <span className="text-sm font-bold text-slate-700">Mango Tech</span>
                                    <span className="text-slate-400 text-xs">▼</span>
                                </div>
                                <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-slate-500">
                                    <div className="w-4 h-4 rounded bg-yellow-100 border border-yellow-200"></div>
                                    All Hands in 13m
                                </div>
                            </div>

                            <div className="flex items-center gap-2 w-1/3">
                                <div className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 flex items-center gap-2 text-slate-400 text-xs">
                                    <Search className="w-3 h-3" />
                                    <span>Search...</span>
                                    <span className="ml-auto border border-slate-200 rounded px-1 text-[10px]">⌘K</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex h-[500px]">
                            {/* Sidebar Mock */}
                            <div className="w-14 bg-[#1E1F21] flex flex-col items-center py-4 gap-6 shrink-0">
                                <div className="relative">
                                    <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">M</div>
                                    <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full border-2 border-[#1E1F21]">4</div>
                                </div>
                                <Home className="w-5 h-5 text-slate-400" />
                                <LayoutGrid className="w-5 h-5 text-slate-400" />
                                <MessageSquare className="w-5 h-5 text-slate-400" />
                                <div className="w-8 h-8 bg-purple-600/20 text-purple-400 rounded-lg flex items-center justify-center">
                                    <BarChart3 className="w-5 h-5" />
                                </div>
                                <Sparkles className="w-5 h-5 text-slate-400" />
                                <div className="mt-auto flex flex-col gap-4">
                                    <Grip className="w-5 h-5 text-slate-400" />
                                    <Settings className="w-5 h-5 text-slate-400" />
                                </div>
                            </div>

                            {/* Main Dashboard List Area */}
                            <div className="flex-1 bg-white relative">
                                <div className="p-8">
                                    <div className="flex items-center gap-2 text-lg font-bold text-slate-800 mb-6">
                                        <div className="p-1 bg-purple-100 rounded">
                                            <BarChart3 className="w-4 h-4 text-purple-600" />
                                        </div>
                                        Dashboard
                                    </div>

                                    <div className="space-y-1">
                                        <div className="text-xs font-semibold text-slate-400 mb-2 px-4">Name</div>
                                        {[
                                            "Marketing performance",
                                            "Productivity pulse",
                                            "Product prioritization",
                                            "Company task overview",
                                            "Campaign budget",
                                            "SEO performance"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 border-b border-slate-50 last:border-0 group cursor-pointer">
                                                <div className="p-1 bg-purple-100 rounded text-purple-600">
                                                    <BarChart3 className="w-3 h-3" />
                                                </div>
                                                <span className="text-sm font-medium text-slate-700">{item}</span>
                                            </div>
                                        ))}
                                        <div className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-600 cursor-pointer">
                                            <Plus className="w-4 h-4" />
                                            <span className="text-sm">New Dashboard</span>
                                        </div>
                                    </div>
                                </div>

                                {/* BRAIN POPUP OVERLAY */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, x: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.4 }}
                                    className="absolute top-8 right-8 w-[450px] bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-20"
                                >
                                    {/* User Question */}
                                    <div className="p-4 flex justify-end">
                                        <div className="bg-slate-50 border border-slate-100 px-4 py-2 rounded-lg text-sm font-medium text-slate-700">
                                            What did we deliver last sprint?
                                        </div>
                                    </div>

                                    {/* Brain Answer */}
                                    <div className="px-6 pb-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Sparkles className="w-4 h-4 text-pink-500 animate-pulse" />
                                            <span className="font-bold text-slate-800 text-sm">Brain</span>
                                        </div>

                                        <div className="text-sm text-slate-600 space-y-4">
                                            <p>Last sprint included three key updates:</p>
                                            <ul className="space-y-2">
                                                <li className="flex gap-2">
                                                    <span className="mt-1.5 w-1 h-1 bg-slate-400 rounded-full shrink-0"></span>
                                                    <span><strong className="text-slate-800">Formula Fields:</strong> Spreadsheet-like calculations in Lists.</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="mt-1.5 w-1 h-1 bg-slate-400 rounded-full shrink-0"></span>
                                                    <span><strong className="text-slate-800">Mobile Search:</strong> Unified search across Figma.</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="mt-1.5 w-1 h-1 bg-slate-400 rounded-full shrink-0"></span>
                                                    <span><strong className="text-slate-800">Timesheets:</strong> Add tasks and track time with a timer.</span>
                                                </li>
                                            </ul>

                                            <div className="pt-4 border-t border-slate-50">
                                                <p className="text-xs text-slate-400 mb-2">This response is based data on these dashboard</p>
                                                <div className="space-y-1">
                                                    {[
                                                        "Sprint - Field Dashboard",
                                                        "Sprint - Search Dashboard",
                                                        "Sprint - Timesheet Dashboard"
                                                    ].map((item, i) => (
                                                        <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                                                            <div className="p-0.5 bg-purple-100 rounded text-purple-600">
                                                                <BarChart3 className="w-2.5 h-2.5" />
                                                            </div>
                                                            {item}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* Input Area Mock */}
                                    <div className="p-3 border-t border-slate-100 bg-slate-50/50">
                                        <div className="h-2 w-16 bg-slate-200 rounded-full mx-auto"></div>
                                    </div>

                                </motion.div>
                            </div>
                        </div>

                    </motion.div>
                </div>

            </div>
        </section>
    );
}
