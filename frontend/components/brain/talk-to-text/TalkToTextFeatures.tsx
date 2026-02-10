"use client";

import { motion } from "framer-motion";
import { CheckCircle, Mic, ArrowRight, Sparkles, Sliders, Volume2, History, PenTool } from "lucide-react";

export const TalkToTextFeatures = () => {
    return (
        <section className="py-24 px-4 bg-black text-white relative overflow-hidden">

            <div className="container mx-auto max-w-6xl">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-medium border border-white/10 mb-8 backdrop-blur-sm">
                        <CheckCircle size={14} className="text-white" />
                        <span>AI auto-edit</span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                        Stay in the flow while AI polishes
                    </h2>
                    <p className="text-xl text-gray-400 font-medium">
                        You do the talking, AI does the typing – and the editing!
                    </p>
                </div>

                {/* Main Visual: AI Editing Interface */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative w-full max-w-4xl mx-auto mb-12 rounded-3xl border border-white/10 bg-gradient-to-b from-[#1c1c1e] to-[#0f0f10] p-1 shadow-2xl overflow-hidden"
                >
                    <div className="bg-[#0f0f10] rounded-[28px] overflow-hidden min-h-[400px] relative">

                        {/* Fake UI Header */}
                        <div className="px-8 py-6 flex items-center gap-6 border-b border-white/5">
                            <div className="flex items-center gap-2 text-white font-medium">
                                <History size={16} className="text-gray-400" />
                                <span>History</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 font-medium">
                                <PenTool size={16} />
                                <span>Writing</span>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-8 space-y-8 font-mono text-sm">
                            <div className="flex gap-6 opacity-40">
                                <span className="text-gray-500 shrink-0">Today</span>
                            </div>

                            {/* Active Line */}
                            <div className="flex gap-6 group">
                                <span className="text-[#7B68EE] shrink-0 font-medium pt-1">04:43 PM</span>
                                <div className="leading-relaxed text-gray-300">
                                    <span className="line-through text-gray-600 decoration-purple-500/50">Umm,</span> hey, <span className="line-through text-gray-600 decoration-purple-500/50">so I was just thinking, maybe we could,</span> <span className="text-purple-400 font-bold">push the client call</span> to <span className="line-through text-gray-600 decoration-purple-500/50">like, next Tuesday? No, actually,</span> next Monday? I'm not sure if everyone's <span className="line-through text-gray-600 decoration-purple-500/50">ready with the updates yet.</span> <span className="inline-block w-1.5 h-4 bg-purple-500 align-middle animate-pulse ml-1" />
                                </div>
                                <span className="text-gray-700 ml-auto text-xs pt-1">00:14s</span>
                            </div>

                            {/* Past Lines (Faded) */}
                            <div className="flex gap-6 opacity-30">
                                <span className="text-gray-600 shrink-0 font-medium pt-1">03:23 PM</span>
                                <div className="leading-relaxed text-gray-500">
                                    Remind me to check in with Brian about the Q3 budget tomorrow.
                                </div>
                                <span className="text-gray-800 ml-auto text-xs pt-1">00:09s</span>
                            </div>
                            <div className="flex gap-6 opacity-20">
                                <span className="text-gray-600 shrink-0 font-medium pt-1">02:29 PM</span>
                                <div className="leading-relaxed text-gray-500">
                                    Please pull up the latest sales numbers.
                                </div>
                                <span className="text-gray-800 ml-auto text-xs pt-1">00:03s</span>
                            </div>
                            <div className="flex gap-6 opacity-10">
                                <span className="text-gray-600 shrink-0 font-medium pt-1">07:58 PM</span>
                                <div className="leading-relaxed text-gray-500">
                                    Draft an email to the team regarding the new onboarding process.
                                </div>
                                <span className="text-gray-800 ml-auto text-xs pt-1">00:07s</span>
                            </div>
                        </div>

                        {/* Bottom Fade */}
                        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0f0f10] via-[#0f0f10]/80 to-transparent pointer-events-none" />
                    </div>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                    {/* Left Card: Choose Style */}
                    <div className="bg-transparent text-center">
                        <div className="bg-[#121214] border border-white/5 rounded-3xl p-10 mb-6 flex flex-col items-center justify-center min-h-[200px] relative overflow-hidden group">
                            {/* Style Picker Visual */}
                            <div className="relative z-10 w-full max-w-[200px] bg-[#1c1c1e] rounded-xl border border-white/5 p-1 flex flex-col gap-1 shadow-2xl">
                                <div className="flex items-center justify-between px-3 py-2 text-gray-500 text-xs font-medium rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                                    <span>Minimal</span>
                                    <div className="w-3 h-3 rounded-full border border-gray-600" />
                                </div>
                                <div className="flex items-center justify-between px-3 py-2 text-gray-400 text-xs font-medium rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                                    <div className="flex items-center gap-2"><Sparkles size={10} /> Smart</div>
                                    <div className="w-3 h-3 rounded-full border border-gray-600" />
                                </div>
                                {/* Selected Item */}
                                <div className="flex items-center justify-between px-3 py-2 text-white text-xs font-semibold rounded-lg bg-white/10 border border-white/5 cursor-pointer shadow-lg relative overflow-hidden">
                                    <div className="flex items-center gap-2 relative z-10"><Sparkles size={12} className="text-purple-400" /> Polished</div>
                                    <div className="w-3 h-3 rounded-full bg-white border-2 border-purple-500 relative z-10" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20" />
                                </div>
                            </div>
                            {/* Background Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -z-10 group-hover:bg-purple-500/20 transition-all duration-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Choose your style</h3>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto">Pick the perfect level of enhancement – from minimal edits to professional polish.</p>
                    </div>

                    {/* Right Card: Tone Intelligence */}
                    <div className="bg-transparent text-center">
                        <div className="bg-[#121214] border border-white/5 rounded-3xl p-10 mb-6 flex flex-col items-center justify-center min-h-[200px] relative overflow-hidden group">
                            {/* Sound Button Visual */}
                            <div className="relative z-10">
                                <button className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[#1c1c1e] text-gray-300 font-medium text-sm border border-white/10 hover:border-white/20 hover:text-white transition-all shadow-xl group/btn">
                                    <Volume2 size={16} className="text-purple-400 group-hover/btn:scale-110 transition-transform" />
                                    Sound like me
                                </button>
                                {/* Ripple Effect */}
                                <div className="absolute inset-0 -z-10 border border-white/5 rounded-xl scale-110 opacity-0 group-hover:scale-125 group-hover:opacity-100 transition-all duration-700" />
                                <div className="absolute inset-0 -z-10 border border-white/5 rounded-xl scale-125 opacity-0 group-hover:scale-150 group-hover:opacity-50 transition-all duration-1000 delay-100" />
                            </div>

                            {/* Background Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/20 transition-all duration-500" />
                        </div>
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <h3 className="text-xl font-bold text-white">Tone Intelligence</h3>
                            <span className="bg-[#5D5FEF]/20 text-[#5D5FEF] text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide">Coming Soon</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto">Automatically matches your voice, style, and formality wherever you dictate!</p>
                    </div>

                </div>
            </div>
        </section>
    );
};
