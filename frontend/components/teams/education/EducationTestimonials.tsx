"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function EducationTestimonials() {
    const testimonials = [
        {
            name: "Brian T",
            role: "Associate Professor of Physics and Astronomy",
            quote: "Great layout and many customization options. Even better, the free version is very full-featured and works great for personal use. I've been using it to keep track of my various tasks as a college faculty member."
        },
        {
            name: "Christopher Sa",
            role: "Department Administrator",
            quote: "I have used Microsoft Teams, Slack, and Trello, and none of them have come close to my experience with ClickUp. I love the modern UI and I find ClickUp easier to use than any other software."
        }
    ];

    return (
        <section className="py-24 bg-blue-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-[#292D34] mb-6 text-balance">
                        Educators and administrators love ClickUp
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-3xl shadow-sm border border-blue-100 flex flex-col justify-between"
                        >
                            <div className="mb-6 flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <blockquote className="text-xl text-[#292D34] font-medium leading-relaxed mb-8">
                                "{item.quote}"
                            </blockquote>
                            <div>
                                <div className="font-bold text-[#292D34] text-lg">{item.name}</div>
                                <div className="text-blue-600 font-semibold">{item.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
