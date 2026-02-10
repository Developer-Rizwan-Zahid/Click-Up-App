"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, Quote } from "lucide-react";

export default function TasksHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-white text-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-left"
                    >
                        {/* Tag */}
                        <div className="inline-block mb-6">
                            <span className="text-sm font-bold tracking-widest text-indigo-600 uppercase">

                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900">
                            A Task Management Platform that saves time
                        </h1>

                        {/* Subheading */}
                        <p className="text-xl text-slate-500 mb-8 leading-relaxed max-w-lg">
                            Automate, prioritize, and keep work moving—all while staying connected to Docs, Whiteboards, Chat, and more.
                        </p>

                        {/* CTA Section */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
                            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                                Get Started. It's FREE
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <div className="flex flex-col items-start text-xs font-medium text-slate-500">
                                <span>Free Forever.</span>
                                <span>No credit card.</span>
                            </div>
                        </div>

                        {/* Ratings / Social Proof */}
                        <div className="flex items-center gap-4">
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <div className="text-sm font-semibold text-slate-600">
                                25,000+ reviews from
                            </div>
                            {/* Platform Icons (G2, Capterra etc placeholder) */}
                            <div className="flex items-center gap-2 grayscale opacity-70">
                                <div className="w-5 h-5 bg-red-500 rounded-sm" title="G2"></div>
                                <div className="w-5 h-5 bg-blue-500 rounded-sm" title="Capterra"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Main Card UI Mockup */}
                        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-white min-h-[500px] p-6">

                            {/* Breadcrumbs */}
                            <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
                                <span>Product</span> <span className="text-slate-300">/</span>
                                <span>Campaigns</span> <span className="text-slate-300">/</span>
                                <span>Q4</span>
                            </div>

                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="px-2 py-1 bg-slate-100 rounded text-xs font-bold text-slate-500 border border-slate-200 uppercase tracking-wider">Task</div>
                                    <div className="text-xs font-mono text-slate-400">CLK-10</div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Acme Home | EA Launch</h2>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <span className="text-sm text-slate-400 w-20">Status</span>
                                    <span className="px-2 py-1 bg-indigo-500 text-white text-xs font-bold rounded uppercase">Open</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm text-slate-400 w-20">Assignees</span>
                                    <div className="flex -space-x-2">
                                        <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white"></div>
                                        <div className="w-6 h-6 rounded-full bg-pink-500 border-2 border-white"></div>
                                        <div className="w-6 h-6 rounded-full bg-yellow-500 border-2 border-white"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Tabs */}
                            <div className="flex gap-6 border-b border-slate-100 mb-6 text-sm font-medium text-slate-500">
                                <span className="text-indigo-600 border-b-2 border-indigo-600 pb-2">Details</span>
                                <span className="pb-2">Custom Fields</span>
                                <span className="pb-2">Subtasks</span>
                            </div>

                            {/* Content Body */}
                            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                                <p>For the launch of Acme Home, we plan to run an "early access" preview campaign to drive excitement and lead gen ahead of the GA release.</p>
                                <p className="font-bold text-slate-800">Objectives:</p>
                                <p>Generate awareness and EA leads for the new Acme Home launch</p>
                                <p>Drive 100,000 visits to the launch announcement landing page</p>
                            </div>

                            {/* Comment Sidebar Mock (Floating) */}
                            <div className="absolute top-10 -right-20 w-64 bg-slate-50 rounded-lg shadow-lg border border-slate-100 p-4 hidden md:block">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                                    <span className="text-xs text-slate-400">Resolve</span>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-green-500 flex-shrink-0"></div>
                                    <div className="space-y-2">
                                        <div className="text-xs font-bold text-slate-700">Ivan</div>
                                        <p className="text-xs text-slate-500 leading-relaxed">
                                            I wanted to touch base as we finalize the early access launch campaign...
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Play Button Overlay */}
                            <div className="absolute right-10 bottom-10">
                                <div className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center shadow-xl cursor-pointer hover:scale-105 transition-transform">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 3L19 12L5 21V3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>

                {/* Trusted By Section (Bottom) */}
                <div className="mt-24 pt-10 border-t border-slate-100">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <span className="text-xs font-bold text-slate-400 tracking-widest uppercase whitespace-nowrap">
                            Trusted by the best
                        </span>
                        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Text Logos for now as we don't have SVGs handy */}
                            <span className="font-bold text-xl text-slate-800">amazon</span>
                            <span className="font-bold text-xl text-slate-800">NVIDIA</span>
                            <span className="font-bold text-xl text-slate-800">adidas</span>
                            <span className="font-bold text-xl text-slate-800">verizon</span>
                            <span className="font-bold text-xl text-slate-800">Spotify</span>
                            <span className="font-bold text-xl text-slate-800 font-serif">HARVARD</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
