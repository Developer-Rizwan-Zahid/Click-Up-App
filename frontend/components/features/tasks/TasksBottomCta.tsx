"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function TasksBottomCta() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <div className="bg-black rounded-[2.5rem] overflow-hidden relative text-white pl-8 md:pl-16 pr-0 md:pr-0 pt-16 md:pt-0 flex flex-col md:flex-row items-center">

                    {/* Background Gradient/Mesh */}
                    <div className="absolute top-[-50%] right-[-10%] w-[600px] h-[600px] bg-pink-600/30 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-[-50%] left-[-10%] w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px] pointer-events-none" />

                    {/* Left Content */}
                    <div className="relative z-10 w-full md:w-1/2 py-12 md:py-24 pr-8 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                            <div className="flex -space-x-1">
                                <div className="w-4 h-4 rounded-full bg-blue-500" />
                                <div className="w-4 h-4 rounded-full bg-purple-500" />
                                <div className="w-4 h-4 rounded-full bg-pink-500" />
                            </div>
                            <span className="font-bold text-lg tracking-tight">ClickUp</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                            Tasks that connect to everything you do
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto md:mx-0">
                            Work smarter with tasks that live in your whiteboards, chat, calendar—anywhere you work.
                        </p>

                        <button className="bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                            Get started. It's FREE
                        </button>
                    </div>

                    {/* Right Visual Image */}
                    <div className="relative z-10 w-full md:w-1/2 h-[400px] md:h-[500px] mt-8 md:mt-0 flex items-end justify-end">
                        {/* Abstract UI Representation */}
                        <div className="w-full h-[90%] bg-gradient-to-br from-gray-900 to-gray-800 rounded-tl-[2rem] border-t border-l border-white/10 p-6 relative overflow-hidden shadow-2xl mr-0 md:mr-0">
                            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />

                            {/* Mockup Card */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-white rounded-xl p-6 text-slate-900 shadow-xl max-w-sm ml-auto mt-12 relative"
                            >
                                <div className="text-xs font-bold text-slate-400 uppercase mb-2">Tasks / EA Launch</div>
                                <h3 className="text-xl font-bold mb-4">Acme Home | EA Launch</h3>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-slate-500">Status</span>
                                        <span className="px-2 py-0.5 bg-green-500 text-white rounded font-bold">OPEN</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-slate-500">Assignees</span>
                                        <div className="flex -space-x-1">
                                            <div className="w-5 h-5 rounded-full bg-slate-200 border border-white" />
                                            <div className="w-5 h-5 rounded-full bg-slate-300 border border-white" />
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-slate-100 pt-4">
                                    <div className="font-bold text-sm mb-2">Checklists</div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-xs text-slate-600">
                                            <div className="w-4 h-4 rounded-full border border-slate-300" />
                                            Finalize campaign brief
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-slate-600">
                                            <div className="w-4 h-4 rounded-full border border-slate-300" />
                                            Audience & market research
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
