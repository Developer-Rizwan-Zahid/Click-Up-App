
"use client";

import { motion } from "framer-motion";
import { Clock, Calculator, CalendarClock, Play } from "lucide-react";

export default function DashboardsTimeTracking() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Visual Side (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 w-full"
                    >
                        <div className="relative bg-white p-6 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-slate-800">Time tracking</h3>
                            </div>

                            {/* List Mock */}
                            <div className="space-y-4">
                                {[
                                    { name: "Zack Martin", status: "", duration: "2:45", active: false },
                                    { name: "Arey Lee", status: "In Progress", duration: "0:00", active: true },
                                    { name: "Brandi West", status: "", duration: "1:20", active: false },
                                    { name: "Brandon Brown", status: "", duration: "4:05", active: false },
                                    { name: "Brandi West", status: "", duration: "0:30", active: false },
                                ].map((user, i) => ( // Using mapReverse just to start from top in code, but UI maps normally
                                    // Actually let's just map normally but style the active one
                                    <div key={i} className={`flex items-center gap-4 p-3 rounded-xl transition-all ${user.active ? 'bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] scale-105 z-10 border border-purple-100' : 'bg-slate-50/50 grayscale opacity-60'}`}>
                                        <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                                        <div className="flex-1">
                                            <div className="text-sm font-bold text-slate-700">{user.name}</div>
                                        </div>

                                        {user.active ? (
                                            <div className="flex items-center gap-3 bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg shadow-purple-500/30">
                                                <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                                                <span className="font-mono font-bold text-sm">0:00</span>
                                                <div className="ml-2 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                                                    <Clock className="w-3 h-3" />
                                                </div>
                                            </div>
                                        ) : null}
                                    </div>
                                ))}
                            </div>

                            {/* Floating Play Button */}
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="absolute -bottom-4 -right-4 w-14 h-14 bg-[#28C840] rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:bg-[#24b239]"
                            >
                                <Play className="w-6 h-6 fill-white text-white ml-1" />
                            </motion.div>

                        </div>
                    </motion.div>

                    {/* Content Side (Right) */}
                    <div className="flex-1 text-left lg:pl-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                "How long did it take?"
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Get answers about billable hours, time spent on tasks, and even estimates for future projects. You can setup Timesheet cards for clients or Calculation cards that automatic analyze time and give projections about work.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
