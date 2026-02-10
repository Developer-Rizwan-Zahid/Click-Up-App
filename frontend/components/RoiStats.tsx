"use client";

import { motion } from "framer-motion";

export const RoiStats = () => {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-black text-[#292D34] mb-6 tracking-tight leading-tight">
                            It's like adding 15 full-time employees
                        </h2>
                        <p className="text-gray-500 font-medium text-lg leading-relaxed">
                            According to third party research ClickUp saves the average company over 30k hours per year, and delivers industry-leading ROI.
                        </p>
                    </div>
                    <div>
                        <button className="bg-[#292D34] text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-colors">
                            Get started
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-gray-200 pt-12">
                    <StatItem
                        label="ROI"
                        value="384%"
                        desc="ClickUp delivered 384% ROI over three years, helping organizations unlock significant efficiency gains."
                        color="text-[#292D34]"
                    />
                    <StatItem
                        label="REVENUE INCREASE"
                        value="$3.9M"
                        desc="ClickUp projects drove $3.9M in revenue gains by streamlining work, consolidating tools, and scaling faster."
                        color="text-[#292D34]"
                    />
                    <StatItem
                        label="HOURS SAVED"
                        value="92,400"
                        desc="Organizations saved 92,400 hours with ClickUp, reducing manual work and recapturing productivity at scale."
                        color="text-[#292D34]"
                    />
                    <StatItem
                        label="PAYBACK"
                        value="<6 mo"
                        desc="Customers reached payback in under six months, making ClickUp a proven investment with rapid returns."
                        color="text-[#292D34]"
                    />
                </div>

                <div className="mt-16 text-xs text-gray-400 font-medium border-t border-gray-100 pt-8">
                    *from 2025 The Total Economic Impact™ of ClickUp report from Forrestor Group. <a href="#" className="text-blue-500 hover:underline">Get the report</a>
                </div>

            </div>
        </section>
    );
};

function StatItem({ label, value, desc, color }: any) {
    return (
        <div className="space-y-4 group">
            <div className="text-xs font-bold text-blue-500 uppercase tracking-widest">{label}</div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`text-5xl md:text-6xl font-black tracking-tighter ${color}`}
            >
                {value}
            </motion.div>
            <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                {desc}
            </p>
        </div>
    )
}
