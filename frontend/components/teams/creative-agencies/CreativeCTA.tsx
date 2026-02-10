"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

export function CreativeCTA() {
    return (
        <section className="py-24 bg-[#292D34] text-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
                         Build your creative power house <br />
                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">with ClickUp</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Join 2M+ teams who use ClickUp to deliver pixel-perfect results every single day.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Link href="/signup">
                            <Button className="h-14 px-8 bg-pink-600 hover:bg-pink-700 text-white text-lg font-bold rounded-xl shadow-xl shadow-pink-900 transition-all hover:scale-105 w-full sm:w-auto">
                                Get Started Free
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" className="h-14 px-8 border-white/20 text-white hover:bg-white/10 text-lg font-bold rounded-xl w-full sm:w-auto">
                                Contact Sales
                            </Button>
                        </Link>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-gray-400 font-medium">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={20} className="text-pink-500" /> Free forever
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={20} className="text-pink-500" /> No credit card
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={20} className="text-pink-500" /> ISO/SOC2 Compliant
                        </div>
                    </div>
                </motion.div>
            </div>
            
            {/* Background blur effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </section>
    );
}
