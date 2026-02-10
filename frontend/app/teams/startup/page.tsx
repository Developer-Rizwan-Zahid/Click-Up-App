"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StartupHero } from "@/components/teams/startup/StartupHero";
import { StartupFeatures } from "@/components/teams/startup/StartupFeatures";
import { StartupTemplates } from "@/components/teams/startup/StartupTemplates";
import { StartupIntegrations } from "@/components/teams/startup/StartupIntegrations";
import { StartupProgram } from "@/components/teams/startup/StartupProgram";
import { StartupCTA } from "@/components/teams/startup/StartupCTA";

export default function StartupPage() {
    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-purple-100 selection:text-purple-900">
            <Navbar />
            <main>
                <StartupHero />
                <StartupFeatures />
                <StartupTemplates />
                <StartupProgram />
                <StartupIntegrations />
                <StartupCTA />
            </main>
            <Footer />
        </div>
    );
}
