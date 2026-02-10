"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle2, Copy } from "lucide-react";

export function PmoCTA() {
    return (
        <section className="py-24 bg-[#0A1128] text-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mb-10 shadow-3xl shadow-blue-900/40 border border-blue-400/20">
                            <Copy size={32} className="text-white" />
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] tracking-tight">
                            Ready to streamline <br /> your Project Office?
                        </h2>

                        <p className="text-xl text-gray-400 mb-12 max-w-2xl font-medium">
                            Join tactical PMOs everywhere using this template to drive successful project outcomes and organizational growth.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto">
                            <Button className="h-16 px-10 bg-blue-600 hover:bg-blue-700 text-white text-xl font-black rounded-2xl shadow-2xl shadow-blue-900 transition-all hover:scale-105 active:scale-95 w-full">
                                Add Template to Workspace
                            </Button>
                            <Link href="/contact" className="w-full sm:w-auto">
                                <Button variant="outline" className="h-16 px-10 border-white/20 text-white hover:bg-white/10 text-xl font-black rounded-2xl w-full">
                                    Talk to an Expert
                                </Button>
                            </Link>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 text-gray-400 font-bold uppercase tracking-widest text-xs">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-blue-500" /> Free Forever
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-blue-500" /> Ready in Seconds
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-blue-500" /> No credit card
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background aesthetics */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-soft-light" />
        </section>
    );
}
