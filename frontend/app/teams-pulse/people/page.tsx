import { TeamsPulse } from "@/components/teams/TeamsPulse";
import { Sidebar } from "@/components/dashboard/Sidebar";

export default function TeamsPulsePage() {
    return (
        <div className="flex h-screen bg-black overflow-hidden">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 bg-[#FAFAFA] rounded-tl-[32px] overflow-hidden ml-[-20px] shadow-2xl z-10">
                <TeamsPulse />
            </main>
        </div>
    );
}
