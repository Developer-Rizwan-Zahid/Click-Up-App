import { ArrowRight } from "lucide-react";

const ClipsBottomCta = () => {
    return (
        <section className="py-24 bg-white font-sans">
            <div className="container mx-auto px-4 md:px-6">
                <div className="rounded-[40px] bg-[#0F0F1A] overflow-hidden relative min-h-[500px] flex items-center">
                    {/* Background Gradients */}
                    <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#C026D3]/30 via-[#7B68EE]/10 to-transparent opacity-80" />
                    <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] bg-[#E348B4]/20 rounded-full blur-3xl opacity-50" />

                    <div className="flex flex-col lg:flex-row items-center w-full relative z-10 p-12 lg:p-16 gap-12 lg:gap-0">
                        {/* Left Content */}
                        <div className="flex-1 max-w-xl">
                            <div className="flex items-center gap-2 mb-8">
                                <div className="relative flex items-center justify-center">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 10C4 10 4 17 12 17C20 17 20 10 20 10" stroke="#7B68EE" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7 8L12 3L17 8" stroke="#E348B4" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="text-2xl font-extrabold tracking-tight text-white">ClickUp</span>
                            </div>

                            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                                Why pay for Loom when Clips
                                <br />
                                are free?
                            </h2>
                            <p className="text-xl text-gray-300 font-medium mb-10">
                                Available on all plans
                            </p>

                            <button className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                                Make the switch
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Right Content - Floating Mockup */}
                        <div className="flex-1 w-full lg:absolute lg:right-[-10%] lg:top-[15%] lg:h-[80%] lg:w-[60%] shadow-2xl rounded-l-2xl overflow-hidden border-l border-t border-b border-white/10 bg-[#1A1A24]">
                            {/* App Shell Mockup */}
                            <div className="w-full h-full bg-white relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-white to-pink-50/50" />

                                {/* Header */}
                                <div className="h-14 border-b border-gray-100 flex items-center px-6 justify-between bg-white relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-4 h-4 rounded bg-gray-200" />
                                        <div className="h-4 w-24 bg-gray-100 rounded" />
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="p-8 relative z-10">
                                    <div className="flex gap-8 mb-8">
                                        <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px]">✓</div>
                                        <div className="flex-1 space-y-2">
                                            <div className="h-2 w-32 bg-gray-200 rounded" />
                                            <div className="h-2 w-48 bg-gray-100 rounded" />
                                        </div>
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 rounded-full bg-red-200 border border-white" />
                                            <div className="w-6 h-6 rounded-full bg-blue-200 border border-white" />
                                        </div>
                                    </div>
                                    <div className="flex gap-8 mb-8">
                                        <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px]">✓</div>
                                        <div className="flex-1 space-y-2">
                                            <div className="h-2 w-40 bg-gray-200 rounded" />
                                            <div className="h-2 w-24 bg-gray-100 rounded" />
                                        </div>
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 rounded-full bg-yellow-200 border border-white" />
                                        </div>
                                    </div>
                                    <div className="flex gap-8 mb-8">
                                        <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px]">●</div>
                                        <div className="flex-1 space-y-2">
                                            <div className="h-2 w-36 bg-gray-200 rounded" />
                                            <div className="h-2 w-56 bg-gray-100 rounded" />
                                        </div>
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 rounded-full bg-purple-200 border border-white" />
                                            <div className="w-6 h-6 rounded-full bg-pink-200 border border-white" />
                                        </div>
                                    </div>

                                    {/* Fade out bottom */}
                                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pink-100/50 to-transparent" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClipsBottomCta;
