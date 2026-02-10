"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export function StartupProgram() {
    return (
        <section className="py-24 relative overflow-hidden text-center">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-indigo-900 text-white z-0" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none z-0"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 p-12 rounded-3xl"
                >
                    <div className="inline-flex items-center gap-2 p-2 bg-purple-500/20 rounded-full text-purple-200 text-sm font-bold mb-6 border border-purple-500/30">
                        <Sparkles size={16} /> Startup Program
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white">
                        Startups love ClickUp
                    </h2>
                    <p className="text-2xl text-purple-100 mb-8 font-medium">
                        Eligible startups get <span className="text-white font-bold">$3,000</span> in credit!
                    </p>
                    <Link href="#">
                        <Button className="h-14 px-8 bg-white text-purple-900 hover:bg-gray-100 text-lg font-bold rounded-xl shadow-xl transition-all hover:scale-105">
                            Apply Now
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
