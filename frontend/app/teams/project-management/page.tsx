"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PMHero } from "@/components/teams/project-management/PMHero";
import { PMFeatures } from "@/components/teams/project-management/PMFeatures";
import { PMViews } from "@/components/teams/project-management/PMViews";
import { PMReviews } from "@/components/teams/project-management/PMReviews";
import { PMCTA } from "@/components/teams/project-management/PMCTA";

export default function ProjectManagementPage() {
    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-purple-100 selection:text-purple-900">
            <Navbar />
            <main className="pt-20">
                <PMHero />
                <PMReviews />
                <PMFeatures />
                <PMViews />
                <PMCTA />
            </main>
            <Footer />
        </div>
    );
}
