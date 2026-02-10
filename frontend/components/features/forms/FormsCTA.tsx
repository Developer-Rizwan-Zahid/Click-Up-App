'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export default function FormsCTA() {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-[3rem] overflow-hidden bg-[#7B68EE] py-24 px-10 text-center"
                >
                    {/* Background Decorative Rings */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] border-[40px] border-white/5 rounded-full" />
                        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] border-[30px] border-white/5 rounded-full" />
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto text-white">
                        <h2 className="text-4xl md:text-[64px] leading-[1.1] font-bold mb-8 tracking-tight">
                            Ready to save <br className="hidden md:block" />
                            <span className="text-blue-200">20% of your time?</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-white/80 font-medium mb-12 leading-relaxed max-w-2xl mx-auto">
                            Join over 2 million teams using ClickUp to centralize their workflows and drive more impact.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="bg-white text-[#7B68EE] px-12 py-6 rounded-2xl text-xl font-bold h-auto shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3">
                                Get started for free
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>

                        <p className="mt-8 text-white/60 text-sm font-medium">
                            Free forever. No credit card required.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
