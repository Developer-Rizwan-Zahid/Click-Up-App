import Link from "next/link";
import { Check } from "lucide-react";
import Image from "next/image";

export function TimeTrackingHero() {
    return (
        <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
                        Track it all without <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                            losing a second.
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        See where your time is going—and how much you're saving—by tracking everything in ClickUp.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/signup"
                            className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white text-lg font-bold rounded-xl transition-all shadow-[0_4px_14px_0_rgba(147,51,234,0.39)] hover:shadow-[0_6px_20px_rgba(147,51,234,0.23)] hover:-translate-y-1"
                        >
                            Get Started for Free
                        </Link>
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-lg font-bold rounded-xl transition-all hover:border-slate-300"
                        >
                            Contact Sales
                        </Link>
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-medium text-slate-500">
                        <div className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-500" />
                            <span>Free forever</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-500" />
                            <span>No credit card required</span>
                        </div>
                    </div>
                </div>

                {/* Visual / Image Placeholder */}
                <div className="relative mx-auto max-w-6xl mt-12 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden bg-white aspect-[16/9] flex items-center justify-center group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
                    <div className="text-center p-8">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 mb-6 group-hover:scale-110 transition-transform duration-500">
                            <svg className="w-10 h-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Time Tracking Interface</h3>
                        <p className="text-slate-500">Interactive dashboard screenshot would go here</p>
                    </div>

                    {/* Decorative floating elements */}
                    <div className="absolute top-1/4 left-10 p-4 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-float-slow">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <div className="grid gap-1">
                            <div className="w-24 h-2 bg-slate-100 rounded" />
                            <div className="w-16 h-2 bg-slate-100 rounded" />
                        </div>
                    </div>

                    <div className="absolute bottom-1/4 right-10 p-4 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-float-slower">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">AI</div>
                        <div className="text-sm font-medium text-slate-700">Tracking time...</div>
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>
    );
}
