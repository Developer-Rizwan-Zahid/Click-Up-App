"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHome } from "@/components/dashboard/DashboardHome";

export default function Dashboard() {
    return (
        <div className="flex h-screen w-full bg-[#FAFAFA]">
            {/* Main Navigation Rail */}
            <Sidebar />

            {/* Dashboard Secondary Sidebar */}
            <DashboardSidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <DashboardHome />
            </div>
        </div>
    );
}

