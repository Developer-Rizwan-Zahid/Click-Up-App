"use client";

import { analyseComplexValue, motion } from "framer-motion";
import { Bot, MessageSquare, Mic, AppWindow, Command, Github, Trello, Slack, Mail, FileText, Database, Globe } from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const AccessibleAnywhere = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            title: "Copilot",
            desc: "Sidebar AI that anticipates your next move",
            icon: Bot
        },
        {
            title: "Mention Anywhere",
            desc: "Instant context and answers wherever you @tag",
            icon: MessageSquare
        },
        {
            title: "Desktop App",
            desc: "AI on your Mac or PC, always with you and synced",
            icon: AppWindow
        },
        {
            title: "Voice to Text",
            desc: "Never use your keyboard ever again",
            icon:  Mic
        }
    ];

    return (
        <section className="py-32 bg-black overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-gray-300 mb-6 tracking-wide">
                        <SparklesIcon />
                        <span>All-in-one AI, right where you work</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-white">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Accessible from anywhere –</span>
                        <br />
                        connected to your work and apps.
                    </h2>
                </div>

                {/* Main Visual Component */}
                <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden relative">

                    {/* Background Grid/Glow */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />

                    <div className="relative min-h-[600px] flex items-center justify-center py-20">
                        {/* Orbiting Icons */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <OrbitingIcons />
                        </div>

                        {/* Central Interface Mockup */}
                        <div className="relative z-10 w-full max-w-2xl bg-[#1E1E1E]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-700">
                            {/* Fake Window Controls */}
                            <div className="h-10 bg-white/5 border-b border-white/5 flex items-center justify-between px-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="text-[10px] uppercase font-bold text-gray-500">Connected 12 Apps</div>
                            </div>

                            {/* Chat Interface */}
                            <div className="p-6 space-y-6">
                                {/* Message Bubble (User) */}
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0" />
                                    <div className="space-y-2 flex-1">
                                        <div className="bg-white/5 rounded-2xl rounded-tl-none p-4 max-w-[80%] border border-white/5">
                                            <p className="text-gray-200 text-sm">
                                                <span className="text-blue-400">@Brain</span> summarize the latest customer tickets regarding the login issue.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Message Bubble (AI) */}
                                <div className="flex gap-4 flex-row-reverse">
                                    <div className="w-8 h-8 rounded-md bg-[#5D5FEF] flex items-center justify-center flex-shrink-0">
                                        <Bot size={18} className="text-white" />
                                    </div>
                                    <div className="space-y-2 flex-1 flex flex-col items-end">
                                        <div className="bg-[#5D5FEF]/10 rounded-2xl rounded-tr-none p-4 max-w-[90%] border border-[#5D5FEF]/20 text-left">
                                            <p className="text-gray-300 text-sm mb-3">
                                                I found 15 relevant tickets from Slack, Intercom, and Email in the last 24 hours.
                                            </p>
                                            <div className="bg-black/40 rounded-lg p-3 space-y-2 mb-3">
                                                <div className="flex items-center gap-2 text-xs text-gray-400">
                                                    <Slack size={12} className="text-orange-400" />
                                                    <span>#support-channel</span>
                                                </div>
                                                <div className="text-xs text-white font-medium">User cannot login via SSO</div>
                                            </div>
                                            <div className="flex gap-2">
                                                <button className="bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg text-xs text-white transition-colors">Create Task</button>
                                                <button className="bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg text-xs text-white transition-colors">Reply to all</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Input Area */}
                            <div className="p-4 border-t border-white/5 bg-black/20">
                                <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-3 flex items-center gap-3">
                                    <div className="w-6 h-6 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center">
                                        <Command size={14} />
                                    </div>
                                    <span className="text-gray-500 text-sm">Ask AI anything...</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Footer Tabs */}
                    <div className="grid grid-cols-4 border-t border-white/10 divide-x divide-white/10 bg-white/5 backdrop-blur-sm">
                        {tabs.map((tab, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={cn(
                                    "p-6 text-left transition-colors duration-300 hover:bg-white/5 relative group",
                                    activeTab === idx ? "bg-white/[0.07]" : ""
                                )}
                            >
                                {activeTab === idx && <div className="absolute top-0 left-0 right-0 h-1 bg-white shadow-[0_0_10px_white]" />}
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-white font-bold text-sm lg:text-base">{tab.title}</h3>
                                    <p className="text-gray-500 text-xs lg:text-sm leading-relaxed">{tab.desc}</p>
                                </div>
                            </button>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

const SparklesIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
        <path d="M12 2L14.3636 9.63636L22 12L14.3636 14.3636L12 22L9.63636 14.3636L2 12L9.63636 9.63636L12 2Z" fill="currentColor" />
    </svg>
)

const OrbitingIcons = () => {
    return (
        <div className="relative w-[800px] h-[800px] flex items-center justify-center opacity-40 pointer-events-none">
            {/* Circles */}
            <div className="absolute w-[400px] h-[400px] border border-white/10 rounded-full" />
            <div className="absolute w-[600px] h-[600px] border border-white/5 rounded-full" />

            {/* Icons Positioned */}
            <AppIcon icon={Slack} className="absolute top-[100px] right-[200px] text-[#E01E5A]" />
            <AppIcon icon={Github} className="absolute bottom-[200px] left-[150px] text-white" />
            <AppIcon icon={Database} className="absolute top-[50px] left-[300px] text-blue-400" />
            <AppIcon icon={Mail} className="absolute bottom-[100px] right-[250px] text-yellow-400" />
            <AppIcon icon={Globe} className="absolute top-[300px] left-[50px] text-green-400" />
            <AppIcon icon={Trello} className="absolute top-[300px] right-[50px] text-blue-500" />
        </div>
    )
}

const AppIcon = ({ icon: Icon, className }: { icon: any, className: string }) => (
    <div className={cn("p-3 bg-[#1E1E1E] border border-white/10 rounded-2xl shadow-xl", className)}>
        <Icon size={24} />
    </div>
)
