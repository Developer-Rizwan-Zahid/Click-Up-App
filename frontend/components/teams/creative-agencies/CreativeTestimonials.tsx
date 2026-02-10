"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function CreativeTestimonials() {
    const testimonials = [
        {
            quote: "We use ClickUp wall-to-wall, from our Services Team to Client Success to Executives. As a large marketing agency, ClickUp gives us the work visibility we need.",
            author: "Lauren Makielski",
            role: "Chief of Staff at Hawke Media"
        },
        {
            quote: "Everything is set up in such a streamlined way. If we’re working on 40 websites at once, we’ve eliminated having people having to shout over to another person.",
            author: "Chaya Fishman",
            role: "President at Brand Right Marketing"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#292D34]">
                        Agency teams love ClickUp
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-10 rounded-3xl bg-pink-50 border border-pink-100 flex flex-col justify-between relative"
                        >
                            <Quote className="absolute top-8 right-8 text-pink-200" size={48} />
                            <blockquote className="text-xl text-[#292D34] font-medium leading-relaxed mb-8 pr-12">
                                "{t.quote}"
                            </blockquote>
                            <div>
                                <div className="font-bold text-lg text-[#292D34]">{t.author}</div>
                                <div className="text-pink-600 font-semibold">{t.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
