"use client";

import Link from 'next/link';
import { Rocket, GitMerge, GraduationCap, BrainCircuit, ShieldCheck } from 'lucide-react';

const paths = [
    {
        title: 'Getting Started',
        icon: Rocket,
        href: '/university/course-catalog'
    },
    {
        title: 'Build Your First Workflow',
        icon: GitMerge,
        href: '/university/course-catalog'
    },
    {
        title: 'Become a ClickUp Expert',
        icon: GraduationCap,
        href: '/university/course-catalog'
    },
    {
        title: 'Get Advanced AI Skills',
        icon: BrainCircuit,
        href: '/university/course-catalog'
    },
    {
        title: 'Workspace Admin',
        icon: ShieldCheck,
        href: '/university/course-catalog'
    }
];

export default function UniversityPaths() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-black text-[#292D34] tracking-tight">
                        Start Learning!
                    </h2>
                    <div className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        <p className="mb-2">
                            Choose the onboarding path relevant to your role and begin your journey to become more productive with ClickUp.
                        </p>
                        <p>
                            Want to see all of our courses? Browse the <Link href="/university/course-catalog" className="text-[#7B68EE] font-bold hover:underline">All Courses page</Link>!
                        </p>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
                    {paths.map((path, idx) => (
                        <Link
                            key={idx}
                            href={path.href}
                            className="group flex flex-col items-center text-center h-[320px] rounded-[30px] p-6 bg-[#9C82FE] hover:bg-[#8B6BFD] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-lg hover:shadow-[#7B68EE]/20 overflow-hidden relative"
                        >
                            {/* Decorative background circle */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/10 rounded-full blur-[40px] group-hover:bg-white/20 transition-all" />

                            {/* Icon Visualization */}
                            <div className="flex-1 flex items-center justify-center relative z-10 w-full">
                                {/* We use a large icon to represent the illustration */}
                                <div className="relative">
                                    {/* Simple animation elements */}
                                    <div className="absolute -inset-4 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <path.icon className="w-24 h-24 text-white drop-shadow-md" strokeWidth={1.5} />
                                </div>
                            </div>

                            {/* Title */}
                            <div className="relative z-10 mt-auto pb-4">
                                <h3 className="text-xl font-bold text-white leading-tight">
                                    {path.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
