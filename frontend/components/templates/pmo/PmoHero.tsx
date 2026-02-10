"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Star, ChevronRight, Download, Share2 } from "lucide-react";

export function PmoHero() {
    return (
        <section className="bg-white pt-32 pb-16 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 max-w-2xl text-left"
                    >
                        <nav className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-8">
                            <Link href="/templates" className="hover:text-blue-600 transition-colors">Templates</Link>
                            <ChevronRight size={14} />
                            <Link href="/templates/project-management" className="hover:text-blue-600 transition-colors">Project Management</Link>
                            <ChevronRight size={14} />
                            <span className="text-gray-900 border-b border-gray-900 pb-0.5">PMO Project Management</span>
                        </nav>

                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-blue-600 text-blue-600" />
                                ))}
                            </div>
                            <span className="text-sm font-bold text-gray-900">4.9 / 5</span>
                            <span className="text-sm text-gray-500">(1.2k+ users)</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#292D34] leading-[1.1] mb-6">
                            PMO Project <br /> Management
                        </h1>

                        <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-xl">
                            Elevate your project management office with ClickUp's PMO templates. Plan, execute, and monitor projects with precision to ensure successful outcomes every time.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8">
                            <Button className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-xl shadow-xl shadow-blue-100 transition-all hover:scale-105 active:scale-95">
                                Add Template
                            </Button>
                            <div className="flex gap-2">
                                <Button variant="outline" className="h-14 w-14 flex items-center justify-center border-gray-200 hover:bg-gray-50 rounded-xl transition-all">
                                    <Download size={20} className="text-gray-600" />
                                </Button>
                                <Button variant="outline" className="h-14 w-14 flex items-center justify-center border-gray-200 hover:bg-gray-50 rounded-xl transition-all">
                                    <Share2 size={20} className="text-gray-600" />
                                </Button>
                            </div>
                        </div>

                        <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                            FREE FOREVER • NO CREDIT CARD REQUIRED
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 w-full relative"
                    >
                        <div className="relative z-10 bg-white rounded-3xl shadow-3xl shadow-blue-50 border border-blue-50 p-2 overflow-hidden ring-1 ring-gray-100">
                            <img
                                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2370&auto=format&fit=crop"
                                alt="PMO Template Mockup"
                                className="w-full h-auto rounded-2xl shadow-inner shadow-gray-200"
                            />
                        </div>
                        {/* Background elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-[100px] -z-0" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
