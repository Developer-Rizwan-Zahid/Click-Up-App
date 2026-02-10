"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Sparkles, Bot, BrainCircuit, Mic, FileText, Search, Layout, CheckSquare, Calendar, PieChart, Users, Zap, Globe, Shield, BookOpen, GraduationCap, LifeBuoy, Terminal, MessageSquare, Video, Inbox, Film, LayoutDashboard, Columns, GanttChart, RefreshCw, Book, ClipboardList, CalendarClock, Timer, LayoutGrid, Puzzle, Download, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const { openModal } = useModal();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Brain AI", href: "/brain", hasDropdown: true },
        { name: "Product", href: "#", hasDropdown: true },
        { name: "Solutions", href: "#", hasDropdown: true },
        { name: "Resources", href: "#", hasDropdown: true },
        { name: "Pricing", href: "/pricing" },
        { name: "Enterprise", href: "/plans/enterprise" },
    ];

    // Data for Dropdowns
    const dropdownContent = {
        "Brain AI": {
            cols: [
                {
                    title: "AI Platform",
                    items: [
                        { title: "Platform Overview", desc: "The converged AI workspace", icon: Sparkles, color: "text-blue-500", href: "/brain" },
                        { title: "Super Agents", desc: "Delegate your work entirely", icon: Bot, color: "text-purple-500", new: true, href: "/brain/agents" },
                        { title: "BrainGPT", desc: "One AI app to rule them all", icon: BrainCircuit, color: "text-pink-500", href: "/brain/gpt" },
                    ]
                },
                {
                    title: "AI Features",
                    items: [
                        { title: "Talk to Text", desc: "Write 4x faster than you type", icon: Mic, href: "/brain/talk-to-text" },
                        { title: "Notetaker", desc: "Intelligent meeting notes and summaries", icon: FileText, href: "/brain/ai-notetaker" },
                        { title: "Enterprise Search", desc: "Find anything across your workspace", icon: Search, href: "/brain/enterprise-search" },
                    ]
                },
                {
                    title: "AI Resources",
                    simple: true,
                    items: [
                        { title: "Pricing", href: "/brain/pricing" },
                        { title: "State of AI", href: "/research/ai-workforce" },
                    ]
                }
            ]
        },
        "Product": {
            columns: 5,
            cols: [
                {
                    title: "PROJECTS",
                    items: [
                        { title: "Tasks", icon: CheckSquare, color: "text-green-500", href: "/features/tasks" },
                        { title: "Dashboards", icon: LayoutDashboard, color: "text-pink-500", href: "/features/dashboards" },
                        { title: "Board view", icon: Columns, color: "text-blue-500", href: "/features/kanban-board" },
                        { title: "Gantt", icon: GanttChart, color: "text-orange-500", href: "/features/gantt-chart-view" },
                    ]
                },
                {
                    title: "COMMUNICATION",
                    items: [
                        { title: "Chat", icon: MessageSquare, color: "text-purple-500", href: "/features/chat" },
                        { title: "SyncUp", icon: RefreshCw, color: "text-green-500", href: "/features/sync-up" },
                        { title: "Inbox", icon: Inbox, color: "text-orange-500", href: "/features/inbox" },
                        { title: "Clips", icon: Film, color: "text-red-500", href: "/features/clips" },
                    ]
                },
                {
                    title: "KNOWLEDGE",
                    items: [
                        { title: "Docs", icon: FileText, color: "text-blue-500", href: "/features/docs" },
                        { title: "Whiteboards", icon: Layout, color: "text-yellow-500", href: "/features/whiteboards" },
                        { title: "Wiki", icon: Book, color: "text-purple-500", href: "/features/knowledge-management" },
                        { title: "Forms", icon: ClipboardList, color: "text-purple-600", href: "/features/forms" },
                    ]
                },
                {
                    title: "TIME",
                    items: [
                        { title: "Calendar", icon: Calendar, color: "text-pink-500", href: "/features/calendar" },
                        { title: "Scheduling", icon: CalendarClock, color: "text-orange-500", href: "/features/time-estimates" },
                        { title: "Automations", icon: Zap, color: "text-blue-600", href: "/features/automations" },
                        { title: "Time tracking", icon: Timer, color: "text-green-500", href: "/features/project-time-tracking" },
                    ]
                },
                {
                    title: "MORE",
                    simpleIcons: true,
                    items: [
                        { title: "All features", icon: LayoutGrid, color: "text-purple-500", href: "/features" },
                        { title: "Integrations", icon: Puzzle, color: "text-blue-400", href: "/integrations" },
                        { title: "Downloads", icon: Download, color: "text-green-500", href: "/download" },
                        { title: "Watch demo", icon: PlayCircle, color: "text-gray-400", href: "/on-demand-demo" },
                    ]
                }
            ]
        },
        "Solutions": {
            cols: [
                {
                    title: "TEAMS",
                    simple: true,
                    items: [
                        { title: "Project management", href: "/teams/project-management" },
                        { title: "Product development", href: "/teams/software" },
                        { title: "Operations", href: "/teams/operations" },
                        { title: "IT", href: "/teams/it-pmo" },
                        { title: "Marketing", href: "/teams/marketing" },
                        { title: "Human Resources", href: "/teams/human-resources" },
                        { title: "Sales", href: "/teams/sales" },
                    ]
                },
                {
                    title: "COMPANIES",
                    simple: true,
                    items: [
                        { title: "Enterprise", href: "/plans/enterprise" },
                        { title: "Startup", href: "/teams/startup" },
                        { title: "Non-profit", href: "/teams/non-profit" },
                        { title: "Education", href: "/teams/education" },
                        { title: "Agency", href: "/teams/creative-agencies" },
                    ]
                },
                {
                    title: "TEMPLATES",
                    items: [
                        { title: "Project Management", desc: "Manage roadmaps, backlogs, bugs, agile dev, and documentation.", icon: GanttChart, color: "text-blue-500", href: "/templates/pmo-project-management" },
                        { title: "Sales/CRM", desc: "Manage leads, deals, and contacts.", icon: PieChart, color: "text-orange-500", href: "/templates/sales-and-crm" },
                        { title: "Marketing", desc: "Plan campaigns, organize assets, and create wikis.", icon: Layout, color: "text-pink-500", href: "/templates/marketing" },
                        { title: "Browse all templates", icon: LayoutGrid, simple: true, href: "/templates" }
                    ]
                }
            ]
        },
        "Resources": {
            cols: [
                {
                    title: "LEARN",
                    simple: true,
                    items: [
                        { title: "University", href: "/university" },
                        { title: "Demos", href: "/on-demand-demo" },
                        { title: "Video tutorials", href: "/videos" },
                        { title: "Webinars", href: "/webinars" },
                    ]
                },
                {
                    title: "DISCOVER",
                    simple: true,
                    items: [
                        { title: "Blog", href: "/blog" },
                        { title: "Customer stories", href: "/customers" },
                        { title: "Guides", href: "/teams/guides" },
                        { title: "Kill Work Sprawl", href: "/sprawl" },
                    ]
                },
                {
                    title: "SUPPORT",
                    simple: true,
                    items: [
                        { title: "24/7 Support", href: "/help-center" },
                        { title: "Professional services", href: "/professional-services" },
                        { title: "Premium support", href: "/premium-support" },
                        { title: "Partner services", href: "/partners" },
                    ]
                },
                {
                    title: "CUSTOMER STORIES",
                    special: "story",
                    items: [
                        {
                            image: "/images/logos/cn-logo.png",
                            quote: "Cartoon Network doubles output in 50% less time with ClickUp",
                            href: "/customers/cartoon-network"
                        }
                    ]
                }
            ]
        }
    };

    const activeContent = activeDropdown ? (dropdownContent as any)[activeDropdown] : null;

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled || activeDropdown
                    ? "bg-white/70 backdrop-blur-xl border-b border-gray-100 shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)]"
                    : "bg-transparent"
            )}
            onMouseLeave={() => setActiveDropdown(null)}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center gap-2">
                            {/* Specialized ClickUp-like Logo */}
                            <div className="relative flex items-center justify-center">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 10C4 10 4 17 12 17C20 17 20 10 20 10" stroke="#7B68EE" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 8L12 3L17 8" stroke="#E348B4" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">ClickUp</span>
                        </Link>

                        <nav className="hidden xl:flex items-center gap-6 h-16">
                            {navLinks.map((link) => (
                                <div
                                    key={link.name}
                                    className="h-full flex items-center"
                                    onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                                >
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "group flex items-center gap-1 text-[14px] font-medium transition-colors p-2 rounded-md",
                                            activeDropdown === link.name
                                                ? "bg-gray-100 text-black dark:bg-gray-800 dark:text-white"
                                                : "text-gray-600 hover:text-black dark:text-white dark:hover:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                                        )}
                                    >
                                        {link.name}
                                        {link.hasDropdown && (
                                            <ChevronDown
                                                size={14}
                                                className={cn(
                                                    "text-gray-400 group-hover:text-gray-600 transition-transform duration-200",
                                                    activeDropdown === link.name ? "rotate-180" : ""
                                                )}
                                            />
                                        )}
                                    </Link>
                                </div>
                            ))}
                        </nav>
                    </div>

                    <div className="hidden md:flex items-center gap-3">
                        <button onClick={openModal} className="hidden lg:block text-sm font-semibold text-gray-600 hover:text-black dark:text-white dark:hover:text-gray-300 mr-2">
                            Contact Sales
                        </button>
                        {/* Login: Black bg (transparent), White text in Dark Mode */}
                        <Link href="/login">
                            <Button variant="ghost" size="sm" className="bg-gray-50 hover:bg-white text-gray-700 font-bold h-9 px-5 rounded-lg border border-transparent hover:border-gray-200 transition-all shadow-sm">
                                Login
                            </Button>
                        </Link>
                        {/* Sign Up: White bg, Black text in Dark Mode */}
                        <Link href="/signup">
                            <Button size="sm" className="bg-[#1f2127] hover:bg-black text-white font-bold h-9 px-5 rounded-lg transition-all shadow-md shadow-black/5 active:scale-95">
                                Sign Up
                            </Button>
                        </Link>
                    </div>

                    <button
                        className="xl:hidden p-2 text-gray-600 dark:text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Desktop Dropdown Mega Menu */}
            <AnimatePresence>
                {activeContent && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-xl dark:bg-black/95 dark:border-gray-800"
                        onMouseEnter={() => setActiveDropdown(activeDropdown)}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                            <div className={`grid gap-8 ${activeContent.columns === 5 ? 'grid-cols-5' : 'grid-cols-12'}`}>
                                {activeContent.cols.map((col: any, idx: number) => {
                                    // Calculate column span dynamically
                                    const colSpanClass = activeContent.columns === 5
                                        ? "col-span-1"
                                        : activeContent.cols.length === 4
                                            ? "col-span-3"
                                            : "col-span-4";

                                    return (
                                        <div key={col.title} className={cn(
                                            colSpanClass,
                                            idx > 0 && activeContent.columns !== 5 ? "border-l border-gray-100 pl-8 dark:border-gray-800" : ""
                                        )}>
                                            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-6">{col.title}</h3>

                                            {/* Special Story Card */}
                                            {col.special === "story" ? (
                                                <div className="flex flex-col gap-4">
                                                    {col.items.map((item: any) => (
                                                        <Link href={item.href} key={item.quote} className="group block">
                                                            <div className="mb-4">
                                                                {/* Placeholder for CN Logo if image is missing/not real */}
                                                                <div className="h-8 w-8 bg-black text-white flex items-center justify-center font-bold text-xs rounded mb-2 dark:bg-white dark:text-black">
                                                                    CN
                                                                </div>

                                                            </div>
                                                            <p className="text-lg font-medium text-slate-900 dark:text-white leading-snug mb-3 group-hover:text-purple-600 transition-colors">
                                                                "{item.quote}"
                                                            </p>
                                                            <div className="flex items-center text-purple-600 font-bold text-sm">
                                                                Read the story <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            ) : (
                                                /* Regular List Items */
                                                <div className="space-y-4">
                                                    {col.items.map((item: any) => (
                                                        <Link href={item.href || "#"} key={item.title} className="group flex items-start gap-3">
                                                            {/* Icons logic for Product vs others */}
                                                            {item.icon && !col.simple && !col.simpleIcons && (
                                                                <div className={cn(
                                                                    "p-1.5 rounded-lg transition-colors",
                                                                    activeContent.columns === 5 ? "bg-transparent p-0" : "bg-gray-50 group-hover:bg-gray-100 dark:bg-gray-900 dark:group-hover:bg-gray-800"
                                                                )}>
                                                                    <item.icon className={cn(
                                                                        "w-5 h-5",
                                                                        item.color,
                                                                        activeContent.columns === 5 ? "w-4 h-4" : ""
                                                                    )} />
                                                                </div>
                                                            )}

                                                            {/* Simple lists logic */}
                                                            {col.simple && !item.icon && (
                                                                <span className="block text-sm font-medium text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors">
                                                                    {item.title}
                                                                </span>
                                                            )}

                                                            {/* Product Simple Items with Icon */}
                                                            {col.simpleIcons && (
                                                                <div className="flex items-center gap-2">
                                                                    {item.icon && <item.icon className={cn("w-4 h-4", item.color)} />}
                                                                    <span className="block text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                                                                        {item.title}
                                                                    </span>
                                                                </div>
                                                            )}

                                                            {/* Default Content */}
                                                            {!col.simple && !col.simpleIcons && (
                                                                <div>
                                                                    <div className="flex items-center gap-2">
                                                                        <h4 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                                                                            {item.title}
                                                                        </h4>
                                                                        {item.new && (
                                                                            <span className="px-1.5 py-0.5 text-[10px] font-bold text-purple-600 bg-purple-100 rounded uppercase tracking-wider dark:bg-purple-900/30 dark:text-purple-400">
                                                                                New
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                    {item.desc && (
                                                                        <p className="text-sm text-gray-500 mt-0.5 line-clamp-1 dark:text-gray-400">
                                                                            {item.desc}
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            )}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="xl:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 p-4 dark:bg-black dark:border-gray-800 shadow-xl h-[calc(100vh-4rem)] overflow-y-auto">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="flex items-center justify-between text-base font-medium text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white py-2 border-b border-gray-50 dark:border-gray-800"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                                {link.hasDropdown && <ChevronDown size={16} />}
                            </Link>
                        ))}
                        <button onClick={openModal} className="font-semibold text-center py-2 text-gray-600 dark:text-gray-300">Contact Sales</button>
                        <div className="flex flex-col gap-3 mt-2">
                            <Button variant="ghost" className="w-full justify-center bg-gray-100 font-bold">
                                Login
                            </Button>
                            <Button className="w-full bg-[#7B68EE] hover:bg-[#6853E6] text-white font-bold">Sign Up</Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};
