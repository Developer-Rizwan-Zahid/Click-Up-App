"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ItPmoHero } from "@/components/teams/it-pmo/ItPmoHero";
import { ItPmoAI } from "@/components/teams/it-pmo/ItPmoAI";
import { ItPmoFeatures } from "@/components/teams/it-pmo/ItPmoFeatures";
import { ItPmoIntegrations } from "@/components/teams/it-pmo/ItPmoIntegrations";
import { ItPmoTemplates } from "@/components/teams/it-pmo/ItPmoTemplates";
import { ItPmoTestimonials } from "@/components/teams/it-pmo/ItPmoTestimonials";
import { ItPmoCTA } from "@/components/teams/it-pmo/ItPmoCTA";

export default function ItPmoPage() {
    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-purple-100 selection:text-purple-900">
            <Navbar />
            <main>
                <ItPmoHero />
                <ItPmoAI />
                <ItPmoFeatures />
                <ItPmoIntegrations />
                <ItPmoTemplates />
                <ItPmoTestimonials />
                <ItPmoCTA />
            </main>
            <Footer />
        </div>
    );
}
