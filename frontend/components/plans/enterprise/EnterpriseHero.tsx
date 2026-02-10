"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle2, Shield, BarChart3, Users } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export function EnterpriseHero() {
    const { openModal } = useModal();
    return (
        <section className="bg-[#0B0D15] pt-32 pb-24 overflow-hidden relative text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-16">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-2 mb-6"
                    >
                        <span className="px-3 py-1 bg-blue-900/50 text-blue-300 border border-blue-800 rounded-full text-xs font-bold tracking-widest uppercase">
                            Enterprise
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]"
                    >
                        The world's most powerful, <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                            flexible enterprise software
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto"
                    >
                        Break down silos, align teams, and accelerate AI transformation with ClickUp. Run all your key business processes with ultimate security, scalability, and reliability.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto"
                    >
                        <Button
                            onClick={openModal}
                            className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-xl shadow-xl shadow-blue-900/20 transition-all hover:scale-105 w-full sm:w-auto"
                        >
                            Contact Sales
                        </Button>
                        <Link href="/signup" className="w-full sm:w-auto">
                            <Button variant="outline" className="h-14 px-8 border-gray-700 text-white hover:bg-white/10 text-lg font-bold rounded-xl w-full">
                                Get Started Free
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Feature Highlights */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                    >
                        <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-2xl flex flex-col items-center">
                            <div className="p-3 bg-blue-900/30 rounded-full text-blue-400 mb-4">
                                <Shield size={24} />
                            </div>
                            <h3 className="text-lg font-bold mb-2">Enterprise Security</h3>
                            <p className="text-sm text-gray-400">HIPAA, GDPR, SOC 2 Type II compliance & data residency.</p>
                        </div>
                        <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-2xl flex flex-col items-center">
                            <div className="p-3 bg-indigo-900/30 rounded-full text-indigo-400 mb-4">
                                <BarChart3 size={24} />
                            </div>
                            <h3 className="text-lg font-bold mb-2">Advanced Reporting</h3>
                            <p className="text-sm text-gray-400">Deep insights with customizable dashboards and goals.</p>
                        </div>
                        <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-2xl flex flex-col items-center">
                            <div className="p-3 bg-purple-900/30 rounded-full text-purple-400 mb-4">
                                <Users size={24} />
                            </div>
                            <h3 className="text-lg font-bold mb-2">Dedicated Success</h3>
                            <p className="text-sm text-gray-400">Priority support, onboarding, and dedicated success manager.</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-blue-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[120px]" />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay"></div>
            </div>
        </section>
    );
}
