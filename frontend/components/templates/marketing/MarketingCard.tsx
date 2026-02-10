"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

interface MarketingCardProps {
    title: string;
    author: string;
    type: string;
    image?: string;
    isFree?: boolean;
}

export function MarketingCard({ title, author, type, image, isFree = true }: MarketingCardProps) {
    return (
        <div className="group flex flex-col bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 h-full cursor-pointer relative">
            {/* Image Container */}
            <div className="bg-slate-50 h-40 w-full relative overflow-hidden flex items-center justify-center p-4">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                ) : (
                    // Fallback visualization - Geometric/Wireframe style
                    <div className="w-full h-full bg-white shadow-sm border border-slate-100 rounded flex flex-col p-2 space-y-1">
                        <div className="w-1/3 h-2 bg-slate-200 rounded-sm"></div>
                        <div className="w-full h-1 bg-slate-100 rounded-sm"></div>
                        <div className="w-full h-1 bg-slate-100 rounded-sm"></div>
                        <div className="w-2/3 h-1 bg-slate-100 rounded-sm"></div>

                        <div className="flex gap-1 mt-2">
                            <div className="w-6 h-6 bg-blue-50 rounded-full"></div>
                            <div className="w-6 h-6 bg-green-50 rounded-full"></div>
                        </div>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-base font-medium text-slate-900 mb-3 line-clamp-2 leading-tight">
                    {title}
                </h3>

                <div className="mt-auto flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 p-[1px]">
                        <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                        </div>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">By {author}</span>
                </div>
            </div>
        </div>
    );
}
