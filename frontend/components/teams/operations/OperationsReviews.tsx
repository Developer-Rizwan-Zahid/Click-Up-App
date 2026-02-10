"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function OperationsReviews() {
    const reviews = [
        {
            quote: "We’ve automated nearly half of our manual tasks, significantly improving efficiency and freeing up time for higher-value work.",
            author: "Peter P.",
            role: "Operations Manager"
        },
        {
            quote: "What I love most about ClickUp is how it replaces multiple tools in one place. No more switching between multiple apps. It offers an unparalleled number of features compared to other software.",
            author: "Marco S.",
            role: "Director of Operations"
        },
        {
            quote: "The ability to save and reuse templates for preparing for those workshops has increased our productivity and reduced errors and frustration.",
            author: "Laura D.",
            role: "Project Lead"
        }
    ];

    return (
        <section className="py-24 bg-purple-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6">Why operations teams love ClickUp</h2>
                    <div className="flex justify-center gap-1 text-yellow-400 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} fill="currentColor" size={24} />
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-purple-800/50 p-8 rounded-2xl border border-purple-700 backdrop-blur-sm"
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
                                <div className="text-purple-300 text-sm">{review.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
