"use client";

import Link from 'next/link';
import { BookOpen, Cloud, Music, Lightbulb, ShoppingCart, Laptop, BarChart, PenTool } from 'lucide-react';

export default function UniversityFooter() {
    return (
        <footer className="relative bg-white pt-32 pb-8 overflow-hidden">

            {/* --- Pink Doodles Background --- */}
            <div className="absolute inset-0 pointer-events-none text-[#FF69B4]/60">
                {/* Left Side */}
                <div className="absolute bottom-20 left-10 rotate-[-12deg]"><BookOpen size={64} strokeWidth={1} /></div>
                <div className="absolute bottom-48 left-20 opacity-60"><Cloud size={48} strokeWidth={1} /></div>
                <div className="absolute bottom-40 left-[15%] opacity-50"><ShoppingCart size={32} strokeWidth={1} /></div>

                {/* Right Side */}
                <div className="absolute bottom-32 right-10 rotate-6"><Laptop size={72} strokeWidth={1} /></div>
                <div className="absolute bottom-10 right-32 -rotate-12"><Lightbulb size={40} strokeWidth={1} /></div>
                <div className="absolute bottom-60 right-20 opacity-60"><BarChart size={56} strokeWidth={1} /></div>
                <div className="absolute bottom-20 right-[20%] rotate-[-45deg]"><PenTool size={48} strokeWidth={1} /></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">

                {/* CTA Section */}
                <div className="text-center mb-32">
                    <div className="text-[#FF69B4] font-bold text-xs tracking-widest uppercase mb-4">
                        Want to learn more?
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-[#292D34] mb-4 tracking-tight">
                        Browse All Courses
                    </h2>
                    <p className="text-gray-500 font-medium mb-8">
                        Check out our new courses and much more!
                    </p>

                    <Link
                        href="/university/course-catalog"
                        className="inline-block px-10 py-3.5 rounded-full bg-[#FF69B4] hover:bg-[#F055A5] text-white font-bold text-lg transition-all shadow-lg hover:shadow-[#FF69B4]/30 hover:-translate-y-1"
                    >
                        View All Courses
                    </Link>
                </div>

                {/* Footer Links */}
                <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-100 pt-8 mt-auto">
                    {/* Logo */}
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <div className="relative flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 10C4 10 4 17 12 17C20 17 20 10 20 10" stroke="#7B68EE" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7 8L12 3L17 8" stroke="#E348B4" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="font-bold text-base text-black">ClickUp</span>
                            <span className="font-bold text-base text-black">University</span>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap justify-center gap-8 text-xs font-bold text-gray-800">
                        <Link href="/university/course-catalog" className="hover:text-[#7B68EE]">All Courses</Link>
                        <Link href="/university/webinars" className="hover:text-[#7B68EE]">Webinars</Link>
                        <Link href="/blog" className="hover:text-[#7B68EE]">Blog</Link>
                        <Link href="#" className="hover:text-[#7B68EE]">Give Feedback</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
