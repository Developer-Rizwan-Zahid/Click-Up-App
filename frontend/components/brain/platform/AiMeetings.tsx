"use client";

import { motion } from "framer-motion";
import { ArrowRight, Video, Mic, Calendar, Search, Sparkles, MessageSquare, ListChecks, Play } from "lucide-react";

export const AiMeetings = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-2 mb-4">
                        <Video className="text-blue-500 w-5 h-5" />
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-sm tracking-wider uppercase">
                            AI Meetings
                        </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-4xl">
                            Free your team from note-taking,<br />
                            <span className="text-gray-500">scheduling, and status updates</span>
                        </h2>
                        <button className="bg-[#1f2127] hover:bg-[#2c2e36] text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all border border-white/10 hover:border-white/20">
                            Get started <ArrowRight size={16} />
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Card 1: Meetings That Take Notes */}
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="h-48 mb-8 relative flex flex-col justify-end">
                            <div className="bg-[#151515] border border-white/10 rounded-xl p-4 shadow-xl relative z-10">
                                <div className="text-xs font-bold text-gray-400 mb-2">Key takeaways</div>
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-start gap-2 text-xs text-gray-300">
                                        <div className="w-1 h-1 bg-blue-500 rounded-full mt-1.5" />
                                        <span>Discussed launching the new campaign</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-xs text-gray-300">
                                        <div className="w-1 h-1 bg-blue-500 rounded-full mt-1.5" />
                                        <span><span className="text-blue-400">@Andrew</span> suggested...</span>
                                    </div>
                                </div>
                                <div className="bg-[#1A1A1A] p-2 rounded-lg border border-white/5 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center"><Mic size={14} className="text-white" /></div>
                                    <div className="flex-1">
                                        <div className="text-[10px] text-gray-400 font-bold">1:1 Amy / Andrew</div>
                                        <div className="flex items-center gap-1 text-[8px] text-blue-400">
                                            <span className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" /> Transcribing
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">Meetings That Take Notes</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Everything said is auto-captured and turned into docs, tasks, and follow-ups.
                        </p>
                    </div>

                    {/* Card 2: Smart Clip Recordings */}
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-purple-500/30 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="h-48 mb-8 relative flex flex-col justify-center items-center">
                            <div className="absolute top-2 right-4 text-[10px] text-gray-500 border border-white/10 px-2 py-1 rounded-full bg-[#151515]">
                                Find the clip where our product lead explains...
                            </div>

                            <div className="mt-6 bg-[#151515] border border-white/10 rounded-xl p-3 w-full max-w-[240px] shadow-2xl relative">
                                <div className="flex items-start gap-2 mb-3">
                                    <Sparkles size={12} className="text-purple-500 mt-0.5" />
                                    <span className="text-xs text-gray-300">Sure thing, here you go:</span>
                                </div>
                                <div className="bg-black rounded-lg aspect-video mb-2 relative flex items-center justify-center group/play cursor-pointer">
                                    <div className="absolute inset-0 bg-purple-500/5" />
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover/play:bg-white/20 transition-all">
                                        <Play size={12} className="text-white ml-0.5" fill="white" />
                                    </div>
                                    {/* Fake UI lines */}
                                    <div className="absolute bottom-2 left-2 right-2 h-1 bg-white/10 rounded-full overflow-hidden">
                                        <div className="w-1/3 h-full bg-purple-500" />
                                    </div>
                                </div>
                                <div className="text-[10px] font-bold text-white">Q3 Launch Strategy</div>
                                <div className="text-[9px] text-gray-500 flex items-center gap-1">
                                    <Video size={8} /> Video Clip
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">Smart Clip Recordings</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            AI turns your clips into shareable, searchable content, no effort required.
                        </p>
                    </div>

                    {/* Card 3: Scheduling Without the Back-and-Forth */}
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="h-48 mb-8 relative px-2">
                            {/* Calendar UI */}
                            <div className="grid grid-cols-3 gap-1 h-full opacity-60">
                                <div className="border-r border-white/5 pt-4">
                                    <div className="text-[10px] text-gray-500 mb-4 px-2">9 am</div>
                                    <div className="text-[10px] text-gray-500 mb-4 px-2">10 am</div>
                                    <div className="text-[10px] text-gray-500 px-2">11 am</div>
                                </div>
                                <div className="col-span-2 pt-2 relative">
                                    <div className="absolute top-8 left-0 right-4 h-20 bg-blue-500/10 border border-blue-500/50 rounded-lg p-2">
                                        <div className="flex items-center gap-1 mb-1">
                                            <Sparkles size={8} className="text-blue-400" />
                                            <span className="text-[10px] font-bold text-blue-100">Client Present...</span>
                                        </div>
                                        <div className="text-[8px] text-blue-300">9 - 10:30am</div>
                                    </div>
                                    <div className="absolute top-32 left-0 right-4 h-12 bg-gray-800/50 rounded-lg border border-white/5 p-2">
                                        <div className="text-[10px] text-gray-500">Team stand-up</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">Scheduling Without the Back-and-Forth</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Let AI find the best time, book meetings, and sync with your calendars.
                        </p>
                    </div>

                    {/* Card 4: AI-Powered SyncUp Meetings */}
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-pink-500/30 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="h-48 mb-8 relative flex items-center justify-center">
                            <div className="relative w-full max-w-[260px]">
                                <div className="bg-[#151515] rounded-xl overflow-hidden aspect-video border border-white/10 mb-[-20px] mx-auto scale-95 opacity-50" />
                                <div className="bg-[#1A1A1A] rounded-xl overflow-hidden aspect-video border border-white/10 relative z-10 shadow-2xl">
                                    <div className="absolute inset-0 grid grid-cols-2 gap-0.5 p-0.5 bg-black">
                                        <div className="bg-[#222] relative"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" className="absolute w-full h-full object-cover opacity-50" /></div>
                                        <div className="bg-[#222] relative"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Trevor" className="absolute w-full h-full object-cover opacity-50" /></div>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md rounded-lg p-2 border border-white/10">
                                        <div className="flex gap-4 text-[9px] text-gray-500 border-b border-white/10 pb-1 mb-1">
                                            <span className="text-white font-bold">Transcript</span>
                                            <span>Summary</span>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="text-[9px] text-gray-400"><span className="text-gray-500">11:03</span> <span className="text-gray-300">Sarah:</span> Yes, that works for me.</div>
                                            <div className="text-[9px] text-gray-400"><span className="text-gray-500">11:04</span> <span className="text-gray-300">Trevor:</span> I'll send the file today.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">AI-Powered SyncUp Meetings</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Every call becomes a searchable transcript, summary, and list of next steps—automatically.
                        </p>
                    </div>

                    {/* Card 5: Answers Without the Search */}
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-orange-500/30 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="h-48 mb-8 relative flex items-center justify-center">
                            <div className="relative w-full max-w-[260px] bg-[#151515] border border-white/10 rounded-xl p-4 shadow-2xl">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="w-16 h-12 bg-[#222] rounded mb-2" />
                                    <div className="w-16 h-12 bg-[#222] rounded mb-2" />
                                </div>
                                <div className="absolute right-[-10px] top-[40px] bg-[#1E1E1E] border border-white/10 rounded-lg p-3 shadow-xl max-w-[180px] z-20">
                                    <div className="text-[10px] text-gray-300 mb-2">Summarize what Greg talked about on the client brief</div>
                                    <div className="flex items-center gap-2">
                                        <Sparkles size={10} className="text-orange-400" />
                                        <div className="h-1.5 w-16 bg-gray-700 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">Answers Without the Search</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Ask anything in a meeting and get instant AI answers from your Workspace.
                        </p>
                    </div>

                    {/* Card 6: Smart Agenda Builder */}
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-green-500/30 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="h-48 mb-8 relative flex items-center justify-center">
                            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-5 w-full max-w-[260px] shadow-2xl">
                                <div className="text-[10px] text-gray-500 mb-3 border-b border-white/5 pb-2">Aug 14, 9:00 AM → 10:30 AM</div>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-4 h-4 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-[8px]">B</div>
                                    <div className="w-4 h-4 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-[8px]">3</div>
                                    <span className="text-xs text-gray-400">Yes</span>
                                </div>
                                <div className="bg-black/40 rounded-lg p-3 border border-white/5">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Sparkles size={12} className="text-blue-400" />
                                        <span className="text-xs font-bold text-white">Agenda</span>
                                    </div>
                                    <p className="text-[10px] text-gray-400 leading-relaxed">
                                        Review progress on the Q3 Campaign, address blockers, and align on goals.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">Smart Agenda Builder</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Instantly create meeting agendas based on previous meetings, project status, and team priorities.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};
