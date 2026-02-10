"use client";

import { ArrowRight, FileText, PenTool, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const articles = [
    {
        title: "10 Free SOP Templates and How to Write an SOP for Your Team",
        author: "Lesley Messer",
        role: "Head of Editorial at ClickUp",
        imageColor: "bg-[#E6AAFF]",
        icon: <FileText className="w-16 h-16 text-white" />,
        pattern: "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.4) 0%, transparent 40%)"
    },
    {
        title: "How to Write a Design Brief (With Templates and Examples)",
        author: "Lesley Messer",
        role: "Head of Editorial at ClickUp",
        imageColor: "bg-[#FFD449]",
        icon: <PenTool className="w-16 h-16 text-white" />,
        pattern: "linear-gradient(45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent)"
    },
    {
        title: "16 Meeting Agenda Examples & Free Templates",
        author: "Evan Gerdisch",
        role: "Content Strategist",
        imageColor: "bg-[#28A0F6]",
        icon: <Users className="w-16 h-16 text-white" />,
        pattern: "repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 20px, transparent 20px, transparent 40px)"
    }
];

const DocsRelatedArticles = () => {
    return (
        <section className="py-24 bg-white font-sans">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[#5B4BF0] font-bold tracking-widest text-sm uppercase mb-4 block">
                        FROM OUR BLOG
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#292D34] mb-6 tracking-tight">
                        Related Articles
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <div key={index} className="flex flex-col h-full group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
                            {/* Content Card */}
                            <div className="bg-[#FAFAFC] border border-gray-100 rounded-2xl overflow-hidden flex-1 flex flex-col p-6 shadow-sm hover:shadow-xl transition-shadow">
                                <h3 className="text-lg font-bold text-[#292D34] mb-6 line-clamp-2 h-14">
                                    {article.title}
                                </h3>

                                {/* Image Placeholder */}
                                <div
                                    className={`w-full aspect-[4/3] rounded-xl mb-6 relative overflow-hidden flex items-center justify-center ${article.imageColor}`}
                                    style={{ backgroundImage: article.pattern }}
                                >
                                    <div className="absolute inset-0 bg-black/5" />
                                    <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                                        {article.icon}
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <p className="font-bold text-gray-900 text-sm">{article.author}</p>
                                    <p className="text-gray-500 text-xs mb-6">{article.role}</p>

                                    <Button className="w-full bg-[#292D34] hover:bg-black text-white font-bold rounded-lg py-6 flex items-center justify-center gap-2 group-hover:bg-[#5B4BF0] transition-colors">
                                        Read More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DocsRelatedArticles;
