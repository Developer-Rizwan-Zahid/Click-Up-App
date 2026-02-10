import { X, Check } from "lucide-react";

export function TimeTrackingComparison() {
    return (
        <div className="py-24 bg-white">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-3">
                        Out with the old, in with the new
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                        Stop struggling with outdated time tracking.
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                    {/* Old School */}
                    <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                        <h4 className="text-2xl font-bold text-slate-500 mb-8 flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-slate-400" />
                            Old-school struggles
                        </h4>
                        <ul className="space-y-6">
                            {[
                                "Manually logging hours",
                                "Juggling multiple tools",
                                "Missing out on insights",
                                "Tedious reporting"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-slate-500 font-medium">
                                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                        <X className="w-5 h-5 text-red-500" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* New School */}
                    <div className="p-8 rounded-3xl bg-purple-50/50 border border-purple-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl -mr-32 -mt-32" />

                        <h4 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 relative z-10">
                            <span className="w-2 h-2 rounded-full bg-purple-500" />
                            New-school solutions
                        </h4>
                        <ul className="space-y-6 relative z-10">
                            {[
                                "All-in-one time tracking",
                                "Automatic time entries",
                                "Smart insights with ClickUp AI",
                                "Instant updates on all your devices"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-slate-900 font-medium">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-5 h-5 text-green-600" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
