import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AutomationsHero from "@/components/features/automations/AutomationsHero";
import AutomationsAiBuilder from "@/components/features/automations/AutomationsAiBuilder";
import AutomationsTabs from "@/components/features/automations/AutomationsTabs";
import AutomationsBentoGrid from "@/components/features/automations/AutomationsBentoGrid";
import AutomationsCta from "@/components/features/automations/AutomationsCta";

export const metadata = {
    title: "ClickUp Automations | Let ClickUp do your team’s busywork",
    description: "Select from 100+ Automations to streamline workflows, tackle routine tasks, manage project handoffs, and so much more.",
};

export default function AutomationsPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-indigo-500/30">
            <Navbar />

            {/* Content Sections */}
            <div className="flex flex-col">
                <AutomationsHero />
                <AutomationsAiBuilder />
                <AutomationsTabs />
                <AutomationsBentoGrid />
                <AutomationsCta />
            </div>

            <Footer />
        </main>
    );
}
