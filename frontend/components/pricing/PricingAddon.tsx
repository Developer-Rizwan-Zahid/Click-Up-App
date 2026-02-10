"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Sparkles, Zap, BrainCircuit } from "lucide-react";

export function PricingAddon() {
    return (
        <section className="py-20 bg-gray-50 border-y border-gray-200 overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-purple-200 rounded-full blur-3xl opacity-30 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-[#8F00FF] rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                            <Sparkles size={14} />
                            ClickUp Brain
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black text-[#292D34] mb-6 leading-tight">
                            AI that supercharges <br /> your workspace.
                        </h2>

                        <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                            Connect your people, work, and knowledge with the world's first neural network for enterprise. Save time and get more done with AI tailored for your role.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="h-12 px-8 bg-black hover:bg-gray-800 text-white font-bold rounded-xl shadow-lg transition-transform hover:scale-105">
                                Add to Plan
                            </Button>
                            <Button variant="outline" className="h-12 px-8 font-bold border-2 rounded-xl text-gray-700 hover:bg-white hover:text-black">
                                See How It Works
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 w-full"
                    >
                        {/* Pricing Card for AI */}
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-200 to-purple-200 rounded-bl-full opacity-50 -mr-10 -mt-10" />

                            <div className="flex items-center justify-between mb-8 relative z-10">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">ClickUp Brain</h3>
                                    <p className="text-gray-500 text-sm">Add to any paid plan</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-3xl font-black text-[#8F00FF]">$5</div>
                                    <div className="text-xs text-gray-400 font-bold uppercase">per member/mo</div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                                        <BrainCircuit size={20} strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">AI Knowledge Manager</h4>
                                        <p className="text-sm text-gray-500 leading-snug">Ask questions and get answers from your docs, tasks, and projects instantly.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center text-pink-600 shrink-0">
                                        <Zap size={20} strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">AI Project Manager</h4>
                                        <p className="text-sm text-gray-500 leading-snug">Automate standups, progress updates, and subtask creation.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                                        <Sparkles size={20} strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">AI Writer for Work</h4>
                                        <p className="text-sm text-gray-500 leading-snug">Write emails, summarize threads, and create content with perfect tone.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
