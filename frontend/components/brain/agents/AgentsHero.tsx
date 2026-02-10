"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Sparkles, Plus, Users, Zap } from "lucide-react";

export const AgentsHero = () => {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-32 pt-12 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-200/40 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold text-purple-600 mb-8 tracking-wide hover:bg-purple-100 transition-colors cursor-pointer"
            >
                <Sparkles size={12} />
                Now available for everyone
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-8xl font-black mb-8 tracking-tight leading-[1] md:leading-[1] relative z-10"
            >
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-black via-gray-800 to-gray-500">Build your own</span><br />
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">AI workforce</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
                Create custom AI Agents to automate any workflow. From project management to content creation, delegate tasks to specialized agents that work 24/7.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row justify-center gap-4 mb-20 relative z-10"
            >
                <button className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-lg">
                    <Plus size={18} /> Create AI Agent
                </button>
                <button className="bg-transparent border border-gray-200 text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                    Explore Agent Store
                </button>
            </motion.div>

            {/* Visual Representation of Agents */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="relative max-w-5xl mx-auto"
            >
                {/* Removed dark overlay, simplified for light mode */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-white border border-gray-200 rounded-3xl shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />

                    {/* Agent Card 1 */}
                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-left hover:shadow-md transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500 mb-4 group-hover:scale-110 transition-transform">
                            <Users size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">HR Assistant</h3>
                        <p className="text-gray-500 text-sm mb-4">Drafts policies, screens resumes, and schedules interviews automatically.</p>
                        <div className="flex items-center gap-2 text-xs text-orange-600 font-medium">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" /> Active now
                        </div>
                    </div>

                    {/* Agent Card 2 (Featured) */}
                    <div className="bg-white border border-purple-200 rounded-2xl p-6 text-left relative overflow-hidden shadow-xl transform md:-translate-y-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent" />
                        <div className="absolute top-4 right-4">
                            <Sparkles className="text-purple-400" size={20} />
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white mb-4 shadow-lg">
                            <Bot size={24} />
                        </div>
                        <h3 className="font-bold text-black text-lg mb-2">Project Manager</h3>
                        <p className="text-gray-500 text-sm mb-4">Prioritizes tasks, identifies risks, and updates stakeholders daily.</p>
                        <div className="flex -space-x-2 mb-4">
                            <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white" />
                            <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white" />
                            <div className="w-6 h-6 rounded-full bg-yellow-500 border-2 border-white" />
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-3/4 h-full" />
                        </div>
                    </div>

                    {/* Agent Card 3 */}
                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-left hover:shadow-md transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                            <Zap size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">DevOps Bot</h3>
                        <p className="text-gray-500 text-sm mb-4">Monitors builds, deploys to staging, and alerts on critical errors.</p>
                        <div className="flex items-center gap-2 text-xs text-blue-600 font-medium">
                            <span className="w-2 h-2 rounded-full bg-blue-500/50" /> 24 tasks done
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
