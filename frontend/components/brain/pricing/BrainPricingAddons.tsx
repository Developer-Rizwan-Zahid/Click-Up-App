"use client";

import { ArrowRight, Bot, Mic, Video } from "lucide-react";

export const BrainPricingAddons = () => {
    return (
        <section className="bg-black py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-16 leading-tight">
                    Upgrade your way with <br />
                    flexible, optional add-ons
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Super Agents */}
                    <AddonCard
                        badge="SUPER AGENTS"
                        badgeColor="bg-[#00D09C] text-black"
                        icon={<Bot size={24} />}
                        title="AI Super Credits"
                        price="$10"
                        subtext="for 10K credits"
                        description="AI Super Credits for Super Agents, AI Fields, Image Gen, and more!"
                        btnColor="bg-[#00D09C] text-black hover:bg-[#00D09C]/90"
                    />

                    {/* Talk to Text */}
                    <AddonCard
                        badge="UNLIMITED"
                        badgeColor="bg-[#E500D0] text-black"
                        icon={<Mic size={24} />}
                        title="Talk to Text"
                        price="$9"
                        subtext="user/month"
                        description="Effortless unlimited voice dictation to easily convert talk-to-text."
                        btnColor="bg-[#E500D0] text-white hover:bg-[#E500D0]/90"
                    />

                    {/* AI Notetaker */}
                    <AddonCard
                        badge="AI NOTETAKER" // Actually no badge in image for this generally, but keeps consistency or use blank
                        badgeColor="bg-transparent text-transparent"
                        icon={<Video size={24} />}
                        title="AI Notetaker"
                        price="$12"
                        subtext="starting for 60 hours/month"
                        description="Meeting video recording, smart summaries, searchable transcripts and action items."
                        btnColor="bg-[#0099FF] text-white hover:bg-[#0099FF]/90"
                    />
                </div>
            </div>
        </section>
    );
};

const AddonCard = ({ badge, badgeColor, icon, title, price, subtext, description, btnColor }: any) => (
    <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 flex flex-col h-full hover:border-white/20 transition-colors group">
        <div className="mb-6">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${badgeColor} inline-block mb-4`}>
                {badge}
            </span>
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/5 rounded-lg text-white">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
            <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-black text-white">{price}</span>
                <span className="text-xs text-gray-500 font-medium">{subtext}</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed min-h-[60px]">
                {description}
            </p>
        </div>
        <div className="mt-auto">
            <button className={`w-full py-3 rounded-xl font-bold text-sm transition-transform active:scale-95 ${btnColor}`}>
                Get started
            </button>
        </div>
    </div>
);
