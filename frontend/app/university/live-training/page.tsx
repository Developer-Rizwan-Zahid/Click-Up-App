import { UniversityNavbar } from "@/components/university/UniversityNavbar";
import UniversityFooter from "@/components/university/UniversityFooter";
import LiveTrainingHero from "@/components/university/LiveTrainingHero";
import LiveTrainingList from "@/components/university/LiveTrainingList";

export default function LiveTrainingPage() {
    return (
        <div className="min-h-screen bg-white">
            <UniversityNavbar />
            <main>
                <LiveTrainingHero />
                <LiveTrainingList />
            </main>
            <UniversityFooter />
        </div>
    );
}
