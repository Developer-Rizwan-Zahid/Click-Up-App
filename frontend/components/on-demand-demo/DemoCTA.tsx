"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, MessageSquare, Bot } from "lucide-react";

export function DemoCTA() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative rounded-[2.5rem] overflow-hidden"
                >
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-purple-900/80 to-purple-600/80" />

                    {/* Decorative Elements (Glows/Orbs) */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/20 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3" />

                    <div className="relative z-10 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
                        {/* Left Side: Content */}
                        <div className="text-left md:max-w-xl">
                            <div className="flex items-center gap-2 mb-6">
                                {/* Specialized ClickUp-like Logo */}
                                <div className="relative flex items-center justify-center">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 10C4 10 4 17 12 17C20 17 20 10 20 10" stroke="#7B68EE" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7 8L12 3L17 8" stroke="#E348B4" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="text-2xl font-extrabold tracking-tight text-white">ClickUp</span>
                            </div>

                            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                                Want a 1:1 demo instead?
                            </h2>

                            <p className="text-lg text-gray-300 mb-8 font-medium">
                                Get in touch with our sales team for a personalized walkthrough.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact">
                                    <Button className="h-12 px-8 bg-white text-black hover:bg-gray-100 text-base font-bold rounded-xl transition-all hover:scale-105">
                                        Contact Sales
                                    </Button>
                                </Link>
                                <Link href="/signup">
                                    <Button className="h-12 px-8 bg-[#7B68EE] text-white hover:bg-[#6853E6] text-base font-bold rounded-xl transition-all">
                                        Sign Up
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Right Side: Mock UI / Illustration */}
                        {/* Abstract representation of the UI shown in screenshot to avoid complex image dependency */}
                        <div className="hidden lg:block relative w-[450px]">
                            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl blur opacity-30"></div>
                            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
                                {/* Fake Chat UI Header */}
                                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold">AI</div>
                                        <div className="h-2 w-24 bg-white/20 rounded-full"></div>
                                    </div>
                                    <div className="h-2 w-8 bg-white/20 rounded-full"></div>
                                </div>
                                {/* Fake Chat Bubbles */}
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gray-600 flex-shrink-0"></div>
                                        <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none text-sm text-gray-200 w-full">
                                            <div className="h-2 w-3/4 bg-white/20 rounded-full mb-2"></div>
                                            <div className="h-2 w-1/2 bg-white/20 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 justify-end">
                                        <div className="bg-[#7B68EE]/80 p-3 rounded-2xl rounded-tr-none text-sm text-white w-2/3">
                                            <div className="h-2 w-full bg-white/40 rounded-full mb-2"></div>
                                            <div className="h-2 w-2/3 bg-white/40 rounded-full"></div>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-purple-500 flex-shrink-0 flex items-center justify-center"><Bot size={16} /></div>
                                    </div>
                                </div>

                                {/* Interactive Float element */}
                                <div className="absolute -bottom-6 -right-6 bg-[#E348B4] p-4 rounded-full shadow-lg text-white animate-bounce">
                                    <MessageSquare size={24} fill="currentColor" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
