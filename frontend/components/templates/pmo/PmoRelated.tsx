"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export function PmoRelated() {
    const templates = [
        {
            title: "Agile Project Management",
            category: "Software Team",
            rating: "5.0",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop"
        },
        {
            title: "Resource Planning",
            category: "Operations",
            rating: "4.8",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2370&auto=format&fit=crop"
        },
        {
            title: "Creative Agency",
            category: "Marketing",
            rating: "4.9",
            image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2371&auto=format&fit=crop"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-end justify-between mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl font-bold text-[#292D34] mb-4">Related Templates</h2>
                        <p className="text-xl text-gray-500">Explore other high-performance templates for your office.</p>
                    </div>
                    <Link href="/templates" className="hidden md:flex items-center gap-2 font-bold text-blue-600 hover:translate-x-1 transition-transform">
                        View all <ArrowRight size={20} />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {templates.map((template, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="aspect-video relative overflow-hidden">
                                <img
                                    src={template.image}
                                    alt={template.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold text-blue-600 shadow-sm">
                                        {template.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-1">
                                        <Star size={14} className="fill-blue-600 text-blue-600" />
                                        <span className="text-sm font-bold text-gray-900">{template.rating}</span>
                                    </div>
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">PM Favorites</span>
                                </div>
                                <h3 className="text-xl font-bold text-[#292D34] mb-6 group-hover:text-blue-600 transition-colors">
                                    {template.title}
                                </h3>
                                <Link href="#" className="flex items-center text-sm font-bold text-gray-900 uppercase tracking-widest group-hover:gap-3 transition-all">
                                    Use Template <ArrowRight size={16} className="ml-2 text-blue-600" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
