import { Check, Info, X } from "lucide-react";

const ClipsPricing = () => {
    return (
        <section className="py-24 bg-[#FAFAFA]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                        Why pay for Loom when
                        <span className="text-[#E3406D]"> Clips are free?</span>
                    </h2>
                    <p className="text-xl text-gray-500">
                        Available on all plans. No credit card required.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="grid grid-cols-3 divide-x divide-gray-100">
                        {/* Headers */}
                        <div className="p-6 bg-gray-50/50"></div>
                        <div className="p-6 bg-[#FEF6F8] text-center">
                            <div className="font-bold text-xl text-[#1A1A1A] mb-1">ClickUp Clips</div>
                            <div className="text-[#E3406D] font-bold text-sm">Free Forever</div>
                        </div>
                        <div className="p-6 text-center">
                            <div className="font-bold text-xl text-gray-400 mb-1">Loom</div>
                            <div className="text-gray-400 font-medium text-sm">$12.50 /mo</div>
                        </div>
                    </div>

                    {/* Rows */}
                    {[
                        { feature: "Unlimited Recording Time", clickup: true, loom: false },
                        { feature: "No Watermarks", clickup: true, loom: "Paid" },
                        { feature: "AI Transcription", clickup: true, loom: "Paid" },
                        { feature: "Task Conversion", clickup: true, loom: false },
                        { feature: "In-context Chat Embedding", clickup: true, loom: false },
                    ].map((row, idx) => (
                        <div key={idx} className="grid grid-cols-3 divide-x divide-gray-100 border-t border-gray-100 hover:bg-gray-50/50 transition-colors">
                            <div className="p-6 flex items-center gap-2 font-medium text-gray-700">
                                {row.feature}
                                <Info className="w-4 h-4 text-gray-300" />
                            </div>
                            <div className="p-6 flex items-center justify-center bg-[#FEF6F8]/30">
                                {row.clickup && (
                                    <div className="w-6 h-6 rounded-full bg-[#E3406D] flex items-center justify-center text-white">
                                        <Check className="w-4 h-4" />
                                    </div>
                                )}
                            </div>
                            <div className="p-6 flex items-center justify-center text-gray-400 font-medium">
                                {row.loom === false ? (
                                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                                        <X className="w-4 h-4" />
                                    </div>
                                ) : (
                                    <span>{row.loom}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClipsPricing;
