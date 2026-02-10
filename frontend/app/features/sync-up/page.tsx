import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import ChatFooter from "@/components/features/chat/ChatFooter";
import SyncUpHero from "@/components/features/sync-up/SyncUpHero";
import SyncUpAiSummary from "@/components/features/sync-up/SyncUpAiSummary";
import { Footer } from "@/components/Footer";

export default function SyncUpPage() {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />
            <div className="pt-16">
                <SyncUpHero />
                <SyncUpAiSummary />
            <Footer />
            </div>
        </main>
    );
}
