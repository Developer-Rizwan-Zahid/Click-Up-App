"use client";

import {
    Calendar as CalendarIcon,
    Plus,
    ChevronDown,
    Check,
    Cloud,
    User,
    Users,
    Briefcase
} from "lucide-react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from "date-fns";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const CalendarSidebar = () => {
    const [selectedCalendars, setSelectedCalendars] = useState(["personal", "team", "projects"]);

    const toggleCalendar = (id: string) => {
        if (selectedCalendars.includes(id)) {
            setSelectedCalendars(selectedCalendars.filter(c => c !== id));
        } else {
            setSelectedCalendars([...selectedCalendars, id]);
        }
    };

    const renderMiniCalendar = () => {
        const today = new Date();
        const monthStart = startOfMonth(today);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const rows = [];
        let days = [];
        let day = startDate;

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                days.push(
                    <div
                        key={day.toString()}
                        className={cn(
                            "w-7 h-7 flex items-center justify-center text-[10px] font-medium rounded-full cursor-pointer transition-all",
                            !isSameMonth(day, monthStart) ? "text-gray-300" : "text-gray-700 hover:bg-gray-100",
                            isSameDay(day, today) ? "bg-blue-600 text-white shadow-sm" : ""
                        )}
                    >
                        {format(day, "d")}
                    </div>
                );
                day = addDays(day, 1);
            }
            rows.push(
                <div key={day.toString()} className="flex justify-between w-full">
                    {days}
                </div>
            );
            days = [];
        }

        return (
            <div className="space-y-2 p-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-gray-900">{format(today, "MMMM yyyy")}</span>
                </div>
                <div className="flex justify-between w-full text-[10px] font-bold text-gray-400 mb-1">
                    {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                        <div key={`${d}-${i}`} className="w-7 text-center">{d}</div>
                    ))}
                </div>
                {rows}
            </div>
        );
    };

    return (
        <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-full shrink-0 z-10 overflow-y-auto no-scrollbar">
            <div className="p-4 border-b border-gray-100">
                <button className="w-full flex items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-gray-200 transition-all hover:bg-black group">
                    <div className="bg-white/20 p-1 rounded-md group-hover:scale-110 transition-transform">
                        <Plus size={14} />
                    </div>
                    <span>New Project</span>
                </button>
            </div>

            {renderMiniCalendar()}

            <div className="flex-1 px-4 py-2">
                <div className="space-y-6">
                    {/* My Calendars */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between group cursor-pointer">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">My Calendars</span>
                            <ChevronDown size={14} className="text-gray-400 group-hover:text-gray-900" />
                        </div>

                        <div className="space-y-0.5">
                            <CalendarToggle
                                id="personal"
                                label="Personal"
                                color="bg-blue-500"
                                icon={User}
                                active={selectedCalendars.includes("personal")}
                                onToggle={() => toggleCalendar("personal")}
                            />
                            <CalendarToggle
                                id="team"
                                label="Team Sync"
                                color="bg-purple-500"
                                icon={Users}
                                active={selectedCalendars.includes("team")}
                                onToggle={() => toggleCalendar("team")}
                            />
                            <CalendarToggle
                                id="projects"
                                label="Projects"
                                color="bg-green-500"
                                icon={Briefcase}
                                active={selectedCalendars.includes("projects")}
                                onToggle={() => toggleCalendar("projects")}
                            />
                        </div>
                    </div>

                    {/* Shared */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between group cursor-pointer">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Shared</span>
                            <ChevronDown size={14} className="text-gray-400" />
                        </div>
                        <div className="px-2 py-8 border-2 border-dashed border-gray-100 rounded-xl flex flex-col items-center justify-center text-center gap-2">
                            <div className="p-2 bg-gray-50 rounded-full text-gray-400">
                                <Plus size={20} />
                            </div>
                            <span className="text-xs text-gray-400 font-medium">Add Shared<br />Calendar</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 border-t border-gray-100 mt-auto">
                <div className="bg-blue-50 rounded-xl p-3 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-blue-700">
                        <Cloud size={16} />
                        <span className="text-xs font-bold">Cloud Sync Active</span>
                    </div>
                    <p className="text-[10px] text-blue-600 font-medium leading-relaxed">
                        Your calendar is being synced across all devices in real-time.
                    </p>
                </div>
            </div>
        </div>
    );
};

interface CalendarToggleProps {
    id: string;
    label: string;
    color: string;
    icon: any;
    active: boolean;
    onToggle: () => void;
}

function CalendarToggle({ label, color, icon: Icon, active, onToggle }: CalendarToggleProps) {
    return (
        <div
            onClick={onToggle}
            className={cn(
                "flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all hover:bg-gray-50",
                active ? "bg-white" : "opacity-60"
            )}
        >
            <div className="flex items-center gap-3">
                <div className={cn("p-1.5 rounded-md text-white shadow-sm", color)}>
                    <Icon size={12} />
                </div>
                <span className="text-sm font-bold text-gray-700">{label}</span>
            </div>
            <div className={cn(
                "w-4 h-4 rounded border transition-all flex items-center justify-center",
                active ? "bg-blue-600 border-blue-600" : "border-gray-200"
            )}>
                {active && <Check size={10} className="text-white" />}
            </div>
        </div>
    );
}
