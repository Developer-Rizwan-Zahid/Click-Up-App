"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle2, GraduationCap } from "lucide-react";

export function EducationHero() {
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
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-1">
                            <GraduationCap size={14} /> Education
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-8 text-[#292D34] leading-[1.1]"
                    >
                        Simplify education <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            management
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto"
                    >
                        Manage academic and administrative resources in one place with ClickUp's time-saving work tools. Free forever for students and educators.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto"
                    >
                        <Link href="/signup" className="w-full sm:w-auto">
                            <Button className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-xl shadow-xl shadow-blue-200 transition-all hover:scale-105 w-full">
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
                            <CheckCircle2 size={18} className="text-blue-500" /> Free Forever
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={18} className="text-blue-500" /> No credit card
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-[100px]" />
            </div>
        </section>
    );
}
