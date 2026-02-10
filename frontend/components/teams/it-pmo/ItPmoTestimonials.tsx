"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function ItPmoTestimonials() {
    const reviews = [
        {
            quote: "ClickUp is serving us so we can serve our pet guardians.",
            author: "Samantha Dengate",
            role: "Sr. Project Manager"
        },
        {
            quote: "ClickUp is the best thing I've rolled out in the past two years.",
            author: "Lauren Makielski",
            role: "Chief of Staff"
        },
        {
            quote: "It's a low-code platform that helps us automate processes.",
            author: "Joerg Klueckmann",
            role: "VP of Marketing"
        }
    ];

    return (
        <section className="py-24 bg-[#0B0D15] text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6">Real teams, unreal results</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        From IT to marketing, operations to product—ClickUp brings teams together in one AI-powered Workspace to achieve goals big and small, faster.
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
                            className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm hover:border-blue-500/50 transition-colors"
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
