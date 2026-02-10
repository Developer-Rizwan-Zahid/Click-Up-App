import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import KanbanHero from "@/components/features/kanban/KanbanHero";
import KanbanFeatures from "@/components/features/kanban/KanbanFeatures";
import KanbanBottomCta from "@/components/features/kanban/KanbanBottomCta";

export default function KanbanBoardPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-16">
                <KanbanHero />
                <KanbanFeatures />
                <KanbanBottomCta />
            </div>
            <Footer />
        </main>
    );
}
