"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

export function SoftwareCTA() {
    return (
        <section className="py-24 bg-[#1e1e1e] relative overflow-hidden text-white font-mono">
            {/* Matrix-like subtle background effect */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 bg-[#333] px-4 py-2 rounded-full text-green-400 text-sm mb-8">
                        <Terminal size={14} />
                        <span>npm install clickup-cli</span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight">
                        Ready to ship faster?
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-sans">
                        Join engineering teams at companies like Google, Netflix, and Uber who build with ClickUp.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 font-sans">
                        <Link href="/signup">
                            <Button className="h-14 px-10 bg-purple-600 hover:bg-purple-500 text-white text-lg font-bold rounded-xl shadow-lg transition-transform hover:scale-105 w-full sm:w-auto">
                                Start Building
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" className="h-14 px-10 border-gray-600 text-white hover:bg-[#333] hover:text-white text-lg font-bold rounded-xl w-full sm:w-auto flex items-center gap-2 justify-center">
                                Contact Sales <ArrowRight size={18} />
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
