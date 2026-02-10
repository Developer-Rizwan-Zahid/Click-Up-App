"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MarketingHero } from "@/components/templates/marketing/MarketingHero";
import { MarketingGrid } from "@/components/templates/marketing/MarketingGrid";

export default function MarketingPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <MarketingHero />
                <MarketingGrid />
            </main>
            <Footer />
        </div>
    );
}
