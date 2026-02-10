import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import GanttHero from "@/components/features/gantt/GanttHero";
import GanttComparison from "@/components/features/gantt/GanttComparison";
import GanttFeatures from "@/components/features/gantt/GanttFeatures";
import GanttBottomCta from "@/components/features/gantt/GanttBottomCta";

export default function GanttChartViewPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-16">
                <GanttHero />
                <GanttComparison />
                <GanttFeatures />
                <GanttBottomCta />
            </div>
            <Footer />
        </main>
    );
}
