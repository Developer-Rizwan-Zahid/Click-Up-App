"use client";

import { motion } from "framer-motion";
import { Layout, Users, Zap, BarChart3, Calendar, ListTodo } from "lucide-react";

export function PMFeatures() {
    const features = [
        {
            title: "Customizable Views",
            description: "Visualize your projects your way with 15+ views including List, Board, and Gantt.",
            icon: Layout,
            color: "text-blue-500",
            bg: "bg-blue-50"
        },
        {
            title: "Team Collaboration",
            description: "Work together in real-time with shared docs, comments, and proofing.",
            icon: Users,
            color: "text-purple-500",
            bg: "bg-purple-50"
        },
        {
            title: "Task Automation",
            description: "Save time by automating routine tasks and workflows with no code required.",
            icon: Zap,
            color: "text-yellow-500",
            bg: "bg-yellow-50"
        },
        {
            title: "Real-time Reporting",
            description: "Get instant insights into project progress, team performance, and resources.",
            icon: BarChart3,
            color: "text-green-500",
            bg: "bg-green-50"
        },
        {
            title: "Time Management",
            description: "Track time, set estimates, and manage workloads to stay on schedule.",
            icon: Calendar,
            color: "text-red-500",
            bg: "bg-red-50"
        },
        {
            title: "Task Dependencies",
            description: "Link tasks, documents, and integrations to keep everything connected.",
            icon: ListTodo,
            color: "text-indigo-500",
            bg: "bg-indigo-50"
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl sm:text-4xl font-black text-[#292D34] mb-6">
                        Everything you need to ship projects faster
                    </h2>
                    <p className="text-lg text-gray-500">
                        ClickUp connects your team, tasks, and tools in one place, so you can focus on what matters most.
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
