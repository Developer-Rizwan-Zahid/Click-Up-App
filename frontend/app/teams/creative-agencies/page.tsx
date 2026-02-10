"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CreativeHero } from "@/components/teams/creative-agencies/CreativeHero";
import { CreativeEfficiency } from "@/components/teams/creative-agencies/CreativeEfficiency";
import { CreativeFeatures } from "@/components/teams/creative-agencies/CreativeFeatures";
import { CreativeTools } from "@/components/teams/creative-agencies/CreativeTools";
import { CreativeTestimonials } from "@/components/teams/creative-agencies/CreativeTestimonials";
import { CreativeCTA } from "@/components/teams/creative-agencies/CreativeCTA";

export default function CreativeAgenciesPage() {
    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-pink-100 selection:text-pink-900">
            <Navbar />
            <main>
                <CreativeHero />
                <CreativeEfficiency />
                <CreativeFeatures />
                <CreativeTools />
                <CreativeTestimonials />
                <CreativeCTA />
            </main>
            <Footer />
        </div>
    );
}
