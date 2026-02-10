"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HelpCenterHero } from "@/components/help-center/HelpCenterHero";
import { HelpCenterCategories } from "@/components/help-center/HelpCenterCategories";
import { HelpCenterPromoted } from "@/components/help-center/HelpCenterPromoted";
import { HelpCenterContact } from "@/components/help-center/HelpCenterContact";
import { HelpCenterNavbar } from "@/components/help-center/HelpCenterNavbar";

export default function HelpCenterPage() {
    return (
        <div className="min-h-screen bg-gray-50 text-slate-900 font-sans">
            <HelpCenterNavbar />
            <main className="pt-16">
                <HelpCenterHero />
                <HelpCenterCategories />
                <HelpCenterPromoted />
                <HelpCenterContact />
            </main>
            <Footer />
        </div>
    );
}
