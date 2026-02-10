"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProServicesHero } from "@/components/professional-services/ProServicesHero";
import { ProServicesServices } from "@/components/professional-services/ProServicesServices";
import { ProServicesResources } from "@/components/professional-services/ProServicesResources";

export default function ProfessionalServicesPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans">
            <Navbar />
            <main className="pt-20">
                <ProServicesHero />
                <ProServicesServices />
                <ProServicesResources />
            </main>
            <Footer />
        </div>
    );
}
