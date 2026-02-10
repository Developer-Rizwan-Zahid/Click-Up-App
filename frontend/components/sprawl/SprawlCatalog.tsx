"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const reports = [
    {
        id: "ai-workforce",
        tag: "Report",
        title: "The AI Workforce",
        description: "A look at how AI is reshaping the workforce, the real impact on productivity, and why organizations are missing the mark.",
        href: "/research/ai-workforce",
        gradient: "from-blue-600/20 to-purple-600/20",
        borderColor: "group-hover:border-blue-500/50"
    },
    {
        id: "digital-fatigue",
        tag: "Analysis",
        title: "Digital Fatigue",
        description: "Exploring the hidden cost of context switching and how tool sprawl is draining employee engagement and performance.",
        href: "#",
        gradient: "from-pink-600/20 to-orange-600/20",
        borderColor: "group-hover:border-pink-500/50"
    },
    {
        id: "future-of-context",
        tag: "Research",
        title: "The Future of Context",
        description: "How high-context teams outperform their competitors and why unified platforms are the key to long-term success.",
        href: "#",
        gradient: "from-cyan-600/20 to-blue-600/20",
        borderColor: "group-hover:border-cyan-500/50"
    }
];

export const SprawlCatalog = () => {
    return (
        <section className="bg-black py-32">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reports.map((report, idx) => (
                        <motion.div
                            key={report.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Link href={report.href} className="group block h-full">
                                <div className={`relative h-full p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 flex flex-col ${report.borderColor}`}>
                                    {/* Abstract Gradient Background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${report.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl rounded-3xl`} />

                                    <div className="relative z-10 flex flex-col h-full">
                                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6 block border border-white/10 w-fit px-2 py-0.5 rounded">
                                            {report.tag}
                                        </span>

                                        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                            {report.title}
                                        </h3>

                                        <p className="text-gray-400 leading-relaxed mb-auto">
                                            {report.description}
                                        </p>

                                        <div className="flex items-center gap-2 mt-8 text-sm font-bold text-white group-hover:gap-4 transition-all">
                                            Learn more
                                            <ArrowRight size={16} className="text-pink-500" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
