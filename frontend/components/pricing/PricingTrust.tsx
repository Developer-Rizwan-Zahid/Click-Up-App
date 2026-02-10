"use client";

import { motion } from "framer-motion";

export function PricingTrust() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 text-center max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl sm:text-4xl font-black text-[#292D34] mb-6">
                        Trusted by millions.
                    </h2>
                    <p className="text-lg text-gray-500 mb-16 max-w-2xl mx-auto">
                        Join over 10 million users who streamline their workflows, communicate efficiently, and get work done faster with ClickUp.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Styles replicated from previous components for consistency */}
                        <div className="flex justify-center items-center">
                            <span className="text-2xl font-bold text-blue-900 tracking-tighter">SAMSUNG</span>
                        </div>
                        <div className="flex justify-center items-center">
                            <span className="text-2xl font-bold text-blue-600 tracking-tighter">booking.com</span>
                        </div>
                        <div className="flex justify-center items-center">
                            <span className="text-2xl font-serif font-black text-gray-900">IBM</span>
                        </div>
                        <div className="flex justify-center items-center">
                            <span className="text-2xl font-bold text-red-600 italic">NETFLIX</span>
                        </div>
                        <div className="flex justify-center items-center">
                            <span className="text-2xl font-bold text-green-600">Spotify</span>
                        </div>
                        <div className="flex justify-center items-center">
                            <span className="text-xl font-bold text-indigo-900">T-Mobile</span>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="text-2xl font-bold text-orange-600 border border-orange-600 rounded px-1">G2</div>
                        </div>
                        <div className="flex justify-center items-center">
                            <span className="text-xl font-bold text-blue-500">Capterra</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
