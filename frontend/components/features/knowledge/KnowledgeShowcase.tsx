'use thought';
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles,
    Share2,
    Layers,
    Edit3,
    FileText,
    Layout,
    UploadCloud
} from 'lucide-react';

const tabs = [
    {
        id: 'ai',
        label: 'Powered by AI',
        icon: <Sparkles className="w-4 h-4" />,
        title: 'Get instant AI-powered answers',
        description: "Ask anything about your company knowledge and get accurate, sourced answers in seconds. AI scans your docs, wikis, and tasks so you don't have to.",
        mockupColor: 'bg-purple-50',
        borderColor: 'border-purple-200'
    },
    {
        id: 'imports',
        label: 'Secure Imports',
        icon: <UploadCloud className="w-4 h-4" />,
        title: 'Migrate with confidence',
        description: 'Easily import your knowledge from Notion, Confluence, Google Docs, and more. Your formatting and hierarchy stay intact.',
        mockupColor: 'bg-blue-50',
        borderColor: 'border-blue-200'
    },
    {
        id: 'templates',
        label: 'Wiki Templates',
        icon: <Layers className="w-4 h-4" />,
        title: 'Start fast with templates',
        description: 'Choose from dozens of pre-built templates for company wikis, employee onboarding, meeting notes, and project documentation.',
        mockupColor: 'bg-green-50',
        borderColor: 'border-green-200'
    },
    {
        id: 'hub',
        label: 'Docs Hub',
        icon: <Layout className="w-4 h-4" />,
        title: 'Your central home for Docs',
        description: 'Organize and manage all your documents in one searchable, filterable hub. Never lose a doc again.',
        mockupColor: 'bg-indigo-50',
        borderColor: 'border-indigo-200'
    }
];

export default function KnowledgeShowcase() {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <section className="py-24 bg-zinc-50/50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 items-start max-w-7xl mx-auto">
                    {/* Left: Interactive Sidebar */}
                    <div className="w-full lg:w-[400px] shrink-0 space-y-4">
                        <div className="mb-10">
                            <h2 className="text-4xl font-bold text-zinc-900 mb-6 leading-tight">
                                One platform for all your <span className="text-purple-600">knowledge</span>
                            </h2>
                            <p className="text-zinc-500 font-medium leading-relaxed">
                                Move your team's collective brain out of scattered tools and into one connected workspace.
                            </p>
                        </div>

                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab)}
                                className={`w-full flex items-center gap-4 p-5 rounded-3xl text-left transition-all duration-300 border ${activeTab.id === tab.id
                                    ? `bg-white shadow-xl ${tab.borderColor} border-opacity-100`
                                    : 'bg-transparent border-transparent hover:bg-zinc-100 border-opacity-0'
                                    }`}
                            >
                                <div className={`p-2.5 rounded-xl ${activeTab.id === tab.id ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-400 border border-zinc-100'
                                    }`}>
                                    {tab.icon}
                                </div>
                                <div>
                                    <div className={`font-bold text-sm ${activeTab.id === tab.id ? 'text-zinc-900' : 'text-zinc-500'
                                        }`}>
                                        {tab.label}
                                    </div>
                                    {activeTab.id === tab.id && (
                                        <motion.p
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            className="text-xs text-zinc-500 mt-1 font-medium leading-tight line-clamp-2"
                                        >
                                            {tab.description}
                                        </motion.p>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Right: Dynamic Mockup Display */}
                    <div className="flex-1 w-full flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className={`w-full aspect-[4/3] rounded-[3rem] p-12 border ${activeTab.borderColor} ${activeTab.mockupColor} relative overflow-hidden shadow-2xl shadow-zinc-200/50`}
                            >
                                {/* Mock UI Header */}
                                <div className="flex items-center justify-between mb-10">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-white rounded-2xl shadow-sm border border-zinc-100">
                                            {activeTab.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-zinc-900">{activeTab.title}</h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Active System</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-zinc-200`} />
                                        ))}
                                    </div>
                                </div>

                                {/* Mock UI Content Area */}
                                <div className="space-y-6">
                                    <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-sm border border-white/20">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-1.5 h-6 bg-purple-500 rounded-full" />
                                            <span className="font-bold text-zinc-900">Project Strategy Document</span>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="h-2 w-full bg-zinc-100 rounded-full" />
                                            <div className="h-2 w-5/6 bg-zinc-100 rounded-full" />
                                            <div className="h-2 w-4/6 bg-zinc-100 rounded-full" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="bg-white/40 backdrop-blur rounded-2xl p-6 border border-white/10 h-32">
                                            <div className="w-8 h-8 bg-white rounded-lg mb-3" />
                                            <div className="h-2 w-full bg-zinc-200/50 rounded-full" />
                                        </div>
                                        <div className="bg-white/40 backdrop-blur rounded-2xl p-6 border border-white/10 h-32">
                                            <div className="w-8 h-8 bg-white rounded-lg mb-3" />
                                            <div className="h-2 w-full bg-zinc-200/50 rounded-full" />
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative floating elements */}
                                <motion.div
                                    animate={{ y: [0, 20, 0] }}
                                    transition={{ duration: 5, repeat: Infinity }}
                                    className="absolute bottom-10 right-10 w-24 h-24 bg-white/40 backdrop-blur rounded-full border border-white/20"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
