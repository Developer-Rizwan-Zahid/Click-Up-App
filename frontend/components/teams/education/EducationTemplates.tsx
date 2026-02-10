"use client";

import { motion } from "framer-motion";
import { Copy, ArrowRight } from "lucide-react";

export function EducationTemplates() {
    const templates = [
        {
            title: "Class Management",
            desc: "Track students, attendance, and grades effortlessly.",
            color: "bg-blue-500"
        },
        {
            title: "Class Planning",
            desc: "Plan your entire semester or academic year.",
            color: "bg-indigo-500"
        },
        {
            title: "Syllabus Planning",
            desc: "Create and share detailed course syllabi.",
            color: "bg-purple-500"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl font-bold text-[#292D34] mb-4">
                            Get started with an education template
                        </h2>
                        <p className="text-xl text-gray-500">
                            Launch your academic workspace in seconds with these pre-built layouts.
                        </p>
                    </div>
                    <a href="#" className="font-bold text-blue-600 hover:underline flex items-center gap-2 whitespace-nowrap">
                        See all education templates <ArrowRight size={18} />
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
                            className="group relative bg-[#F8FAFC] rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 p-8"
                        >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-white shadow-sm group-hover:scale-110 transition-transform`}>
                                <Copy className="text-blue-500" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-[#292D34] mb-3 group-hover:text-blue-600 transition-colors">
                                {template.title}
                            </h3>
                            <p className="text-gray-500 mb-6 leading-relaxed">
                                {template.desc}
                            </p>
                            <div className="flex items-center text-sm font-bold text-blue-600 group-hover:translate-x-2 transition-transform">
                                Use Template <ArrowRight size={16} className="ml-2" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
