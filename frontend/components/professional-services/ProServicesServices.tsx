"use client";

import { motion } from "framer-motion";
import { Users, Rocket, Target, Puzzle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const services = [
    {
        icon: Users,
        title: "ClickUp Assist",
        description: "Add ClickUp Assist for live, hands-on training with a dedicated Workflow expert. Get personalized support for workflow setup, workspace management, and team onboarding.",
        features: [
            "2 hours of 1:1 expert help each month",
            "Quarterly 1:1 Business Reviews",
            "2 live workshops per month",
            "Early access to live feature webinars"
        ],
        cta: "Get ClickUp Assist",
        color: "bg-blue-50 text-blue-600",
        buttonVariant: "default" as const
    },
    {
        icon: Rocket,
        title: "Professional Onboarding",
        description: "ClickUp is tailored to your organization’s unique needs. We'll work together with your core team at every stage to plan, design, and configure your Workspace.",
        features: [
            "Tailored workspace configuration",
            "Change management guidance",
            "Admin & user training sessions",
            "Go-live support"
        ],
        cta: "Learn More",
        color: "bg-purple-50 text-purple-600",
        buttonVariant: "outline" as const
    },
    {
        icon: Target,
        title: "Strategic Services",
        description: "Our Strategic Consultants help you do everything from managing day-to-day administrative functions to creating brand new workflows. Think of us as an extension of your team.",
        features: [
            "Workflow optimization",
            "Ongoing administrative support",
            "Custom solution design",
            "Dedicated strategic advisor"
        ],
        cta: "Contact Us",
        color: "bg-pink-50 text-pink-600",
        buttonVariant: "outline" as const
    },
    {
        icon: Puzzle,
        title: "Integration Services",
        description: "Our team can facilitate integrations between ClickUp and your systems to streamline your workflows. We help ensure your systems are gathering important information in one place.",
        features: [
            "Custom API integrations",
            "System synchronization",
            "Automated data flows",
            "Maintenance & hosting"
        ],
        cta: "Explore Integrations",
        color: "bg-orange-50 text-orange-600",
        buttonVariant: "outline" as const
    }
];

export function ProServicesServices() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Choose the right level of support</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">Whether you need a quick boost or a long-term partner, we have a service package for you.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${service.color} mb-4`}>
                                    <service.icon size={28} />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-gray-500 mb-8 leading-relaxed flex-grow">{service.description}</p>

                            <div className="space-y-3 mb-8">
                                {service.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <Button
                                variant={service.buttonVariant}
                                className={`w-full justify-between group ${service.buttonVariant === 'default' ? 'bg-[#7B68EE] hover:bg-[#6c5ce7]' : ''}`}
                            >
                                {service.cta}
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
