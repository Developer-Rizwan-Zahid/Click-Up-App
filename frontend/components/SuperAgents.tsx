"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const SuperAgents = () => {
    return (
        <section className="py-32 bg-gradient-to-b from-white to-orange-50/30 overflow-hidden relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-6xl font-black text-[#292D34] mb-6 tracking-tight leading-tight"
                    >
                        A new era of humans, with Super Agents
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-500 font-medium"
                    >
                        Build your own agent
                    </motion.p>
                </div>

                {/* Central Visual */}
                <div className="relative w-full max-w-lg mx-auto aspect-[4/5] md:aspect-square flex items-end justify-center">

                    {/* Person Image (Placeholder) */}
                    <div className="absolute inset-0 bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1000&auto=format&fit=crop"
                            alt="Person"
                            className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent mix-blend-overlay" />
                    </div>

                    {/* Mask Animation */}
                    <motion.div
                        initial={{ y: -300, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.2 }}
                        className="absolute top-[35%] w-[80%] h-[20%] z-20"
                    >
                        {/* Mask Shape */}
                        <div className="w-full h-full rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 shadow-2xl flex items-center justify-center gap-6 relative overflow-hidden backdrop-blur-sm border-2 border-white/20">
                            {/* Eye Holes */}
                            <div className="w-16 h-16 bg-black/20 rounded-full shadow-inner mix-blend-multiply" />
                            <div className="w-16 h-16 bg-black/20 rounded-full shadow-inner mix-blend-multiply" />

                            {/* Sheen Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent skew-x-12 opacity-50" />
                        </div>

                        {/* Label on Mask */}
                        <div className="absolute top-2 left-4 text-[10px] font-bold text-white/80 uppercase tracking-widest">Super Agent</div>
                    </motion.div>


                    {/* Floating Info Cards/Labels */}
                    <FloatingLabel
                        label="WORKS"
                        value="24/7"
                        top="20%"
                        left="-10%"
                        delay={0.5}
                    />

                    <FloatingLabel
                        label="INFINITE"
                        value="MEMORY"
                        top="60%"
                        right="-15%"
                        delay={0.7}
                        align="right"
                    />

                    <FloatingLabel
                        label="DELEGATE"
                        value="ANY TASK"
                        bottom="10%"
                        left="-5%"
                        delay={0.9}
                    />

                    {/* Background Graphic Elements */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="absolute -bottom-20 -left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl -z-10"
                    />

                </div>
            </div>
        </section>
    );
};

function FloatingLabel({ label, value, top, left, right, bottom, delay, align = "left" }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, x: align === "left" ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="absolute bg-white/80 backdrop-blur-md px-6 py-3 rounded-xl border border-white shadow-lg text-gray-800 z-30 hidden md:block"
            style={{ top, left, right, bottom }}
        >
            <div className="text-xs font-bold text-gray-400 mb-1 tracking-widest">{label}</div>
            <div className="text-xl font-black font-mono flex items-center">
                {value === "24/7" ? <CounterAnimation value={24} suffix="/7" /> : value}
            </div>
            {/* Decorative Line */}
            <div className="absolute -bottom-8 w-20 h-[1px] bg-gray-300 rotate-45 origin-top-left opacity-0" /> {/* Simplify connector lines for now or use SVG if needed */}
        </motion.div>
    )
}

function CounterAnimation({ value, suffix }: { value: number, suffix: string }) {
    const nodeRef = useRef<HTMLSpanElement>(null);

    // A simple counting effect could be done with useSpring + useTransform in a real scenario
    // For now, we'll just render it static or simple spin, 
    // but to be fancy let's try a quick useEffect counter.

    return (
        <span>
            {value}{suffix}
        </span>
    )
}
