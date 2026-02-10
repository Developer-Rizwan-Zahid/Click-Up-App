"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";

export function CustomersFeatured() {
    return (
        <section className="py-8 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Featured Card 1: Chick-fil-A / Abstracted */}
                    <Link href="#" className="group relative bg-[#E01E5A] rounded-3xl overflow-hidden min-h-[500px] p-10 flex flex-col justify-between text-white">
                        <div className="relative z-10">
                            <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mb-6 text-[#E01E5A] font-black tracking-tighter shadow-lg">
                                CFA
                            </div>
                            <h3 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                                33% less<br />overhead
                            </h3>
                            <p className="text-lg text-white/90 max-w-md">
                                "We went from disconnected spreadsheets to a unified workflow that saves us thousands of hours."
                            </p>
                        </div>

                        <div className="relative z-10 flex items-center font-bold text-lg">
                            Read story <MoveRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </div>

                        {/* Abstract Background Element */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
                    </Link>

                    {/* Featured Card 2: Cartoon Network / Abstracted */}
                    <Link href="#" className="group relative bg-[#292D34] rounded-3xl overflow-hidden min-h-[500px] p-10 flex flex-col justify-between text-white">
                        <div className="relative z-10">
                            <div className="h-12 w-32 bg-white flex items-center justify-center mb-6 text-black font-black font-serif tracking-widest px-2">
                                CARTOON
                            </div>
                            <h3 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                                50% faster<br />production
                            </h3>
                            <p className="text-lg text-white/90 max-w-md">
                                "Doubling our output while cutting production time in half seemed days away, now it's reality."
                            </p>
                        </div>

                        <div className="relative z-10 flex items-center font-bold text-lg">
                            Read story <MoveRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </div>
                        {/* Abstract Background Element */}
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
                    </Link>

                </div>
            </div>
        </section>
    );
}
