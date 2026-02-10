"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";

interface GuideCardProps {
    title: string;
    description: string;
    imageColor: string; // Tailwind color class e.g "bg-blue-500"
    ctaText?: string;
    link?: string;
}

export function GuideCard({ title, description, imageColor, ctaText = "Get the guide", link = "#" }: GuideCardProps) {
    return (
        <Link href={link} className="group block h-full">
            <div className="bg-[#F9FAFB] rounded-2xl p-2 pb-0 overflow-hidden h-full flex flex-col transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="p-6 md:p-8 flex-1">
                    <h3 className="text-xl font-bold text-[#292D34] mb-3 leading-snug group-hover:text-[#7B68EE] transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-6">
                        {description}
                    </p>
                    <div className="font-bold text-[#292D34] text-sm flex items-center group-hover:text-[#7B68EE] transition-colors mt-auto">
                        {ctaText} <MoveRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>

                {/* Illustration Area */}
                <div className="h-48 relative overflow-hidden flex items-end justify-center px-8">
                    {/* Dynamic abstract illustration based on color */}
                    <div className={`w-full h-40 ${imageColor} rounded-t-2xl opacity-90 shadow-sm relative transform translate-y-4 group-hover:translate-y-2 transition-transform duration-500`}>
                        <div className="absolute inset-0 bg-white/10"></div>
                        <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full"></div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
