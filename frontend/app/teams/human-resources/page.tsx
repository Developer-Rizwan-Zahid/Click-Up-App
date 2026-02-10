"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HrHero } from "@/components/teams/human-resources/HrHero";
import { HrFeatures } from "@/components/teams/human-resources/HrFeatures";
import { HrIntegrations } from "@/components/teams/human-resources/HrIntegrations";
import { HrTemplates } from "@/components/teams/human-resources/HrTemplates";
import { HrTestimonials } from "@/components/teams/human-resources/HrTestimonials";
import { HrCTA } from "@/components/teams/human-resources/HrCTA";

export default function HrPage() {
    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-green-100 selection:text-green-900">
            <Navbar />
            <main>
                <HrHero />
                <HrFeatures />
                <HrIntegrations />
                <HrTemplates />
                <HrTestimonials />
                <HrCTA />
            </main>
            <Footer />
        </div>
    );
}
