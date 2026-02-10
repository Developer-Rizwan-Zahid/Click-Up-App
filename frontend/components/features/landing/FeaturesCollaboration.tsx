import { MessageCircle, FileText, PieChart, Users, CheckCircle } from "lucide-react";

export function FeaturesCollaboration() {
    return (
        <div id="collaboration" className="py-24 bg-white">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

                {/* Collaboration */}
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-50 text-pink-700 font-bold text-sm mb-6 border border-pink-100 uppercase tracking-wider">
                            Collaboration
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                            Collaborate on anything with your team.
                        </h2>
                        <p className="text-xl text-slate-600">
                            Streamline teamwork with powerful collaboration features that make it easy to work together on any type of project.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            {["Whiteboards", "Comments", "Proofing", "Email", "Chat"].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-lg font-bold text-slate-700">
                                    <CheckCircle className="w-5 h-5 text-pink-500" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 w-full relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-3xl transform rotate-3" />
                        <div className="relative bg-slate-50 rounded-3xl border border-slate-200 shadow-2xl p-8 aspect-[4/3] flex items-center justify-center">
                            <div className="text-slate-400 font-bold">Collab Visual</div>
                        </div>
                    </div>
                </div>

                {/* Docs */}
                <div id="docs" className="flex flex-col lg:flex-row-reverse items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-50 text-yellow-700 font-bold text-sm mb-6 border border-yellow-100 uppercase tracking-wider">
                            Docs & Wikis
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                            Document and share anything.
                        </h2>
                        <p className="text-xl text-slate-600">
                            Collaborate on product ideas, document bugs, or jot down meeting minutes with ClickUp Docs. Edit in real-time with others.
                        </p>
                    </div>
                    <div className="flex-1 w-full relative">
                        <div className="absolute inset-0 bg-gradient-to-bl from-yellow-500/10 to-orange-500/10 rounded-3xl transform -rotate-3" />
                        <div className="relative bg-slate-50 rounded-3xl border border-slate-200 shadow-2xl p-8 aspect-[4/3] flex items-center justify-center">
                            <div className="text-slate-400 font-bold">Docs UI Visual</div>
                        </div>
                    </div>
                </div>

                {/* Reporting */}
                <div id="reporting" className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-700 font-bold text-sm mb-6 border border-green-100 uppercase tracking-wider">
                            Reporting
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                            Stay on track with real-time reporting.
                        </h2>
                        <p className="text-xl text-slate-600">
                            Set goals, track progress, and manage resources more effectively with powerful reporting features and Dashboards.
                        </p>
                        <div className="flex gap-4">
                            <span className="px-4 py-2 bg-slate-100 rounded-lg font-bold text-slate-700">Dashboards</span>
                            <span className="px-4 py-2 bg-slate-100 rounded-lg font-bold text-slate-700">Goals</span>
                            <span className="px-4 py-2 bg-slate-100 rounded-lg font-bold text-slate-700">Milestones</span>
                        </div>
                    </div>
                    <div className="flex-1 w-full relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-emerald-500/10 rounded-3xl transform rotate-3" />
                        <div className="relative bg-slate-50 rounded-3xl border border-slate-200 shadow-2xl p-8 aspect-[4/3] flex items-center justify-center">
                            <div className="text-slate-400 font-bold">Dashboards Visual</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
