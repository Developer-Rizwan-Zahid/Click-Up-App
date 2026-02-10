"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NonProfitHero } from "@/components/teams/non-profit/NonProfitHero";
import { NonProfitDiscount } from "@/components/teams/non-profit/NonProfitDiscount";
import { NonProfitFeatures } from "@/components/teams/non-profit/NonProfitFeatures";
import { NonProfitTestimonials } from "@/components/teams/non-profit/NonProfitTestimonials";
import { NonProfitIntegrations } from "@/components/teams/non-profit/NonProfitIntegrations";
import { NonProfitCTA } from "@/components/teams/non-profit/NonProfitCTA";

export default function NonProfitPage() {
    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-green-100 selection:text-green-900">
            <Navbar />
            <main>
                <NonProfitHero />
                <NonProfitDiscount />
                <NonProfitFeatures />
                <NonProfitTestimonials />
                <NonProfitIntegrations />
                <NonProfitCTA />
            </main>
            <Footer />
        </div>
    );
}
