"use client";

import { Button } from "@/components/ui/Button";
import { Command, Mic } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';

export const TalkToTextFinalCTA = () => {
    return (
        <section className="py-24 px-4 bg-black text-white relative">
            <div className="container mx-auto max-w-6xl">

                {/* CTA Card */}
                <div className="relative rounded-[40px] bg-[#121214] border border-white/10 overflow-hidden mb-32 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Background Glows */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-orange-900/10 pointer-events-none" />

                    {/* Left Content */}
                    <div className="relative z-10 max-w-xl">
                        <span className="text-orange-500 font-bold tracking-wide text-sm mb-4 block">4x Your Productivity Today</span>
                        <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
                            Ready to Start<br />Dictating?
                        </h2>

                        <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white text-lg font-bold px-8 py-6 rounded-xl shadow-lg transition-all hover:scale-105 flex items-center gap-3">
                            <div className="grid grid-cols-2 gap-0.5">
                                <div className="w-1.5 h-1.5 bg-white rounded-[1px]" />
                                <div className="w-1.5 h-1.5 bg-white rounded-[1px]" />
                                <div className="w-1.5 h-1.5 bg-white rounded-[1px]" />
                                <div className="w-1.5 h-1.5 bg-white rounded-[1px]" />
                            </div>
                            Download for Windows
                        </Button>
                    </div>

                    {/* Right Visual (Glowing Dictation Bar) */}
                    <div className="relative z-10 w-full max-w-md">
                        <div className="relative bg-[#1c1c1e] border border-white/10 rounded-2xl p-6 shadow-2xl">
                            {/* Orange Glow Effect behind the bar */}
                            <div className="absolute inset-0 bg-orange-500/20 blur-[40px] -z-10" />

                            <div className="flex items-center justify-between gap-4 h-16 px-4 bg-[#0f0f10] rounded-xl border border-white/5">
                                {/* Recording Dot */}
                                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse shadow-[0_0_10px_orange]" />

                                {/* Waveform */}
                                <div className="flex-1 flex items-center justify-center gap-0.5 h-full opacity-80">
                                    {[...Array(30)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="w-1 bg-gradient-to-t from-orange-500/50 to-white/80 rounded-full"
                                            style={{
                                                height: `${Math.max(20, Math.random() * 40)}%`,
                                                opacity: Math.random() > 0.5 ? 1 : 0.5
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Bottom Controls */}
                            <div className="flex justify-between items-center mt-4 text-[10px] uppercase font-bold tracking-wider text-gray-500">
                                <div className="flex gap-4">
                                    <span>Stop</span>
                                    <span className="flex items-center gap-1"><Command size={10} /> <span>H</span></span>
                                </div>
                                <div className="flex gap-4">
                                    <span>Close</span>
                                    <span>Esc</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer */}
                <footer className="border-t border-white/10 pt-16 flex flex-col md:flex-row justify-between items-end gap-8">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        {/* ClickUp Logo Mock */}
                        <div className="relative w-8 h-8">
                            <div className="absolute inset-0 bg-[#7B68EE] rounded-tr-xl rounded-bl-xl" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 bg-white rounded-tl-xl" />
                        </div>
                        <span className="text-2xl font-bold text-white tracking-tight">ClickUp</span>
                    </div>

                    {/* Socials & Links */}
                    <div className="flex flex-col items-end gap-8">
                        {/* Social Icons */}
                        <div className="flex gap-6">
                            {['linkedin', 'facebook', 'instagram', 'twitter'].map((social) => (
                                <Link key={social} href="#" className="text-gray-400 hover:text-white transition-colors">
                                    {/* Using simple circles/shapes for now as generic icons, referencing Lucide generally or just abstract */}
                                    <div className="w-6 h-6 bg-current rounded-full opacity-80" />
                                </Link>
                            ))}
                        </div>

                        {/* Legal Links */}
                        <div className="flex flex-wrap gap-8 text-xs font-medium text-gray-400">
                            <span>© 2025 ClickUp</span>
                            <Link href="#" className="hover:text-white transition-colors">Security</Link>
                            <Link href="#" className="hover:text-white transition-colors">Your Privacy</Link>
                            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                        </div>
                    </div>

                </footer>

            </div>
        </section>
    );
};
