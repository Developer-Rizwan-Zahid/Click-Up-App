import { BookOpen, Cloud, Music, Lightbulb, ShoppingCart, Laptop, BarChart, PenTool } from 'lucide-react';

export default function WebinarsHero() {
    return (
        <section className="relative py-20 bg-white overflow-hidden border-b border-gray-100">

            {/* Background Doodles (Simplified reuse) */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-10 left-10 text-[#7B68EE] rotate-[-12deg]"><BookOpen size={48} strokeWidth={1} /></div>
                <div className="absolute top-20 right-20 text-[#E01E5A] rotate-12"><Lightbulb size={40} strokeWidth={1} /></div>
                <div className="absolute bottom-10 left-1/4 text-[#2ECC71]"><Cloud size={56} strokeWidth={1} /></div>
                <div className="absolute bottom-20 right-1/3 text-[#F9C80E] rotate-45"><Laptop size={48} strokeWidth={1} /></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-black text-[#292D34] mb-4 tracking-tight">
                    On-Demand Webinars
                </h1>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                    Watch recorded sessions from our product experts, deep diving into features, workflows, and best practices.
                </p>
            </div>
        </section>
    );
}
