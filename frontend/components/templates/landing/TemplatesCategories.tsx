"use client";

import React from "react";
import Link from "next/link";
import {
    LayoutGrid, Megaphone, Code2, Users, Palette,
    Calculator, Headset, Construction, Briefcase,
    Monitor, HeartHandshake, Coffee, User, HelpCircle
} from "lucide-react";

const CATEGORIES = [
    { name: "Marketing", icon: Megaphone, count: 58, href: "/templates/marketing", color: "text-pink-500", bg: "bg-pink-50" },
    { name: "Engineering & Product", icon: Code2, count: 42, href: "/templates/engineering", color: "text-blue-500", bg: "bg-blue-50" },
    { name: "HR & Recruiting", icon: Users, count: 25, href: "/templates/hr", color: "text-orange-500", bg: "bg-orange-50" },
    { name: "Creative", icon: Palette, count: 31, href: "/templates/creative", color: "text-purple-500", bg: "bg-purple-50" },
    { name: "Finance & Accounting", icon: Calculator, count: 18, href: "/templates/finance", color: "text-green-500", bg: "bg-green-50" },
    { name: "Sales & CRM", icon: Briefcase, count: 58, href: "/templates/sales-and-crm", color: "text-indigo-500", bg: "bg-indigo-50" },
    { name: "Operations", icon: Construction, count: 36, href: "/templates/operations", color: "text-slate-600", bg: "bg-slate-100" },
    { name: "Project Management", icon: LayoutGrid, count: 88, href: "/templates/project-management", color: "text-blue-600", bg: "bg-blue-50" },
    { name: "Professional Services", icon: Headset, count: 22, href: "/templates/services", color: "text-teal-500", bg: "bg-teal-50" },
    { name: "IT", icon: Monitor, count: 29, href: "/templates/it", color: "text-cyan-500", bg: "bg-cyan-50" },
    { name: "Support", icon: HeartHandshake, count: 15, href: "/templates/support", color: "text-red-500", bg: "bg-red-50" },
    { name: "Community", icon: Users, count: 10, href: "/templates/community", color: "text-yellow-500", bg: "bg-yellow-50" },
    { name: "Personal Use", icon: User, count: 12, href: "/templates/personal", color: "text-lime-500", bg: "bg-lime-50" },
    { name: "Other", icon: HelpCircle, count: 8, href: "/templates/other", color: "text-gray-500", bg: "bg-gray-50" },
];

export function TemplatesCategories() {
    return (
        <div className="w-full bg-white py-16 px-4 md:px-8 lg:px-16 border-t border-slate-100">
            <div className="max-w-[1400px] mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Browse by Category</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {CATEGORIES.map((category) => (
                        <Link
                            key={category.name}
                            href={category.href}
                            className="block group"
                        >
                            <div className="flex flex-col items-center justify-center p-6 bg-white border border-slate-200 rounded-xl hover:shadow-lg hover:border-purple-200 transition-all duration-300 h-full text-center">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${category.bg} ${category.color} group-hover:scale-110 transition-transform`}>
                                    <category.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-purple-600 transition-colors">
                                    {category.name}
                                </h3>
                                <span className="text-sm text-slate-500 font-medium">
                                    {category.count} Templates
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
