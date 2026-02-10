"use client";

import {
    Rocket,
    ArrowRightLeft,
    Layout,
    Puzzle,
    CreditCard,
    AlertCircle,
    Users,
    Shield,
    Smartphone
} from "lucide-react";
import { motion } from "framer-motion";

const categories = [
    { icon: Rocket, title: "Getting Started", description: "Learn the basics of ClickUp" },
    { icon: ArrowRightLeft, title: "Importing & Exporting", description: "Bring your work to ClickUp" },
    { icon: Layout, title: "Spaces & Folders", description: "Organize your workflow" },
    { icon: Puzzle, title: "Integrations", description: "Connect your favorite tools" },
    { icon: CreditCard, title: "Billing", description: "Manage your subscription" },
    { icon: Users, title: "Team Management", description: "Invite members and set permissions" },
    { icon: Shield, title: "Security", description: "Keep your data safe" },
    { icon: Smartphone, title: "Mobile", description: "ClickUp on the go" },
    { icon: AlertCircle, title: "Troubleshooting", description: "Common issues and fixes" },
];

export function HelpCenterCategories() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-slate-900 mb-12 text-center"
                >
                    Browse by Category
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-purple-200 transition-all cursor-pointer group"
                        >
                            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-100 transition-colors">
                                <category.icon className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">{category.title}</h3>
                            <p className="text-gray-500">{category.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
