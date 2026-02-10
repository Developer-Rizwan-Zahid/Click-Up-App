"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import {
    Inbox as InboxIcon,
    Filter,
    Search,
    MoreHorizontal,
    ChevronDown,
    CheckCircle2,
    Clock,
    User,
    ArrowUpRight
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function InboxPage() {
    const [activeTab, setActiveTab] = useState("Important");

    return (
        <div className="flex h-screen w-full bg-[#FAFAFA] overflow-hidden">
            {/* Main Navigation Rail */}
            <Sidebar />

            {/* Inbox Layout */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Header */}
                <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <InboxIcon className="text-gray-500" size={20} />
                            <h1 className="font-bold text-gray-800 text-lg">Inbox</h1>
                        </div>
                        <div className="flex items-center bg-gray-100 rounded-lg p-1 ml-4">
                            {["Important", "Other", "Snoozed", "Cleared"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={cn(
                                        "px-4 py-1.5 text-xs font-semibold rounded-md transition-all",
                                        activeTab === tab
                                            ? "bg-white text-gray-900 shadow-sm"
                                            : "text-gray-500 hover:text-gray-700"
                                    )}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="relative group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                            <input
                                type="text"
                                placeholder="Search notifications..."
                                className="bg-gray-50 border border-gray-200 rounded-lg py-2 pl-9 pr-3 text-xs w-64 focus:ring-1 focus:ring-purple-500 outline-none"
                            />
                        </div>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400">
                            <Filter size={18} />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400">
                            <MoreHorizontal size={18} />
                        </button>
                    </div>
                </header>

                {/* Content Area */}
                <main className="flex-1 overflow-y-auto p-6">
                    <div className="max-w-4xl mx-auto space-y-4">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider">New</h2>
                            <button className="text-xs font-semibold text-purple-600 hover:text-purple-700">Clear all</button>
                        </div>

                        {/* notification items */}
                        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <NotificationItem
                                user="Dean P."
                                action="assigned you to"
                                target="Social campaign"
                                time="2 hours ago"
                                project="Marketing"
                                color="bg-red-500"
                            />
                            <NotificationItem
                                user="Zeb E."
                                action="mentioned you in"
                                target="Competitor Benchmarking"
                                time="4 hours ago"
                                project="Research"
                                color="bg-blue-500"
                            />
                        </div>

                        <div className="pt-8">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider text-opacity-60">Earlier</h2>
                            </div>
                            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden opacity-70">
                                <NotificationItem
                                    user="Campaign Agent"
                                    action="completed"
                                    target="Market Analysis Draft"
                                    time="Yesterday"
                                    project="AI Projects"
                                    color="bg-purple-500"
                                    isRead
                                />
                            </div>
                        </div>

                        {/* Empty state hint */}
                        <div className="flex flex-col items-center justify-center py-20 text-center opacity-40">
                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                                <CheckCircle2 size={32} className="text-gray-300" />
                            </div>
                            <p className="text-sm font-medium text-gray-600">You're all caught up!</p>
                            <p className="text-xs text-gray-400 mt-1">Check back later for more updates.</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

function NotificationItem({ user, action, target, time, project, color, isRead }: any) {
    return (
        <div className={cn(
            "flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors cursor-pointer group border-b border-gray-50 last:border-0",
            !isRead && "bg-blue-50/20"
        )}>
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden border border-gray-100">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user}`} alt={user} />
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-bold text-gray-900 text-sm">{user}</span>
                        <span className="text-gray-500 text-sm">{action}</span>
                        <span className="font-semibold text-gray-800 text-sm group-hover:text-purple-600 transition-colors">{target}</span>
                    </div>
                    <span className="text-[11px] text-gray-400 shrink-0">{time}</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                        <div className={cn("w-2 h-2 rounded-full", color)} />
                        <span className="text-xs text-gray-400 font-medium">{project}</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 hover:bg-white rounded-md border border-gray-200 text-gray-400 hover:text-gray-600">
                    <CheckCircle2 size={14} />
                </button>
                <button className="p-1.5 hover:bg-white rounded-md border border-gray-200 text-gray-400 hover:text-gray-600">
                    <Clock size={14} />
                </button>
            </div>
        </div>
    );
}
