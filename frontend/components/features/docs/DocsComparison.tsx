"use client";

import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const DocsComparison = () => {
    return (
        <section className="py-24 bg-white font-sans">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[#5B4BF0] font-bold tracking-widest text-sm uppercase mb-4 block">
                        THE CLICKUP WAY
                    </span>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-[#292D34] mb-6 tracking-tight">
                        Docs are broken. <span className="text-gray-400">We fixed them.</span>
                    </h2>
                    <p className="text-xl text-gray-500 font-medium">
                        Your docs need to connect to the rest of your work.
                    </p>
                </div>

                {/* Comparison Card */}
                <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row shadow-lg">
                    {/* Without ClickUp */}
                    <div className="flex-1 p-10 md:p-16 border-b md:border-b-0 md:border-r border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-500 mb-8">Without ClickUp</h3>
                        <ul className="space-y-6">
                            {[
                                "I have blank page syndrome.",
                                "I have no idea where that doc was saved.",
                                "We need to manually create tasks from that doc"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" strokeWidth={3} />
                                    <span className="text-gray-500 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* With ClickUp */}
                    <div className="flex-1 p-10 md:p-16 bg-white relative">
                        {/* Subtle gradient background if needed, keeping white for now as per image */}
                        <h3 className="text-2xl font-bold text-[#292D34] mb-8">With ClickUp</h3>
                        <ul className="space-y-4 mb-10">
                            {[
                                "All-in-one communication",
                                "Focused and organized workflows",
                                "Efficient task management",
                                "Seamless integration",
                                "Enhanced team collaboration"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#00D084] shrink-0 mt-0.5" strokeWidth={3} />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold px-6 py-6 rounded-xl flex items-center gap-2 transition-all">
                            Get started. It's FREE <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DocsComparison;
