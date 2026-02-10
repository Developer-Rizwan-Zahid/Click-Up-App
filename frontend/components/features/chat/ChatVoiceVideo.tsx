"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, Video, Mic, MicOff, VideoOff, PhoneOff, Monitor, Hand, MoreHorizontal, Check, Search, Bot, Calendar, List, Layout, Users, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function ChatVoiceVideo() {
    return (
        <section className="py-32 bg-black relative overflow-hidden border-t border-white/5">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-pink-600/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-[#1B1C20] border border-white/10 rounded-full px-4 py-1.5 mb-8"
                    >
                        <Phone className="w-4 h-4 text-slate-400" />
                        <span className="text-white font-bold text-xs">Voice and Video Calls</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-black text-white leading-[1.1] mb-8"
                    >
                        One-click calls with automatic<br />
                        summaries and action items
                    </motion.h2>
                </div>

                {/* Main Visual Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="relative max-w-6xl mx-auto aspect-[16/10] md:aspect-[16/9] bg-[#0A0A0A] rounded-[32px] border border-white/10 shadow-2xl overflow-hidden group"
                >
                    {/* Inner Mockup Border */}
                    <div className="absolute inset-2 rounded-[24px] border border-white/5 overflow-hidden flex flex-col">

                        {/* Mockup Toolbar */}
                        <div className="h-12 border-b border-white/5 bg-[#0f1012] flex items-center px-4 justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-6 h-6 rounded bg-[#F94C85] flex items-center justify-center text-[10px] font-black italic">f</div>
                                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                                    <span className="text-white">Chat Product</span>
                                    <span className="opacity-50">List in Chat Squad • Public</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-[#1B1C20] rounded-sm px-2 py-1 flex items-center gap-2 border border-white/5">
                                    <Search className="w-3 h-3 text-slate-500" />
                                    <span className="text-[10px] text-slate-500 font-medium">Search or Ask AI...</span>
                                    <div className="flex items-center gap-0.5 ml-2">
                                        <div className="w-1 h-1 bg-purple-400 rounded-full" />
                                        <div className="w-1 h-1 bg-pink-400 rounded-full" />
                                    </div>
                                </div>
                                <div className="bg-purple-600 rounded-sm px-2 py-1 text-[10px] font-black text-white flex items-center gap-1">
                                    <Plus className="w-3 h-3" /> New
                                </div>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 flex overflow-hidden">
                            {/* Left Sidebar (Main App Context) */}
                            <div className="w-12 border-r border-white/5 bg-[#0A0A0A] flex flex-col items-center py-4 gap-4 shrink-0">
                                <div className="w-6 h-6 rounded bg-gradient-to-tr from-purple-500 to-pink-500 p-1 mb-2">
                                    <svg viewBox="0 0 100 100" className="w-full h-full fill-white"><path d="M50 15c-15.5 0-28 12.5-28 28h12c0-8.8 7.2-16 16-16s16 7.2 16 16H80c0-15.5-12.5-28-28-28zM22 55c0 15.5 12.5 28 28 28s28-12.5 28-28H66c0 8.8-7.2 16-16 16s-16-7.2-16-16H22z" /></svg>
                                </div>
                                {[Layout, Phone, Search, Users, MoreHorizontal].map((Icon, i) => (
                                    <Icon key={i} className={cn("w-4 h-4", i === 1 ? "text-purple-400" : "text-slate-600")} />
                                ))}
                            </div>

                            {/* Meeting Summary Panel */}
                            <div className="flex-1 bg-[#111214] p-8 overflow-y-auto custom-scrollbar relative">
                                <div className="max-w-xl">
                                    {/* Tabs */}
                                    <div className="flex gap-4 border-b border-white/5 mb-8 text-[11px] font-bold text-slate-500">
                                        <span className="pb-2 border-b-2 border-white text-white">Chat</span>
                                        <span className="pb-2">Posts</span>
                                        <span className="pb-2 flex items-center gap-1"><List className="w-3 h-3" /> 4.0 Table</span>
                                        <span className="pb-2 flex items-center gap-1">Docs <span className="text-[9px] bg-slate-800 px-1 rounded">2</span></span>
                                    </div>

                                    <h1 className="text-3xl font-black text-white mb-6">Meeting summary</h1>

                                    <div className="flex items-center gap-2 mb-8 text-xs font-bold">
                                        <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center font-black">R</div>
                                        <span className="text-white">Reece</span>
                                        <span className="text-slate-500 ml-4 font-black uppercase tracking-tighter">Contributors:</span>
                                        <div className="flex -space-x-1.5 ml-1">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="w-5 h-5 rounded-full border-2 border-[#111214] bg-slate-800 overflow-hidden">
                                                    <img src={`/images/brain/notetaker/user${i}.png`} alt={`User ${i}`} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                            <div className="w-5 h-5 rounded-full border-2 border-[#111214] bg-slate-800 flex items-center justify-center text-[8px] text-slate-400">+2</div>
                                        </div>
                                        <span className="text-slate-500 ml-4">Last updated: Today at 2:20 PM</span>
                                    </div>

                                    <div className="space-y-6 text-sm text-slate-400 leading-relaxed font-medium">
                                        <p className="opacity-80">The kickoff meeting for the website redesign project focused on defining the core objectives, key deliverables, and timeline. The team discussed initial ideas for the visual direction and technical requirements. Roles and responsibilities were assigned for the upcoming sprint.</p>

                                        <div className="space-y-4">
                                            <h3 className="text-white font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-2">
                                                <List className="w-3 h-3 text-purple-400" /> Action Items
                                            </h3>
                                            <div className="space-y-2">
                                                {[
                                                    { text: "Define key User Experience(UX) Goals", checked: true },
                                                    { text: "Conduct website Speed Audit", checked: true },
                                                    { text: "Brand alignment with Marketing team", checked: true },
                                                    { text: "Website re-design", checked: false }
                                                ].map((item, i) => (
                                                    <div key={i} className="flex items-center gap-3 bg-white/5 p-2 rounded-lg border border-white/5 transition-colors hover:bg-white/10 group/ai">
                                                        <div className={cn(
                                                            "w-4 h-4 rounded border flex items-center justify-center transition-all",
                                                            item.checked ? "bg-purple-600 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.4)]" : "border-white/20"
                                                        )}>
                                                            <Check className={cn("w-2.5 h-2.5 text-white", item.checked ? "opacity-100" : "opacity-0 group-hover/ai:opacity-50")} />
                                                        </div>
                                                        <span className={cn(item.checked && "text-slate-200")}>{item.text}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-white font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-2">
                                                <Bot className="w-3 h-3 text-pink-400" /> Project Objectives
                                            </h3>
                                            <ul className="space-y-3">
                                                {[
                                                    "Redesign the company website to improve user experience and strengthen the brand identity.",
                                                    "Increase website traffic and engagement by 20% over the next six months.",
                                                    "Optimize the site for better SEO performance and faster loading times."
                                                ].map((objective, i) => (
                                                    <li key={i} className="flex gap-3 text-xs leading-relaxed">
                                                        <span className="text-pink-500 mt-1">•</span>
                                                        <span className="opacity-80">{objective}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Video Call Overlay */}
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 w-[580px] bg-[#16171b] rounded-3xl border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] p-6 z-20 hidden lg:block">
                        {/* Recording Badge */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                                <span className="text-xs font-black uppercase tracking-widest text-slate-300">Recording</span>
                            </div>
                            <div className="flex items-center gap-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                                <span>Design Sync</span>
                                <span>32:42</span>
                            </div>
                        </div>

                        {/* Video Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <ParticipantCard name="Alex Rivers" color="blue" image="/images/brain/notetaker/user1.png" isSpeakingInit={true} />
                            <ParticipantCard name="Sarah Chen" color="purple" image="/images/brain/notetaker/user2.png" />
                            <ParticipantCard name="Jordan Blake" color="orange" image="/images/brain/notetaker/user3.png" />
                            <ParticipantCard name="Taylor Swift" color="pink" />
                        </div>

                        {/* Call Controls */}
                        <div className="flex items-center justify-between max-w-sm mx-auto">
                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 border border-white/5">
                                <Hand className="w-5 h-5" />
                            </motion.button>
                            <div className="flex items-center gap-4">
                                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 border border-white/5">
                                    <Mic className="w-5 h-5" />
                                </motion.button>
                                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-14 h-14 rounded-full bg-[#F94C85] flex items-center justify-center text-white shadow-xl shadow-pink-500/20 group">
                                    <PhoneOff className="w-7 h-7 group-hover:rotate-12 transition-transform" />
                                </motion.button>
                                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 border border-white/5">
                                    <Video className="w-5 h-5" />
                                </motion.button>
                            </div>
                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 border border-white/5">
                                <Monitor className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </div>

                    {/* Background Decorative Blur behind call */}
                    <div className="absolute top-1/2 right-[100px] -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-[100px] rounded-full pointer-events-none z-10" />
                </motion.div>
            </div>
        </section>
    );
}

function ParticipantCard({ name, color, image, isSpeakingInit = false }: { name: string, color: string, image?: string, isSpeakingInit?: boolean }) {
    const [isSpeaking, setIsSpeaking] = useState(isSpeakingInit);

    useEffect(() => {
        // Randomly toggle speaking state to make it feel dynamic
        const interval = setInterval(() => {
            if (Math.random() > 0.7) {
                setIsSpeaking(prev => !prev);
            }
        }, 2000 + Math.random() * 3000);

        return () => clearInterval(interval);
    }, []);

    const colors = {
        blue: "bg-blue-500 shadow-blue-500/20",
        purple: "bg-purple-500 shadow-purple-500/20",
        orange: "bg-orange-500 shadow-orange-500/20",
        pink: "bg-pink-500 shadow-pink-500/20"
    };

    return (
        <div className={cn(
            "aspect-[4/3] rounded-2xl overflow-hidden relative group bg-[#0f1012] border transition-all duration-500",
            isSpeaking ? "border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.2)]" : "border-white/5"
        )}>
            {/* Speaking Ripple Effect */}
            <AnimatePresence>
                {isSpeaking && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: [0, 0.5, 0], scale: [1, 1.2, 1.4] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 border-2 border-purple-500/30 rounded-2xl pointer-events-none"
                    />
                )}
            </AnimatePresence>

            {/* Image or Placeholder background with motion */}
            <motion.div
                animate={{
                    scale: isSpeaking ? [1, 1.02, 1] : [1, 1.01, 1],
                    rotate: isSpeaking ? [0, 0.5, -0.5, 0] : [0, 0.2, -0.2, 0],
                    y: isSpeaking ? [0, -2, 0] : [0, -1, 0]
                }}
                transition={{
                    duration: isSpeaking ? 0.4 : 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="w-full h-full"
            >
                {image ? (
                    <img src={image} alt={name} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500" />
                ) : (
                    <div className={cn("w-full h-full opacity-30", colors[color as keyof typeof colors].split(' ')[0])} />
                )}
              
            </motion.div>

            {/* Visual background gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

            {/* Placeholder Initial (if no image) */}
            {!image && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        animate={isSpeaking ? { scale: [1, 1.1, 1] } : {}}
                        transition={{ duration: 0.3, repeat: Infinity }}
                        className={cn("w-16 h-16 rounded-3xl flex items-center justify-center text-white font-black text-2xl shadow-2xl rotate-3 group-hover:rotate-0 transition-all duration-500", colors[color as keyof typeof colors])}
                    >
                        {name.split(' ').map(n => n[0]).join('')}
                    </motion.div>
                </div>
            )}

            {/* In-call info */}
            <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <div className={cn(
                    "backdrop-blur-md rounded-full px-2.5 py-1 flex items-center gap-2 border transition-colors",
                    isSpeaking ? "bg-purple-600/60 border-purple-400" : "bg-black/60 border-white/10"
                )}>
                    <div className={cn("w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse", isSpeaking && "bg-white")} />
                    <span className="text-[9px] font-black text-white uppercase tracking-[0.1em]">{name}</span>
                </div>
            </div>

            {/* Mic indicator with level animation */}
            <div className="absolute top-3 right-3">
                <div className={cn(
                    "w-6 h-6 rounded-full backdrop-blur-md flex items-center justify-center border transition-all",
                    isSpeaking ? "bg-purple-600 border-purple-400 scale-110" : "bg-black/40 border-white/10"
                )}>
                    {isSpeaking ? (
                        <div className="flex gap-0.5 items-end h-3">
                            <motion.div animate={{ height: [2, 8, 4] }} transition={{ repeat: Infinity, duration: 0.3 }} className="w-0.5 bg-white rounded-full" />
                            <motion.div animate={{ height: [5, 10, 3] }} transition={{ repeat: Infinity, duration: 0.4 }} className="w-0.5 bg-white rounded-full" />
                            <motion.div animate={{ height: [3, 7, 2] }} transition={{ repeat: Infinity, duration: 0.35 }} className="w-0.5 bg-white rounded-full" />
                        </div>
                    ) : (
                        <Mic className="w-3 h-3 text-white" />
                    )}
                </div>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </div>
    );
}
