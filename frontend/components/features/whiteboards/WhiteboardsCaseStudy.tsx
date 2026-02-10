'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function WhiteboardsCaseStudy() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-16 px-4">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#7b68ee] font-bold tracking-[0.2em] text-[11px] uppercase mb-4 block"
                    >
                        DRAGONFRUIT
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-[56px] leading-[1.1] font-bold text-zinc-900 mb-8 font-sans tracking-tight"
                    >
                        How ClickUp transformed Dragonfruit Media's content Planning
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-[20px] text-zinc-500 font-medium leading-[1.6] max-w-5xl mx-auto"
                    >
                        Learn how Dragonfruit Media leveraged ClickUp Whiteboards to take their content planning to the next level. This behind-the-scenes look reveals how this dynamic agency streamlined workflows, sparked creativity, and improved team collaboration—all with ClickUp Whiteboards.
                    </motion.p>
                </div>

                <div className="max-w-5xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] bg-zinc-100 group"
                    >
                        <iframe
                            src="https://www.youtube.com/embed/E94PuZRWk34"
                            className="w-full h-full border-0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
