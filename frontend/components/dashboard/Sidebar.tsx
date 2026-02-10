"use client";

import { useState } from "react";
import {
    Home,
    Calendar,
    Bot,
    Users,
    MoreHorizontal,
    UserPlus,
    ArrowUpCircle,
    ChevronsRight,
    MessageSquare,
    Layout,
    CheckSquare
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AiChatModal } from "./AiChatModal";
import { MoreMenu } from "./MoreMenu";
import { AppCenterModal } from "./AppCenterModal";
import Link from "next/link";

export const Sidebar = () => {
    const [isAiOpen, setIsAiOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const [isAppCenterOpen, setIsAppCenterOpen] = useState(false);

    return (
        <>
            <aside className="flex flex-col w-[70px] h-screen bg-black text-gray-400 py-4 items-center border-r border-gray-800 z-50">

                {/* Top: Collapse/Expand Placeholder */}
                <div className="mb-6 text-gray-500 hover:text-white cursor-pointer">
                    <ChevronsRight size={20} />
                </div>

                <div className="w-8 h-px bg-gray-800 mb-6" />

                {/* Main Nav */}
                <div className="flex flex-col items-center gap-6 w-full">

                    {/* Home with Glow */}
                    <div className="flex flex-col items-center gap-1 cursor-pointer group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 p-[1px] shadow-lg shadow-purple-900/50">
                            <div className="w-full h-full rounded-xl bg-black flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                <Link href="/home">
                                    <Home size={20} className="text-white fill-white" />
                                </Link>
                                
                            </div>
                        </div>
                        <span className="text-[10px] font-bold text-white">Home</span>
                    </div>
                    <Link href="/calendar">
                        <NavItem icon={Calendar} label="Planner" />
                    </Link>

                    <div onClick={() => setIsAiOpen(true)}>
                        <NavItem icon={Bot} label="AI" highlight />
                    </div>

                    <Link href="/teams-pulse/people">
                        <NavItem icon={Users} label="Teams" />
                    </Link>

                    <Link href="/dashboard">
                        <NavItem icon={Layout} label="Dashboards" />
                    </Link>

                    <div onClick={() => setIsMoreOpen(true)}>
                        <NavItem icon={MoreHorizontal} label="More" highlight={isMoreOpen} />
                    </div>

                </div>

                <div className="flex-1" />

                {/* Bottom Actions */}
                <div className="flex flex-col items-center gap-6 mb-4">
                    <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-white transition-colors">
                        <UserPlus size={20} />
                        <span className="text-[10px] font-medium">Invite</span>
                    </div>

                    <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-white transition-colors">
                        <ArrowUpCircle size={20} />
                        <span className="text-[10px] font-medium">Upgrade</span>
                    </div>
                </div>
            </aside>

            {/* AI Modal */}
            <AiChatModal isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />

            {/* More Menu */}
            <MoreMenu
                isOpen={isMoreOpen}
                onClose={() => setIsMoreOpen(false)}
                onOpenAppCenter={() => {
                    setIsMoreOpen(false);
                    setIsAppCenterOpen(true);
                }}
            />

            {/* App Center Modal */}
            <AppCenterModal
                isOpen={isAppCenterOpen}
                onClose={() => setIsAppCenterOpen(false)}
            />
        </>
    );
};

function NavItem({ icon: Icon, label, highlight, onClick }: { icon: any, label: string, highlight?: boolean, onClick?: () => void }) {
    return (
        <div
            onClick={onClick}
            className={cn(
                "flex flex-col items-center gap-1 cursor-pointer transition-colors group",
                highlight ? "text-white" : "text-gray-400 hover:text-white"
            )}
        >
            <div className={cn(
                "p-2 rounded-lg transition-all",
                highlight ? "bg-white/10" : "group-hover:bg-white/5"
            )}>
                <Icon size={20} />
            </div>
            <span className="text-[10px] font-medium">{label}</span>
        </div>
    )
}
