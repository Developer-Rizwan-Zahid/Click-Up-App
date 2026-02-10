"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HrFeatures() {
    const features = [
        {
            title: "Simplify people management",
            description: "Track employee performance, engagement, and development with customizable views that make it easy to align your workforce. Create a central hub for employee info.",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2370&auto=format&fit=crop",
            points: [
                "Track performance & engagement",
                "Centralized employee directory",
                "Confidential manager feedback"
            ]
        },
        {
            title: "Streamline your recruitment pipeline",
            description: "Engage top talent with a system that organizes candidates, applications, and outreach. Save time with templates, custom statuses, and automations.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2369&auto=format&fit=crop",
            points: [
                "Organize candidates & applications",
                "Automate outreach & follow-ups",
                "Custom recruitment pipelines"
            ]
        },
        {
            title: "Create the best onboarding experience",
            description: "Empower new hires to make an impact faster with an onboarding solution that equips them for success. Streamline training with trackable tasks and docs.",
            image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2370&auto=format&fit=crop",
            points: [
                "Trackable training tasks",
                "Centralized onboarding docs",
                "Interactive feedback loops"
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
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100 bg-gray-50 aspect-video group hover:shadow-3xl transition-shadow duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Mock UI Overlay */}
                                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 max-w-xs transform group-hover:-translate-y-2 transition-transform duration-500 delay-100">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs">HR</div>
                                            <div className="text-sm font-bold text-gray-800">New Hire Onboarding</div>
                                        </div>
                                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full w-2/3 bg-green-500 rounded-full" />
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
