"use client";

import { useState } from 'react';
import { ChevronDown, ChevronRight, Search, X } from 'lucide-react';

const filterGroups = [
    {
        title: "Webinar Topic",
        items: ["Product Updates", "Project Management", "Agile & Software", "Marketing", "Sales & CRM", "Remote Work"]
    },
    {
        title: "Level",
        items: ["Beginner", "Intermediate", "Advanced"]
    },
    {
        title: "Language",
        items: ["English", "French", "Spanish", "German"]
    }
];

export default function WebinarsSidebar() {
    const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(
        Object.fromEntries(filterGroups.map(g => [g.title, true]))
    );

    const toggleGroup = (title: string) => {
        setOpenGroups(prev => ({ ...prev, [title]: !prev[title] }));
    };

    return (
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-6">
            <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-gray-900">Filters</h3>
                <button className="text-xs text-gray-500 hover:text-[#7B68EE]">Reset All</button>
            </div>

            <div className="relative mb-6">
                <input
                    type="text"
                    placeholder="Search webinars..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-[#7B68EE] focus:ring-1 focus:ring-[#7B68EE] outline-none text-sm"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>

            {filterGroups.map((group) => (
                <div key={group.title} className="border-b border-gray-100 pb-4 last:border-0">
                    <button
                        onClick={() => toggleGroup(group.title)}
                        className="flex items-center justify-between w-full text-left font-bold text-[#292D34] hover:text-[#7B68EE] transition-colors mb-2 text-sm"
                    >
                        {group.title}
                        {openGroups[group.title] ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
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
