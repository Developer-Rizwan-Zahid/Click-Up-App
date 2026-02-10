"use client";

import { FloatingNavbar } from "@/components/FloatingNavbar";
import { Footer } from "@/components/Footer";
import { PmoHero } from "@/components/templates/pmo/PmoHero";
import { PmoHighlights } from "@/components/templates/pmo/PmoHighlights";
import { PmoDescription } from "@/components/templates/pmo/PmoDescription";
import { PmoHowTo } from "@/components/templates/pmo/PmoHowTo";
import { PmoRelated } from "@/components/templates/pmo/PmoRelated";
import { PmoCTA } from "@/components/templates/pmo/PmoCTA";

export default function PmoTemplatePage() {
    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-blue-100 selection:text-blue-900">
            <FloatingNavbar />
            <main>
                <PmoHero />
                <PmoHighlights />
                <PmoDescription />
                <PmoHowTo />
                <PmoRelated />
                <PmoCTA />
            </main>
            <Footer />
        </div>
    );
}
