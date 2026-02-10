"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useModal } from "@/context/ModalContext";

export function EnterpriseCTA() {
    const { openModal } = useModal();
    return (
        <section className="py-32 bg-blue-600 text-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">
                        Ready to scale?
                    </h2>
                    <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto font-medium">
                        Contact our sales team to learn how ClickUp can transform your enterprise.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button
                            onClick={openModal}
                            className="h-16 px-10 bg-white text-blue-600 hover:bg-gray-100 text-xl font-bold rounded-2xl shadow-xl transition-all hover:scale-105 w-full sm:w-auto"
                        >
                            Contact Sales
                        </Button>
                    </div>
                </motion.div>
            </div>

            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500/40 rounded-full blur-3xl"></div>
        </section>
    );
}
