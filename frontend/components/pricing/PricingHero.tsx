"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface PricingHeroProps {
    billingCycle: "yearly" | "monthly";
    setBillingCycle: (cycle: "yearly" | "monthly") => void;
}

export function PricingHero({ billingCycle, setBillingCycle }: PricingHeroProps) {
    return (
        <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-white text-center">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#292D34] mb-6 tracking-tight leading-[1.1]"
            >
                The best work solution, <br /> for the best price.
            </motion.h1>

            {/* Trusted By Text */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-500 font-medium mb-10"
            >
                Trusted by the world's leading businesses
            </motion.p>

            {/* Billing Toggle */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center gap-4 mb-16"
            >
                <div className="bg-gray-100 p-1 rounded-full flex relative items-center cursor-pointer">
                    <button
                        onClick={() => setBillingCycle("yearly")}
                        className={`relative z-10 px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${billingCycle === "yearly" ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-gray-900"
                            }`}
                    >
                        Yearly
                    </button>
                    <button
                        onClick={() => setBillingCycle("monthly")}
                        className={`relative z-10 px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${billingCycle === "monthly" ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-gray-900"
                            }`}
                    >
                        Monthly
                    </button>
                </div>
                <div className="text-sm font-bold text-[#7b68ee] bg-indigo-50 px-3 py-1 rounded-lg animate-bounce hidden sm:block">
                    Save up to 30%
                </div>
            </motion.div>
        </section>
    );
}
