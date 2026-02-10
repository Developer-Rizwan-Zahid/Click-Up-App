"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import { CalendarSidebar } from "@/components/dashboard/calendar/CalendarSidebar";
import { CalendarHeader } from "@/components/dashboard/calendar/CalendarHeader";
import { CalendarGrid } from "@/components/dashboard/calendar/CalendarGrid";
import { useState } from "react";

export default function CalendarPage() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [view, setView] = useState<"month" | "week" | "day">("month");

    return (
        <div className="flex h-screen w-full bg-[#FAFAFA] overflow-hidden">
            <Sidebar />
            <CalendarSidebar />

            <div className="flex-1 flex flex-col min-w-0 h-full">
                <CalendarHeader
                    currentDate={currentDate}
                    setCurrentDate={setCurrentDate}
                    view={view}
                    setView={setView}
                />
                <div className="flex-1 overflow-auto p-4 lg:p-6">
                    <CalendarGrid
                        currentDate={currentDate}
                        view={view}
                    />
                </div>
            </div>
        </div>
    );
}
