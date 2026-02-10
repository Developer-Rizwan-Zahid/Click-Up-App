"use client";

import {
    Github, Slack, Trello, Chrome, Figma, Youtube, Twitch, Twitter,
    Facebook, Linkedin, Dribbble, Instagram, Mail, Calendar,
    MessageCircle, Cloud, Database, Globe, Server, Code, Terminal,
    Box, FileText, Image as ImageIcon, Music, Video, Map
} from "lucide-react";

// Using a mix of icons to simulate the dense grid of integrations
const logosRow1 = [
    { icon: Slack, color: "text-purple-500", bg: "bg-purple-50", border: "border-purple-100" },
    { icon: Github, color: "text-gray-800", bg: "bg-gray-50", border: "border-gray-200" },
    { icon: Trello, color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-100" },
    { icon: Chrome, color: "text-red-500", bg: "bg-red-50", border: "border-red-100" },
    { icon: Figma, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" },
    { icon: Youtube, color: "text-red-600", bg: "bg-red-50", border: "border-red-100" },
    { icon: Twitch, color: "text-purple-700", bg: "bg-purple-50", border: "border-purple-100" },
    { icon: Box, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
    { icon: Cloud, color: "text-sky-500", bg: "bg-sky-50", border: "border-sky-100" },
    { icon: Database, color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-100" },
    { icon: Mail, color: "text-yellow-500", bg: "bg-yellow-50", border: "border-yellow-100" },
    { icon: Calendar, color: "text-pink-500", bg: "bg-pink-50", border: "border-pink-100" },
];

const logosRow2 = [
    { icon: Twitter, color: "text-blue-400", bg: "bg-blue-50", border: "border-blue-100" },
    { icon: Facebook, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
    { icon: Linkedin, color: "text-blue-700", bg: "bg-blue-50", border: "border-blue-100" },
    { icon: Dribbble, color: "text-pink-600", bg: "bg-pink-50", border: "border-pink-100" },
    { icon: Instagram, color: "text-pink-500", bg: "bg-pink-50", border: "border-pink-100" },
    { icon: MessageCircle, color: "text-green-500", bg: "bg-green-50", border: "border-green-100" },
    { icon: Globe, color: "text-indigo-500", bg: "bg-indigo-50", border: "border-indigo-100" },
    { icon: Server, color: "text-slate-500", bg: "bg-slate-50", border: "border-slate-100" },
    { icon: Code, color: "text-cyan-500", bg: "bg-cyan-50", border: "border-cyan-100" },
    { icon: Terminal, color: "text-gray-900", bg: "bg-gray-50", border: "border-gray-200" },
    { icon: FileText, color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-100" },
    { icon: Map, color: "text-teal-500", bg: "bg-teal-50", border: "border-teal-100" },
];

// Double the base content first to ensure it's wide enough for large screens (~2800px)
const row1Base = [...logosRow1, ...logosRow1];
const row2Base = [...logosRow2, ...logosRow2];

// Duplication for [A][A] logic -> Translate -50% refers to width of Container
// We set Container width to max-content (2A)
const row1 = [...row1Base, ...row1Base];
const row2 = [...row2Base, ...row2Base];

const DocsIntegrations = () => {
    return (
        <section className="py-24 bg-white overflow-hidden relative">
            <style jsx>{`
                @keyframes scroll-left-fast {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes scroll-right-fast {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .animate-scroll-left-custom {
                    animation: scroll-left-fast 60s linear infinite;
                    width: max-content;
                }
                .animate-scroll-right-custom {
                    animation: scroll-right-fast 60s linear infinite;
                    width: max-content;
                }
                .integrate-hover:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="container mx-auto px-4 md:px-6 mb-16 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <span className="text-[#5B4BF0] font-bold tracking-widest text-sm uppercase mb-4 block">
                        INTEGRATIONS
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#292D34] mb-6 tracking-tight">
                        Connect your favorite <br />
                        tools with ClickUp.
                    </h2>
                </div>
            </div>

            <div className="relative w-full">
                {/* Center Gradient Mask for Fade Effect */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

                {/* Center ClickUp Logo Overlay */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full shadow-2xl flex items-center justify-center border border-gray-100">
                        {/* Large ClickUp Icon */}
                        <div className="relative flex items-center justify-center scale-150">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 10C4 10 4 17 12 17C20 17 20 10 20 10" stroke="#7B68EE" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7 8L12 3L17 8" stroke="#E348B4" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Row 1: Left Scrolling */}
                <div className="flex mb-8 w-full overflow-hidden">
                    <div className="flex animate-scroll-left-custom integrate-hover gap-6 px-3">
                        {row1.map((item, idx) => (
                            <div key={idx} className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl ${item.bg} border ${item.border} flex items-center justify-center shrink-0 shadow-sm`}>
                                <item.icon className={`w-10 h-10 ${item.color}`} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2: Right Scrolling */}
                <div className="flex w-full overflow-hidden">
                    <div className="flex animate-scroll-right-custom integrate-hover gap-6 px-3">
                        {row2.map((item, idx) => (
                            <div key={idx} className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl ${item.bg} border ${item.border} flex items-center justify-center shrink-0 shadow-sm`}>
                                <item.icon className={`w-10 h-10 ${item.color}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DocsIntegrations;
