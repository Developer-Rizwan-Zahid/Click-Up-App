"use client";

import { motion } from "framer-motion";
import { Search, BrainCircuit, RotateCcw, ArrowRight } from "lucide-react";

export const EnterpriseSearchFeatures = () => {
    return (
        <section className="bg-black py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-6">
                        <BrainCircuit size={14} /> AI Agents & Assistants
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 max-w-4xl mx-auto leading-tight">
                        Offload busywork to AI agents <br/>
                        and turbocharge output fivefold
                    </h2>
                    <div className="flex justify-center text-sm">
                        <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded-full hover:bg-white/5">
                            Get started <ArrowRight size={14} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                    {/* Feature 1 */}
                    <FeatureCard 
                        title="Search across all your tools and apps"
                        description="From Drive and Notion to Slack and Gmail - every app, connected and searchable from one place."
                        mockup={
                            <div className="w-full h-full bg-[#111] p-4 flex flex-col gap-2 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent" />
                                <div className="flex gap-2 mb-2">
                                     <div className="h-2 w-12 bg-white/10 rounded" />
                                     <div className="h-2 w-8 bg-white/5 rounded" />
                                </div>
                                <div className="space-y-2">
                                    {[1,2,3].map(i => (
                                        <div key={i} className="flex items-center gap-3 p-2 rounded bg-white/5 border border-white/5">
                                            <div className="w-6 h-6 rounded bg-white/10" />
                                            <div className="h-2 w-24 bg-white/10 rounded" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }
                    />

                    {/* Feature 2 */}
                    <FeatureCard 
                        title="Ask deep questions, get meaningful results."
                        description="Define workflows and triggers, then let Brain handle progress tracking and reports."
                        mockup={
                            <div className="w-full h-full bg-[#111] p-4 flex flex-col justify-center relative overflow-hidden">
                                <div className="border border-white/10 rounded-lg bg-[#161616] p-3 text-xs text-gray-400 mb-2">
                                    <span className="text-purple-400">@Brain</span> What are the brand guidelines?
                                </div>
                                <div className="border border-white/10 rounded-lg bg-[#1a1a1a] p-3 text-xs text-gray-300">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-4 h-4 rounded-full bg-purple-500" />
                                        <span className="font-bold text-white">Brain</span>
                                    </div>
                                    Here are the latest guidelines...
                                </div>
                            </div>
                        }
                    />

                    {/* Feature 3 */}
                    <FeatureCard 
                        title="Stay up-to-date, without hitting refresh"
                        description="Brain indexes content frequently, so your searches are up to the minute."
                        mockup={
                            <div className="w-full h-full bg-[#111] flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative w-32 h-32">
                                        {[0, 1, 2].map((i) => (
                                            <div key={i} className="absolute inset-0 bg-purple-500/20 rounded-full animate-ping" style={{ animationDelay: `${i * 0.5}s`, animationDuration: '3s' }} />
                                        ))}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <RotateCcw className="text-white animate-spin-slow" size={32} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    />
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ title, description, mockup }: any) => (
    <div className="bg-[#0E0E12] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors group flex flex-col">
        <div className="h-48 border-b border-white/5 relative bg-black/50 overflow-hidden">
             {mockup}
        </div>
        <div className="p-8 flex-1 flex flex-col">
            <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
        </div>
    </div>
);
