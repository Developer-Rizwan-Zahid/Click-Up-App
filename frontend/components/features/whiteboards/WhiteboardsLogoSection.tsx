'use client';

import React from 'react';
import { motion } from 'framer-motion';

const logos = [
    { name: 'Spotify', url: 'https://cdn.worldvectorlogo.com/logos/spotify-2.svg' },
    { name: 'T-Mobile', url: 'https://cdn.worldvectorlogo.com/logos/t-mobile-logo.svg' },
    { name: 'IBM', url: 'https://cdn.worldvectorlogo.com/logos/ibm.svg' },
    { name: 'Logitech', url: 'https://cdn.worldvectorlogo.com/logos/logitech-2-1.svg' },
    { name: 'Netflix', url: 'https://cdn.worldvectorlogo.com/logos/netflix-3.svg' }
];

export default function WhiteboardsLogoSection() {
    return (
        <section className="py-20 bg-white border-t border-zinc-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="h-8 md:h-10 flex items-center"
                        >
                            <img
                                src={logo.url}
                                alt={logo.name}
                                className="h-full w-auto object-contain"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
