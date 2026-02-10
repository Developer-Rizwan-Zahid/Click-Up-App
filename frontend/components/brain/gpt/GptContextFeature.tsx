"use client";

import { motion } from "framer-motion";
import { Sparkles, Bot, Search, FileText, User, Github, Hash } from "lucide-react";

export const GptContextFeature = () => {
    return (
        <section className="bg-black pb-24 pt-0 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[2.5rem] bg-[#0E0E12] border border-white/10 overflow-hidden min-h-[500px] flex flex-col md:flex-row items-center"
                >
                    {/* Content */}
                    <div className="p-8 md:p-16 w-full md:w-1/2 relative z-10">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="relative">
                                <div className="absolute inset-0 bg-purple-500 blur-lg opacity-50" />
                                <Bot className="relative z-10 w-6 h-6 text-white" />
                            </div>
                            <span className="text-sm font-medium text-purple-300">Powered by <span className="text-white font-bold">Brain m1</span></span>
                        </div>

                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            AI that knows your work inside and out
                        </h3>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            Talk to BrainGPT for instant answers and intelligent insights from all your tools, files, and data in one place.
                        </p>
                    </div>

                    {/* Visual Animation */}
                    <div className="w-full md:w-1/2 h-[400px] md:h-full relative flex items-center justify-center p-8 bg-gradient-to-l from-[#1a1a20] to-transparent">
                        <div className="absolute right-0 top-0 bottom-0 w-full bg-purple-900/10 blur-[100px]" />

                        <div className="relative w-full max-w-md">

                            {/* Floating Query Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="bg-[#1E1E24] border border-white/10 rounded-xl p-4 mb-4 shadow-2xl relative z-20"
                            >
                                <div className="flex items-center gap-3 text-white">
                                    <Sparkles className="w-4 h-4 text-purple-400" />
                                    <span className="text-sm">What files are shared with me?</span>
                                    <Hash className="w-4 h-4 text-gray-600 ml-auto" />
                                </div>
                            </motion.div>

                            {/* Results Stack */}
                            <div className="space-y-2 pl-8 opacity-80">
                                <motion.div
                                    initial={{ x: 20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="bg-[#111] border border-white/5 rounded-lg p-3 flex items-center gap-3"
                                >
                                    <Search className="w-4 h-4 text-gray-500" />
                                    <span className="text-purple-300 text-sm">Find me Jen's presentation</span>
                                    <div className="ml-auto w-2 h-2 rounded-full bg-purple-500" />
                                </motion.div>

                                <motion.div
                                    initial={{ x: 20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="bg-[#111] border border-white/5 rounded-lg p-3 flex items-center gap-3"
                                >
                                    <Bot className="w-4 h-4 text-green-500" />
                                    <span className="text-gray-400 text-sm">Create a marketing campaign project</span>
                                    <div className="ml-auto w-4 h-4 rounded border border-gray-700 bg-gray-800" />
                                </motion.div>

                                <motion.div
                                    initial={{ x: 20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="bg-[#111] border border-white/5 rounded-lg p-3 flex items-center gap-3"
                                >
                                    <Github className="w-4 h-4 text-white" />
                                    <span className="text-gray-400 text-sm">Has my latest PR merged?</span>
                                </motion.div>

                                {/* Fade out effect */}
                                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#121215] to-transparent pointer-events-none" />
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
