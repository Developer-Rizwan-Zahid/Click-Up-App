"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Play, Settings, Bell, UserPlus, Mail } from "lucide-react";

export default function AutomationsHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-white text-slate-900 border-b border-slate-100">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 transform translate-x-20 z-0 hidden lg:block" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block mb-6">
                            <span className="text-sm font-bold tracking-[0.2em] text-indigo-600 uppercase">
                                ClickUp Automations
                            </span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-slate-900">
                            Let ClickUp do your team’s busywork
                        </h1>

                        <p className="text-xl text-slate-500 mb-8 leading-relaxed max-w-xl">
                            Select from 100+ Automations to streamline workflows, tackle routine tasks, manage project handoffs, and so much more.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
                            <button className="w-full sm:w-auto px-10 py-4 rounded-xl bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 group">
                                Get started free
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <div className="flex flex-col items-start px-4">
                                <span className="text-sm font-bold text-slate-400">FREE FOREVER</span>
                                <span className="text-xs text-slate-400">NO CREDIT CARD REQUIRED</span>
                            </div>
                        </div>

                        {/* Social Proof */}
                        <div className="flex items-center gap-6">
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <div className="text-sm font-semibold text-slate-400">
                                25,000+ reviews from
                            </div>
                            <div className="flex items-center gap-4 opacity-40 grayscale">
                                <div className="font-black text-xs">G2</div>
                                <div className="font-black text-xs">Capterra</div>
                                <div className="font-black text-xs">GetApp</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Visual Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden aspect-[4/3] p-8 group">
                            {/* Builder Background Grid */}
                            <div className="absolute inset-0 bg-[#f8fafc] opacity-50" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                            {/* Automation Flow Visual */}
                            <div className="relative z-10 h-full flex flex-col justify-center items-center gap-8">
                                {/* Trigger Card */}
                                <motion.div
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-full max-w-[280px] bg-white rounded-lg p-4 shadow-md border border-slate-100 flex items-center gap-4"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                                        <Settings className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider mb-1">When</div>
                                        <div className="text-xs font-semibold text-slate-700">Status changes to "Ready"</div>
                                    </div>
                                </motion.div>

                                {/* Connector Line */}
                                <div className="w-px h-12 bg-gradient-to-b from-indigo-200 to-indigo-600" />

                                {/* Action Card */}
                                <motion.div
                                    animate={{ scale: [1, 1.02, 1] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="w-full max-w-[280px] bg-white rounded-lg p-4 shadow-lg border border-indigo-100 flex items-center gap-4 ring-2 ring-indigo-500 ring-offset-4"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center">
                                        <UserPlus className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider mb-1">Then</div>
                                        <div className="text-xs font-semibold text-slate-700">Assign to Marketing Team</div>
                                    </div>
                                </motion.div>

                                {/* Connector Line */}
                                <div className="w-px h-12 bg-indigo-600" />

                                {/* Action Card 2 */}
                                <motion.div
                                    animate={{ y: [0, 4, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-full max-w-[280px] bg-white rounded-lg p-4 shadow-md border border-slate-100 flex items-center gap-4"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1">And</div>
                                        <div className="text-xs font-semibold text-slate-700">Send confirmation email</div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Floating UI Elements */}
                            <div className="absolute top-6 right-6 w-32 h-10 bg-indigo-50 rounded-full border border-indigo-100 flex items-center justify-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-[10px] font-bold text-indigo-600 tracking-wider">ACTIVE NOW</span>
                            </div>

                            <div className="absolute bottom-6 left-6 flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                                ))}
                            </div>

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors flex items-center justify-center">
                                <button className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                                </button>
                            </div>
                        </div>

                        {/* Background Shapes */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
