"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Globe, Server, Check, Search, FileText, Mail, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export const EnterpriseGrade = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Security Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-[#292D34] mb-2 tracking-tight">
                            Enterprise-grade everything
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base max-w-xl">
                            More secure than using ChatGPT, Gemini, and others directly. <sup className="text-xs">1</sup>
                        </p>
                        <div className="flex gap-6 mt-4 text-xs font-bold text-gray-400">
                            <div className="flex items-center gap-1"><Server size={14} /> 99.99% UPTIME</div>
                            <div className="flex items-center gap-1"><ShieldCheck size={14} /> 24/7 SUPPORT</div>
                        </div>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        <SecurityBadge label="SOC 2 TYPE II" icon={ShieldCheck} />
                        <SecurityBadge label="ISO 27001" icon={Lock} />
                        <SecurityBadge label="GDPR" icon={Globe} />
                        <SecurityBadge label="HIPAA" icon={ShieldCheck} />
                    </div>
                </div>

                {/* CTA Banner */}
                <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#5D5FEF] via-[#A855F7] to-[#FF4F4F] pt-16 pb-0 md:px-16 text-white text-center shadow-2xl isolat group">
                    <div className="relative z-20 max-w-4xl mx-auto mb-12">
                        <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight tracking-tight">
                            Time is priceless. ClickUp is free.
                        </h2>

                        <button className="bg-white text-black text-lg font-bold px-10 py-4 rounded-full hover:scale-105 transition-transform shadow-lg mb-4">
                            Save 2 days per week
                        </button>
                    </div>

                    {/* Desktop App Mockup */}
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative mx-auto max-w-5xl rounded-t-2xl bg-white/90 backdrop-blur-sm shadow-2xl overflow-hidden border border-white/40"
                        style={{ height: "500px" }} // Explicit height for container
                    >
                        {/* Window Header */}
                        <div className="h-10 bg-[#FAFAFA] border-b border-gray-200 flex items-center justify-between px-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                            </div>
                            <div className="flex-1 text-center">
                                <div className="bg-gray-100/50 inline-flex items-center gap-2 px-32 py-1.5 rounded-md text-xs text-gray-400">
                                    <Search size={12} /> Search or run a command
                                </div>
                            </div>
                            <div className="flex gap-2 opacity-30">
                                <div className="w-4 h-4 bg-gray-400 rounded-full" />
                            </div>
                        </div>

                        <div className="flex h-full text-left">
                            {/* Sidebar */}
                            <div className="w-64 bg-[#F7F7F7] border-r border-gray-200 p-4 hidden md:block">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white text-[10px] font-bold">M</div>
                                    <span className="text-sm font-bold text-gray-700">Mango Tech</span>
                                    <Check size={12} className="ml-auto text-gray-400" />
                                </div>

                                <div className="space-y-1">
                                    <SidebarItem active icon={FileText} label="Home" badge="4" />
                                    <SidebarItem icon={Mail} label="Inbox" badge="3" />
                                    <div className="my-4 pt-4 border-t border-gray-200 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Spaces</div>
                                    <SidebarItem icon={Globe} label="Everything" />
                                    <SidebarItem icon={ShieldCheck} label="Marketing" />
                                    <SidebarItem icon={Users} label="Product" />
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="flex-1 bg-white p-6 relative">
                                {/* Sub-header */}
                                <div className="flex items-center gap-4 mb-4 border-b border-gray-100 pb-4">
                                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                        <div className="w-5 h-5 bg-red-400 rounded text-white flex items-center justify-center text-xs">M</div>
                                        Marketing
                                    </h3>
                                    <div className="flex gap-2 ml-auto">
                                        <span className="text-sm font-bold border-b-2 border-black pb-4 -mb-4 px-2">Open Tasks</span>
                                        <span className="text-sm font-medium text-gray-400 px-2 cursor-pointer">Design Needs</span>
                                        <span className="text-sm font-medium text-gray-400 px-2 cursor-pointer">Timeline</span>
                                    </div>
                                </div>

                                {/* Task List */}
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">DONE 5</span>
                                    </div>

                                    <TaskRow
                                        title="Social campaign"
                                        tag="Design"
                                        tagColor="bg-cyan-100 text-cyan-600"
                                    />
                                    <TaskRow
                                        title="Website assets"
                                        count="2"
                                        avatars={["https://i.pravatar.cc/150?u=1", "https://i.pravatar.cc/150?u=2"]}
                                        tag="Product"
                                        tagColor="bg-orange-100 text-orange-600"
                                        active
                                    />
                                    <TaskRow title="Landing page" />
                                    <TaskRow title="About page" tag="Engineering" tagColor="bg-purple-100 text-purple-600" />
                                </div>

                                {/* Gradient Fade Overlay for bottom of window */}
                                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Mobile App Mockup (Overlay) */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="absolute bottom-[-50px] md:bottom-[-20px] right-4 md:right-20 w-[280px] h-[550px] bg-[#121212] rounded-[3rem] border-[8px] border-[#333] shadow-2xl overflow-hidden hidden lg:block"
                    >
                        {/* Mobile Status Bar */}
                        <div className="px-6 py-4 flex justify-between items-center text-white text-xs font-bold">
                            <span>9:41</span>
                            <div className="flex gap-1">
                                <div className="w-4 h-2.5 border border-white rounded-[1px]" />
                            </div>
                        </div>

                        {/* Mobile App Content */}
                        <div className="p-4 space-y-6">
                            {/* Header */}
                            <div className="flex items-center gap-2 text-white mb-6">
                                <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-[10px] font-bold">M</div>
                                <span className="font-bold">Mango Tech</span>
                                <Check size={14} className="ml-auto text-gray-500" />
                            </div>

                            {/* Search Bar */}
                            <div className="bg-[#222] rounded-xl px-4 py-2 text-sm text-gray-500 flex items-center gap-2">
                                <Search size={14} /> Search
                            </div>

                            {/* Cards */}
                            <div className="grid grid-cols-2 gap-3">
                                <MobileCard color="bg-[#E91E63]" label="Replies" count="12 new" icon={Mail} />
                                <MobileCard color="bg-[#5D5FEF]" label="Today" count="3 items" icon={Check} />
                                <MobileCard color="bg-[#333]" label="Assigned" count="3 comments" icon={Users} />
                            </div>

                            {/* Recents List */}
                            <div className="space-y-4 pt-2">
                                <div className="text-gray-500 text-xs font-bold">Recents</div>
                                <div className="flex items-center gap-3 text-white text-sm">
                                    <div className="w-2 h-2 rounded-full border border-purple-400" />
                                    <span className="line-clamp-1">Social Media Content Calendar</span>
                                </div>
                                <div className="flex items-center gap-3 text-white text-sm">
                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                    <span className="line-clamp-1">Instructional Resources</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="text-center mt-8 text-xs text-gray-400">
                    1. Our agreements ensure zero data training & retention on all third-party model providers
                </div>

            </div>
        </section>
    );
};

function SecurityBadge({ label, icon: Icon }: any) {
    return (
        <div className="flex flex-col items-center gap-2 group cursor-pointer">
            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-gray-400 transition-colors bg-white">
                <Icon size={20} className="text-gray-600" />
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{label}</span>
        </div>
    )
}

function SidebarItem({ icon: Icon, label, badge, active }: any) {
    return (
        <div className={cn("flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors text-sm font-medium", active ? "bg-white shadow-sm text-black" : "text-gray-500 hover:bg-gray-200")}>
            <Icon size={16} className={active ? "text-pink-500" : "opacity-70"} />
            <span>{label}</span>
            {badge && <span className={cn("ml-auto text-xs font-bold px-1.5 py-0.5 rounded text-white", active ? "bg-red-500" : "bg-gray-400")}>{badge}</span>}
        </div>
    )
}

function TaskRow({ title, count, avatars, tag, tagColor, active }: any) {
    return (
        <div className={cn("flex items-center gap-4 p-2 rounded-lg group hover:bg-gray-50", active && "bg-blue-50/50")}>
            <div className="w-4 h-4 rounded-full border-2 border-green-500 flex items-center justify-center">
                <Check size={10} className="text-green-500 opacity-0 group-hover:opacity-100" />
            </div>
            <span className="text-sm text-gray-700 font-medium">{title}</span>
            {count && <div className="text-xs text-gray-400 flex items-center gap-1"><span className="font-mono">foo</span> {count}</div>} {/* Simplified count */}

            <div className="ml-auto flex items-center gap-4">
                {avatars && (
                    <div className="flex -space-x-2">
                        {avatars.map((a: string, i: number) => (
                            <img key={i} src={a} className="w-5 h-5 rounded-full border border-white bg-gray-200" alt="" />
                        ))}
                    </div>
                )}
                {tag && <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded", tagColor)}>{tag}</span>}
            </div>
        </div>
    )
}

function MobileCard({ color, label, count, icon: Icon }: any) {
    return (
        <div className={cn("rounded-xl p-3 flex flex-col justify-between h-24", color)}>
            <Icon className="text-white/80" size={16} />
            <div>
                <div className="text-white font-bold text-sm">{label}</div>
                <div className="text-white/70 text-xs">{count}</div>
            </div>
        </div>
    )
}
