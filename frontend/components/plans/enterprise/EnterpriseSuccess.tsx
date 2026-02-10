"use client";

import { motion } from "framer-motion";
import { Headphones, GraduationCap, Users, UserCheck } from "lucide-react";

export function EnterpriseSuccess() {
    const supports = [
        {
            title: "Dedicated Support",
            description: "24/7 priority support for your team, no matter the timezone.",
            icon: Headphones
        },
        {
            title: "ClickUp University",
            description: "Comprehensive courses to deepen your team's expertise.",
            icon: GraduationCap
        },
        {
            title: "Onboarding",
            description: "Guided onboarding to help you ramp up quickly and effectively.",
            icon: Users
        },
        {
            title: "Success Manager",
            description: "A dedicated partner to help you achieve your business goals.",
            icon: UserCheck
        }
    ];

    return (
        <section className="py-24 bg-[#0B0D15] text-white border-t border-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Supporting your team around the clock
                    </h2>
                    <p className="text-xl text-gray-400">
                        Our world-class support and success teams are here to ensure your enterprise journey is smooth and successful.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {supports.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-900 p-8 rounded-2xl border border-gray-800 flex flex-col items-center hover:border-indigo-500/50 transition-colors"
                        >
                            <div className="w-14 h-14 bg-indigo-900/20 rounded-full flex items-center justify-center mb-6 text-indigo-400">
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
