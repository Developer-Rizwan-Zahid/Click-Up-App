"use client";

import { BrainPricingHero } from "@/components/brain/pricing/BrainPricingHero";
import { BrainPricingTable } from "@/components/brain/pricing/BrainPricingTable";
import { BrainPricingAddons } from "@/components/brain/pricing/BrainPricingAddons";
import { BrainPricingTrust } from "@/components/brain/pricing/BrainPricingTrust";
import { EnterpriseSearchCta } from "@/components/brain/enterprise-search/EnterpriseSearchCta"; // Reusing CTA
import { Navbar } from "@/components/Navbar";


export default function BrainPricingPage() {
    return (
        <div className="bg-black min-h-screen text-white font-sans selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
            <Navbar />
            <main>
                <BrainPricingHero />
                <BrainPricingTable />
                <BrainPricingAddons />
                <BrainPricingTrust />
                <EnterpriseSearchCta />
            </main>
        </div>
    );
}