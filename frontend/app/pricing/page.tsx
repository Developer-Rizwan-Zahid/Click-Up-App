"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingPlans } from "@/components/pricing/PricingPlans";
import { PricingAddon } from "@/components/pricing/PricingAddon";
import { PricingTrust } from "@/components/pricing/PricingTrust";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";

export default function PricingPage() {
    const [billingCycle, setBillingCycle] = useState<"yearly" | "monthly">("yearly");

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PricingHero billingCycle={billingCycle} setBillingCycle={setBillingCycle} />
            <PricingPlans billingCycle={billingCycle} />
            <PricingAddon />
            <PricingTrust />
            <PricingFAQ />

            <Footer />
        </main>
    );
}
