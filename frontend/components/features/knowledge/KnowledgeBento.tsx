'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Search, Network } from 'lucide-react';

const Card = ({ title, subtitle, icon, delay, className }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className={`bg-zinc-50/50 border border-zinc-100 rounded-[2rem] p-8 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 group ${className}`}
    >
        <div className="mb-6 p-4 rounded-2xl bg-white shadow-sm border border-zinc-100 w-fit group-hover:scale-110 transition-transform duration-500">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-zinc-900 mb-3">{title}</h3>
        <p className="text-zinc-500 font-medium leading-relaxed">{subtitle}</p>
    </motion.div>
);

export default function KnowledgeBento() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20 px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-[56px] leading-[1.1] font-bold text-zinc-900 mb-6 font-sans tracking-tight"
                    >
                        ClickUp AI transforms how you create and share company knowledge
                    </motion.h2>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 px-4">
                    {/* Large Card */}
                    <Card
                        delay={0.1}
                        className="md:col-span-8 md:row-span-2 flex flex-col justify-between overflow-hidden relative"
                        icon={<Search className="w-8 h-8 text-blue-500" />}
                        title="Centralized knowledge in Docs Hub"
                        subtitle="Bring all your company knowledge together in one place. Search, sort, and filter every Doc and wiki across your entire workspace with ease."
                    />

                    {/* Smaller Cards */}
                    <Card
                        delay={0.2}
                        className="md:col-span-4"
                        icon={<Shield className="w-8 h-8 text-purple-500" />}
                        title="Advanced permissions"
                        subtitle="Granular control over who can view and edit."
                    />

                    <Card
                        delay={0.3}
                        className="md:col-span-4"
                        icon={<Clock className="w-8 h-8 text-orange-500" />}
                        title="Version history"
                        subtitle="Track changes and restore previous versions effortlessly."
                    />

                    {/* Bottom Medium Card */}
                    <Card
                        delay={0.4}
                        className="md:col-span-12 flex flex-col md:flex-row items-center gap-10"
                        icon={<Network className="w-8 h-8 text-green-500" />}
                        title="Everything is connected"
                        subtitle="Your docs and wikis are directly linked to your tasks, chats, and goals, creating a seamless knowledge ecosystem that powers your entire team."
                    />
                </div>
            </div>
        </section>
    );
}
