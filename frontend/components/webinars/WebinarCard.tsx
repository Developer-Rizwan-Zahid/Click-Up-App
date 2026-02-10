"use client";

import Link from "next/link";
import { Play } from "lucide-react";

interface WebinarCardProps {
    title: string;
    description: string;
    duration: string;
    image: string;
    tags: string[];
    link?: string;
}

export function WebinarCard({ title, description, duration, image, tags, link = "#" }: WebinarCardProps) {
    return (
        <Link href={link} className="group block h-full">
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-300 flex flex-col h-full transform group-hover:-translate-y-1">
                {/* Image / Thumbnail */}
                <div className="relative aspect-video bg-gray-100 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

                    {/* Tags */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {tags.map(tag => (
                            <span key={tag} className="bg-white/90 backdrop-blur text-[#292D34] text-[10px] px-2 py-1 font-bold rounded shadow-sm uppercase tracking-wide">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Duration */}
                    <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        {duration}
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-14 h-14 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                            <Play fill="#7B68EE" className="text-[#7B68EE] ml-1" size={24} />
                        </div>
                    </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-[#292D34] mb-3 leading-snug group-hover:text-[#7B68EE] transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-3 mb-6 flex-1">
                        {description}
                    </p>
                    <div className="text-[#7B68EE] font-bold text-sm flex items-center">
                        Watch now <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
