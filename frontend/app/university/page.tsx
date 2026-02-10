import { UniversityNavbar } from "@/components/university/UniversityNavbar";
import UniversityHero from "@/components/university/UniversityHero";
import UniversityPaths from "@/components/university/UniversityPaths";
import UniversityCatalog from "@/components/university/UniversityCatalog";
import UniversityLearningModes from "@/components/university/UniversityLearningModes";
import UniversityFooter from "@/components/university/UniversityFooter";

export default function UniversityPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900">
            <UniversityNavbar />
            <main>
                <UniversityHero />
                <UniversityPaths />
                <UniversityCatalog />
                <UniversityLearningModes />
            </main>
            <UniversityFooter />
        </div>
    );
}
