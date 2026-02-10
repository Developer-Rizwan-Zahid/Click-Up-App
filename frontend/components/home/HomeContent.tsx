"use client";

import {
    Layout,
    List,
    Kanban,
    Calendar,
    GanttChart,
    Table,
    Plus,
    Filter,
    History,
    ChevronDown,
    Star,
    ExternalLink,
    X,
    MoreHorizontal
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const HomeContent = () => {
    const [activeTab, setActiveTab] = useState("Overview");

    const tabs = [
        { id: "Overview", icon: Layout },
        { id: "List", icon: List },
        { id: "Board", icon: Kanban },
        { id: "Calendar", icon: Calendar },
        { id: "Gantt", icon: GanttChart },
        { id: "Table", icon: Table },
    ];

    return (
        <div className="flex-1 flex flex-col min-w-0 bg-[#FAFAFA] h-full overflow-y-auto">
            {/* Header / Toolbar */}
            <div className="bg-white border-b border-gray-200 px-6 py-2 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center">
                            <UsersIcon className="text-white" size={14} />
                        </div>
                        <h1 className="font-semibold text-gray-800">Team Space</h1>
                        <ChevronDown size={14} className="text-gray-400" />
                        <Star size={14} className="text-gray-400 cursor-pointer hover:text-yellow-400" />
                    </div>

                    <div className="h-6 w-px bg-gray-200 mx-2" />

                    <div className="flex items-center gap-1">
                        <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-500 hover:bg-gray-100 rounded-md transition-colors">
                            <Plus size={14} />
                            Add Channel
                        </button>

                        <div className="flex items-center gap-1 ml-2">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={cn(
                                        "flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border-b-2 transition-all",
                                        activeTab === tab.id
                                            ? "border-purple-600 text-gray-900 bg-purple-50/50"
                                            : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                                    )}
                                >
                                    <tab.icon size={14} />
                                    {tab.id}
                                </button>
                            ))}
                            <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-500 hover:bg-gray-50 rounded-md">
                                <Plus size={14} />
                                View
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-4 text-gray-400">
                        <ExternalLink size={16} className="cursor-pointer hover:text-gray-600" />
                        <Star size={16} className="cursor-pointer hover:text-gray-600" />
                        <div className="flex items-center gap-1 text-xs font-medium cursor-pointer hover:text-gray-600 transition-colors">
                            <UsersIcon size={16} />
                            Ask
                        </div>
                        <div className="flex items-center gap-1 text-xs font-medium cursor-pointer hover:text-gray-600 transition-colors">
                            <Share2 size={16} />
                            Share
                        </div>
                    </div>
                </div>
            </div>

            {/* Banner */}
            <div className="mx-6 mt-6 p-4 bg-white border border-gray-100 rounded-xl flex items-center justify-between shadow-sm relative">
                <div className="flex items-center gap-3">
                    <p className="text-sm text-gray-600">
                        Get the most out of your Overview! Add, reorder, and resize cards to customize this page <span className="text-blue-600 cursor-pointer hover:underline">Get Started</span>
                    </p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                    <X size={16} />
                </button>
            </div>

            {/* Controls */}
            <div className="mx-6 mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50 shadow-sm transition-all">
                        <Filter size={14} />
                        Filters
                    </button>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                        <History size={14} />
                        <span>Refreshed: 7 mins ago</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span>Auto refresh: On</span>
                    </div>
                    <button className="text-xs font-medium text-gray-500 hover:text-gray-700">Customize</button>
                    <button className="px-4 py-1.5 bg-black text-white rounded-lg text-xs font-semibold hover:bg-gray-800 transition-colors shadow-lg shadow-black/10">
                        Add card
                    </button>
                </div>
            </div>

            {/* Grid Content */}
            <div className="px-6 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <HomeCard
                    title="Recent"
                    icon={History}
                    content={(
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center">
                                        <List size={12} className="text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-700">Project 1</p>
                                        <p className="text-[11px] text-gray-400">in Team Space</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                />

                <HomeCard
                    title="Docs"
                    icon={Table}
                    content={(
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                                <div className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center">
                                    <Table size={12} className="text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-700">Untitled</p>
                                    <p className="text-[11px] text-gray-400">in Untitled</p>
                                </div>
                            </div>
                        </div>
                    )}
                />

                <HomeCard
                    title="Bookmarks"
                    icon={Star}
                    content={(
                        <div className="flex flex-col items-center justify-center py-8 text-center">
                            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4 relative">
                                <div className="w-8 h-8 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center">
                                    <Plus size={14} className="text-gray-300" />
                                </div>
                            </div>
                            <p className="text-xs text-gray-400 max-w-[200px] mb-4">
                                Bookmarks make it easy to save ClickUp items or any URL from around the web.
                            </p>
                            <button className="px-4 py-1.5 bg-black text-white rounded-lg text-xs font-semibold hover:bg-gray-800 transition-colors">
                                Add Bookmark
                            </button>
                        </div>
                    )}
                />

                <div className="lg:col-span-3">
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="font-semibold text-gray-800 mb-4">Folders</h3>
                        <div className="flex flex-col items-center justify-center py-12 text-gray-400">
                            <p className="text-sm">No folders found in this space</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Float Badge */}
            <div className="fixed bottom-4 right-4 bg-black text-white px-2 py-1 rounded-md text-[10px] font-bold flex items-center gap-1 shadow-lg">
                <History size={10} />
                0/5
            </div>
        </div>
    );
};

function HomeCard({ title, icon: Icon, content }: { title: string, icon: any, content: React.ReactNode }) {
    return (
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col min-h-[300px]">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-800">{title}</h3>
                <MoreHorizontal size={16} className="text-gray-400 cursor-pointer" />
            </div>
            <div className="flex-1">
                {content}
            </div>
        </div>
    );
}

// Helper icons to avoid build issues if lucide names differ slightly in some versions
const UsersIcon = ({ className, size }: { className?: string, size?: number }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 24}
        height={size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

const Share2 = ({ className, size }: { className?: string, size?: number }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 24}
        height={size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
);
