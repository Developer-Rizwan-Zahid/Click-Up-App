"use client";

import { ShieldCheck, ArrowDown, ArrowUp, Minus } from "lucide-react";

export const BrainPricingTrust = () => {
    return (
        <section className="bg-black pb-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>
                        <div className="text-[#8F00FF] font-bold text-xs tracking-widest uppercase mb-4">
                            SUPER FAIR BILLING POLICY
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                            When we optimize, <br />
                            you save $
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed mb-12">
                            When our teams save on AI Super Credit costs, we pass them onto you.
                            When sudden increases in costs occur as a result of new models or other changes,
                            we subsidize the cost so you don't see any sudden increases on AI Super Credit usage.
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">OUR GUARANTEE</div>
                                <div className="text-white font-bold text-lg mb-4">If our AI cost...</div>
                                <div className="flex items-center gap-2 text-green-500 font-bold mb-2">
                                    <ArrowDown size={18} className="bg-green-500/20 rounded-full p-0.5" /> Decreases
                                </div>
                                <div className="flex items-center gap-2 text-red-500 font-bold">
                                    <ArrowUp size={18} className="bg-red-500/20 rounded-full p-0.5" /> Increases
                                </div>
                            </div>
                            <div>
                                <div className="text-[10px] font-bold text-transparent uppercase tracking-wider mb-2">.</div>
                                <div className="text-white font-bold text-lg mb-4">Then your price...</div>
                                <div className="flex items-center gap-2 text-green-500 font-bold mb-2">
                                    <ArrowDown size={18} className="bg-green-500/20 rounded-full p-0.5" /> Decreases
                                </div>
                                <div className="flex items-center gap-2 text-blue-400 font-bold">
                                    <Minus size={18} className="bg-blue-500/20 rounded-full p-0.5" /> Stays flat
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual - Credit Card */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-gray-800/20 to-gray-700/20 rounded-3xl blur-2xl transform rotate-3" />
                        <div className="relative bg-[#1a1a1a] rounded-2xl border border-white/10 p-8 aspect-[1.6/1] flex flex-col justify-between overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                            <div className="flex justify-between items-start z-10">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded bg-gradient-to-tr from-blue-500 to-purple-500" />
                                    <span className="font-bold text-white tracking-wide">Super Agent</span>
                                </div>
                                <div className="flex space-x-1">
                                    {[...Array(4)].map((_, i) => <div key={i} className="w-1 h-1 bg-white/20 rounded-full" />)}
                                </div>
                            </div>

                            <div className="z-10">
                                <div className="text-[10px] text-gray-500 font-mono tracking-widest mb-1">PRICE PER CREDIT</div>
                                <div className="text-5xl font-mono text-white tracking-tighter shadow-black drop-shadow-lg">$0.001</div>
                            </div>

                            {/* Abstract chip lines */}
                            <div className="absolute bottom-8 right-8 w-24 h-16 opacity-20">
                                <div className="w-full h-full border border-white rounded-lg flex flex-col justify-between p-1">
                                    <div className="w-full h-[1px] bg-white" />
                                    <div className="w-full h-[1px] bg-white" />
                                    <div className="w-full h-[1px] bg-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
