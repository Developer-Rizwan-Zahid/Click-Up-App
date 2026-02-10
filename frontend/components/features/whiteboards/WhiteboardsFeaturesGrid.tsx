'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Zap,
    MousePointer2,
    Image as ImageIcon,
    MessageSquare,
    Share2,
    Layout,
    ChevronRight,
    ArrowUpRight,
    FileText,
    CheckCircle2
} from 'lucide-react';

const FeatureCard = ({ title, description, badge, image, index }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative bg-[#f9f9f9] rounded-[2.5rem] border border-zinc-100 overflow-hidden hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500 flex flex-col h-full"
        >
            <div className="p-8 lg:p-10 flex flex-col items-start gap-4">
                <h3 className="text-2xl lg:text-[28px] font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-zinc-500 text-lg leading-relaxed font-medium max-w-md">
                    {description}
                </p>
            </div>

            <div className="mt-auto relative w-full aspect-[4/3] bg-white border-t border-zinc-100 overflow-hidden">
                {image}

                {/* Floating Badge/UI elements for premium feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-50/50 to-transparent pointer-events-none" />
            </div>
        </motion.div>
    );
};

export default function WhiteboardsFeaturesGrid() {
    const features = [
        {
            title: "Integrated with ClickUp",
            description: "Whiteboards live alongside your tasks and projects. Turn concepts into reality faster than ever.",
            image: (
                <div className="w-full h-full p-8 flex flex-col justify-center items-center bg-zinc-50/30">
                    <div className="w-full max-w-[320px] bg-white rounded-2xl shadow-lg border border-zinc-100 p-6 space-y-4">
                        <div className="flex items-center gap-3 border-b border-zinc-50 pb-4">
                            <div className="w-8 h-8 rounded bg-orange-100 flex items-center justify-center text-orange-500">
                                <FileText className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-bold text-zinc-900">Roadmap</span>
                            <div className="ml-auto px-2.5 py-1 bg-indigo-600 text-white text-[10px] font-bold rounded flex items-center gap-1.5 cursor-pointer hover:bg-indigo-700 transition-colors">
                                <Zap className="w-3 h-3" /> Convert to task
                            </div>
                        </div>
                        <div className="p-6 bg-yellow-50/50 border-2 border-dashed border-yellow-200 rounded-xl relative">
                            <p className="text-sm font-bold text-zinc-800">Redesign Whiteboards feature</p>
                            <motion.div
                                animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -bottom-2 -right-2 transform translate-x-1/2 translate-y-1/2"
                            >
                                <div className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-lg flex items-center gap-1">
                                    <MousePointer2 className="w-3 h-3 fill-white" /> John Me
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Touch interface",
            description: "Feel your ideas come alive. Use intuitive gestures to sketch, draw, and build your vision with the touch of a finger.",
            image: (
                <div className="w-full h-full p-8 flex justify-center items-center bg-zinc-50/30">
                    <div className="relative w-full max-w-[360px] aspect-video">
                        <svg viewBox="0 0 400 200" className="w-full h-full drop-shadow-sm">
                            <rect x="20" y="40" width="120" height="60" rx="30" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                            <text x="80" y="75" textAnchor="middle" className="text-[10px] font-bold fill-zinc-600">Define app concept</text>

                            <line x1="140" y1="70" x2="260" y2="70" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4" />
                            <polygon points="265,70 255,65 255,75" fill="#cbd5e1" />

                            <rect x="260" y="40" width="120" height="60" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                            <text x="320" y="75" textAnchor="middle" className="text-[10px] font-bold fill-zinc-600">Review Wireframes</text>
                        </svg>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md rounded-full shadow-xl border border-zinc-100 p-2 flex gap-3">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className="w-6 h-6 rounded bg-zinc-100 hover:bg-indigo-50 transition-colors" />
                            ))}
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "AI image generation",
            description: "Turn text into stunning visuals, all within your Whiteboard built-in AI. No switching necessary.",
            image: (
                <div className="w-full h-full p-8 flex justify-center items-center bg-zinc-50/30">
                    <div className="w-full max-w-[340px] bg-white rounded-2xl shadow-xl border border-zinc-100 overflow-hidden">
                        <div className="p-4 bg-zinc-50 border-b border-zinc-100 flex items-center gap-2">
                            <Zap className="w-4 h-4 text-purple-500 fill-purple-500" />
                            <span className="text-xs font-bold text-zinc-900">AI Generator</span>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="bg-zinc-100/50 rounded-lg p-3">
                                <p className="text-[10px] text-zinc-500 font-medium italic">Generate an image of a fast moving software team collaborating...</p>
                            </div>
                            <div className="relative group">
                                <div className="w-full h-32 bg-indigo-50 rounded-xl overflow-hidden relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <ImageIcon className="w-8 h-8 text-indigo-200" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent" />
                                </div>
                                <motion.div
                                    animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute -top-2 -right-2"
                                >
                                    <Zap className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Work, chat, present—together",
            description: "No more switching apps. Brainstorm, discuss, and present in real-time without ever leaving your Whiteboard.",
            image: (
                <div className="w-full h-full p-8 flex justify-center items-center bg-zinc-50/30">
                    <div className="relative w-full max-w-[320px] bg-white rounded-2xl shadow-lg border border-zinc-100 p-6">
                        <div className="flex flex-col gap-6">
                            <div className="flex justify-between items-center">
                                <div className="w-12 h-12 rounded-full bg-blue-100" />
                                <div className="w-12 h-12 rounded-full bg-pink-100" />
                            </div>
                            <div className="flex justify-center">
                                <div className="relative">
                                    <div className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg shadow-xl mb-2 flex items-center gap-2">
                                        <MessageSquare className="w-3 h-3 fill-white" /> Here is the wireframe sketch
                                    </div>
                                    <span className="text-[10px] font-bold text-indigo-600 block text-center">Isabella</span>
                                </div>
                            </div>
                        </div>

                        {/* Cursor overlays */}
                        <div className="absolute top-1/4 right-1/4">
                            <div className="bg-emerald-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow flex items-center gap-1">
                                <MousePointer2 className="w-2 h-2 fill-white" /> Dean P.
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Effortless Sharing",
            description: "Share your Whiteboards instantly, embed them within ClickUp, or export to PDF to keep everyone in the loop.",
            image: (
                <div className="w-full h-full p-8 flex justify-center items-center bg-zinc-50/30">
                    <div className="w-48 bg-white rounded-xl shadow-2xl border border-zinc-100 overflow-hidden py-2">
                        <div className="px-4 py-2 group-hover:bg-zinc-50 transition-colors cursor-pointer flex items-center justify-between">
                            <span className="text-xs font-bold text-zinc-900">Export</span>
                            <ChevronRight className="w-3 h-3 text-zinc-400" />
                        </div>
                        <div className="px-4 py-2 bg-indigo-50/50 flex flex-col gap-1.5 border-l-2 border-indigo-600">
                            {['PNG', 'JPEG', 'SVG', 'PDF'].map((format, i) => (
                                <div key={i} className={`text-[10px] font-bold ${format === 'PDF' ? 'text-indigo-600' : 'text-zinc-500'}`}>
                                    {format}
                                </div>
                            ))}
                        </div>
                        <div className="px-4 py-2 hover:bg-zinc-50 transition-colors cursor-pointer text-xs font-bold text-zinc-900 border-t border-zinc-50 mt-1">
                            Archieve
                        </div>
                        <div className="px-4 py-2 hover:bg-zinc-50 transition-colors cursor-pointer text-xs font-bold text-red-500">
                            Delete
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Create projects from Whiteboards",
            description: "Turn your brainstorms into full-fledged projects on one click with ClickUp AI.",
            image: (
                <div className="w-full h-full p-8 flex justify-center items-center bg-zinc-50/30">
                    <div className="w-full max-w-[340px] bg-white rounded-2xl shadow-xl border border-zinc-100 overflow-hidden relative">
                        <div className="p-4 bg-indigo-600 flex items-center justify-between">
                            <span className="text-[11px] font-bold text-white">Create project from Whiteboard</span>
                            <Zap className="w-4 h-4 text-white fill-white animate-pulse" />
                        </div>
                        <div className="p-5 space-y-4">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                                    <div className="h-2 w-32 bg-zinc-100 rounded-full" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                                    <div className="h-2 w-24 bg-zinc-100 rounded-full" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 opacity-30" />
                                    <div className="h-2 w-40 bg-zinc-100 rounded-full" />
                                </div>
                            </div>
                            <div className="w-full h-8 bg-zinc-50 rounded-lg flex items-center justify-center border border-zinc-100">
                                <span className="text-[10px] font-bold text-zinc-400">Processing with ClickUp Brain...</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-20 px-4">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#7b68ee] font-bold tracking-[0.2em] text-[11px] uppercase mb-4 block"
                    >
                        EXECUTE YOUR VISION
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-[64px] leading-[1.1] font-bold text-zinc-900 mb-6 font-sans tracking-tight"
                    >
                        Get time back
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-[22px] text-zinc-500 font-medium leading-[1.6] max-w-3xl mx-auto"
                    >
                        Accelerate your workflow from concept to execution with a fully connected, virtual whiteboard.
                    </motion.p>
                </div>

                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                index={index}
                                {...feature}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

