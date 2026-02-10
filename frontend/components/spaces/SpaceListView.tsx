"use client";

import { cn } from "@/lib/utils";
import { MoreHorizontal, Plus } from "lucide-react";

export const SpaceListView = ({ data }: { data: any }) => {
    if (!data) return <div className="p-10 text-gray-400">Loading lists...</div>;

    const { lists, workload } = data;

    return (
        <div className="flex flex-col h-full bg-gray-50">
            {/* Toolbar Area (Filters etc) */}
            <div className="h-12 border-b border-gray-200 bg-white flex items-center px-6 gap-4">
                <button className="text-xs font-medium text-gray-500 hover:text-black flex items-center gap-1 border border-transparent hover:border-gray-200 rounded px-2 py-1">
                    Filters
                </button>
            </div>

            <div className="flex-1 overflow-auto p-6">

                {/* Lists Table Section */}
                <div className="bg-white rounded-lg border border-gray-200 mb-8 overflow-hidden shadow-sm">
                    {/* Table Header */}
                    <div className="grid grid-cols-[3fr,1fr,2fr,1fr,1fr,1fr,1fr,0.5fr] gap-4 px-6 py-3 border-b border-gray-100 text-xs font-medium text-gray-400 uppercase">
                        <div>Name</div>
                        <div>Color</div>
                        <div>Progress</div>
                        <div>Start</div>
                        <div>End</div>
                        <div>Priority</div>
                        <div>Owner</div>
                        <div></div>
                    </div>

                    {/* Table Rows */}
                    {lists.map((list: any) => (
                        <div key={list.id} className="grid grid-cols-[3fr,1fr,2fr,1fr,1fr,1fr,1fr,0.5fr] gap-4 px-6 py-4 border-b border-gray-50 items-center hover:bg-gray-50 transition-colors group cursor-pointer">
                            <div className="flex items-center gap-2 font-medium text-sm text-gray-700">
                                <div className="p-1 rounded hover:bg-gray-200">
                                    <MoreHorizontal size={14} className="text-gray-400" />
                                </div>
                                {list.name}
                            </div>

                            <div className="w-4 h-4 rounded-full bg-gray-200" /> {/* Mock Color */}

                            <div className="flex items-center gap-2">
                                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-green-500 rounded-full"
                                        style={{ width: `${(list.completedTasks / (list.totalTasks || 1)) * 100}%` }}
                                    />
                                </div>
                                <span className="text-xs text-gray-500">{list.completedTasks}/{list.totalTasks}</span>
                            </div>

                            <div className="text-xs text-gray-400">-</div> {/* Start */}
                            <div className="text-xs text-gray-400">-</div> {/* End */}
                            <div className="text-xs text-gray-400 flag">P</div> {/* Priority */}

                            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-[10px] text-gray-600">
                                ME
                            </div>

                            <div className="opacity-0 group-hover:opacity-100">
                                <Plus size={16} className="text-gray-400" />
                            </div>
                        </div>
                    ))}

                    <div className="px-6 py-3 text-sm text-gray-400 hover:text-gray-600 cursor-pointer flex items-center gap-2">
                        <Plus size={16} />
                        New List
                    </div>
                </div>


                {/* Bottom Widgets Row */}
                <div className="grid grid-cols-2 gap-6 h-[300px]">

                    {/* Resources Widget */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                        <h3 className="font-semibold text-gray-700 mb-4 text-sm">Resources</h3>
                        <div className="h-full border-2 border-dashed border-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-400">
                            Drop files here or attach
                        </div>
                    </div>

                    {/* Workload Widget (Pie Chart) */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm flex flex-col">
                        <h3 className="font-semibold text-gray-700 mb-4 text-sm">Workload by Status</h3>
                        <div className="flex-1 flex items-center justify-center gap-8">
                            {/* Chart */}
                            <div className="w-32 h-32 relative">
                                <SimplePieChart
                                    data={[
                                        { value: workload.toDo, color: '#9CA3AF' }, // Gray for ToDo
                                        { value: workload.inProgress, color: '#3B82F6' }, // Blue for In Progress
                                        { value: workload.complete, color: '#22C55E' } // Green for Complete
                                    ]}
                                />
                            </div>

                            {/* Legend */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                    <span>IN PROGRESS {workload.inProgress}</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <div className="w-2 h-2 rounded-full bg-gray-400" />
                                    <span>TO DO {workload.toDo}</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                    <span>COMPLETE {workload.complete}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

// Simple SVG Pie Chart component to avoid external dependencies
function SimplePieChart({ data }: { data: { value: number, color: string }[] }) {
    const total = data.reduce((acc, curr) => acc + curr.value, 0);
    // Avoid division by zero
    if (total === 0) return <div className="w-full h-full rounded-full bg-gray-100 border border-gray-200" />;

    let currentAngle = 0;

    return (
        <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
            {data.map((slice, i) => {
                const sliceAngle = (slice.value / total) * 360;
                const x1 = 50 + 50 * Math.cos(Math.PI * currentAngle / 180);
                const y1 = 50 + 50 * Math.sin(Math.PI * currentAngle / 180);
                const x2 = 50 + 50 * Math.cos(Math.PI * (currentAngle + sliceAngle) / 180);
                const y2 = 50 + 50 * Math.sin(Math.PI * (currentAngle + sliceAngle) / 180);

                // SVG Path command for a slice
                const largeArcFlag = sliceAngle > 180 ? 1 : 0;
                const d = `M 50 50 L ${x1} ${y1} A 50 50 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

                currentAngle += sliceAngle;
                return <path key={i} d={d} fill={slice.color} stroke="white" strokeWidth="2" />;
            })}
            {/* Center hole for Donut effect (optional, matching image look more closely) */}
            {/* <circle cx="50" cy="50" r="25" fill="white" /> */}
        </svg>
    );
}
