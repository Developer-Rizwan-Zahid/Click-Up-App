"use client";

import { motion } from "framer-motion";
import { PlayCircle, BookOpen, GraduationCap, Video, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const resources = [
    {
        icon: PlayCircle,
        title: "On-Demand Demos",
        description: "ClickUp video tutorials based on every experience level.",
        color: "text-red-500",
        bg: "bg-red-50"
    },
    {
        icon: BookOpen,
        title: "Knowledge Base",
        description: "Expansive help desk with hundreds of use cases articles.",
        color: "text-blue-500",
        bg: "bg-blue-50"
    },
    {
        icon: GraduationCap,
        title: "ClickUp University",
        description: "Online learning platform offering courses, videos, and quizzes.",
        color: "text-purple-500",
        bg: "bg-purple-50"
    },
    {
        icon: Video,
        title: "Webinars",
        description: "Live and pre-recorded sessions available for any industry.",
        color: "text-pink-500",
        bg: "bg-pink-50"
    },
    {
        icon: BadgeCheck,
        title: "Verified Consultants",
        description: "Find a vetted expert to help you build your workspace.",
        color: "text-green-500",
        bg: "bg-green-50"
    }
];

export function ProServicesResources() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Additional Resources</h2>
                    <p className="text-gray-500">Explore more ways to learn and grow with ClickUp.</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {resources.map((resource, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-purple-200 hover:shadow-lg transition-all cursor-pointer flex flex-col items-center text-center"
                        >
                            <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110", resource.bg, resource.color)}>
                                <resource.icon size={32} />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">{resource.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{resource.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
