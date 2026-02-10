"use client";

import Link from "next/link";

export const SprawlFooter = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <Link href="/sprawl" className="flex items-center gap-2 group">
                        <div className="w-6 h-6 flex items-center justify-center">
                            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-pink-500">
                                <path d="M12 2L20.6603 7V17L12 22L3.33975 17V7L12 2Z" stroke="currentColor" strokeWidth="2.5" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold text-white">
                            sprawl<span className="text-pink-500">.work</span>
                        </span>
                    </Link>

                    <Link href="https://clickup.com" className="text-gray-500 hover:text-white transition-colors flex items-center gap-1 text-sm">
                        clickup.com <span className="text-xs">↗</span>
                    </Link>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                    <p>Copyright © 2026 ClickUp Ltd. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-gray-400">Privacy Policy</Link>
                        <Link href="#" className="hover:text-gray-400">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
