"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle2, Rocket } from "lucide-react";

export function StartupHero() {
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
                        <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-1">
                            <Rocket size={12} /> Startups
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-8 text-[#292D34] leading-[1.1]"
                    >
                        The everything app, for <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
                            startup work
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto"
                    >
                        Build your business for long-term success by organizing all of your ideas, workflows, and teamwork in a single, shared place.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto"
                    >
                        <Link href="/signup" className="w-full sm:w-auto">
                            <Button className="h-14 px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg font-bold rounded-xl shadow-xl shadow-purple-200 transition-all hover:scale-105 w-full">
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
                            <CheckCircle2 size={18} className="text-purple-500" /> Free forever
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={18} className="text-purple-500" /> No credit card
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-100/50 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-100/50 rounded-full blur-[120px]" />
            </div>
        </section>
    );
}
