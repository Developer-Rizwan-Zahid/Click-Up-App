"use client";

import { Star, ChevronRight, FileText } from "lucide-react";
import { motion } from "framer-motion";

const articles = [
    "How to create your first Task",
    "Setting up 2FA for your workspace",
    "Understanding ClickUp hierarchy",
    "Connecting Slack to ClickUp",
    "Managing notifications effectively",
    "Using the Gantt view for project planning"
];

export function HelpCenterPromoted() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center justify-center p-3 bg-yellow-50 rounded-full mb-4">
                        <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">Popular Articles</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {articles.map((article, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-purple-200 hover:bg-purple-50/30 transition-all cursor-pointer group"
                        >
                            <div className="flex items-center gap-3">
                                <FileText className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors" />
                                <span className="font-medium text-slate-700 group-hover:text-purple-700 transition-colors">{article}</span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-purple-400 transform group-hover:translate-x-1 transition-all" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
