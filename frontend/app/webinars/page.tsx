"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WebinarsHero } from "@/components/webinars/WebinarsHero";
import { WebinarsCategory } from "@/components/webinars/WebinarsCategory";

// Mock Data
const MOCK_DATA = {
    featureFest: [
        {
            id: "ff-1",
            title: "ClickUp AI: The Future of Work",
            description: "Learn how to save time and automate your workflow with our newest AI features.",
            duration: "45 min",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600",
            tags: ["Feature Fest", "AI"]
        },
        {
            id: "ff-2",
            title: "Whiteboards 2.0 Deep Dive",
            description: "From brainstorming to execution. See how Whiteboards connect directly to your tasks.",
            duration: "32 min",
            image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
            tags: ["Feature Fest", "Whiteboards"]
        },
        {
            id: "ff-3",
            title: "Dashboards & Reporting",
            description: "Visualize your team's velocity and project health with our revamped Dashboards.",
            duration: "50 min",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
            tags: ["Feature Fest", "Reporting"]
        }
    ],
    community: [
        {
            id: "comm-1",
            title: "How agencies scale with ClickUp",
            description: "Hear from top creative agencies on how they manage client work and internal operations.",
            duration: "1h 10m",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
            tags: ["Agency", "Scale"]
        },
        {
            id: "comm-2",
            title: "Software Teams Workflow",
            description: "A panel discussion with engineering leads on managing sprints and backlogs.",
            duration: "55 min",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
            tags: ["Engineering", "Agile"]
        },
        {
            id: "comm-3",
            title: "Marketing Campaign Management",
            description: "Best practices for planning and executing multi-channel marketing campaigns.",
            duration: "40 min",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
            tags: ["Marketing", "Strategy"]
        }
    ],
    beginner: [
        {
            id: "beg-1",
            title: "ClickUp 101: Getting Started",
            description: "The absolute basics of Hierarchy, Views, and Tasks for new users.",
            duration: "25 min",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600",
            tags: ["Basics", "Onboarding"]
        },
        {
            id: "beg-2",
            title: "Views Explained",
            description: "List, Board, Calendar, and Gantt. When to use which view for your work.",
            duration: "30 min",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
            tags: ["Views", "Productivity"]
        },
        {
            id: "beg-3",
            title: "Custom Fields Masterclass",
            description: "How to customize ClickUp to fit your exact data needs.",
            duration: "35 min",
            image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=600",
            tags: ["Customization"]
        }
    ]
};

export default function WebinarsPage() {
    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-purple-100 selection:text-purple-900">
            <Navbar />
            <main>
                <WebinarsHero />

                <WebinarsCategory
                    title="Feature Fest Webinars"
                    description="Deep dives into our latest and greatest features."
                    webinars={MOCK_DATA.featureFest}
                    bgColor="bg-gray-50/50"
                />

                <WebinarsCategory
                    title="Community Webinars"
                    description="Learn from other teams and industry experts."
                    webinars={MOCK_DATA.community}
                    bgColor="bg-white"
                />

                <WebinarsCategory
                    title="Beginner Webinars"
                    description="Just starting out? These sessions are for you."
                    webinars={MOCK_DATA.beginner}
                    bgColor="bg-gray-50/50"
                />

                {/* Simple CTA Section */}
                <section className="py-24 bg-[#292D34] text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                            Ready to learn more?
                        </h2>
                        <a href="https://www.youtube.com/c/ClickUp" target="_blank" className="inline-block px-8 py-4 bg-[#E01E5A] text-white font-bold rounded-xl hover:bg-[#C01548] transition-colors shadow-lg shadow-pink-900/20">
                            Visit our YouTube Channel
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
