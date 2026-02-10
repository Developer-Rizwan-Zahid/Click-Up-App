"use client";

import { useState } from 'react';
import { ChevronDown, ChevronRight, Search } from 'lucide-react';

const filterGroups = [
    {
        title: "Hot Off the Press!",
        items: ["Explore What's New!", "Fresh Content"]
    },
    {
        title: "Onboarding",
        items: ["ClickUp for Beginners", "Intermediate Path", "Expert Certification", "Admin Guide"]
    },
    {
        title: "Learning Objectives",
        items: ["Feature Deep Dive", "Productivity Best Practices", "Team Collaboration", "Automation Mastery"]
    },
    {
        title: "Team Solutions",
        items: ["Software Teams", "Marketing Teams", "Project Management", "Agencies", "HR & People Ops"]
    },
    {
        title: "Learning Style",
        items: ["Live Training", "On-Demand Webinar", "Video Course", "Self-Paced Course", "Learning Path"]
    }
];

export default function CatalogSidebar() {
    const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(
        Object.fromEntries(filterGroups.map(g => [g.title, true]))
    );

    const toggleGroup = (title: string) => {
        setOpenGroups(prev => ({ ...prev, [title]: !prev[title] }));
    };

    return (
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-6">
            <div className="relative lg:hidden mb-6">
                <input
                    type="text"
                    placeholder="Search catalog..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-[#7B68EE] focus:ring-1 focus:ring-[#7B68EE] outline-none"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>

            {filterGroups.map((group) => (
                <div key={group.title} className="border-b border-gray-100 pb-4 last:border-0">
                    <button
                        onClick={() => toggleGroup(group.title)}
                        className="flex items-center justify-between w-full text-left font-bold text-[#292D34] hover:text-[#7B68EE] transition-colors mb-2"
                    >
                        {group.title}
                        {openGroups[group.title] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                    </button>

                    {openGroups[group.title] && (
                        <div className="space-y-2 pl-2">
                            {group.items.map((item) => (
                                <label key={item} className="flex items-center gap-2 cursor-pointer group">
                                    <div className="w-4 h-4 rounded border border-gray-300 flex items-center justify-center group-hover:border-[#7B68EE] bg-white">
                                        {/* Checkbox imitation */}
                                    </div>
                                    <span className="text-sm text-gray-600 group-hover:text-[#7B68EE] transition-colors">
                                        {item}
                                    </span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </aside>
    );
}
