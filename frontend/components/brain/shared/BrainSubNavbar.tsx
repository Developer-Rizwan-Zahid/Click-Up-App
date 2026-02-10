"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Bot, Glasses, Mic, FileText, Search, DollarSign, BrainCircuit, AudioLines, FileStack, ScanSearch } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const BrainSubNavbar = () => {
    const pathname = usePathname();

    const links = [
        { name: "Platform", href: "/brain", icon: Sparkles },
        { name: "BrainGPT", href: "/brain/gpt", icon: BrainCircuit },
        { name: "Super Agents", href: "/brain/agents", icon: Glasses, new: true },
        { name: "Talk to Text", href: "/brain/talk-to-text", icon: AudioLines },
        { name: "Notetaker", href: "/brain/ai-notetaker", icon: FileStack },
        { name: "Enterprise Search", href: "/brain/enterprise-search", icon: ScanSearch },
        { name: "Pricing", href: "/brain/pricing", icon: DollarSign },
    ];

    return (
        <div className="w-full bg-black/95 backdrop-blur-md border-b border-white/10 z-40 overflow-x-auto custom-scrollbar">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between md:justify-center h-20 gap-8 min-w-max">
                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "group relative flex flex-col items-center gap-1.5 px-2 py-1 min-w-[80px]",
                                    isActive ? "text-white" : "text-gray-500 hover:text-gray-300"
                                )}
                            >
                                {/* New Badge */}
                                {link.new && (
                                    <span className="absolute -top-1 -right-2 bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-lg animate-pulse">
                                        New
                                    </span>
                                )}

                                {/* Icon */}
                                <link.icon
                                    size={20}
                                    className={cn(
                                        "transition-colors duration-300",
                                        isActive ? "text-white" : "text-gray-500 group-hover:text-white",
                                        link.name === "Platform" && isActive && "text-blue-400",
                                        link.name === "BrainGPT" && isActive && "text-pink-400",
                                        link.name === "Super Agents" && isActive && "text-purple-400"
                                    )}
                                />

                                {/* Label */}
                                <span className={cn(
                                    "text-[11px] font-bold uppercase tracking-wider transition-colors duration-300",
                                    isActive ? "text-white" : "text-gray-500 group-hover:text-white"
                                )}>
                                    {link.name}
                                </span>

                                {/* Active Indicator */}
                                {isActive && (
                                    <motion.div
                                        layoutId="brain-subnav-active"
                                        className="absolute -bottom-4 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
