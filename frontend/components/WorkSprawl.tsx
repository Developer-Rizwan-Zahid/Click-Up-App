"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileText, Video, Github, Trello, Slack, Mail, Database, Search, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const WorkSprawl = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Trusted By Ticker */}
                <div className="text-center mb-20">
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Trusted by the best</p>
                    <div className="flex flex-wrap justify-center gap-12 sm:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Simple text placeholders for logos as per standard react-lucide / simple divs if no assets */}
                        <div className="text-xl font-bold text-gray-800">Booking.com</div>
                        <div className="text-xl font-bold text-gray-800">IBM</div>
                        <div className="text-xl font-bold text-gray-800">Logitech</div>
                        <div className="text-xl font-bold text-gray-800">Fortinet</div>
                        <div className="text-xl font-bold text-gray-800">Spotify</div>
                        <div className="text-xl font-bold text-gray-800">T-Mobile</div>
                    </div>
                </div>

                {/* Headline */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-6xl font-black text-[#292D34] mb-6 tracking-tight"
                    >
                        60% of human work is lost in context
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-500 font-medium"
                    >
                        Work Sprawl is killing context - and destroying productivity.
                    </motion.p>
                </div>
                {/* Tangled Graph Visual */}
                <div className="relative h-[400px] w-full max-w-6xl mx-auto mb-20">
                    {/* Background Gradient Line (SVG) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 400" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#f3f4f6" stopOpacity="0" />
                                <stop offset="10%" stopColor="#e5e7eb" stopOpacity="1" />
                                <stop offset="50%" stopColor="#d1d5db" stopOpacity="1" />
                                <stop offset="90%" stopColor="#e5e7eb" stopOpacity="1" />
                                <stop offset="100%" stopColor="#f3f4f6" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <motion.path
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            d="M0,200 C150,200 150,100 250,150 C350,200 300,300 400,250 C500,200 500,100 600,150 C700,200 650,300 750,250 C850,200 900,200 1000,200"
                            fill="none"
                            stroke="url(#gradientLine)"
                            strokeWidth="40"
                            strokeLinecap="round"
                            className="drop-shadow-xl"
                        />
                        <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                            d="M50,220 C100,150 200,350 300,150 C350,50 450,350 550,150 C650,50 750,350 850,180"
                            fill="none"
                            stroke="#e2e8f0"
                            strokeWidth="20"
                            strokeLinecap="round"
                            className="opacity-50"
                        />
                    </svg>

                    {/* Floating Icons */}
                    <FloatingIcon icon={Slack} top="30%" left="15%" delay={0.2} color="text-red-500" />
                    <FloatingIcon icon={Trello} top="60%" left="25%" delay={0.4} color="text-blue-500" />
                    <FloatingIcon icon={Github} top="20%" left="45%" delay={0.6} color="text-gray-800" />
                    <FloatingIcon icon={Mail} top="70%" left="55%" delay={0.8} color="text-yellow-500" />
                    <FloatingIcon icon={Database} top="30%" left="75%" delay={1.0} color="text-purple-500" />

                    {/* Bubbles */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.2 }}
                        className="absolute top-[25%] right-[20%] bg-white px-4 py-2 rounded-2xl shadow-lg border border-gray-100 text-sm font-bold text-gray-600 z-10"
                    >
                        Where's that...
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.5 }}
                        className="absolute top-[55%] right-[10%] bg-white px-4 py-2 rounded-2xl shadow-lg border border-gray-100 text-sm font-bold text-gray-600 z-10"
                    >
                        Who can help with...
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.8 }}
                        className="absolute top-[65%] right-[30%] bg-white px-4 py-2 rounded-2xl shadow-lg border border-gray-100 text-sm font-bold text-gray-600 z-10"
                    >
                        Is this accurate?
                    </motion.div>
                </div>

                {/* 3 Column Stats */}
                <div className="grid md:grid-cols-3 gap-12 border-t border-gray-100 pt-16">
                    <StatColumn
                        title="Context Switching"
                        stat="32%"
                        desc="Digital fatigue reduces employee performance by up to"
                        details="Digital fatigue reduces employee performance by up to 32%"
                    />
                    <StatColumn
                        title="Context Missing"
                        stat="96%"
                        desc="of companies fail in AI value & adoption"
                        details="96% of companies fail in AI value & adoption"
                    />
                    <StatColumn
                        title="Context Stitching"
                        stat="2.5 hours"
                        desc="daily wasted searching & stitching context"
                        details="2.5 hours daily wasted searching & stitching context"
                    />
                </div>

            </div>
        </section>
    );
};

const FloatingIcon = ({ icon: Icon, top, left, delay, color }: { icon: any, top: string, left: string, delay: number, color: string }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay, type: "spring", stiffness: 200 }}
        className={cn("absolute w-12 h-12 bg-white rounded-xl shadow-xl flex items-center justify-center border border-gray-100 z-10", color)}
        style={{ top, left }}
    >
        <Icon size={24} />
    </motion.div>
);

const StatColumn = ({ title, stat, desc, details }: { title: string, stat: string, desc: string, details: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group"
    >
        <h3 className="text-2xl font-bold text-[#292D34] mb-4">{title}</h3>
        <p className="text-gray-500 leading-relaxed mb-6 h-12">
            <span className="font-bold text-black">{stat}</span> {desc.replace(stat, "")}
            {/* Fallback simple rendering if regex fails or complicates */}
        </p>
        <div className="text-gray-400 text-sm">{details}</div>
    </motion.div>
);
