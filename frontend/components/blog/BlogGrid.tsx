"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock } from "lucide-react";

// Mock Data
const POSTS = [
    {
        id: 1,
        title: "The Ultimate Guide to Remote Team Collaboration",
        excerpt: "Discover the tools and strategies that high-performing remote teams use to stay connected and productive.",
        category: "Remote Work",
        categoryColor: "text-blue-600",
        author: "Sarah Johnson",
        date: "Oct 12, 2025",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "Why Agile Marketing is the New Standard",
        excerpt: "Move faster and adapt to change. Learn how to apply agile principles to your marketing campaigns.",
        category: "Marketing",
        categoryColor: "text-pink-600",
        author: "Mike Ross",
        date: "Oct 10, 2025",
        readTime: "6 min",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "ClickUp v4.0: What's New?",
        excerpt: "An in-depth look at the latest features, including the new Universal Search and AI enhancements.",
        category: "News",
        categoryColor: "text-[#7B68EE]",
        author: "ClickUp Team",
        date: "Oct 08, 2025",
        readTime: "4 min",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        title: "5 productivity hacks you haven't heard of",
        excerpt: "Stop wasting time on busy work. These simple techniques will help you reclaim your day.",
        category: "Productivity",
        categoryColor: "text-green-600",
        author: "Alex Chen",
        date: "Oct 05, 2025",
        readTime: "5 min",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 5,
        title: "Engineering at Scale: Managing Technical Debt",
        excerpt: "How to balance new feature development with maintaining a healthy codebase.",
        category: "Engineering",
        categoryColor: "text-orange-600",
        author: "David Kim",
        date: "Oct 01, 2025",
        readTime: "12 min",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 6,
        title: "Building a Design System from Scratch",
        excerpt: "A step-by-step guide to creating a consistent and detailed design language for your product.",
        category: "Design",
        categoryColor: "text-purple-600",
        author: "Emma Watson",
        date: "Sep 28, 2025",
        readTime: "10 min",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d4f?auto=format&fit=crop&q=80&w=800"
    }
];

export function BlogGrid() {
    const [filter, setFilter] = useState<"Recent" | "Popular">("Recent");

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Filters */}
                <div className="flex items-center justify-between mb-10">
                    <div className="flex bg-gray-100 p-1 rounded-lg">
                        <button
                            onClick={() => setFilter("Recent")}
                            className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${filter === "Recent" ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-gray-900"}`}
                        >
                            Recent
                        </button>
                        <button
                            onClick={() => setFilter("Popular")}
                            className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${filter === "Popular" ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-gray-900"}`}
                        >
                            Popular
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {POSTS.map(post => (
                        <Link href="#" key={post.id} className="group flex flex-col h-full cursor-pointer">
                            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl mb-6 bg-gray-100">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="flex-1 flex flex-col">
                                <div className="mb-3 flex items-center gap-2">
                                    <span className={`text-xs font-bold uppercase tracking-wider ${post.categoryColor}`}>
                                        {post.category}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-[#292D34] mb-3 group-hover:text-[#7B68EE] transition-colors leading-snug">
                                    {post.title}
                                </h3>

                                <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-1">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center text-xs text-gray-400 font-medium mt-auto">
                                    <span className="text-gray-900 font-bold">{post.author}</span>
                                    <span className="mx-2">•</span>
                                    <span>{post.readTime} read</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Load More */}
                <div className="mt-16 text-center">
                    <button className="px-8 py-3 rounded-full border-2 border-[#292D34] text-[#292D34] font-bold hover:bg-[#292D34] hover:text-white transition-all">
                        Load More Articles
                    </button>
                </div>
            </div>
        </section>
    );
}
