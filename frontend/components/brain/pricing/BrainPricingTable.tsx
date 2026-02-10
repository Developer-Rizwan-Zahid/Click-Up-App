"use client";

import { Check, Info, Sparkles, Zap, MessageSquare, Search, FileText } from "lucide-react";

export const BrainPricingTable = () => {
    return (
        <section className="bg-black pb-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">

                {/* Pricing Headers */}
                <div className="grid grid-cols-4 gap-4 mb-8 sticky top-20 z-20 bg-black/95 backdrop-blur-sm py-4 border-b border-white/5">
                    <div className="col-span-1"></div> {/* Spacer for Labels */}

                    {/* Free Column */}
                    <div className="text-center px-4">
                        <div className="text-sm font-bold text-white mb-1">Free Forever</div>
                        <div className="text-4xl font-black text-white mb-4">$0</div>
                        <button className="w-full py-2 rounded-lg border border-white/20 text-white font-bold hover:bg-white/5 transition-colors text-sm">
                            Signup -&gt;
                        </button>
                    </div>

                    {/* Brain AI Column */}
                    <div className="text-center px-4 relative">
                        <div className="text-sm font-bold text-white mb-1">Brain AI</div>
                        <div className="flex items-end justify-center gap-2 mb-4">
                            <span className="text-lg text-gray-500 line-through decoration-red-500 decoration-2">$19</span>
                            <span className="text-4xl font-black text-white">$9</span>
                            <span className="text-xs text-gray-500 mb-1">user/mo</span>
                        </div>
                        <button className="w-full py-2 rounded-lg border border-blue-500/50 text-white font-bold hover:bg-blue-900/20 transition-colors text-sm shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                            Signup -&gt;
                        </button>
                    </div>

                    {/* Everything AI Column */}
                    <div className="text-center px-4 relative bg-white/5 rounded-t-xl mx-[-10px] pt-4 -mt-4 pb-4">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="bg-[#1a1a1a] border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold text-white flex gap-2">
                                <span>Monthly</span>
                                <span className="text-gray-500">Yearly</span>
                            </div>
                        </div>
                        <div className="text-sm font-bold text-white mb-1">Everything AI</div>
                        <div className="flex items-end justify-center gap-2 mb-4">
                            <span className="text-lg text-gray-500 line-through decoration-red-500 decoration-2">$68</span>
                            <span className="text-4xl font-black text-white">$28</span>
                            <span className="text-xs text-gray-500 mb-1">user/mo</span>
                        </div>
                        <button className="w-full py-2 rounded-lg bg-[#EAEAEA] text-black font-bold hover:bg-white transition-colors text-sm shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                            Signup -&gt;
                        </button>
                        {/* Highlight border bottom removal trick */}
                    </div>
                </div>

                {/* Feature Rows */}
                <div className="space-y-4">
                    <FeatureRow label="Brain Assistant" icon={<Zap size={14} />} free="Trial" brain={true} everything={true} />
                    <FeatureRow label="BrainGPT (desktop app)" icon={<MessageSquare size={14} />} free="Trial" brain={true} everything={true} />
                    <FeatureRow label="Web Search & Research" icon={<Search size={14} />} free="Trial" brain={true} everything={true} />
                    <FeatureRow label="Foundational AI Models" sublabel="Resoning + Speed" free="Trial" brain={true} everything={true} />
                    <FeatureRow label="Premium Reasoning Models" sublabel="$200 Value" free="Trial" brain={true} everything={true} />
                    <FeatureRow label="AI Writing" icon={<FileText size={14} />} free="Trial" brain={true} everything={true} />

                    {/* Divider Feature */}
                    <div className="h-px bg-white/5 my-8" />

                    <FeatureRow label="AI Fields" free="Trial" brain="Standard" everything="Unlimited" />
                    <FeatureRow label="AI Cards" free="Trial" brain="Standard" everything="Unlimited" />
                    <FeatureRow label="AI Assign" free="Trial" brain="Standard" everything="Unlimited" />
                    <FeatureRow label="AI Prioritize" free="Trial" brain="Standard" everything="Unlimited" />
                    <FeatureRow label="Ambient Answers" free="Trial" brain="Standard" everything="Unlimited" />
                    <FeatureRow label="Super Agents" free="Trial" brain="Standard" everything="Flexible" />
                    <FeatureRow label="Autopilot Agents" free="Trial" brain="Standard" everything="Unlimited" />

                    <div className="h-px bg-white/5 my-8" />

                    <FeatureRow label="AI Time Blocking" free="Trial" brain="Standard" everything="Unlimited" />
                    <FeatureRow label="Image Generation" free="Trial" brain="Standard" everything="Flexible" />
                    <FeatureRow label="Talk to Text" free="Trial" brain="Trial" everything="Unlimited" />
                    <FeatureRow label="Enterprise Search" free="Trial" brain="Trial" everything="Unlimited" />
                    <FeatureRow label="AI Notetaker" free="Trial" brain="Trial" everything="Unlimited" />
                    <FeatureRow label="AI Live Training Workshop" free="$400 for 2 hour session (one-time)" brain={false} everything={true} />
                </div>

            </div>
        </section>
    );
};

const FeatureRow = ({ label, sublabel, icon, free, brain, everything }: any) => {
    const renderCell = (value: any, isEverything?: boolean) => {
        if (value === true) return <Check size={18} className="bg-white text-black rounded-full p-0.5 mx-auto" />;
        if (value === false) return <div className="w-1.5 h-1.5 bg-gray-700 rounded-full mx-auto" />;
        return <span className={`text-[13px] font-bold ${isEverything && value === "Unlimited" ? "text-[#D864FF]" : "text-white"}`}>{value}</span>;
    };

    return (
        <div className="grid grid-cols-4 gap-4 py-3 border-b border-white/5 items-center hover:bg-white/[0.02] transition-colors rounded-lg">
            <div className="col-span-1 px-4 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">
                    {icon && <span className="text-gray-500">{icon}</span>}
                    {label}
                </div>
                {sublabel && <div className="text-[10px] text-gray-500 ml-6">{sublabel}</div>}
            </div>
            <div className="text-center px-4 font-bold text-[13px] text-gray-500">{renderCell(free)}</div>
            <div className="text-center px-4">{renderCell(brain)}</div>
            <div className={`text-center px-4 py-2 ${everything ? "bg-white/[0.03] rounded-lg -my-2" : ""}`}>
                {renderCell(everything, true)}
            </div>
        </div>
    );
}
