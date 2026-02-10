"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PMCTA() {
    return (
        <section className="py-24 bg-[#292D34] relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl sm:text-5xl font-black mb-6">
                        Start managing projects the right way
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Join millions of people who successfully save time and deliver projects faster with ClickUp.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/signup">
                            <Button className="h-14 px-10 bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold rounded-xl shadow-lg transition-transform hover:scale-105 w-full sm:w-auto">
                                Get Started For Free
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" className="h-14 px-10 border-gray-500 text-white hover:bg-gray-800 text-lg font-bold rounded-xl w-full sm:w-auto flex items-center gap-2 justify-center">
                                Contact Sales <ArrowRight size={18} />
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
