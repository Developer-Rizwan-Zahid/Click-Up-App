"use client";

import { motion } from "framer-motion";
import { iPhone } from "lucide-react"; // Note: lucide doesn't have iPhone, I'll build it
import { Smartphone, Zap, ShieldCheck, WifiOff, Search, Menu, Clock, Hash, MessageSquare, Plus, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ChatPerformance() {
    return (
        <section className="py-32 bg-black relative overflow-hidden border-t border-white/5">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[180px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-[#1B1C20] border border-white/10 rounded-full px-4 py-1.5 mb-8"
                    >
                        <Smartphone className="w-4 h-4 text-slate-400" />
                        <span className="text-white font-bold text-xs">Mobile</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-black text-white leading-[1.1]"
                    >
                        World-class performance that<br />
                        works wherever you work
                    </motion.h2>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32">
                    {/* Left: Mobile Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <MobileMockup />

                        {/* Decorative glow behind phone */}
                        <div className="absolute inset-0 bg-purple-600/20 blur-[80px] rounded-full -z-10 animate-pulse" />
                    </motion.div>

                    {/* Right: Feature List */}
                    <div className="flex flex-col gap-12 max-w-lg">
                        <FeatureItem
                            icon={<Zap className="w-6 h-6 text-yellow-400" />}
                            title="10x faster with Instant Load Framework™"
                            description="Optimized for speed, our framework ensures that your chats and tasks load instantly, even on slower connections."
                            delay={0.2}
                        />
                        <FeatureItem
                            icon={<ShieldCheck className="w-6 h-6 text-green-400" />}
                            title="99.9% guaranteed reliability"
                            description="We maintain high uptime and data integrity so you can always count on your workspace being available."
                            delay={0.3}
                        />
                        <FeatureItem
                            icon={<WifiOff className="w-6 h-6 text-blue-400" />}
                            title="Offline mode for seamless syncing"
                            description="Work anywhere, even without internet. Your changes will sync automatically once you're back online."
                            delay={0.4}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function MobileMockup() {
    return (
        <div className="relative w-[320px] h-[640px] bg-[#050505] rounded-[50px] border-[8px] border-[#1a1a1a] shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Speaker/Camera Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1a1a1a] rounded-b-2xl z-50 flex items-center justify-center gap-2">
                <div className="w-8 h-1 bg-[#222] rounded-full" />
                <div className="w-2 h-2 bg-[#222] rounded-full" />
            </div>

            {/* Content Overflow Container */}
            <div className="h-full flex flex-col pt-8">
                {/* Status Bar */}
                <div className="px-6 py-2 flex items-center justify-between text-[11px] font-bold text-white">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                        <div className="flex gap-0.5">
                            <div className="w-0.5 h-1.5 bg-white rounded-full" />
                            <div className="w-0.5 h-2 bg-white rounded-full" />
                            <div className="w-0.5 h-2.5 bg-white rounded-full" />
                            <div className="w-0.5 h-3 bg-white rounded-full" />
                        </div>
                        <div className="w-5 h-2.5 border border-white/50 rounded-sm relative p-[1px]">
                            <div className="w-full h-full bg-white rounded-[1px]" />
                        </div>
                    </div>
                </div>

                {/* App Header */}
                <div className="px-4 py-4 flex items-center justify-between">
                    <Menu className="w-5 h-5 text-white/80" />
                    <span className="text-sm font-black text-white">Chat</span>
                    <div className="w-6 h-6 rounded-full bg-slate-800 overflow-hidden border border-white/10">
                        <img src="/images/brain/notetaker/user1.png" alt="User" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Search & Actions */}
                <div className="px-4 mb-6">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 flex items-center gap-2">
                            <Search className="w-4 h-4 text-slate-500" />
                            <span className="text-xs text-slate-500">Search</span>
                        </div>
                        <div className="w-9 h-9 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl">
                            <Clock className="w-4 h-4 text-slate-400" />
                        </div>
                        <div className="w-9 h-9 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl">
                            <Hash className="w-4 h-4 text-slate-400" />
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                        {[
                            { label: "Replies", icon: <MessageSquare className="w-4 h-4 text-purple-400" />, count: 3, active: true },
                            { label: "Posts", icon: <Bell className="w-4 h-4 text-slate-400" /> },
                            { label: "FollowUps", icon: <Plus className="w-4 h-4 text-slate-400" /> },
                            { label: "Active", icon: <Zap className="w-4 h-4 text-slate-400" /> }
                        ].map((item, i) => (
                            <div key={i} className={cn(
                                "flex flex-col items-center gap-2 p-2 rounded-xl border transition-all",
                                item.active ? "bg-purple-600/10 border-purple-500/50" : "bg-white/5 border-white/5"
                            )}>
                                <div className="relative">
                                    {item.icon}
                                    {item.count && (
                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-[7px] flex items-center justify-center text-white font-black">
                                            {item.count}
                                        </div>
                                    )}
                                </div>
                                <span className="text-[8px] font-bold text-slate-400">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Chats */}
                <div className="flex-1 px-4 overflow-hidden">
                    <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Recents</h3>
                    <div className="space-y-4">
                        <ChatItem name="Fan Lin" message="Have we ever thought about adding paywalls in th..." time="7:09 pm" initial="F" color="bg-blue-500" count={3} />
                        <ChatItem name="Mobile" message="Rhonda Rhodes: Added a load of Figma comment..." time="7:09 pm" initial="M" color="bg-purple-500" count={1} />
                        <ChatItem name="Cards and Canvas" message="Joshua Jones: Hey! I'm trying to implement your n..." time="7:09 pm" initial="C" color="bg-rose-500" />
                        <ChatItem name="General" message="James Hall: Let's get this shared up ASAP!are mis..." time="7:09 pm" initial="G" color="bg-orange-500" />
                    </div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full" />
            </div>
        </div>
    );
}

function ChatItem({ name, message, time, initial, color, count }: { name: string, message: string, time: string, initial: string, color: string, count?: number }) {
    return (
        <div className="flex items-center gap-3 group">
            <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-xs shrink-0", color)}>
                {initial}
            </div>
            <div className="flex-1 min-w-0 border-b border-white/5 pb-3">
                <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[11px] font-black text-white">{name}</span>
                    <span className="text-[9px] text-slate-500">{time}</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                    <p className="text-[10px] text-slate-400 truncate opacity-60">{message}</p>
                    {count && (
                        <div className="w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center text-[8px] text-white font-black">
                            {count}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function FeatureItem({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="flex items-start gap-6 group"
        >
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                {icon}
            </div>
            <div>
                <h3 className="text-xl font-black text-white mb-2 group-hover:text-purple-400 transition-colors">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
}
