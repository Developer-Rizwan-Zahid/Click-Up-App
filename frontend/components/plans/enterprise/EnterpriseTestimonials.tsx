"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function EnterpriseTestimonials() {
    const stories = [
        {
            company: "Cartoon Network",
            stat: "2x",
            desc: "Increased output in half the time",
            quote: "We've seen a massive 2x increase in our team's creative output since switching to ClickUp."
        },
        {
            company: "VMware",
            stat: "8x",
            desc: "Faster project setup",
            quote: "ClickUp gives us the flexibility to manage projects our way, but with 8x the speed."
        },
        {
            company: "Finastra",
            stat: "40%",
            desc: "Decrease in meetings",
            quote: "We're spending less time in meetings and more time building great products thanks to ClickUp."
        }
    ];

    return (
        <section className="py-24 bg-[#11131F] text-white border-t border-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6">Proven results at scale</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {stories.map((story, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gradient-to-br from-gray-800 to-gray-900 p-1 rounded-2xl"
                        >
                            <div className="bg-[#0B0D15] h-full rounded-xl p-8 flex flex-col">
                                <div className="text-4xl font-black text-blue-500 mb-2">{story.stat}</div>
                                <div className="text-lg font-bold text-white mb-6">{story.desc}</div>
                                <blockquote className="flex-1 text-gray-400 italic mb-6">"{story.quote}"</blockquote>
                                <div className="flex items-center gap-2 mt-auto">
                                    <div className="font-bold text-gray-300">{story.company}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
