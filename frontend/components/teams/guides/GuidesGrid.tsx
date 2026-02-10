"use client";

import { useState } from "react";
import { GuideCard } from "./GuideCard";

const RESEARCH = [
    {
        id: 1,
        title: "2024 Efficiency Report",
        description: "Benchmark your team against thousands of others in our annual efficiency study.",
        color: "bg-blue-500",
        cta: "Read the report"
    },
    {
        id: 2,
        title: "The Future of Work",
        description: "Insights into remote work trends, asynchronous communication, and tooling.",
        color: "bg-green-500",
        cta: "Get insights"
    },
    {
        id: 3,
        title: "Project Management Trends",
        description: "What PMs need to know to stay ahead in a rapidly evolving landscape.",
        color: "bg-purple-500",
        cta: "Download PDF"
    }
];

const PLAYBOOKS = [
    {
        id: 4,
        title: "Agile Scrums",
        description: "A step-by-step framework for running effective sprints and standups.",
        color: "bg-orange-500",
        cta: "Get the playbook"
    },
    {
        id: 5,
        title: "Marketing Campaigns",
        description: "Launch campaigns faster with this repeatable process checklist.",
        color: "bg-pink-500",
        cta: "Get the playbook"
    },
    {
        id: 6,
        title: "Product Launch",
        description: "Everything you need to coordinate product, marketing, and sales for a successful launch.",
        color: "bg-indigo-500",
        cta: "Get the playbook"
    },
    {
        id: 7,
        title: "Client Onboarding",
        description: "Impress new clients from day one with a structured onboarding flow.",
        color: "bg-teal-500",
        cta: "Get the playbook"
    },
    {
        id: 8,
        title: "OKR Planning",
        description: "How to set, track, and achieve ambitious goals with your team.",
        color: "bg-red-500",
        cta: "Get the playbook"
    },
    {
        id: 9,
        title: "Bug Tracking",
        description: "Squash bugs faster with a prioritized and automated triage workflow.",
        color: "bg-gray-700",
        cta: "Get the playbook"
    }
];

const GUIDES = [
    {
        id: 10,
        title: "ClickUp for Beginners",
        description: "Master the basics of Hierarchy, Views, and Tasks in under 20 minutes.",
        color: "bg-[#7B68EE]",
        cta: "Read the guide"
    },
    {
        id: 11,
        title: "Advanced Automations",
        description: "Save time by automating repetitive tasks and manual handoffs.",
        color: "bg-cyan-600",
        cta: "Read the guide"
    },
    {
        id: 12,
        title: "Dashboards 101",
        description: "Visualize work and report on progress with powerful custom dashboards.",
        color: "bg-emerald-600",
        cta: "Read the guide"
    }
];

type Tab = "Playbooks" | "Guides" | "Research";

export function GuidesGrid() {
    const [activeTab, setActiveTab] = useState<Tab>("Playbooks");

    const getData = () => {
        switch (activeTab) {
            case "Playbooks": return PLAYBOOKS;
            case "Guides": return GUIDES;
            case "Research": return RESEARCH;
            default: return PLAYBOOKS;
        }
    };

    return (
        <section className="pb-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Tabs */}
                <div className="flex justify-center mb-16 px-4">
                    <div className="flex space-x-2 md:space-x-8 border-b border-gray-200 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-hide">
                        {(["Playbooks", "Guides", "Research"] as Tab[]).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-4 px-2 md:px-4 text-sm md:text-lg font-bold transition-colors whitespace-nowrap border-b-2 ${activeTab === tab
                                        ? "text-[#292D34] border-[#292D34]"
                                        : "text-gray-400 border-transparent hover:text-gray-600"
                                    }`}
                            >
                                {tab === "Playbooks" ? "ClickUp Playbooks" : tab === "Guides" ? "ClickUp Guides" : "Survey Research"}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {getData().map(item => (
                        <div key={item.id} className="h-full">
                            <GuideCard
                                title={item.title}
                                description={item.description}
                                imageColor={item.color}
                                ctaText={item.cta}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
