import { Calendar, Clock, BarChart } from "lucide-react";

export function TimeTrackingEstimates() {
    return (
        <div className="py-24 bg-slate-50">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 w-full relative order-2 lg:order-1">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl transform -rotate-2" />
                        <div className="relative bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden aspect-[16/9] flex items-center justify-center p-8">
                            {/* Mock UI for Estimates */}
                            <div className="w-full space-y-4">
                                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                                            <Calendar className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-slate-900">Sprint Planning</div>
                                            <div className="text-xs text-slate-500">Due in 2 days</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-bold text-slate-900">12h / 20h</div>
                                        <div className="text-xs text-slate-500">Estimated</div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-24 text-sm text-slate-500">Design</div>
                                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-green-500 w-[80%]" />
                                        </div>
                                        <div className="text-sm font-medium text-slate-700">8h</div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-24 text-sm text-slate-500">Development</div>
                                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-500 w-[40%]" />
                                        </div>
                                        <div className="text-sm font-medium text-slate-700">4h</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 space-y-8 order-1 lg:order-2">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                            Estimate and plan your time at a glance
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Get a high level view of your team's time tracking and compare it against the time estimated. See the amount of time remaining for each person's task to determine if you're on schedule to hit your goals.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Clock className="w-6 h-6 text-purple-600 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Real-time Comparison</h4>
                                    <p className="text-slate-600">Instantly see tracked vs estimated time.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <BarChart className="w-6 h-6 text-purple-600 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Capacity Planning</h4>
                                    <p className="text-slate-600">Know exactly who has bandwidth and who is overloaded.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
