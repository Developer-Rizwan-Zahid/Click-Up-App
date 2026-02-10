"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Search, ArrowRight, Bot, Sparkles, MessageSquare, FileText, Zap, PenTool } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { BrainStats } from "@/components/BrainStats";
import { ContextFeatures } from "@/components/brain/platform/ContextFeatures";
import { MakeAiYourOwn } from "@/components/brain/platform/MakeAiYourOwn";
import { AccessibleAnywhere } from "@/components/brain/platform/AccessibleAnywhere";
import { AiToolsStack } from "@/components/brain/platform/AiToolsStack";
import { AiAgentsSection } from "@/components/brain/platform/AiAgentsSection";
import { AutonomousProjects } from "@/components/brain/platform/AutonomousProjects";
import { AiMeetings } from "@/components/brain/platform/AiMeetings";
import { EnterpriseSearch } from "@/components/brain/platform/EnterpriseSearch";
import { AiCreator } from "@/components/brain/platform/AiCreator";
import { EnterpriseSecurity } from "@/components/brain/platform/EnterpriseSecurity";
import { BrainCta } from "@/components/brain/shared/BrainCta";

export const BrainLanding = () => {
    return (
        <div className="bg-black min-h-screen text-white font-sans selection:bg-purple-500 selection:text-white dark">
            <Navbar />


            <main className="pt-8 pb-20">
                {/* Hero Section */}
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-32 pt-12">

                    {/* Glowing Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-40 h-40 mx-auto mb-12"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-[50px] opacity-60 animate-pulse" />
                        <div className="relative w-full h-full bg-black rounded-full border border-white/10 flex items-center justify-center shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-500">
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                            {/* Abstract Flower Shape (CSS) */}
                            <div className="grid grid-cols-2 gap-1 rotate-45 group-hover:rotate-90 transition-transform duration-700 ease-in-out">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-t-full rounded-bl-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                                <div className="w-8 h-8 bg-gradient-to-bl from-purple-400 to-purple-600 rounded-t-full rounded-br-full shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
                                <div className="w-8 h-8 bg-gradient-to-tr from-pink-400 to-pink-600 rounded-b-full rounded-tl-full shadow-[0_0_15px_rgba(236,72,153,0.5)]" />
                                <div className="w-8 h-8 bg-gradient-to-tl from-orange-400 to-orange-600 rounded-b-full rounded-tr-full shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
                            </div>
                            <div className="absolute inset-0 bg-white/5 rounded-full backdrop-blur-[1px]" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-purple-300 mb-8 tracking-wide hover:bg-white/10 transition-colors cursor-pointer"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                        </span>
                        New: AI Super Agents
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-8xl font-black mb-12 tracking-tight leading-[1] md:leading-[1]"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-400">The only AI that</span><br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-500">works with your work</span>
                    </motion.h1>

                    {/* Simulated Search Input */}
                    <div className="max-w-2xl mx-auto relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
                        <div className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl p-4 flex items-center gap-4 shadow-2xl">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                                <Sparkles size={14} className="text-white" />
                            </div>
                            <div className="flex-1 text-left">
                                <div className="text-gray-500 text-lg font-medium typing-demo overflow-hidden whitespace-nowrap border-r border-transparent pr-1">
                                    Identifying at-risk sales deals and next steps...
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center gap-4 mt-12">
                        <button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center gap-2">
                            Get Started. It's free <ArrowRight size={16} />
                        </button>
                        <button className="bg-transparent border border-white/20 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/5 transition-all">
                            Book a demo
                        </button>
                    </div>

                    <div className="flex justify-center gap-6 mt-8 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-gray-600 rounded-sm" /> Desktop</span>
                        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-gray-600 rounded-sm" /> Browser</span>
                        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-gray-600 rounded-sm" /> Mobile</span>
                    </div>

                </section>
                <MakeAiYourOwn />
                <ContextFeatures />
                <BrainStats />
                <AccessibleAnywhere />
                <AutonomousProjects />
                <AiMeetings />
                <EnterpriseSearch />
                <AiCreator />
                <EnterpriseSecurity />
                <AiToolsStack />
                <AiAgentsSection />
                <BrainCta />

            </main>
        </div >
    );
};
