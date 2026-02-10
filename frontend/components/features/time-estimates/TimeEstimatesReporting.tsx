'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Calendar, PieChart, TrendingUp, BarChart3, Clock } from 'lucide-react';

const Card = ({ title, description, icon, delay, children, color }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="bg-zinc-50 rounded-[3rem] p-10 border border-zinc-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500 overflow-hidden"
    >
        <div className={`mb-8 p-6 rounded-3xl bg-white shadow-sm border border-zinc-100 group-hover:scale-110 transition-transform duration-500 ${color}`}>
            {icon}
        </div>
        <h3 className="text-3xl font-black text-zinc-900 mb-6">{title}</h3>
        <p className="text-lg text-zinc-500 font-medium leading-relaxed mb-10">
            {description}
        </p>
        <div className="w-full mt-auto relative">
            {children}
        </div>
    </motion.div>
);

export default function TimeEstimatesReporting() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-zinc-900 leading-tight mb-4">
                        Make the most of <br className="hidden md:block" /> your team's time
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Track & Adjust */}
                    <Card
                        title="Track & Adjust"
                        description="Manage human resources, scheduling, and capacity with Workload, Calendar, and Box views."
                        icon={<TrendingUp className="w-8 h-8" />}
                        color="text-blue-500"
                        delay={0.1}
                    >
                        <div className="bg-white rounded-2xl border border-zinc-100 p-6 shadow-sm overflow-hidden relative">
                            <div className="flex justify-between items-center mb-6">
                                <div className="h-3 w-20 bg-zinc-100 rounded" />
                                <div className="flex gap-2">
                                    <div className="h-6 w-12 bg-blue-50 rounded border border-blue-100" />
                                    <div className="h-6 w-12 bg-zinc-50 rounded border border-zinc-100" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                {[1, 2].map(i => (
                                    <div key={i} className="flex gap-4 items-center">
                                        <div className="w-8 h-8 rounded-full bg-zinc-100" />
                                        <div className="flex-1 h-3 bg-zinc-100 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: i === 1 ? '75%' : '45%' }}
                                                transition={{ duration: 1 }}
                                                className={`h-full ${i === 1 ? 'bg-blue-500' : 'bg-purple-500'}`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>

                    {/* Budget & Report */}
                    <Card
                        title="Budget & Report"
                        description="View team availability and project health based on time remaining with Timesheets and Goal tracking."
                        icon={<PieChart className="w-8 h-8" />}
                        color="text-purple-500"
                        delay={0.2}
                    >
                        <div className="bg-white rounded-2xl border border-zinc-100 p-6 shadow-sm flex items-center justify-around">
                            <div className="relative w-24 h-24">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-zinc-100" />
                                    <motion.circle
                                        cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent"
                                        className="text-purple-500"
                                        initial={{ strokeDasharray: "251.2", strokeDashoffset: "251.2" }}
                                        whileInView={{ strokeDashoffset: "62" }}
                                        transition={{ duration: 1.5 }}
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center font-black text-zinc-900">75%</div>
                            </div>
                            <div className="space-y-4 text-left">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-purple-500" />
                                    <span className="text-xs font-bold text-zinc-500 uppercase">Estimated</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-zinc-200" />
                                    <span className="text-xs font-bold text-zinc-500 uppercase">Tracked</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
