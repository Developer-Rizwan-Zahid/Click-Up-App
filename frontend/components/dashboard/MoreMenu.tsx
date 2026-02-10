"use client";

import {
    Layout,
    MessageSquare,
    FileText,
    BarChart2,
    PenTool,
    CheckSquare,
    Video,
    Trophy,
    Clock,
    Grid,
    Settings
} from "lucide-react";
import { useEffect, useRef } from "react";
import Link from "next/link";

interface MoreMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onOpenAppCenter: () => void;
}

export const MoreMenu = ({ isOpen, onClose, onOpenAppCenter }: MoreMenuProps) => {
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            ref={menuRef}
            className="fixed left-[80px] bottom-4 z-50 w-[320px] bg-white rounded-xl shadow-2xl border border-gray-200 p-4 animate-in fade-in slide-in-from-left-2 duration-200"
        >
            <div className="grid grid-cols-3 gap-y-6 gap-x-2 mb-4">
                <Link href="/spaces">
                    <MenuItem icon={<Layout className="text-purple-500" />} label="Spaces" />
                </Link>
                <Link href="/chat">
                    <MenuItem icon={<MessageSquare className="text-green-500" />} label="Chat" />
                </Link>
                <MenuItem icon={<FileText className="text-blue-500" />} label="Docs" />
                <Link href="dashboard">
                    <MenuItem icon={<BarChart2 className="text-purple-600" />} label="Dashboards" />
                </Link>
                <Link href="/hubs/whiteboards">
                    <MenuItem icon={<PenTool className="text-yellow-500" />} label="Whiteboards" />
                </Link>
                <Link href="forms">
                <MenuItem icon={<CheckSquare className="text-purple-500" />} label="Forms" />
                </Link>
                 
                <MenuItem icon={<Video className="text-red-500" />} label="Clips" />
                <MenuItem icon={<Trophy className="text-orange-700" />} label="Goals" />
                <MenuItem icon={<Clock className="text-orange-500" />} label="Timesheets" />

                <div onClick={onOpenAppCenter}>
                    <MenuItem icon={<Grid className="text-gray-500" />} label="Apps" />
                </div>
            </div>

            <div className="pt-3 border-t border-gray-100">
                <button className="flex items-center justify-center w-full gap-2 py-2 text-sm text-gray-500 hover:bg-gray-50 rounded-lg transition-colors font-medium">
                    <Settings size={16} />
                    Customize navigation
                </button>
            </div>
        </div>
    );
};

const MenuItem = ({ icon, label }: { icon: any, label: string }) => {
    return (
        <div className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white border border-gray-100 shadow-sm group-hover:shadow-md group-hover:-translate-y-0.5 transition-all">
                {icon}
            </div>
            <span className="text-xs font-medium text-gray-700">{label}</span>
        </div>
    );
};
