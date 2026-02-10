"use client";

import React from "react";
import { Search, LayoutGrid, Folder, CheckSquare, FileText, Monitor, List } from "lucide-react";

export function SalesCrmHero() {
    return (
        <div className="w-full bg-white pt-28 pb-8 px-4 md:px-8 lg:px-16 flex flex-col relative">

            {/* Top Row: Breadcrumbs & Search */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="hover:text-slate-900 cursor-pointer">Templates</span>
                    <span className="text-slate-300">›</span>
                    <span className="hover:text-slate-900 cursor-pointer">Categories</span>
                    <span className="text-slate-300">›</span>
                    <span className="font-medium text-slate-900 bg-slate-100 px-2 py-0.5 rounded">Sales & CRM</span>
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-80">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-slate-400" />
                    </div>
                    <input
                        type="text"
                        className="w-full py-2 pl-10 pr-10 text-sm text-slate-900 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400"
                        placeholder="Search all templates"
                    />
                    {/* Enter Icon visual */}
                    <div className="absolute inset-y-0 right-3 flex items-center">
                        <div className="w-5 h-5 bg-slate-900 rounded flex items-center justify-center">
                            <span className="text-[10px] text-white font-bold">↵</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="mb-10">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                    Sales & CRM
                </h1>
                <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
                    Boost your sales process with ClickUp's Sales & CRM templates. Track leads, nurture relationships, and close deals with tools designed for sales success.
                </p>
            </div>

            {/* Bottom Row: Filters & Count */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-100 pb-2">
                {/* Filters */}
                <div className="flex flex-wrap items-center gap-2">
                    {[
                        { label: "All types", icon: <LayoutGrid className="w-3.5 h-3.5" />, color: "bg-black text-white border-black" },
                        { label: "Spaces", icon: <LayoutGrid className="w-3.5 h-3.5 text-green-500" />, color: "bg-white text-slate-500 border-slate-200 hover:bg-slate-50" },
                        { label: "Folders", icon: <Folder className="w-3.5 h-3.5 text-blue-400" />, color: "bg-white text-slate-500 border-slate-200 hover:bg-slate-50" },
                        { label: "Tasks", icon: <CheckSquare className="w-3.5 h-3.5 text-purple-500" />, color: "bg-white text-slate-500 border-slate-200 hover:bg-slate-50" },
                        { label: "Docs", icon: <FileText className="w-3.5 h-3.5 text-blue-500" />, color: "bg-white text-slate-500 border-slate-200 hover:bg-slate-50" },
                        { label: "Whiteboards", icon: <Monitor className="w-3.5 h-3.5 text-amber-500" />, color: "bg-white text-slate-500 border-slate-200 hover:bg-slate-50" },
                    ].map((filter, index) => (
                        <button
                            key={filter.label}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all border ${filter.color}`}
                        >
                            {filter.icon}
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Count */}
                <div className="text-xs font-medium text-slate-500">
                    58 Templates
                </div>
            </div>
        </div>
    );
}
