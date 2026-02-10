"use client";

import {
    Layout,
    List,
    Trello,
    Calendar,
    Table,
    Plus,
    Star,
    MoreHorizontal
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SpacesHeaderProps {
    spaceName: string;
    activeTab: 'overview' | 'list';
    onTabChange: (tab: 'overview' | 'list') => void;
}

export const SpacesHeader = ({ spaceName, activeTab, onTabChange }: SpacesHeaderProps) => {
    return (
        <div className="flex flex-col border-b border-gray-200 bg-white">
            {/* Title Row */}
            <div className="flex items-center justify-between px-6 h-14">
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                        {spaceName.charAt(0)}
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold text-gray-800">{spaceName}</span>
                        <Star size={16} className="text-gray-400 hover:text-yellow-400 cursor-pointer" />
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                        {/* Mock Avatars */}
                        <div className="w-8 h-8 rounded-full bg-orange-400 border-2 border-white flex items-center justify-center text-white text-xs">RZ</div>
                        <div className="w-8 h-8 rounded-full bg-purple-400 border-2 border-white flex items-center justify-center text-white text-xs">AI</div>
                    </div>
                    <button className="text-sm font-medium text-gray-600 hover:text-black">Share</button>
                </div>
            </div>

            {/* Tabs Row */}
            <div className="flex items-center px-4 gap-1 overflow-x-auto no-scrollbar">
                <TabButton
                    icon={Layout}
                    label="Overview"
                    isActive={activeTab === 'overview'}
                    onClick={() => onTabChange('overview')}
                />
                <TabButton
                    icon={List}
                    label="List"
                    isActive={activeTab === 'list'}
                    onClick={() => onTabChange('list')}
                />
                <TabButton icon={Trello} label="Board" />
                <TabButton icon={Calendar} label="Calendar" />
                <TabButton icon={Table} label="Table" />

                <div className="flex items-center px-3 py-2 text-gray-500 hover:text-gray-800 cursor-pointer text-sm font-medium border-l border-gray-200 ml-2 pl-4">
                    <Plus size={16} className="mr-1" />
                    View
                </div>
            </div>
        </div>
    );
};

function TabButton({ icon: Icon, label, isActive, onClick }: { icon: any, label: string, isActive?: boolean, onClick?: () => void }) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap",
                isActive
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-200"
            )}
        >
            <Icon size={16} />
            {label}
        </button>
    )
}
