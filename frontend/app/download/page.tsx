"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DownloadHero } from "@/components/download/DownloadHero";
import { DownloadPlatforms } from "@/components/download/DownloadPlatforms";
import { MobileDownloads } from "@/components/download/MobileDownloads";
import { BrowserExtensions } from "@/components/download/BrowserExtensions";

export default function DownloadPage() {
    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-purple-100 selection:text-purple-900">
            <Navbar />
            <main className="pt-28 pb-20">
                <DownloadHero />
                <DownloadPlatforms />
                <MobileDownloads />
                <BrowserExtensions />
            </main>
            <Footer />
        </div>
    );
}
