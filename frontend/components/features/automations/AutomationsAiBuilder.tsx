"use client";

import { motion } from "framer-motion";
import { Sparkles, Bot, Zap, MessageSquare, Send } from "lucide-react";

export default function AutomationsAiBuilder() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 mb-4"
                    >
                        <div className="flex -space-x-1">
                            <Sparkles className="w-5 h-5 text-indigo-600" />
                        </div>
                        <span className="text-sm font-bold tracking-widest text-indigo-600 uppercase">AI Automation Builder</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
                    >
                        Spend more time on what matters
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-500"
                    >
                        Use ClickUp Brain to build custom Automations in seconds using natural language. Just describe what you want to automate, and AI handles the rest.
                    </motion.p>
                </div>

                {/* AI Chat Interface Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-white rounded-3xl shadow-2xl border border-indigo-100 overflow-hidden">
                        {/* Header */}
                        <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                                    <Bot className="w-5 h-5 text-white" />
                                </div>
                                <span className="font-bold text-white tracking-wide">ClickUp Brain</span>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-slate-700" />
                                <div className="w-3 h-3 rounded-full bg-slate-700" />
                                <div className="w-3 h-3 rounded-full bg-slate-700" />
                            </div>
                        </div>

                        {/* Chat Body */}
                        <div className="p-8 space-y-8 min-h-[400px] flex flex-col justify-end">
                            {/* User Message */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 }}
                                className="flex justify-end"
                            >
                                <div className="bg-indigo-600 text-white px-6 py-4 rounded-2xl rounded-tr-none shadow-md max-w-md">
                                    <p className="text-sm font-medium">When a task is marked as "Completed", notify the Product team in Slack and move the task to the "Archived" folder.</p>
                                </div>
                            </motion.div>

                            {/* AI Response */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.5 }}
                                className="flex items-start gap-4"
                            >
                                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                                    <Sparkles className="w-5 h-5 text-indigo-600" />
                                </div>
                                <div className="bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl rounded-tl-none shadow-sm max-w-lg">
                                    <p className="text-sm font-medium text-slate-700 mb-4">I've built that automation for you! Here's the logic:</p>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-indigo-50">
                                            <Zap className="w-4 h-4 text-indigo-600" />
                                            <span className="text-xs font-bold text-slate-900">TRIGGER: Status changed to Completed</span>
                                        </div>
                                        <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-indigo-50">
                                            <MessageSquare className="w-4 h-4 text-indigo-600" />
                                            <span className="text-xs font-bold text-slate-900">ACTION: Send Slack notification</span>
                                        </div>
                                        <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-indigo-50">
                                            <Bot className="w-4 h-4 text-indigo-600" />
                                            <span className="text-xs font-bold text-slate-900">ACTION: Move to Archive folder</span>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex gap-2">
                                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold">Apply Automation</button>
                                        <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-xs font-bold">Edit logic</button>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Input Field */}
                            <div className="relative mt-8">
                                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400">
                                    <MessageSquare className="w-5 h-5" />
                                </div>
                                <input
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-5 pl-14 pr-20 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                                    placeholder="Describe your automation..."
                                    readOnly
                                    value="Add more conditions..."
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-indigo-600 rounded-xl">
                                    <Send className="w-4 h-4 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
