import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FeaturesMore() {
    const categories = [
        {
            title: "Task Management",
            color: "decoration-blue-500",
            features: [
                "Recurring Checklists", "Reminders", "Resolve Comments", "Scrum Points", "Status Templates",
                "Milestones", "Sprints", "Sorting", "Recurring Tasks", "Favorite Views",
                "Multitask Toolbar", "Task Tray", "Task Templates", "Task Mentions", "Subtasks",
                "Priorities", "Notepad", "Epics", "Webhooks", "Command Center"
            ]
        },
        {
            title: "Complete Customization",
            color: "decoration-purple-500",
            features: [
                "Custom Fields", "Custom Statuses", "Customize Assignees", "Filter and Search", "Hotkeys",
                "Super Rich Editing", "Simple Statuses", "Custom Notifications", "Tags", "Custom Themes",
                "Dark Mode", "Custom Roles", "White Label Enterprise"
            ]
        },
        {
            title: "Team Collaboration",
            color: "decoration-pink-500",
            features: [
                "2-Way Calendar Sync", "Guests", "Public Sharing", "Privacy", "Spaces",
                "Image Mockups", "Detect Collaboration", "Box View", "Member Profiles", "Form View"
            ]
        }
    ];

    return (
        <div id="all" className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
                        But wait, there's more.
                    </h2>
                    <p className="text-xl text-slate-600">
                        ClickUp comes with hundreds of more features to help your team tackle any type of work.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {categories.map((cat, i) => (
                        <div key={i}>
                            <h3 className={`text-2xl font-bold text-slate-900 mb-8 underline decoration-4 underline-offset-4 ${cat.color}`}>
                                {cat.title}
                            </h3>
                            <ul className="space-y-3">
                                {cat.features.map((feature, j) => (
                                    <li key={j}>
                                        <Link href="#" className="flex items-center gap-2 text-slate-600 hover:text-purple-600 transition-colors group">
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-purple-500 transition-colors" />
                                            {feature}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* CTA Footer */}
                <div className="mt-32 p-12 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-20 -mb-20" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">
                            Let’s make the world<br />more productive, together.
                        </h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="/signup"
                                className="px-8 py-4 bg-white text-purple-600 text-lg font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:bg-slate-50 hover:-translate-y-1"
                            >
                                Get Started for Free
                            </Link>
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-bold rounded-xl transition-all hover:bg-white/10"
                            >
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
