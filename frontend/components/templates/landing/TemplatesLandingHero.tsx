"use client";

import React from "react";
import { Search } from "lucide-react";

export function TemplatesLandingHero() {
    return (
        <div className="w-full bg-white pt-32 pb-16 px-4 md:px-8 lg:px-16 flex flex-col items-center text-center relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-50/50 via-white to-white" />

            {/* Label */}
            <div className="mb-6">
                <span className="text-sm font-bold text-purple-600 tracking-wide uppercase">
                    Templates
                </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 max-w-4xl leading-tight">
                Jumpstart productivity with ready-made templates
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
                Get started quickly with templates for every use case. Browse the library to find the perfect starting point for your next project.
            </p>

            {/* Search Bar */}
            <div className="relative w-full max-w-2xl shadow-xl shadow-purple-100/50 rounded-2xl">
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                    <Search className="h-6 w-6 text-slate-400" />
                </div>
                <input
                    type="text"
                    className="w-full py-5 pl-14 pr-6 text-slate-900 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-100 focus:border-purple-300 transition-all placeholder:text-slate-400 text-lg"
                    placeholder="Search all templates..."
                />
                <div className="absolute inset-y-0 right-2 flex items-center">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-purple-200">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}
