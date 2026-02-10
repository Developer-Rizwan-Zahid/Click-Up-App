"use client";

import { Search, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function HelpCenterHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-r from-[#6A5AE0] via-[#C96C99] to-[#FF8F57] min-h-[500px] flex items-center">
            <div className="container mx-auto px-4 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="max-w-2xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl sm:text-7xl font-bold text-white mb-8 tracking-tight"
                    >
                        How can we help?
                    </motion.h1>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="relative flex items-center gap-4 mb-8"
                    >
                        <div className="relative flex-1">
                            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                                <Search className="h-6 w-6 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                className="w-full h-16 pl-16 pr-6 rounded-full bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-500 text-lg shadow-xl outline-none focus:ring-4 focus:ring-purple-500/30 transition-all border border-transparent"
                                placeholder="Ask me anything"
                            />
                        </div>
                        <Button className="h-16 px-10 rounded-full bg-[#8A7FFF] hover:bg-[#7a6fee] text-white text-lg font-bold shadow-lg transition-transform hover:scale-105">
                            Search
                        </Button>
                    </motion.div>

                    {/* Suggestions */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap items-center gap-3 text-sm"
                    >
                        <span className="font-bold text-white/90">Suggestions</span>
                        {["Billing", "Add a guest", "Create a Whiteboard", "Create a Dashboard"].map((item, i) => (
                            <span
                                key={i}
                                className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white font-medium hover:bg-white/30 cursor-pointer transition-colors"
                            >
                                {item}
                            </span>
                        ))}
                    </motion.div>
                </div>

                {/* Right Floating Imagery */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="hidden lg:block relative h-[400px]"
                >
                    {/* Mock Elements mimicking the collage */}
                    <div className="absolute top-10 right-20 w-64 bg-white p-4 rounded-xl shadow-2xl transform rotate-3 z-10 animate-float-slow">
                        <div className="flex gap-2 mb-2">
                            <span className="bg-yellow-100 text-yellow-700 text-[10px] font-bold px-2 py-0.5 rounded">Task</span>
                            <span className="text-xs font-bold text-slate-700">Client Meeting</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 rounded mb-2" />
                        <div className="h-2 w-3/4 bg-gray-100 rounded" />
                    </div>

                    <div className="absolute bottom-20 right-40 w-56 bg-white p-3 rounded-xl shadow-2xl transform -rotate-2 z-20 animate-float-medium">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-xs">JD</div>
                            <div className="text-xs">
                                <div className="font-bold text-slate-800">John Doe</div>
                                <div className="text-slate-500"> Assigned to you</div>
                            </div>
                        </div>
                        <div className="flex gap-1">
                            <div className="w-full h-8 bg-gray-50 rounded" />
                            <div className="w-full h-8 bg-gray-50 rounded" />
                        </div>
                    </div>

                    <div className="absolute top-1/2 left-20 transform -translate-y-1/2">
                        <div className="w-24 h-24 rounded-full border-4 border-white/30 overflow-hidden shadow-xl">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Annie" alt="User" className="w-full h-full bg-pink-200" />
                        </div>
                    </div>

                    <div className="absolute bottom-10 right-10">
                        <div className="w-16 h-16 rounded-full border-4 border-white/30 overflow-hidden shadow-xl">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-full h-full bg-blue-200" />
                        </div>
                    </div>

                    <div className="absolute top-20 right-0">
                        <div className="w-12 h-12 rounded-full border-4 border-white/30 overflow-hidden shadow-xl">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jack" alt="User" className="w-full h-full bg-green-200" />
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
