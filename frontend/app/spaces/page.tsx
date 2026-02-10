"use client";

import { useEffect, useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Topbar } from "@/components/dashboard/Topbar";
import { SpacesHeader } from "@/components/spaces/SpacesHeader";
import { SpaceOverview } from "@/components/spaces/SpaceOverview";
import { SpaceListView } from "@/components/spaces/SpaceListView";

export default function SpacesPage() {
    const [activeTab, setActiveTab] = useState<'overview' | 'list'>('overview');
    const [spaceData, setSpaceData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSpaceData = async () => {
            try {
                const token = localStorage.getItem('token');
                // Ensure token exists, else redirect (omitted for brevity)

                const res = await fetch('http://localhost:5000/api/spaces/default', {
                    headers: { Authorization: `Bearer ${token}` }
                });

                if (res.ok) {
                    const data = await res.json();
                    setSpaceData(data);
                }
            } catch (e) {
                console.error("Failed to fetch space", e);
            } finally {
                setLoading(false);
            }
        };
        fetchSpaceData();
    }, []);

    // Default space name if loading or failed
    const spaceName = spaceData?.space?.name || "Team Space";

    return (
        <div className="flex h-screen w-full bg-white text-[#292D34]">
            <Sidebar />
            <main className="flex-1 flex flex-col overflow-hidden min-w-0">
                <Topbar />

                {/* Space Content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    <SpacesHeader
                        spaceName={spaceName}
                        activeTab={activeTab}
                        onTabChange={setActiveTab}
                    />

                    <div className="flex-1 overflow-hidden">
                        {loading && (
                            <div className="h-full flex items-center justify-center text-gray-400">Loading Space...</div>
                        )}
                        {!loading && activeTab === 'overview' && (
                            <SpaceOverview data={spaceData} />
                        )}
                        {!loading && activeTab === 'list' && (
                            <SpaceListView data={spaceData} />
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
