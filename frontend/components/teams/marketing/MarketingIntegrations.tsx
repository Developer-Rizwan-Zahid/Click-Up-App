"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export function MarketingIntegrations() {
    const tools = [
        "HubSpot", "Salesforce", "Marketo", "Mailchimp",
        "Google Ads", "Facebook Ads", "Slack", "Zoom",
        "Google Drive", "Dropbox", "Intercom", "Zendesk"
    ];

    return (
        <section className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-[#292D34] mb-6">
                        Bring your favorite marketing tools together
                    </h2>
                    <p className="text-xl text-gray-500">
                        Boost your marketing team's efficiency even further by connecting ClickUp to over 200 native two-way integrations including Hubspot, Zoom, G Suite, Slack, and more.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white rounded-xl h-24 flex items-center justify-center shadow-sm border border-gray-200 font-bold text-gray-400 hover:text-pink-600 hover:border-pink-200 hover:shadow-md transition-all cursor-default"
                        >
                            {tool}
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="inline-flex items-center gap-2 text-pink-600 font-bold hover:underline">
                        <Plus size={18} /> See all integrations
                    </button>
                </div>
            </div>
        </section>
    );
}
