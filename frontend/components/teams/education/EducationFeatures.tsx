"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function EducationFeatures() {
    const features = [
        {
            title: "Create & share your curriculum",
            description: "Develop your coursework and easily share it with students. Create course syllabi and knowledge bases in docs, and store lecture details like due dates, lesson plans, and notes in tasks.",
            image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=2370&auto=format&fit=crop",
            points: [
                "Interactive Docs for syllabi",
                "Lesson plan storage",
                "Shared knowledge bases"
            ]
        },
        {
            title: "Visualize your schedule",
            description: "Plan your academic year with powerful Calendar, Gantt, and Timeline views. Keep track of exams, assignment deadlines, and lectures across multiple courses simultaneously.",
            image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2370&auto=format&fit=crop",
            points: [
                "Customizable Calendar views",
                "Assignment deadline alerts",
                "Multi-course timelines"
            ]
        },
        {
            title: "Collaborate with your peers",
            description: "Create chat channels to simplify collaboration and notify individuals or entire teams of important updates. Connect your email to ClickUp to manage communication effortlessly.",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2370&auto=format&fit=crop",
            points: [
                "Real-time Chat channels",
                "Email integration",
                "Team-wide notifications"
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
                                            <CheckCircle2 className="text-blue-500 flex-shrink-0" size={24} />
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 pl-0 text-lg font-bold group mt-4">
                                    Learn more <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                                </Button>
                            </div>

                            <div className="flex-1 w-full">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-50 border border-blue-50 bg-white aspect-video group hover:shadow-3xl transition-shadow duration-500">
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
