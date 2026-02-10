import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function TimeTrackingDeepDive() {
    return (
        <div className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
                {/* Feature 1: Time Sheets */}
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                            Build and customize time sheets
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            View your time tracked by day, week, month, or any custom range with detailed time sheets. Show time totals grouped by dates and see individual tasks and time entries for a deeper look at where time was spent.
                        </p>
                        <div className="flex items-center gap-2 text-purple-600 font-bold hover:gap-4 transition-all cursor-pointer">
                            <span>View Time Sheets</span>
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="flex-1 w-full relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-2xl transform rotate-3" />
                        <div className="relative bg-slate-50 rounded-2xl border border-slate-200 shadow-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
                            <div className="text-slate-400 font-medium">Time Sheet Visual</div>
                        </div>
                    </div>
                </div>

                {/* Feature 2: Integrations (Reverse) */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                            Never lose track of time again
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Understand how much time groups of tasks take for each person on your team with cumulative time tracking. Add time tracked outside of ClickUp with integrations for Toggl, Harvest, Everhour, and more.
                        </p>
                    </div>
                    <div className="flex-1 w-full relative">
                        <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/10 to-cyan-500/10 rounded-2xl transform -rotate-3" />
                        <div className="relative bg-slate-50 rounded-2xl border border-slate-200 shadow-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
                            <div className="text-slate-400 font-medium">Integrations Visual</div>
                        </div>
                    </div>
                </div>

                {/* Feature 3: Reporting */}
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                            View detailed reporting on your time
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            See your time entries and filter them in any number of ways to build customized reports. Group time entries together, see estimates, and segment billable and non-billable entries.
                        </p>
                    </div>
                    <div className="flex-1 w-full relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl transform rotate-2" />
                        <div className="relative bg-slate-50 rounded-2xl border border-slate-200 shadow-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
                            <div className="text-slate-400 font-medium">Reporting Dashboard Visual</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
