"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Code2, GitPullRequest, Laptop } from "lucide-react";

export function SoftwareHero() {
    return (
        <section className="bg-white pt-20 pb-32 overflow-hidden relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <div className="h-1 w-8 bg-purple-600 rounded-full"></div>
                            <span className="text-purple-600 font-bold uppercase tracking-widest text-sm">Product Development</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-8 text-[#292D34] leading-[1.1]">
                            The all-in-one <br />
                            app for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">software teams.</span>
                        </h1>

                        <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-lg">
                            Plan, build, and ship better products faster with ClickUp's powerful agile features and deep dev tool integrations.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Link href="/signup">
                                <Button className="h-14 px-8 bg-[#292D34] hover:bg-black text-white text-lg font-bold rounded-xl shadow-xl transition-all hover:scale-105 w-full sm:w-auto">
                                    Start Building Free
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" className="h-14 px-8 border-gray-300 text-gray-700 hover:bg-gray-50 text-lg font-bold rounded-xl w-full sm:w-auto">
                                    Contact Sales
                                </Button>
                            </Link>
                        </div>

                        <div className="flex items-center gap-8 text-sm font-semibold text-gray-400">
                            <div className="flex items-center gap-2"><Laptop size={18} /> AGILE</div>
                            <div className="flex items-center gap-2"><Code2 size={18} /> DEVOPS</div>
                            <div className="flex items-center gap-2"><GitPullRequest size={18} /> CI/CD</div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-1/2 relative"
                    >
                        {/* Decorative Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full blur-3xl -z-10 opacity-60" />

                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-[#1e1e1e] p-1">
                            {/* Dark Mode Code Editor Aesthetic */}
                            <div className="bg-[#2d2d2d] border-b border-[#333] p-3 flex items-center justify-between">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="text-gray-500 text-xs font-mono">sprint-planning.tsx</div>
                            </div>

                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1607799275518-d58665d099db?q=80&w=1000&auto=format&fit=crop"
                                    alt="Agile Dashboard"
                                    className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                                />
                                {/* Overlay Stats Card */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="absolute bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 w-48 hidden md:block"
                                >
                                    <div className="text-xs font-bold text-gray-400 mb-2 uppercase">Velocity</div>
                                    <div className="text-3xl font-black text-green-500">+24%</div>
                                    <div className="text-xs text-gray-500">vs last sprint</div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
