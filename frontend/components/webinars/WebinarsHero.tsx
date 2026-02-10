"use client";

import { motion } from "framer-motion";

export function WebinarsHero() {
    return (
        <section className="pt-32 pb-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-block mb-4 px-3 py-1 bg-purple-100 text-[#7B68EE] font-bold text-xs uppercase tracking-widest rounded-full">
                        On-Demand
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-[#292D34] mb-6 tracking-tight leading-[1.1]">
                        ClickUp Webinars
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Watch recorded sessions from our product experts, deep diving into features, workflows, customer stories, and best practices.
                    </p>
                </motion.div>

                {/* 3D Illustration Placeholder / Interactive Element */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative max-w-4xl mx-auto"
                >
                    {/* Simplified Monitor Graphic */}
                    <div className="relative aspect-[16/9] bg-gray-900 rounded-t-3xl border-[12px] border-gray-900 shadow-2xl overflow-hidden mx-auto w-full md:w-3/4">
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-gray-800"></div>
                        {/* Screen Content */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                            </div>
                        </div>
                    </div>
                    {/* Monitor Stand */}
                    <div className="h-12 w-32 bg-gray-300 mx-auto rounded-b-lg mb-2 relative z-0" style={{ transform: "perspective(300px) rotateX(20deg)", marginTop: "-4px" }}></div>
                    <div className="h-2 w-48 bg-gray-200 mx-auto rounded-full shadow-lg"></div>

                </motion.div>
            </div>
        </section>
    );
}
