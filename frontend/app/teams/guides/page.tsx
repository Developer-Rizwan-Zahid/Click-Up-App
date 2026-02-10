"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GuidesHero } from "@/components/teams/guides/GuidesHero";
import { GuidesGrid } from "@/components/teams/guides/GuidesGrid";

export default function GuidesPage() {
    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-purple-100 selection:text-purple-900">
            <Navbar />
            <main>
                <GuidesHero />
                <GuidesGrid />
            </main>
            <Footer />
        </div>
    );
}
