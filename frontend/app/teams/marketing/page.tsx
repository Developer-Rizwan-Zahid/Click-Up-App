"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MarketingHero } from "@/components/teams/marketing/MarketingHero";
import { MarketingFeatures } from "@/components/teams/marketing/MarketingFeatures";
import { MarketingIntegrations } from "@/components/teams/marketing/MarketingIntegrations";
import { MarketingTemplates } from "@/components/teams/marketing/MarketingTemplates";
import { MarketingResources } from "@/components/teams/marketing/MarketingResources";
import { MarketingCTA } from "@/components/teams/marketing/MarketingCTA";

export default function MarketingPage() {
    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-pink-100 selection:text-pink-900">
            <Navbar />
            <main>
                <MarketingHero />
                <MarketingFeatures />
                <MarketingIntegrations />
                <MarketingTemplates />
                <MarketingResources />
                <MarketingCTA />
            </main>
            <Footer />
        </div>
    );
}
