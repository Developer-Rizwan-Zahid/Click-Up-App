"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function UniversityNavbar() {
    return (
        <header className="bg-white border-b border-gray-100 py-4">
            <div className="container mx-auto px-4 flex items-center justify-between gap-4">
                {/* Logo */}
                <Link href="/university" className="flex items-center gap-2 flex-shrink-0">
                    <div className="relative flex items-center justify-center">
                        {/* ClickUp Icon */}
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 10C4 10 4 17 12 17C20 17 20 10 20 10" stroke="#7B68EE" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7 8L12 3L17 8" stroke="#E348B4" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="font-bold text-lg text-black">ClickUp</span>
                        <span className="font-bold text-lg text-black">University</span>
                    </div>
                </Link>

                {/* Nav Links */}
                <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-700">
                    <Link href="/university" className="px-4 py-1.5 rounded-full bg-purple-50 text-[#7B68EE]">
                        Home
                    </Link>

                    <Link href="/university/course-catalog" className="hover:text-[#7B68EE] transition-colors">
                        All Courses
                    </Link>
                    <Link href="/university/webinars" className="hover:text-[#7B68EE] transition-colors">
                        Webinars
                    </Link>
                    <Link href="/university/live-training" className="hover:text-[#7B68EE] transition-colors">
                        Live Training
                    </Link>
                    <Link href="#" className="hover:text-[#7B68EE] transition-colors">
                        Need Help?
                    </Link>
                </nav>

                {/* Search & Sign In */}
                <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="relative hidden md:block w-64">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-[#7B68EE] focus:ring-1 focus:ring-[#7B68EE] text-sm"
                        />
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>

                    <Link href="#" className="text-sm font-bold text-gray-800 hover:text-[#7B68EE]">
                        Sign In
                    </Link>
                </div>
            </div>
        </header>
    );
}
