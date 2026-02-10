"use client";

import Link from 'next/link';
import { Sparkles, Video, Award, KanbanSquare, Timer, Zap } from 'lucide-react';

const curatedItems = [
    {
        title: "What's new?",
        icon: Sparkles,
        color: 'bg-[#B2FF38]', // Lemon green
        iconColor: 'text-green-800'
    },
    {
        title: "Live Workshops",
        icon: Video,
        color: 'bg-[#E548F6]', // Pink/Magenta
        iconColor: 'text-white',
        href: '/university/live-training'
    },
    {
        title: "Earn Your ClickUp Certificate",
        icon: Award,
        color: 'bg-[#FFD423]', // Yellow
        iconColor: 'text-yellow-900'
    },
    {
        title: "Sharpen Project Management Skills",
        icon: KanbanSquare,
        color: 'bg-[#FF8800]', // Orange
        iconColor: 'text-white'
    },
    {
        title: "Save Time With Productivity Best Practices",
        icon: Timer,
        color: 'bg-[#55EFc4]', // Mint
        iconColor: 'text-teal-900'
    },
    {
        title: "New ClickUp Features",
        icon: Zap,
        color: 'bg-[#00D2FF]', // Cyan
        iconColor: 'text-white'
    }
];

export default function UniversityCatalog() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black text-[#292D34] tracking-tight">
                        What do you want to do?
                    </h2>
                    <div className="text-lg text-gray-500 max-w-3xl mx-auto">
                        <p>
                            Check out curated content to help you meet your productivity goals with ClickUp<br />
                            Want to see all of our courses? Browse the <Link href="/university/course-catalog" className="text-[#7B68EE] font-bold hover:underline">All Courses page</Link>!
                        </p>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {curatedItems.map((item, idx) => (
                        <Link
                            key={idx}
                            href={item.href || "/university/course-catalog"}
                            className="group flex flex-col gap-4 text-center md:text-left"
                        >
                            {/* Illustration Container */}
                            <div className={`aspect-[16/9] w-full rounded-[32px] ${item.color} flex items-center justify-center relative overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 shadow-sm group-hover:shadow-xl`}>

                                {/* Decorative Elements */}
                                <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors" />
                                <div className="absolute top-4 left-8 text-white/20">
                                    <item.icon size={80} strokeWidth={1} />
                                </div>

                                {/* Main Icon */}
                                <div className={`relative z-10 ${item.iconColor} transform group-hover:scale-110 transition-transform duration-500`}>
                                    <item.icon size={64} strokeWidth={1.5} />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-[#292D34] leading-tight px-2 group-hover:text-[#7B68EE] transition-colors">
                                {item.title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
