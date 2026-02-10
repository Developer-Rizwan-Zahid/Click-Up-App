'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ClipboardList, PenTool, Bug, Calendar } from 'lucide-react';

const templates = [
    {
        title: 'Product Feedback',
        description: 'Collect valuable insights from your users to improve your product.',
        icon: <FileText className="w-6 h-6 text-blue-500" />
    },
    {
        title: 'Service Request',
        description: 'Streamline how your team receives and processes internal requests.',
        icon: <ClipboardList className="w-6 h-6 text-purple-500" />
    },
    {
        title: 'Creative Brief',
        description: 'Ensure your creative team has all the context they need to succeed.',
        icon: <PenTool className="w-6 h-6 text-pink-500" />
    },
    {
        title: 'Bug Report',
        description: 'Standardize how bugs are reported and tracked by your QA team.',
        icon: <Bug className="w-6 h-6 text-red-500" />
    },
    {
        title: 'Event Registration',
        description: 'Easily manage attendee lists and preferences for your next event.',
        icon: <Calendar className="w-6 h-6 text-orange-500" />
    }
];

export default function FormsTemplates() {
    return (
        <section className="py-24 bg-zinc-50/50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">Start with a template</h2>
                    <p className="text-zinc-500 font-medium">Get a head start with pre-built form templates for every use case.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                    {templates.map((template, index) => (
                        <motion.div
                            key={template.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 group cursor-pointer"
                        >
                            <div className="mb-6 p-4 rounded-2xl bg-zinc-50 w-fit group-hover:scale-110 transition-transform duration-500">
                                {template.icon}
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 mb-3">{template.title}</h3>
                            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                                {template.description}
                            </p>
                            <div className="text-blue-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                                Use template <span>→</span>
                            </div>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="p-8 rounded-[2rem] border-2 border-dashed border-zinc-200 flex flex-col items-center justify-center text-center group hover:border-blue-400 transition-colors"
                    >
                        <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                            <span className="text-2xl font-bold text-zinc-400 group-hover:text-blue-500">+</span>
                        </div>
                        <h3 className="font-bold text-zinc-500 group-hover:text-blue-600">Browse 1,000+ templates</h3>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
