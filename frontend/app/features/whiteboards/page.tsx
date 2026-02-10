import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import WhiteboardsHero from "@/components/features/whiteboards/WhiteboardsHero";
import WhiteboardsIdeation from "@/components/features/whiteboards/WhiteboardsIdeation";
import WhiteboardsExecution from "@/components/features/whiteboards/WhiteboardsExecution";
import WhiteboardsCollaboration from "@/components/features/whiteboards/WhiteboardsCollaboration";
import WhiteboardsPossibilities from "@/components/features/whiteboards/WhiteboardsPossibilities";
import WhiteboardsCaseStudy from "@/components/features/whiteboards/WhiteboardsCaseStudy";
import WhiteboardsFeaturesGrid from "@/components/features/whiteboards/WhiteboardsFeaturesGrid";
import WhiteboardsTestimonials from "@/components/features/whiteboards/WhiteboardsTestimonials";
import WhiteboardsLogoSection from "@/components/features/whiteboards/WhiteboardsLogoSection";
import WhiteboardsTemplates from "@/components/features/whiteboards/WhiteboardsTemplates";
import WhiteboardsFooter from "@/components/features/whiteboards/WhiteboardsFooter";

export default function WhiteboardsPage() {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            <WhiteboardsHero />
            <WhiteboardsIdeation />
            <WhiteboardsExecution />
            <WhiteboardsCollaboration />
            <WhiteboardsPossibilities />
            <WhiteboardsCaseStudy />
            <WhiteboardsFeaturesGrid />
            <WhiteboardsTestimonials />
            <WhiteboardsLogoSection />
            <WhiteboardsTemplates />
            <WhiteboardsFooter />

            <Footer />
        </main>
    );
}
