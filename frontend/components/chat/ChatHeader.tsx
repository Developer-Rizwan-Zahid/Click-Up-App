"use client";

import { Search } from "lucide-react";

export const ChatHeader = () => {
    return (
        <div className="flex flex-col border-b border-gray-200 bg-white p-4 gap-4">
            <h1 className="text-lg font-semibold text-gray-800">New Direct Message</h1>

            <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search people or enter an email to invite them"
                    className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
                />
            </div>
        </div>
    );
};
