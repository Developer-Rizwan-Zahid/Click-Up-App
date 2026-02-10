"use client";

import { motion } from "framer-motion";
import { Lock, Globe, Key, ShieldCheck } from "lucide-react";

export function EnterpriseSecurity() {
    const items = [
        {
            title: "Single Sign-On (SSO)",
            description: "Secure access with Google, Okta, Microsoft, and more.",
            icon: Key
        },
        {
            title: "Data Residency",
            description: "Host your data in the US, EU, or APAC regions.",
            icon: Globe
        },
        {
            title: "Custom Permissions",
            description: "Granular control over who sees and does what.",
            icon: Lock
        },
        {
            title: "Compliance",
            description: "SOC 2 Type II, HIPAA, and GDPR compliant.",
            icon: ShieldCheck
        }
    ];
    return (
        <section className="py-24 bg-gradient-to-b from-[#0B0D15] to-[#11131F] text-white border-t border-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-4 block">
                                Security & Reliability
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                                Manage controls and permissions
                            </h2>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                Change permissions and security settings for guests, members, and admins. You control exactly what users can and can't see or do.
                            </p>
                        </motion.div>
                    </div>

                    <div className="md:w-1/2">
                        <div className="grid sm:grid-cols-2 gap-4">
                            {items.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gray-800/40 border border-gray-700 p-6 rounded-xl hover:bg-gray-800 hover:border-blue-500/50 transition-colors"
                                >
                                    <item.icon className="text-blue-400 mb-4" size={28} />
                                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-400">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
