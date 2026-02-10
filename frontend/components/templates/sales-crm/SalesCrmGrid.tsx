"use client";

import React from "react";
import { SalesCrmCard } from "./SalesCrmCard";

const MOCK_TEMPLATES = [
    {
        title: "Weekly Sales Report Template",
        author: "ClickUp™",
        type: "Doc",
        isFree: true,
    },
    {
        title: "Sales Pipeline Management",
        author: "ClickUp™",
        type: "Folder",
        isFree: true,
    },
    {
        title: "Simple CRM",
        author: "ClickUp™",
        type: "List",
        isFree: true,
    },
    {
        title: "Sales Process Playbook",
        author: "ClickUp™",
        type: "Doc",
        isFree: false,
    },
    {
        title: "Account Management",
        author: "ClickUp™",
        type: "Folder",
        isFree: true,
    },
    {
        title: "Client Success Playbook",
        author: "ClickUp™",
        type: "Task",
        isFree: true,
    },
    {
        title: "Sales KPI Tracker",
        author: "ClickUp™",
        type: "Whiteboard",
        isFree: true,
    },
    {
        title: "Customer Journey Map",
        author: "ClickUp™",
        type: "Whiteboard",
        isFree: true,
    },
    {
        title: "Lead Tracking & Management",
        author: "ClickUp™",
        type: "Space",
        isFree: true,
    },
];

export function SalesCrmGrid() {
    return (
        <div className="w-full bg-white pb-24 px-4 md:px-8 lg:px-16 pt-6">
            <div className="max-w-full">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                    {MOCK_TEMPLATES.map((template, index) => (
                        <SalesCrmCard
                            key={index}
                            title={template.title}
                            author={template.author}
                            type={template.type}
                            isFree={template.isFree}
                        />
                    ))}
                    {/* Duplicate to fill grid */}
                    {MOCK_TEMPLATES.slice(0, 3).map((template, index) => (
                        <SalesCrmCard
                            key={`dup-${index}`}
                            title={template.title}
                            author={template.author}
                            type={template.type}
                            isFree={template.isFree}
                        />
                    ))}
                </div>

                {/* Pagination - Updated to be simpler */}
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
