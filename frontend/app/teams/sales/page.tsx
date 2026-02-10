"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SalesHero } from "@/components/teams/sales/SalesHero";
import { SalesFeatures } from "@/components/teams/sales/SalesFeatures";
import { SalesIntegrations } from "@/components/teams/sales/SalesIntegrations";
import { SalesTemplates } from "@/components/teams/sales/SalesTemplates";
import { SalesTestimonials } from "@/components/teams/sales/SalesTestimonials";
import { SalesCTA } from "@/components/teams/sales/SalesCTA";

export default function SalesPage() {
    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-orange-100 selection:text-orange-900">
            <Navbar />
            <main>
                <SalesHero />
                <SalesFeatures />
                <SalesIntegrations />
                <SalesTemplates />
                <SalesTestimonials />
                <SalesCTA />
            </main>
            <Footer />
        </div>
    );
}
