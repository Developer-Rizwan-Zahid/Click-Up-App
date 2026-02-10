"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import KnowledgeHero from "@/components/features/knowledge/KnowledgeHero";
import KnowledgeBento from "@/components/features/knowledge/KnowledgeBento";
import KnowledgeShowcase from "@/components/features/knowledge/KnowledgeShowcase";
import KnowledgeCTA from "@/components/features/knowledge/KnowledgeCTA";

export default function KnowledgeManagementPage() {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            <KnowledgeHero />
            <KnowledgeBento />
            <KnowledgeShowcase />
            <KnowledgeCTA />

            <Footer />
        </main>
    );
}
