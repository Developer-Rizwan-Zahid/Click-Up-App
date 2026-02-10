"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function ChatBottomCta() {
    return (
        <section className="py-24 bg-[#0a0b0d] relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[128px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                        One app to replace them all.
                    </h2>
                    <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                        Join millions of users who are saving one day every week with ClickUp.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <button className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-600/25">
                            Get Started
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl text-lg transition-all border border-white/10">
                            Book a Demo
                        </button>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                        {["Free forever", "No credit card", "24/7 Support"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-slate-400 font-medium">
                                <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                    <Check className="w-3 h-3" />
                                </div>
                                {item}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
