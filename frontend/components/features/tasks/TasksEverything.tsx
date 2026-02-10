"use client";

import { motion } from "framer-motion";
import { ListTodo, Flag, Network } from "lucide-react";

export default function TasksEverything() {
    const features = [
        {
            title: "Custom task status",
            desc: "Tags and statuses can be customized, instantly.",
            color: "bg-purple-500",
            gradient: "from-purple-500 to-indigo-500"
        },
        {
            title: "Priority levels",
            desc: "Easily set priorities to stay focused on what matters most.",
            color: "bg-blue-500",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            title: "Dependency views",
            desc: "Track project impact by linking tasks and dependencies.",
            color: "bg-pink-500",
            gradient: "from-pink-500 to-rose-500"
        },
    ];

    return (
        <section className="py-24 bg-white text-slate-900 border-t border-slate-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-indigo-600 font-bold tracking-widest text-xs uppercase mb-4"
                    >
                        DO IT ALL
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900"
                    >
                        Plus, everything you'd expect from <br />
                        a task manager
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group"
                        >
                            <h3 className="text-md font-bold mb-3 text-slate-900">{feature.title}</h3>

                            {/* Mockup Container */}
                            <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden mb-4 relative h-48 group-hover:shadow-lg transition-all duration-300">
                                {/* Decorative Gradient Bar */}
                                <div className={`h-1.5 w-full bg-gradient-to-r ${feature.gradient}`} />

                                {/* Inner Mockup Content */}
                                <div className="p-4">
                                    {i === 0 && (
                                        <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-2 space-y-2">
                                            <div className="flex items-center gap-2 border-b border-slate-50 pb-2">
                                                <div className="w-2 h-2 rounded-full bg-slate-300" />
                                                <div className="h-2 w-16 bg-slate-100 rounded" />
                                            </div>
                                            <div className="flex items-center gap-2 p-1 bg-purple-50 rounded border border-purple-100">
                                                <div className="w-3 h-3 rounded-full bg-purple-500" />
                                                <span className="text-[10px] font-bold text-purple-700">IN REVIEW</span>
                                                <div className="ml-auto w-2 h-2 rounded-full bg-slate-200" />
                                            </div>
                                            <div className="flex gap-1 justify-center mt-2">
                                                {["bg-red-400", "bg-yellow-400", "bg-green-400", "bg-blue-400"].map((c, idx) => (
                                                    <div key={idx} className={`w-4 h-4 rounded-full ${c} opacity-50`} />
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {i === 1 && (
                                        <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-3">
                                            <div className="text-xs font-bold text-slate-800 mb-2">Homepage v1</div>
                                            <div className="flex items-center gap-2 mb-3">
                                                <Flag size={12} className="text-slate-400" />
                                                <div className="h-2 w-12 bg-slate-100 rounded" />
                                            </div>
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2 px-2 py-1 bg-red-50 rounded border-l-2 border-red-500">
                                                    <Flag size={10} className="text-red-500 fill-red-500" />
                                                    <span className="text-[10px] font-bold text-slate-700">Urgent</span>
                                                </div>
                                                <div className="flex items-center gap-2 px-2 py-1">
                                                    <Flag size={10} className="text-yellow-500 fill-yellow-500" />
                                                    <span className="text-[10px] font-bold text-slate-400">High</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {i === 2 && (
                                        <div className="relative mt-2">
                                            {/* Connecting Lines */}
                                            <div className="absolute top-3 left-3 w-32 h-[1px] bg-slate-200" />
                                            <div className="absolute top-3 left-3 w-[1px] h-12 bg-slate-200" />

                                            <div className="flex gap-4">
                                                <div className="bg-white p-2 rounded shadow-sm border border-slate-100 z-10 w-24">
                                                    <div className="flex items-center gap-1 mb-1">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                                                        <div className="h-1.5 w-8 bg-slate-100 rounded" />
                                                    </div>
                                                </div>
                                                <div className="bg-white p-2 rounded shadow-sm border border-slate-100 z-10 mt-6 w-24">
                                                    <div className="flex items-center gap-1 mb-1">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                        <div className="h-1.5 w-8 bg-slate-100 rounded" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <p className="text-sm text-slate-500 leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
