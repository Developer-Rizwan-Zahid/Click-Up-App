"use client";

import { motion } from "framer-motion";
import {
    Zap, Mail, History, Share2, MousePointer2,
    ArrowRight, MessageSquare, Clock, ShieldCheck
} from "lucide-react";

const features = [
    {
        title: "Project Shortcuts",
        description: "Keep projects moving with automated task handoffs.",
        icon: MousePointer2,
        class: "md:col-span-2 md:row-span-1",
        color: "blue"
    },
    {
        title: "Email Automation",
        description: "Trigger emails based on task status changes.",
        icon: Mail,
        class: "md:col-span-1 md:row-span-1",
        color: "indigo"
    },
    {
        title: "Audit Logs",
        description: "Track every automation with detailed history.",
        icon: History,
        class: "md:col-span-1 md:row-span-2",
        color: "slate"
    },
    {
        title: "Integrations",
        description: "1,000+ apps directly connected to your workflow.",
        icon: Share2,
        class: "md:col-span-1 md:row-span-1",
        color: "pink"
    },
    {
        title: "Security & Scale",
        description: "Enterprise-grade controls for your automations.",
        icon: ShieldCheck,
        class: "md:col-span-2 md:row-span-1",
        color: "purple"
    }
];

export default function AutomationsBentoGrid() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Built for every team and every workflow</h2>
                    <p className="text-lg text-slate-500">Powerful features that help you scale your operations without scaling your workload.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`group relative bg-white rounded-3xl p-8 border border-slate-200 hover:border-indigo-500/20 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all cursor-pointer overflow-hidden ${feature.class}`}
                        >
                            {/* Decorative Background Blob */}
                            <div className={`absolute -right-10 -top-10 w-32 h-32 bg-${feature.color}-100 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity`} />

                            <div className="relative z-10 h-full flex flex-col">
                                <div className={`w-12 h-12 rounded-2xl bg-${feature.color}-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                                    {feature.description}
                                </p>

                                <div className="flex items-center gap-2 text-sm font-bold text-indigo-600 group-hover:gap-3 transition-all">
                                    Learn more <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>

                            {/* Feature Specific Visuals */}
                            {feature.title === "Audit Logs" && (
                                <div className="mt-8 space-y-2 opacity-50 group-hover:opacity-100 transition-opacity">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="bg-slate-50 p-2 rounded-lg border border-slate-100 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                            <div className="h-1.5 w-full bg-slate-200 rounded-full" />
                                        </div>
                                    ))}
                                </div>
                            )}

                            {feature.title === "Integrations" && (
                                <div className="mt-8 flex justify-center gap-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                    <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100" />
                                    <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100" />
                                    <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
