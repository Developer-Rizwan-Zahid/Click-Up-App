
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BarChart3, PieChart, LayoutDashboard, Database, CheckSquare, Search, GripVertical, MoreHorizontal, Maximize2, RotateCw } from "lucide-react";

export default function DashboardsWidgets() {
    const tabs = [
        { id: "marketing", label: "Marketing Campaigns", icon: Database },
        { id: "client", label: "Client Portals", icon: CheckSquare },
        { id: "renewal", label: "Renewal Dashboards", icon: CheckSquare },
        { id: "revenue", label: "Revenue Dashboards", icon: CheckSquare }, // Using CheckSquare as generic icon placeholder based on image looks like checked boxes
    ];

    const [activeTab, setActiveTab] = useState("marketing");

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-lg font-bold text-purple-600 mb-4 font-script">
                            One Dashboard, finally
                        </h2>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                            Everything you want to measure is right in front of you
                        </h2>
                    </motion.div>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition-all font-semibold text-sm ${activeTab === tab.id
                                ? "bg-[#1C1D21] text-white border-[#1C1D21] shadow-lg"
                                : "bg-white text-slate-500 border-slate-200 hover:border-slate-300"
                                }`}
                        >
                            {tab.id === 'marketing' && <div className="p-0.5 bg-slate-700/50 rounded-sm"><Database className="w-3 h-3 text-white" /></div>}
                            {tab.id !== 'marketing' && <tab.icon className="w-4 h-4" />}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Main Visual Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-6xl mx-auto bg-[#2998FF] p-2 sm:p-4 rounded-3xl"
                >
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden min-h-[600px] flex flex-col">

                        {/* Dashboard Header */}
                        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                                    <LayoutDashboard className="w-4 h-4" />
                                    <span>Dashboard</span>
                                    <span>/</span>
                                    <span className="text-slate-800 border-b-2 border-slate-800 pb-0.5">Marketing Influencers</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="px-3 py-1.5 flex items-center gap-2 text-xs font-medium text-slate-600 hover:bg-slate-50 rounded bg-white border border-slate-200">
                                    <GripVertical className="w-3 h-3" /> Hide · 6
                                </button>
                                <button className="px-3 py-1.5 flex items-center gap-2 text-xs font-medium text-slate-600 hover:bg-slate-50 rounded bg-white border border-slate-200">
                                    <RotateCw className="w-3 h-3" /> Customize
                                </button>
                                <button className="px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold rounded shadow-sm">
                                    Add Card
                                </button>
                            </div>
                        </div>

                        {/* Charts Mesh */}
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50/30 flex-1">

                            {/* Chart 1: Impressions by week (Bar) */}
                            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="font-bold text-slate-700 text-sm">Impressions by week</h3>
                                    <div className="flex gap-2 text-slate-300">
                                        <Search className="w-4 h-4" />
                                        <Maximize2 className="w-4 h-4" />
                                        <MoreHorizontal className="w-4 h-4" />
                                    </div>
                                </div>
                                <div className="flex-1 flex items-end justify-between gap-2 px-2 h-48">
                                    <div className="flex flex-col justify-between h-full text-[10px] text-slate-300 py-2">
                                        <span>50k</span><span>40k</span><span>30k</span><span>20k</span><span>10k</span><span>0k</span>
                                    </div>
                                    {[35, 20, 45, 30, 60, 40, 55, 35, 70, 50, 65, 80].map((h, i) => (
                                        <div key={i} className="flex-1 flex flex-col justify-end gap-1 group">
                                            <div style={{ height: `${h}%` }} className={`w-full rounded-t-sm ${i % 3 === 0 ? 'bg-orange-300' : i % 3 === 1 ? 'bg-yellow-400' : 'bg-green-400'}`}></div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-2 text-[10px] text-slate-400 px-8">
                                    <span>Jan 5</span><span>Jan 12</span><span>Jan 19</span><span>Jan 26</span>
                                </div>
                            </div>

                            {/* Chart 2: Impression by month (Pie) */}
                            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="font-bold text-slate-700 text-sm">Impression by month</h3>
                                    <div className="flex gap-2 text-slate-300">
                                        <Search className="w-4 h-4" />
                                        <Maximize2 className="w-4 h-4" />
                                        <MoreHorizontal className="w-4 h-4" />
                                    </div>
                                </div>
                                <div className="flex-1 flex items-center justify-center relative">
                                    {/* Simplified CSS Pie Chart Mockup */}
                                    <div className="w-48 h-48 rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-blue-400 via-yellow-400 to-red-400 p-8 relative">
                                        <div className="absolute top-0 right-0 w-full h-full rounded-full bg-[conic-gradient(at_center,theme(colors.blue.400)_0deg_110deg,theme(colors.yellow.400)_110deg_240deg,theme(colors.red.700)_240deg_360deg)]"></div>
                                    </div>

                                    {/* Labels */}
                                    <div className="absolute top-1/2 right-4 text-xs font-semibold text-slate-600">- Feb</div>
                                    <div className="absolute bottom-4 right-1/2 text-xs font-semibold text-slate-600">- Mar</div>
                                    <div className="absolute top-1/4 right-10 text-xs font-semibold text-slate-600">Jan -</div>
                                    <div className="absolute left-10 top-1/2 text-xs font-semibold text-slate-600">Apr</div>

                                </div>
                            </div>

                            {/* Chart 3: Likes by week (Stacked Bar) - using simpler visualization for speed */}
                            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="font-bold text-slate-700 text-sm">Likes by week</h3>
                                    <div className="flex gap-2 text-slate-300">
                                        <Search className="w-4 h-4" />
                                        <Maximize2 className="w-4 h-4" />
                                        <MoreHorizontal className="w-4 h-4" />
                                    </div>
                                </div>
                                <div className="flex-1 flex items-end gap-3 px-2 h-48">
                                    <div className="flex flex-col justify-between h-full text-[10px] text-slate-300 py-2">
                                        <span>20</span><span>15</span><span>10</span>
                                    </div>
                                    {[40, 50, 30, 60, 45, 70, 55, 80].map((h, i) => (
                                        <div key={i} className="flex-1 flex flex-col justify-end h-full">
                                            <div style={{ height: `${h * 0.4}%` }} className="bg-emerald-400 w-full mb-[1px]"></div>
                                            <div style={{ height: `${h * 0.3}%` }} className="bg-purple-400 w-full mb-[1px]"></div>
                                            <div style={{ height: `${h * 0.3}%` }} className="bg-blue-600 w-full rounded-b-sm"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Chart 4: Likes by channel (Pie) */}
                            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="font-bold text-slate-700 text-sm">Likes by channel</h3>
                                    <div className="flex gap-2 text-slate-300">
                                        <Search className="w-4 h-4" />
                                        <Maximize2 className="w-4 h-4" />
                                        <MoreHorizontal className="w-4 h-4" />
                                    </div>
                                </div>
                                <div className="flex-1 flex items-center justify-center relative">
                                    {/* Pie Chart Mock */}
                                    <div className="w-48 h-48 rounded-full bg-[conic-gradient(at_center,theme(colors.purple.400)_0deg_90deg,theme(colors.emerald.400)_90deg_200deg,theme(colors.blue.500)_200deg_360deg)]"></div>

                                    <div className="absolute top-10 left-2 text-xs text-slate-500">LinkedIn</div>
                                    <div className="absolute bottom-10 left-2 text-xs text-slate-500">YouTube</div>
                                    <div className="absolute top-1/2 right-2 text-xs text-slate-500">Instagram</div>
                                    <div className="absolute bottom-10 right-10 text-xs text-slate-500">TikTok</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
