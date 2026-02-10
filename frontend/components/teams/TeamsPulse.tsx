"use client";

import { useState } from "react";
import {
    Search,
    Filter,
    MoreHorizontal,
    MessageSquare,
    Mail,
    Phone,
    Clock,
    Globe,
    ChevronDown,
    Plus,
    Users,
    Activity,
    User
} from "lucide-react";
import { cn } from "@/lib/utils";

const TEAM_MEMBERS = [
    {
        id: 1,
        name: "Usman Ghani",
        role: "Full Stack Developer",
        status: "Online",
        statusColor: "bg-green-500",
        lastActive: "Now",
        activity: "Working on ClickUp Clone",
        avatar: "U",
        avatarBg: "bg-purple-600"
    },
    {
        id: 2,
        name: "Ali Raza",
        role: "Frontend Engineer",
        status: "Away",
        statusColor: "bg-yellow-500",
        lastActive: "15m ago",
        activity: "Reviewing pull requests",
        avatar: "A",
        avatarBg: "bg-blue-600"
    },
    {
        id: 3,
        name: "Zainab Bibi",
        role: "UI/UX Designer",
        status: "Offline",
        statusColor: "bg-gray-400",
        lastActive: "2h ago",
        activity: "-",
        avatar: "Z",
        avatarBg: "bg-pink-600"
    },
    {
        id: 4,
        name: "Hamza Khan",
        role: "Backend Lead",
        status: "Online",
        statusColor: "bg-green-500",
        lastActive: "Now",
        activity: "Optimizing API performance",
        avatar: "H",
        avatarBg: "bg-orange-500"
    }
];

export const TeamsPulse = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredMembers = TEAM_MEMBERS.filter(member =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex-1 flex flex-col h-full bg-[#FAFAFA] overflow-hidden">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 px-8 py-5 flex items-center justify-between shrink-0">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <Users size={20} className="text-gray-500" />
                        <h1 className="text-2xl font-bold text-[#292D34]">Pulse</h1>
                    </div>
                    <div className="flex items-center gap-6 mt-4">
                        <button className="text-sm font-bold text-black border-b-2 border-black pb-2 px-1">
                            People
                        </button>
                        <button className="text-sm font-medium text-gray-500 hover:text-black transition-colors pb-2 px-1">
                            Teams
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-sm">
                        <Plus size={18} />
                        Invite People
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600 transition-colors">
                        <MoreHorizontal size={20} />
                    </button>
                </div>
            </div>

            {/* Toolbar */}
            <div className="px-8 py-4 bg-white border-b border-gray-100 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-4 flex-1 max-w-2xl">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input
                            type="text"
                            placeholder="Find people by name, role or team..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                        <Filter size={16} />
                        Status
                        <ChevronDown size={14} />
                    </button>
                </div>
                <div className="text-sm text-gray-500 font-medium">
                    Showing {filteredMembers.length} people
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-8">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                        {filteredMembers.map(member => (
                            <div key={member.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all group flex items-start gap-6">
                                {/* Avatar Section */}
                                <div className="relative shrink-0">
                                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold text-white shadow-inner", member.avatarBg)}>
                                        {member.avatar}
                                    </div>
                                    <div className={cn("absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-4 border-white", member.statusColor)} />
                                </div>

                                {/* Member Info */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="text-lg font-bold text-[#292D34] group-hover:text-blue-600 transition-colors">
                                                {member.name}
                                            </h3>
                                            <p className="text-sm text-gray-500 font-medium">{member.role}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button className="p-2 hover:bg-blue-50 hover:text-blue-600 rounded-lg text-gray-400 transition-colors border border-transparent hover:border-blue-100">
                                                <MessageSquare size={18} />
                                            </button>
                                            <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 transition-colors">
                                                <Mail size={18} />
                                            </button>
                                            <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 transition-colors">
                                                <MoreHorizontal size={18} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <Clock size={16} />
                                            <span>Last active: <span className="text-gray-900 font-medium">{member.lastActive}</span></span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <Activity size={16} />
                                            <span className="truncate">Current activity: <span className="text-gray-900 font-medium">{member.activity}</span></span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <Globe size={16} />
                                            <span>Local time: <span className="text-gray-900 font-medium">14:46 PM</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {filteredMembers.length === 0 && (
                            <div className="bg-white border border-dashed border-gray-300 rounded-2xl p-16 flex flex-col items-center justify-center text-center">
                                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 mb-4">
                                    <User size={32} />
                                </div>
                                <h3 className="text-lg font-bold text-[#292D34] mb-2">No people found</h3>
                                <p className="text-gray-500 mb-6 max-w-sm">
                                    We couldn't find anyone matching "{searchQuery}". Try adjusting your search query.
                                </p>
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="text-blue-600 font-bold hover:underline"
                                >
                                    Clear search
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
