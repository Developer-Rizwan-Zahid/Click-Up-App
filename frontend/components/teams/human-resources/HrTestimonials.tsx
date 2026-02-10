"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function HrTestimonials() {
    const reviews = [
        {
            quote: "ClickUp has been a game-changer for our agency. We have a complete HR recruitment process in place.",
            author: "Matt J",
            role: "Agency Owner"
        },
        {
            quote: "Project management, time management, HR recruiting pipeline, company knowledge base—with ClickUp you have all these integrated.",
            author: "Zeno P",
            role: "Managing Partner"
        },
        {
            quote: "I'm basically running an entire HR task workflow and recruiting tracking off of ClickUp, and I've never had a problem.",
            author: "Daniel",
            role: "Owner"
        }
    ];

    return (
        <section className="py-24 bg-[#0B0D15] text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6">Why HR and people teams love ClickUp</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Join HR teams worldwide who use ClickUp to build their dream teams.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm hover:border-green-500/50 transition-colors"
                        >
                            <div className="mb-6">
                                <div className="flex gap-1 text-yellow-400 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} fill="currentColor" size={16} />
                                    ))}
                                </div>
                            </div>
                            <blockquote className="text-lg leading-relaxed mb-6 font-medium">
                                "{review.quote}"
                            </blockquote>
                            <div>
                                <div className="font-bold">{review.author}</div>
                                <div className="text-gray-400 text-sm">{review.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
