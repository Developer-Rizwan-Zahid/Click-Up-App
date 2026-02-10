"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Send, Linkedin, Facebook, Instagram, Twitter, ShieldCheck, Lock, Globe, MessageSquare, Plus, FileText, Icon, Download, Chrome } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const BrainCta = () => {
    return (
        <section className="bg-black relative overflow-hidden pt-20 pb-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Main CTA Container */}
                <div className="relative mb-32">
                    <div className="text-center mb-12">
                        <div className="text-red-500 font-bold mb-4 text-xs uppercase tracking-widest">No credit card required</div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                            Get started with the know <br className="hidden md:block" />
                            everything, find anything app
                        </h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
                                <Download size={18} /> Download for Windows
                            </button>
                            <button className="px-8 py-3 rounded-xl bg-[#1a1a1a] border border-white/10 text-white font-bold flex items-center gap-2 hover:bg-[#2a2a2a] transition-colors">
                                Download Chrome Extension
                            </button>
                        </div>
                    </div>

                    {/* Dashboard Mockup - Large Visual */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative max-w-6xl mx-auto"
                    >
                        <div className="absolute inset-0 bg-purple-600/20 blur-[100px] rounded-full pointer-events-none" />

                        <div className="relative bg-[#0E0E12] border border-white/10 rounded-2xl overflow-hidden shadow-2xl aspect-[16/10] md:aspect-[16/9]">
                            {/* Sidebar */}
                            <div className="absolute left-0 top-0 bottom-0 w-64 bg-[#111] border-r border-white/5 hidden lg:block p-4">
                                <div className="flex items-center gap-2 mb-8 text-white font-bold"><div className="w-6 h-6 bg-fuchsia-500 rounded-md" /> Brain</div>
                                <div className="space-y-1">
                                    {['Home', 'BrainWave', 'Models', 'Apps', 'Chats'].map((item, i) => (
                                        <div key={i} className={`p-2 rounded text-sm ${i === 0 ? 'bg-white/10 text-white' : 'text-gray-500'}`}>{item}</div>
                                    ))}
                                </div>
                            </div>

                            {/* Main Content Center */}
                            <div className="absolute inset-0 lg:left-64 flex flex-col items-center justify-center text-center p-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-purple-500/20">
                                    <Sparkles size={32} className="text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-6">Search <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-500">everything</span>, ask anything</h3>

                                {/* Search Input */}
                                <div className="w-full max-w-2xl bg-[#1a1a1a] border border-white/10 rounded-xl p-2 flex items-center gap-3 shadow-2xl mb-8">
                                    <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center"><Plus size={16} className="text-gray-400" /></div>
                                    <div className="flex-1 text-left text-gray-500 text-sm">Search or Ask...</div>
                                    <div className="w-8 h-8 bg-fuchsia-500 rounded-lg flex items-center justify-center"><ArrowRight size={16} className="text-white" /></div>
                                </div>

                                {/* Suggestion Chips */}
                                <div className="flex flex-wrap justify-center gap-3">
                                    {['Summarize my work', 'Create a task', 'Write a report'].map((chip, i) => (
                                        <div key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 flex items-center gap-2">
                                            <Sparkles size={12} className={i === 0 ? "text-orange-400" : i === 1 ? "text-blue-400" : "text-green-400"} />
                                            {chip}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Footer Section (Brain Specific) */}
                <div className="border-t border-white/10 pt-12 pb-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                                <span className="font-bold text-xl text-white">ClickUp</span>
                            </div>
                        </div>

                        {/* Social Icons (Right Aligned in Mobile view, usually grouped) */}
                        <div className="flex items-center gap-4">
                            <SocialIcon icon={Linkedin} />
                            <SocialIcon icon={Facebook} />
                            <SocialIcon icon={Instagram} />
                            <SocialIcon icon={Twitter} />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-medium text-gray-500">
                        <div>
                            &copy; 2025 ClickUp • <Link href="#" className="hover:text-white transition-colors">Security</Link> • <Link href="#" className="hover:text-white transition-colors">Your Privacy</Link> • <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                        </div>
                        <div className="text-[10px] text-gray-600 max-w-xl text-right hidden md:block">
                            Usage limits vary by plan. ClickUp AI customers enjoy unlimited Talk to Text.
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

function SocialIcon({ icon: Icon }: any) {
    return (
        <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
            <Icon size={16} />
        </a>
    );
}