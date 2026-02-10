"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import CalendarHero from "@/components/features/calendar/CalendarHero";
import CalendarComparison from "@/components/features/calendar/CalendarComparison";
import CalendarBento from "@/components/features/calendar/CalendarBento";
import CalendarTabs from "@/components/features/calendar/CalendarTabs";
import CalendarFeaturesGrid from "@/components/features/calendar/CalendarFeaturesGrid";
import CalendarCTA from "@/components/features/calendar/CalendarCTA";

export default function CalendarPage() {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            <CalendarHero />
            <CalendarComparison />
            <CalendarBento />
            <CalendarTabs />
            <CalendarFeaturesGrid />
            <CalendarCTA />

            <Footer />
        </main>
    );
}
