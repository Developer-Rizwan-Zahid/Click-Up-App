"use client";

import { motion } from "framer-motion";
import { Shield, Lock, RefreshCw, FileKey, Server, EyeOff, CheckCircle2 } from "lucide-react";

export const GptSecurity = () => {
    return (
        <section className="bg-black py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="flex items-center justify-center gap-2 text-green-500 font-bold mb-6 text-xs uppercase tracking-widest">
                        <Lock size={12} /> Privacy & Compliance
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        Enterprise-grade peace of mind
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Your data stays secure and private with ClickUp.
                        <br />
                        Third-party AI providers never store or learn from your information.
                    </p>
                </motion.div>

                {/* Compliance Badges */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap items-center justify-center gap-8 mb-24 grayscale hover:grayscale-0 transition-all duration-500"
                >
                    {/* GDPR */}
                    <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center bg-[#0E0E12] relative group">
                        <div className="absolute inset-2 border border-dashed border-white/20 rounded-full animate-spin-slow" />
                        <span className="font-bold text-white text-xs text-center z-10">GDPR<br /><span className="text-[8px] text-gray-500">READY</span></span>
                    </div>

                    {/* ISO */}
                    <div className="w-28 h-28 rounded-full border border-white/10 flex items-center justify-center bg-[#0E0E12] relative shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                        <span className="font-black text-2xl text-white">ISO</span>
                        <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    </div>

                    {/* Central Brain/Flower */}
                    <div className="w-32 h-32 relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-600 to-purple-600 blur-2xl opacity-50 rounded-full" />
                        <div className="relative z-10 w-full h-full bg-gradient-to-tr from-fuchsia-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
                            <div className="w-20 h-20 bg-white/20 rounded-full backdrop-blur-md flex items-center justify-center">
                                <div className="w-12 h-12 bg-white rounded-full shadow-inner" />
                            </div>
                        </div>
                    </div>

                    {/* HIPAA */}
                    <div className="w-28 h-28 rounded-full border border-white/10 flex items-center justify-center bg-[#0E0E12] relative shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                        <div className="text-center">
                            <span className="font-bold text-white text-sm">HIPAA</span>
                            <div className="text-[8px] text-gray-500 uppercase tracking-widest mt-1">Compliant</div>
                        </div>
                    </div>

                    {/* SOC 2 */}
                    <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center bg-[#0E0E12] relative">
                        <div className="text-center">
                            <span className="font-bold text-white text-xs">AICPA</span>
                            <div className="font-black text-white text-lg">SOC 2</div>
                        </div>
                    </div>
                </motion.div>

                {/* Security Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card
                        icon={<Shield className="text-green-500" size={24} />}
                        title="No third-party data training"
                        description="We forbid third-party AI providers from training on your data."
                    />
                    <Card
                        icon={<EyeOff className="text-blue-500" size={24} />}
                        title="Zero third-party data retention"
                        description="We don't allow third-party AI providers to store any of your data."
                    />
                    <Card
                        icon={<RefreshCw className="text-purple-500" size={24} />}
                        title="Multi-model support"
                        description="We offer the latest AI models, with unified permissions, privacy, and security controls."
                    />
                </div>
            </div>
        </section>
    );
};

function Card({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-[#0E0E12] border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:border-white/20 transition-colors group"
        >
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                {icon}
            </div>
            <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
        </motion.div>
    );
}
