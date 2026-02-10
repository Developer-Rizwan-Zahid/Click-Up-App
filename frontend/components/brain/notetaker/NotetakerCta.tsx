"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Linkedin, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const NotetakerCta = () => {
    return (
        <section className="bg-black pt-20 pb-10 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* CTA Card */}
                <div className="bg-gradient-to-br from-[#1a0b2e] to-black border border-white/10 rounded-3xl overflow-hidden relative max-w-5xl mx-auto mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 md:p-16">
                        <div className="relative z-10">
                            <div className="text-fuchsia-400 font-bold mb-4 text-sm uppercase tracking-wider">Your AI-Powered Workspace</div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                                Turn conversations <br />
                                into action
                            </h2>
                            <button className="px-8 py-3 rounded-full bg-fuchsia-600 text-white font-bold flex items-center gap-2 hover:bg-fuchsia-500 transition-colors shadow-lg shadow-fuchsia-900/20">
                                Try AI Notetaker <ArrowRight size={16} />
                            </button>
                        </div>

                        <div className="relative h-[300px] md:h-[400px] w-full mt-8 md:mt-0">
                            {/* Mockup Image -  We'll use a schematic css mock since we don't have the exact screenshot file yet, or placeholder */}
                            <div className="absolute inset-0 bg-[#161616] rounded-xl border border-white/10 overflow-hidden shadow-2xl skew-y-1 transform translate-x-4">
                                {/* Header Mock */}
                                <div className="bg-[#222] h-8 border-b border-white/5 flex items-center px-4 gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                </div>
                                {/* Content Mock */}
                                <div className="p-4 space-y-4">
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded bg-fuchsia-600 flex items-center justify-center text-xs font-bold text-white">AI</div>
                                        <div className="flex-1 bg-[#222] rounded-lg p-3 text-xs text-gray-300">
                                            <p className="mb-2">Here are the action items from your meeting:</p>
                                            <ul className="list-disc pl-4 space-y-1 text-gray-400">
                                                <li>Update Q3 roadmap</li>
                                                <li>Schedule team sync</li>
                                                <li>Review design assets</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="h-2 w-1/2 bg-[#222] rounded animate-pulse" />
                                </div>
                            </div>

                            {/* Glow */}
                            <div className="absolute inset-0 bg-fuchsia-500/20 blur-[80px] -z-10 rounded-full" />
                        </div>
                    </div>
                </div>

                {/* Footer Section (Brain Specific) */}
                <div className="border-t border-white/10 pt-12 pb-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-xl text-white">ClickUp</span>
                        </div>

                        {/* Social Icons */}
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
