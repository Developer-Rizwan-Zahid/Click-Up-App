"use client";

import { motion } from "framer-motion";
import {
    Search, CheckSquare, GitBranch, Link, FileText, Calendar,
    PenTool, Folder, PieChart, Flag, Trello, FormInput,
    Settings, Clock, MessageCircle, Video, Mail,
    Layout, Users, Hash, LayoutGrid, CheckCircle2,
    List, Kanban, CreditCard, BarChart2, Map, Shield,
    Zap, Database, Share2, Printer, Lock, Globe
} from "lucide-react";
import { cn } from "@/lib/utils";

export const ConvergedPlatform = () => {
    return (
        <section className="py-24 bg-[#FAFAFA] border-t border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-6xl font-black text-[#292D34] mb-6 tracking-tight leading-tight"
                    >
                        Everything you need in one converged AI platform
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-500 font-medium"
                    >
                        100+ features to maximize human and AI productivity.
                    </motion.p>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 auto-rows-[140px]">
                    {/* Row 1 */}
                    <FeatureCard icon={Search} label="Connected Search" />
                    <FeatureCard icon={CheckSquare} label="Tasks" />
                    <FeatureCard icon={GitBranch} label="Mind Maps" />
                    <FeatureCard icon={Link} label="Wikis" active />
                    <FeatureCard icon={FileText} label="AI Notetaker" />
                    <FeatureCard icon={Calendar} label="Calendar" />
                    <FeatureCard icon={PenTool} label="Proofing" />
                    <FeatureCard icon={Folder} label="Portfolios" />

                    {/* Row 2 */}
                    <FeatureCard icon={PieChart} label="Reporting" />
                    <FeatureCard icon={Flag} label="Goals" />

                    {/* HERO: Projects (2x2) */}
                    <div className="col-span-2 row-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer overflow-hidden group relative">
                        <div className="absolute top-4 right-4 flex gap-1">
                            <div className="bg-yellow-100 text-yellow-700 text-[10px] px-2 py-0.5 rounded-full font-bold">Needs Updates</div>
                            <div className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold">Closed</div>
                        </div>
                        <div className="mt-8 space-y-2 opacity-80 group-hover:scale-105 transition-transform duration-500">
                            {/* Mini Kanban Visual */}
                            <div className="flex gap-2">
                                <div className="w-1/2 bg-gray-50 rounded-lg p-2 border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 mb-2" />
                                    <div className="h-2 w-16 bg-gray-200 rounded mb-1" />
                                    <div className="h-2 w-10 bg-gray-100 rounded" />
                                </div>
                                <div className="w-1/2 bg-gray-50 rounded-lg p-2 border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 mb-2" />
                                    <div className="h-2 w-16 bg-gray-200 rounded mb-1" />
                                    <div className="h-2 w-10 bg-gray-100 rounded" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-50 z-10 bg-white/80 backdrop-blur-sm -mx-6 -mb-6 p-6">
                            <div className="w-8 h-8 rounded-lg bg-[#7B68EE] flex items-center justify-center text-white font-bold">P</div>
                            <span className="text-xl font-bold text-[#292D34]">Projects</span>
                        </div>
                    </div>

                    {/* HERO: Docs (2x2) */}
                    <div className="col-span-2 row-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer overflow-hidden group">
                        <div className="mt-4 opacity-80 group-hover:scale-105 transition-transform duration-500">
                            {/* Mini Doc Visual */}
                            <div className="bg-white border border-gray-100 shadow-sm rounded-lg p-3 rotate-2 mx-auto w-3/4">
                                <div className="h-2 w-1/3 bg-blue-100 rounded mb-2" />
                                <div className="h-1.5 w-full bg-gray-100 rounded mb-1" />
                                <div className="h-1.5 w-full bg-gray-100 rounded mb-1" />
                                <div className="h-1.5 w-2/3 bg-gray-100 rounded" />
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mt-auto pt-4 border-t border-gray-50 z-10 bg-white/80 backdrop-blur-sm -mx-6 -mb-6 p-6">
                            <div className="w-8 h-8 rounded-lg bg-[#00BFFF] flex items-center justify-center text-white font-bold">D</div>
                            <span className="text-xl font-bold text-[#292D34]">Docs</span>
                        </div>
                    </div>

                    <FeatureCard icon={Trello} label="Sprints" />
                    <FeatureCard icon={FormInput} label="Custom Status" />
                    <FeatureCard icon={Settings} label="Automations" />
                    <FeatureCard icon={Layout} label="Custom Fields" />

                    {/* Row 3 */}
                    <FeatureCard icon={Flag} label="Milestones" />
                    <FeatureCard icon={List} label="Forms" />
                    {/* Projects & Docs take up space here via row-span-2 */}
                    <FeatureCard icon={LayoutGrid} label="Mind Maps" /> {/* Duplicate filler or new */}
                    <FeatureCard icon={Users} label="Priorities" />

                    {/* Row 4 (Brain HERO) */}
                    <FeatureCard icon={Clock} label="Time Estimates" />
                    <div className="col-span-2 row-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer overflow-hidden group">
                        <div className="mt-6 opacity-80 group-hover:scale-105 transition-transform duration-500 flex flex-col gap-2">
                            <div className="bg-purple-50 p-2 rounded-lg rounded-tl-none self-start text-[10px] text-purple-700 font-medium">What did I miss last week?</div>
                            <div className="bg-gray-50 p-2 rounded-lg rounded-tr-none self-end text-[10px] text-gray-600 font-medium w-3/4">Here is a summary of your tasks...</div>
                        </div>
                        <div className="flex items-center gap-2 mt-auto pt-4 border-t border-gray-50 z-10 bg-white/80 backdrop-blur-sm -mx-6 -mb-6 p-6">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white"><Zap size={16} fill="white" /></div>
                            <span className="text-xl font-bold text-[#292D34]">Brain</span>
                        </div>
                    </div>

                    {/* Row 4 (Chat HERO) */}
                    <div className="col-span-2 row-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer overflow-hidden group">
                        <div className="mt-6 opacity-80 group-hover:scale-105 transition-transform duration-500 space-y-2">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-blue-100" />
                                <div className="h-2 w-24 bg-gray-100 rounded" />
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-green-100" />
                                <div className="h-2 w-32 bg-gray-100 rounded" />
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mt-auto pt-4 border-t border-gray-50 z-10 bg-white/80 backdrop-blur-sm -mx-6 -mb-6 p-6">
                            <div className="w-8 h-8 rounded-lg bg-[#292D34] flex items-center justify-center text-white"><MessageCircle size={16} /></div>
                            <span className="text-xl font-bold text-[#292D34]">Chat</span>
                        </div>
                    </div>

                    <FeatureCard icon={Video} label="Clips" />
                    <FeatureCard icon={LayoutGrid} label="Everything view" />

                    <FeatureCard icon={Globe} label="Single Sign-on" />

                    {/* Row 5 */}
                    <FeatureCard icon={Mail} label="Emails" />
                    <FeatureCard icon={BarChart2} label="Dashboards" />
                    {/* Brain & Chat take up space here via row-span-2 */}
                    <FeatureCard icon={Clock} label="Time Tracking" />
                    <FeatureCard icon={Kanban} label="Kanban Boards" />
                    <FeatureCard icon={Link} label="Integrations" />
                    <FeatureCard icon={Users} label="Guests" />

                    {/* Row 6 */}
                    <FeatureCard icon={Hash} label="Tags" />
                    <FeatureCard icon={Shield} label="24/7 Support" />
                    <FeatureCard icon={CheckCircle2} label="Checklists" />
                    <FeatureCard icon={Calendar} label="Scheduling" />
                    <FeatureCard icon={Layout} label="Spreadsheets" />
                    <FeatureCard icon={PenTool} label="Whiteboards" />
                    <FeatureCard icon={Map} label="Gantt Charts" />
                    <FeatureCard icon={GitBranch} label="Roadmaps" />

                </div>
            </div>
        </section>
    );
};

function FeatureCard({ icon: Icon, label, active }: { icon: any, label: string, active?: boolean }) {
    return (
        <motion.div
            whileHover={{ y: -4, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
            className={cn(
                "bg-white rounded-xl border p-4 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300 h-full",
                active ? "border-2 border-gray-300 shadow-md" : "border-gray-100 hover:border-gray-200"
            )}
        >
            <Icon size={28} className="text-gray-500" strokeWidth={1.5} />
            <span className="text-sm font-semibold text-gray-700 text-center leading-tight">{label}</span>
            {active && <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-500" />}
        </motion.div>
    )
}
