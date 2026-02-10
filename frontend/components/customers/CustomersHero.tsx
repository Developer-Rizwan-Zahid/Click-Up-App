"use client";

import { motion } from "framer-motion";

export function CustomersHero() {
    return (
        <section className="pt-32 pb-20 bg-white relative overflow-hidden">
            {/* Background elements to mimic the subtle logo pattern if needed, keeping it clean for now */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl md:text-7xl font-black text-[#292D34] mb-6 tracking-tight leading-tight"
                >
                    Success stories from around the world
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                >
                    Discover how over 3 million teams streamline their work and achieve their goals with ClickUp. Trustworthy, efficient, game-changing.
                </motion.p>
            </div>
        </section>
    );
}
