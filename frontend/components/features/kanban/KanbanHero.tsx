"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export default function KanbanHero() {
    return (
        <section className="pt-32 pb-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 max-w-xl text-left"
                    >
                        <div className="inline-block mb-4">
                            <span className="text-purple-600 font-bold tracking-widest text-sm uppercase">ClickUp Board View</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-[1.1]">
                            View any project <br />
                            as a <span className="text-slate-500">Kanban board</span>
                        </h1>

                        <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                            Add a Board View to any list or project, so you can easily see progress and manage statuses with drag-and-drop simplicity.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
                            <button className="px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-lg transition-all shadow-lg hover:shadow-xl">
                                Get started
                            </button>
                        </div>

                        {/* Reviews */}
                        <div className="flex items-center gap-3">
                            <div className="flex text-amber-400">
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                                <span>25,000+ reviews from</span>
                                <div className="flex gap-1.5 opacity-70">
                                    <div className="w-4 h-4 bg-orange-500 rounded-sm"></div> {/* G2 */}
                                    <div className="w-4 h-4 bg-blue-500 rounded-sm"></div> {/* Capterra */}
                                    <div className="w-4 h-4 bg-purple-500 rounded-sm"></div> {/* GetApp */}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Visual - Kanban Board */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 w-full"
                    >
                        <div className="bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 relative">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1">
                                        <button className="px-3 py-1 text-sm font-medium text-slate-500">List</button>
                                        <button className="px-3 py-1 text-sm font-bold text-slate-900 bg-white rounded shadow-sm">Board</button>
                                    </div>
                                    <button className="text-slate-400 text-sm font-medium flex items-center gap-1">
                                        <span className="text-lg leading-none">+</span> Add
                                    </button>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-xs">JD</div>
                                </div>
                            </div>

                            {/* Kanban Columns */}
                            <div className="flex gap-4 overflow-x-auto pb-4">

                                {/* Column 1: TESTING */}
                                <div className="min-w-[260px] flex-1">
                                    <div className="flex items-center justify-between mb-3 px-1">
                                        <div className="flex items-center gap-2">
                                            <span className="bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">TESTING</span>
                                            <span className="text-xs text-slate-400">4</span>
                                        </div>
                                        <div className="text-slate-400">...</div>
                                    </div>

                                    <div className="space-y-3">
                                        <KanbanCard
                                            title="Customer profiles for key market demographics"
                                            date="May 29"
                                            users={['JD', 'AS', 'MR']}
                                            flag={true}
                                        />
                                        <KanbanCard
                                            title="Add quick template options for notifications"
                                            image={true}
                                            date="June 1"
                                            users={['JD']}
                                        />
                                    </div>
                                </div>

                                {/* Column 2: IN REVIEW */}
                                <div className="min-w-[260px] flex-1">
                                    <div className="flex items-center justify-between mb-3 px-1">
                                        <div className="flex items-center gap-2">
                                            <span className="bg-purple-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">IN REVIEW</span>
                                            <span className="text-xs text-slate-400">4</span>
                                        </div>
                                        <div className="text-slate-400">...</div>
                                    </div>

                                    <div className="space-y-3">
                                        <KanbanCard
                                            title="Competitive analysis"
                                            date="June 1"
                                            priority="High"
                                            users={['AK', 'JD', 'TS']}
                                            conversations={1}
                                        />
                                        <KanbanCard
                                            title="Rethink Default Notifications settings for email"
                                            date="June 3"
                                            priority="Urgent"
                                            users={['JD', 'AS']}
                                            bottomImage={true}
                                        />
                                    </div>
                                </div>

                                {/* Column 3: COMPLETE (Partial) */}
                                <div className="w-12 border-l border-slate-100 flex flex-col items-center py-2 opacity-50">
                                    <span className="writing-vertical-lr rotate-180 text-xs font-bold text-slate-400 tracking-wider">COMPLETE</span>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function KanbanCard({ title, date, priority, image, bottomImage, users, flag, conversations }: any) {
    return (
        <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-pointer group">
            {image && (
                <div className="h-28 w-full bg-gradient-to-br from-pink-200 to-blue-200 rounded-md mb-3 overflow-hidden relative">
                    <div className="absolute inset-0 bg-white/20"></div>
                </div>
            )}

            <h3 className="text-sm font-semibold text-slate-800 mb-2 leading-snug">
                {title}
            </h3>

            {conversations && (
                <div className="flex items-center gap-1 mb-2 text-slate-400">
                    <div className="w-3 h-3 border border-slate-300 rounded-[1px]"></div>
                    <span className="text-xs">{conversations}</span>
                </div>
            )}

            <div className="flex items-center justify-between mt-3">
                <div className="flex items-center -space-x-1.5">
                    {users?.map((u: string, i: number) => (
                        <div key={i} className={`w-5 h-5 rounded-full border border-white flex items-center justify-center text-[8px] text-white font-bold
                            ${i === 0 ? 'bg-orange-400' : 'bg-purple-400'}
                            ${i === 2 ? 'bg-blue-400' : ''}
                        `}>
                            {u}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-3 mt-2 text-xs text-slate-400 font-medium">
                {date && (
                    <div className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full border border-slate-300 flex items-center justify-center text-[8px] text-slate-500">📅</span>
                        {date}
                    </div>
                )}
                {flag && (
                    <div className="text-red-400">🚩</div>
                )}
                {priority && (
                    <div className={`flex items-center gap-1 ${priority === 'Urgent' ? 'text-red-500' : 'text-amber-500'}`}>
                        <span>🏴</span> {priority}
                    </div>
                )}
            </div>

            {bottomImage && (
                <div className="h-20 w-full mt-3 bg-slate-100 rounded-md overflow-hidden relative grayscale opacity-70">
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-300 to-slate-100"></div>
                    <div className="absolute bottom-0 right-0 p-2">
                        <div className="w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]"></div>
                    </div>
                </div>
            )}
        </div>
    );
}
