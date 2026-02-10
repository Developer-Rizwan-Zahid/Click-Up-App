"use client";

import { WebinarCard } from "./WebinarCard";
import { MoveRight } from "lucide-react";
import Link from "next/link";

interface Webinar {
    id: string;
    title: string;
    description: string;
    duration: string;
    image: string;
    tags: string[];
}

interface WebinarsCategoryProps {
    title: string;
    description?: string;
    webinars: Webinar[];
    viewAllLink?: string;
    bgColor?: string;
}

export function WebinarsCategory({ title, description, webinars, viewAllLink, bgColor = "bg-white" }: WebinarsCategoryProps) {
    return (
        <section className={`py-20 ${bgColor}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-[#292D34] mb-3 tracking-tight">
                            {title}
                        </h2>
                        {description && (
                            <p className="text-lg text-gray-500 max-w-2xl">
                                {description}
                            </p>
                        )}
                    </div>
                    {viewAllLink && (
                        <Link href={viewAllLink} className="flex items-center font-bold text-[#7B68EE] hover:text-[#6853E6] transition-colors group">
                            View all <MoveRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {webinars.map((webinar) => (
                        <WebinarCard key={webinar.id} {...webinar} />
                    ))}
                </div>
            </div>
        </section>
    );
}
