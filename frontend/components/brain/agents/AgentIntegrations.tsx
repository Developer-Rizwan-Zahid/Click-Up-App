"use client";

import { motion } from "framer-motion";
import { Database, Globe, MessageSquare, Layout, HardDrive, Mail, Calendar, Code } from "lucide-react";

const integrations = [
    { name: "Slack", icon: MessageSquare, color: "text-[#E01E5A]", bg: "bg-[#E01E5A]/10", desc: "Send alerts & replies" },
    { name: "Jira", icon: Layout, color: "text-[#0052CC]", bg: "bg-[#0052CC]/10", desc: "Sync tickets & sprints" },
    { name: "GitHub", icon: Code, color: "text-white", bg: "bg-white/10", desc: "PR reviews & issues" },
    { name: "HubSpot", icon: Database, color: "text-[#FF7A59]", bg: "bg-[#FF7A59]/10", desc: "Update CRM records" },
    { name: "Drive", icon: HardDrive, color: "text-[#0F9D58]", bg: "bg-[#0F9D58]/10", desc: "Read & write docs" },
    { name: "Gmail", icon: Mail, color: "text-[#EA4335]", bg: "bg-[#EA4335]/10", desc: "Draft emails" },
    { name: "Notion", icon: FileTextIcon, color: "text-white", bg: "bg-white/10", desc: "Manage detailed wikis" },
    { name: "Zoom", icon: Calendar, color: "text-[#2D8CFF]", bg: "bg-[#2D8CFF]/10", desc: "Schedule meetings" },
];

function FileTextIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" x2="8" y1="13" y2="13" />
            <line x1="16" x2="8" y1="17" y2="17" />
            <line x1="10" x2="8" y1="9" y2="9" />
        </svg>
    )
}

export const AgentIntegrations = () => {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-gray-900 mb-6">Works with your favorite apps</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        Brain Agents connect seamlessly with your existing tech stack.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {integrations.map((app, index) => (
                        <motion.div
                            key={app.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-white hover:shadow-lg hover:border-gray-200 transition-all cursor-pointer group"
                        >
                            <div className={`w-12 h-12 rounded-xl ${app.bg.replace('/10', '/20')} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <app.icon className={`w-6 h-6 ${app.color === 'text-white' ? 'text-gray-600' : app.color}`} />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-1">{app.name}</h3>
                            <p className="text-xs text-gray-500 text-center">{app.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
