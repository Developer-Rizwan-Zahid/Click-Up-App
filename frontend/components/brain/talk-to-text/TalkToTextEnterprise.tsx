"use client";

import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, CheckCircle, Database, Server, RefreshCw, Key } from "lucide-react";

export const TalkToTextEnterprise = () => {
    return (
        <section className="py-32 px-4 bg-black text-white relative">

            <div className="container mx-auto max-w-6xl">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-24 relative">

                    {/* Glowing Lock Visual */}
                    <div className="relative mx-auto w-32 h-32 mb-8 flex items-center justify-center">
                        <div className="absolute inset-0 bg-[#22c55e]/20 blur-[50px] rounded-full" />
                        <div className="relative z-10 text-[#22c55e]">
                            <Lock size={64} strokeWidth={1.5} />
                            {/* Floating Particles */}
                            <motion.div
                                animate={{ y: [-5, 5, -5], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -top-2 -right-2 w-2 h-2 bg-[#22c55e] rounded-full blur-[1px]"
                            />
                            <motion.div
                                animate={{ y: [5, -5, 5], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                                className="absolute top-1/2 -left-4 w-1.5 h-1.5 bg-[#22c55e] rounded-full blur-[1px]"
                            />
                        </div>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22c55e]/10 text-[#22c55e] text-xs font-bold border border-[#22c55e]/20 mb-8">
                        <Lock size={12} />
                        <span>Privacy & Compliance</span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                        Enterprise-grade peace of mind
                    </h2>
                    <p className="text-xl text-gray-400 font-medium">
                        Your data stays secure and private with ClickUp.<br />
                        Third-party AI providers never store or learn from your information.
                    </p>
                </div>

                {/* Compliance Grid (4 Columns) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-y border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10 mb-16">

                    {/* GDPR */}
                    <div className="p-8 text-center group hover:bg-white/5 transition-colors">
                        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-dashed border-gray-600 rounded-full text-gray-400 group-hover:text-white group-hover:border-white transition-colors">
                            <div className="text-xs font-bold font-mono">GDPR</div>
                        </div>
                        <h3 className="font-bold text-white mb-3">GDPR compliant</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            ClickUp complies with GDPR, protecting your privacy and ensuring that your personal data is always secure and well-managed.
                        </p>
                    </div>

                    {/* ISO */}
                    <div className="p-8 text-center group hover:bg-white/5 transition-colors">
                        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                            <Shield size={40} strokeWidth={1} />
                        </div>
                        <h3 className="font-bold text-white mb-3">ISO compliant</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            ClickUp is ISO 42001 certified, setting a trusted standard for secure, transparent, and responsible AI management in the workplace.
                        </p>
                    </div>

                    {/* HIPAA */}
                    <div className="p-8 text-center group hover:bg-white/5 transition-colors">
                        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                            <div className="border border-current rounded p-1">
                                <div className="text-[10px] font-bold">HIPAA</div>
                            </div>
                        </div>
                        <h3 className="font-bold text-white mb-3">HIPAA compliant</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            ClickUp complies with HIPAA, safeguarding sensitive health information and keeping all data confidential, private, and fully secure.
                        </p>
                    </div>

                    {/* SOC 2 */}
                    <div className="p-8 text-center group hover:bg-white/5 transition-colors">
                        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border-2 border-gray-600 rounded-full text-gray-400 group-hover:text-white group-hover:border-white transition-colors">
                            <div className="text-[10px] font-bold text-center leading-tight">SOC 2<br />Type II</div>
                        </div>
                        <h3 className="font-bold text-white mb-3">AICPA SOC 2 compliant</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            ClickUp complies with AICPA SOC 2, maintaining rigorous controls to protect your data and ensuring AI providers cannot access or use it.
                        </p>
                    </div>

                </div>

                {/* Bottom Row: Security Guarantees */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">

                    <div className="flex flex-col items-center">
                        <div className="mb-4 text-[#22c55e]">
                            <CheckCircle size={24} />
                        </div>
                        <h3 className="font-bold text-white mb-2">No third-party data training</h3>
                        <p className="text-sm text-gray-500">
                            We forbid third-party AI providers from training on your data.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="mb-4 text-[#22c55e]">
                            <Database size={24} />
                        </div>
                        <h3 className="font-bold text-white mb-2">Zero third-party data retention</h3>
                        <p className="text-sm text-gray-500">
                            We don't allow third-party AI providers to store any of your data.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="mb-4 text-[#22c55e]">
                            <RefreshCw size={24} />
                        </div>
                        <h3 className="font-bold text-white mb-2">Multi-model support</h3>
                        <p className="text-sm text-gray-500">
                            We offer the latest AI models, with unified permissions, privacy, and security controls.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};
