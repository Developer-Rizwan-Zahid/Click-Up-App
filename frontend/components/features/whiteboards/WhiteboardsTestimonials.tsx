'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ company, quote, name, title, bgImage, logo, index }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative h-[600px] rounded-[2.5rem] overflow-hidden group cursor-pointer"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${bgImage})` }}
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

            {/* Content */}
            <div className="absolute inset-0 p-10 flex flex-col justify-end items-start">
                <div className="mb-6 transform transition-transform duration-500 group-hover:-translate-y-2">
                    {logo}
                </div>

                <blockquote className="text-2xl font-bold text-white mb-8 leading-tight tracking-tight transform transition-transform duration-500 group-hover:-translate-y-2">
                    "{quote}"
                </blockquote>

                <div className="flex flex-col gap-1 transform transition-transform duration-500 group-hover:-translate-y-2">
                    <span className="text-white font-bold text-lg">{name}</span>
                    <span className="text-zinc-400 font-medium">{title}</span>
                </div>
            </div>
        </motion.div>
    );
};

export default function WhiteboardsTestimonials() {
    const testimonials = [
        {
            company: "Hawke Media",
            quote: "ClickUp is the best thing I've rolled out in the past two years.",
            name: "Lauren Makielski",
            title: "Chief of Staff",
            bgImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
            logo: (
                <div className="text-white flex items-center gap-2">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    <span className="text-xl font-black italic tracking-tighter">hawkemedia</span>
                </div>
            )
        },
        {
            company: "Finastra",
            quote: "It's a low-code platform that helps us automate processes.",
            name: "Joerg Klueckmann",
            title: "VP of Marketing",
            bgImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
            logo: (
                <div className="text-white">
                    <span className="text-lg font-bold">In</span>
                    <div className="text-2xl font-black tracking-tighter leading-none">FINASTRA</div>
                </div>
            )
        },
        {
            company: "Diggs",
            quote: "ClickUp is serving us so we can serve our pet guardians.",
            name: "Samantha Dengate",
            title: "Sr. Project Manager",
            bgImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
            logo: (
                <div className="text-white text-3xl font-black tracking-tighter italic">
                    DIGGS
                </div>
            )
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-20 px-4">
                    <h2 className="text-5xl md:text-[64px] leading-[1.1] font-bold text-zinc-900 mb-6 font-sans tracking-tight">
                        Don't just take our word for it
                    </h2>
                </div>

                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                index={index}
                                {...testimonial}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
