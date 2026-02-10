"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function NonProfitTestimonials() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <Quote className="mx-auto text-green-200 mb-8" size={64} />
                    <h2 className="text-3xl md:text-5xl font-bold text-[#292D34] mb-12 leading-tight">
                        "ClickUp has been a game-changer for our organization. It allows us to focus less on managing tasks and more on our mission to help those in need."
                    </h2>

                    <div className="flex items-center justify-center gap-4">
                        <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                            {/* Placeholder generic avatar */}
                            <img src="https://ui-avatars.com/api/?name=Sarah+J&background=random" alt="Avatar" />
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-lg text-[#292D34]">Sarah Jenkins</div>
                            <div className="text-gray-500">Director of Operations, Global Aid Initiative</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
