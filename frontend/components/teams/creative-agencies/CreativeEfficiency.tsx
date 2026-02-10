"use client";

import { motion } from "framer-motion";
import { Users, BarChart } from "lucide-react";

export function CreativeEfficiency() {
    return (
        <section className="py-24 bg-[#FAF9FF] overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div 
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-8"
                    >
                        <span className="text-pink-600 font-bold tracking-wider uppercase text-sm flex items-center gap-2">
                            <Users size={16} /> Resource Allocation
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#292D34] leading-tight">
                            Scale team efficiency
                        </h2>
                        <p className="text-xl text-gray-500 leading-relaxed">
                            Optimize your team’s resources, stay ahead of bottlenecks, and plan for future workloads. With ClickUp, you can see everyone's capacity and assign resources where needed.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-8 pt-4">
                            <div className="space-y-2">
                                <div className="text-3xl font-black text-pink-600">85%</div>
                                <div className="text-sm font-bold text-gray-500 uppercase tracking-wide">Reduction in Busywork</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-black text-orange-500">2x</div>
                                <div className="text-sm font-bold text-gray-500 uppercase tracking-wide">Faster Delivery</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full"
                    >
                        <div className="relative">
                            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-pink-50 relative z-10">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="font-bold text-[#292D34]">Team Workload</div>
                                    <BarChart className="text-pink-500" size={20} />
                                </div>
                                
                                <div className="space-y-6">
                                    {[
                                        { name: "John Doe", capacity: "90%", color: "bg-pink-500" },
                                        { name: "Sarah Smith", capacity: "45%", color: "bg-green-500" },
                                        { name: "Mike Ross", capacity: "100%", color: "bg-orange-500" },
                                        { name: "Jessica Day", capacity: "65%", color: "bg-pink-500" }
                                    ].map((member, i) => (
                                        <div key={i} className="space-y-2">
                                            <div className="flex justify-between text-sm font-bold">
                                                <span className="text-gray-700">{member.name}</span>
                                                <span className="text-gray-500">{member.capacity}</span>
                                            </div>
                                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: member.capacity }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                                    className={`h-full ${member.color}`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Decorative element */}
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-magenta-100 rounded-full blur-3xl opacity-50 -z-0" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
