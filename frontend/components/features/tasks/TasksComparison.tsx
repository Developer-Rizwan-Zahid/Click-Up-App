"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export default function TasksComparison() {
    const problems = [
        "“Why can’t I find the info I need to finish this task?”",
        "“Where is that task I was supposed to work on?”",
        "“When am I going to work on these tasks?”",
        "“How can I let everyone know what I'm working on next?”",
    ];

    const solutions = [
        "“Everything I need is linked to my tasks—no searching required!”",
        "“My Tasks page keeps everything together for me”",
        "“Calendar auto-blocks time for task work!”",
        "“Personal priorities on tasks let everyone know what's on deck!”",
    ];

    return (
        <section className="py-24 bg-white text-slate-900 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-indigo-600 font-bold tracking-widest text-xs uppercase mb-4"
                    >
                        The ClickUp Way
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight"
                    >
                        Tasks that make it easier <br />
                        to get work done.
                    </motion.h2>
                </div>

                {/* Comparison Split */}
                <div className="max-w-6xl mx-auto relative">

                    {/* Vertical Divider (Desktop) */}
                    <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-slate-200 -ml-px" />

                    <div className="grid md:grid-cols-2 gap-12 md:gap-24">

                        {/* Problem Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="md:pr-12 md:text-right" // Right align text on desktop for symmetry
                        >
                            <h3 className="text-2xl font-bold text-slate-400 mb-8">
                                You deserve better than this
                            </h3>
                            <div className="space-y-6">
                                {problems.map((item, idx) => (
                                    <div key={idx} className="flex md:flex-row-reverse items-start gap-4 md:items-center">
                                        <div className="flex-shrink-0 mt-1 md:mt-0">
                                            <X className="w-5 h-5 text-red-500" strokeWidth={3} />
                                        </div>
                                        <p className="text-slate-500 font-medium leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Solution Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="md:pl-12"
                        >
                            <h3 className="text-2xl font-bold text-slate-900 mb-8">
                                You deserve the best
                            </h3>
                            <div className="space-y-6">
                                {solutions.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 md:items-center">
                                        <div className="flex-shrink-0 mt-1 md:mt-0">
                                            <Check className="w-5 h-5 text-green-500" strokeWidth={3} />
                                        </div>
                                        <p className="text-slate-800 font-medium leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    );
}
