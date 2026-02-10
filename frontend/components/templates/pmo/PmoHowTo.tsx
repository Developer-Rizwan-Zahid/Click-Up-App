"use client";

import { motion } from "framer-motion";

export function PmoHowTo() {
    const steps = [
        {
            number: "01",
            title: "Import & Customize",
            desc: "Add the template to your Space and customize the Custom Fields for your specific project KPIs."
        },
        {
            number: "02",
            title: "Set Your Milestones",
            desc: "Map out your key project milestones and dependencies using the pre-built Gantt chart view."
        },
        {
            number: "03",
            title: "Share with Stakeholders",
            desc: "Invite your team and external stakeholders to collaborate in real-time with shared views and docs."
        }
    ];

    return (
        <section className="py-24 bg-gray-50 border-y border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl font-bold text-[#292D34] mb-6">How to get started</h2>
                    <p className="text-xl text-gray-500">
                        Set up your professional PMO workspace in three simple steps.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative p-10 bg-white rounded-3xl shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-500"
                        >
                            <div className="text-6xl font-black text-blue-50 mb-6 group-hover:text-blue-100 transition-colors">
                                {step.number}
                            </div>
                            <h3 className="text-2xl font-bold text-[#292D34] mb-4 group-hover:text-blue-600 transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed text-lg">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
