"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VideosHero } from "@/components/videos/VideosHero";
import { VideosSidebar } from "@/components/videos/VideosSidebar";
import { VideosGrid } from "@/components/videos/VideosGrid";
import { useState } from "react";

// Mock Data
const CATEGORIES = [
    "Getting Started",
    "Features",
    "Tutorials",
    "Integrations",
    "Fun Stuff",
    "Third-Party"
];

const MOCK_VIDEOS = [
    // Getting Started
    {
        id: "gs-1",
        category: "Getting Started",
        title: "ClickUp 101: The Basics",
        description: "Learn the fundamentals of ClickUp in this comprehensive guide.",
        thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
        duration: "5:23"
    },
    {
        id: "gs-2",
        category: "Getting Started",
        title: "Setting up your Workspace",
        description: "A step-by-step guide to configuring your first workspace.",
        thumbnail: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&q=80&w=600",
        duration: "3:45"
    },
    {
        id: "gs-3",
        category: "Getting Started",
        title: "Inviting your Team",
        description: "How to add members and manage permissions.",
        thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
        duration: "2:10"
    },
    // Features
    {
        id: "ft-1",
        category: "Features",
        title: "Mastering Automations",
        description: "Save time by automating repetitive tasks.",
        thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
        duration: "4:15"
    },
    {
        id: "ft-2",
        category: "Features",
        title: "Dashboards Deep Dive",
        description: "Visualize your work with powerful custom dashboards.",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
        duration: "6:30"
    },
    // Tutorials
    {
        id: "tut-1",
        category: "Tutorials",
        title: "Agile Project Management",
        description: "How to run sprints and manage backlogs in ClickUp.",
        thumbnail: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
        duration: "8:45"
    },
    {
        id: "tut-2",
        category: "Tutorials",
        title: "CRM for Sales Teams",
        description: "Track leads and close deals closer to your work.",
        thumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600",
        duration: "7:20"
    },
    // Integrations
    {
        id: "int-1",
        category: "Integrations",
        title: "Slack + ClickUp",
        description: "Create tasks directly from Slack messages.",
        thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600",
        duration: "2:50"
    }
];

export default function VideosPage() {
    const [activeCategory, setActiveCategory] = useState("Getting Started");

    const filteredVideos = activeCategory === "All"
        ? MOCK_VIDEOS
        : MOCK_VIDEOS.filter(v => v.category === activeCategory);

    // If no videos for the category (placeholder), show generic ones from Getting Started
    const displayVideos = filteredVideos.length > 0 ? filteredVideos : MOCK_VIDEOS.slice(0, 3);

    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-purple-100 selection:text-purple-900">
            <Navbar />
            <main>
                <VideosHero />

                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar - Hidden on mobile, sticky on desktop */}
                        <VideosSidebar
                            categories={CATEGORIES}
                            activeCategory={activeCategory}
                            onSelectCategory={setActiveCategory}
                        />

                        {/* Main Grid Content */}
                        <VideosGrid
                            videos={displayVideos}
                            category={activeCategory}
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
