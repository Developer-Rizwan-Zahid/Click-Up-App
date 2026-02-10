"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export function GuidesHero() {
    return (
        <section className="pt-32 pb-16 bg-white text-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl md:text-6xl font-black text-[#292D34] mb-6 tracking-tight leading-tight">
                    ClickUp Guides & Playbooks
                </h1>
                <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Resources to help you eliminate work sprawl, improve collaboration, and work more efficiently.
                </p>
                <div className="mb-20">
                    <Button className="py-3 px-8 bg-[#292D34] hover:bg-black text-white font-bold rounded-lg text-base">
                        Schedule your free consultation
                    </Button>
                </div>

                {/* Featured Report Card */}
                <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden bg-[#F0F1F3] flex flex-col md:flex-row text-left">
                    <div className="p-10 md:p-14 md:w-1/2 flex flex-col justify-center relative z-10">
                        <div className="inline-block px-3 py-1 bg-[#7B68EE]/10 text-[#7B68EE] font-bold text-xs uppercase tracking-widest rounded-full mb-6 w-fit">
                            New Report
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-[#292D34] mb-4 leading-tight">
                            The State of AI Maturity 2025
                        </h2>
                        <p className="text-gray-500 mb-8 max-w-md">
                            Discover how organizations are adopting AI, the challenges they face, and the opportunities for growth in the coming year.
                        </p>
                        <Link href="#" className="flex items-center font-bold text-[#7B68EE] hover:text-[#6853E6] transition-colors group">
                            Get the report <MoveRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* Abstract Visual Right Side */}
                    <div className="md:w-1/2 bg-gradient-to-br from-[#7B68EE] to-[#9D8AFE] relative overflow-hidden min-h-[300px]">
                        {/* Abstract Shapes */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-full h-full">
                            {/* Placeholder for report cover image */}
                            <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[90%] bg-white rounded-tl-2xl shadow-2xl skew-y-3 skew-x-2 opacity-90"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
