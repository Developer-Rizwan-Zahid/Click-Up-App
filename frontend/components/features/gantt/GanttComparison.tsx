"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export default function GanttComparison() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-purple-600 font-bold tracking-widest text-sm uppercase block mb-4">THE CLICKUP WAY</span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
                        Project planning is broken. <span className="text-slate-500">We fixed it.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-0">
                    {/* The Old Way */}
                    <div className="bg-white p-8 md:p-12 md:border-r border-slate-100">
                        <h3 className="text-2xl font-bold text-slate-400 mb-8">The old way</h3>
                        <ul className="space-y-6">
                            {[
                                "Our Gantt charts are outdated the moment we create them",
                                "I spend hours updating timelines manually",
                                "Dependencies break and no one knows why",
                                "Can't see who's overloaded until it's too late",
                                "One delay throws off the entire timeline"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4 text-slate-500 font-medium"
                                >
                                    <X className="w-6 h-6 text-red-500 shrink-0" />
                                    <span>&quot;{item}&quot;</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* The ClickUp Way */}
                    <div className="bg-white p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-slate-900 mb-8">The ClickUp Way</h3>
                        <ul className="space-y-6">
                            {[
                                "My Gantt charts update themselves in real-time!",
                                "Timeline changes propagate automatically",
                                "I always see exactly what's blocking progress",
                                "Resource conflicts are flagged before they happen",
                                "Smart rescheduling handles delays for me"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4 text-slate-700 font-bold"
                                >
                                    <Check className="w-6 h-6 text-green-500 shrink-0" />
                                    <span>&quot;{item}&quot;</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
