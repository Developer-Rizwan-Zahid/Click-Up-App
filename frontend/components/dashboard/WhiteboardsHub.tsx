"use client";

import {
    Plus,
    Monitor,
    Users,
    Star,
    ChevronDown,
    Search,
    MoreHorizontal,
    Share2,
    Settings,
    Maximize2,
    Grid,
    Layout,
    Network,
    Target,
    Map,
    GitBranch,
    SearchCode,
    Cpu
} from "lucide-react";
import { cn } from "@/lib/utils";

const TEMPLATES = [
    {
        id: "org-chart",
        title: "Organizational Chart",
        description: "Visualize your team structure",
        icon: <div className="w-12 h-12 rounded-[14px] bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100">
            <Users size={22} strokeWidth={2.5} />
        </div>
    },
    {
        id: "action-plan",
        title: "Action Plan",
        description: "Turn goals into actionable steps",
        icon: <div className="w-12 h-12 rounded-[14px] bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100">
            <Monitor size={22} strokeWidth={2.5} />
        </div>
    },
    {
        id: "customer-journey",
        title: "Customer Journey Map",
        description: "Optimize every customer touchpoint",
        icon: <div className="w-12 h-12 rounded-[14px] bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
            <Network size={22} strokeWidth={2.5} />
        </div>
    },
    {
        id: "flow-chart",
        title: "Flow Chart",
        description: "Structure and communicate processes and workflows",
        icon: <div className="w-12 h-12 rounded-[14px] bg-pink-50 flex items-center justify-center text-pink-600 border border-pink-100">
            <Layout size={22} strokeWidth={2.5} />
        </div>
    },
    {
        id: "root-cause",
        title: "Root Cause Analysis",
        description: "Analyze issues using the Ishikawa Fishbone diagram",
        icon: <div className="w-12 h-12 rounded-[14px] bg-orange-50 flex items-center justify-center text-orange-600 border border-orange-100">
            <Settings size={22} strokeWidth={2.5} />
        </div>
    },
];

export const WhiteboardsHub = () => {
    return (
        <div className="flex-1 flex h-full overflow-hidden bg-white">
            {/* Inner Left Sidebar */}
            <aside className="w-[280px] border-r border-[#F0F1F3] flex flex-col shrink-0 bg-[#FAFBFC]">
                <div className="p-6 pb-2 flex items-center justify-between">
                    <h2 className="text-[20px] font-extrabold text-[#292D34] tracking-tight">Whiteboards</h2>
                    <button className="w-7 h-7 flex items-center justify-center hover:bg-gray-200 rounded-lg bg-white border border-gray-200 shadow-sm transition-all text-gray-600">
                        <Plus size={16} strokeWidth={2.5} />
                    </button>
                </div>

                <div className="px-3 mt-4 space-y-1">
                    <button className="w-full flex items-center gap-3 px-3 py-2.5 bg-[#EEEFF2] text-[#111214] rounded-xl text-sm font-bold shadow-sm">
                        <Monitor size={18} className="text-[#5F6368]" strokeWidth={2.5} />
                        All Whiteboards
                    </button>
                    <button className="w-full flex items-center gap-3 px-3 py-2.5 text-[#5F6368] hover:bg-gray-200/50 rounded-xl text-sm font-bold transition-all group">
                        <div className="w-5 h-5 rounded-full bg-[#B2B5BD] flex items-center justify-center text-[10px] text-white font-extrabold group-hover:bg-[#292D34] transition-colors">R</div>
                        My Whiteboards
                    </button>
                </div>

                <div className="mt-10 px-6">
                    <h3 className="text-[10px] font-extrabold text-[#A8ABB3] uppercase tracking-[0.1em] mb-4">Favorites</h3>
                    <div className="bg-white border border-dashed border-[#E0E2E7] rounded-[20px] p-8 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-blue-300 transition-colors">
                        <div className="mb-3">
                            <Star size={24} className="text-[#D3D5D9] group-hover:text-yellow-400 transition-colors" />
                        </div>
                        <p className="text-[12px] text-[#A8ABB3] leading-relaxed font-medium">Star a Whiteboard to see it here</p>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col overflow-y-auto bg-white">
                <div className="max-w-[1200px] mx-auto w-full px-8 py-20">
                    <div className="text-center mb-16">
                        <h1 className="text-[44px] font-[900] text-[#111214] mb-4 tracking-[-0.04em]">Choose a Whiteboard template</h1>
                        <p className="text-[#5F6368] text-[17px] max-w-2xl mx-auto leading-[1.6] font-medium opacity-90">
                            Create Whiteboards to map out project plans, brainstorm feature concepts, or help remote co-workers work better together!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TEMPLATES.map(template => (
                            <div key={template.id} className="bg-white border border-[#F0F1F3] rounded-[32px] p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group cursor-pointer flex flex-col items-center text-center">
                                <div className="mb-8 transform transition-transform group-hover:scale-110 duration-500">
                                    {template.icon}
                                </div>
                                <h4 className="text-[20px] font-extrabold text-[#111214] mb-3 group-hover:text-blue-600 transition-colors">
                                    {template.title}
                                </h4>
                                <p className="text-[15px] text-[#5F6368] leading-[1.5] font-medium opacity-80">
                                    {template.description}
                                </p>
                            </div>
                        ))}

                        <div className="bg-white border-2 border-dashed border-[#E0E2E7] rounded-[32px] p-10 hover:border-blue-300 hover:bg-blue-50/20 transition-all duration-300 group cursor-pointer flex flex-col items-center justify-center text-center min-h-[300px]">
                            <div className="w-14 h-14 rounded-full border-2 border-[#E0E2E7] flex items-center justify-center text-[#A8ABB3] group-hover:border-blue-400 group-hover:text-blue-500 mb-6 transition-all duration-300 group-hover:rotate-90">
                                <Plus size={28} strokeWidth={2.5} />
                            </div>
                            <h4 className="text-[20px] font-extrabold text-[#111214] mb-1 group-hover:text-blue-600 transition-colors">
                                Start from scratch
                            </h4>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
