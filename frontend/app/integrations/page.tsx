import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { IntegrationsHero } from "@/components/integrations/IntegrationsHero";
import { IntegrationsGrid } from "@/components/integrations/IntegrationsGrid";
import { IntegrationsImport } from "@/components/integrations/IntegrationsImport";
import { IntegrationsApi } from "@/components/integrations/IntegrationsApi";

export default function IntegrationsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <main className="flex-grow">
                <IntegrationsHero />
                <IntegrationsGrid />
                <IntegrationsImport />
                <IntegrationsApi />
            </main>
            <Footer />
        </div>
    );
}
