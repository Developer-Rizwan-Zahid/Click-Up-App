"use client";

import { motion } from "framer-motion";

export function DemoWorkflows() {
    const personas = [
        {
            title: "Project Management",
            description: "Check out how ClickUp helps you easily prioritize work and ensure nothing falls through the cracks.",
            image: "https://clickup.com/assets/on-demand-demo/teams.png" 
        },
        {
            title: "Executives",
            description: "Discover how ClickUp gives you full visibility into the business and helps you quickly adapt to change.",
            image: "https://clickup.com/assets/on-demand-demo/executives.png"
        },
        {
            title: "Managers",
            description: "See how ClickUp helps you boost collaboration across your team and manage resources more effectively.",
            image: "https://clickup.com/assets/on-demand-demo/managers.png"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="text-[#7b68ee] font-bold tracking-widest text-sm uppercase mb-4">
                        Workflows
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-black text-[#292D34] mb-6 tracking-tight">
                        Experience a day in the life with <span className="text-gray-500">ClickUp</span>
                    </h2>
                    <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
                        Learn how ClickUp can make your workday better, whether you're an individual contributor, senior executive, or anyone in between.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {personas.map((persona, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all border border-gray-100"
                        >
                            <div className="p-6 pb-2">
                                <h3 className="text-xl font-bold text-[#292D34] mb-4">{persona.title}</h3>
                            </div>
                            <div className="px-6 mb-6">
                                <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
                                    <img
                                        src={persona.image}
                                        alt={persona.title}
                                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            <div className="px-6 pb-8">
                                <p className="text-gray-500 leading-relaxed text-sm">
                                    {persona.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
