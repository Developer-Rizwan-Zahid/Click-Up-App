'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Zap, ListTodo, Search } from 'lucide-react';

const Card = ({ title, description, icon, delay, className, color }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className={`relative overflow-hidden bg-zinc-50/50 border border-zinc-100 rounded-[2.5rem] p-8 hover:bg-white hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500 group ${className}`}
    >
        <div className={`mb-6 p-4 rounded-2xl bg-white shadow-sm border border-zinc-100 w-fit group-hover:scale-110 transition-transform duration-500 ${color}`}>
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-zinc-900 mb-4">{title}</h3>
        <p className="text-zinc-500 font-medium leading-relaxed">{description}</p>

        {/* Subtle background glow on hover */}
        <div className={`absolute -bottom-10 -right-10 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-full ${color.replace('text-', 'bg-')}`} />
    </motion.div>
);

export default function CalendarBento() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Feature 1: AI Scheduling */}
                    <Card
                        delay={0.1}
                        className="md:col-span-8 md:row-span-2 flex flex-col justify-end min-h-[450px]"
                        color="text-blue-500"
                        icon={<Sparkles className="w-8 h-8" />}
                        title="Automated Scheduling"
                        description="Let ClickUp AI automatically block time for your highest priority tasks. It analyzes your bandwidth and goals to ensure you're always focused on what matters most."
                    />

                    {/* Feature 2: Meeting Intelligence */}
                    <Card
                        delay={0.2}
                        className="md:col-span-4"
                        color="text-purple-500"
                        icon={<ListTodo className="w-8 h-8" />}
                        title="Meeting Intelligence"
                        description="AI-generated summaries and action items from every call."
                    />

                    {/* Feature 3: Integration */}
                    <Card
                        delay={0.3}
                        className="md:col-span-4"
                        color="text-orange-500"
                        icon={<Zap className="w-8 h-8" />}
                        title="Workflow Sync"
                        description="Your calendar and tasks work as one connected ecosystem."
                    />

                    {/* Feature 4: Search & Analytics */}
                    <Card
                        delay={0.4}
                        className="md:col-span-12 flex flex-col md:flex-row items-center gap-10"
                        color="text-green-500"
                        icon={<Search className="w-8 h-8" />}
                        title="Search and ask questions about your schedule"
                        description="Find exactly what you need in seconds. Ask AI about meeting details, upcoming deadlines, or historical context across your entire calendar history."
                    />
                </div>
            </div>
        </section>
    );
}