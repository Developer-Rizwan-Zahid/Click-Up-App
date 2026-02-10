"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function PmoDescription() {
    const benefits = [
        "Standardize project workflows across different departments.",
        "Real-time visibility into project health and budget status.",
        "Automate routine administrative tasks to focus on strategy.",
        "Centralize resource allocation and capacity planning.",
        "Improve delivery accuracy with predefined checklists."
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="flex-1 space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#292D34] leading-tight">
                            Why use the PMO Project <br /> Management template?
                        </h2>
                        <div className="prose prose-lg text-gray-500">
                            <p>
                                A Project Management Office (PMO) serves as the engine of organizational efficiency. However, managing multiple complex projects simultaneously can quickly become chaotic without the right structure.
                            </p>
                            <p>
                                ClickUp's PMO Project Management template is built to provide that missing structure. It allows you to transform high-level objectives into executable tasks, while maintaining the birds-eye view required for effective governance.
                            </p>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="bg-[#FAF9FF] p-10 rounded-3xl border border-blue-50">
                            <h3 className="text-xl font-bold text-[#292D34] mb-8 uppercase tracking-wider text-sm">Key Advantages</h3>
                            <ul className="space-y-6">
                                {benefits.map((benefit, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-4"
                                    >
                                        <CheckCircle2 size={24} className="text-blue-600 flex-shrink-0" />
                                        <span className="text-lg text-gray-700 font-medium">{benefit}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
