'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, LayoutGrid, CheckCircle2, TrendingUp } from 'lucide-react';

const FeatureBlock = ({ title, description, badge, list, children, reverse }: any) => (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}>
        <div className="w-full lg:w-1/2">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-black text-zinc-600 uppercase tracking-widest">
                    {badge}
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-zinc-900 leading-tight">
                    {title}
                </h2>
                <p className="text-xl text-zinc-500 font-medium leading-relaxed">
                    {description}
                </p>
                <div className="space-y-4 pt-4">
                    {list.map((item: string, i: number) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                            </div>
                            <span className="font-bold text-zinc-700">{item}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
        <div className="w-full lg:w-1/2">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-video bg-zinc-50 rounded-[2.5rem] border border-zinc-100 shadow-sm overflow-hidden p-8"
            >
                {children}
            </motion.div>
        </div>
    </div>
);

export default function TimeEstimatesSplit() {
    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl space-y-32">
                {/* Split Estimates */}
                <FeatureBlock
                    badge="Team Allocation"
                    title="Split time estimates between people"
                    description="Easily break down time estimates between different assignees on tasks and subtasks for better forecasting."
                    list={[
                        "Distribute work fairly",
                        "Identify resource bottlenecks",
                        "Sync workloads automatically"
                    ]}
                >
                    <div className="h-full w-full flex flex-col justify-center space-y-6">
                        {[
                            { name: 'Branding Project', time: '12h', users: ['bg-pink-500', 'bg-blue-500', 'bg-orange-500'] },
                            { name: 'SEO Audit', time: '4h', users: ['bg-green-500', 'bg-purple-500'] }
                        ].map((task, i) => (
                            <div key={i} className="p-4 bg-white rounded-2xl shadow-sm border border-zinc-100 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="h-2 w-32 bg-zinc-100 rounded" />
                                    <div className="flex -space-x-2">
                                        {task.users.map((u, j) => (
                                            <div key={j} className={`w-8 h-8 rounded-full border-2 border-white ${u}`} />
                                        ))}
                                    </div>
                                </div>
                                <div className="font-bold text-purple-600">{task.time}</div>
                            </div>
                        ))}
                    </div>
                </FeatureBlock>

                {/* Rollup Estimates */}
                <FeatureBlock
                    reverse
                    badge="Total Vision"
                    title="Calculate the total time your project needs"
                    description="Use time estimate rollups to sum up individual task estimates at the List, Folder, or project level for an instant big-picture view."
                    list={[
                        "Sum up subtask estimates",
                        "Calculate project milestones",
                        "Track progress in real-time"
                    ]}
                >
                    <div className="h-full w-full flex flex-col justify-center gap-4">
                        <div className="p-6 bg-zinc-900 rounded-3xl border border-white/10 shadow-xl overflow-hidden relative">
                            <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 w-[65%]" />
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-white font-bold">Total Project Time</span>
                                <span className="text-purple-400 font-black">48h</span>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <div className="h-2 w-32 bg-white/10 rounded" />
                                    <span className="text-white/40 text-xs">24h</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="h-2 w-24 bg-white/10 rounded" />
                                    <span className="text-white/40 text-xs">12h</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </FeatureBlock>
            </div>
        </section>
    );
}
