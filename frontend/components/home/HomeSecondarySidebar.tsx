"use client";

import {
    Plus,
    ChevronDown,
    Hash,
    ChevronRight,
    MessageSquare,
    User,
    LayoutGrid,
    Search
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const HomeSecondarySidebar = () => {
    return (
        <div className="w-[260px] bg-white border-r border-gray-200 flex flex-col h-full shrink-0 overflow-y-auto">
            {/* Search / Context */}
            <div className="p-4 flex items-center justify-between border-b border-gray-50">
                <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-[10px]">R</div>
                    <span className="text-xs font-semibold text-gray-700 truncate max-w-[140px]">Rizwan Zahid's Workspace</span>
                    <ChevronDown size={14} className="text-gray-400" />
                </div>
                <div className="text-gray-400 hover:text-gray-600 cursor-pointer">
                    <CalendarIcon size={16} />
                </div>
            </div>

            <div className="px-3 py-4 flex flex-col gap-1">
                <div className="relative group mb-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                    <input
                        type="text"
                        placeholder="Search Ctrl K"
                        className="w-full bg-gray-50 border-none rounded-lg py-2 pl-9 pr-3 text-xs focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                    />
                </div>

                <Section label="Home" icon={LayoutGrid} showPlus />

                <div className="mt-4">
                    <Section label="Spaces" />
                    <div className="flex flex-col gap-0.5 mt-1">
                        <SidebarItem icon={UsersIcon} label="All Tasks - Rizwan Zahid's Work..." size="xs" />
                        <div className="bg-gray-100/50 rounded-lg">
                            <SidebarItem icon={UsersIcon} label="Team Space" active />
                            <div className="ml-4 flex flex-col gap-0.5 pb-2">
                                <SidebarItem label="Project 1" icon={ListIcon} />
                                <SidebarItem label="Project 2" icon={ListIcon} />
                                <SidebarItem label="Get Started with Click..." icon={ListIcon} count={5} />
                                <SidebarItem label="Project Notes" icon={DocIcon} />
                                <SidebarItem label="Untitled" icon={DocIcon} />
                            </div>
                        </div>
                        <button className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-md transition-colors w-full">
                            <Plus size={14} />
                            New Space
                        </button>
                    </div>
                </div>

                <div className="mt-6">
                    <Section label="Channels" />
                    <div className="flex flex-col gap-0.5 mt-1">
                        <SidebarItem icon={Hash} label="Welcome" />
                        <SidebarItem icon={Hash} label="Gene..." sub="Rizwan Zahid's Works..." />
                        <button className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-md transition-colors w-full">
                            <Plus size={14} />
                            Add Channel
                        </button>
                    </div>
                </div>

                <div className="mt-6">
                    <Section label="Direct Messages" />
                    <div className="flex flex-col gap-0.5 mt-1">
                        <div className="flex items-center justify-between px-3 py-1.5 hover:bg-gray-50 rounded-md cursor-pointer transition-colors group">
                            <div className="flex items-center gap-2.5">
                                <div className="w-5 h-5 rounded-full bg-green-900 border border-white flex items-center justify-center text-[10px] text-white">RZ</div>
                                <span className="text-sm font-medium text-gray-600">Rizwan Zahid — You</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function Section({ label, icon: Icon, showPlus }: { label: string, icon?: any, showPlus?: boolean }) {
    return (
        <div className="flex items-center justify-between px-3 py-1.5 group cursor-pointer">
            <div className="flex items-center gap-2">
                {Icon && <Icon size={16} className="text-gray-500" />}
                <span className="text-sm font-semibold text-gray-700">{label}</span>
            </div>
            {showPlus && (
                <div className="text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Plus size={14} />
                </div>
            )}
            {!showPlus && label !== "Direct Messages" && (
                <div className="text-gray-400 hover:text-gray-600">
                    <Plus size={14} />
                </div>
            )}
        </div>
    );
}

function SidebarItem({ icon: Icon, label, active, count, sub, size = "sm" }: { icon?: any, label: string, active?: boolean, count?: number, sub?: string, size?: "xs" | "sm" }) {
    return (
        <div className={cn(
            "flex items-center gap-2.5 px-3 py-1.5 rounded-md cursor-pointer transition-colors group relative",
            active ? "bg-gray-100 text-gray-900" : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
        )}>
            {Icon && <Icon size={16} className={cn(active ? "text-gray-900" : "text-gray-400")} />}
            {!Icon && <div className="w-4" />}
            <div className="flex flex-col min-w-0">
                <span className={cn(
                    "truncate",
                    size === "xs" ? "text-[11px] font-medium" : "text-sm",
                    active ? "font-semibold" : ""
                )}>{label}</span>
                {sub && <span className="text-[10px] text-gray-400 truncate -mt-0.5">{sub}</span>}
            </div>
            {count !== undefined && (
                <span className="ml-auto text-[10px] text-gray-400">{count}</span>
            )}
            {active && (
                <div className="ml-auto opacity-0 group-hover:opacity-100 flex items-center gap-1">
                    <Plus size={14} />
                    <ChevronRight size={14} />
                </div>
            )}
        </div>
    );
}

const CalendarIcon = ({ size }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
);

const UsersIcon = ({ className, size }: { className?: string, size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);

const ListIcon = ({ className, size = 12 }: { className?: string, size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("text-gray-400", className)}><line x1="8" x2="21" y1="6" y2="6" /><line x1="8" x2="21" y1="12" y2="12" /><line x1="8" x2="21" y1="18" y2="18" /><line x1="3" x2="3.01" y1="6" y2="6" /><line x1="3" x2="3.01" y1="12" y2="12" /><line x1="3" x2="3.01" y1="18" y2="18" /></svg>
);

const DocIcon = ({ className, size = 12 }: { className?: string, size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("text-blue-500", className)}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>
);
