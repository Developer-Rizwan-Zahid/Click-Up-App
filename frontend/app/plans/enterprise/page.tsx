"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EnterpriseHero } from "@/components/plans/enterprise/EnterpriseHero";
import { EnterpriseFeatures } from "@/components/plans/enterprise/EnterpriseFeatures";
import { EnterpriseSecurity } from "@/components/plans/enterprise/EnterpriseSecurity";
import { EnterpriseSuccess } from "@/components/plans/enterprise/EnterpriseSuccess";
import { EnterpriseTestimonials } from "@/components/plans/enterprise/EnterpriseTestimonials";
import { EnterpriseCTA } from "@/components/plans/enterprise/EnterpriseCTA";

export default function EnterprisePage() {
    return (
        <div className="min-h-screen bg-[#0B0D15] text-white font-sans selection:bg-blue-900 selection:text-white dark">
            <Navbar />
            <main>
                <EnterpriseHero />
                <EnterpriseFeatures />
                <EnterpriseSecurity />
                <EnterpriseSuccess />
                <EnterpriseTestimonials />
                <EnterpriseCTA />
            </main>
            <Footer />
        </div>
    );
}
