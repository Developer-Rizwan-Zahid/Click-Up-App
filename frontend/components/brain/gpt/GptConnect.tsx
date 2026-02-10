"use client";

import { motion } from "framer-motion";
import { Database, FileCode, Github, LayoutGrid, MessageCircle, Slack } from "lucide-react";

export const GptConnect = () => {
    return (
        <section className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-black text-white mb-8"
                >
                    Connected to everything you use
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 max-w-2xl mx-auto text-lg mb-16"
                >
                    Context flows securely between ClickUp and your entire tech stack. No more silos.
                </motion.p>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-opacity duration-500">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                            <Slack size={40} className="text-[#E01E5A]" />
                        </div>
                        <span className="font-bold text-gray-500">Slack</span>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                            <Github size={40} className="text-white" />
                        </div>
                        <span className="font-bold text-gray-500">GitHub</span>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                            <LayoutGrid size={40} className="text-[#0052CC]" /> // Jira-ish
                        </div>
                        <span className="font-bold text-gray-500">Jira</span>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                            <Database size={40} className="text-[#FF7A59]" /> // HubSpot-ish
                        </div>
                        <span className="font-bold text-gray-500">HubSpot</span>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                            <FileCode size={40} className="text-[#2D8CFF]" /> // Zoom/Other
                        </div>
                        <span className="font-bold text-gray-500">Zoom</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
