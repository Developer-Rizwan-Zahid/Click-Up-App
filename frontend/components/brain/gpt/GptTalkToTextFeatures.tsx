"use client";

import { motion } from "framer-motion";
import { Gauge, Pencil, Sparkles, Calendar, MessageSquare, Mail, FileText, AtSign, Keyboard } from "lucide-react";

export const GptTalkToTextFeatures = () => {
    return (
        <section className="bg-black pb-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-6">

                {/* Row 1: Speed & Editing */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Speed Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#0E0E12] border border-white/10 rounded-3xl p-8 relative overflow-hidden flex flex-col items-center justify-between min-h-[400px]"
                    >
                        <div className="text-center z-10 mb-8">
                            <h3 className="text-2xl font-bold text-white mb-2">Your voice is the fastest keyboard</h3>
                            <p className="text-gray-400 text-sm">Skip typing and get 4x more done with AI-powered dictation.</p>
                        </div>

                        {/* Speedometer Visual */}
                        <div className="relative flex items-center justify-center gap-8 w-full">
                            <div className="flex flex-col items-center gap-2 opacity-50">
                                <div className="text-xs text-gray-500 uppercase font-bold">Keyboard</div>
                                <div className="text-4xl text-gray-600 font-mono font-bold">45</div>
                                <div className="text-[10px] text-gray-600">wpm</div>
                                <div className="w-24 h-1 bg-gray-800 rounded-full overflow-hidden mt-2">
                                    <div className="w-[30%] h-full bg-gray-500" />
                                </div>
                            </div>
                            <div className="relative z-10 scale-125">
                                <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full" />
                                <div className="relative flex flex-col items-center gap-2">
                                    <div className="flex items-center gap-2 text-xs text-white uppercase font-bold"><Sparkles size={12} className="text-green-400" /> Talk to Text</div>
                                    <div className="text-6xl text-white font-mono font-bold tracking-tighter shadow-green-500/50 drop-shadow-lg">220</div>
                                    <div className="text-xs text-green-400 font-bold">wpm</div>
                                    <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden mt-2 border border-white/10">
                                        <div className="w-full h-full bg-gradient-to-r from-green-500 to-emerald-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Editing Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#0E0E12] border border-white/10 rounded-3xl p-8 relative overflow-hidden flex flex-col min-h-[400px]"
                    >
                        <div className="text-center z-10 mb-8">
                            <h3 className="text-2xl font-bold text-white mb-2">Your first take is your final draft</h3>
                            <p className="text-gray-400 text-sm">You do the talking, AI does the typing — and the editing!</p>
                        </div>

                        {/* Editor Visual */}
                        <div className="flex-1 bg-[#18181B] border border-white/5 rounded-2xl p-6 relative">
                            <div className="space-y-2 font-mono text-sm leading-relaxed">
                                <div className="text-gray-500 line-through decoration-red-500/50">Umm, so I think we should probably...</div>
                                <div className="text-white">
                                    <span className="bg-green-500/10 text-green-400 px-1 rounded">Recommendation:</span> Let's launch the new feature next Tuesday.
                                    It aligns perfectly with the marketing push.
                                </div>
                                <div className="text-gray-500 mt-4 text-xs italic">
                                    Auto-removed filler words. Fixed grammar. Formatted structure.
                                </div>
                            </div>

                            <div className="absolute bottom-4 left-4 right-4 bg-[#111] p-3 rounded-xl border border-white/10 flex items-center gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-xs text-gray-300">Looks great! Let's share with the team tomorrow...</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Row 2: Apps Ecosystem */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-[#0E0E12] border border-white/10 rounded-3xl p-12 relative overflow-hidden flex flex-col items-center justify-center min-h-[400px]"
                >
                    <div className="text-center z-10 mb-12">
                        <h3 className="text-2xl font-bold text-white mb-2">Talk to type across your favorite apps</h3>
                        <p className="text-gray-400 text-sm">Speak naturally to update your calendar, assign tasks, send messages, draft Docs, and more.</p>
                    </div>

                    <div className="relative w-full max-w-2xl flex justify-center items-center">
                        {/* Center Hub */}
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-orange-600 shadow-[0_0_50px_rgba(239,68,68,0.4)] flex items-center justify-center relative z-20">
                            <div className="absolute inset-0 border-4 border-white/10 rounded-full animate-ping opacity-20" />
                            <Keyboard size={32} className="text-white" />
                        </div>

                        {/* Left Icons */}
                        <div className="absolute left-10 md:left-32 top-0 p-3 bg-[#18181B] border border-white/10 rounded-xl shadow-lg -translate-y-4"><Mail className="text-red-500 w-6 h-6" /></div>
                        <div className="absolute left-0 md:left-20 bottom-10 p-3 bg-[#18181B] border border-white/10 rounded-xl shadow-lg translate-y-2"><Calendar className="text-blue-500 w-6 h-6" /></div>
                        <div className="absolute left-24 md:left-48 bottom-0 p-3 bg-[#18181B] border border-white/10 rounded-xl shadow-lg translate-y-8"><FileText className="text-blue-400 w-6 h-6" /></div>

                        {/* Right Icons */}
                        <div className="absolute right-10 md:right-32 top-0 p-3 bg-[#18181B] border border-white/10 rounded-xl shadow-lg -translate-y-4"><MessageSquare className="text-green-500 w-6 h-6" /></div>
                        <div className="absolute right-0 md:right-20 bottom-10 p-3 bg-[#18181B] border border-white/10 rounded-xl shadow-lg translate-y-2"><img src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" className="w-6 h-6 invert" alt="Github" /></div>
                        <div className="absolute right-24 md:right-48 bottom-0 p-3 bg-[#18181B] border border-white/10 rounded-xl shadow-lg translate-y-8"><img src="https://cdn.worldvectorlogo.com/logos/notion-2.svg" className="w-6 h-6" alt="Notion" /></div>
                    </div>
                </motion.div>

                {/* Row 3: Context & Vocabulary */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Mentions Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#0E0E12] border border-white/10 rounded-3xl p-8 relative overflow-hidden min-h-[350px]"
                    >
                        <h3 className="text-xl font-bold text-white mb-2 text-center">@Mentions and links with context</h3>
                        <p className="text-gray-400 text-sm text-center mb-8 px-4">Mention a colleague, a task, a Doc or something else. AI will auto-connect, tag, and notify the right people.</p>

                        <div className="bg-[#18181B] border border-white/5 rounded-xl p-6 mx-auto max-w-sm shadow-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-purple-500" />
                                <div className="text-white text-sm font-medium">Leo Bassam <span className="text-gray-500 font-normal">in squad-chat</span></div>
                            </div>
                            <div className="text-gray-300 text-sm leading-relaxed">
                                Will update <span className="bg-orange-500/20 text-orange-400 px-1 rounded">@Task: Brain GPT PR</span> as soon as the deadlines confirmed cc <span className="bg-blue-500/20 text-blue-400 px-1 rounded">@Dean Philips</span>.
                            </div>
                        </div>
                    </motion.div>

                    {/* Vocabulary Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#0E0E12] border border-white/10 rounded-3xl p-8 relative overflow-hidden min-h-[350px]"
                    >
                        <h3 className="text-xl font-bold text-white mb-2 text-center">Your personal vocabulary</h3>
                        <p className="text-gray-400 text-sm text-center mb-8 px-4">Talk to Text remembers your favorite phrases and names, learns work-specific jargon, and more.</p>

                        <div className="flex flex-col items-center gap-4">
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-500 blur-lg opacity-40" />
                                <Sparkles size={32} className="text-white relative z-10" />
                            </div>

                            <div className="flex flex-wrap justify-center gap-2 max-w-sm">
                                {["Machine Learning", "Q3 Goals", "Standup", "ClickUp", "Brain GPT", "KPIs", "Deploy"].map((tag, i) => (
                                    <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 hover:bg-white/10 hover:border-white/20 transition-colors cursor-default">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="bg-[#18181B] border border-white/5 rounded-xl p-4 w-full max-w-xs mt-4 shadow-xl text-center">
                                <div className="text-xs text-gray-500 mb-1">Recognized Concept</div>
                                <div className="text-white font-medium">"Brain GPT Launch Strategy"</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};
