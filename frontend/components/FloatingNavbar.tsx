"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const FloatingNavbar = () => {
    return (
        <div className="fixed top-6 left-0 right-0 z-[100] px-4 pointer-events-none flex justify-center font-sans">
            <div className="flex items-center gap-3 w-fit pointer-events-auto">

                {/* 1. Logo & Motto Pill */}
                <div className="bg-white border border-gray-100/80 rounded-[24px] px-6 py-2.5 flex items-center gap-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] h-[58px]">
                    <Link href="/" className="flex items-center gap-2">
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 10C4 10 4 17 12 17C20 17 20 10 20 10" stroke="#7B68EE" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7 8L12 3L17 8" stroke="#E348B4" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-xl font-black tracking-tight text-[#111827]">ClickUp</span>
                    </Link>
                    <div className="h-6 w-[1.5px] bg-gray-100 hidden sm:block"></div>
                    <div className="flex flex-col text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-[1.3] hidden sm:block">
                        <span>The everything</span>
                        <span>app, for work.</span>
                    </div>
                </div>

                {/* 2. Navigation Links Pill */}
                <nav className="bg-white border border-gray-100/80 rounded-[24px] px-8 py-2.5 flex items-center gap-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] h-[58px] hidden lg:flex">
                    {[
                        { name: "Product", drop: true },
                        { name: "Solutions", drop: true },
                        { name: "Resources", drop: true },
                        { name: "Pricing", drop: false },
                        { name: "Enterprise", drop: false },
                    ].map((link) => (
                        <Link
                            key={link.name}
                            href="#"
                            className="flex items-center gap-1.5 text-[14px] font-bold text-[#334155] hover:text-[#7B68EE] transition-colors whitespace-nowrap"
                        >
                            {link.name}
                            {link.drop && <ChevronDown size={14} className="text-gray-300" />}
                        </Link>
                    ))}
                </nav>

                {/* 3. Actions Pill */}
                <div className="bg-white border border-gray-100/80 rounded-[24px] px-5 py-2.5 flex items-center gap-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] h-[58px]">
                    <Link href="/contact" className="hidden xl:block text-[14px] font-bold text-[#475569] hover:text-[#1e293b] whitespace-nowrap transition-colors">
                        Contact Sales
                    </Link>

                    <div className="flex items-center gap-2 p-1 pl-4 rounded-[20px] bg-[#F8FAFC]/50 border border-gray-50/50">
                        <Link href="/login" className="text-[14px] font-bold text-[#334155] hover:text-black transition-colors mr-2">
                            Log in
                        </Link>
                        <Link href="/signup">
                            <Button className="h-[40px] px-8 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#4338CA] hover:to-[#6D28D9] text-white text-[13px] font-black uppercase tracking-wider rounded-full shadow-lg shadow-indigo-500/20 border border-white/10 transition-all hover:scale-[1.03]">
                                Sign Up
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};
