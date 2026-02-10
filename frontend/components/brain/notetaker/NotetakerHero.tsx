"use client";

import { motion } from "framer-motion";
import { ArrowRight, Video, Sparkles, User, MonitorPlay } from "lucide-react";
import Image from "next/image";

export const NotetakerHero = () => {
    return (
        <section className="pt-32 pb-20 bg-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none" />

            {/* Side Circuit Lines (CSS approximation) */}
            <div className="absolute left-10 lg:left-20 top-1/2 -translate-y-1/2 h-64 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden xl:block">
                <div className="absolute top-1/2 left-0 w-10 h-[1px] bg-white/10" />
                <div className="absolute top-1/2 -left-1 w-2 h-2 bg-white/20 rounded-full" />
            </div>
            <div className="absolute right-10 lg:right-20 top-1/2 -translate-y-1/2 h-64 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden xl:block">
                <div className="absolute top-1/2 right-0 w-10 h-[1px] bg-white/10" />
                <div className="absolute top-1/2 -right-1 w-2 h-2 bg-white/20 rounded-full" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">

                {/* Headline Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-4xl mx-auto mb-16"
                >
                    <div className="text-gray-400 font-medium mb-6 text-sm">AI Notetaker</div>
                    <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
                        Automatic meeting notes that <br />
                        connect to <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-500">docs and tasks</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Smart summaries, searchable transcripts, action items – <br className="hidden md:block" />
                        all with the power of tasks, docs, and ClickUp AI.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
                            Get Started. It's free <ArrowRight size={16} />
                        </button>
                        <button className="px-8 py-3 rounded-full bg-white/10 border border-white/5 text-white font-bold hover:bg-white/20 transition-colors">
                            Book a demo
                        </button>
                    </div>
                </motion.div>

                {/* Central Visual Mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative w-full max-w-3xl"
                >
                    {/* Glow behind container */}
                    <div className="absolute inset-0 bg-fuchsia-600/20 blur-[80px] rounded-full pointer-events-none transform translate-y-20" />

                    <div className="relative bg-[#0E0E12]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden">

                        {/* Video Feeds Grid */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {/* User 1 */}
                            <div className="aspect-[4/5] bg-neutral-800 rounded-xl overflow-hidden relative group">
                                <Image
                                    src="/images/brain/notetaker/user1.png"
                                    alt="Host"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-2 right-2 bg-black/40 p-1 rounded-full"><div className="w-4 h-4 rounded-full border-2 border-white/50" /></div>
                                <div className="absolute bottom-2 left-2 text-[10px] text-white bg-black/50 px-2 py-0.5 rounded">Host</div>
                            </div>
                            {/* User 2 */}
                            <div className="aspect-[4/5] bg-neutral-800 rounded-xl overflow-hidden relative">
                                <Image
                                    src="/images/brain/notetaker/user2.png"
                                    alt="Akila"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-2 right-2 text-[10px] text-white bg-black/50 px-2 py-0.5 rounded">Akila</div>
                            </div>
                            {/* User 3 */}
                            <div className="aspect-[4/5] bg-neutral-800 rounded-xl overflow-hidden relative">
                                <Image
                                    src="/images/brain/notetaker/user3.png"
                                    alt="Corbyn"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-2 right-2 text-[10px] text-white bg-black/50 px-2 py-0.5 rounded">Corbyn</div>
                            </div>
                        </div>

                        {/* AI Status Bar */}
                        <div className="relative z-10 mx-auto max-w-sm">
                            <div className="bg-[#1a1a1a] border border-white/10 rounded-full px-4 py-2 flex items-center justify-center gap-3 mb-4 shadow-lg">
                                <div className="w-5 h-5 rounded-full border-2 border-t-fuchsia-500 border-r-fuchsia-500 border-b-transparent border-l-transparent animate-spin" />
                                <span className="text-gray-300 text-sm font-medium">AI is taking notes...</span>
                            </div>
                        </div>

                        {/* Transcript Bubble */}
                        <div className="bg-gradient-to-r from-fuchsia-900/40 to-purple-900/40 border border-fuchsia-500/20 rounded-xl p-4 text-center max-w-lg mx-auto backdrop-blur-md">
                            <p className="text-gray-300 text-sm">
                                The <span className="bg-fuchsia-500/30 text-white rounded px-1">onboarding flow UX</span> could be improved, let's prioritize it
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Integration Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <p className="text-sm text-fuchsia-300 mb-4">Join any call from anywhere in ClickUp</p>
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-10 h-10 bg-[#1a1a1a] rounded-xl flex items-center justify-center border border-white/10 hover:border-blue-500/50 transition-colors">
                            {/* Zoom Proxy */}
                            <Video className="text-blue-500" size={20} />
                        </div>
                        <div className="w-10 h-10 bg-[#1a1a1a] rounded-xl flex items-center justify-center border border-white/10 hover:border-green-500/50 transition-colors">
                            {/* Meet Proxy */}
                            <MonitorPlay className="text-green-500" size={20} />
                        </div>
                        <div className="w-10 h-10 bg-[#1a1a1a] rounded-xl flex items-center justify-center border border-white/10 hover:border-purple-500/50 transition-colors">
                            {/* Teams Proxy */}
                            <User className="text-purple-500" size={20} />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
