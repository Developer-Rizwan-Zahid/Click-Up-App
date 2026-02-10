"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Layers, Workflow, BarChart2 } from "lucide-react";

export function EnterpriseFeatures() {
    const features = [
        {
            title: "Scale your enterprise confidently",
            description: "Your workspace is built with privacy, security, and data residency in mind, adapting to your ever-growing needs.",
            icon: Layers,
            points: ["Global Data Residency", "Audit Logs", "Session Management"]
        },
        {
            title: "Visibility without busywork",
            description: "Get granular insights into your organization's performance with advanced dashboards and reporting.",
            icon: BarChart2,
            points: ["Universal Reporting", "Team Performance", "Goal Tracking"]
        },
        {
            title: "Perfectly fits all workflows",
            description: "Customize every aspect of your workspace to match your unique business processes.",
            icon: Workflow,
            points: ["Custom Task Types", "White Labeling", "Automated Workflows"]
        }
    ];

    return (
        <section className="py-24 bg-[#0B0D15] text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-900/30 border border-gray-800 p-8 rounded-2xl hover:bg-gray-900/50 hover:border-blue-500/30 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors text-blue-400">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                {feature.description}
                            </p>
                            <ul className="space-y-3">
                                {feature.points.map((point, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                        <CheckCircle2 size={16} className="text-blue-500" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
