"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Cpu, Layout, Users, Zap, Mail, History, Sparkles, Share2,
    CheckCircle2, Clock, MessageSquare, ArrowRight
} from "lucide-react";

const tabs = [
    {
        id: "ai-builder",
        label: "AI Builder",
        icon: Sparkles,
        title: "Build with ClickUp Brain",
        description: "Transform your ideas into automated workflows. Just describe your automation in plain English and watched it come to life.",
        color: "indigo"
    },
    {
        id: "templates",
        label: "Templates",
        icon: Layout,
        title: "100+ Prebuilt Templates",
        description: "Don't start from scratch. Choose from a library of ready-to-use automations for project management, CRM, and more.",
        color: "blue"
    },
    {
        id: "dynamic",
        label: "Dynamic Assignees",
        icon: Users,
        title: "Smart Resource Allocation",
        description: "Automatically assign tasks based on workload, priority, or specific expertise. Keep your team balanced and focused.",
        color: "purple"
    },
    {
        id: "integrations",
        label: "Integrations",
        icon: Share2,
        title: "Connect Your Tech Stack",
        description: "Trigger actions in Slack, GitHub, HubSpot, and 1,000+ other apps directly from ClickUp actions.",
        color: "pink"
    },
    {
        id: "audit",
        label: "Audit Logs",
        icon: History,
        title: "Complete Visibility",
        description: "Track every automation run with detailed history logs. Troubleshoot quickly and see exactly what happened and when.",
        color: "slate"
    }
];

export default function AutomationsTabs() {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* Left Side: Content Preview */}
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <div className="relative aspect-video bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden p-8 shadow-inner">
                            {/* Grid Pattern */}
                            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.4 }}
                                    className="relative z-10 h-full flex flex-col"
                                >
                                    <div className="mb-6 flex items-center gap-3">
                                        <div className={`p-3 rounded-2xl bg-${activeTab.color}-50 text-${activeTab.color}-600`}>
                                            <activeTab.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900">{activeTab.title}</h3>
                                    </div>

                                    <p className="text-slate-500 text-lg mb-8 max-w-md">
                                        {activeTab.description}
                                    </p>

                                    {/* Visual Representation */}
                                    <div className="mt-auto flex-1 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-6">
                                        <div className="flex items-center justify-between mb-6 border-b border-slate-50 pb-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live Automation</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="w-2 h-2 rounded-full bg-slate-100" />
                                                <div className="w-2 h-2 rounded-full bg-slate-100" />
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4 bg-slate-50/50 p-4 rounded-xl border border-dashed border-slate-200">
                                                <CheckCircle2 className={`w-5 h-5 text-${activeTab.color}-600`} />
                                                <div className="flex-1">
                                                    <div className="h-2 w-24 bg-slate-200 rounded-full mb-2" />
                                                    <div className="h-1.5 w-16 bg-slate-100 rounded-full" />
                                                </div>
                                            </div>
                                            <div className="flex justify-center">
                                                <div className={`w-px h-8 bg-gradient-to-b from-${activeTab.color}-600 to-transparent`} />
                                            </div>
                                            <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                                <Zap className={`w-5 h-5 text-${activeTab.color}-600`} />
                                                <div className="flex-1">
                                                    <div className={`h-2 w-32 bg-${activeTab.color}-200 rounded-full mb-2`} />
                                                    <div className="h-1.5 w-20 bg-slate-100 rounded-full" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right Side: Tab Controls */}
                    <div className="lg:col-span-5 order-1 lg:order-2 space-y-2">
                        <div className="mb-8">
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">See Automations in action</h2>
                            <p className="text-slate-500">Explore the different ways you can automate your work and save time.</p>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab)}
                                    className={`flex items-center gap-4 p-5 rounded-2xl border-2 transition-all text-left group ${activeTab.id === tab.id
                                            ? `bg-${tab.color}-50 border-${tab.color}-200`
                                            : 'bg-white border-transparent hover:bg-slate-50'
                                        }`}
                                >
                                    <div className={`p-3 rounded-xl transition-colors ${activeTab.id === tab.id
                                            ? `bg-${tab.color}-600 text-white shadow-lg shadow-${tab.color}-200`
                                            : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'
                                        }`}>
                                        <tab.icon className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <span className={`block font-bold mb-0.5 ${activeTab.id === tab.id ? `text-${tab.color}-900` : 'text-slate-700'
                                            }`}>
                                            {tab.label}
                                        </span>
                                        <span className="text-xs text-slate-400 font-medium">Click to preview</span>
                                    </div>
                                    <ArrowRight className={`w-4 h-4 transition-all ${activeTab.id === tab.id
                                            ? `text-${tab.color}-600 translate-x-0 opacity-100`
                                            : 'text-slate-300 -translate-x-2 opacity-0'
                                        }`} />
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
