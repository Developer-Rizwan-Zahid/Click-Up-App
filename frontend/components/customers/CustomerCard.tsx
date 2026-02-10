"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";

interface CustomerCardProps {
    logo: React.ReactNode; // Or styling for a logo text
    quote: string;
    author?: string;
    role?: string;
    link?: string;
    className?: string; // For custom layout overrides
}

export function CustomerCard({ logo, quote, author, role, link = "#", className = "" }: CustomerCardProps) {
    return (
        <Link href={link} className={`group block h-full bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col ${className}`}>
            <div className="mb-8 h-12 flex items-center text-2xl font-black text-[#292D34]">
                {logo}
            </div>

            <blockquote className="text-lg text-[#292D34] font-medium leading-relaxed mb-8 flex-1">
                "{quote}"
            </blockquote>

            {(author || role) && (
                <div className="mb-6">
                    {author && <div className="font-bold text-[#292D34]">{author}</div>}
                    {role && <div className="text-sm text-gray-500">{role}</div>}
                </div>
            )}

            <div className="text-[#7B68EE] font-bold text-sm flex items-center mt-auto">
                Read story <MoveRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
        </Link>
    );
}
