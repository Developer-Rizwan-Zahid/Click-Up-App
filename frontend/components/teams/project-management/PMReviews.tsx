"use client";

import { motion } from "framer-motion";

export function PMReviews() {
    return (
        <section className="py-16 border-y border-gray-100 bg-white">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">
                    Trusted by fast-moving teams worldwide
                </p>

                <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale mb-16">
                    <span className="text-2xl font-black text-gray-800">NETFLIX</span>
                    <span className="text-2xl font-black text-gray-800">Spotify</span>
                    <span className="text-2xl font-serif font-black text-gray-800">T-Mobile</span>
                    <span className="text-2xl font-bold text-gray-800">Logitech</span>
                    <span className="text-2xl font-black text-gray-800">IBM</span>
                </div>

                <div className="max-w-4xl mx-auto bg-blue-50/50 rounded-3xl p-8 sm:p-12 relative">
                    <div className="text-4xl text-blue-300 absolute top-8 left-8">"</div>
                    <blockquote className="text-xl sm:text-2xl font-medium text-[#292D34] leading-relaxed relative z-10 mb-8">
                        "ClickUp has completely changed the way we work. It's the only tool that could handle our complex workflows while remaining easy enough for everyone to use."
                    </blockquote>
                    <cite className="not-italic flex flex-col items-center">
                        <span className="font-bold text-gray-900 block">Sarah Johnson</span>
                        <span className="text-gray-500 text-sm">Director of Operations at MajorTech</span>
                    </cite>
                </div>
            </div>
        </section>
    );
}
