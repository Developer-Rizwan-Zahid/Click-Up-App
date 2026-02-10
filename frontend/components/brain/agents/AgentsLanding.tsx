"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { BrainCta } from "@/components/brain/shared/BrainCta";
import { SuperAgentsHero } from "@/components/brain/agents/SuperAgentsHero";
import { RoleBasedAgents } from "@/components/brain/agents/RoleBasedAgents";
import { CustomAgentBuilder } from "@/components/brain/agents/CustomAgentBuilder";
import { AgentIntegrations } from "@/components/brain/agents/AgentIntegrations";
import { Sparkles, Bot, MessageSquare, FileText, Search, ArrowRight } from "lucide-react";
import Link from "next/link";

export const AgentsLanding = () => {
    return (
        <div className="bg-white min-h-screen text-black font-sans selection:bg-purple-100 selection:text-purple-900">
            <Navbar />
            <main className="pt-8 pb-20">
                <SuperAgentsHero />
                <RoleBasedAgents />
                <CustomAgentBuilder />
                <AgentIntegrations />
                <BrainCta />
            </main>
        </div>
    );
};
