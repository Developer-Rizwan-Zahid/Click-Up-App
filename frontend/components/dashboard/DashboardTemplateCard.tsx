"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardTemplateCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
    badge?: string;
    isCenter?: boolean;
    onClick?: () => void;
}

export const DashboardTemplateCard = ({
    title,
    description,
    icon: Icon,
    color,
    badge,
    isCenter,
    onClick
}: DashboardTemplateCardProps) => {
    return (
        <div
            onClick={onClick}
            className="bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all cursor-pointer group relative flex flex-col h-full min-h-[220px]"
        >
            <div className="flex items-start justify-between mb-4">
                <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110",
                    isCenter ? "bg-purple-100/50" : "bg-blue-50"
                )}>
                    <Icon
                        size={24}
                        className={cn(
                            isCenter ? "text-purple-600" : "text-blue-500"
                        )}
                        color={color}
                    />
                </div>
                {badge && (
                    <span className="bg-gray-800 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                        {badge}
                    </span>
                )}
            </div>

            <h3 className={cn(
                "text-lg font-bold mb-2 group-hover:text-purple-600 transition-colors",
                isCenter ? "text-purple-900" : "text-gray-900"
            )}>
                {title}
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed">
                {description}
            </p>
        </div>
    );
};
