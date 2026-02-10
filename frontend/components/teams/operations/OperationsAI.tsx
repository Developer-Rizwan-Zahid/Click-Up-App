"use client";

import { motion } from "framer-motion";
import { Sparkles, MessageSquare, Search } from "lucide-react";

export function OperationsAI() {
    const features = [
        {
            icon: Sparkles,
            title: "AI manages project workflows",
            description: "ClickUp AI automates task creation, assigns work, and predicts risks—so your team stays ahead without manual updates or missed deadlines.",
            color: "text-purple-500",
            bg: "bg-purple-100"
        },
        {
            icon: MessageSquare,
            title: "Turns conversations into action",
            description: "Automatically generate key takeaways, trackable tasks, and answers from discussions and calls.",
            color: "text-blue-500",
            bg: "bg-blue-100"
        },
        {
            icon: Search,
            title: "Finds anything, instantly",
            description: "AI-powered search finds SOPs, reports, updates, and files across ClickUp and connected apps.",
            color: "text-pink-500",
            bg: "bg-pink-100"
        }
    ];

    return (
        <section className="py-24 bg-gray-50/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-bold uppercase tracking-wider mb-6"
                    >
                        <Sparkles size={14} />
                        <span>ClickUp AI</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-[#292D34] mb-6 tracking-tight"
                    >
                        The world’s most complete AI for operations teams
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className={`w-12 h-12 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-[#292D34] mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
