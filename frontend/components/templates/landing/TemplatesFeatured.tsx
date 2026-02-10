"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

const FEATURED = [
    {
        title: "Agency Management",
        description: "Manage client work, internal projects, and sales in one place.",
        image: "https://photos.clickup.com/media/templates/agency-management.png", // Use placeholder or valid logic
        color: "bg-purple-600"
    },
    {
        title: "Integrated Campaigns",
        description: "Plan and execute marketing campaigns across all your channels.",
        image: "https://photos.clickup.com/media/templates/marketing-campaign.png",
        color: "bg-pink-600"
    },
    {
        title: "Agile Scrum Management",
        description: "A complete agile workflow for engineering and product teams.",
        image: "https://photos.clickup.com/media/templates/agile-scrum.png",
        color: "bg-blue-600"
    }
];

export function TemplatesFeatured() {
    return (
        <div className="w-full bg-slate-50 py-20 px-4 md:px-8 lg:px-16">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex items-end justify-between mb-10">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Templates</h2>
                        <p className="text-slate-600">Most popular templates to get you started</p>
                    </div>
                    <button className="hidden md:flex items-center text-purple-600 font-bold hover:gap-2 transition-all">
                        View all featured <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {FEATURED.map((item, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-slate-200">
                            <div className="h-48 bg-slate-200 relative overflow-hidden flex items-center justify-center">
                                {/* Placeholder Visuals */}
                                <div className={`w-full h-full opacity-10 ${item.color}`} />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-5xl opacity-20">✨</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    {item.description}
                                </p>
                                <div className="flex items-center text-yellow-400 gap-1 mb-6">
                                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                                    <span className="text-slate-400 text-sm ml-2">(4.9/5)</span>
                                </div>
                                <button className="w-full py-3 bg-slate-50 text-slate-700 font-bold rounded-xl group-hover:bg-purple-600 group-hover:text-white transition-all">
                                    Use Template
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
