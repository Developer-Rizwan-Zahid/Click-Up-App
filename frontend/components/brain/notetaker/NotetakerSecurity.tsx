"use client";

import { motion } from "framer-motion";
import { Shield, Lock, RefreshCw, EyeOff, CheckCircle2 } from "lucide-react";

export const NotetakerSecurity = () => {
    return (
        <section className="bg-black py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-white">

            {/* Security Header with Lock Visual */}
            <div className="flex flex-col items-center justify-center mb-24 relative z-10">
                {/* Lock Glow Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-500/10 blur-[100px] rounded-full pointer-events-none" />

                {/* Lock Icon/Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 relative"
                >
                    <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full" />
                    <Lock size={80} className="text-white/20 absolute -top-12 -left-20 opacity-20 rotate-12" />

                    <div className="relative bg-[#111] border border-white/10 rounded-full px-6 py-2 flex items-center gap-2 shadow-2xl">
                        <Lock size={16} className="text-green-500" />
                        <span className="text-sm font-bold text-white uppercase tracking-wider">Privacy & Compliance</span>
                    </div>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-black text-center mb-6 tracking-tight"
                >
                    Enterprise-grade peace of mind
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg md:text-xl text-gray-400 text-center max-w-2xl"
                >
                    Your data stays secure and private with ClickUp.
                    <br />
                    Third-party AI providers never store or learn from your information.
                </motion.p>
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Compliance Badges Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-t border-b border-white/10 py-12">
                    {/* GDPR */}
                    <div className="flex flex-col items-center justify-center text-center gap-4 group">
                        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
                            <span className="text-[10px] font-bold text-white leading-tight">GDPR<br />READY</span>
                        </div>
                        <div>
                            <div className="font-bold text-white mb-1">GDPR compliant</div>
                            <p className="text-xs text-gray-500 max-w-[150px] mx-auto hidden md:block">ClickUp complies with GDPR, protecting your privacy.</p>
                        </div>
                    </div>

                    {/* ISO */}
                    <div className="flex flex-col items-center justify-center text-center gap-4 group">
                        <div className="w-16 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                            <div className="border border-white/20 rounded-md px-2 py-1 bg-white/5">
                                <span className="font-bold text-white text-xs">ISO 27001</span>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold text-white mb-1">ISO compliant</div>
                            <p className="text-xs text-gray-500 max-w-[150px] mx-auto hidden md:block">ClickUp is ISO 27001 certified, setting a trusted standard.</p>
                        </div>
                    </div>

                    {/* HIPAA */}
                    <div className="flex flex-col items-center justify-center text-center gap-4 group">
                        <div className="w-16 h-16 flex items-center justify-center">
                            <Shield size={32} className="text-gray-300 group-hover:text-green-500 transition-colors" />
                        </div>
                        <div>
                            <div className="font-bold text-white mb-1">HIPAA compliant</div>
                            <p className="text-xs text-gray-500 max-w-[150px] mx-auto hidden md:block">ClickUp complies with HIPAA, safeguarding health info.</p>
                        </div>
                    </div>

                    {/* SOC 2 */}
                    <div className="flex flex-col items-center justify-center text-center gap-4 group">
                        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
                            <div className="text-center">
                                <div className="text-[8px] font-bold text-gray-400">AICPA</div>
                                <div className="text-xs font-black text-white">SOC 2</div>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold text-white mb-1">AICPA SOC 2 compliant</div>
                            <p className="text-xs text-gray-500 max-w-[150px] mx-auto hidden md:block">ClickUp maintains rigorous controls to protect data.</p>
                        </div>
                    </div>
                </div>

                {/* Security Features Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <FeatureItem
                        icon={<CheckCircle2 className="text-green-500" size={20} />}
                        title="No third-party data training"
                        description="We forbid third-party AI providers from training on your data."
                    />
                    <FeatureItem
                        icon={<EyeOff className="text-green-500" size={20} />}
                        title="Zero third-party data retention"
                        description="We don't allow third-party AI providers to store any of your data."
                    />
                    <FeatureItem
                        icon={<RefreshCw className="text-green-500" size={20} />}
                        title="Multi-model support"
                        description="We offer the latest AI models, with unified permissions, privacy, and security controls."
                    />
                </div>
            </div>
        </section>
    );
};

const FeatureItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="flex flex-col items-center gap-3">
        <div className="mb-2">{icon}</div>
        <h3 className="font-bold text-white text-lg">{title}</h3>
        <p className="text-sm text-gray-500 max-w-xs mx-auto">{description}</p>
    </div>
);
