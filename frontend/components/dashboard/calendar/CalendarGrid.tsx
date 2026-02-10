"use client";

import {
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    isSameMonth,
    isSameDay,
    addDays,
    format,
    startOfDay
} from "date-fns";
import { cn } from "@/lib/utils";

interface CalendarGridProps {
    currentDate: Date;
    view: "month" | "week" | "day";
}

export const CalendarGrid = ({ currentDate, view }: CalendarGridProps) => {

    const renderMonth = () => {
        const monthStart = startOfMonth(currentDate);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";

        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, "d");
                const cloneDay = day;

                days.push(
                    <div
                        key={day.toString()}
                        className={cn(
                            "h-32 lg:h-40 border-r border-b border-gray-100 p-2 transition-all relative group",
                            !isSameMonth(day, monthStart) ? "bg-gray-50/50 text-gray-400" : "bg-white text-gray-900",
                            isSameDay(day, new Date()) ? "bg-blue-50/30" : "hover:bg-gray-50"
                        )}
                    >
                        <div className="flex justify-between items-start">
                            <span
                                className={cn(
                                    "text-sm font-bold flex items-center justify-center rounded-full transition-all",
                                    isSameDay(day, new Date())
                                        ? "w-7 h-7 bg-blue-600 text-white shadow-md shadow-blue-200"
                                        : "w-7 h-7 group-hover:bg-gray-200"
                                )}
                            >
                                {formattedDate}
                                {isSameDay(day, new Date()) && format(day, "d") === "1" && (
                                    <span className="ml-1 text-[10px] font-medium">{format(day, "MMM")}</span>
                                )}
                                {!isSameDay(day, new Date()) && formattedDate === "1" && (
                                    <span className="ml-1 text-[10px] font-medium text-gray-500 uppercase">{format(day, "MMM")}</span>
                                )}
                            </span>
                        </div>

                        {/* Event Placeholders */}
                        <div className="mt-2 space-y-1 overflow-hidden">
                            {isSameDay(day, addDays(new Date(), 1)) && (
                                <div className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-1 rounded border-l-2 border-green-500 truncate cursor-pointer hover:bg-green-200 transition-colors">
                                    Product Launch
                                </div>
                            )}
                            {isSameDay(day, addDays(new Date(), 3)) && (
                                <div className="text-[10px] font-bold bg-purple-100 text-purple-700 px-2 py-1 rounded border-l-2 border-purple-500 truncate cursor-pointer hover:bg-purple-200 transition-colors">
                                    Design Sync
                                </div>
                            )}
                        </div>

                        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                                <span className="text-lg font-bold leading-none">+</span>
                            </button>
                        </div>
                    </div>
                );
                day = addDays(day, 1);
            }
            rows.push(
                <div key={day.toString()} className="grid grid-cols-7 border-l border-gray-100">
                    {days}
                </div>
            );
            days = [];
        }

        return (
            <div className="flex flex-col h-full bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="grid grid-cols-7 border-b border-gray-200 bg-gray-50/50">
                    {daysOfWeek.map(d => (
                        <div key={d} className="py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-widest">
                            {d}
                        </div>
                    ))}
                </div>
                <div className="flex-1 overflow-auto">
                    {rows}
                </div>
            </div>
        );
    };

    return (
        <div className="h-full">
            {view === "month" && renderMonth()}
            {view === "week" && (
                <div className="h-full bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center text-gray-400 font-medium">
                    Week View Implementation coming soon...
                </div>
            )}
            {view === "day" && (
                <div className="h-full bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center text-gray-400 font-medium">
                    Day View Implementation coming soon...
                </div>
            )}
        </div>
    );
};
