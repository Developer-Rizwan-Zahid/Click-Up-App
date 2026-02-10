import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ClipsHero from "@/components/features/clips/ClipsHero";
import ClipsComparison from "@/components/features/clips/ClipsComparison";
import ClipsFeatures from "@/components/features/clips/ClipsFeatures";
import ClipsPricing from "@/components/features/clips/ClipsPricing";

import ClipsCommunication from "@/components/features/clips/ClipsCommunication";
import ClipsDemo from "@/components/features/clips/ClipsDemo";
import ClipsBottomCta from "@/components/features/clips/ClipsBottomCta";

export default function ClipsPage() {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />
            <div className="pt-16">
                <ClipsHero />
                <ClipsComparison />
                <ClipsFeatures />
                <ClipsCommunication />
                <ClipsDemo />
                <ClipsBottomCta />
                <Footer />
            </div>
        </main>
    );
}
