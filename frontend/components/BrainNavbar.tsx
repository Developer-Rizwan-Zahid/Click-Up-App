import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Sparkles, BrainCircuit, Bot, Mic, FileText, Search, CreditCard, Layout } from "lucide-react";

export const BrainNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "Platform", href: "#", icon: Layout, active: true },
        { name: "BrainGPT", href: "#", icon: BrainCircuit, },
        { name: "Super Agents", href: "#", icon: Bot, active: true },
        { name: "Talk to Text", href: "#", icon: Mic },
        { name: "Notetaker", href: "#", icon: FileText },
        { name: "Enterprise Search", href: "#", icon: Search },
        { name: "Pricing", href: "#", icon: CreditCard },
    ];

    return (
        <div className={cn(
            "sticky top-16 z-40 w-full transition-all duration-300 bg-[#0a0a0a] border-b border-white/5",
            isScrolled ? "bg-black/80 backdrop-blur-md" : ""
        )}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-20 gap-8 overflow-x-auto no-scrollbar mask-gradient">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "flex flex-col items-center gap-1 group relative min-w-max py-2",
                                link.active ? "text-white" : "text-gray-400 hover:text-white transition-colors"
                            )}
                        >
                            <link.icon className={cn("w-5 h-5", link.active ? "text-white" : "text-gray-500 group-hover:text-white transition-colors")} />
                            <span className="text-[12px] font-medium flex items-center gap-1.5">
                                {link.name}
                                {link.new && (
                                    <span className="text-[9px] uppercase font-bold text-[#A855F7]">New</span>
                                )}
                            </span>
                            {link.active && (
                                <span className="absolute -bottom-0 w-1 h-1 bg-white rounded-full opacity-0" />
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
