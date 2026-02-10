import { UniversityNavbar } from "@/components/university/UniversityNavbar";
import UniversityFooter from "@/components/university/UniversityFooter";
import WebinarsHero from "@/components/university/webinars/WebinarsHero";
import WebinarsSidebar from "@/components/university/webinars/WebinarsSidebar";
import WebinarsGrid from "@/components/university/webinars/WebinarsGrid";

export default function WebinarsPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans">
            <UniversityNavbar />
            <WebinarsHero />

            <main className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    <WebinarsSidebar />
                    <WebinarsGrid />
                </div>
            </main>

            <UniversityFooter />
        </div>
    );
}
