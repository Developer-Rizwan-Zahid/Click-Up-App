"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OperationsHero } from "@/components/teams/operations/OperationsHero";
import { OperationsAI } from "@/components/teams/operations/OperationsAI";
import { OperationsFeatures } from "@/components/teams/operations/OperationsFeatures";
import { OperationsIntegrations } from "@/components/teams/operations/OperationsIntegrations";
import { OperationsTemplates } from "@/components/teams/operations/OperationsTemplates";
import { OperationsReviews } from "@/components/teams/operations/OperationsReviews";
import { OperationsFAQ } from "@/components/teams/operations/OperationsFAQ";
import { OperationsCTA } from "@/components/teams/operations/OperationsCTA";

export default function OperationsPage() {
    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-purple-100 selection:text-purple-900">
            <Navbar />
            <main>
                <OperationsHero />
                <OperationsAI />
                <OperationsFeatures />
                <OperationsIntegrations />
                <OperationsTemplates />
                <OperationsReviews />
                <OperationsFAQ />
                <OperationsCTA />
            </main>
            <Footer />
        </div>
    );
}
