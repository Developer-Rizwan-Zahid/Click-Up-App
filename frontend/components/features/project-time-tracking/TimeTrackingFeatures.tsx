import { FileText, Tag, Receipt, ArrowUpDown, Filter, Calculator, Clock } from "lucide-react";

const features = [
    {
        icon: FileText,
        title: "Notes",
        description: "Add notes to your time entries to reference exactly what you spent time on."
    },
    {
        icon: Tag,
        title: "Label",
        description: "Create and apply labels to easily categorize and filter time spent on tasks."
    },
    {
        icon: Receipt,
        title: "Billable Time",
        description: "Mark time as billable to see what time should be expensed on invoices."
    },
    {
        icon: ArrowUpDown,
        title: "Sorting",
        description: "Sort tasks by time spent to see potential bottlenecks or where more help is needed."
    },
    {
        icon: Filter,
        title: "Filtering",
        description: "Filter tracked time by date, statuses, priority, tags, and more."
    },
    {
        icon: Calculator,
        title: "Rollup",
        description: "See a combined total of all time spent across tasks and subtasks."
    },
    {
        icon: Clock,
        title: "Edit time",
        description: "Manually adjust your tracking by adding or subtracting time whenever needed."
    }
];

export function TimeTrackingFeatures() {
    return (
        <div className="py-24 bg-slate-50">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
                        Organize tracked time,<br />add notes, and more.
                    </h2>
                    <p className="text-xl text-slate-600">
                        More than just a timer. Get the granular control you need to manage your day perfectly.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {features.map((feature, i) => (
                        <div match={i}
                            key={i}
                            className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:border-purple-200 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
