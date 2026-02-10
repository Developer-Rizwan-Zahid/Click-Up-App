import { Layers, Folder, List, Layout } from "lucide-react";

export function FeaturesOverview() {
    return (
        <div id="overview" className="py-24 bg-white">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 text-purple-700 font-bold text-sm mb-6 border border-purple-100 uppercase tracking-wider">
                        ClickUp Overview
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
                        The hierarchy of productivity.
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Organize your work into Spaces, Folders, and Lists. Then customize tasks with subtasks, checklists, and more.
                    </p>
                </div>

                {/* Hierarchy Illustration */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-12">
                        <div className="flex gap-6 group">
                            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <Layout className="w-8 h-8 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">Space</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Organize different departments, teams, or high-level initiatives in their own unique Spaces with their own settings.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6 group">
                            <div className="w-16 h-16 rounded-2xl bg-pink-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <Folder className="w-8 h-8 text-pink-600" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">Folder</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Group related Lists of tasks together within a Space to keep your projects organized and manageable.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6 group">
                            <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <List className="w-8 h-8 text-purple-600" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">List</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Container for tasks. Lists are where your tasks live. Use them to manage sprints, launches, and more.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Visual */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-3xl transform rotate-3" />
                        <div className="relative bg-white rounded-3xl border border-slate-200 shadow-2xl p-8 aspect-square flex flex-col justify-center">
                            {/* Mock Hierarchy UI */}
                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                                    <Layers className="w-6 h-6 text-slate-400" />
                                    <div className="font-semibold text-slate-900">Everything View</div>
                                    <div className="ml-auto text-xs font-bold bg-slate-200 text-slate-600 px-2 py-1 rounded">ALL</div>
                                </div>
                                <div className="pl-8 space-y-4">
                                    <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 flex items-center gap-3">
                                        <Layout className="w-5 h-5 text-blue-500" />
                                        <div className="font-semibold text-slate-900">Engineering Space</div>
                                    </div>
                                    <div className="pl-8 space-y-4">
                                        <div className="p-4 rounded-xl bg-pink-50 border border-pink-100 flex items-center gap-3">
                                            <Folder className="w-5 h-5 text-pink-500" />
                                            <div className="font-semibold text-slate-900">Frontend Folder</div>
                                        </div>
                                        <div className="pl-8">
                                            <div className="p-4 rounded-xl bg-purple-50 border border-purple-100 flex items-center gap-3">
                                                <List className="w-5 h-5 text-purple-500" />
                                                <div className="font-semibold text-slate-900">Sprint 42 List</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
