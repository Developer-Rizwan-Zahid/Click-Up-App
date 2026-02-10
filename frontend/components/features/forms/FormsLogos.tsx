'use client';

import React from 'react';
import { motion } from 'framer-motion';

const brands = [
    { name: 'Netflix', url: 'https://clickup.com/assets/images/logos/netflix-gray.svg' },
    { name: 'Pinterest', url: 'https://clickup.com/assets/images/logos/pinterest-gray.svg' },
    { name: 'Concord', url: 'https://clickup.com/assets/images/brand-assets/logos/concord.svg' },
    { name: 'STX', url: 'https://clickup.com/assets/images/brand-assets/logos/stx.svg' },
    { name: 'Hawke', url: 'https://clickup.com/assets/images/brand-assets/logos/hawke-media.svg' }
];

export default function FormsLogos() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.2em]">Powering the world's best teams</h2>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 max-w-6xl mx-auto">
                    {brands.map((brand, index) => (
                        <motion.div
                            key={brand.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="h-8 md:h-10 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        >
                            <img src={brand.url} alt={brand.name} className="h-full w-auto object-contain" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
