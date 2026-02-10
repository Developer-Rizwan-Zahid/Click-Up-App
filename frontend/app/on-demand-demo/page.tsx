"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DemoHero } from "@/components/on-demand-demo/DemoHero";
import { DemoWorkflows } from "@/components/on-demand-demo/DemoWorkflows";
import { DemoLearnMore } from "@/components/on-demand-demo/DemoLearnMore";
import { DemoCTA } from "@/components/on-demand-demo/DemoCTA";

export default function OnDemandDemoPage() {
    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-purple-100 selection:text-purple-900">
            <Navbar />
            <main className="pt-28">
                <DemoHero />
                <DemoWorkflows />
                <DemoLearnMore />
                <DemoCTA />
            </main>
            <Footer />
        </div>
    );
}
