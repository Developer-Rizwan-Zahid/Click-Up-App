
"use client";

import { motion } from "framer-motion";
import { Users, AlertCircle, HeartHandshake } from "lucide-react";

export default function DashboardsCrm() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Content Side (Left) */}
                    <div className="flex-1 text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                "Who's going to churn?"
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                ClickUp's CRM reports are easy to use so you can understand who's at risk and what you can do to change their mind. Use ClickUp like any CRM, then add cards that show different charts, figure calculations, and custom widgets.
                            </p>
                        </motion.div>
                    </div>

                    {/* Visual Side (Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 w-full"
                    >
                        <div className="bg-purple-600 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
                            {/* Inner White Card */}
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                                {/* Header */}
                                <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                                    <div className="text-xs text-slate-400 font-medium flex items-center gap-2">
                                        <div className="w-4 h-4 rounded bg-slate-200"></div>
                                        Dashboards / CRM & Renewals
                                    </div>
                                    <button className="bg-purple-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg">Add Card</button>
                                </div>

                                <div className="p-8">
                                    <div className="flex justify-between items-center mb-8">
                                        <h3 className="font-bold text-slate-800 text-lg">Renewal Forecast</h3>
                                        <div className="bg-slate-100 rounded-lg px-2 py-1 text-xs font-bold text-slate-600">
                                            Complete Churn <span className="text-black">8</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-8 items-center justify-center">
                                        {/* Pie Chart Mock */}
                                        <div className="w-48 h-48 rounded-full bg-slate-100 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-[#FF5F57] clip-path-polygon-[50%_50%_100%_0_100%_100%]"></div> {/* Red slice */}
                                            <div className="absolute inset-0 bg-[#FEBC2E] clip-path-polygon-[50%_50%_100%_50%_50%_100%]"></div> {/* Yellow slice */}
                                            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#00C7BE]"></div> {/* Teal slice */}
                                            <div className="absolute top-0 left-0 w-full h-full bg-[#E5E7EB] clip-path-polygon-[0_0_50%_50%_0_100%]"></div> {/* Grey slice */}

                                            {/* Using SVG for better chart control actually */}
                                            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full -rotate-90">
                                                <circle cx="50" cy="50" r="25" fill="transparent" stroke="#E2E8F0" strokeWidth="50" strokeDasharray="60 100" /> {/* Grey */}
                                                <circle cx="50" cy="50" r="25" fill="transparent" stroke="#FF5252" strokeWidth="50" strokeDasharray="15 100" strokeDashoffset="-60" /> {/* Red */}
                                                <circle cx="50" cy="50" r="25" fill="transparent" stroke="#FFC107" strokeWidth="50" strokeDasharray="15 100" strokeDashoffset="-75" /> {/* Yellow */}
                                                <circle cx="50" cy="50" r="25" fill="transparent" stroke="#009688" strokeWidth="50" strokeDasharray="30 100" strokeDashoffset="-90" /> {/* Teal */}
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Labels */}
                                    <div className="grid grid-cols-2 gap-4 mt-8">
                                        <div className="bg-slate-50 p-2 rounded text-center">
                                            <div className="text-[10px] text-slate-400 font-bold uppercase">Flat Renewal</div>
                                            <div className="text-xl font-bold text-slate-800">32</div>
                                        </div>
                                        <div className="bg-slate-50 p-2 rounded text-center">
                                            <div className="text-[10px] text-slate-400 font-bold uppercase">Expansion</div>
                                            <div className="text-xl font-bold text-slate-800">40</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
