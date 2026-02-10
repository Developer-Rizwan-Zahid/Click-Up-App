"use client";

import Link from 'next/link';
import { PlayCircle, Video, MonitorPlay } from 'lucide-react';

const modes = [
    {
        title: 'On-Demand Webinar',
        icon: PlayCircle,
        color: 'text-[#7B68EE]',
        bg: 'bg-[#7B68EE]/10'
    },
    {
        title: 'Video Course',
        icon: Video,
        color: 'text-[#7B68EE]',
        bg: 'bg-[#7B68EE]/10'
    },
    {
        title: 'Self-Paced Course',
        icon: MonitorPlay,
        color: 'text-[#7B68EE]',
        bg: 'bg-[#7B68EE]/10'
    }
];

export default function UniversityLearningModes() {
    return (
        <section className="py-20 bg-[#F8F9FA]">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black text-[#292D34] mb-4 tracking-tight">
                        How do you want to learn?
                    </h2>
                    <p className="text-gray-500 font-medium">
                        Choose your favorite mode of learning
                    </p>
                </div>

                {/* Buttons Grid */}
                <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
                    {modes.map((mode, idx) => (
                        <Link
                            key={idx}
                            href="#"
                            className="flex items-center gap-4 bg-white px-8 py-5 rounded-full shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-[#7B68EE]/20 group min-w-[280px]"
                        >
                            <div className={`w-10 h-10 rounded-full ${mode.bg} ${mode.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                <mode.icon fill="currentColor" size={20} className="relative z-10" />
                            </div>

                            <span className="font-bold text-[#292D34] group-hover:text-[#7B68EE] transition-colors">
                                {mode.title}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
