import { EnterpriseSearchHero } from "./EnterpriseSearchHero";
import { EnterpriseSearchFeatures } from "./EnterpriseSearchFeatures";
import { EnterpriseSearchIntelligence } from "./EnterpriseSearchIntelligence";
import { EnterpriseSearchCta } from "./EnterpriseSearchCta";
import { NotetakerSecurity } from "@/components/brain/notetaker/NotetakerSecurity";
import { Navbar } from "@/components/Navbar";

export const EnterpriseSearchLanding = () => {
    return (
        <div className="bg-black min-h-screen text-white font-sans selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
            <Navbar />
            <main>
                <EnterpriseSearchHero />
                <EnterpriseSearchFeatures />
                <EnterpriseSearchIntelligence />
                <NotetakerSecurity />
                <EnterpriseSearchCta />
            </main>
        </div>
    );
};
