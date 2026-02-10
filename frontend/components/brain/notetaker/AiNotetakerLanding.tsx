import { NotetakerHero } from "./NotetakerHero";
import { NotetakerComparison } from "./NotetakerComparison";
import { NotetakerIntegration } from "./NotetakerIntegration";
import { NotetakerFeatures } from "./NotetakerFeatures";
import { NotetakerPricing } from "./NotetakerPricing";
import { GptSecurity } from "@/components/brain/gpt/GptSecurity";
import { BrainCta } from "@/components/brain/shared/BrainCta";
import { Navbar } from "@/components/Navbar";

export const AiNotetakerLanding = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            <Navbar />
            <main>
                <NotetakerHero />
                <NotetakerComparison />
                <NotetakerIntegration />
                <NotetakerFeatures />
                <NotetakerPricing />
                <GptSecurity />
                <BrainCta />
            </main>
        </div>
    );
};
