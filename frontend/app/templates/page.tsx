"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TemplatesLandingHero } from "@/components/templates/landing/TemplatesLandingHero";
import { TemplatesCategories } from "@/components/templates/landing/TemplatesCategories";
import { TemplatesFeatured } from "@/components/templates/landing/TemplatesFeatured";

export default function TemplatesHubPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <TemplatesLandingHero />
                <TemplatesCategories />
                <TemplatesFeatured />
            </main>
            <Footer />
        </div>
    );
}
