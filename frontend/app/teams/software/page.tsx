"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SoftwareHero } from "@/components/teams/software/SoftwareHero";
import { SoftwareFeatures } from "@/components/teams/software/SoftwareFeatures";
import { SoftwareIntegrations } from "@/components/teams/software/SoftwareIntegrations";
import { SoftwareCTA } from "@/components/teams/software/SoftwareCTA";

export default function SoftwareTeamsPage() {
    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-purple-100 selection:text-purple-900">
            <Navbar />
            <main className="pt-20">
                <SoftwareHero />
                <SoftwareFeatures />
                <SoftwareIntegrations />
                <SoftwareCTA />
            </main>
            <Footer />
        </div>
    );
}
