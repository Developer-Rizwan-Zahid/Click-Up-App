'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Target, Rocket, Users } from 'lucide-react';

const tabs = [
    {
        id: 'pm',
        label: 'Project Management',
        icon: <Briefcase className="w-5 h-5" />,
        title: 'Ship projects faster with unified schedules',
        description: 'Visualise project timelines, set milestones, and track progress alongside your team\'s availability. No more switching between apps to see if you\'re on track.',
        mockupColor: 'bg-blue-600/10'
    },
    {
        id: 'marketing',
        label: 'Marketing',
        icon: <Target className="w-5 h-5" />,
        title: 'Plan campaigns with precise timing',
        description: 'Manage content calendars, campaign launches, and event schedules in a single place. Ensure every asset is delivered on time with automated reminders.',
        mockupColor: 'bg-purple-600/10'
    },
    {
        id: 'sales',
        label: 'Sales',
        icon: <Rocket className="w-5 h-5" />,
        title: 'Close deals with automated scheduling',
        description: 'Sync your sales calls, follow-ups, and demos. Use integrated scheduling links to make it effortless for prospects to find time with you.',
        mockupColor: 'bg-orange-600/10'
    },
    {
        id: 'agencies',
        label: 'Agencies',
        icon: <Users className="w-5 h-5" />,
        title: 'Manage client work with total visibility',
        description: 'Track billable hours, manage client meetings, and provide transparency across multiple projects with secure, shareable calendar views.',
        mockupColor: 'bg-green-600/10'
    }
];

export default function CalendarTabs() {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <section className="py-32 bg-zinc-50/50 overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-4">Built for every team</h2>
                </div>

                <div className="flex flex-col items-center">
                    {/* Tab Navigation */}
                    <div className="flex flex-wrap justify-center gap-2 mb-16 p-1.5 bg-white rounded-2xl shadow-sm border border-zinc-100">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${activeTab.id === tab.id
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                                        : 'text-zinc-500 hover:bg-zinc-50'
                                    }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Content Display */}
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-square lg:aspect-video rounded-[3rem] overflow-hidden bg-white shadow-2xl border border-zinc-100 p-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5 }}
                                    className={`w-full h-full rounded-[2rem] ${activeTab.mockupColor} p-10 flex flex-col justify-between`}
                                >
                                    <div className="space-y-4">
                                        <div className="h-4 w-32 bg-white rounded-full shadow-sm" />
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="h-20 bg-white rounded-2xl shadow-sm" />                                            <div className="h-20 bg-white rounded-2xl shadow-sm" />
                                        </div>
                                    </div>
                                    <div className="h-32 bg-white rounded-2xl shadow-sm w-full" />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="space-y-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h3 className="text-3xl md:text-4xl font-black text-zinc-900 mb-6 leading-tight">
                                        {activeTab.title}
                                    </h3>
                                    <p className="text-xl text-zinc-500 font-medium leading-relaxed">
                                        {activeTab.description}
                                    </p>
                                    <div className="mt-10 pt-10 border-t border-zinc-100 flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                                            <Rocket className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-zinc-900">Try {activeTab.label} Templates</p>
                                            <p className="text-sm text-zinc-500">Get started in seconds</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
