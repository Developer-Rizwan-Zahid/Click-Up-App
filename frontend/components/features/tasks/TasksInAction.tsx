"use client";

import { motion } from "framer-motion";
import { Play, MessageSquare, Clock, CheckCircle2, MoreHorizontal, Plus } from "lucide-react";
import { useState } from "react";

export default function TasksInAction() {
    const tabs = ["Marketing", "Project Management", "Agile", "Sales"];
    const [activeTab, setActiveTab] = useState("Marketing");

    return (
        <section className="py-24 bg-white text-slate-900 border-t border-slate-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="text-indigo-600 font-bold tracking-widest text-xs uppercase mb-4">
                        Built for Every Team
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 text-slate-900">
                        See Tasks in action
                    </h2>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${activeTab === tab
                                    ? "bg-white border-blue-500 text-blue-500 shadow-sm"
                                    : "bg-white border-slate-200 text-slate-500 hover:border-slate-300"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Browser Mockup Container */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="max-w-6xl mx-auto relative rounded-3xl p-2 md:p-4 bg-gradient-to-br from-orange-500 via-pink-500 to-pink-600 shadow-2xl"
                >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200 text-left">

                        {/* Fake Browser Toolbar */}
                        <div className="bg-slate-50 border-b border-slate-200 p-2 flex items-center justify-between px-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>
                            <div className="bg-slate-200 rounded text-[10px] px-2 py-1 text-slate-500 w-1/3 text-center">
                                clickup.com/tasks
                            </div>
                            <div className="w-10" />
                        </div>

                        {/* App Interface Mockup */}
                        <div className="grid md:grid-cols-[240px_1fr] h-[600px] overflow-hidden">
                            {/* Sidebar */}
                            <div className="bg-slate-900 text-slate-400 p-4 hidden md:flex flex-col gap-4 border-r border-slate-800">
                                <div className="flex items-center gap-2 text-white font-bold px-2">
                                    <div className="w-6 h-6 bg-blue-500 rounded" /> ClickUp
                                </div>
                                <div className="space-y-1 mt-4">
                                    {["Home", "Notifications", "Tasks", "Goals", "Dashboards"].map((item, i) => (
                                        <div key={i} className={`px-3 py-2 rounded text-sm font-medium ${i === 2 ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'}`}>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Main Content Areas */}
                            <div className="flex flex-col md:flex-row bg-white">
                                {/* Task Detail View */}
                                <div className="flex-1 p-6 md:p-8 border-r border-slate-100 overflow-y-auto">
                                    <div className="text-xs text-slate-400 mb-4 flex items-center gap-2">
                                        <span>Marketing</span> / <span>Website Content</span> / <span>Site Assets</span>
                                    </div>

                                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Creative Review...</h1>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2 mb-8">
                                        <span className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-xs font-bold border border-purple-100 flex items-center gap-1">
                                            <Play size={12} className="fill-purple-600" /> Ask AI
                                        </span>
                                        <span className="text-xs text-slate-400 flex items-center gap-1 px-2 border border-slate-200 rounded-full">
                                            #marketing
                                        </span>
                                    </div>

                                    <div className="flex gap-8 mb-8">
                                        <div className="w-1/4">
                                            <div className="text-xs text-slate-400 mb-1">Status</div>
                                            <div className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold inline-block">
                                                IN REVIEW
                                            </div>
                                        </div>
                                        <div className="w-1/4">
                                            <div className="text-xs text-slate-400 mb-1">Assignees</div>
                                            <div className="flex -space-x-2">
                                                {[1, 2, 3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white" />)}
                                            </div>
                                        </div>
                                        <div className="w-1/4">
                                            <div className="text-xs text-slate-400 mb-1">Due Date</div>
                                            <div className="text-sm font-medium text-slate-700">Tomorrow</div>
                                        </div>
                                    </div>

                                    {/* Task Description / Image Area */}
                                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 min-h-[200px] mb-6">
                                        <div className="h-40 bg-slate-200 rounded-lg flex items-center justify-center text-slate-400 text-sm">
                                            [ Creative Asset Preview ]
                                        </div>
                                    </div>

                                    {/* Status Dropdown Mockup (Floating) */}
                                    <div className="bg-white shadow-xl rounded-lg border border-slate-100 p-2 w-64 absolute top-1/2 left-1/4 transform -translate-y-1/2 hidden lg:block">
                                        <div className="px-3 py-2 border-b border-slate-50 mb-1">
                                            <input type="text" placeholder="Search status..." className="text-xs w-full outline-none" />
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-slate-50 rounded cursor-pointer">
                                                <div className="w-2 h-2 rounded-full bg-blue-500" />
                                                <span className="text-xs font-bold text-slate-700">IN PROGRESS</span>
                                            </div>
                                            <div className="flex items-center gap-2 px-2 py-1.5 bg-blue-50 rounded cursor-pointer">
                                                <div className="w-2 h-2 rounded-full bg-orange-500" />
                                                <span className="text-xs font-bold text-slate-700">IN REVIEW</span>
                                                <CheckCircle2 size={12} className="ml-auto text-blue-500" />
                                            </div>
                                            <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-slate-50 rounded cursor-pointer">
                                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                                <span className="text-xs font-bold text-slate-700">COMPLETE</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Right Panel: Activity */}
                                <div className="w-[300px] bg-slate-50 border-l border-slate-200 flex flex-col hidden lg:flex">
                                    <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-white">
                                        <span className="font-bold text-sm text-slate-700">Activity</span>
                                        <div className="flex gap-2 text-slate-400">
                                            <Clock size={14} />
                                            <MoreHorizontal size={14} />
                                        </div>
                                    </div>
                                    <div className="flex-1 p-4 space-y-6 overflow-y-auto">
                                        {/* Comment 1 */}
                                        <div className="flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0" />
                                            <div>
                                                <div className="text-xs font-bold text-slate-900">Cass Chan <span className="text-slate-400 font-normal">1 min</span></div>
                                                <div className="bg-white border border-slate-200 p-2 rounded-lg mt-1 shadow-sm">
                                                    <div className="h-20 bg-black rounded flex items-center justify-center text-white text-xs">
                                                        <Play size={16} fill="white" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* System Update */}
                                        <div className="flex gap-3 items-center">
                                            <div className="w-8 h-8 flex items-center justify-center">
                                                <div className="w-1 h-full bg-slate-200" />
                                            </div>
                                            <div className="text-[10px] text-slate-500">
                                                Changed status from <span className="font-bold text-slate-700">To Do</span> to <span className="font-bold text-orange-500">In Review</span>
                                            </div>
                                        </div>

                                        {/* Comment 2 */}
                                        <div className="flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-pink-100 flex-shrink-0" />
                                            <div>
                                                <div className="text-xs font-bold text-slate-900">Joey <span className="text-slate-400 font-normal">Just now</span></div>
                                                <p className="text-xs text-slate-600 mt-1">
                                                    <span className="text-blue-500 font-medium">@Cass Chan</span> Can we get a higher res version of Kermit?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-white border-t border-slate-200">
                                        <div className="bg-slate-50 border border-slate-200 rounded p-2 text-xs text-slate-400">
                                            Write a comment...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Decorative Play Button Overlay */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                        <button className="w-20 h-20 bg-slate-900/90 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-105 transition-transform backdrop-blur-sm border border-white/10">
                            <Play size={32} fill="white" className="ml-1" />
                        </button>
                    </div>

                </motion.div>

            </div>
        </section>
    );
}
