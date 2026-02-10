"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { LayoutList, Kanban, GanttChart, Calendar } from "lucide-react";

export function PMViews() {
    const [activeTab, setActiveTab] = useState("list");

    const tabs = [
        { id: "list", label: "List View", icon: LayoutList },
        { id: "board", label: "Board View", icon: Kanban },
        { id: "gantt", label: "Gantt Chart", icon: GanttChart },
        { id: "calendar", label: "Calendar", icon: Calendar }
    ];

    const content = {
        list: {
            title: "Organize tasks in a flexible list",
            desc: "Group, sort, and filter tasks to see exactly what you need. Add distinct columns for any data type.",
            image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop"
        },
        board: {
            title: "Visualize workflows with drag-and-drop",
            desc: "Move tasks through stages effortlessly. Perfect for Agile teams and visual planners.",
            image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop"
        },
        gantt: {
            title: "Plan timelines and manage dependencies",
            desc: "Schedule tasks, identify bottlenecks, and keep your project on track with a powerful Gantt chart.",
            image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=1000&auto=format&fit=crop"
        },
        calendar: {
            title: "Keep track of deadlines and schedules",
            desc: "Drag and drop tasks to schedule them. visualize your team's workload across days, weeks, or months.",
            image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1000&auto=format&fit=crop"
        }
    };

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-[#292D34] mb-4">View your work, your way</h2>
                    <p className="text-gray-500">Switch between views instantly to find the perspective you need.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === tab.id
                                ? "bg-[#292D34] text-white shadow-lg scale-105"
                                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                                }`}
                        >
                            <tab.icon size={18} />
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid lg:grid-cols-2 gap-12 items-center bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100"
                        >
                            <div>
                                <h3 className="text-3xl font-bold text-[#292D34] mb-6">
                                    {(content as any)[activeTab].title}
                                </h3>
                                <p className="text-xl text-gray-500 leading-relaxed mb-8">
                                    {(content as any)[activeTab].desc}
                                </p>
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-8 h-12">
                                    Try {tabs.find(t => t.id === activeTab)?.label}
                                </Button>
                            </div>
                            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200">
                                <img
                                    src={(content as any)[activeTab].image}
                                    alt={(content as any)[activeTab].title}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
