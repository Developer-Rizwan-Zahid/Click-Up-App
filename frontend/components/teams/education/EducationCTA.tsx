"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

export function EducationCTA() {
    return (
        <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
                        Transform your campus productivity
                    </h2>
                    <p className="text-xl text-blue-50 mb-10 max-w-2xl mx-auto font-medium">
                        Join millions of users and thousands of institutions leveraging ClickUp to save time and do more.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Link href="/signup">
                            <Button className="h-14 px-8 bg-white text-blue-600 hover:bg-gray-100 text-lg font-bold rounded-xl shadow-xl transition-all hover:scale-105 w-full sm:w-auto">
                                Get Started Free
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" className="h-14 px-8 border-white/30 text-white hover:bg-white/10 text-lg font-bold rounded-xl w-full sm:w-auto">
                                Contact Sales
                            </Button>
                        </Link>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-blue-100 font-medium">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={22} className="text-blue-300" /> free forever
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={22} className="text-blue-300" /> No credit card
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={22} className="text-blue-300" /> Educational discount
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        </section>
    );
}
