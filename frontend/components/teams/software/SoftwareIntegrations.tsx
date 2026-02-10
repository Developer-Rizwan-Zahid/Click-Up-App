"use client";

import { motion } from "framer-motion";

export function SoftwareIntegrations() {
    const tools = [
        { name: "GitHub", color: "text-black" },
        { name: "GitLab", color: "text-orange-600" },
        { name: "Bitbucket", color: "text-blue-600" },
        { name: "Sentry", color: "text-purple-600" },
        { name: "Figma", color: "text-red-500" },
        { name: "Slack", color: "text-pink-600" },
        { name: "VS Code", color: "text-blue-500" }
    ];

    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-black text-[#292D34] mb-16">
                    Integrates with your favorite dev tools
                </h2>

                <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-20">
                    {tools.map((tool, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className={`text-2xl sm:text-3xl font-black ${tool.color} opacity-80 hover:opacity-100 transition-opacity cursor-default`}
                        >
                            {tool.name}
                        </motion.div>
                    ))}
                </div>

                <p className="mt-16 text-gray-500">
                    Plus 1,000+ more integrations via Zapier and our rigorous public API.
                </p>
            </div>
        </section>
    );
}
