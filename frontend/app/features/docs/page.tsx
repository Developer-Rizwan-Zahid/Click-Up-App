import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import DocsHero from "@/components/features/docs/DocsHero";
import DocsComparison from "@/components/features/docs/DocsComparison";
import DocsFeatures from "@/components/features/docs/DocsFeatures";
import DocsAdvanced from "@/components/features/docs/DocsAdvanced";
import DocsSlash from "@/components/features/docs/DocsSlash";
import DocsIntegrations from "@/components/features/docs/DocsIntegrations";
import DocsRelatedArticles from "@/components/features/docs/DocsRelatedArticles";


export default function DocsPage() {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />
            <div className="pt-16">
                <DocsHero />
                <DocsComparison />
                <DocsFeatures />
                <DocsAdvanced />
                <DocsSlash />
                <DocsIntegrations />
                <DocsRelatedArticles />
                <Footer />
            </div>
        </main>
    );
}
