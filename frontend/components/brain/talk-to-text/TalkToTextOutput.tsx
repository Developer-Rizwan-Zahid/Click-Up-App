"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Feather, Check, Clock } from "lucide-react";

const scenarios = [
    {
        id: "sales",
        label: "Sales",
        title: "Cold Outreach Email",
        timestamp: "09:41 AM",
        content: "Draft a cold email to the VP of Marketing at Acme Corp. Mention their recent Series B funding and how our AI solution can help scale their content operations.",
        output: "Hi [Name], Congrats on the Series B! 🚀 I saw you're scaling the marketing team and wanted to share how our AI agent can cut your content production time by 50%..."
    },
    {
        id: "creators",
        label: "Content Creators",
        title: "Video Script Outline",
        timestamp: "02:15 PM",
        content: "Create an outline for a 60-second TikTok video about the 3 biggest mistakes people make when working from home.",
        output: "Title: WFH Fails 🤦‍♂️\nHook: Stop working from your bed!\nPoint 1: The Ergonomic Nightmare\nPoint 2: The 'Always On' Trap\nPoint 3: The Social Isolation..."
    },
    {
        id: "pm",
        label: "Project Management",
        title: "Team Update: New Sprint Planning Process",
        timestamp: "10:30 AM",
        content: "Team Update: We're implementing some exciting changes to our sprint planning process based on your feedback.",
        output: "Hey everyone!\n\nWe're implementing some exciting changes to our sprint planning process based on your feedback. The goal is to reduce meeting time and increase focus hours..."
    },
    {
        id: "execs",
        label: "Executives",
        title: "Quarterly All-Hands Speech",
        timestamp: "11:00 AM",
        content: "Outline the key talking points for the Q3 All-Hands meeting. Focus on the 20% YoY growth and the new strategic partnership.",
        output: "Team, Q3 was phenomenal. We hit 20% YoY growth 📈. The new partnership is a game-changer. Let's keep this momentum..."
    },
    {
        id: "universal",
        label: "Universal",
        title: "Quick Note",
        timestamp: "04:20 PM",
        content: "Remind me to pick up dry cleaning and buy milk on the way home.",
        output: "- Pick up dry cleaning 👔\n- Buy milk 🥛"
    }
];

export const TalkToTextOutput = () => {
    const [activeTab, setActiveTab] = useState("pm");
    const activeScenario = scenarios.find(s => s.id === activeTab) || scenarios[2];

    return (
        <section className="py-32 px-4 bg-black text-white relative">
            <div className="container mx-auto max-w-6xl">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-medium border border-white/10 mb-8 backdrop-blur-sm">
                        <Feather size={14} className="text-white" />
                        <span>Effortless output</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1]">
                        Write <span className="bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent">{activeScenario.title.split(":")[0].toLowerCase().includes("team") ? "team announcements" : activeScenario.label.toLowerCase()}</span><br />
                        4x faster, without typing
                    </h2>
                    <p className="text-xl text-gray-400 font-medium">
                        Now your work flows effortlessly, perfectly polished – anytime, anywhere
                    </p>
                </div>

                {/* Interactive Demo UI */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10 rounded-3xl overflow-hidden bg-[#121214]">

                    {/* Left Sidebar (Tabs) */}
                    <div className="lg:col-span-4 bg-[#0f0f10] border-r border-white/10 p-8 flex flex-col justify-center gap-2 relative">
                        {/* Faded Top/Bottom effect */}
                        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0f0f10] to-transparent pointer-events-none z-10" />
                        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0f0f10] to-transparent pointer-events-none z-10" />

                        {scenarios.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`text-2xl font-bold py-4 px-6 text-left transition-all duration-300 rounded-xl relative z-20 ${activeTab === item.id
                                        ? "text-white scale-105 origin-left"
                                        : "text-gray-700 hover:text-gray-500 hover:bg-white/5"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Right Content Area */}
                    <div className="lg:col-span-8 bg-[#121214] p-8 md:p-12 min-h-[500px] flex flex-col relative">

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="flex-1"
                            >
                                {/* Chat/List Interface Mock */}
                                <div className="space-y-8">

                                    {/* Previous Messages (Static Mock) */}
                                    <div className="flex justify-between items-center text-gray-600 text-xs font-mono border-b border-white/5 pb-4">
                                        <span>10:00 AM &nbsp; Announce new project management tool rollout.</span>
                                        <span>00:14s</span>
                                    </div>
                                    <div className="flex justify-between items-center text-gray-600 text-xs font-mono border-b border-white/5 pb-4">
                                        <span>10:15 AM &nbsp; Share updated sprint planning process with team.</span>
                                        <span>00:09s</span>
                                    </div>

                                    {/* Active Output */}
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-2 text-white font-bold text-sm">
                                                <Clock size={16} className="text-white" />
                                                <span>{activeScenario.timestamp}</span>
                                                <span className="text-purple-400 ml-2">🚀 {activeScenario.title}</span>
                                            </div>
                                            <span className="text-gray-500 text-xs font-mono">00:25s</span>
                                        </div>

                                        <div className="pl-6 border-l-2 border-white/10 space-y-4">
                                            <p className="text-xl text-white leading-relaxed font-light">
                                                {/* Typing Effect Container */}
                                                <TypingEffect text={activeScenario.output} />
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        </AnimatePresence>

                    </div>

                </div>
            </div>
        </section>
    );
};

// Simple Typing Effect Component
const TypingEffect = ({ text }: { text: string }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        setDisplayedText("");
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                setDisplayedText((prev) => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(interval);
            }
        }, 20); // Typing speed
        return () => clearInterval(interval);
    }, [text]);

    return (
        <span>
            {displayedText}
            <span className="animate-pulse ml-1 inline-block w-0.5 h-5 bg-purple-500 align-middle" />
        </span>
    );
};
