'use client';

import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

export default function WhiteboardsHero() {
    return (
        <section className="pt-32 pb-20 bg-white min-h-[800px] flex flex-col items-center">
            <div className="container mx-auto px-4 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 min-h-[500px]">

                    {/* Left Content */}
                    <div className="lg:w-1/2 text-left z-10">
                        <span className="text-[#7b68ee] font-bold tracking-widest text-xs uppercase mb-5 block font-mono">
                            ALL-NEW
                        </span>

                        <h1 className="text-5xl md:text-[5.5rem] leading-[1.05] font-bold text-zinc-900 mb-8 tracking-[-0.03em]">
                            Visual <br />
                            Collaboration <span className="text-zinc-400 font-normal">for</span><br />
                            Fast-Moving <span className="text-zinc-900 font-bold">Teams</span>
                        </h1>

                        <p className="text-lg md:text-[20px] text-zinc-500 max-w-lg mb-10 leading-[1.6] font-medium">
                            Part of the Everything App for Work: The world's only virtual whiteboard that turns ideas into coordinated actions—and connects them to the rest of your work, from tasks to docs to chat.
                        </p>

                        <div className="flex items-center gap-5 mb-24">
                            <button className="bg-[#1e1e1e] text-white px-9 py-4 rounded-xl font-bold text-[18px] hover:bg-black transition-all shadow-lg flex-shrink-0">
                                Get Started. It's FREE
                            </button>
                            <div className="flex flex-col text-[11px] font-bold leading-tight mt-1 uppercase tracking-wider">
                                <span className="text-[#7b68ee]">Free Forever.</span>
                                <span className="text-zinc-300">No credit card.</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Full Mockup as per image */}
                    <div className="lg:w-[55%] relative w-full lg:mt-0 mt-20">
                        <div className="relative rounded-2xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-zinc-100 bg-[#fbfbfb] aspect-[1.3/1] flex flex-col scale-110 lg:translate-x-12">

                            {/* Dot Grid Background */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                                style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '15px 15px' }} />

                            {/* Top Header Bar */}
                            <div className="h-14 border-b border-zinc-100 flex items-center justify-between px-6 bg-white shrink-0">
                                <div className="flex items-center gap-2">
                                    <div className="p-1 px-3 border border-zinc-200 rounded-lg flex items-center gap-2 text-xs font-semibold text-zinc-700 bg-white shadow-sm">
                                        <span className="text-zinc-600 opacity-60">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M4 10h18" /><path d="M12 4v16" /><path d="M2 14h20" /></svg>
                                        </span>
                                        Whiteboard
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex -space-x-1.5 grayscale opacity-70">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className={`w-7 h-7 rounded-full border-2 border-white bg-zinc-${i * 100 + 200}`} />
                                        ))}
                                    </div>
                                    <div className="bg-[#7b68ee15] text-[#7b68ee] px-3 py-1.5 rounded-lg text-xs font-bold">
                                        Share
                                    </div>
                                </div>
                            </div>

                            {/* Main Canvas Area */}
                            <div className="flex-1 relative p-10 overflow-hidden">

                                {/* Headers inside Canvas */}
                                <p className="absolute top-[5%] left-[5%] text-zinc-400 text-[12px] font-medium font-sans">Whiteboard AI: Create with ClickUp Context</p>
                                <p className="absolute top-[5%] left-[62%] text-zinc-400 text-[12px] font-medium font-sans italic">AI assisted Product Launch Plan</p>

                                {/* Sticky Note 1 (Cyan) */}
                                <div className="absolute top-[18%] left-[5%] w-[150px] h-[150px] bg-[#e0f7f9] shadow-sm border-b-2 border-r-2 border-[#b2ebf2] rounded-sm p-4 rotate-[-1deg]">
                                    <p className="text-[13px] font-sans font-medium text-zinc-700 leading-tight">
                                        Unique Visualization Capabilities
                                    </p>
                                </div>

                                {/* Sticky Note 2 (Orange) */}
                                <div className="absolute top-[22%] left-[38%] w-[150px] h-[150px] bg-[#fff3e0] shadow-sm border-b-2 border-r-2 border-[#ffe0b2] rounded-sm p-4 rotate-[1.5deg]">
                                    <div className="flex items-center gap-1 mb-2">
                                        <div className="w-4 h-4 rounded-full bg-pink-500/20" />
                                        <span className="text-[10px] uppercase font-bold text-pink-500">AI</span>
                                    </div>
                                    <p className="text-[13px] font-sans font-medium text-zinc-700 leading-tight">
                                        Integration with AI Initiatives
                                    </p>
                                </div>

                                {/* Sticky Note 3 (Pink) */}
                                <div className="absolute top-[48%] left-[24%] w-[150px] h-[150px] bg-[#fce4ec] shadow-sm border-b-2 border-r-2 border-[#f8bbd0] rounded-sm p-4 rotate-[0.5deg]">
                                    <div className="flex items-center gap-1 mb-2">
                                        <div className="w-4 h-4 rounded-full bg-pink-500/20" />
                                    </div>
                                    <p className="text-[13px] font-sans font-medium text-zinc-700 leading-tight">
                                        AI driven Object Creation
                                    </p>
                                </div>

                                {/* Right Group (Product Launch Plan) */}
                                <div className="absolute top-[15%] right-[5%] w-[35%] h-[70%] bg-[#7b68ee05] border border-[#7b68ee15] rounded-xl p-6">
                                    <div className="space-y-4">
                                        <div className="bg-[#e0f7f9]/50 p-4 border border-[#e0f7f9] rounded-lg">
                                            <p className="text-[11px] text-zinc-600 leading-snug">AI analyzes the project title and generates task categories</p>
                                        </div>
                                        <div className="bg-white p-4 border border-zinc-100 rounded-lg shadow-sm">
                                            <p className="text-[11px] text-zinc-600 leading-snug">AI auto-fills each category with typical tasks</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Cursor */}
                                <div className="absolute bottom-[25%] right-[22%] flex items-center gap-2 z-20">
                                    <svg className="w-4 h-4 text-purple-600 drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M2.1 21l2.4-7.2L2.1 3l19 9-19 9z" />
                                    </svg>
                                    <div className="bg-[#b388ff] text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap">
                                        Fan Lin: Here is the wireframe sketch
                                    </div>
                                </div>

                            </div>

                            {/* Bottom Toolbar */}
                            <div className="h-16 border-t border-zinc-100 bg-[#f9f9fa] flex items-center justify-center gap-4 shrink-0 px-8">
                                <div className="flex items-center gap-3 bg-white border border-zinc-200 rounded-xl p-1.5 shadow-sm">
                                    <div className="w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center text-zinc-400">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h7v7H3z" /><path d="M14 3h7v7h-7z" /><path d="M14 14h7v7h-7z" /><path d="M3 14h7v7H3z" /></svg>
                                    </div>
                                    <div className="w-8 h-8 rounded-lg bg-[#7b68ee10] flex items-center justify-center text-[#7b68ee] border border-[#7b68ee20]">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                                    </div>
                                    <div className="w-px h-6 bg-zinc-200" />
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5, 6, 7].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center text-zinc-400" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Decorative Background grid dots or similar (optional, but image already has them) */}
                </div>
            </div>

            {/* TRUSTED BY THE BEST - Focused, centered, and clean */}
            <div className="mt-24 w-full flex flex-col items-center gap-10 border-t border-zinc-100 pt-20 pb-10">
                <p className="text-[11px] font-bold text-zinc-400 tracking-[0.45em] uppercase text-center w-full">
                    TRUSTED BY THE BEST
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-12 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-700 px-8">
                    {/* Wayfair */}
                    <svg viewBox="0 0 100 25" className="h-6 w-auto fill-zinc-900">
                        <path d="M12.18,18.06 l-1.85-5.91 l-2.02,5.91 H6.17 l4.09-10.96 h2.38 l2.32,7.34 l2.35-7.34 h2.35 l4.14,10.96 h-2.29 l-2.02-5.88 l-1.88,5.88 H12.18 z M34.23,18.23 c-1.68,0-3.05-0.5-4.11-1.51 c-1.06-1.01-1.59-2.38-1.59-4.11 c0-1.74,0.53-3.08,1.59-4.03 c1.06-0.95,2.43-1.43,4.11-1.43 c1.18,0,2.18,0.25,3.02,0.76 v1.99 c-0.89-0.56-1.88-0.84-2.94-0.84 c-1.06,0-1.9,0.31-2.52,0.92 c-0.62,0.61-0.92,1.48-0.92,2.6 s0.31,2.02,0.92,2.66 c0.61,0.64,1.45,0.95,2.52,0.95 c0.56,0,1.12-0.08,1.68-0.25 v-2.13 h-2.02 v-1.76 h3.97 v4.87 C37.06,17.7,35.77,18.23,34.23,18.23 z M45.43,18.06 h-2.02 v-2.69 l-3.02-8.28 h2.32 l1.76,5.32 l1.71-5.32 h2.24 L45.43,18.06 z M52.57,18.06 h-2.13 v-10.96 h2.13 v1.4 c0,0,0,0,0,0 v-0.28 l0,0 c0.31-0.42,0.64-0.73,1.01-0.92 c0.36-0.2,0.78-0.28,1.26-0.28 v1.93 c-0.17-0.03-0.34-0.03-0.5-0.03 c-0.73,0-1.29,0.22-1.68,0.67 c-0.39,0.45-0.59,1.18-0.59,2.18 V18.06 z M62.2,18.23 c-1.68,0-3.05-0.5-4.11-1.51 c-1.06-1.01-1.59-2.38-1.59-4.11 c0-1.74,0.53-3.08,1.59-4.03 c1.06-0.95,2.43-1.43,4.11-1.43 c1.18,0,2.18,0.25,3.02,0.76 v1.99 c-0.89-0.56-1.88-0.84-2.94-0.84 c-1.06,0-1.9,0.31-2.52,0.92 c-0.62,0.61-0.92,1.48-0.92,2.6 s0.31,2.02,0.92,2.66 c0.61,0.64,1.45,0.95,2.52,0.95 c0.56,0,1.12-0.08,1.68-0.25 v-2.13 h-2.02 v-1.76 h3.97 v4.87 C65.04,17.7,63.74,18.23,62.2,18.23 z M69.76,9.07 c0-0.42,0.14-0.76,0.42-1.04 c0.28-0.28,0.61-0.42,1.01-0.42 c0.39,0,0.73,0.14,1.01,0.42 c0.28,0.28,0.42,0.61,0.42,1.04 c0,0.39-0.14,0.73-0.42,1.01 c-0.28,0.28-0.62,0.42-1.01,0.42 c-0.4,0-0.73-0.14-1.01-0.42 C69.9,9.8,69.76,9.46,69.76,9.07 z M69.15,18.06 h2.13 v-7.9 h-2.13 V18.06 z M76.84,18.06 h-2.13 v-7.9 h2.13 v1.09 c0.45-0.84,1.06-1.26,1.85-1.26 c0.17,0,0.31,0.03,0.42,0.06 v2.02 c-0.17-0.06-0.34-0.08-0.5-0.08 c-0.56,0-1.01,0.22-1.34,0.67 c-0.33,0.45-0.5,1.18-0.5,2.18 V18.06 z" />
                    </svg>
                    {/* Deloitte */}
                    <span className="font-bold text-2xl text-zinc-900 tracking-tight">Deloitte<span className="text-[#86BC25]">.</span></span>
                    {/* Pfizer */}
                    <span className="font-serif text-3xl font-bold text-zinc-900 italic">Pfizer</span>
                    {/* Adobe */}
                    <div className="flex items-center gap-1.5">
                        <div className="bg-[#FF0000] w-6 h-6 flex items-center justify-center pt-1" >
                            <span className="text-white font-bold text-sm">A</span>
                        </div>
                        <span className="font-bold text-2xl text-zinc-900">Adobe</span>
                    </div>
                    {/* American */}
                    <span className="font-serif text-xl font-bold text-zinc-900 uppercase">American</span>
                    {/* NBCUniversal */}
                    <span className="font-bold text-lg text-zinc-900">NBCUniversal</span>
                </div>
            </div>
        </section>
    );
}
