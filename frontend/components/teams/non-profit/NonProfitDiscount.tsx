"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { HeartHandshake } from "lucide-react";

export function NonProfitDiscount() {
    return (
        <section className="py-24 relative overflow-hidden text-center bg-[#F0FDF4] border-y border-green-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 p-2 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-6">
                        <HeartHandshake size={16} /> Exclusive Benefit
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-[#292D34]">
                        Working for a non-profit?
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Manage your world-changing work in ClickUp and receive an exclusive discount on your ClickUp Workspace.
                    </p>
                    <Link href="#">
                        <Button className="h-14 px-8 bg-green-600 text-white hover:bg-green-700 text-lg font-bold rounded-xl shadow-lg transition-all hover:scale-105">
                            Claim your non-profit discount
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
