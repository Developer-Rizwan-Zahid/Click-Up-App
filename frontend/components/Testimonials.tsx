"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
    {
        text: "ClickUp has completely transformed how our team collaborates. It's the only tool we need.",
        name: "Sarah Chen",
        role: "Product Manager at TechFlow",
        avatar: "/avatars/avatar-1.png", // Placeholder, will handle if missing
    },
    {
        text: "The customization options are endless. We built our entire workflow in minutes.",
        name: "Marcus Rodriguez",
        role: "Director of Ops at SwiftStream",
        avatar: "/avatars/avatar-2.png",
    },
    {
        text: "Finally, a project management tool that doesn't feel like a chore to use. Simply beautiful.",
        name: "Emily Watson",
        role: "Designer at CreativeMinds",
        avatar: "/avatars/avatar-3.png",
    },
    {
        text: "Our productivity has increased by 40% since switching to ClickUp. Highly recommended.",
        name: "David Kim",
        role: "CTO at InnovateLabs",
        avatar: "/avatars/avatar-4.png",
    },
    {
        text: "The best all-in-one platform I've ever used. It replaced 5 other tools for us.",
        name: "Jessica Park",
        role: "Founder at StartUp Inc",
        avatar: "/avatars/avatar-5.png",
    },
];

export const Testimonials = () => {
    // Duplicate for infinite scroll effect
    const allTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="py-24 bg-white dark:bg-black overflow-hidden">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-gray-900 dark:text-white">
                    Loved by teams everywhere
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    See what our customers have to say about their experience.
                </p>
            </div>

            <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,black,transparent)]">
                <motion.div
                    className="flex gap-8 flex-none"
                    animate={{
                        translateX: "-50%",
                    }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                    }}
                >
                    {allTestimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex-none w-[350px] bg-gray-50 dark:bg-zinc-900/50 p-8 rounded-2xl border border-gray-100 dark:border-zinc-800"
                        >
                            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                "{testimonial.text}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-zinc-700 flex items-center justify-center text-sm font-bold text-gray-500 dark:text-gray-400">
                                    {testimonial.name[0]}
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
