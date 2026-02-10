"use client";

import { Monitor, Calendar, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LiveTrainingHero() {
    return (
        <section className="relative bg-white pt-20 pb-16 overflow-hidden">
            {/* Background Decorations - keeping consistent with University theme */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-50 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-pink-50 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-[#7B68EE] text-xs font-bold uppercase tracking-wider mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7B68EE] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7B68EE]"></span>
                        </span>
                        Live Sessions
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-[#292D34] mb-6 leading-tight">
                        Master ClickUp with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B68EE] to-[#E01E5A]">Live Training</span>
                    </h1>

                    <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Join our experts for interactive workshops. Ask questions, learn best practices, and get certified in real-time.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="#schedule"
                            className="px-8 py-4 rounded-xl bg-[#7B68EE] hover:bg-[#6c5bc9] text-white font-bold text-lg transition-all shadow-lg hover:shadow-[#7B68EE]/30 hover:-translate-y-1 flex items-center gap-2"
                        >
                            <Calendar className="w-5 h-5" />
                            View Schedule
                        </Link>
                        <Link
                            href="#"
                            className="px-8 py-4 rounded-xl bg-white border-2 border-gray-100 hover:border-[#7B68EE]/30 text-gray-700 font-bold text-lg transition-all hover:-translate-y-1 flex items-center gap-2"
                        >
                            Watch On-Demand
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-100">
                        <div className="flex flex-col items-center">
                            <div className="text-3xl font-black text-[#292D34] mb-1">Daily</div>
                            <div className="text-sm font-bold text-gray-400 uppercase tracking-wide">Live Sessions</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-3xl font-black text-[#292D34] mb-1">45+</div>
                            <div className="text-sm font-bold text-gray-400 uppercase tracking-wide">Expert Trainers</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-3xl font-black text-[#292D34] mb-1">50k+</div>
                            <div className="text-sm font-bold text-gray-400 uppercase tracking-wide">Learners Trained</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
