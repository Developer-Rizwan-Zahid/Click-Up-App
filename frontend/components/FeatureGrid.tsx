"use client";

import {
    CheckCircle2,
    Layout,
    ListTodo,
    Users,
    Zap,
    BarChart3
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        title: "Task Management",
        description: "Organize tasks with custom statuses, fields, and views to match your workflow perfectly.",
        icon: ListTodo,
        color: "bg-blue-500",
    },
    {
        title: "Real-time Chat",
        description: "Collaborate instantly with your team without leaving the context of your work.",
        icon: Users,
        color: "bg-purple-500",
    },
    {
        title: "Docs & Wikis",
        description: "Create beautiful docs, wikis, and knowledge bases connected directly to your tasks.",
        icon: Layout,
        color: "bg-pink-500",
    },
    {
        title: "Dashboards",
        description: "Visualize work with customizable charts and graphs to keep track of progress.",
        icon: BarChart3,
        color: "bg-orange-500",
    },
    {
        title: "Automations",
        description: "Save time by automating routine actions based on triggers and conditions.",
        icon: Zap,
        color: "bg-yellow-500",
    },
    {
        title: "Goal Tracking",
        description: "Set goals and track key results to align your team on what matters most.",
        icon: CheckCircle2,
        color: "bg-green-500",
    },
];

export const FeatureGrid = () => {
    return (
        <section id="features" className="py-24 bg-gray-50 dark:bg-zinc-900/50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-gray-900 dark:text-white">
                        One app to replace them all
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Stop switching between apps. Get everything you need to manage work in one place.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-6`}>
                                <feature.icon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
