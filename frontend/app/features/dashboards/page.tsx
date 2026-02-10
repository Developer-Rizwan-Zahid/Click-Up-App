
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import DashboardsHero from "@/components/features/dashboards/DashboardsHero";
import DashboardsReporting from "@/components/features/dashboards/DashboardsReporting";
import DashboardsTimeTracking from "@/components/features/dashboards/DashboardsTimeTracking";
import DashboardsCrm from "@/components/features/dashboards/DashboardsCrm";
import DashboardsAi from "@/components/features/dashboards/DashboardsAi";
import DashboardsWidgets from "@/components/features/dashboards/DashboardsWidgets";
import DashboardsBottomCta from "@/components/features/dashboards/DashboardsBottomCta";

export default function DashboardsPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            <Navbar />

            <DashboardsHero />
            <DashboardsReporting />
            <DashboardsTimeTracking />
            <DashboardsCrm />
            <DashboardsAi />
            <DashboardsWidgets />
            <DashboardsBottomCta />

            <Footer />
        </main>
    );
}
