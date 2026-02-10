"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Search, ArrowRight, Bot, Sparkles, MessageSquare, FileText, Zap, PenTool } from "lucide-react";
import { cn } from "@/lib/utils";

export const MakeAiYourOwn = () => {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-24">
            <h2 className="text-sm font-bold text-gray-500 mb-8 uppercase tracking-widest pl-2">Make AI Your Own</h2>

            <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-16 relative overflow-hidden">

                {/* Left: Configuration */}
                <div className="space-y-8 relative z-10">
                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                        <h3 className="text-lg font-bold text-gray-300 uppercase tracking-wider">Your Super Agents</h3>
                        <span className="text-xs text-white font-mono">0 SELECTED</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                        <AgentSelector icon={Bot} label="Project Manager" color="text-pink-400" />
                        <AgentSelector icon={MessageSquare} label="Autonomous Answers" color="text-blue-400" />
                        <AgentSelector icon={Zap} label="Campaign Manager" color="text-yellow-400" />
                        <AgentSelector icon={FileText} label="Content Reviewer" color="text-green-400" />

                        <AgentSelector icon={PenTool} label="Brand Copywriter" color="text-orange-400" />
                        <AgentSelector icon={MessageSquare} label="Standup Writer" color="text-cyan-400" />
                        <AgentSelector icon={Sparkles} label="Quality Checker" color="text-purple-400" />
                        <AgentSelector icon={Bot} label="Deadline Guardian" color="text-red-400" />
                    </div>

                    <button className="w-full bg-[#5D5FEF] hover:bg-[#4D4EDF] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors">
                        Next <ArrowRight size={16} />
                    </button>

                    {/* Collapsed Sections */}
                    <div className="space-y-4">
                        <div className="border-b border-white/10 pb-2 flex justify-between items-center opacity-50">
                            <span className="text-xs font-bold text-white uppercase tracking-wider">AI Tools</span>
                            <span className="text-[10px] text-white font-mono">0 SELECTED</span>
                        </div>
                        <div className="border-b border-white/10 pb-2 flex justify-between items-center opacity-50">
                            <span className="text-xs font-bold text-white uppercase tracking-wider">Your Workflows</span>
                            <span className="text-[10px] text-white font-mono">0 SELECTED</span>
                        </div>
                        <div className="border-b border-white/10 pb-2 flex justify-between items-center opacity-50">
                            <span className="text-xs font-bold text-white uppercase tracking-wider">Your Data</span>
                            <span className="text-[10px] text-white font-mono">0 SELECTED</span>
                        </div>
                    </div>
                </div>

                {/* Right: 3D Visualization */}
                <div className="relative flex items-center justify-center perspective-1000 min-h-[400px]">
                    <div className="relative transform-style-3d rotate-x-60 rotate-z-45">
                        {/* Stack Layers */}
                        <StackLayer color="bg-gray-800" label="Your Data" z={0} />
                        <StackLayer color="bg-gray-800" label="Your Workflows" z={40} />
                        <StackLayer color="bg-gray-800" label="AI Tools" z={80} />
                        <StackLayer color="bg-[#A855F7]" label="Your Agents" z={120} active />

                        {/* Floating Icons for Active Layer */}
                        <div className="absolute inset-0 z-[130] transform translate-z-[130px] flex items-center justify-center pointer-events-none">
                            <div className="grid grid-cols-2 gap-4 opacity-80">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                                        <Bot size={16} className="text-white" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

function AgentSelector({ icon: Icon, label, color }: any) {
    const [selected, setSelected] = useState(false);
    return (
        <div
            onClick={() => setSelected(!selected)}
            className={cn(
                "aspect-square rounded-xl p-3 border cursor-pointer transition-all flex flex-col justify-between group relative overflow-hidden",
                selected ? "bg-white/10 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)]" : "bg-black border-white/10 hover:border-white/20"
            )}
        >
            <div className="flex justify-between items-start">
                <Icon size={18} className={color} />
                <div className={cn("w-3 h-3 rounded border border-white/20", selected && "bg-purple-500 border-purple-500")} />
            </div>
            <span className="text-gray-300 font-medium leading-tight group-hover:text-white transition-colors">{label}</span>
        </div>
    )
}

function StackLayer({ color, label, z, active }: any) {
    return (
        <div
            className={cn(
                "absolute w-64 h-64 rounded-3xl shadow-2xl flex items-center justify-center border transition-all duration-500",
                active ? "border-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,0.2)]" : "border-white/5 opacity-40 grayscale"
            )}
            style={{
                backgroundColor: active ? '#9333ea' : '#1f2937', // fallback colors
                transform: `translateZ(${z}px)`,
            }}
        >
            {/* Top face visual content */}
            <div className={cn("text-xs font-bold uppercase tracking-widest transform -rotate-45", active ? "text-white" : "text-gray-400")}>
                {label}
            </div>

            {/* Simulated 3D sides */}
            {active && (
                <>
                    <div className="absolute inset-x-0 bottom-0 h-4 bg-purple-900/50 blur-sm transform translate-y-2 translate-z-[-1px]" />
                </>
            )}
        </div>
    )
}
