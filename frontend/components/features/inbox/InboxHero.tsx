"use client";

import { ArrowRight, Star, Home, MessageSquare, Brain, LayoutGrid, CheckCircle2 } from "lucide-react";

const InboxHero = () => {
    return (
        <section className="relative pt-20 pb-20 overflow-hidden bg-white text-black font-sans">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-20">
                    {/* Left Content */}
                    <div className="flex-1 text-left">
                        <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-[#292D34]">
                            One Inbox to
                            <br />
                            rule them all.
                        </h1>

                        <p className="text-xl text-gray-500 mb-10 max-w-lg leading-relaxed">
                            Crush your work with a redesigned Inbox that lets you blast through your priorities at warp speed.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                            <button className="px-8 py-4 bg-[#1A1A1A] text-white rounded-xl font-bold text-lg hover:bg-black transition-all flex items-center gap-2 shadow-lg">
                                Get started
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <div className="text-xs text-gray-500 text-left">
                                <div className="font-medium text-gray-800">Free Forever.</div>
                                <div>No credit card.</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-yellow-400 text-sm mb-12">
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
                                ))}
                            </div>
                            <span className="text-gray-400 ml-1">25,000+ reviews from</span>
                            <div className="flex gap-1 opacity-70">
                                {/* Simplified icons for review platforms */}
                                <div className="w-4 h-4 bg-red-500 rounded-sm" />
                                <div className="w-4 h-4 bg-blue-500 rounded-sm" />
                                <div className="w-4 h-4 bg-orange-500 rounded-sm" />
                            </div>
                        </div>
                    </div>

                    {/* Right Visual - Interactive Mockup */}
                    <div className="flex-1 w-full max-w-3xl relative">
                        {/* Mockup Container */}
                        <div className="relative rounded-[20px] bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden flex aspect-[4/3]">
                            {/* Dark Sidebar */}
                            <div className="w-16 bg-[#1A1A1A] text-gray-400 flex flex-col items-center py-6 gap-8 shrink-0">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-pink-500 to-orange-500 flex items-center justify-center text-white font-bold text-xs shadow-inner">
                                    M
                                </div>
                                <div className="space-y-6 flex flex-col items-center">
                                    <Home className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                                    <LayoutGrid className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                                    <MessageSquare className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                                    <Brain className="w-5 h-5 text-white cursor-pointer" />
                                    <div className="w-5 h-5 rounded hover:bg-white/10 cursor-pointer flex items-center justify-center">
                                        <div className="grid grid-cols-2 gap-0.5">
                                            <div className="w-1.5 h-1.5 bg-current rounded-[1px]" />
                                            <div className="w-1.5 h-1.5 bg-current rounded-[1px]" />
                                            <div className="w-1.5 h-1.5 bg-current rounded-[1px]" />
                                            <div className="w-1.5 h-1.5 bg-current rounded-[1px]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-auto flex flex-col items-center gap-6">
                                    <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-[10px] text-white">
                                        +
                                    </div>
                                </div>
                            </div>

                            {/* Main Inbox Area */}
                            <div className="flex-1 bg-white flex flex-col font-sans">
                                {/* Header */}
                                <div className="h-14 border-b border-gray-100 flex items-center px-6 justify-between shrink-0">
                                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                                        Mango Tech
                                    </div>
                                    <div className="flex-1 max-w-sm mx-8 py-1.5 px-3 bg-gray-50 rounded-lg text-xs text-gray-400 flex items-center gap-2">
                                        Search K
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-pink-500" />
                                        <div className="w-6 h-6 rounded-full bg-gray-100" />
                                    </div>
                                </div>

                                {/* Inbox Tabs */}
                                <div className="px-6 py-4 flex items-center justify-between border-b border-gray-50 shrink-0">
                                    <div className="flex gap-8">
                                        <div className="pb-2 border-b-2 border-black text-sm font-semibold text-black">
                                            Primary
                                            <span className="ml-2 text-xs font-normal text-gray-400">9 unread</span>
                                        </div>
                                        <div className="pb-2 text-sm font-medium text-gray-400 hover:text-gray-600 cursor-pointer">
                                            Activity
                                            <span className="ml-2 text-[10px] px-1.5 py-0.5 bg-orange-100 text-orange-600 rounded-full">🔥</span>
                                        </div>
                                        <div className="pb-2 text-sm font-medium text-gray-400 hover:text-gray-600 cursor-pointer">
                                            Later
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-gray-400">
                                        <CheckCircle2 className="w-3 h-3" /> Cleared
                                    </div>
                                </div>

                                {/* List Content */}
                                <div className="flex-1 overflow-hidden p-6 relative">
                                    {/* Filters */}
                                    <div className="flex gap-2 mb-6">
                                        <span className="px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-600">Filters</span>
                                    </div>

                                    {/* Today Section */}
                                    <div className="mb-8">
                                        <h4 className="text-xs font-bold text-gray-900 mb-4">Today</h4>
                                        <div className="space-y-4">
                                            {[
                                                { title: "Finalize Q4 campaign creative assets...", user: "Taylor Adams", time: "8:30 PM", icon: "orange" },
                                                { title: "Launch a community initiative to enhance...", user: "Alex Morgan", time: "8:35 PM", icon: "yellow" },
                                                { title: "Incorporate feedback into performance...", user: "Jordan Lee", time: "8:36 PM", icon: "green" },
                                                { title: "Switch to latest Angular version", user: "Casey Smith", time: "2:30 PM", icon: "green" },
                                                { title: "Implement solar panels for renewable...", user: "5 comments", time: "3:45 PM", icon: "orange" },
                                                { title: "Conduct procurement for ClickUp Brain", user: "Do you guys have...", time: "1:00 PM", icon: "gray" },
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                                                    <div className={`w-4 h-4 rounded-full border-2 ${item.icon === 'orange' ? 'border-orange-400 bg-orange-50' : item.icon === 'green' ? 'border-green-400 bg-green-50' : item.icon === 'yellow' ? 'border-yellow-400 bg-yellow-50' : 'border-gray-300'} flex items-center justify-center`}>
                                                        {idx % 2 === 0 && <div className={`w-2 h-2 rounded-full ${item.icon === 'orange' ? 'bg-orange-400' : 'bg-gray-300'}`} />}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="text-sm text-gray-700 truncate group-hover:text-black font-medium">{item.title}</div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-5 h-5 rounded-full bg-gray-200 overflow-hidden">
                                                            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300" />
                                                        </div>
                                                        <div className="text-xs text-gray-400 w-16 text-right group-hover:text-gray-600">{item.time}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Fade at bottom */}
                                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trusted By - Centered Bottom Section */}
                <div className="text-center">
                    <div className="flex items-center justify-center gap-4 opacity-60 grayscale mb-8">
                        <span className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">Trusted by the best</span>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all">
                        {["wayfair", "Deloitte.", "Pfizer", "Adobe", "American", "NBCUniversal"].map((logo, idx) => (
                            <span key={idx} className="text-xl font-bold font-serif text-gray-600">{logo}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InboxHero;
