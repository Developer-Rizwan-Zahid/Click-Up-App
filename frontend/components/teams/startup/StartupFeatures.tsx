"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function StartupFeatures() {
    const features = [
        {
            title: "Connect your roadmaps to daily work",
            description: "Manage everything from product roadmaps to sales pipelines in a single place. Schedule releases on a Calendar, create bug tracking systems on a List, or adjust timelines on a Gantt chart.",
            image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2370&auto=format&fit=crop",
            points: [
                "10+ customizable views",
                "Gantt chart timelines",
                "Product roadmaps"
            ]
        },
        {
            title: "Scale from startup to unicorn",
            description: "Build the perfect organization that grows with your startup. ClickUp's Hierarchy makes it easy to expand your team and manage more complex projects as you bring on more resources.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2370&auto=format&fit=crop",
            points: [
                "Flexible Hierarchy",
                "Scalable permissions",
                "Custom Workspaces"
            ]
        },
        {
            title: "Move team ideas to action, faster",
            description: "Create beautiful Docs, wikis, and more—then connect them to workflows to execute on ideas with your team. Assign comments with action items and chat in real-time.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2370&auto=format&fit=crop",
            points: [
                "Docs & Wikis",
                "Real-time Chat",
                "Assignable Comments"
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
                                            <CheckCircle2 className="text-purple-500 flex-shrink-0" size={24} />
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                <Button variant="ghost" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 pl-0 text-lg font-bold group mt-4">
                                    Learn more <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                                </Button>
                            </div>

                            <div className="flex-1 w-full">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-200/50 border border-purple-100 bg-white aspect-video group hover:shadow-3xl transition-shadow duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Mock UI Overlay */}
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 max-w-xs transform group-hover:-translate-y-2 transition-transform duration-500 delay-100">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-2 h-2 rounded-full bg-purple-500" />
                                            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Status Update</div>
                                        </div>
                                        <div className="text-sm font-bold text-gray-800">Launch v2.0 Roadmap completed! 🚀</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
