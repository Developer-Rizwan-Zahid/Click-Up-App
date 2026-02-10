'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Zap,
    Code2,
    Briefcase,
    LayoutList,
    Play
} from 'lucide-react';

const tabs = [
    {
        id: 'brainstorming',
        label: 'Brainstorming to execution',
        icon: <Zap className="w-4 h-4" />,
        videoUrl: 'https://www.youtube.com/embed/IjLWtKll3To?autoplay=1&mute=1'
    },
    {
        id: 'software',
        label: 'Software teams',
        icon: <Code2 className="w-4 h-4" />,
        videoUrl: 'https://www.youtube.com/embed/PzJZXwvYYkA?autoplay=1&mute=1'
    },
    {
        id: 'agencies',
        label: 'Agencies',
        icon: <Briefcase className="w-4 h-4" />,
        videoUrl: 'https://www.youtube.com/embed/31zn2yFdiE0?autoplay=1&mute=1'
    },
    {
        id: 'project',
        label: 'Project management',
        icon: <LayoutList className="w-4 h-4" />,
        videoUrl: 'https://www.youtube.com/embed/z1G5Z5k70WY?autoplay=1&mute=1'
    }
];

export default function WhiteboardsPossibilities() {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-16 px-4">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#7b68ee] font-bold tracking-[0.2em] text-[11px] uppercase mb-4 block"
                    >
                        BUILT FOR EVERY TEAM
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-[64px] leading-[1.1] font-bold text-zinc-900 mb-6 font-sans tracking-tight"
                    >
                        Endless possibilities
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-[20px] text-zinc-500 font-medium leading-[1.6] max-w-3xl mx-auto"
                    >
                        Whether you're brainstorming, planning, or executing, ClickUp Whiteboards adapt to your needs.
                    </motion.p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab)}
                            className={`flex items-center gap-2.5 px-6 py-3 rounded-full border-2 transition-all duration-300 font-bold text-sm ${activeTab.id === tab.id
                                    ? 'border-blue-500 bg-blue-50 text-blue-600 shadow-lg shadow-blue-500/10'
                                    : 'border-zinc-100 bg-white text-zinc-500 hover:border-zinc-200 hover:text-zinc-700'
                                }`}
                        >
                            <span className={activeTab.id === tab.id ? 'text-blue-500' : 'text-zinc-400'}>
                                {tab.icon}
                            </span>
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Video Stage */}
                <div className="max-w-6xl mx-auto relative px-4">c
                    <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-[3rem] blur-3xl opacity-50" />

                    <motion.div
                        key={activeTab.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative bg-white border border-zinc-100 rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] aspect-video group"
                    >
                        {/* Player Controls Mockup for Whiteboards feel */}
                        <div className="absolute top-6 left-6 z-20 flex gap-2">
                            <div className="px-4 py-2 bg-white/90 backdrop-blur shadow-sm border border-zinc-100 rounded-xl flex items-center gap-2 text-xs font-bold text-zinc-600">
                                <LayoutList className="w-3 h-3 text-indigo-500" /> Whiteboard
                            </div>
                        </div>

                        <iframe
                            src={activeTab.videoUrl}
                            className="w-full h-full border-0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />

                        {/* Additional Canvas Elements to mimic the screenshot */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 px-6 py-3 bg-white/90 backdrop-blur shadow-xl border border-zinc-100 rounded-2xl flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex gap-4">
                                <div className="w-6 h-6 rounded bg-zinc-100" />
                                <div className="w-6 h-6 rounded bg-zinc-100" />
                                <div className="w-6 h-6 rounded bg-zinc-100" />
                            </div>
                            <div className="w-px h-6 bg-zinc-200" />
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-purple-100" />
                                <div className="w-8 h-8 rounded-full bg-indigo-100" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
