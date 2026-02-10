"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EducationHero } from "@/components/teams/education/EducationHero";
import { EducationFeatures } from "@/components/teams/education/EducationFeatures";
import { EducationSolution } from "@/components/teams/education/EducationSolution";
import { EducationTemplates } from "@/components/teams/education/EducationTemplates";
import { EducationTestimonials } from "@/components/teams/education/EducationTestimonials";
import { EducationCTA } from "@/components/teams/education/EducationCTA";

export default function EducationPage() {
    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-blue-100 selection:text-blue-900">
            <Navbar />
            <main>
                <EducationHero />
                <EducationFeatures />
                <EducationSolution />
                <EducationTemplates />
                <EducationTestimonials />
                <EducationCTA />
            </main>
            <Footer />
        </div>
    );
}
