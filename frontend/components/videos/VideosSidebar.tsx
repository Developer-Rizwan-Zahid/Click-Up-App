"use client";

import { cn } from "@/lib/utils";
import { Link as ScrollLink } from "react-scroll";

interface VideosSidebarProps {
    categories: string[];
    activeCategory: string;
    onSelectCategory: (category: string) => void;
}

export function VideosSidebar({ categories, activeCategory, onSelectCategory }: VideosSidebarProps) {
    return (
        <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-32 bg-white rounded-2xl border border-gray-100 shadow-sm p-2">
                <nav className="flex flex-col gap-1">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => onSelectCategory(category)}
                            className={cn(
                                "text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-between group",
                                activeCategory === category
                                    ? "bg-[#7b68ee] text-white shadow-md shadow-purple-500/20"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-black"
                            )}
                        >
                            {category}
                            {activeCategory === category && (
                                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                            )}
                        </button>
                    ))}
                </nav>
            </div>
        </aside>
    );
}
