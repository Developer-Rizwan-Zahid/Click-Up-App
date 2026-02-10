"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function SalesFeatures() {
    const features = [
        {
            title: "Automate sales processes and close faster",
            description: "Minimize data entry and keep leads moving through your pipeline with automations. Automatically assign tasks based on deal stage and trigger status updates.",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2532&auto=format&fit=crop",
            points: [
                "Automate task assignments",
                "Trigger emails on status changes",
                "Alert team on stalled deals"
            ]
        },
        {
            title: "Visualize and manage your process with a flexible CRM",
            description: "Manage your sales team, track prospects, and always know your next move. Customize your workflow to visualize your entire pipeline on a List, Board, or Table view.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
            points: [
                "Kanban boards for pipeline",
                "List view for account details",
                "Custom fields for deal data"
            ]
        },
        {
            title: "Break down silos & collaborate on accounts",
            description: "Create tasks with subtasks so everyone knows what needs to be completed. Leave comments, assign action items, and chat right within ClickUp.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2370&auto=format&fit=crop",
            points: [
                "Contextual chat on every deal",
                "Shared docs for proposals",
                "Email integration for outreach"
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
                                            <CheckCircle2 className="text-orange-500 flex-shrink-0" size={24} />
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                <Button variant="ghost" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 pl-0 text-lg font-bold group mt-4">
                                    Learn more <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                                </Button>
                            </div>

                            <div className="flex-1 w-full">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100 bg-gray-50 aspect-video group hover:shadow-3xl transition-shadow duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Mock UI Overlay */}
                                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 max-w-xs transform group-hover:-translate-y-2 transition-transform duration-500 delay-100">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xs">$</div>
                                            <div className="text-sm font-bold text-gray-800">Deal Closed</div>
                                        </div>
                                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full w-full bg-green-500 rounded-full" />
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
