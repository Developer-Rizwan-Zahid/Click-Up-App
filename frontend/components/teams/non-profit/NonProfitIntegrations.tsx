"use client";

import { motion } from "framer-motion";

export function NonProfitIntegrations() {
    const tools = [
        "Google Drive", "Slack", "Zoom", "Salesforce",
        "Microsoft Teams", "Dropbox", "Zapier", "Outlook"
    ];

    return (
        <section className="py-24 bg-[#F8FAFC]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-[#292D34] mb-6">
                        Integrate your favorite work tools
                    </h2>
                    <p className="text-xl text-gray-500">
                        Connect with the tools you use every day to keep your team in sync.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-5xl mx-auto">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white px-8 py-4 rounded-full shadow-sm border border-gray-200 font-bold text-gray-600 hover:text-green-600 hover:border-green-200 hover:shadow-md transition-all cursor-default text-lg"
                        >
                            {tool}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
