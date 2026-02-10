"use client";

import { FileText, Bookmark, Folder } from "lucide-react";

export const SpaceOverview = ({ data }: { data: any }) => {
    return (
        <div className="flex flex-col h-full bg-gray-50 overflow-auto p-6">

            {/* Top Cards Row */}
            <div className="grid grid-cols-3 gap-6 mb-8">

                {/* Recent Card */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 h-[280px]">
                    <h3 className="text-sm font-semibold text-gray-700 mb-4">Recent</h3>
                    <div className="space-y-3">
                        {/* Mock recent items based on Image 1 */}
                        <div className="flex items-center gap-3 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer p-2 rounded">
                            <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded">
                                <span className="text-xs font-bold">P1</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-medium text-black">Project 1</span>
                                <span className="text-xs text-gray-400">in Team Space</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Docs Card */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 h-[280px]">
                    <h3 className="text-sm font-semibold text-gray-700 mb-4">Docs</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 cursor-pointer">
                        <FileText size={16} />
                        <span>Untitled • in Untitled</span>
                    </div>
                </div>

                {/* Bookmarks Card */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 h-[280px] flex flex-col items-center justify-center text-center">
                    <h3 className="text-sm font-semibold text-gray-700 self-start mb-auto">Bookmarks</h3>
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                            <Bookmark size={24} />
                        </div>
                        <p className="text-xs text-gray-400 max-w-[200px]">Bookmarks make it easy to save ClickUp items or any URL from around the web.</p>
                        <button className="bg-black text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-gray-800">Add Bookmark</button>
                    </div>
                    <div className="mb-auto" />
                </div>
            </div>

            {/* Folders Section */}
            <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-4">Folders</h3>
                <div className="h-[200px] border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center gap-3 text-gray-400">
                    <Folder size={48} className="text-gray-200" />
                    <span className="text-sm">Add new Folder to your Space</span>
                    <button className="bg-[#292D34] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-black">Add Folder</button>
                </div>
            </div>
        </div>
    );
};
