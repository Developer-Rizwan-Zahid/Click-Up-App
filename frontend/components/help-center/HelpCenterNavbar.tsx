"use client";

import { Button } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";

export function HelpCenterNavbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 h-16">
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
                {/* Left: Logo & Title */}
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-pink-500 p-0.5">
                        <div className="w-full h-full bg-white rounded-[7px] flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-purple-600">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-slate-900 text-lg leading-tight">ClickUp Help Center</span>
                        <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">The everything app for work.</span>
                    </div>
                </div>

                {/* Right: Links & Actions */}
                <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">

                    <div className="flex items-center gap-2">
                        <span>Status: Operational</span>
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    </div>

                    <a href="#" className="hover:text-purple-600 transition-colors">ClickUp API</a>
                    <a href="#" className="hover:text-purple-600 transition-colors">ClickUp University</a>

                    <div className="flex items-center gap-1 cursor-pointer hover:text-purple-600 transition-colors">
                        Categories <ChevronDown size={14} />
                    </div>

                    <Button className="bg-[#7B68EE] hover:bg-[#6c5ce7] text-white rounded-full px-6">
                        Sign in
                    </Button>
                </div>
            </div>
        </nav>
    );
}
