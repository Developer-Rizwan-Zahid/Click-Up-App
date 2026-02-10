"use client";

import {
    Info,
    List,
    Layout,
    Calendar,
    GanttChartSquare,
    Table2,
    Plus,
    Filter,
    RefreshCcw,
    MoreHorizontal,
    Star,
    Sparkles,
    Zap,
    Share2,
    Users,
    X,
    Folder
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const DashboardContent = () => {
    const [recentTasks, setRecentTasks] = useState<any[]>([]);

    useEffect(() => {
        const fetchRecent = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await fetch('http://localhost:5000/api/dashboard/recent', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                if (res.ok) {
                    const data = await res.json();
                    setRecentTasks(data);
                }
            } catch (e) {
                console.error("Failed to fetch recent", e);
            }
        };
        fetchRecent();
    }, []);

    return (
        <div className="flex-1 flex flex-col min-w-0 bg-[#FAFAFA] h-full overflow-hidden">

            {/* Page Header */}
            <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">
                        T
                    </div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-lg font-bold text-[#292D34]">Team Space</h1>
                        <Star size={16} className="text-gray-400 hover:text-yellow-400 cursor-pointer" />
                    </div>
                </div>

                <div className="flex items-center gap-4 text-sm font-medium text-gray-600">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-black">
                        <div className="w-2 h-2 rounded-full bg-pink-500" />
                        <span>Agents</span>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-black">
                        <Zap size={14} />
                        <span>Automate</span>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-black text-purple-600">
                        <Sparkles size={14} />
                        <span>Ask AI</span>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-black">
                        <Share2 size={14} />
                        <span>Share</span>
                    </div>
                </div>
            </div>

            {/* Views Toolbar */}
            <div className="bg-white border-b border-gray-200 px-6 py-2 flex items-center gap-1 overflow-x-auto no-scrollbar shrink-0">
                <button className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                    Add Channel
                </button>
                <div className="h-4 w-px bg-gray-300 mx-2" />
                <ViewTab label="Overview" icon={Info} active />
                <ViewTab label="List" icon={List} />
                <ViewTab label="Board" icon={Layout} />
                <ViewTab label="Calendar" icon={Calendar} />
                <ViewTab label="Gantt" icon={GanttChartSquare} />
                <ViewTab label="Table" icon={Table2} />
                <button className="px-2 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md flex items-center gap-1">
                    <Plus size={16} />
                    View
                </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6">

                {/* Banner */}
                <div className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-lg p-3 flex items-center justify-between mb-6 shadow-sm">
                    <span className="text-sm text-gray-600">
                        Get the most out of your Overview! Add, reorder, and resize cards to customize this page <span className="underline cursor-pointer font-medium text-gray-800">Get Started</span>
                    </span>
                    <button className="text-gray-400 hover:text-gray-600">
                        <X size={16} />
                    </button>
                </div>

                {/* Filters Row */}
                <div className="flex items-center justify-between mb-6">
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 transition-shadow shadow-sm">
                        <Filter size={14} />
                        Filters
                    </button>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                                <RefreshCcw size={12} />
                                Refreshed: Dec 22, 2025
                            </span>
                            <span className="font-bold bg-gray-200 px-2 py-0.5 rounded-full text-[10px]">Auto refresh: On</span>
                        </div>
                        <span className="text-sm font-medium text-gray-600 cursor-pointer hover:text-black">Customize</span>
                        <button className="bg-black text-white text-sm font-bold px-4 py-1.5 rounded-md hover:bg-gray-800 transition-colors">
                            Add card
                        </button>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {/* Recent Card */}
                    <DashboardCard title="Recent">
                        <div className="space-y-1">
                            <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md cursor-pointer group">
                                <div className="p-1.5 bg-blue-100 rounded text-blue-600">
                                    <List size={16} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-sm font-medium text-gray-700 truncate group-hover:text-blue-600">Project 1</div>
                                    <div className="text-xs text-gray-400">in Team Space</div>
                                </div>
                            </div>
                        </div>
                    </DashboardCard>

                    {/* Docs Card */}
                    <DashboardCard title="Docs">
                        <div className="flex flex-col items-center justify-center h-48 text-gray-400 gap-3 opacity-50">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                                <Folder size={32} />
                            </div>
                            <span className="text-sm">No recent docs</span>
                        </div>
                    </DashboardCard>

                    {/* Bookmarks Card */}
                    <DashboardCard title="Bookmarks">
                        <div className="flex flex-col items-center justify-center py-10 px-6 text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-4 relative">
                                <div className="border-2 border-gray-300 rounded mb-1 h-6 w-4" />
                                <div className="absolute -bottom-2 -right-2 bg-gray-600 text-white rounded-full p-1 border-2 border-white">
                                    <Plus size={12} />
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 mb-4 max-w-[200px]">
                                Bookmarks make it easy to save ClickUp items or any URL from around the web.
                            </p>
                            <button className="bg-[#292D34] text-white text-sm font-bold px-4 py-2 rounded-md hover:bg-black transition-colors">
                                Add Bookmark
                            </button>
                        </div>
                    </DashboardCard>
                </div>
            </div>
        </div>
    );
};

function ViewTab({ icon: Icon, label, active }: { icon: any, label: string, active?: boolean }) {
    return (
        <button
            className={cn(
                "flex items-center gap-1.5 px-3 py-2 rounded-md transition-all text-sm font-medium border-b-2 border-transparent",
                active
                    ? "text-[#292D34] border-black"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            )}
        >
            <Icon size={16} />
            {label}
        </button>
    )
}

function DashboardCard({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col h-full overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-50 flex items-center justify-between">
                <h3 className="font-bold text-[#292D34]">{title}</h3>
                <MoreHorizontal size={16} className="text-gray-400 cursor-pointer hover:text-gray-600" />
            </div>
            <div className="p-4 flex-1">
                {children}
            </div>
        </div>
    )
}
