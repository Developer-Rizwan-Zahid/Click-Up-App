"use client";

import { motion } from "framer-motion";
import { X, Check, MessageSquare, FileText, Zap, Search, Bell, Copy, List, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function ChatComparison() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="py-32 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

                {/* 1. The Broken State */}
                <div className="mb-40 relative">
                    {/* Connection Line */}
                    <div className="absolute left-[20px] md:left-[40px] top-12 bottom-0 w-[1px] bg-gradient-to-b from-red-500/50 via-red-500/20 to-transparent h-[150%]" />

                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        {/* Text Content */}
                        <div className="md:w-1/2 pl-12 md:pl-20 relative">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-[#1a1b1e] border border-red-500/30 flex items-center justify-center -ml-[20px] md:-ml-[40px] z-10">
                                <X className="w-5 h-5 text-red-500" />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                                    Chat is broken.
                                </h2>
                                <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
                                    Chat and work are in different apps, disconnected.
                                </p>
                            </motion.div>
                        </div>

                        {/* Visual: Chaotic Floating Icons */}
                        <div className="md:w-1/2 relative h-[400px] w-full">
                            <FloatingIconsVisual />
                        </div>
                    </div>
                </div>

                {/* 2. The Fixed State */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="absolute left-[20px] md:left-[40px] -top-32 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-green-500/50 to-green-500/20" />

                    <div className="pl-12 md:pl-20 relative">
                        {/* Header */}
                        <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-[#1a1b1e] border border-green-500/30 flex items-center justify-center -ml-[20px] md:-ml-[40px] z-10">
                            <Check className="w-5 h-5 text-green-500" />
                        </div>

                        <div className="max-w-3xl mb-16">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                                    We fixed it.
                                </h2>
                                <p className="text-xl text-slate-400 leading-relaxed">
                                    The everything app combines chat and work. <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold flex items-center gap-2 mt-2">
                                        With AI superpowers <Sparkles className="w-5 h-5 text-pink-400" />
                                    </span>
                                </p>
                            </motion.div>
                        </div>

                        {/* Feature Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <FeatureCard
                                icon={<MessageSquare className="w-5 h-5 text-white" />}
                                title="Work from Chat"
                                description="Create & manage work while messaging. Turn messages into tasks with one click."
                            />
                            <FeatureCard
                                icon={<FileText className="w-5 h-5 text-white" />}
                                title="Context always Connected"
                                description="Every conversation automatically linked to related tasks, docs, and chats."
                            />
                            <FeatureCard
                                icon={<Zap className="w-5 h-5 text-white" />}
                                title="AI Keeps Chat Manageable"
                                description="Get suggested answers, auto-created tasks, summarized threads, and more."
                            />
                        </div>

                        {/* Large Screenshot Visual / Video Player */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-[#0f1012] group cursor-pointer"
                            onClick={() => setIsPlaying(true)}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />

                            {!isPlaying ? (
                                <>
                                    <ChatScreenshotMockup />
                                    {/* Video Overlay */}
                                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white font-bold transition-all shadow-xl group-hover:shadow-2xl"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                                                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-black border-b-[5px] border-b-transparent ml-1" />
                                            </div>
                                            Watch Video
                                        </motion.button>
                                    </div>
                                </>
                            ) : (
                                <SimulatedVideoSequence />
                            )}
                        </motion.div>

                    </div>
                </div>


            </div>
        </section>
    );
}

function SimulatedVideoSequence() {
    return (
        <div className="w-full h-full relative overflow-hidden bg-[#111215]">
            {/* Container that pans and zooms */}
            <motion.div
                className="w-full h-full origin-top-left"
                initial={{ scale: 1, x: 0, y: 0 }}
                animate={{
                    scale: [1, 2, 2, 1],
                    x: ["0%", "-30%", "-15%", "0%"],
                    y: ["0%", "-20%", "-10%", "0%"]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.8, 1]
                }}
            >
                <ChatScreenshotMockup isAnimated={true} />
            </motion.div>

            {/* Overlay Cursor (Optional, adds realism) */}
            <motion.div
                className="absolute w-4 h-4 bg-white rounded-full pointer-events-none z-50 shadow-xl opacity-0"
                animate={{ opacity: [0, 1, 1, 0], x: [100, 300, 400], y: [200, 250, 150] }}
                transition={{ duration: 10, repeat: Infinity }}
            />
        </div>
    )
}

function FeatureCard({ icon, title, description }: any) {
    return (
        <div className="p-6 rounded-xl bg-[#151619] border border-white/5 hover:border-white/10 transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-[#1f2024] flex items-center justify-center mb-4 group-hover:bg-[#25262a] transition-colors">
                {icon}
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
        </div>
    )
}

function FloatingIconsVisual() {
    // Simulated icons with random movements to create "chaos"
    const icons = [
        { color: "bg-blue-500", label: "Task", delay: 0 },
        { color: "bg-purple-500", label: "Chat", delay: 0.5 },
        { color: "bg-green-500", label: "Docs", delay: 1 },
        { color: "bg-pink-500", label: "Mail", delay: 1.5 },
        { color: "bg-orange-500", label: "Cal", delay: 2 },
        { color: "bg-red-500", label: "Conf", delay: 2.5 },
    ];

    return (
        <div className="w-full h-full relative">
            {/* Central "Void" or Disconnect Visual */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-red-900/5 blur-3xl rounded-full" />
            </div>

            {icons.map((icon, i) => (
                <FloatingIcon key={i} {...icon} index={i} total={icons.length} />
            ))}
        </div>
    )
}

function FloatingIcon({ color, label, index, total }: any) {
    // Position icons in a circle
    const angle = (index / total) * 2 * Math.PI;
    const radius = 120; 
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    return (
        <motion.div
            className={`absolute left-1/2 top-1/2 w-14 h-14 ${color} rounded-2xl shadow-lg flex items-center justify-center text-white font-bold text-xs z-10 opacity-80`}
            initial={{ x, y }}
            animate={{
                x: [x, x + (Math.random() * 40 - 20), x],
                y: [y, y + (Math.random() * 40 - 20), y],
                rotate: [0, Math.random() * 20 - 10, 0],
                scale: [1, 1.1, 1]
            }}
            transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            {label}
        </motion.div>
    )
}

function ChatScreenshotMockup({ isAnimated = false }: { isAnimated?: boolean }) {
    return (
        <div className="w-full aspect-[16/9] bg-[#111215] flex text-slate-300 font-sans text-xs relative">
            {/* Sidebar */}
            <div className="w-64 border-r border-slate-800 bg-[#0F1014] p-4 hidden md:flex flex-col gap-4">
                <div className="flex items-center gap-2 text-white font-bold mb-4">
                    <MessageSquare className="w-4 h-4" /> Chat
                </div>
                <div className="space-y-1">
                    <div className="flex items-center gap-2 p-2 rounded bg-purple-500/10 text-white">
                        <div className="w-2 h-2 rounded-full bg-purple-500" /> Chat Product
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded hover:bg-slate-800/50">
                        Product Vision
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 flex flex-col">
                <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-lg"># Chat Product</span>
                        <span className="bg-slate-800 px-2 py-0.5 rounded text-[10px]">Public</span>
                    </div>
                </div>

                {/* Messages */}
                <div className="space-y-6">
                    <div className="flex gap-4 group">
                        <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center text-white font-bold">A</div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="font-bold text-white">Alexander</span>
                                <span className="text-slate-500">3:30 pm</span>
                            </div>
                            <div className="bg-[#1a1b1e] border border-slate-800 p-4 rounded-lg rounded-tl-none relative group-hover:border-slate-700 transition-colors">
                                <p className="mb-3">I also want to add that don&apos;t take the structure of the meeting as something that should be mandatory.</p>
                                <p>For example, if Silent feedback is irrelevant to your stage and you want more of a voice discussion...</p>

                                {
                                    /* Context Menu Mockup - Only show/animate if playing or hover */
                                }
                                <div className={`absolute top-2 right-[-140px] w-48 bg-[#1F2023] border border-slate-800 rounded-lg shadow-2xl p-1 z-20 flex flex-col gap-1 transition-opacity duration-300 ${isAnimated ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                    <div className="p-2 hover:bg-slate-700 rounded flex items-center gap-2 text-slate-300 cursor-pointer">
                                        <Copy className="w-3 h-3" /> Connect to
                                    </div>
                                    <div className="p-2 hover:bg-slate-700 rounded flex items-center gap-2 text-slate-300 cursor-pointer">
                                        <Check className="w-3 h-3" /> Create Task
                                    </div>
                                    <div className={`p-2 bg-purple-500/20 text-purple-400 rounded flex items-center gap-2 cursor-pointer font-medium ${isAnimated ? 'animate-pulse' : ''}`}>
                                        <Sparkles className="w-3 h-3" /> Create Task with AI
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-72 border-l border-slate-800 bg-[#0F1014] p-4 hidden lg:flex flex-col">
                <h3 className="font-bold text-white mb-4">Connections</h3>
                <div className="space-y-3">
                    <div className="p-3 bg-[#151619] border border-slate-800 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                            <span className="font-bold text-white">Login SSO Issues</span>
                        </div>
                        <div className="flex justify-between items-center text-[10px]">
                            <span className="bg-yellow-500/10 text-yellow-500 px-1 rounded">ON HOLD</span>
                            <span className="text-slate-500">Connected from thread</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
