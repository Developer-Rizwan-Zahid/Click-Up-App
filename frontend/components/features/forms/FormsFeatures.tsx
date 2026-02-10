'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Share2, Eye, Layout } from 'lucide-react';

const blocks = [
    {
        title: 'Dig deeper with conditional logic',
        description: 'Create dynamic forms that only show relevant fields based on previous answers, capturing higher-quality data without overwhelming users.',
        icon: <Layout className="w-6 h-6 text-indigo-500" />,
        mockup: (
            <div className="relative h-64 bg-zinc-900 rounded-3xl p-6 border border-white/10 overflow-hidden group">
                <div className="space-y-4">
                    <div className="h-10 w-full bg-white/5 rounded-xl border border-white/10 p-3 flex items-center justify-between">
                        <div className="h-2 w-32 bg-white/20 rounded" />
                        <div className="w-8 h-4 bg-indigo-500 rounded-full" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 ml-6"
                    >
                        <div className="h-2 w-24 bg-indigo-400 rounded mb-4" />
                        <div className="grid grid-cols-2 gap-3">
                            <div className="h-6 bg-white/5 rounded-lg" />
                            <div className="h-6 bg-white/5 rounded-lg" />
                        </div>
                    </motion.div>
                </div>
            </div>
        )
    },
    {
        title: 'Make them your own',
        description: 'Complete branding control. Add your company logo, custom colors, and background images to create a professional look.',
        icon: <Palette className="w-6 h-6 text-pink-500" />,
        mockup: (
            <div className="relative h-64 bg-gradient-to-br from-pink-500/10 to-transparent rounded-3xl p-8 border border-zinc-100 overflow-hidden">
                <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-zinc-100">
                    <div className="w-6 h-6 bg-pink-500 rounded-lg" />
                </div>
                <div className="max-w-[180px] space-y-4">
                    <div className="h-4 w-full bg-zinc-900 rounded" />
                    <div className="h-4 w-2/3 bg-zinc-900/60 rounded" />
                    <div className="pt-4 flex gap-2">
                        <div className="w-4 h-4 rounded-full bg-pink-500" />
                        <div className="w-4 h-4 rounded-full bg-indigo-500" />
                        <div className="w-4 h-4 rounded-full bg-amber-500" />
                    </div>
                </div>
            </div>
        )
    },
    {
        title: 'Share anywhere',
        description: 'Embed forms on any webpage or share them via a public link. Collect responses from anyone, even if they don\'t have a ClickUp account.',
        icon: <Share2 className="w-6 h-6 text-blue-500" />,
        mockup: (
            <div className="relative h-64 bg-zinc-50 rounded-3xl p-6 border border-zinc-100 overflow-hidden">
                <div className="max-w-xs mx-auto space-y-4 pt-10">
                    <div className="h-3 w-32 bg-zinc-200 rounded mx-auto" />
                    <div className="h-10 w-full bg-white rounded-xl border border-zinc-200 shadow-sm flex items-center px-3 justify-between">
                        <div className="h-2 w-48 bg-zinc-100 rounded" />
                        <div className="px-3 py-1 bg-blue-500 text-white text-[10px] font-bold rounded-lg">COPY</div>
                    </div>
                    <div className="flex justify-center gap-4 pt-4 opacity-50">
                        <div className="w-8 h-8 rounded-lg bg-zinc-200" />
                        <div className="w-8 h-8 rounded-lg bg-zinc-200" />
                        <div className="w-8 h-8 rounded-lg bg-zinc-200" />
                    </div>
                </div>
            </div>
        )
    }
];

export default function FormsFeatures() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    {blocks.map((block, index) => (
                        <motion.div
                            key={block.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="space-y-8"
                        >
                            <div className="mb-6">{block.mockup}</div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-100">
                                    {block.icon}
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900">{block.title}</h3>
                            </div>
                            <p className="text-zinc-500 font-medium leading-relaxed">
                                {block.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
