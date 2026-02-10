"use client";

import { motion } from "framer-motion";

export function DemoLogos() {
    const logos = [
        "Samsung", "Booking.com", "IBM", "Padres", "Stanley"
    ];

    return (
        <section className="py-12 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Trusted by 2,000,000+ teams</p>
                <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="text-2xl font-black text-gray-800">SAMSUNG</div>
                    <div className="text-2xl font-black text-blue-900">Booking.com</div>
                    <div className="text-2xl font-serif font-black text-gray-800">IBM</div>
                    <div className="text-2xl font-bold text-gray-800">Padres</div>
                    <div className="text-2xl font-bold text-yellow-500">STANLEY</div>
                </div>
            </div>
        </section>
    );
}
