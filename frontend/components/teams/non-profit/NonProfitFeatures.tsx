"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function NonProfitFeatures() {
    const features = [
        {
            title: "Track your funding goals",
            description: "Put together budgets and reporting for donors by calculating donations, hours spent, and more with Custom Fields and Formulas.",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2370&auto=format&fit=crop",
            points: [
                "Budget tracking",
                "Donor reporting",
                "Custom Formulas"
            ]
        },
        {
            title: "Manage & maximize team resources",
            description: "Manage hours for volunteers and report on the time spent. Use time tracking in ClickUp to track hours volunteered and add notes and tags to easily differentiate time.",
            image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2370&auto=format&fit=crop",
            points: [
                "Volunteer hours",
                "Time tracking",
                "Resource reporting"
            ]
        },
        {
            title: "Collaborate on projects with your teams",
            description: "Assign anyone on your team to tasks so everyone knows what they need to do. Add multiple assignees to tasks, set subtasks, and track progress from your Dashboard.",
            image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2370&auto=format&fit=crop",
            points: [
                "Task assignment",
                "Multiple assignees",
                "Progress Dashboards"
            ]
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-32">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            <div className="flex-1 space-y-8">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#292D34] leading-tight">
                                    {feature.title}
                                </h2>
                                <p className="text-xl text-gray-500 leading-relaxed">
                                    {feature.description}
                                </p>

                                <ul className="space-y-4">
                                    {feature.points.map((point, i) => (
                                        <li key={i} className="flex items-center gap-3 text-lg text-gray-700 font-medium">
                                            <CheckCircle2 className="text-green-500 flex-shrink-0" size={24} />
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                <Button variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50 pl-0 text-lg font-bold group mt-4">
                                    Learn more <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                                </Button>
                            </div>

                            <div className="flex-1 w-full">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-green-100 border border-green-50 bg-white aspect-video group hover:shadow-3xl transition-shadow duration-500">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
