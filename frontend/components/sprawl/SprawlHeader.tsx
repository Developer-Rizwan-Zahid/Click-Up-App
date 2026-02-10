"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const SprawlHeader = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/sprawl" className="flex items-center gap-2 group">
                    <div className="relative w-8 h-8 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
                            <path d="M12 2L20.6603 7V17L12 22L3.33975 17V7L12 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="12" cy="12" r="3" fill="currentColor" className="opacity-50" />
                        </svg>
                    </div>
                    <span className="text-2xl font-bold text-white tracking-tight">
                        sprawl<span className="text-pink-500">.work</span>
                    </span>
                </Link>

                <div className="flex items-center gap-8">
                    <Link href="/sprawl" className="hidden md:block text-sm font-medium text-gray-400 hover:text-white transition-colors">
                        Home
                    </Link>
                    <Button className="bg-pink-600 hover:bg-pink-700 text-white rounded-md px-6 font-bold tracking-wide shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] transition-all">
                        Publications
                    </Button>
                </div>
            </div>
        </header>
    );
};
