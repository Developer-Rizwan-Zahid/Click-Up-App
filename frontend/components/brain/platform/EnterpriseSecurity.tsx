"use client";

import { motion } from "framer-motion";
import { Lock, ShieldCheck, Globe, Activity, FileKey, ServerOff, RefreshCw, CheckCircle2 } from "lucide-react";

export const EnterpriseSecurity = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header with Lock Visual */}
                <div className="flex flex-col items-center text-center mb-20 relative">
                    {/* Background Glow for Lock */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-green-900/20 blur-[80px] rounded-full pointer-events-none" />

                    <div className="relative mb-8">
                        {/* Abstract Lock Shape */}
                        <div className="w-32 h-32 opacity-20 mx-auto border-2 border-white/20 rounded-t-[40px] border-b-0 mb-[-1px]" />
                        <div className="relative z-10 bg-[#0A0A0A] border border-white/10 px-6 py-2 rounded-full flex items-center gap-2 shadow-2xl">
                            <Lock size={14} className="text-green-500" />
                            <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">Privacy & Compliance</span>
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Enterprise-grade peace of mind
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Your data stays secure and private with ClickUp.<br className="hidden md:block" />
                        Third-party AI providers never store or learn from your information.
                    </p>
                </div>

                {/* Compliance Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 max-w-5xl mx-auto">
                    <ComplianceItem
                        icon={Globe}
                        title="GDPR compliant"
                        desc="ClickUp complies with GDPR, protecting your privacy and ensuring that your personal data is always secure and well-managed."
                    />
                    <ComplianceItem
                        icon={CheckCircle2}
                        title="ISO compliant"
                        desc="ClickUp is ISO 42001 certified, setting a trusted standard for secure, transparent, and responsible AI management in the workplace."
                    />
                    <ComplianceItem
                        icon={Activity}
                        title="HIPAA compliant"
                        desc="ClickUp complies with HIPAA, safeguarding sensitive health information and keeping all data confidential, private, and fully secure."
                    />
                    <ComplianceItem
                        icon={ShieldCheck}
                        title="AICPA SOC 2 compliant"
                        desc="ClickUp complies with AICPA SOC 2, maintaining rigorous controls to protect your data and ensuring AI providers cannot access or use it."
                    />
                </div>

                {/* Privacy Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-16">
                    <PrivacyFeature
                        icon={ShieldCheck}
                        title="No third-party data training"
                        desc="We forbid third-party AI providers from training on your data."
                    />
                    <PrivacyFeature
                        icon={ServerOff}
                        title="Zero third-party data retention"
                        desc="We don't allow third-party AI providers to store any of your data."
                    />
                    <PrivacyFeature
                        icon={RefreshCw}
                        title="Multi-model support"
                        desc="We offer the latest AI models, with unified permissions, privacy, and security controls."
                    />
                </div>

            </div>
        </section>
    );
};

function ComplianceItem({ icon: Icon, title, desc }: any) {
    return (
        <div className="text-center group">
            <div className="w-12 h-12 mx-auto mb-4 relative flex items-center justify-center">
                {/* Icon Glow */}
                <div className="absolute inset-0 bg-green-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <Icon size={32} className="text-white relative z-10 opacity-70 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
            </div>
            <h3 className="text-white font-bold mb-2 text-sm md:text-base">{title}</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
                {desc}
            </p>
        </div>
    )
}

function PrivacyFeature({ icon: Icon, title, desc }: any) {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mb-4 text-green-500">
                <Icon size={20} />
            </div>
            <h4 className="text-white font-bold mb-2 text-sm">{title}</h4>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
                {desc}
            </p>
        </div>
    )
}
