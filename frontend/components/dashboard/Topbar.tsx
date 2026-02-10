"use client";

import { Search, Bell, Video, UserPlus, Settings, Command } from "lucide-react";
import { cn } from "@/lib/utils";

export const Topbar = () => {
    return (
        <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 shrink-0">
            {/* Left: Breadcrumbs / Title */}
            <div className="flex items-center gap-4">
                {/* This could be breadcrumbs or just title depending on context */}
                {/* For now keeping it empty as per image mainly showing search/right actions */}
            </div>

            {/* Center: Search Bar */}
            <div className="flex-1 max-w-2xl px-4">
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-12 py-1.5 border-none rounded-full bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7B68EE]/20 focus:bg-white transition-all sm:text-sm"
                        placeholder="Search"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-xs text-gray-400 font-medium">Ctrl K</span>
                    </div>
                </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2">
                {/* Action Buttons */}
                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-md transition-colors">
                    <UserPlus size={18} />
                </button>
                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-md transition-colors">
                    <Video size={18} />
                </button>

                {/* Profile / Account */}
                <div className="ml-2 flex items-center gap-1 cursor-pointer p-1 hover:bg-gray-100 rounded-full border border-transparent hover:border-gray-200 transition-all">
                    <div className="w-7 h-7 rounded-full bg-[#1e1e1e] text-white flex items-center justify-center text-xs font-bold">
                        RZ
                    </div>
                    <div className="w-2 h-2 rounded-full bg-green-500 border-2 border-white absolute bottom-1 right-1" />
                </div>
            </div>
        </header>
    );
};
