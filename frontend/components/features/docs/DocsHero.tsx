"use client";

import { Button } from "@/components/ui/Button";
import { Star, Home, Layers, FileText, Brain, Grid, UserPlus, Search, MoreHorizontal, MessageSquare, ChevronRight, Settings } from "lucide-react";

const DocsHero = () => {
    return (
        <section className="pt-20 pb-20 bg-white overflow-hidden font-sans">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-24">
                    {/* Left Content */}
                    <div className="flex-1 max-w-xl">
                        <h3 className="text-[#5B4BF0] font-bold tracking-widest text-sm uppercase mb-4">
                            CLICKUP DOCS
                        </h3>

                        <h1 className="text-5xl md:text-7xl font-extrabold text-[#292D34] mb-6 leading-[1.1] tracking-tight">
                            Docs where <br />
                            work happens.
                        </h1>

                        <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                            Get more than an internet-ready Microsoft Word. ClickUp Docs can do all the docs things, AND they connect to the rest of your work.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                            <Button className="h-14 px-8 text-lg font-bold bg-[#292D34] hover:bg-black text-white rounded-xl w-full sm:w-auto transition-all shadow-xl hover:shadow-2xl">
                                Get Started. It's FREE!
                            </Button>
                            <div className="flex flex-col text-xs text-gray-400 font-medium">
                                <span>Free forever.</span>
                                <span>No credit card</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="flex text-yellow-400">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                            </div>
                            <span className="text-sm text-gray-500 font-medium">
                                25,000+ reviews from
                            </span>
                            {/* Icons for G2, Capterra etc - using simple text/colors for now as requested */}
                            <div className="flex items-center gap-1 opacity-70 grayscale">
                                <div className="w-4 h-4 bg-orange-500 rounded-sm" />
                                <div className="w-4 h-4 bg-blue-500 rounded-sm" />
                                <div className="w-4 h-4 bg-purple-500 rounded-sm" />
                            </div>
                        </div>
                    </div>

                    {/* Right Visual - Detailed Mockup matching screenshot */}
                    <div className="flex-1 w-full relative">
                        {/* App Container */}
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 flex overflow-hidden lg:h-[600px] w-full max-w-[800px]">

                            {/* Sidebar */}
                            <div className="w-[70px] bg-[#1a1b21] flex flex-col items-center py-4 gap-6 shrink-0 z-20">
                                <div className="w-8 h-8 rounded bg-gradient-to-br from-purple-500 to-pink-500 mb-2" />
                                <div className="flex flex-col gap-6 text-gray-400">
                                    <div className="flex flex-col items-center gap-1 group cursor-pointer">
                                        <Home className="w-5 h-5 group-hover:text-white transition-colors" />
                                        <span className="text-[10px]">Home</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 group cursor-pointer">
                                        <Layers className="w-5 h-5 group-hover:text-white transition-colors" />
                                        <span className="text-[10px]">Spaces</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 group cursor-pointer text-blue-400">
                                        <FileText className="w-5 h-5" />
                                        <span className="text-[10px]">Docs</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 group cursor-pointer">
                                        <Brain className="w-5 h-5 group-hover:text-white transition-colors" />
                                        <span className="text-[10px]">Brain</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 group cursor-pointer">
                                        <Grid className="w-5 h-5 group-hover:text-white transition-colors" />
                                        <span className="text-[10px]">Apps</span>
                                    </div>
                                </div>
                                <div className="mt-auto flex flex-col items-center gap-4 text-gray-400">
                                    <UserPlus className="w-5 h-5" />
                                    <div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center text-white text-xs font-bold">M</div>
                                </div>
                            </div>

                            {/* Use ClickUp UI Structure */}
                            <div className="flex-1 bg-white flex flex-col overflow-hidden relative">
                                {/* Top Bar */}
                                <div className="h-12 border-b border-gray-100 flex items-center px-4 justify-between bg-white text-sm shrink-0">
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-xs text-gray-700">
                                            <div className="w-3 h-3 rounded bg-orange-400" />
                                            Mango Tech
                                        </div>
                                        <span className="text-gray-300">|</span>
                                        <span>All Hands in 13m</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100 w-64 text-gray-400">
                                        <Search className="w-3 h-3" />
                                        <span className="text-xs">Search</span>
                                        <span className="ml-auto text-xs border border-gray-200 px-1 rounded">⌘K</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-white" />
                                            <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white" />
                                            <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white" />
                                        </div>
                                        <span className="text-gray-900 font-medium px-2 py-0.5 bg-gray-100 rounded text-xs">Ask</span>
                                        <span className="text-gray-900 font-medium px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">Share</span>
                                        <MoreHorizontal className="w-4 h-4" />
                                    </div>
                                </div>

                                {/* Doc Content Area */}
                                <div className="p-8 md:p-12 overflow-y-auto">
                                    {/* Breadcrumbs */}
                                    <div className="flex items-center gap-2 text-gray-400 text-xs mb-6">
                                        <span>Docs</span>
                                        <ChevronRight className="w-3 h-3" />
                                        <FileText className="w-3 h-3 text-blue-500" />
                                        <span className="text-gray-800 font-medium">Darken sidebar for better readability</span>
                                        <Star className="w-3 h-3" />
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Onboarding wiki</h2>

                                    {/* Author Meta */}
                                    <div className="flex items-center gap-2 mb-8">
                                        <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center text-white text-xs font-bold">M</div>
                                        <span className="text-xs text-gray-500"><span className="font-bold text-gray-700">Maggie</span> • Last updated at 11:47 am</span>
                                    </div>

                                    {/* Content Blocks */}
                                    <div className="space-y-8 relative">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-800 mb-2">Overview</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                Central hub guiding new team members through company culture, tools, processes, and key resources to ensure smooth onboarding and productivity.
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-8">
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-800 mb-4">Welcome</h3>
                                                <ul className="space-y-2 text-sm text-gray-600">
                                                    <li className="flex items-center gap-2"><span className="text-lg">✉️</span> Letter from the CEO</li>
                                                    <li className="flex items-center gap-2"><span className="text-lg">💬</span> Company Story</li>
                                                    <li className="flex items-center gap-2"><span className="text-lg">💜</span> Values and Principles</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-800 mb-4">Tools and systems</h3>
                                                <ul className="space-y-2 text-sm text-gray-600">
                                                    <li className="flex items-center gap-2"><span className="text-lg">👥</span> Communication</li>
                                                    <li className="flex items-center gap-2"><span className="text-lg">📂</span> Project Management</li>
                                                    <li className="flex items-center gap-2"><span className="text-lg">🎨</span> Design/Engineering</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-bold text-gray-800 mb-4">Resources</h3>
                                            <div className="border border-gray-200 rounded-lg p-4 flex gap-4 bg-white shadow-sm">
                                                <div className="flex-1">
                                                    <div className="text-xs text-gray-500 mb-1">Design Principles</div>
                                                    <div className="flex items-center gap-1 text-sm font-medium text-blue-600 mb-2">
                                                        <FileText className="w-3 h-3" /> Doc in Design Team
                                                    </div>
                                                </div>
                                                <div className="w-24 h-16 bg-gray-50 rounded border border-gray-100" />
                                            </div>
                                            {/* Loading State Mockup */}
                                            <div className="mt-4 flex items-center gap-2 text-purple-500 text-xs font-medium animate-pulse">
                                                <Brain className="w-3 h-3" /> Generating...
                                            </div>
                                        </div>

                                        {/* Collaboration Cursors (Absolute) */}
                                        <div className="absolute top-0 right-10 transform translate-x-1/2 -translate-y-1/2 z-10">
                                            <div className="bg-[#7B68EE] text-white text-[10px] px-2 py-1 rounded rounded-bl-none font-bold shadow-lg whitespace-nowrap">Samuel H.</div>
                                            <div className="w-0.5 h-4 bg-[#7B68EE]" />
                                        </div>
                                        <div className="absolute top-[40%] left-[20%] transform z-10">
                                            <div className="bg-[#2D7FF9] text-white text-[10px] px-2 py-1 rounded rounded-bl-none font-bold shadow-lg whitespace-nowrap">Alexandra C.</div>
                                            <div className="w-0.5 h-4 bg-[#2D7FF9]" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trusted By - Exactly matching footer style */}
                <div className="mt-20 flex flex-col md:flex-row items-center justify-between border-t border-gray-100 pt-10 gap-8">
                    <p className="text-xs font-bold text-gray-400 tracking-widest uppercase md:w-32">TRUSTED BY THE BEST</p>
                    <div className="flex-1 flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Using text for logos to ensure speed, can be replaced with SVGs */}
                        <div className="flex items-center gap-1 font-bold text-xl font-serif">amazon</div>
                        <div className="flex items-center gap-1 font-bold text-xl font-sans">NVIDIA</div>
                        <div className="flex items-center gap-1 font-bold text-xl font-sans italic">adidas</div>
                        <div className="flex items-center gap-1 font-bold text-xl font-sans">verizon</div>
                        <div className="flex items-center gap-1 font-bold text-xl font-sans">Spotify</div>
                        <div className="flex items-center gap-1 font-serif text-lg tracking-wide border px-1">HARVARD <span className="text-[8px] block -mt-1 text-center">UNIVERSITY</span></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DocsHero;
