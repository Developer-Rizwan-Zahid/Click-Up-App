import Link from "next/link";
import { Slack, Github, Gitlab, HardDrive, Clock, Calendar, Mail, MessageSquare } from "lucide-react";

// Mock data for integrations
const integrations = [
    { name: "Slack", icon: Slack, cat: "Communication", desc: "Create and update tasks from Slack messages." },
    { name: "GitHub", icon: Github, cat: "Development", desc: "Sync commits, branches, and PRs." },
    { name: "GitLab", icon: Gitlab, cat: "Development", desc: "Link commits and issues to tasks." },
    { name: "Google Drive", icon: HardDrive, cat: "Storage", desc: "Search and attach files from Drive." },
    { name: "Dropbox", icon: HardDrive, cat: "Storage", desc: "Embed and preview Dropbox files." },
    { name: "Outlook", icon: Mail, cat: "Email", desc: "Convert emails into tasks instantly." },
    { name: "Google Calendar", icon: Calendar, cat: "Calendar", desc: "2-way sync for schedules and deadlines." },
    { name: "Toggl", icon: Clock, cat: "Time Tracking", desc: "Log time directly from ClickUp." },
    { name: "Harvest", icon: Clock, cat: "Time Tracking", desc: "Track time and sync for invoicing." },
    { name: "Intercom", icon: MessageSquare, cat: "Support", desc: "Link chats to tasks for faster resolution." },
    { name: "Zendesk", icon: MessageSquare, cat: "Support", desc: "Turn tickets into actionable tasks." },
    { name: "HubSpot", icon: MessageSquare, cat: "CRM", desc: "Sync deals and contacts with tasks." }
];

export function IntegrationsGrid() {
    return (
        <div className="py-20 bg-slate-50">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {integrations.map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:border-purple-200 transition-all duration-300 group cursor-pointer">
                            <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <item.icon className="w-8 h-8 text-slate-700 group-hover:text-purple-600 transition-colors" />
                            </div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{item.cat}</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="px-8 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all">
                        Load More Integrations
                    </button>
                </div>
            </div>
        </div>
    );
}
