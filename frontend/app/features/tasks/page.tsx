import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import TasksHero from "@/components/features/tasks/TasksHero";
import TasksComparison from "@/components/features/tasks/TasksComparison";
import TasksProductivity from "@/components/features/tasks/TasksProductivity";
import TasksAiFeatures from "@/components/features/tasks/TasksAiFeatures";
import TasksIntegrations from "@/components/features/tasks/TasksIntegrations";
import TasksInAction from "@/components/features/tasks/TasksInAction";
import TasksStandardFeatures from "@/components/features/tasks/TasksStandardFeatures";
import TasksEverything from "@/components/features/tasks/TasksEverything";
import TasksTemplates from "@/components/features/tasks/TasksTemplates";
import TasksBottomCta from "@/components/features/tasks/TasksBottomCta";

export default function TasksPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            <Navbar />

            <TasksHero />
            <TasksComparison />
            <TasksProductivity />
            <TasksAiFeatures />
            <TasksIntegrations />
            <TasksStandardFeatures />
            <TasksInAction />
            <TasksEverything />
            <TasksTemplates />
            <TasksBottomCta />

            <Footer />
        </main>
    );
}
