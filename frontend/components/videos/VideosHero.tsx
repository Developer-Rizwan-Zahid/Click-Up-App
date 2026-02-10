"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/Input";

export function VideosHero() {
    return (
        <section className="bg-white pt-32 pb-16 relative overflow-hidden">
            {/* Abstract Background Decoration */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-purple-100/50 to-blue-50/50 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-5xl sm:text-6xl font-black text-[#292D34] mb-6 tracking-tight leading-[1.1]">
                            ClickUp's <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b68ee] to-[#E348B4]">
                                Video Library
                            </span>
                        </h1>
                        <p className="text-xl text-gray-500 mb-8 max-w-lg">
                            Watch rapid-fire demos, tutorials, and success stories to learn how to save one day every week.
                        </p>

                        <div className="relative max-w-md">
                            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                className="w-full pl-10 pr-4 py-4 rounded-xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7b68ee]/20 focus:border-[#7b68ee] transition-all text-gray-800 placeholder:text-gray-400"
                                placeholder="Search for videos..."
                            />
                        </div>
                    </motion.div>

                    {/* Right Side Visual - Abstract Dashboard Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hidden lg:block relative w-[500px] h-[400px]"
                    >
                        {/* Decorative layering of "Video Cards" */}
                        <div className="absolute top-10 right-10 w-64 h-40 bg-white rounded-2xl shadow-xl border border-gray-100 transform rotate-6 z-10 flex items-center justify-center">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-red-500 border-b-[8px] border-b-transparent ml-1"></div>
                            </div>
                        </div>
                        <div className="absolute top-32 left-10 w-72 h-48 bg-white rounded-2xl shadow-2xl border border-gray-100 transform -rotate-3 z-20 overflow-hidden">
                            <div className="h-28 bg-gray-100 w-full mb-3"></div>
                            <div className="px-4 space-y-2">
                                <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
                                <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                            </div>
                        </div>
                        <div className="absolute bottom-10 right-20 w-56 h-36 bg-white rounded-2xl shadow-lg border border-gray-100 transform rotate-12 z-0"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
