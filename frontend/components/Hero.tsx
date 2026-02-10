"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-purple-50/50 to-white dark:from-purple-950/20 dark:to-black">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/50 px-3 py-1 text-sm text-gray-600 backdrop-blur-sm dark:border-gray-800 dark:bg-white/5 dark:text-gray-300 mb-8"
                >
                    <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                    New Feature: AI Automation 2.0
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mx-auto max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white"
                >
                    The all-in-one platform <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                        for your productivity
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed"
                >
                    Join millions of teams that use ClickUp to plan, track, and manage
                    any type of work with project management that flexes to your team's needs.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                >
                    <Button size="lg" className="h-14 px-8 text-lg rounded-xl gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0">
                        Get Started For Free
                        <ArrowRight className="h-5 w-5" />
                    </Button>
                    <Button size="lg" variant="ghost" className="h-14 px-8 text-lg rounded-xl gap-2">
                        <Play className="h-5 w-5 fill-current" />
                        Watch Demo
                    </Button>
                </motion.div>

                {/* Hero Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative mx-auto max-w-5xl rounded-2xl border border-gray-200 bg-white/50 p-2 shadow-2xl backdrop-blur-sm dark:border-gray-800 dark:bg-black/50"
                >
                    <div className="rounded-xl overflow-hidden bg-gray-50 aspect-[16/9] border border-gray-100 dark:bg-black dark:border-gray-800 relative">
                        {/* Abstract UI representation */}
                        <div className="absolute top-0 left-0 w-64 h-full border-r border-gray-200 bg-white p-4 hidden md:block dark:bg-zinc-900 dark:border-zinc-800">
                            <div className="h-8 w-32 bg-gray-100 rounded mb-6 dark:bg-zinc-800" />
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className="h-4 w-full bg-gray-50 rounded mb-3 dark:bg-zinc-800/50" />
                            ))}
                        </div>
                        <div className="absolute top-4 left-4 md:left-72 right-4 h-full">
                            <div className="flex gap-4 mb-8">
                                <div className="h-24 w-1/3 bg-purple-50 rounded-xl border border-purple-100 p-4 dark:bg-purple-900/10 dark:border-purple-900/20">
                                    <div className="h-4 w-12 bg-purple-100 rounded mb-2 dark:bg-purple-900/30" />
                                    <div className="h-6 w-16 bg-purple-200 rounded dark:bg-purple-900/50" />
                                </div>
                                <div className="h-24 w-1/3 bg-blue-50 rounded-xl border border-blue-100 p-4 dark:bg-blue-900/10 dark:border-blue-900/20">
                                    <div className="h-4 w-12 bg-blue-100 rounded mb-2 dark:bg-blue-900/30" />
                                    <div className="h-6 w-16 bg-blue-200 rounded dark:bg-blue-900/50" />
                                </div>
                                <div className="h-24 w-1/3 bg-green-50 rounded-xl border border-green-100 p-4 dark:bg-green-900/10 dark:border-green-900/20">
                                    <div className="h-4 w-12 bg-green-100 rounded mb-2 dark:bg-green-900/30" />
                                    <div className="h-6 w-16 bg-green-200 rounded dark:bg-green-900/50" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="h-12 w-full bg-white border border-gray-100 rounded-lg flex items-center px-4 dark:bg-zinc-900 dark:border-zinc-800">
                                        <div className="h-4 w-4 rounded-full border border-gray-200 mr-4 dark:border-zinc-700" />
                                        <div className="h-3 w-48 bg-gray-100 rounded dark:bg-zinc-800" />
                                        <div className="ml-auto h-6 w-20 bg-gray-50 rounded-full dark:bg-zinc-800" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute top-20 -left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
