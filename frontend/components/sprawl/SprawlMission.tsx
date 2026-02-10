"use client";

import { motion } from "framer-motion";

export const SprawlMission = () => {
    return (
        <section className="bg-black py-32 border-y border-white/5">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-sm font-bold text-pink-500 uppercase tracking-[0.3em] mb-12">
                        Our Mission
                    </h2>   
                    <p className="text-2xl md:text-4xl font-medium text-white leading-relaxed mb-12">
                        Sprawl.work is a mission to understand how the world of work is changing—and the toll that change is taking on the people within it.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-12 border-t border-white/5">
                        <div className="flex flex-col items-center">
                            <span className="text-xs font-bold text-gray-500 uppercase mb-4 tracking-widest">A project by</span>
                            <div className="flex items-center gap-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                                    <path d="M4 10C4 10 4 17 12 17C20 17 20 10 20 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 8L12 3L17 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="text-2xl font-black text-white">ClickUp</span>
                            </div>
                        </div>

                        <div className="h-10 w-[1px] bg-white/10 hidden md:block" />

                        <div className="flex flex-col items-center">
                            <span className="text-xs font-bold text-gray-500 uppercase mb-4 tracking-widest">In partnership with</span>
                            <span className="text-2xl font-bold text-white tracking-tight">Qatalog</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
