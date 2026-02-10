import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import InboxHero from "@/components/features/inbox/InboxHero";
import InboxFeatures from "@/components/features/inbox/InboxFeatures";

export default function InboxPage() {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />
            <div className="pt-16">
                <InboxHero />
                <InboxFeatures />
                <Footer />
            </div>
        </main>
    );
}
