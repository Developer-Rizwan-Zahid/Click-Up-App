"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FormsHero from "@/components/features/forms/FormsHero";
import FormsLogos from "@/components/features/forms/FormsLogos";
import FormsComparison from "@/components/features/forms/FormsComparison";
import FormsInteractive from "@/components/features/forms/FormsInteractive";
import FormsFeatures from "@/components/features/forms/FormsFeatures";
import FormsTemplates from "@/components/features/forms/FormsTemplates";
import FormsCTA from "@/components/features/forms/FormsCTA";

export default function FormsPage() {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            <FormsHero />
            <FormsLogos />
            <FormsComparison />
            <FormsInteractive />
            <FormsFeatures />
            <FormsTemplates />
            <FormsCTA />

            <Footer />
        </main>
    );
}
