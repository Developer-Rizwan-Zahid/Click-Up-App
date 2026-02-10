"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Chrome, Globe } from "lucide-react";

export function BrowserExtensions() {
    const browsers = [
        { name: "Chrome", icon: Chrome, color: "text-red-500", bg: "bg-red-50" },
        { name: "Edge", icon: Globe, color: "text-blue-500", bg: "bg-blue-50" },
        { name: "Firefox", icon: Globe, color: "text-orange-500", bg: "bg-orange-50" }, // Using Globe as generic placeholder if Firefox logo unavailable
        { name: "Safari", icon: Globe, color: "text-blue-400", bg: "bg-blue-50" },
    ];

    return (
        <section className="py-20 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-6 text-[#292D34]">Browser Extensions</h2>
                    <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
                        Clip websites, track time, and create tasks from anywhere on the web with our powerful browser extensions.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        {browsers.map((browser, i) => (
                            <motion.a
                                key={i}
                                href="#"
                                whileHover={{ scale: 1.05 }}
                                className="flex flex-col items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-40 hover:shadow-md transition-all"
                            >
                                <div className={`w-14 h-14 rounded-full ${browser.bg} flex items-center justify-center`}>
                                    <browser.icon size={28} className={browser.color} />
                                </div>
                                <span className="font-bold text-gray-700">{browser.name}</span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
