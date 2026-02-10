"use client";

import { motion } from "framer-motion";
import { Settings, Sliders, MessageSquare, Maximize2, Move, Layout, MousePointer, MoreHorizontal, ChevronDown, Plus, Search, Calendar, User } from "lucide-react";

export default function GanttFeatures() {
    return (
        <div className="bg-white pt-20 pb-20">
            <div className="text-center mb-24">
                <span className="text-purple-600 font-bold tracking-widest text-sm uppercase mb-4 block">WHY GANTT CHARTS?</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900">
                    Here&apos;s how they work
                </h2>
            </div>

            <ColorfulFeature
                title="Set up your Gantt"
                description="In one click, turn entire projects into timelines then color code any section you see. It's a great way to grasp your project workflow and dependencies."
                bgClass="bg-[#2d0f59]" // Dark Purple
                image={<SetupVisual />}
                align="right"
                textClass="text-slate-900"
            />

            <ColorfulFeature
                title="Get yourself organized"
                description="You can organize your Gantt any number of ways. Quickly restructure your views with filters like Due Date, Assignees, and Priority."
                bgClass="bg-gradient-to-br from-[#ff6b6b] to-[#ff4757]" // Red/Pink
                image={<OrganizedVisual />}
                align="left"
                textClass="text-slate-900"
            />

            <ColorfulFeature
                title="Fix those silly road blocks"
                description="Turn on Critical Path to see what tasks are messing with deadlines. If you want to get help with any backlog, turn on Slack Time to see who has wiggle room."
                bgClass="bg-blue-500" // Blue
                image={<RoadblocksVisual />}
                align="right"
                textClass="text-slate-900"
            />

            <ColorfulFeature
                title="Change dates and dependencies"
                description="Drag tasks and add dependencies to automatically reschedule starting points or due dates. It's a lot faster than typing in new information or even worse...clicking into a calendar."
                bgClass="bg-[#8e44ad]" // Purple
                image={<DependenciesVisual />}
                align="left"
                textClass="text-slate-900"
            />
        </div>
    );
}

function ColorfulFeature({ title, description, bgClass, image, align }: any) {
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${align === 'right' ? 'lg:flex-row-reverse' : ''}`}>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 max-w-xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
                            {title}
                        </h2>
                        <p className="text-xl text-slate-500 leading-relaxed font-medium">
                            {description}
                        </p>
                    </motion.div>

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex-1 w-full"
                    >
                        <div className={`relative rounded-[2.5rem] overflow-hidden shadow-2xl p-8 md:p-12 aspect-[4/3] flex items-center justify-center ${bgClass}`}>
                            {image}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

// --- Visual Components (Specific to Gantt content) ---

function SetupVisual() {
    return (
        <div className="w-full h-full bg-white rounded-xl shadow-lg border border-slate-200 p-2 flex flex-col relative overflow-hidden">
            <div className="h-10 border-b border-slate-100 flex items-center px-4 justify-between bg-slate-50/50">
                <div className="flex gap-2">
                    <div className="w-16 h-4 bg-slate-200 rounded"></div>
                </div>
                <button className="bg-purple-600 text-[10px] text-white px-2 py-1 rounded font-bold">Add Task</button>
            </div>
            <div className="flex-1 relative p-4 bg-slate-50">
                <div className="absolute inset-0 grid grid-cols-6 divide-x divide-slate-200/50">
                    {[1, 2, 3, 4, 5, 6].map(i => <div key={i}></div>)}
                </div>
                <div className="relative space-y-6 pt-2">
                    <div className="w-48 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full shadow-lg ml-4 flex items-center px-3 text-white text-[10px] font-bold">
                        Finalize campaign brief
                    </div>
                    <div className="w-40 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full shadow-lg ml-24 flex items-center px-3 text-white text-[10px] font-bold">
                        Confirm budgets
                    </div>
                    <div className="w-32 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg ml-48 flex items-center px-3 text-white text-[10px] font-bold">
                        Bill of materials
                    </div>
                </div>
            </div>
        </div>
    );
}

function OrganizedVisual() {
    return (
        <div className="w-full h-full bg-white rounded-xl shadow-lg border border-slate-200 p-4 relative overflow-hidden flex flex-col">
            {/* Dropdown UI */}
            <div className="absolute top-12 left-12 w-48 bg-white rounded-lg shadow-2xl border border-slate-100 z-20 animate-in fade-in zoom-in duration-300">
                <div className="p-3 border-b border-slate-100 flex justify-between items-center">
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Sort By</span>
                </div>
                <div className="p-1 space-y-1">
                    <div className="flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 rounded cursor-pointer">
                        Assignees
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 text-xs font-bold text-pink-500 bg-pink-50 rounded cursor-pointer">
                        Due Date
                        <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 rounded cursor-pointer">
                        Priority
                    </div>
                </div>
            </div>

            {/* Blurred Background */}
            <div className="flex-1 opacity-40 blur-[2px] pointer-events-none">
                <div className="h-full bg-slate-50 p-4 space-y-4">
                    <div className="h-8 bg-slate-200 rounded w-full"></div>
                    <div className="h-8 bg-slate-200 rounded w-3/4 ml-10"></div>
                    <div className="h-8 bg-slate-200 rounded w-1/2 ml-20"></div>
                </div>
            </div>
        </div>
    );
}


function RoadblocksVisual() {
    return (
        <div className="w-full h-full bg-white rounded-xl shadow-lg border border-slate-200 flex flex-col overflow-hidden">
            <div className="h-10 bg-slate-50 border-b border-slate-200 px-4 flex items-center justify-end">
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-slate-500">Critical Path</span>
                    <div className="w-8 h-4 bg-blue-500 rounded-full relative"><div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div></div>
                </div>
            </div>
            <div className="flex-1 bg-slate-50 p-6 relative">
                <div className="space-y-10 relative z-10">
                    <div className="w-32 h-8 bg-red-500 text-white rounded-full shadow-md flex items-center justify-center text-[10px] font-bold ml-0 relative">
                        Design Banner
                    </div>

                    {/* Connector */}
                    <svg className="absolute top-4 left-32 w-20 h-20 fill-none stroke-red-400 stroke-2" style={{ strokeDasharray: "4 4" }}>
                        <path d="M0,0 L10,0 L10,50 L20,50" />
                    </svg>

                    <div className="w-24 h-8 bg-red-500 text-white rounded-full shadow-md flex items-center justify-center text-[10px] font-bold ml-40 mt-4">
                        Add Icons
                    </div>
                </div>
            </div>
        </div>
    );
}

function DependenciesVisual() {
    return (
        <div className="w-full h-full bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden relative flex flex-col">
            <div className="h-10 border-b border-slate-200 bg-white"></div>
            <div className="flex-1 bg-slate-50 p-6 relative">
                {/* Task 1 */}
                <div className="absolute top-10 left-10 w-32 h-10 bg-indigo-600 text-white rounded-lg shadow-xl z-20 flex items-center px-4 text-xs font-bold transform -rotate-1 cursor-grabbing">
                    Add Icons
                    <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-indigo-600 rounded-full"></div>
                </div>

                {/* Task 2 */}
                <div className="absolute top-32 left-40 w-32 h-8 bg-white border border-slate-300 rounded-lg shadow-sm flex items-center px-4 text-xs font-medium text-slate-500">
                    Finalize Project
                </div>

                {/* Dependency Line */}
                <svg className="absolute top-[4.5rem] left-[8rem] w-32 h-20 fill-none stroke-indigo-400 stroke-2 z-10 pointer-events-none">
                    <path d="M0,0 L10,0 L20,60" style={{ strokeDasharray: "6 3", animation: "dash 1s linear infinite" }} />
                </svg>
            </div>
        </div>
    );
}
