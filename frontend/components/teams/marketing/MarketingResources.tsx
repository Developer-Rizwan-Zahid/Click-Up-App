"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

export function MarketingResources() {
    const resources = [
        {
            title: "How our marketing team uses ClickUp",
            category: "Blog",
            link: "#"
        },
        {
            title: "Managing content marketing projects",
            category: "Guide",
            link: "#"
        },
        {
            title: "ClickUp for Marketing Teams",
            category: "Webinar",
            link: "#"
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#292D34] mb-6">
                        Resources & tips for marketing teams
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {resources.map((resource, index) => (
                        <motion.a
                            key={index}
                            href={resource.link}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="block group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-pink-100 transition-all duration-300"
                        >
                            <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600 mb-6 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                                <BookOpen size={20} />
                            </div>
                            <div className="text-xs font-bold text-pink-600 uppercase tracking-wider mb-3">
                                {resource.category}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">
                                {resource.title}
                            </h3>
                            <div className="flex items-center text-gray-400 text-sm font-bold group-hover:text-pink-500 transition-colors">
                                Read now <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
