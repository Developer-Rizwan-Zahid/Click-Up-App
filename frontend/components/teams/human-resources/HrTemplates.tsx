"use client";

import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";

export function HrTemplates() {
    const templates = [
        {
            title: "Onboarding Template",
            color: "bg-green-500",
            link: "#"
        },
        {
            title: "Performance Review",
            color: "bg-teal-500",
            link: "#"
        },
        {
            title: "Hiring Pipeline",
            color: "bg-emerald-500",
            link: "#"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl font-bold text-[#292D34] mb-4">
                            Start with an HR template
                        </h2>
                        <p className="text-xl text-gray-500">
                            Launch processes faster with pre-built templates for onboarding, reviews, and hiring.
                        </p>
                    </div>
                    <a href="#" className="font-bold text-green-600 hover:underline flex items-center gap-2 whitespace-nowrap">
                        Browse all templates <ArrowRight size={18} />
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
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
                            <div className="p-8">
                                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-50 transition-colors">
                                    <FileText className="text-gray-400 group-hover:text-green-500 transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-8 group-hover:text-green-600 transition-colors">
                                    {template.title}
                                </h3>
                                <div className="flex items-center text-sm font-bold text-gray-400 group-hover:text-green-500 transition-colors">
                                    Use Template <ArrowRight size={16} className="ml-2" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
