"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const stats = [
    {
        val: "1.1 days",
        label: "saved per week",
        desc: "Brain GPT transforms scattered knowledge into focused, high-impact productivity.",
    },
    {
        val: "4X",
        label: "faster than typing...",
        desc: "Skip the typing with AI-powered Talk to Text across your apps and workflow.",
    },
    {
        val: "88%",
        label: "in cost savings",
        desc: "Replace multiple productivity tools and subscriptions with one AI super app.",
    }
];

export const GptStats = () => {
    return (
        <section className="bg-black py-20 relative px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
                    >
                        Talk to Text, premium AI<br />models, connected to all apps
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg md:text-xl"
                    >
                        Maximize productivity, minimize costs.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#111] border border-white/10 rounded-3xl p-8 hover:bg-[#151515] transition-colors text-center"
                        >
                            <div className="flex items-start justify-center gap-1 mb-2">
                                <span className="text-5xl md:text-6xl font-bold text-white tracking-tight">{stat.val}</span>
                                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-2">
                                    <ArrowUp size={12} className="text-green-500" strokeWidth={3}/>
                                </div>
                            </div>
                            <div className="text-lg text-white font-medium mb-4">{stat.label}</div>
                            <p className="text-sm text-gray-400 leading-relaxed px-4">
                                {stat.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
