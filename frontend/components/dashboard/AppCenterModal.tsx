"use client";

import { useState, useMemo } from "react";
import {
    Search,
    X,
    Grid,
    Star,
    Bot,
    Calendar,
    Cloud,
    MessageSquare,
    Search as SearchIcon,
    CreditCard,
    Layout,
    Mail,
    BarChart2,
    Clock,
    Box,
    FileText,
    Github,
    Slack,
    Chrome,
    Workflow,
    Shield,
    Video,
    Phone,
    Plus,
    Monitor,
    Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

interface App {
    id: string;
    name: string;
    description: string;
    icon: any;
    category: string;
    isFeatured?: boolean;
}

const APPS: App[] = [
    // Featured
    { id: "codegen", name: "Codegen", description: "Autonomous coding agent that debugs, ships features, generates PRs, and more.", icon: Bot, category: "Development", isFeatured: true },
    { id: "dropbox", name: "Dropbox", description: "Attach Dropbox files to tasks and search for Dropbox files directly within ClickUp.", icon: Cloud, category: "Cloud Storage", isFeatured: true },
    { id: "figma", name: "Figma", description: "View Figma designs, create new files, and preview them—all directly within ClickUp.", icon: Layout, category: "Development", isFeatured: true },
    { id: "github", name: "GitHub", description: "Easily view and link GitHub PRs, branches, and more to tasks in ClickUp, and quickly search for them all within ClickUp.", icon: Github, category: "Development", isFeatured: true },
    { id: "gcal", name: "Google Calendar", description: "Sync between Google Calendar and ClickUp.", icon: Calendar, category: "Calendars", isFeatured: true },
    { id: "gdrive", name: "Google Drive", description: "Easily attach, create, and search for Google Drive files directly within ClickUp.", icon: Cloud, category: "Cloud Storage", isFeatured: true },
    { id: "jira", name: "Jira", description: "Preview, create, and search Jira issues all within ClickUp.", icon: Layout, category: "Development", isFeatured: true },
    { id: "msteams", name: "Microsoft Teams", description: "Transform conversations into action by syncing ClickUp activities, creating tasks, and previewing links — all within Microsoft Teams.", icon: MessageSquare, category: "Communication", isFeatured: true },
    { id: "ocal", name: "Outlook Calendar", description: "Sync between Outlook Calendar and ClickUp.", icon: Calendar, category: "Calendars", isFeatured: true },
    { id: "salesforce", name: "Salesforce", description: "Preview Salesforce links, create new leads, and search Salesforce — all directly within ClickUp.", icon: CreditCard, category: "CRM & Support", isFeatured: true },
    { id: "slack", name: "Slack", description: "Bring ClickUp inside Slack with commands and notifications.", icon: Slack, category: "Communication", isFeatured: true },
    { id: "zoom", name: "Zoom", description: "Start Zoom calls with one click from ClickUp, automatically link them to tasks, and access recordings and transcripts seamlessly.", icon: Video, category: "Communication", isFeatured: true },

    // All Apps (subset for brevity, following user pattern)
    { id: "aikido", name: "Aikido Security", description: "Put your application security on autopilot.", icon: Shield, category: "Security" },
    { id: "applecal", name: "Apple Calendar", description: "Sync Apple Calendar with ClickUp.", icon: Calendar, category: "Calendars" },
    { id: "azuredevops", name: "Azure DevOps Sync", description: "Boost your engineering team's efficiency with our new ClickUp & Azure DevOps Integration.", icon: Workflow, category: "Development" },
    { id: "bitbucket", name: "Bitbucket", description: "Link Bitbucket commits, branches, and pull requests directly to ClickUp tasks", icon: Github, category: "Development" },
    { id: "box", name: "Box", description: "Attach Box files to tasks, comments and search for Box files directly within ClickUp.", icon: Box, category: "Cloud Storage" },
    { id: "canny", name: "Canny", description: "Collect and prioritize user feedback from Canny boards directly in ClickUp.", icon: MessageSquare, category: "CRM & Support" },
    { id: "chrome", name: "Chrome Extension", description: "Bring ClickUp with you everywhere you go in Chrome.", icon: Chrome, category: "Productivity" },
    { id: "clockify", name: "Clockify", description: "Track time on ClickUp, run reports in Clockify.", icon: Clock, category: "Time Tracking" },
    { id: "confluence", name: "Confluence", description: "Search Confluence inside ClickUp.", icon: FileText, category: "Productivity" },
    { id: "datadog", name: "Datadog", description: "Preview key details from Datadog dashboards, monitors, and SLOs directly in ClickUp.", icon: BarChart2, category: "Development" },
    { id: "discord", name: "Discord", description: "Send ClickUp notifications to Discord channels.", icon: MessageSquare, category: "Communication" },
    { id: "everhour", name: "Everhour", description: "Simplify time tracking with ClickUp and Everhour.", icon: Clock, category: "Time Tracking" },
    { id: "hubspot", name: "HubSpot", description: "Integrate HubSpot Deal Workflows to bring your Deal data into ClickUp.", icon: CreditCard, category: "CRM & Support" },
    { id: "intercom", name: "Intercom", description: "Create and link tasks right from your inbox", icon: MessageSquare, category: "CRM & Support" },
    { id: "notion", name: "Notion", description: "Preview, create, and search Notion database all within ClickUp.", icon: FileText, category: "Productivity" },
    { id: "zapier", name: "Zapier", description: "Zapier lets you connect ClickUp with thousands of the most popular apps.", icon: Zap, category: "Development" },
];

const CATEGORIES = [
    { id: "all", name: "All Apps", icon: Grid },
    { id: "featured", name: "Featured", icon: Star },
    { id: "agents", name: "Agents", icon: Bot },
    { id: "calendars", name: "Calendars", icon: Calendar },
    { id: "cloud_storage", name: "Cloud Storage", icon: Cloud },
    { id: "communication", name: "Communication", icon: MessageSquare },
    { id: "connected_search", name: "Connected Search", icon: SearchIcon },
    { id: "crm_support", name: "CRM & Support", icon: CreditCard },
    { id: "development", name: "Development", icon: Layout },
    { id: "email", name: "Email", icon: Mail },
    { id: "finance_accounting", name: "Finance & Accounting", icon: CreditCard },
    { id: "time_tracking", name: "Time Tracking", icon: Clock },
];

interface AppCenterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AppCenterModal = ({ isOpen, onClose }: AppCenterModalProps) => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredApps = useMemo(() => {
        let apps = APPS;

        if (activeCategory === "featured") {
            apps = apps.filter(app => app.isFeatured);
        } else if (activeCategory !== "all") {
            const categoryName = CATEGORIES.find(c => c.id === activeCategory)?.name;
            apps = apps.filter(app => app.category === categoryName);
        }

        if (searchQuery) {
            apps = apps.filter(app =>
                app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                app.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return apps;
    }, [activeCategory, searchQuery]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white w-[90%] max-w-[1200px] h-[85vh] rounded-[32px] shadow-2xl overflow-hidden flex flex-col scale-100 animate-in zoom-in-95 duration-200">

                {/* Top Header */}
                <div className="h-16 border-b border-gray-100 flex items-center justify-between px-6 shrink-0 bg-white z-10">
                    <div className="flex items-center gap-4 flex-1">
                        <div className="flex items-center gap-2 text-gray-500 font-medium text-sm">
                            <Grid size={18} />
                            <span>App Center</span>
                            <span className="text-gray-300">/</span>
                            <span className="text-gray-900">{CATEGORIES.find(c => c.id === activeCategory)?.name}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 flex-2 max-w-md w-full">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-[#F3F3F5] border-none rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500/20 transition-all"
                            />
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>

                <div className="flex-1 flex overflow-hidden">
                    {/* Sidebar */}
                    <aside className="w-[240px] border-r border-gray-100 flex flex-col bg-white overflow-y-auto pt-6 pb-6 scrollbar-hide shrink-0">
                        <div className="px-6 mb-4">
                            <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Browse</h3>
                        </div>
                        <nav className="flex flex-col gap-0.5 px-3">
                            {CATEGORIES.map(category => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={cn(
                                        "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left",
                                        activeCategory === category.id
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                    )}
                                >
                                    <category.icon size={18} className={cn(activeCategory === category.id ? "text-blue-600" : "text-gray-400")} />
                                    {category.name}
                                </button>
                            ))}
                        </nav>

                        <div className="mt-auto px-6 pt-6 border-t border-gray-100">
                            <button className="flex items-center gap-3 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors">
                                <Plus size={18} className="text-gray-400" />
                                Suggest an app
                            </button>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 bg-white overflow-y-auto p-8 lg:p-12 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                        <div className="max-w-4xl mx-auto">
                            <div className="mb-10">
                                <h2 className="text-3xl font-extrabold text-[#292D34] mb-2">
                                    {activeCategory === "all" ? "All Apps" : CATEGORIES.find(c => c.id === activeCategory)?.name}
                                </h2>
                                <p className="text-gray-500 text-lg">
                                    {activeCategory === "featured"
                                        ? "Some of our favorite and most popular integrations."
                                        : `Find the best ${CATEGORIES.find(c => c.id === activeCategory)?.name.toLowerCase()} for your workflow.`}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredApps.map(app => (
                                    <div
                                        key={app.id}
                                        className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-gray-200 transition-all duration-300 cursor-pointer flex flex-col"
                                    >
                                        <div className="mb-4 flex items-start justify-between">
                                            <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all">
                                                <app.icon className="text-gray-700 group-hover:text-blue-600 transition-colors" size={24} />
                                            </div>
                                            {app.isFeatured && (
                                                <div className="bg-yellow-100 text-yellow-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">
                                                    Featured
                                                </div>
                                            )}
                                        </div>
                                        <h4 className="text-lg font-bold text-[#292D34] mb-2 group-hover:text-blue-600 transition-colors">
                                            {app.name}
                                        </h4>
                                        <p className="text-sm text-gray-500 leading-relaxed flex-1">
                                            {app.description}
                                        </p>
                                    </div>
                                ))}

                                {filteredApps.length === 0 && (
                                    <div className="col-span-full py-20 flex flex-col items-center justify-center text-center opacity-50">
                                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                                            <SearchIcon size={40} className="text-gray-300" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">No apps found</h3>
                                        <p className="text-gray-500">Try searching for something else or browse categories.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};
