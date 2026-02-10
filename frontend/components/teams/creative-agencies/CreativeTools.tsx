"use client";

import { motion } from "framer-motion";
import { Timer, FileJson, BarChart3 } from "lucide-react";

export function CreativeTools() {
    const tools = [
        {
            title: "Time tracking",
            desc: "Track time and work against your budget for clear visibility into your profitability.",
            icon: Timer
        },
        {
            title: "Templates",
            desc: "Save time with repeatable tasks that automate tedious busywork.",
            icon: FileJson
        },
        {
            title: "Dashboards",
            desc: "Plan, view, track, and assess performance goals from a customizable control center.",
            icon: BarChart3
        }
    ];

    return (
        <section className="py-24 bg-[#F8FAFC]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-[#292D34] mb-6">
                        Scale your agency faster with ClickUp
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-8 group-hover:shadow-xl transition-shadow">
                                <tool.icon className="text-pink-600" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#292D34] mb-4">{tool.title}</h3>
                            <p className="text-lg text-gray-500 leading-relaxed max-w-sm">
                                {tool.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
