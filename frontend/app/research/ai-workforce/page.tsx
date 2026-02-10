import { SprawlHeader } from "@/components/sprawl/SprawlHeader";
import { SprawlHero } from "@/components/sprawl/SprawlHero";
import { SprawlQuote } from "@/components/sprawl/SprawlQuote";
import { SprawlContent } from "@/components/sprawl/SprawlContent";
import { SprawlFooter } from "@/components/sprawl/SprawlFooter";

export default function AiWorkforcePage() {
    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-pink-500/30">
            <SprawlHeader />
            <SprawlHero />
            <SprawlQuote />
            <SprawlContent />
            <SprawlFooter />
        </main>
    );
}
