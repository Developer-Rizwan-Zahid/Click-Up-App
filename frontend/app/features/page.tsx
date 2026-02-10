import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FeaturesHero } from "@/components/features/landing/FeaturesHero";
import { FeaturesOverview } from "@/components/features/landing/FeaturesOverview";
import { FeaturesViews } from "@/components/features/landing/FeaturesViews";
import { FeaturesCollaboration } from "@/components/features/landing/FeaturesCollaboration";
import { FeaturesMore } from "@/components/features/landing/FeaturesMore";

export default function FeaturesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Navbar />
            <main className="flex-grow">
                <FeaturesHero />
                <FeaturesOverview />
                <FeaturesViews />
                <FeaturesCollaboration />
                <FeaturesMore />
            </main>
            <Footer />
        </div>
    );
}
