"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function KanbanBottomCta() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-black rounded-[2.5rem] overflow-hidden relative py-24 px-6 md:px-20 text-center shadow-2xl">
                    {/* Background Glows */}
                    <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-900/40 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/40 rounded-full blur-[100px] pointer-events-none translate-x-1/2 translate-y-1/2 opacity-60"></div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
                                Organize your work, with Kanban boards.
                            </h2>
                            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-medium">
                                Join 2,000,000+ teams that are using ClickUp to do their best work
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                                <button className="w-full sm:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-[#d927c6] to-[#e446d3] hover:from-[#c21eb0] hover:to-[#cd3ebd] text-white font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-900/20">
                                    Get Started
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                                <button className="w-full sm:w-auto px-10 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-lg transition-all backdrop-blur-sm border border-white/10">
                                    Contact Sales
                                </button>
                            </div>

                            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-400 text-sm font-bold tracking-wide uppercase">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-[#d927c6]" />
                                    <span>Free forever</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-[#d927c6]" />
                                    <span>No credit card required</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
