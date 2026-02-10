import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TimeTrackingHero } from "@/components/features/project-time-tracking/TimeTrackingHero";
import { TimeTrackingComparison } from "@/components/features/project-time-tracking/TimeTrackingComparison";
import { TimeTrackingFeatures } from "@/components/features/project-time-tracking/TimeTrackingFeatures";
import { TimeTrackingDeepDive } from "@/components/features/project-time-tracking/TimeTrackingDeepDive";
import { TimeTrackingEstimates } from "@/components/features/project-time-tracking/TimeTrackingEstimates";
import { TimeTrackingGlobal } from "@/components/features/project-time-tracking/TimeTrackingGlobal";

export default function ProjectTimeTrackingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <main className="flex-grow">
                <TimeTrackingHero />
                <TimeTrackingComparison />
                <TimeTrackingFeatures />
                <TimeTrackingDeepDive />
                <TimeTrackingEstimates />
                <TimeTrackingGlobal />
            </main>
            <Footer />
        </div>
    );
}
