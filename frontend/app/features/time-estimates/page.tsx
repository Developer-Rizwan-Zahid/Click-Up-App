"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import TimeEstimatesHero from "@/components/features/time-estimates/TimeEstimatesHero";
import TimeEstimatesSplit from "@/components/features/time-estimates/TimeEstimatesSplit";
import TimeEstimatesReporting from "@/components/features/time-estimates/TimeEstimatesReporting";
import TimeEstimatesCTA from "@/components/features/time-estimates/TimeEstimatesCTA";

export default function TimeEstimatesPage() {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            <TimeEstimatesHero />
            <TimeEstimatesSplit />
            <TimeEstimatesReporting />
            <TimeEstimatesCTA />

            <Footer />
        </main>
    );
}
