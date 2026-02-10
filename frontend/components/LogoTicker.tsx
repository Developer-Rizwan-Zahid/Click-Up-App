"use client";

import { motion } from "framer-motion";

export const LogoTicker = () => {
    const logos = [
        { name: "Acme Corp" },
        { name: "Quantum" },
        { name: "Echo Valley" },
        { name: "Celestial" },
        { name: "Pulse" },
        { name: "Apex" },
        { name: "Acme Corp" },
        { name: "Quantum" },
        { name: "Echo Valley" },
        { name: "Celestial" },
        { name: "Pulse" },
        { name: "Apex" },
    ];

    return (
        <div className="py-8 bg-white border-y border-gray-100 dark:bg-black dark:border-gray-800 overflow-hidden">
            <div className="container mx-auto px-4 mb-4 text-center">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Trusted by 100,000+ teams from startups to enterprises
                </p>
            </div>
            <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                <motion.div
                    className="flex gap-14 flex-none pr-14"
                    animate={{
                        translateX: "-50%",
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                    }}
                >
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center text-xl font-bold text-gray-400 dark:text-gray-600 whitespace-nowrap"
                        >
                            {logo.name}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
