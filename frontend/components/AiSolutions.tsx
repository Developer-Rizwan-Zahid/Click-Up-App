"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = ["Projects", "Marketing", "Product & Eng", "IT", "HR", "Leadership"];

export const AiSolutions = () => {
    const [activeTab, setActiveTab] = useState("Projects");

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-black text-[#292D34] mb-4 tracking-tight">
                        AI solutions for every <span className="text-gray-400 decoration-gray-300 underline decoration-2 underline-offset-4">team</span>
                    </h2>
                    <p className="text-gray-500 font-medium text-lg">Your key workflows, powered by ClickUp Agents.</p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-bold transition-all border",
                                activeTab === tab
                                    ? "bg-blue-500 text-white border-blue-500 shadow-md transform scale-105"
                                    : "bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                            )}
                        >
                            {tab}
                        </button>
                    ))}
                    <button className="px-6 py-2 rounded-full text-sm font-bold bg-white text-gray-400 border border-dashed border-gray-300 hover:border-gray-400 transition-all">
                        See all teams
                    </button>
                </div>

                {/* Content Card */}
                <div className="bg-[#F8F9FA] rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">

                    {/* Left Column: Text */}
                    <div className="flex-1 space-y-8">
                        <motion.div
                            key={activeTab} // Animate on tab change
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-3xl md:text-4xl font-bold text-[#292D34] leading-tight mb-4">
                                Deliver projects on time,<br />
                                <span className="text-gray-400">every time</span>
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Get your team, department, and company running smoothly with the industry's best project management solution.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">REPLACES</div>
                                <div className="flex gap-2 mb-6 opacity-50 grayscale">
                                    {/* Fake logos for "Replaces" */}
                                    <div className="w-6 h-6 bg-gray-300 rounded" />
                                    <div className="w-6 h-6 bg-gray-300 rounded" />
                                    <div className="w-6 h-6 bg-gray-300 rounded" />
                                </div>
                                <div className="space-y-2">
                                    <CheckItem text="Manage complex projects at scale"/>
                                    <CheckItem text="Bring strategic initiatives to life"/>
                                    <CheckItem text="Detect and mitigate project risks"/>
                                </div>
                            </div>
                        </motion.div>
                    </div>


                    {/* Right Column: Agents List */}
                    <div className="flex-1 space-y-4">
                        <AgentCard
                        color="bg-blue-100"
                        emoji="👷"
                        title="Intake Agent"
                        desc="standardizes projects kickoff"
                        />
                        <AgentCard
                            color="bg-yellow-100"
                            emoji="👷"
                            title="Assign Agent"
                            desc="determines task owners"
                        />
                        <AgentCard
                            color="bg-red-100"
                            emoji="👩‍💼"
                            title="PM Agent"
                            desc="tracks deliverables + timelines"
                        />
                        <AgentCard
                            color="bg-orange-100"
                            emoji="🙋‍♂️"
                            title="Live Answers Agent"
                            desc="keeps everyone informed"
                        />

                        <div className="pt-4">
                            <button className="bg-[#292D34] text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-black transition-colors">
                                Explore solution <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

function CheckItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3 text-gray-600 font-medium">
            <div className="text-blue-500"><CheckCircle2 size={18} /></div>
            {text}
        </div>
    )
}

function AgentCard({ color, emoji, title, desc }: any) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer hover:shadow-md transition-all"
        >
            <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-inner", color)}>
                {emoji}
            </div>
            <div>
                <span className="font-bold text-gray-800">{title}</span> <span className="text-gray-500">{desc}</span>
            </div>
        </motion.div>
    )
}
