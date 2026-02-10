"use client";

import { motion } from "framer-motion";

export default function TasksProductivity() {
    return (
        <section className="py-32 bg-white text-slate-900 border-t border-slate-100">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                            Disconnected apps are <br />
                            <span className="text-slate-900">killing productivity</span>
                        </h2>
                        <p className="text-lg text-slate-500 leading-relaxed max-w-md">
                            ClickUp connects all of your work in one place, so you save time and get more done.
                        </p>
                    </motion.div>

                    {/* Right: Stats */}
                    <div className="flex flex-col sm:flex-row gap-12 sm:gap-20">
                        {/* Stat 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="relative"
                        >
                            <div className="text-indigo-600 font-bold text-xs tracking-widest uppercase mb-2">
                                Save Time
                            </div>
                            <div className="text-6xl font-extrabold text-slate-900 mb-2">
                                4hrs
                            </div>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-[150px]">
                                a week is spent toggling between apps
                                <sup className="text-xs ml-0.5">1</sup>
                            </p>

                            {/* Divider for desktop */}
                            <div className="hidden sm:block absolute top-0 right-[-40px] w-px h-full bg-slate-200" />
                        </motion.div>

                        {/* Stat 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="text-indigo-600 font-bold text-xs tracking-widest uppercase mb-2">
                                Increase Focus
                            </div>
                            <div className="text-6xl font-extrabold text-slate-900 mb-2">
                                30%
                            </div>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-[150px]">
                                of the workday is spent tracking down info
                                <sup className="text-xs ml-0.5">1</sup>
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
