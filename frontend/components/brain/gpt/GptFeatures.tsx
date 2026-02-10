"use client";

import { motion } from "framer-motion";
import { PenTool, Search, Zap, Globe, MessageSquare, BookOpen } from "lucide-react";

const features = [
    {
        title: "AI Writer",
        desc: "Draft documents, emails, and descriptions instantly.",
        icon: PenTool,
        color: "text-blue-400",
        bg: "bg-blue-500/10"
    },
    {
        title: "Knowledge Retrieval",
        desc: "Ask questions about your docs, tasks, and chats.",
        icon: Search,
        color: "text-purple-400",
        bg: "bg-purple-500/10"
    },
    {
        title: "Task Automation",
        desc: "Turn natural language into actionable tasks.",
        icon: Zap,
        color: "text-yellow-400",
        bg: "bg-yellow-500/10"
    },
    {
        title: "Multi-Language",
        desc: "Translate content and communicate globally.",
        icon: Globe,
        color: "text-green-400",
        bg: "bg-green-500/10"
    },
    {
        title: "Summary Generator",
        desc: "Get instant summaries of long threads and docs.",
        icon: MessageSquare,
        color: "text-pink-400",
        bg: "bg-pink-500/10"
    },
    {
        title: "Wiki Builder",
        desc: "Convert loose notes into structured wikis.",
        icon: BookOpen,
        color: "text-orange-400",
        bg: "bg-orange-500/10"
    }
];

export const GptFeatures = () => {
    return (
        <section className="py-24 bg-black relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">More than just a chatbot</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Deeply integrated capabilities to accelerate every part of your workflow.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feat, index) => (
                        <motion.div
                            key={feat.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 hover:bg-[#111] hover:border-white/20 transition-all group"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${feat.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <feat.icon className={`w-7 h-7 ${feat.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{feat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
