"use client";

import { motion } from "framer-motion";
import { GitBranch, Bug, Rocket, Terminal, Split, RefreshCw } from "lucide-react";

export function SoftwareFeatures() {
    const features = [
        {
            title: "Sprint Management",
            description: "Manage sprints, points, and backlogs to fit your agile workflow perfectly.",
            icon: RefreshCw,
            color: "text-purple-500",
            bg: "bg-purple-50"
        },
        {
            title: "Git Integration",
            description: "See Git commits, branches, and pull requests along side your tasks.",
            icon: GitBranch,
            color: "text-orange-500",
            bg: "bg-orange-50"
        },
        {
            title: "Bug Tracking",
            description: "Capture and prioritize bugs with custom forms and automated routing.",
            icon: Bug,
            color: "text-red-500",
            bg: "bg-red-50"
        },
        {
            title: "Product Roadmaps",
            description: "Visualize your product strategy and keep stakeholders aligned.",
            icon: Split,
            color: "text-blue-500",
            bg: "bg-blue-50"
        },
        {
            title: "Automated Workflows",
            description: "Automatically move tasks, assign reviewers, and update statuses.",
            icon: Terminal,
            color: "text-green-500",
            bg: "bg-green-50"
        },
        {
            title: "Release Management",
            description: "Plan and track releases to ship high-quality software on time.",
            icon: Rocket,
            color: "text-indigo-500",
            bg: "bg-indigo-50"
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl sm:text-4xl font-black text-[#292D34] mb-6">
                        Everything your engineering team needs
                    </h2>
                    <p className="text-lg text-gray-500">
                        From backlog to release, ClickUp unifies your entire development lifecycle.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all"
                        >
                            <div className={`w-14 h-14 ${feature.bg} rounded-xl flex items-center justify-center mb-6 ${feature.color}`}>
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-[#292D34] mb-3">{feature.title}</h3>
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
