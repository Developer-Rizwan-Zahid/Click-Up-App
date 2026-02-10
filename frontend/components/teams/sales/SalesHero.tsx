"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle2, XCircle } from "lucide-react";

export function SalesHero() {
    return (
        <section className="bg-white pt-32 pb-24 overflow-hidden relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-2 mb-6"
                    >
                        <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold tracking-widest uppercase">
                            Sales
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-8 text-[#292D34] leading-[1.1]"
                    >
                        The everything app for <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                            sales teams
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto"
                    >
                        ClickUp activates your sales team by bringing everything from lead tracking to customer onboarding and deal collaboration into one place.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto"
                    >
                        <Link href="/signup" className="w-full sm:w-auto">
                            <Button className="h-14 px-8 bg-[#292D34] hover:bg-black text-white text-lg font-bold rounded-xl shadow-xl transition-all hover:scale-105 w-full">
                                Get Started Free
                            </Button>
                        </Link>
                        <Link href="/contact" className="w-full sm:w-auto">
                            <Button variant="outline" className="h-14 px-8 border-gray-300 text-gray-700 hover:bg-gray-50 text-lg font-bold rounded-xl w-full">
                                Contact Sales
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-6 text-gray-500 text-sm font-medium"
                    >
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={18} className="text-orange-500" /> Free forever
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={18} className="text-orange-500" /> No credit card
                        </div>
                    </motion.div>
                </div>

                {/* Comparison Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                >
                    {/* The Old Way */}
                    <div className="bg-red-50/50 border border-red-100 rounded-2xl p-8 transform hover:-translate-y-1 transition-transform duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-red-100 rounded-lg text-red-600">
                                <XCircle size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">The Old Way</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Leads lost in messy spreadsheets",
                                "Siloed communication delays closing deals",
                                "Zero visibility into pipeline health",
                                "Manual data entry wastes selling time"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-600">
                                    <XCircle size={20} className="text-red-400 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* The ClickUp Way */}
                    <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-8 relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 shadow-lg">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-100/50 to-transparent rounded-bl-full" />

                        <div className="flex items-center gap-3 mb-6 relative">
                            <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                                <CheckCircle2 size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">The ClickUp Way</h3>
                        </div>
                        <ul className="space-y-4 relative">
                            {[
                                "Visual pipelines track every deal stage",
                                "Collaborate on deals with seamless chat",
                                "Real-time dashboards for forecasting",
                                "Automated workflows save hours per week"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-600">
                                    <CheckCircle2 size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                                    <span className="font-medium text-gray-900">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-50/50 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-red-50/50 rounded-full blur-[120px]" />
            </div>
        </section>
    );
}
