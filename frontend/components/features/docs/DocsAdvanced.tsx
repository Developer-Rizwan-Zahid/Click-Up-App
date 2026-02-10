"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const features = [
    {
        title: "Focus Mode",
        description: "Cancel out the noise and concentrate your writing on one line, sentence, or paragraph at a time.",
        href: "https://help.clickup.com/hc/en-us/articles/6328174371351-Intro-to-Docs?_gl=1%2A193sedp%2A_gcl_aw%2AR0NMLjE3NjY2NTc0NjMuQ2p3S0NBaUEzclBLQmhCWkVpd0FoUE5GUUdSZldCNnY4UldnSU1QZGtqaVM0UVpwSTlySjZyQ2N0c1NDRHJHUGVwUkxqZ1FWeXZVbl9Cb0NHYmNRQXZEX0J3RQ..%2A_gcl_au%2AMTExNTAwNDYzMy4xNzY2NTEzMjYx",
        image: (
            <div className="p-6 flex flex-col gap-4">
                <div className="space-y-2 opacity-20">
                    <div className="h-2 bg-gray-300 w-full rounded" />
                    <div className="h-2 bg-gray-300 w-5/6 rounded" />
                </div>
                <div className="space-y-3 font-bold text-gray-800 text-lg">
                    <p>Meeting For NFT-Gaming With SFUND</p>
                    <p className="text-blue-600">Rewards & Seed Funding</p>
                </div>
                <div className="space-y-2 opacity-20">
                    <div className="h-2 bg-gray-300 w-full rounded" />
                    <div className="h-2 bg-gray-300 w-4/5 rounded" />
                </div>
            </div>
        )
    },
    {
        title: "Templates",
        description: "Easily access doc templates to start drafting right away. Save frequently used documents as templates for quick access later.",
        href: "https://clickup.com/templates",
        image: (
            <div className="p-4 relative">
                <div className="bg-white rounded shadow-sm border border-gray-100 p-2 text-[8px] space-y-2">
                    <div className="h-2 w-16 bg-gray-200 rounded mb-2" />
                    <div className="grid grid-cols-3 gap-2">
                        <div className="bg-gray-50 h-12 rounded border border-gray-100" />
                        <div className="bg-blue-50 h-12 rounded border border-blue-100" />
                        <div className="bg-gray-50 h-12 rounded border border-gray-100" />
                    </div>
                </div>
                {/* Template Overlay */}
                <div className="absolute top-8 right-8 bg-white border border-gray-200 shadow-xl rounded-lg p-3 w-40 z-10">
                    <div className="text-xs font-bold mb-2">Templates</div>
                    <div className="space-y-1">
                        <div className="h-1.5 w-full bg-gray-100 rounded" />
                        <div className="h-1.5 w-3/4 bg-gray-100 rounded" />
                        <div className="h-1.5 w-full bg-gray-100 rounded" />
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Overview & Headers",
        description: "Easily access doc templates to start drafting right away. Save frequently used documents as templates for quick access later.",
        href: "https://help.clickup.com/hc/en-us/articles/14235667017495-Docs-Hub",
        image: (
            <div className="relative h-full bg-gray-50 overflow-hidden group-hover:bg-white transition-colors">
                {/* Banner Image Mockup */}
                <div className="h-20 bg-yellow-100 w-full flex items-center justify-center overflow-hidden">
                    <div className="flex gap-2 opacity-50">
                        <div className="w-8 h-8 rounded-full bg-yellow-400" />
                        <div className="w-8 h-8 rounded-full bg-green-400" />
                        <div className="w-8 h-8 rounded-full bg-orange-400" />
                    </div>
                </div>
                <div className="p-4">
                    <div className="font-bold text-lg mb-1">Meeting Notes</div>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-4 h-4 rounded-full bg-pink-500" />
                        <div className="h-1 w-20 bg-gray-200 rounded" />
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Archive",
        description: "Hide unused Docs that you don't want cluttering your Workspace, and quickly access them later through search.",
        href: "https://help.clickup.com/hc/en-us/articles/6325187970199-Archive-and-unarchive-a-Doc",
        image: (
            <div className="p-4 flex gap-2 h-full">
                <div className="w-16 bg-white border border-gray-100 rounded h-full flex flex-col gap-2 p-1">
                    <div className="w-4 h-4 bg-gray-100 rounded mx-auto" />
                    <div className="w-4 h-4 bg-gray-100 rounded mx-auto" />
                </div>
                <div className="flex-1 bg-white border border-gray-100 rounded h-full p-2 space-y-2 opacity-50">
                    <div className="h-2 w-full bg-gray-100 rounded" />
                    <div className="h-2 w-2/3 bg-gray-100 rounded" />
                </div>
            </div>
        )
    },
    {
        title: "Page Details",
        description: "Keep track of your word count, character count, and reading time for each page in your Doc.",
        href: "https://help.clickup.com/hc/en-us/articles/6325167441175-Customize-Page-styles-in-Docs",
        image: (
            <div className="p-6 relative text-[8px] text-gray-400">
                <div className="absolute top-4 right-4 bg-white border border-gray-200 shadow-lg p-2 rounded w-24 space-y-1.5">
                    <div className="flex justify-between"><span>Words</span> <span>1,204</span></div>
                    <div className="flex justify-between"><span>Chars</span> <span>8,402</span></div>
                    <div className="flex justify-between"><span>Read</span> <span>5 min</span></div>
                </div>
                <div className="space-y-2">
                    <div className="font-bold text-gray-800 text-sm">Sony Walkman</div>
                    <div className="h-1 bg-gray-200 w-full rounded" />
                    <div className="h-1 bg-gray-200 w-full rounded" />
                    <div className="h-1 bg-gray-200 w-4/5 rounded" />
                </div>
            </div>
        )
    },
    {
        title: "Advanced Settings",
        description: "Customize your font type, size, height, page width, and more.",
        href: "https://help.clickup.com/hc/en-us/articles/6325350577559-Docs-header",
        image: (
            <div className="p-4 flex items-center justify-center h-full">
                <div className="w-full bg-white border border-gray-200 shadow-sm rounded-lg p-4 flex gap-4">
                    <div className="flex-1 space-y-2">
                        <div className="h-2 bg-gray-200 w-full" />
                        <div className="h-2 bg-gray-200 w-3/4" />
                    </div>
                    <div className="w-16 flex flex-col gap-2">
                        <div className="h-4 bg-blue-50 border border-blue-100 rounded text-[6px] flex items-center justify-center text-blue-500 font-bold">Aa</div>
                        <div className="space-y-1">
                            <div className="h-1 bg-gray-200 w-full rounded" />
                            <div className="h-1 bg-gray-200 w-full rounded" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
];

const DocsAdvanced = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-[#5B4BF0] font-bold tracking-widest text-sm uppercase mb-4 block">
                        FEATURES
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#292D34] mb-6 tracking-tight">
                        Get more done with <br />
                        time-saving features.
                    </h2>
                    <p className="text-xl text-gray-500">
                        Write distraction-free with Focus Mode, save templates for later, and keep track of your doc details.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Link
                            key={index}
                            href={feature.href}
                            target="_blank"
                            className="group block bg-[#FAFAFC] hover:bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                        >
                            {/* Card Image Area */}
                            <div className="bg-gray-50 h-48 border-b border-gray-100 overflow-hidden relative group-hover:bg-white transition-colors">
                                {feature.image}
                            </div>

                            {/* Card Content */}
                            <div className="p-8">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <ArrowUpRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                                    {feature.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DocsAdvanced;
