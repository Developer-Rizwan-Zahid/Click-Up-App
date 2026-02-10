"use client";

import { motion } from "framer-motion";
import { Copy, ArrowRight } from "lucide-react";

export function StartupTemplates() {
    const templates = [
        {
            title: "Meetings",
            color: "bg-blue-500",
            link: "#"
        },
        {
            title: "Onboarding",
            color: "bg-purple-500",
            link: "#"
        },
        {
            title: "Task Management",
            color: "bg-pink-500",
            link: "#"
        },
        {
            title: "Project Management",
            color: "bg-green-500",
            link: "#"
        },
        {
            title: "Sprints and Backlog",
            color: "bg-orange-500",
            link: "#"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl font-bold text-[#292D34] mb-4">
                            Get a head start with templates
                        </h2>
                        <p className="text-xl text-gray-500">
                            Launch quickly with pre-built templates for every startup use case.
                        </p>
                    </div>
                    <a href="#" className="font-bold text-purple-600 hover:underline flex items-center gap-2 whitespace-nowrap">
                        Browse all templates <ArrowRight size={18} />
                    </a>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {templates.map((template, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className={`h-2 ${template.color}`} />
                            <div className="p-6">
                                <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-100 transition-colors">
                                    <Copy className="text-gray-400 group-hover:text-purple-500 transition-colors" size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                                    {template.title}
                                </h3>
                                <div className="flex items-center text-xs font-bold text-gray-400 group-hover:text-purple-500 transition-colors">
                                    Use Template <ArrowRight size={14} className="ml-1" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
