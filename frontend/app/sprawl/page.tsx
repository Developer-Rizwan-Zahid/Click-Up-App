import { SprawlHeader } from "@/components/sprawl/SprawlHeader";
import { SprawlLandingHero } from "@/components/sprawl/SprawlLandingHero";
import { SprawlMission } from "@/components/sprawl/SprawlMission";
import { SprawlCatalog } from "@/components/sprawl/SprawlCatalog";
import { SprawlFooter } from "@/components/sprawl/SprawlFooter";

export default function SprawlPage() {
    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-pink-500/30">
            <SprawlHeader />
            <SprawlLandingHero />
            <SprawlMission />
            <SprawlCatalog />
            <SprawlFooter /> 
        </main>
    );
}
