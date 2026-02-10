"use client";

import { motion } from "framer-motion";
import { Flag, Play, LayoutList, Layers, BarChart3, Users, Plus, ChevronDown, CheckCircle2 } from "lucide-react";

export default function TasksStandardFeatures() {
    return (
        <section className="py-32 bg-white text-slate-900 border-t border-slate-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-indigo-600 font-bold tracking-widest text-xs uppercase mb-4"
                    >
                        Why ClickUp Tasks?
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900"
                    >
                        Tasks that connect to <br />
                        the rest of your work
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-500"
                    >
                        Tailor tasks to fit your flow with custom fields, categories and more.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

                    {/* Card 1: Personal Priorities */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 rounded-3xl p-8 border border-slate-100 overflow-hidden"
                    >
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Personal Priorities on Tasks</h3>
                            <p className="text-slate-500 text-sm">Mark what's most important to you so your team knows exactly what you're focusing on next.</p>
                        </div>

                        {/* Mockup */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 relative">
                            <div className="font-bold text-slate-900 mb-4 text-sm">Brand Guidelines + Socials</div>
                            <div className="flex items-center justify-between text-xs text-slate-500 mb-6 font-medium">
                                <div className="flex items-center gap-2">
                                    <span>Status</span>
                                    <span className="px-2 py-0.5 bg-blue-500 text-white rounded text-[10px] font-bold">DESIGN</span>
                                </div>
                                <div className="relative">
                                    {/* Popover */}
                                    <div className="absolute top-0 right-0 w-48 bg-white shadow-xl rounded-lg border border-slate-100 p-2 z-10 -mt-2 -mr-2">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-slate-50 rounded cursor-pointer">
                                                <Flag className="w-3 h-3 text-red-500 fill-red-500" />
                                                <span className="text-slate-700 font-bold">Urgent</span>
                                            </div>
                                            <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-slate-50 rounded cursor-pointer">
                                                <Flag className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                                <span className="text-slate-700 font-bold">High</span>
                                            </div>
                                            <div className="flex items-center gap-2 px-2 py-1.5 bg-indigo-50 rounded cursor-pointer border border-indigo-100">
                                                <Flag className="w-3 h-3 text-blue-500 fill-blue-500" />
                                                <span className="text-slate-700 font-bold">Normal</span>
                                            </div>
                                            <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-slate-50 rounded cursor-pointer">
                                                <Flag className="w-3 h-3 text-slate-400" />
                                                <span className="text-slate-700 font-bold">Low</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-12 text-xs text-slate-400">
                                <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-slate-100" /> Dates</div>
                                <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-slate-100" /> Tags</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Automate */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-50 rounded-3xl p-8 border border-slate-100 overflow-hidden"
                    >
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Automate repetitive tasks</h3>
                            <p className="text-slate-500 text-sm">Assignments, status updates, notifications, and workflows can be automated from any action.</p>
                        </div>

                        {/* Mockup */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-3">
                                <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm text-[10px] font-bold text-slate-500 flex-col gap-1">
                                    <Play size={14} className="text-green-500" />
                                    When
                                </div>
                                <div className="bg-white border border-slate-200 rounded-lg p-3 text-xs w-full shadow-sm">
                                    <div className="text-slate-400 mb-1 font-semibold text-[10px] uppercase">Status changes</div>
                                    <div className="text-slate-700 font-medium">From Any Status <br /> To <span className="text-blue-500">Ready for Design</span></div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm text-[10px] font-bold text-slate-500 flex-col gap-1">
                                    <LayoutList size={14} className="text-blue-500" />
                                    Then
                                </div>
                                <div className="bg-white border border-slate-200 rounded-lg p-3 text-xs w-full shadow-sm">
                                    <div className="text-slate-400 mb-1 font-semibold text-[10px] uppercase">Change assignees</div>
                                    <div className="space-y-1">
                                        <div className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-[10px] font-medium inline-block">@DesignTeam</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: Task Types */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 rounded-3xl p-8 border border-slate-100 overflow-hidden"
                    >
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Do more with Task Types</h3>
                            <p className="text-slate-500 text-sm">Label tasks as milestones, bugs, or ideas for easy tracking—and a better search experience.</p>
                        </div>

                        {/* Mockup */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 relative min-h-[160px]">
                            <div className="absolute top-4 left-4 right-4 bg-white border border-slate-200 rounded-lg shadow-lg p-1 z-10">
                                <div className="flex items-center justify-between px-3 py-2 bg-indigo-50 rounded font-medium text-xs text-indigo-700">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 size={14} />
                                        Task
                                    </div>
                                    <CheckCircle2 size={14} className="text-indigo-600" />
                                </div>
                                <div className="px-3 py-2 hover:bg-slate-50 text-xs text-slate-600 flex items-center gap-2 cursor-pointer">
                                    <Flag size={14} /> Milestone
                                </div>
                                <div className="px-3 py-2 hover:bg-slate-50 text-xs text-slate-600 flex items-center gap-2 cursor-pointer">
                                    <LayoutList size={14} /> Form Response
                                </div>
                                <div className="px-3 py-2 hover:bg-slate-50 text-xs text-slate-600 flex items-center gap-2 cursor-pointer">
                                    <Layers size={14} /> Bug
                                </div>
                            </div>
                            {/* Background elements */}
                            <div className="mt-12 opacity-50 blur-[1px]">
                                <div className="h-4 w-1/3 bg-slate-100 rounded mb-2" />
                                <div className="h-3 w-1/2 bg-slate-50 rounded" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 4: Custom Fields */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-50 rounded-3xl p-8 border border-slate-100 overflow-hidden"
                    >
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Custom Fields by Task Type</h3>
                            <p className="text-slate-500 text-sm">Add the details that matter with fields tailored to each task type.</p>
                        </div>

                        {/* Mockup */}
                        <div className="flex gap-4">
                            <div className="flex-1 bg-white border border-slate-200 rounded-lg p-3 shadow-sm">
                                <div className="text-[10px] font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">Bug report on Ad Animat...</div>
                                <div className="space-y-2">
                                    <div className="text-[9px] text-slate-400 uppercase font-bold">Custom Fields</div>
                                    <div className="flex items-center gap-2 text-[10px] text-slate-600">
                                        <div className="w-3 h-3 rounded-full border border-slate-300" /> Web Browser
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] text-slate-600">
                                        <div className="w-3 h-3 rounded-full border border-slate-300" /> Reported by
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] text-slate-600">
                                        <div className="w-3 h-3 rounded-full border border-slate-300" /> Repro Steps
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 bg-white border border-slate-200 rounded-lg p-3 shadow-sm relative -mt-4 opacity-90 scale-105 border-indigo-200 ring-2 ring-indigo-50">
                                <div className="text-[10px] font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">Ad for new campaign</div>
                                <div className="space-y-2">
                                    <div className="text-[9px] text-slate-400 uppercase font-bold">Custom Fields</div>
                                    <div className="flex items-center gap-2 text-[10px] text-red-600 font-bold">
                                        <div className="w-3 h-3 rounded-full border border-red-300 bg-red-50" /> Campaign Name
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] text-slate-600">
                                        <div className="w-3 h-3 rounded-full border border-slate-300" /> Requester
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] text-slate-600">
                                        <div className="w-3 h-3 rounded-full border border-slate-300" /> Launch date
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 5: Progress */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 rounded-3xl p-8 border border-slate-100 overflow-hidden"
                    >
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Progress tracking & dashboards</h3>
                            <p className="text-slate-500 text-sm">See real-time project progress and track performance insights.</p>
                        </div>

                        {/* Mockup */}
                        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                            <div className="flex items-end justify-between gap-2 h-24 mb-2">
                                <div className="w-full bg-slate-100 rounded-t h-full relative group">
                                    <div className="absolute bottom-0 left-0 right-0 top-12 bg-green-500/20 group-hover:bg-green-500 transition-colors rounded-t" />
                                </div>
                                <div className="w-full bg-slate-100 rounded-t h-full relative group">
                                    <div className="absolute bottom-0 left-0 right-0 top-8 bg-green-500/40 group-hover:bg-green-500 transition-colors rounded-t" />
                                </div>
                                <div className="w-full bg-slate-100 rounded-t h-full relative group">
                                    <div className="absolute bottom-0 left-0 right-0 top-16 bg-green-500/60 group-hover:bg-green-500 transition-colors rounded-t" />
                                </div>
                                <div className="w-full bg-slate-100 rounded-t h-full relative group">
                                    <div className="absolute bottom-0 left-0 right-0 top-4 bg-green-500/80 group-hover:bg-green-500 transition-colors rounded-t" />
                                </div>
                                <div className="w-full bg-green-500 rounded-t h-full" />
                            </div>
                            <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 6: Teams */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-50 rounded-3xl p-8 border border-slate-100 overflow-hidden"
                    >
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Teams and Tasks together</h3>
                            <p className="text-slate-500 text-sm">Stay organized, collaborate easily, and See what everyone is working on.</p>
                        </div>

                        {/* Mockup */}
                        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-3">
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white text-xs font-bold">N</div>
                                <div>
                                    <div className="text-xs font-bold text-slate-900">Nick <span className="text-[10px] font-normal text-slate-400">Product Manager</span></div>
                                    <div className="flex items-center gap-1 text-[10px] text-slate-500 mt-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Document Calendar API
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold">J</div>
                                <div>
                                    <div className="text-xs font-bold text-slate-900">Joey <span className="text-[10px] font-normal text-slate-400">Head of Calendar</span></div>
                                    <div className="flex items-center gap-1 text-[10px] text-slate-500 mt-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> Brand Guidelines + Socials
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
