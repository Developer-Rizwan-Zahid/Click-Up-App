"use client";

import { motion } from "framer-motion";
import { Bot, Search, Image as ImageIcon, Calendar, Video, Globe, Brain, Sparkles, MessageSquare, Chrome, Download, Layers, Folder, Slack, Github, Database } from "lucide-react";
import Image from "next/image";

export const GptBentoGrid = () => {
    return (
        <section className="bg-black py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-6">

                {/* Row 1: Universal AI & Universal Search */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Card 1: Premium AI Models */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#0E0E12] border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden group"
                    >
                        <div className="relative z-10 mb-8 text-center">
                            <div className="flex items-center justify-center gap-2 mb-4 text-blue-400 font-medium text-xs uppercase tracking-wider">
                                <Sparkles size={12} /> Universal AI
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Ask the premium AI models anything</h3>
                            <p className="text-gray-400 text-sm">Chat with the latest AI models for coding, writing, complex reasoning, and more — without switching between apps.</p>
                        </div>

                        {/* Mockup */}
                        <div className="bg-[#18181B] rounded-xl border border-white/5 p-4 transform group-hover:scale-[1.02] transition-transform duration-500 shadow-2xl">
                            <div className="text-xs text-gray-500 mb-2">Models</div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-3 p-2 rounded bg-white/5 text-white text-sm"><Bot size={16} className="text-purple-400" /> Brain <span className="text-[10px] bg-purple-500/20 text-purple-300 px-1 rounded">m1</span></div>
                                <div className="flex items-center gap-3 p-2 rounded hover:bg-white/5 text-gray-400 text-sm"><Bot size={16} /> Claude <span className="text-[10px] border border-gray-700 px-1 rounded">Sonnet 3.5</span></div>
                                <div className="flex items-center gap-3 p-2 rounded hover:bg-white/5 text-gray-400 text-sm"><Bot size={16} /> OpenAI <span className="text-[10px] border border-gray-700 px-1 rounded">GPT 4o</span></div>
                                <div className="flex items-center gap-3 p-2 rounded hover:bg-white/5 text-gray-400 text-sm"><Sparkles size={16} /> Gemini <span className="text-[10px] border border-gray-700 px-1 rounded">1.5 Pro</span></div>
                                <div className="flex items-center gap-3 p-2 rounded hover:bg-white/5 text-gray-400 text-sm"><Brain size={16} /> DeepSeek <span className="text-[10px] border border-gray-700 px-1 rounded">R1</span></div>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px]" />
                    </motion.div>

                    {/* Card 2: Search */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#0E0E12] border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden group"
                    >
                        <div className="relative z-10 mb-8 text-center">
                            <div className="flex items-center justify-center gap-2 mb-4 text-green-400 font-medium text-xs uppercase tracking-wider">
                                <Search size={12} /> Universal Search
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Search across all your apps</h3>
                            <p className="text-gray-400 text-sm">No more digging for answers. Locate buried files, lost threads, and half-remembered conversations instantly.</p>
                        </div>

                        {/* Icons Row */}
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-[#0061FF] rounded-xl flex items-center justify-center"><Database className="text-white" size={20} /></div>
                            <div className="w-10 h-10 bg-[#34A853] rounded-xl flex items-center justify-center"><Bot className="text-white" size={20} /></div>
                            <div className="w-10 h-10 bg-[#4A154B] rounded-xl flex items-center justify-center"><Slack className="text-white" size={20} /></div>
                            <div className="w-10 h-10 bg-[#F24E1E] rounded-xl flex items-center justify-center"><Sparkles className="text-white" size={20} /></div>
                            <div className="w-10 h-10 bg-[#24292E] rounded-xl flex items-center justify-center"><Github className="text-white" size={20} /></div>
                            <div className="w-10 h-10 bg-[#FFD04B] rounded-xl flex items-center justify-center"><Folder className="text-black" size={20} /></div>
                        </div>

                        {/* Search UI Mock */}
                        <div className="bg-[#18181B] rounded-xl border border-white/5 p-4 relative z-10 shadow-2xl">
                            <div className="flex items-center gap-3 border-b border-white/5 pb-3 mb-3">
                                <Search size={16} className="text-gray-500" />
                                <span className="text-gray-300 text-sm">Design Assets 2024</span>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center"><Folder size={12} className="text-white" /></div>
                                    <div className="text-xs text-gray-400">
                                        <div className="text-white font-medium">Assets Folder</div>
                                        <div>Google Drive • Modified yesterday</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 opacty-60">
                                    <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center"><Slack size={12} className="text-white" /></div>
                                    <div className="text-xs text-gray-400">
                                        <div className="text-white font-medium">#design-team discussion</div>
                                        <div>Slack • 2 messages</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 left-0 w-64 h-64 bg-green-500/10 blur-[80px]" />
                    </motion.div>
                </div>

                {/* Row 2: AI That Creates */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-[#0E0E12] border border-white/10 rounded-3xl p-10 md:p-14 relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]"
                >
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm"><MessageSquare size={14} /> Send a message</div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/50 bg-purple-500/10 text-purple-300 text-sm shadow-[0_0_15px_rgba(168,85,247,0.3)]"><ImageIcon size={14} /> Generate images</div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm"><Bot size={14} /> Create a task</div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm"><Calendar size={14} /> Schedule a meeting</div>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">AI that creates for you</h3>
                    <p className="text-gray-400 text-center max-w-xl">Generate images, tasks, messages, projects, and more — prompted by your workflow.</p>
                </motion.div>

                {/* Row 3: Web Search & Deep Search */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Web Search */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#0E0E12] border border-white/10 rounded-3xl p-8 relative overflow-hidden min-h-[350px]"
                    >
                        <div className="text-center mb-8 relative z-10">
                            <h3 className="text-xl font-bold text-white mb-2">AI with web search</h3>
                            <p className="text-gray-400 text-sm">Get answers from the web with clear citations you can trust.</p>
                        </div>

                        {/* Mockup */}
                        <div className="bg-[#18181B] rounded-xl border border-white/5 p-4 shadow-xl relative z-10 mx-auto max-w-sm">
                            <div className="flex items-center gap-2 mb-3">
                                <Globe size={16} className="text-blue-400" />
                                <span className="text-xs text-gray-400">Web search: "atomic design citations"</span>
                            </div>
                            <div className="space-y-2 pl-4 border-l-2 border-blue-500/30">
                                <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                                <div className="h-2 w-full bg-white/10 rounded"></div>
                                <div className="h-2 w-1/2 bg-white/10 rounded"></div>
                            </div>
                            <div className="mt-4 flex gap-2">
                                <div className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-400">bradfrost.com</div>
                                <div className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-400">medium.com</div>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20 pointer-events-none" />
                    </motion.div>

                    {/* Deep Search */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#0E0E12] border border-white/10 rounded-3xl p-8 relative overflow-hidden min-h-[350px]"
                    >
                        <div className="text-center mb-8 relative z-10">
                            <h3 className="text-xl font-bold text-white mb-2">Deep search</h3>
                            <p className="text-gray-400 text-sm">Hours of research instantly focused into detailed, thoughtful answers.</p>
                        </div>

                        {/* Mockup */}
                        <div className="bg-[#18181B] rounded-xl border border-white/5 p-4 shadow-xl relative z-10 mx-auto max-w-sm">
                            <div className="text-xs text-purple-400 mb-2 font-mono">Thinking...</div>
                            <div className="text-sm text-gray-300 p-3 bg-white/5 rounded-lg border border-purple-500/20 italic">
                                "Analyzing latest trends in cybersecurity threats for 2025..."
                            </div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-500/20 blur-[60px]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20 pointer-events-none" />
                    </motion.div>
                </div>

                {/* Row 4: Browser Extension */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#0E0E12] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h3 className="text-4xl font-bold text-white mb-6">Work where you browse</h3>
                        <p className="text-gray-400 text-lg mb-8">
                            Summarize, ask, and act on web content without ever leaving the tab you're browsing—all powered by top AI models and the context of your work.
                        </p>
                        <button className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
                            <Chrome size={20} /> Download Chrome Extension
                        </button>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-xl rounded-full" />
                        <div className="relative z-10 bg-[#1A1A1D] border border-white/10 rounded-xl p-4 shadow-2xl skew-y-[-2deg] rotate-[-2deg]">
                            <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-3">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <div className="ml-2 text-xs text-gray-500 bg-black/40 px-2 py-0.5 rounded flex-1">google.com/search...</div>
                            </div>
                            <div className="space-y-3">
                                <div className="h-32 bg-white/5 rounded-lg border border-dashed border-white/10 flex items-center justify-center text-gray-600 text-xs">
                                    Web Content Area
                                </div>
                                <div className="absolute bottom-4 right-4 w-64 bg-[#111] border border-white/10 rounded-lg p-3 shadow-2xl ring-1 ring-white/10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Bot size={14} className="text-purple-400" />
                                        <span className="text-xs text-white font-bold">Brain Assistant</span>
                                    </div>
                                    <div className="text-[10px] text-gray-400">
                                        I can summarize this page or add it to your tasks. What would you like to do?
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
