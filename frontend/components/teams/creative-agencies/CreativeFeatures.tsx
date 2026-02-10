"use client";

import { motion } from "framer-motion";
import { Eye, Zap, Layout, Clock } from "lucide-react";

export function CreativeFeatures() {
    const pillars = [
        {
            title: "Always see the full picture",
            description: "Tap into team, task, and project insights to make better business decisions. Visualize work with 15+ customizable views.",
            icon: Eye,
            color: "text-pink-500",
            bg: "bg-pink-50"
        },
        {
            title: "Eliminate the admin busywork",
            description: "Save most-used tasks as templates. Put routine work on autopilot with 50+ automation actions and triggers.",
            icon: Zap,
            color: "text-orange-500",
            bg: "bg-orange-50"
        },
        {
            title: "Tackle work your way",
            description: "Simplify creative workflows and collaborate with your team in one powerful platform. Break projects into tasks.",
            icon: Layout,
            color: "text-magenta-500",
            bg: "bg-fuchsia-50"
        },
        {
            title: "See progress in real time",
            description: "Create highly visual Dashboards to see all metrics. Add widgets for invoices, reminders, and requests.",
            icon: Clock,
            color: "text-blue-500",
            bg: "bg-blue-50"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-3xl border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                        >
                            <div className={`w-14 h-14 ${pillar.bg} ${pillar.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform`}>
                                <pillar.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-[#292D34] mb-4">{pillar.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{pillar.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
