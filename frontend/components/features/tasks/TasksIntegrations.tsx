"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, FileText, PieChart } from "lucide-react";

export default function TasksIntegrations() {
    return (
        <section className="py-32 bg-white text-slate-900 border-t border-slate-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mb-16"
                >
                    <div className="text-indigo-600 font-bold tracking-widest text-xs uppercase mb-4">
                        The Power of Convergence
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900">
                        Connect your tasks to the tools you use
                    </h2>
                    <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
                        Focus on doing the work and let ClickUp handle scheduling, task creation, and organization for you.
                    </p>
                    <button className="px-8 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all inline-flex items-center gap-2">
                        Get started. It's FREE
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </motion.div>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">

                    {/* Card 1: Schedule */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group"
                    >
                        <h3 className="text-lg font-bold text-slate-900 mb-4">Schedule tasks automatically</h3>
                        <div className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden mb-6 aspect-[4/3] relative p-4 flex items-center justify-center">
                            {/* Mockup for Calendar */}
                            <div className="bg-white rounded shadow-sm border border-slate-200 w-full h-full p-2 relative">
                                <div className="flex items-center gap-2 mb-2 border-b border-slate-100 pb-2">
                                    <Calendar size={14} className="text-slate-400" />
                                    <div className="h-2 w-16 bg-slate-100 rounded" />
                                </div>
                                {/* Fake Calendar Events */}
                                <div className="space-y-2">
                                    <div className="p-2 bg-pink-50 border border-pink-100 rounded text-[10px] text-pink-600 font-medium">
                                        Outlook Integration
                                    </div>
                                    <div className="p-2 bg-blue-50 border border-blue-100 rounded text-[10px] text-blue-600 font-medium ml-4">
                                        Website Design
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                            Calendar auto-blocks focus time and reschedules tasks, keeping you on track.
                        </p>
                    </motion.div>

                    {/* Card 2: Turn ideas into tasks */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group"
                    >
                        <h3 className="text-lg font-bold text-slate-900 mb-4">Turn ideas into tasks</h3>
                        <div className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden mb-6 aspect-[4/3] relative p-4 flex items-center justify-center">
                            {/* Mockup for Docs */}
                            <div className="bg-white rounded shadow-sm border border-slate-200 w-full h-full p-3 relative">
                                <div className="font-bold text-xs text-slate-800 mb-2">Design assets for Deck</div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full border border-slate-300" />
                                        <div className="h-2 w-3/4 bg-slate-100 rounded" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full border border-slate-300" />
                                        <div className="h-2 w-1/2 bg-slate-100 rounded" />
                                    </div>
                                    <div className="p-2 bg-indigo-50 rounded mt-2 border border-indigo-100 flex items-center gap-2">
                                        <div className="px-1.5 py-0.5 bg-indigo-100 rounded text-[8px] font-bold text-indigo-600">Task</div>
                                        <div className="text-[8px] text-indigo-800">New Task</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                            Create tasks directly from documents to easily capture and assign action items.
                        </p>
                    </motion.div>

                    {/* Card 3: Track progress */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="group"
                    >
                        <h3 className="text-lg font-bold text-slate-900 mb-4">Track progress at a glance</h3>
                        <div className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden mb-6 aspect-[4/3] relative p-4 flex items-center justify-center">
                            {/* Mockup for Dashboard */}
                            <div className="bg-white rounded shadow-sm border border-slate-200 w-full h-full p-2 relative flex flex-col items-center justify-center">
                                <div className="absolute top-2 left-2 text-[10px] font-bold text-slate-400">Team's workload</div>
                                {/* Pie Chart Visual */}
                                <div className="relative w-24 h-24 rounded-full bg-slate-100 conic-gradient">
                                    <div className="absolute inset-0 rounded-full" style={{ background: 'conic-gradient(#3b82f6 0% 45%, #ec4899 45% 60%, #10b981 60% 80%, #f59e0b 80% 100%)' }} />
                                    <div className="absolute inset-6 bg-white rounded-full" />
                                </div>
                                <div className="absolute right-2 top-10 space-y-1">
                                    <div className="h-1 w-8 bg-blue-100 rounded" />
                                    <div className="h-1 w-6 bg-pink-100 rounded" />
                                    <div className="h-1 w-10 bg-green-100 rounded" />
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                            Dashboards make it easy to see task progress, workloads, and priorities.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
