"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Smartphone, Tablet } from "lucide-react";

const AppleIcon = () => (
    <svg viewBox="0 0 384 512" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-54.5-127.1-54.5-127.1zM221.9 58.8c18.9-24.8 30.8-56.6 30.8-89.2 2.7-.5 24 14.4 32.4 21 23.5 24.5 21.7 65.8 21.7 65.8-22.6 1.9-51.9-26.2-71.3-40.4-12.7-18.2-22.3-43.9-13.6-43.9z" /></svg>
)

const PlayStoreIcon = () => (
    <svg viewBox="0 0 512 512" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" /></svg>
)

export function MobileDownloads() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="relative">
                            {/* Abstract Phone/Tablet Mockup Placeholder - In a real scenario, use an image */}
                            <div className="aspect-square bg-[#F7F8F9] rounded-[3rem] border-8 border-gray-900 shadow-2xl relative overflow-hidden flex items-center justify-center">
                                <div className="absolute top-0 w-40 h-8 bg-gray-900 rounded-b-2xl z-20"></div>
                                <div className="text-gray-300 font-bold text-4xl flex flex-col items-center gap-4">
                                    <Smartphone size={64} />
                                    <span>Mobile App Mockup</span>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-50 z-[-1]" />
                            <div className="absolute -left-10 -top-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50 z-[-1]" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-3xl sm:text-4xl font-black mb-6 text-[#292D34]">
                            Work from anywhere
                        </h2>
                        <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                            ClickUp is optimized for every screen. Create tasks, edit docs, and collaborate with your team while you're on the move.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {/* App Store Button */}
                            <a href="#" className="inline-block transition-transform hover:-translate-y-1">
                                <div className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 pr-8">
                                    <AppleIcon />
                                    <div className="text-left">
                                        <div className="text-[10px] uppercase font-bold tracking-wider opacity-80">Download on the</div>
                                        <div className="text-xl font-bold leading-none">App Store</div>
                                    </div>
                                </div>
                            </a>

                            {/* Play Store Button */}
                            <a href="#" className="inline-block transition-transform hover:-translate-y-1">
                                <div className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 pr-8">
                                    <PlayStoreIcon />
                                    <div className="text-left">
                                        <div className="text-[10px] uppercase font-bold tracking-wider opacity-80">Get it on</div>
                                        <div className="text-xl font-bold leading-none">Google Play</div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                                <div className="flex text-yellow-400">
                                    {/* 5 stars */}
                                    {[1, 2, 3, 4, 5].map(s => <span key={s}>★</span>)}
                                </div>
                                <span className="font-bold text-gray-700">4.7</span>
                            </div>
                            <span>•</span>
                            <span>200k+ Ratings</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
