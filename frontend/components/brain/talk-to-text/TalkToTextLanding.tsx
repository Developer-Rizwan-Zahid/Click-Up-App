"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { TalkToTextFinalCTA } from "@/components/brain/talk-to-text/TalkToTextFinalCTA";
import Link from "next/link";
import { Sparkles, Bot, MessageSquare, FileText, Search, ArrowRight, Shield, Globe, Type, Zap } from "lucide-react";
// Import sections
import { TalkToTextHero } from "@/components/brain/talk-to-text/TalkToTextHero";
import { TalkToTextFeatures } from "@/components/brain/talk-to-text/TalkToTextFeatures";
import { TalkToTextContext } from "@/components/brain/talk-to-text/TalkToTextContext";
import { TalkToTextAnywhere } from "@/components/brain/talk-to-text/TalkToTextAnywhere";
import { TalkToTextOutput } from "@/components/brain/talk-to-text/TalkToTextOutput";
import { TalkToTextEnterprise } from "@/components/brain/talk-to-text/TalkToTextEnterprise";

export const TalkToTextLanding = () => {
    return (
        <div className="bg-black min-h-screen text-white font-sans selection:bg-purple-500 selection:text-white dark">
            <Navbar />

            <main className="pt-8 pb-20">
                <TalkToTextHero />
                <TalkToTextFeatures />
                <TalkToTextContext />
                <TalkToTextAnywhere />
                <TalkToTextOutput />
                <TalkToTextOutput />
                <TalkToTextEnterprise />
                <TalkToTextFinalCTA />
            </main>
        </div>
    );
};
