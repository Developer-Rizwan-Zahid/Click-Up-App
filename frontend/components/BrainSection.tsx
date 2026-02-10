"use client";

import { motion } from "framer-motion";
import {
    Bot, Search, Users, Mic, Sparkles, Play, StopCircle,
    Github, Slack, Mail, Trello, Folder, Database, Cloud
} from "lucide-react";
import { cn } from "@/lib/utils";
export const BrainSection = () => {
    return (
        <section className="bg-black text-white py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20 relative z-10">
                    {/* Glowing Logo */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="w-20 h-20 mx-auto mb-8 relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full blur-2xl opacity-60 animate-pulse" />
                        <div className="relative w-full h-full bg-gradient-to-tr from-pink-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
                            <Sparkles className="text-white w-10 h-10" fill="white" />
                        </div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl sm:text-7xl font-black tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
                    >
                        The only AI that works<br />where you work
                    </motion.h2>

                    <motion.div
                    initial={{opacity:0, y:20}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once:true}}
                    transition={{delay:0.2}}
                    >
                        <button className="bg-white text-black font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors">
                            Try Brain today
                        </button>
                    </motion.div>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">

                    {/* Card 1: @Brain Agent */}
                    <ChatCard
                        label="@BRAIN AGENT"
                        title="Use @Brain for a 24/7 intelligent assistant."
                        userMsg="Pull last week's campaign stats and draft a presentation."
                        agentMsg="Here are the key performance stats from last quarter's campaign..."
                        avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Zach"
                        userName="Zach"
                        glowColor="from-purple-500/20"
                    />

                    {/* Card 2: Ambient Answers */}
                    <ChatCard
                        label="AMBIENT ANSWERS"
                        title="Humans no longer answer questions."
                        userMsg="Where is the final logo file for the spring campaign?"
                        agentMsg="Hey! The final logo file for the spring campaign is here: Figma file..."
                        avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Maggie"
                        userName="Maggie"
                        glowColor="from-blue-500/20"
                        hasLink
                    />

                    {/* Card 3: Project Manager */}
                    <ChatCard
                        label="PROJECT MANAGER"
                        title="Never manually assign tasks again."
                        userMsg="The discount code isn't applying to the checkout flow."
                        agentMsg="Got it! I've created a task for this: fix discount code issue..."
                        avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
                        userName="Alex"
                        glowColor="from-pink-500/20"
                        hasTask
                    />

                </div>

                {/* Large Talk to Text Card */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                            <div className="flex-1 space-y-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <Sparkles className="text-blue-400 w-5 h-5" />
                                    <span className="text-white font-bold tracking-wider">BrainGPT</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                                    Type 4x faster with AI Talk to Text, instantly perfected to write like you.
                                </h3>
                                <div className="text-sm text-gray-400 font-mono">REPLACES | | | Flow</div>

                                <div className="pt-8">
                                    <div className="text-gray-400 text-sm mb-4">Save 2 hours every day, guaranteed.</div>
                                    <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors border border-white/10">
                                        Download free
                                    </button>
                                </div>
                            </div>

                            {/* Audio Visualizer */}
                            <div className="flex-1 w-full max-w-lg bg-[#111] border border-white/10 rounded-2xl p-6 h-64 flex flex-col justify-center relative shadow-2xl">
                                <div className="flex items-center justify-center gap-1 h-24">
                                    {[...Array(20)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ height: [20, 60, 20] }}
                                            transition={{
                                                duration: 1,
                                                repeat: Infinity,
                                                delay: i * 0.05,
                                                ease: "easeInOut"
                                            }}
                                            className="w-2 bg-gradient-to-t from-gray-500 to-white rounded-full opacity-60"
                                        />
                                    ))}
                                </div>
                                <div className="mt-8 flex justify-between items-center text-xs text-gray-500 px-4 border-t border-white/5 pt-4">
                                    <span>Stop</span>
                                    <div className="flex gap-4">
                                        <span>Close</span>
                                        <span>Esc</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Bottom Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Sound Like Me */}
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 text-center group hover:border-white/20 transition-colors">
                        <div className="w-48 mx-auto bg-[#1A1A1A] border border-white/10 rounded-lg p-3 mb-6 flex items-center justify-center gap-2 text-sm text-gray-300 group-hover:bg-[#222] transition-colors shadow-lg">
                            <Mic size={16} /> Sound like me
                        </div>
                        <h4 className="font-bold text-xl mb-2">Your company's AI</h4>
                        <p className="text-sm text-gray-500">A superhuman brain built for you and your team.</p>
                    </div>

                    {/* Connected Apps */}
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 text-center group hover:border-white/20 transition-colors">
                        <div className="flex justify-center flex-wrap gap-3 mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                            <AppIcon Icon={Github} color="text-white" />
                            <AppIcon Icon={Slack} color="text-orange-400" />
                            <AppIcon Icon={Mail} color="text-red-400" />
                            <AppIcon Icon={Trello} color="text-blue-400" />
                            <AppIcon Icon={Folder} color="text-yellow-400" />
                            <AppIcon Icon={Database} color="text-green-400" />
                        </div>
                        <h4 className="font-bold text-xl mb-2">Connected to 50+ apps</h4>
                        <p className="text-sm text-gray-500">Superpowers to complete 500+ human tasks.</p>
                    </div>

                    {/* Every AI */}
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 text-center group hover:border-white/20 transition-colors">
                        <div className="flex justify-center items-center gap-4 mb-6">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><Bot /></div>
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)]"><Sparkles /></div>
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><Cloud /></div>
                        </div>
                        <h4 className="font-bold text-xl mb-2">Every AI</h4>
                        <p className="text-sm text-gray-500">ChatGPT, Claude, Gemini — unlimited.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

function ChatCard({ label, title, userMsg, agentMsg, avatar, userName, glowColor, hasLink, hasTask }: any) {
    return (
        <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-300">
            <div className={cn("absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity", glowColor)} />

            <div className="relative z-10 h-full flex flex-col">
                <div className="text-xs font-bold text-purple-400 mb-4 tracking-widest uppercase">{label}</div>
                <h3 className="text-2xl font-bold mb-8 leading-tight min-h-[64px]">{title}</h3>

                <div className="mt-auto space-y-4">
                    {/* User Message */}
                    <div className="bg-[#1A1A1A] rounded-2xl rounded-tl-sm p-4 text-sm text-gray-300 relative border border-white/5">
                        <div className="flex items-center gap-2 mb-2">
                            <img src={avatar} alt={userName} className="w-5 h-5 rounded-full bg-gray-700" />
                            <span className="font-bold text-gray-400 text-xs">{userName}</span>
                        </div>
                        {userMsg}
                    </div>

                    {/* Agent Message */}
                    <div className="bg-[#1A1A1A] rounded-2xl rounded-tr-sm p-4 text-sm text-gray-300 relative border border-white/5 shadow-2xl">
                        <div className="absolute -left-1 top-4 w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-500 rounded-r-lg" />
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-5 h-5 rounded bg-gradient-to-br from-pink-500 to-blue-500 flex items-center justify-center"><Sparkles size={10} className="text-white" /></div>
                            <span className="font-bold text-white text-xs">Agent</span>
                        </div>
                        <div className="mb-2">{agentMsg}</div>

                        {hasLink && (
                            <div className="bg-[#222] rounded flex items-center gap-2 p-2 mt-2 text-xs border border-white/10">
                                <div className="w-4 h-4 bg-[#F24E1E] rounded flex items-center justify-center"><span className="text-white font-bold text-[8px]">F</span></div>
                                <span className="text-white font-medium">Spring Campaign Logo</span>
                            </div>
                        )}

                        {hasTask && (
                            <div className="bg-[#222] rounded p-2 mt-2 text-xs border border-white/10 space-y-1">
                                <div className="flex items-center gap-2 text-white font-medium"><div className="w-2 h-2 rounded-full bg-gray-500" /> Fix discount code issue</div>
                                <div className="text-gray-500 pl-4">Priority: <span className="text-red-400">High</span></div>
                                <div className="text-gray-500 pl-4">Assignee: <span className="text-blue-400">@Ashley</span></div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

function AppIcon({ Icon, color }: any) {
    return (
        <div className="w-10 h-10 bg-[#1A1A1A] rounded-lg flex items-center justify-center border border-white/5 hover:bg-[#222] transition-colors">
            <Icon size={20} className={color} />
        </div>
    )
}
