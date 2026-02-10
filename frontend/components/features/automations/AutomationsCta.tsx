"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function AutomationsCta() {
    return (
        <section className="py-24 bg-white px-4">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative bg-slate-900 rounded-[3rem] overflow-hidden p-12 md:p-24 text-center"
                >
                    {/* Background Decorative Elements */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
                            Supercharge your productivity with ClickUp Automations
                        </h2>

                        <p className="text-xl text-slate-400 mb-12">
                            Join 2,000,000+ teams who use ClickUp to automate their busywork and focus on what matters most.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                            <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-indigo-600 text-white font-extrabold text-xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20 flex items-center justify-center gap-2 group">
                                Get started free
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white/10 text-white font-extrabold text-xl hover:bg-white/20 transition-all border border-white/10 backdrop-blur-sm">
                                Contact Sales
                            </button>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 text-slate-400 font-bold text-sm tracking-widest uppercase">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>Free Forever</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>No credit card</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>UNLIMITED USERS</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
