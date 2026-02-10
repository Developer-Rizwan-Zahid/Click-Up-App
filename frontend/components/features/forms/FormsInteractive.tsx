'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Zap, LayoutDashboard } from 'lucide-react';

const tabs = [
    {
        id: 'ai',
        title: 'Connect to AI',
        icon: <Sparkles className="w-5 h-5" />,
        color: 'blue',
        content: {
            title: 'AI-powered insights from every response',
            description: 'ClickUp AI automatically analyzes form responses to identify sentiment, extract key trends, and summarize feedback so you can act faster.',
            mockup: (
                <div className="relative w-full h-full bg-zinc-900 rounded-3xl p-8 border border-white/10 overflow-hidden">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                            <Sparkles className="w-4 h-4 text-purple-400" />
                        </div>
                        <div className="h-3 w-32 bg-white/20 rounded" />
                    </div>
                    <div className="space-y-4">
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                            <div className="flex items-center justify-between mb-4">
                                <div className="h-3 w-40 bg-white/40 rounded" />
                                <div className="px-2 py-1 bg-green-500/20 text-green-400 text-[10px] font-bold rounded">POSITIVE SENTIMENT</div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 w-full bg-white/10 rounded" />
                                <div className="h-2 w-full bg-white/10 rounded" />
                                <div className="h-2 w-4/5 bg-white/10 rounded" />
                            </div>
                        </div>
                        <div className="p-4 bg-purple-500/10 rounded-2xl border border-purple-500/20">
                            <div className="text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-3">AI Summary</div>
                            <div className="h-3 w-full bg-purple-400/20 rounded" />
                            <div className="h-3 w-2/3 bg-purple-400/20 rounded mt-2" />
                        </div>
                    </div>
                </div>
            )
        }
    },
    {
        id: 'workflows',
        title: 'Connect to Workflows',
        icon: <Zap className="w-5 h-5" />,
        color: 'orange',
        content: {
            title: 'Turn submissions into instant actions',
            description: 'Link form responses directly to your tasks and workflows. Automatically assign owners, set priorities, and trigger status changes.',
            mockup: (
                <div className="relative w-full h-full bg-zinc-900 rounded-3xl p-8 border border-white/10 overflow-hidden">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-orange-400" />
                        </div>
                        <div className="h-3 w-40 bg-white/20 rounded" />
                    </div>
                    <div className="relative border-l-2 border-orange-500/30 pl-8 space-y-8">
                        <div className="p-4 bg-white/5 rounded-2xl border border-orange-500/20 relative">
                            <div className="absolute -left-[41px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-orange-500" />
                            <div className="text-[10px] font-bold text-orange-400 uppercase tracking-widest mb-2">Trigger</div>
                            <div className="h-4 w-48 bg-white/20 rounded" />
                        </div>
                        <div className="p-4 bg-white/5 rounded-2xl border border-blue-500/20 relative">
                            <div className="absolute -left-[41px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500" />
                            <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2">Action</div>
                            <div className="h-4 w-32 bg-white/20 rounded" />
                        </div>
                    </div>
                </div>
            )
        }
    },
    {
        id: 'views',
        title: 'Connect to Views',
        icon: <LayoutDashboard className="w-5 h-5" />,
        color: 'blue',
        content: {
            title: 'Visualize data in real-time',
            description: 'Send form data directly to Dashboards and Boards. Track trends, monitor KPIs, and get the big picture of your form performance.',
            mockup: (
                <div className="relative w-full h-full bg-zinc-900 rounded-3xl p-8 border border-white/10 overflow-hidden">
                    <div className="grid grid-cols-2 gap-4 h-full">
                        <div className="space-y-4">
                            <div className="h-32 bg-blue-500/10 rounded-2xl border border-blue-500/20 p-4 relative overflow-hidden">
                                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-500/20 to-transparent" />
                                <div className="h-2 w-16 bg-blue-400 rounded" />
                            </div>
                            <div className="h-24 bg-white/5 rounded-2xl border border-white/10 p-4">
                                <div className="flex gap-2">
                                    <div className="w-8 h-2 bg-white/10 rounded" />
                                    <div className="w-12 h-2 bg-white/10 rounded" />
                                </div>
                            </div>
                        </div>
                        <div className="h-full bg-white/5 rounded-2xl border border-white/10 p-6">
                            <div className="h-4 w-20 bg-white/20 rounded mb-6" />
                            <div className="space-y-4 text-center">
                                <div className="w-20 h-20 rounded-full border-4 border-blue-500/30 border-t-blue-500 mx-auto" />
                                <div className="h-3 w-16 bg-white/10 rounded mx-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
];

export default function FormsInteractive() {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-[64px] leading-[1.1] font-bold text-zinc-900 mb-6 tracking-tight"
                    >
                        Work <span className="text-blue-600">smarter</span>
                    </motion.h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left: Interactive Controls */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab)}
                                className={`w-full text-left p-8 rounded-[2rem] transition-all duration-500 border ${activeTab.id === tab.id
                                        ? 'bg-zinc-900 border-zinc-800 shadow-2xl'
                                        : 'bg-zinc-50 border-zinc-100 hover:bg-zinc-100'
                                    }`}
                            >
                                <div className="flex items-start gap-6">
                                    <div className={`mt-1 p-3 rounded-2xl ${activeTab.id === tab.id
                                            ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/20'
                                            : 'bg-white text-zinc-400 shadow-sm border border-zinc-100'
                                        }`}>
                                        {tab.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={`text-2xl font-bold mb-3 transition-colors ${activeTab.id === tab.id ? 'text-white' : 'text-zinc-900'
                                            }`}>
                                            {tab.title}
                                        </h3>
                                        <AnimatePresence mode="wait">
                                            {activeTab.id === tab.id && (
                                                <motion.p
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="text-zinc-400 font-medium leading-relaxed overflow-hidden"
                                                >
                                                    {tab.content.description}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Right: Mockup Display */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            key={activeTab.id}
                            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 0.8, type: 'spring' }}
                            className="aspect-[4/3] w-full"
                        >
                            {activeTab.content.mockup}
                        </motion.div>

                        {/* Background Decorative Glow */}
                        <div className={`absolute -inset-20 blur-[120px] opacity-20 transition-colors duration-1000 -z-10 ${activeTab.color === 'blue' ? 'bg-blue-500' : 'bg-orange-500'
                            }`} />
                    </div>
                </div>
            </div>
        </section>
    );
}
