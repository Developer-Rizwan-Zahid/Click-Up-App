"use client";

import React from "react";
import { MarketingCard } from "./MarketingCard";

const MOCK_TEMPLATES = [
    {
        title: "PDCA Process",
        author: "ClickUp™",
        type: "Whiteboard",
        isFree: true,
    },
    {
        title: "Vision Whiteboard",
        author: "ClickUp™",
        type: "Whiteboard",
        isFree: true,
    },
    {
        title: "Project Status Report",
        author: "ClickUp™",
        type: "Doc",
        isFree: true,
    },
    {
        title: "BCG Matrix",
        author: "ClickUp™",
        type: "Whiteboard",
        isFree: true,
    },
    {
        title: "Wine Tasting Notes",
        author: "ClickUp™",
        type: "Doc",
        isFree: true,
    },
    {
        title: "Questionnaire",
        author: "ClickUp™",
        type: "Doc",
        isFree: true,
    },
    {
        title: "Graphic Design Proposal",
        author: "ClickUp™",
        type: "Doc",
        isFree: true,
    },
    {
        title: "General Feedback Survey",
        author: "ClickUp™",
        type: "Doc",
        isFree: true,
    },
    {
        title: "Jobs to Be Done",
        author: "ClickUp™",
        type: "Whiteboard",
        isFree: true,
    },
];

export function MarketingGrid() {
    return (
        <div className="w-full bg-white pb-24 px-4 md:px-8 lg:px-16 pt-6">
            <div className="max-w-full">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                    {MOCK_TEMPLATES.map((template, index) => (
                        <MarketingCard
                            key={index}
                            title={template.title}
                            author={template.author}
                            type={template.type}
                            isFree={template.isFree}
                        />
                    ))}
                    {/* Duplicate to fill grid */}
                    {MOCK_TEMPLATES.slice(0, 3).map((template, index) => (
                        <MarketingCard
                            key={`dup-${index}`}
                            title={template.title}
                            author={template.author}
                            type={template.type}
                            isFree={template.isFree}
                        />
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-12 flex justify-center items-center gap-3 text-sm font-medium text-slate-500">
                    <span className="cursor-pointer hover:text-slate-900 px-2">«</span>
                    <span className="text-slate-900 font-bold px-2">1</span>
                    <span className="cursor-pointer hover:text-slate-900 px-2">2</span>
                    <span className="cursor-pointer hover:text-slate-900 px-2">3</span>
                    <span className="cursor-pointer hover:text-slate-900 px-2">4</span>
                    <span className="cursor-pointer hover:text-slate-900 px-2">5</span>
                    <span className="cursor-pointer hover:text-slate-900 px-2">»</span>
                </div>
            </div>
        </div>
    );
}
