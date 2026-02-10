"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Layout, Zap, Users, Shield } from "lucide-react";

export function DemoLearnMore() {
    const features = [
        {
            title: "Task Management",
            description: "Plan, organize, and collaborate on any project with powerful task management customizable to your needs.",
            icon: Layout
        },
        {
            title: "Customization",
            description: "Tailor ClickUp to your team's specific workflows with 35+ ClickApps and completely customizable views.",
            icon: Zap
        },
        {
            title: "Collaboration",
            description: "Work together in real-time with Chat, Docs, Whiteboards, and comments directly on tasks.",
            icon: Users
        },
        {
            title: "Docs & Whiteboards",
            description: "Capture ideas and document processes directly alongside your work without switching apps.",
            icon: Shield
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4 text-[#292D34]">What you'll see in this demo</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Discover how ClickUp replaces all your disparate tools with one unified platform.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-[#7b68ee]">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-3 text-[#292D34]">{feature.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
