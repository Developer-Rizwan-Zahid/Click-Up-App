"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { BrainCta } from "@/components/brain/shared/BrainCta";
import { GptHero } from "@/components/brain/gpt/GptHero";
import { GptStats } from "@/components/brain/gpt/GptStats";
import { GptContextFeature } from "@/components/brain/gpt/GptContextFeature";
import { GptBentoGrid } from "@/components/brain/gpt/GptBentoGrid";
import { GptTalkToTextShowcase } from "@/components/brain/gpt/GptTalkToTextShowcase";
import { GptTalkToTextFeatures } from "@/components/brain/gpt/GptTalkToTextFeatures";
import { GptSecurity } from "@/components/brain/gpt/GptSecurity";
import { GptConnect } from "@/components/brain/gpt/GptConnect";
import { Sparkles, Bot, MessageSquare, FileText, Search, ArrowRight } from "lucide-react";
import Link from "next/link";

export const GptLanding = () => {
    return (
        <div className="bg-black min-h-screen text-white font-sans selection:bg-purple-500 selection:text-white dark">
            <Navbar />

            <main className="pt-8 pb-20">
                <GptHero />
                <GptStats />
                <GptContextFeature />
                <GptBentoGrid />
                <GptTalkToTextShowcase />
                <GptTalkToTextFeatures />
                <GptSecurity />
                <GptConnect />
                <BrainCta />
            </main>
        </div>
    );
};
