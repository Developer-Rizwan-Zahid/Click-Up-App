"use client";

import {
    ChevronLeft,
    ChevronRight,
    Search,
    Bell,
    Settings,
    Grid3X3,
    Calendar as CalendarIcon,
    Plus
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface CalendarHeaderProps {
    currentDate: Date;
    setCurrentDate: (date: Date) => void;
    view: "month" | "week" | "day";
    setView: (view: "month" | "week" | "day") => void;
}

export const CalendarHeader = ({
    currentDate,
    setCurrentDate,
    view,
    setView
}: CalendarHeaderProps) => {

    const nextMonth = () => {
        const next = new Date(currentDate);
        next.setMonth(currentDate.getMonth() + 1);
        setCurrentDate(next);
    };

    const prevMonth = () => {
        const prev = new Date(currentDate);
        prev.setMonth(currentDate.getMonth() - 1);
        setCurrentDate(prev);
    };

    const goToToday = () => {
        setCurrentDate(new Date());
    };

    return (
        <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0 z-10">
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-4">
                    <h1 className="text-xl font-bold text-gray-900 min-w-[150px]">
                        {format(currentDate, "MMMM yyyy")}
                    </h1>

                    <div className="flex items-center bg-gray-50 rounded-lg p-1 border border-gray-200">
                        <button
                            onClick={prevMonth}
                            className="p-1 hover:bg-white hover:shadow-sm rounded transition-all text-gray-600"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={goToToday}
                            className="px-3 py-1 text-xs font-bold text-gray-700 hover:bg-white hover:shadow-sm rounded transition-all"
                        >
                            Today
                        </button>
                        <button
                            onClick={nextMonth}
                            className="p-1 hover:bg-white hover:shadow-sm rounded transition-all text-gray-600"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="h-6 w-px bg-gray-200" />

                <div className="flex items-center bg-gray-50 rounded-lg p-1 border border-gray-200">
                    <button
                        onClick={() => setView("month")}
                        className={cn(
                            "px-4 py-1.5 text-xs font-bold rounded transition-all",
                            view === "month" ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-900"
                        )}
                    >
                        Month
                    </button>
                    <button
                        onClick={() => setView("week")}
                        className={cn(
                            "px-4 py-1.5 text-xs font-bold rounded transition-all",
                            view === "week" ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-900"
                        )}
                    >
                        Week
                    </button>
                    <button
                        onClick={() => setView("day")}
                        className={cn(
                            "px-4 py-1.5 text-xs font-bold rounded transition-all",
                            view === "day" ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-900"
                        )}
                    >
                        Day
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-9 pr-4 py-1.5 bg-gray-50 border border-transparent focus:border-blue-500 focus:bg-white rounded-lg text-sm transition-all w-48 outline-none"
                    />
                </div>

                <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                    <Plus size={20} />
                </button>

                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md shadow-blue-200 transition-all">
                    <CalendarIcon size={16} />
                    <span>Create Event</span>
                </button>
            </div>
        </div>
    );
};
