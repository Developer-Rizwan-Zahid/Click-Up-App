"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function TasksAiFeatures() {
    const features = [
        {
            title: "Summaries in seconds",
            desc: "Generate Task summaries, progress updates, translations, and action items.",
        },
        {
            title: "Auto-schedule your work",
            desc: "Time-block Tasks automatically, based on urgency, workload, & deadlines.",
        },
        {
            title: "Effortless Task creation",
            desc: "Auto-create Tasks from conversations, Docs, and previous Tasks.",
        },
        {
            title: "Automated Task Prioritization",
            desc: "AI analyzes task details, deadlines, and dependencies to suggest or set priorities.",
        },
    ];

    return (
        <section className="py-24 bg-white text-slate-900 border-t border-slate-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-indigo-600 font-bold tracking-widest text-xs uppercase mb-4">
                            Work Smarter
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                            Make better decisions, <br />
                            faster—with <span className="text-slate-900">ClickUp AI</span>.
                        </h2>
                        <p className="text-lg text-slate-500 mb-12">
                            Track trends and analyze data with the first AI that connects your Tasks to the rest of your work.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-y-10 gap-x-8">
                            {features.map((feature, i) => (
                                <div key={i}>
                                    <h3 className="text-md font-bold mb-2 text-slate-900">{feature.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative mt-8 lg:mt-0"
                    >
                        {/* Simple Mockup of Chat/AI Interface */}
                        <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
                            {/* Header */}
                            <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded bg-blue-500 text-white flex items-center justify-center">
                                        <Sparkles size={16} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-900">Feedback</div>
                                        <div className="text-[10px] text-slate-500">List in Campaigns</div>
                                    </div>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="p-4 space-y-4">
                                {/* User Msg */}
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0" />
                                    <div className="bg-slate-50 p-3 rounded-lg rounded-tl-none border border-slate-100 text-xs text-slate-600 max-w-[80%]">
                                        <span className="text-indigo-600 font-bold">@channel</span> Just got off with a customer and they really want that new feature we discussed last week. Can we get moving on that, please?
                                    </div>
                                </div>

                                {/* AI Response Block */}
                                <div className="ml-11 border border-indigo-100 rounded-lg p-4 bg-indigo-50/50">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Sparkles size={12} className="text-indigo-600" />
                                        <span className="text-xs font-bold text-slate-700">The task has been created successfully.</span>
                                    </div>
                                    <div className="text-xs text-slate-500 mb-2">You can view the task here:</div>
                                    <div className="flex items-center gap-2 p-2 bg-white rounded border border-indigo-100 shadow-sm">
                                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                                        <span className="text-xs font-medium text-slate-700">Customer feature request</span>
                                    </div>
                                </div>
                            </div>

                            {/* Input Area */}
                            <div className="p-3 border-t border-slate-100">
                                <div className="h-8 bg-slate-50 rounded border border-slate-200" />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
