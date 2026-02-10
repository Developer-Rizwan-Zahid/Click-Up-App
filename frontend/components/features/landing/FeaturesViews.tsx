import {
    List, KanbanSquare, Table, Calendar, GanttChart,
    MessageSquare, Activity, Map, Monitor, Columns, FileText
} from "lucide-react";

const views = [
    { icon: List, name: "List", color: "text-purple-600", bg: "bg-purple-50" },
    { icon: KanbanSquare, name: "Board", color: "text-blue-600", bg: "bg-blue-50" },
    { icon: Calendar, name: "Calendar", color: "text-green-600", bg: "bg-green-50" },
    { icon: GanttChart, name: "Gantt", color: "text-orange-600", bg: "bg-orange-50" },
    { icon: Table, name: "Table", color: "text-cyan-600", bg: "bg-cyan-50" },
    { icon: Columns, name: "Box", color: "text-pink-600", bg: "bg-pink-50" },
    { icon: Activity, name: "Timeline", color: "text-red-600", bg: "bg-red-50" },
    { icon: Activity, name: "Workload", color: "text-indigo-600", bg: "bg-indigo-50" },
    { icon: Monitor, name: "Mind Map", color: "text-emerald-600", bg: "bg-emerald-50" },
    { icon: Map, name: "Map", color: "text-sky-600", bg: "bg-sky-50" },
    { icon: Activity, name: "Activity", color: "text-yellow-600", bg: "bg-yellow-50" },
    { icon: FileText, name: "Doc", color: "text-slate-600", bg: "bg-slate-50" },
    { icon: MessageSquare, name: "Chat", color: "text-violet-600", bg: "bg-violet-50" },
    { icon: Monitor, name: "Embed", color: "text-rose-600", bg: "bg-rose-50" },
    { icon: FileText, name: "Form", color: "text-teal-600", bg: "bg-teal-50" },
];

export function FeaturesViews() {
    return (
        <div id="views" className="py-24 bg-slate-50">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-sm mb-6 border border-blue-100 uppercase tracking-wider">
                        15+ Powerful Views
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
                        Tackle work from any angle.
                    </h2>
                    <p className="text-xl text-slate-600">
                        Visualize your projects your way. Switch between views instantly to see the same work from different perspectives.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {views.map((view, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-xl hover:border-purple-200 transaction-all duration-300 group cursor-pointer">
                            <div className={`w-12 h-12 rounded-xl ${view.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <view.icon className={`w-6 h-6 ${view.color}`} />
                            </div>
                            <h3 className="font-bold text-slate-900">{view.name} View</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
