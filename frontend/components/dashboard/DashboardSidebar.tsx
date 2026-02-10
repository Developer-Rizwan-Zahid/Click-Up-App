"use client";

import {
    Plus,
    LayoutDashboard,
    UserCircle,
    Users2,
    Lock,
    Star
} from "lucide-react";
import { cn } from "@/lib/utils";

export const DashboardSidebar = () => {
    return (
        <div className="w-[240px] bg-white border-r border-gray-200 flex flex-col h-full shrink-0">
            {/* Header */}
            <div className="p-4 flex items-center justify-between group">
                <h2 className="font-semibold text-gray-700">Dashboards</h2>
                <button className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-1 rounded transition-colors">
                    <Plus size={16} />
                </button>
            </div>

            {/* Navigation Groups */}
            <div className="flex-col flex px-2 gap-0.5">
                <SidebarItem icon={LayoutDashboard} label="All Dashboards" active />
                <SidebarItem icon={UserCircle} label="My Dashboards" />
                <SidebarItem icon={Users2} label="Shared with me" />
                <SidebarItem icon={Lock} label="Private" />
            </div>

            {/* Favorites */}
            <div className="mt-6 px-4">
                <div className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                    Favorites
                </div>

                {/* Empty State for Favorites (matching image) */}
                <div className="border border-dashed border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center mt-2 bg-gray-50/50">
                    <div className="flex gap-1 mb-2">
                        <Star size={10} className="text-yellow-200 fill-yellow-100" />
                        <Star size={14} className="text-yellow-400 fill-yellow-300" />
                        <Star size={10} className="text-yellow-200 fill-yellow-100" />
                    </div>
                    <span className="text-xs text-gray-400">
                        Star a Dashboard to see it here
                    </span>
                </div>
            </div>
        </div>
    );
};

function SidebarItem({ icon: Icon, label, active }: { icon: any, label: string, active?: boolean }) {
    return (
        <div className={cn(
            "flex items-center gap-2.5 px-3 py-2 rounded-md cursor-pointer text-sm font-medium transition-colors",
            active
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        )}>
            <Icon size={16} className={cn(active ? "text-gray-900" : "text-gray-500")} />
            <span>{label}</span>
        </div>
    )
}
