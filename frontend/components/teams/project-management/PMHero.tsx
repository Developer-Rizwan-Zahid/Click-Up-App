"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export function PMHero() {
    return (
        <section className="bg-white pt-20 pb-32 overflow-hidden relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <div className="h-1 w-8 bg-blue-500 rounded-full"></div>
                            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">Project Management</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-8 text-[#292D34] leading-[1.1]">
                            The total <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">solution</span> for <br />
                            project success.
                        </h1>

                        <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-lg">
                            Plan, track, and collaborate on any project from start to finish. Join 2 million+ teams that trust ClickUp to deliver on time.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <Link href="/signup">
                                <Button className="h-14 px-8 bg-[#292D34] hover:bg-black text-white text-lg font-bold rounded-xl shadow-xl transition-all hover:scale-105 w-full sm:w-auto">
                                    Get Started Free
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" className="h-14 px-8 border-gray-300 text-gray-700 hover:bg-gray-50 text-lg font-bold rounded-xl w-full sm:w-auto">
                                    Contact Sales
                                </Button>
                            </Link>
                        </div>

                        <div className="flex gap-6 text-gray-500 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-green-500" /> Free forever
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-green-500" /> No credit card
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-1/2 relative"
                    >
                        {/* Decorative Background Blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-3xl -z-10 opacity-60" />

                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                            {/* Mock UI Header */}
                            <div className="bg-gray-50 border-b border-gray-100 p-3 flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                            </div>
                            {/* Placeholder UI content - could be a screenshot or constructed DOM elements */}
                            <div className="bg-white p-1">
                                <img
                                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop"
                                    alt="Project Management Dashboard"
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
