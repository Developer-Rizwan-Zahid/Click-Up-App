"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Monitor } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

// Windows Icon SVG
const WindowsIcon = () => (
    <svg viewBox="0 0 88 88" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M0 12.402l35.687-4.86.009 34.004-35.694.215V12.402zm35.679 33.32l-.004 34.822-35.673-4.896V45.73l35.677-.008zM40.386 5.86L87.974 0v41.527l-47.588.243V5.86zm47.584 39.9l-.01 42.22-47.59-6.53V45.75l47.6.01z" /></svg>
);

export function DownloadHero() {
    // Determine OS for button label (simple check)
    const [osName, setOsName] = useState("Windows");

    useEffect(() => {
        if (navigator.appVersion.indexOf("Mac") !== -1) setOsName("Mac");
        else if (navigator.appVersion.indexOf("Linux") !== -1) setOsName("Linux");
        else setOsName("Windows");
    }, []);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 overflow-visible">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

                {/* Left Column: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="lg:w-[45%] text-left"
                >
                    <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-8 text-[#292D34] leading-[1.1]">
                        The everything app for work, on desktop.
                    </h1>

                    <p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium">
                        Boost productivity with an all-in-one platform that streamlines work and keeps everyone connected.
                    </p>

                    <Button className="w-full sm:w-auto h-16 px-8 bg-gradient-to-r from-[#5ca1ff] via-[#9d60ff] to-[#df52ff] hover:opacity-90 text-white text-xl font-bold rounded-2xl shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-3 mb-8">
                        {osName === "Windows" ? <WindowsIcon /> : <Monitor size={24} />}
                        Download for {osName}
                    </Button>

                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] bg-gray-200 flex-1"></div>
                        <span className="text-gray-400 text-lg">or</span>
                        <div className="h-[1px] bg-gray-200 flex-1"></div>
                    </div>

                    <div className="bg-purple-50 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                        <span className="text-gray-700 font-bold text-lg">Use ClickUp from any browser</span>
                        <Link href="/signup" className="text-[#7b68ee] font-bold text-lg hover:underline flex items-center gap-1">
                            Get started
                        </Link>
                    </div>

                </motion.div>

                {/* Right Column: Visual Mockup */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-[55%] relative"
                >
                    {/* Glow Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-purple-200/40 via-blue-200/40 to-pink-200/40 blur-[80px] -z-10 rounded-full pointer-events-none" />

                    {/* Mockup Container */}
                    <div className="relative rounded-xl border border-gray-200/80 shadow-2xl bg-white overflow-hidden">
                        {/* Fake Browser Chrome */}
                        <div className="bg-[#f0f2f5] px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>
                            <div className="mx-auto bg-white px-3 py-1 rounded-md text-xs text-gray-400 font-medium w-1/2 text-center border border-gray-200 flex items-center justify-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                                clickup.com
                            </div>
                        </div>

                        {/* Static Image Placeholder - Replacing complex DOM structure for stability and performance as this is a hero image */}
                        <img
                            src="https://clickup.com/assets/download-mockup.png" // Fallback if 404, but trying to use a generic asset or just construct a simple DOM representation if needed.
                            // Since I cannot guarantee the external URL works forever, I will build a lightweight DOM representation instead as I did for the main page, to be safe.
                            className="hidden" // Hiding this <img> tag to use the DOM below instead
                            alt=""
                        />

                        {/* Lightweight DOM Representation of the App UI */}
                        <div className="bg-white p-4 h-[400px] flex flex-col">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-green-500 rounded text-white flex items-center justify-center font-bold text-xs">M</div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-800">Marketing</div>
                                        <div className="text-xs text-gray-400">Campaigns / Q2 Launch</div>
                                    </div>
                                </div>
                                <div className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-500">
                                    <span className="text-black font-bold border-b-2 border-black pb-4 -mb-4">List</span>
                                    <span className="px-3">Board</span>
                                    <span className="px-3">Calendar</span>
                                </div>
                            </div>

                            {/* List Content */}
                            <div className="flex-1 space-y-4">
                                <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
                                    <span>To Do</span>
                                    <span className="bg-gray-100 px-1.5 rounded text-gray-500">2</span>
                                </div>

                                {/* Item 1 */}
                                <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded group cursor-pointer border-b border-gray-50">
                                    <div className="w-4 h-4 rounded-full border-2 border-gray-300 group-hover:border-purple-500 transition-colors"></div>
                                    <span className="text-sm text-gray-700 font-medium flex-1">Create promotional videos</span>
                                    <div className="flex -space-x-2">
                                        <div className="w-6 h-6 rounded-full bg-blue-400 border-2 border-white"></div>
                                        <div className="w-6 h-6 rounded-full bg-purple-400 border-2 border-white"></div>
                                    </div>
                                    <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2 py-0.5 rounded">High</span>
                                </div>

                                {/* Item 2 */}
                                <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded group cursor-pointer border-b border-gray-50">
                                    <div className="w-4 h-4 rounded-full border-2 border-gray-300 group-hover:border-purple-500 transition-colors"></div>
                                    <span className="text-sm text-gray-700 font-medium flex-1">Email Announcement</span>
                                    <div className="flex -space-x-2">
                                        <div className="w-6 h-6 rounded-full bg-green-400 border-2 border-white"></div>
                                        <div className="w-6 h-6 rounded-full bg-yellow-400 border-2 border-white"></div>
                                    </div>
                                    <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded">Urgent</span>
                                </div>

                                <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-wider mt-6 mb-2">
                                    <span className="text-blue-500">In Progress</span>
                                    <span className="bg-blue-50 text-blue-500 px-1.5 rounded">3</span>
                                </div>

                                <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded group cursor-pointer">
                                    <div className="w-4 h-4 rounded-full border-2 border-blue-400 flex items-center justify-center">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    </div>
                                    <span className="text-sm text-gray-700 font-medium flex-1">Revamp existing badges</span>
                                    <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white"></div>
                                </div>
                            </div>

                            {/* Floating Action Button */}
                            <div className="absolute bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg flex items-center justify-center text-white font-bold text-2xl hover:scale-110 transition-transform cursor-pointer">
                                +
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
