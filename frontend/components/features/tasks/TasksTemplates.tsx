"use client";

import { motion } from "framer-motion";
import { Layout } from "lucide-react";

export default function TasksTemplates() {
    const templates = [
        {
            title: "Waterfall",
            desc: "Use Gantt charts to keep projects on track and stakeholders informed.",
            color: "bg-red-500",
            gradient: "from-red-400 to-orange-400"
        },
        {
            title: "Strategic roadmap",
            desc: "Visualize goals and the path to getting there.",
            color: "bg-blue-500",
            gradient: "from-blue-400 to-cyan-400"
        },
        {
            title: "Tasks plan",
            desc: "Break down complex projects into manageable tasks.",
            color: "bg-purple-500",
            gradient: "from-purple-400 to-pink-400"
        },
    ];

    return (
        <section className="py-24 bg-white text-slate-900 border-t border-slate-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900"
                    >
                        There’s a template for <span className="text-slate-400">that</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-500"
                    >
                        Choose from hundreds of customizable templates built for any type of project.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {templates.map((template, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group"
                        >
                            <h3 className="text-md font-bold mb-3 text-slate-900 flex items-center gap-2">
                                <Layout size={16} className="text-slate-400" />
                                {template.title}
                            </h3>

                            {/* Mockup Container */}
                            <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden mb-4 relative h-48 group-hover:shadow-lg transition-all duration-300">
                                {/* Header Bar */}
                                <div className={`h-1.5 w-full bg-gradient-to-r ${template.gradient}`} />

                                {/* Template Preview (Abstract) */}
                                <div className="p-4 h-full relative">
                                    {i === 0 && (
                                        // Waterfall / Gantt
                                        <div className="space-y-2 mt-2">
                                            <div className="flex gap-2">
                                                <div className="w-1/4 h-2 bg-slate-200 rounded" />
                                                <div className="w-1/2 h-2 bg-red-100 rounded relative overflow-hidden"><div className="absolute left-0 top-0 bottom-0 w-1/2 bg-red-400/50" /></div>
                                            </div>
                                            <div className="flex gap-2 ml-4">
                                                <div className="w-1/4 h-2 bg-slate-200 rounded" />
                                                <div className="w-1/3 h-2 bg-orange-100 rounded relative overflow-hidden"><div className="absolute left-0 top-0 bottom-0 w-2/3 bg-orange-400/50" /></div>
                                            </div>
                                            <div className="flex gap-2 ml-8">
                                                <div className="w-1/4 h-2 bg-slate-200 rounded" />
                                                <div className="w-1/4 h-2 bg-yellow-100 rounded relative overflow-hidden"><div className="absolute left-0 top-0 bottom-0 w-full bg-yellow-400/50" /></div>
                                            </div>
                                        </div>
                                    )}

                                    {i === 1 && (
                                        // Roadmap / Board
                                        <div className="flex gap-2 h-24 mt-2">
                                            <div className="flex-1 bg-slate-100 rounded p-1 space-y-1">
                                                <div className="h-1.5 w-1/2 bg-slate-300 rounded mb-2" />
                                                <div className="h-8 bg-white rounded border border-slate-200" />
                                                <div className="h-8 bg-white rounded border border-slate-200" />
                                            </div>
                                            <div className="flex-1 bg-slate-100 rounded p-1 space-y-1">
                                                <div className="h-1.5 w-1/2 bg-slate-300 rounded mb-2" />
                                                <div className="h-8 bg-white rounded border border-slate-200" />
                                            </div>
                                            <div className="flex-1 bg-slate-100 rounded p-1 space-y-1">
                                                <div className="h-1.5 w-1/2 bg-slate-300 rounded mb-2" />
                                            </div>
                                        </div>
                                    )}

                                    {i === 2 && (
                                        // List / Plan
                                        <div className="space-y-2 mt-2">
                                            <div className="flex items-center gap-2 border-b border-slate-100 pb-1">
                                                <div className="w-3 h-3 rounded bg-purple-100 border border-purple-200" />
                                                <div className="h-2 w-2/3 bg-slate-100 rounded" />
                                            </div>
                                            <div className="flex items-center gap-2 border-b border-slate-100 pb-1 ml-2">
                                                <div className="w-3 h-3 rounded bg-slate-50 border border-slate-200" />
                                                <div className="h-2 w-1/2 bg-slate-50 rounded" />
                                            </div>
                                            <div className="flex items-center gap-2 border-b border-slate-100 pb-1 ml-2">
                                                <div className="w-3 h-3 rounded bg-slate-50 border border-slate-200" />
                                                <div className="h-2 w-1/2 bg-slate-50 rounded" />
                                            </div>
                                        </div>
                                    )}

                                    {/* Hover Overlay Detail */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />
                                </div>
                            </div>

                            <p className="text-sm text-slate-500 leading-relaxed">
                                {template.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
