"use client";

import { motion } from "framer-motion";
import { Folder, List, CheckSquare, Eye } from "lucide-react";

export function PmoHighlights() {
    const stats = [
        { label: "Folders", count: "1", icon: Folder, color: "text-blue-600", bg: "bg-blue-50" },
        { label: "Lists", count: "5", icon: List, color: "text-indigo-600", bg: "bg-indigo-50" },
        { label: "Status Tasks", count: "20+", icon: CheckSquare, color: "text-green-600", bg: "bg-green-50" },
        { label: "Custom Views", count: "4", icon: Eye, color: "text-purple-600", bg: "bg-purple-50" },
    ];

    return (
        <section className="py-12 border-y border-gray-100 bg-gray-50/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center text-center p-6"
                        >
                            <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                                <stat.icon size={24} />
                            </div>
                            <div className="text-2xl font-black text-[#292D34]">{stat.count}</div>
                            <div className="tetx-sm font-bold text-gray-500 uppercase tracking-wide">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
