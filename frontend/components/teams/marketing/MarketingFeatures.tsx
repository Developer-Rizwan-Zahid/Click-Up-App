"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function MarketingFeatures() {
    const features = [
        {
            title: "Build campaigns & content at lightning speed",
            description: "Fast-track your marketing campaigns and content creation with ClickUp AI. Generate campaign ideas, content briefs, blogs, case studies, emails and more with expert-crafted AI tools.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2370&auto=format&fit=crop",
            points: [
                "Generate content briefs & blogs instantly",
                "Automate email copy & campaign ideas",
                "Summarize meeting notes into action items"
            ]
        },
        {
            title: "Turn quarterly plans into daily wins",
            description: "Connect your marketing roadmaps directly to the tasks that drive them forward. With ClickUp, your strategy Docs, brainstorms, and campaign calendars live alongside your team's daily work.",
            image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2370&auto=format&fit=crop",
            points: [
                "Visualize visual roadmaps & timelines",
                "Align daily tasks with quarterly goals",
                "Track dependencies & milestones"
            ]
        },
        {
            title: "Turn teamwork into data",
            description: "Track and analyze progress towards your marketing goals in detail and at a glance. With ClickUp, everyone stays up to date with visual Dashboards that contextualize tasks connected to your roadmap.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop",
            points: [
                "Custom dashboards for every campaign",
                "Real-time reporting on KPIs & OKRs",
                "Identify trends & optimize performance"
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
                                            <CheckCircle2 className="text-pink-500 flex-shrink-0" size={24} />
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                <Button variant="ghost" className="text-pink-600 hover:text-pink-700 hover:bg-pink-50 pl-0 text-lg font-bold group mt-4">
                                    Learn more <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                                </Button>
                            </div>

                            <div className="flex-1 w-full">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100 bg-gray-50 aspect-video group hover:shadow-3xl transition-shadow duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Mock UI Overlay */}
                                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 max-w-xs transform group-hover:-translate-y-2 transition-transform duration-500 delay-100">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-xs">Launch</div>
                                            <div className="text-sm font-bold text-gray-800">Q3 Campaign</div>
                                        </div>
                                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full w-3/4 bg-pink-500 rounded-full" />
                                        </div>
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
