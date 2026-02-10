"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import { HomeSecondarySidebar } from "@/components/home/HomeSecondarySidebar";
import { HomeContent } from "@/components/home/HomeContent";

export default function HomePage() {
    return (
        <div className="flex h-screen w-full bg-[#FAFAFA] overflow-hidden">
            {/* Main Navigation Rail (Black Sidebar) */}
            <Sidebar />

            {/* Home Secondary Sidebar */}
            <HomeSecondarySidebar />

            {/* Main Content Area */}
            <HomeContent />
        </div>
    );
}
