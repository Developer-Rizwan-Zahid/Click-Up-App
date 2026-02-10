"use client";

import { motion } from "framer-motion";
import { Terminal, LineChart, MessageCircle, PenTool, ArrowRight, Check } from "lucide-react";

const roles = [
    {
        title: "Engineering",
        icon: Terminal,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        capabilities: ["Auto-generate unit tests", "Explain legacy code", "Review pull requests", "Detect security vulnerabilities"]
    },
    {
        title: "Sales",
        icon: LineChart,
        color: "text-green-500",
        bg: "bg-green-500/10",
        capabilities: ["Score leads automatically", "Write personalized outreach", "Update CRM records", "Analyze call transcripts"]
    },
    {
        title: "Support",
        icon: MessageCircle,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        capabilities: ["Draft ticket responses", "Categorize incoming issues", "Identify churn risks", "Summarize user feedback"]
    },
    {
        title: "Marketing",
        icon: PenTool,
        color: "text-pink-500",
        bg: "bg-pink-500/10",
        capabilities: ["Generate blog post ideas", "Create social media variations", "Analyze campaign performance", "SEO optimization tips"]
    }
];

export const RoleBasedAgents = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">AI Agents for every team</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        Pre-built agents trained on industry best practices, ready to join your team instantly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {roles.map((role, index) => (
                        <motion.div
                            key={role.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-gray-50 border border-gray-100 rounded-3xl p-6 hover:shadow-lg hover:bg-white transition-all group hover:-translate-y-1"
                        >
                            <div className={`w-12 h-12 rounded-2xl ${role.bg.replace('/10', '/20')} flex items-center justify-center mb-6`}>
                                <role.icon className={`w-6 h-6 ${role.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{role.title}</h3>
                            <ul className="space-y-3 mb-6">
                                {role.capabilities.map((cap, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
                                        <Check size={16} className={`mt-0.5 ${role.color} shrink-0`} />
                                        <span>{cap}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full py-2 rounded-lg bg-gray-200/50 border border-gray-200 text-sm font-bold text-gray-600 hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2">
                                Deploy Agent <ArrowRight size={14} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
