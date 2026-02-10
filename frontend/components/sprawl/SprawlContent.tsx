"use client";

import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";

export const SprawlContent = () => {
    return (
        <section className="bg-black pb-32 pt-10">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="border-t border-white/10 pt-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
                        Download the white paper to see:
                    </h2>

                    <div className="space-y-8">
                        {/* Item 1 */}
                        <div className="flex gap-6 items-start group">
                            <div className="flex-shrink-0 relative w-16 h-16 flex items-center justify-center">
                                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-white/10 group-hover:text-pink-500/20 transition-colors duration-500">
                                    <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                                <span className="text-2xl font-bold text-pink-500 relative z-10">1</span>
                            </div>
                            <div className="pt-2 border-b border-white/10 pb-8 flex-grow">
                                <p className="text-lg text-gray-300 group-hover:text-white transition-colors">
                                    Survey data showing that the perceived threat of AI has reduced since ChatGPT launched
                                </p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="flex gap-6 items-start group">
                            <div className="flex-shrink-0 relative w-16 h-16 flex items-center justify-center">
                                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-white/10 group-hover:text-purple-500/20 transition-colors duration-500">
                                    <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                                <span className="text-2xl font-bold text-purple-500 relative z-10">2</span>
                            </div>
                            <div className="pt-2 border-b border-white/10 pb-8 flex-grow">
                                <p className="text-lg text-gray-300 group-hover:text-white transition-colors">
                                    Predictions for short-term vs. long-term effects of AI on the workforce and structure of companies
                                </p>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="flex gap-6 items-start group">
                            <div className="flex-shrink-0 relative w-16 h-16 flex items-center justify-center">
                                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-white/10 group-hover:text-blue-500/20 transition-colors duration-500">
                                    <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                                <span className="text-2xl font-bold text-blue-500 relative z-10">3</span>
                            </div>
                            <div className="pt-2 pb-8 flex-grow">
                                <p className="text-lg text-gray-300 group-hover:text-white transition-colors">
                                    Urgent policy recommendations needed to mitigate the impact of AI
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <Button className="bg-white text-black hover:bg-gray-200 font-bold px-8 py-6 rounded-lg text-base shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all">
                            <Download className="w-4 h-4 mr-2" />
                            Download white paper (pdf)
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
