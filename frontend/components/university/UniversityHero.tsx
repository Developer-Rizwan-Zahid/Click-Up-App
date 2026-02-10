import Link from 'next/link';
import { BookOpen, Cloud, Music, Lightbulb, ShoppingCart, Laptop, BarChart, PenTool } from 'lucide-react';

export default function UniversityHero() {
    return (
        <section className="relative py-24 bg-white overflow-hidden min-h-[600px] flex items-center justify-center">

            {/* --- Left Doodles --- */}
            <div className="absolute left-0 top-0 bottom-0 w-1/4 pointer-events-none hidden xl:block">
                {/* Pink Book */}
                <div className="absolute top-20 left-10 text-[#E348B4] opacity-80 rotate-[-12deg]">
                    <BookOpen size={64} strokeWidth={1.5} />
                </div>
                {/* Purple Cloud */}
                <div className="absolute top-48 left-20 text-[#7B68EE] opacity-60">
                    <Cloud size={48} strokeWidth={1.5} />
                </div>
                {/* Music Notes */}
                <div className="absolute top-80 left-10 text-[#E348B4] opacity-70">
                    <Music size={32} strokeWidth={1.5} />
                </div>
                {/* ABC Text placeholder - approximated with an icon or svg */}
                <div className="absolute bottom-40 left-16 text-[#7B68EE] font-handwriting text-4xl rotate-12 opacity-80">
                    ABC
                </div>
                {/* Cart */}
                <div className="absolute bottom-20 left-10 text-[#7B68EE] opacity-80">
                    <ShoppingCart size={40} strokeWidth={1.5} />
                </div>
            </div>

            {/* --- Right Doodles --- */}
            <div className="absolute right-0 top-0 bottom-0 w-1/4 pointer-events-none hidden xl:block">
                {/* Monitor */}
                <div className="absolute top-32 right-10 text-[#F9C80E] opacity-80 rotate-6">
                    <Laptop size={72} strokeWidth={1.5} />
                </div>
                {/* Lightbulb */}
                <div className="absolute top-10 right-32 text-[#F9C80E] opacity-80 -rotate-12">
                    <Lightbulb size={40} strokeWidth={1.5} />
                </div>
                {/* Chart */}
                <div className="absolute bottom-60 right-20 text-gray-400 opacity-60">
                    <BarChart size={56} strokeWidth={1.5} />
                </div>
                {/* Pen */}
                <div className="absolute bottom-20 right-10 text-[#2ECC71] opacity-70 rotate-[-45deg]">
                    <PenTool size={48} strokeWidth={1.5} />
                </div>
            </div>


            {/* Main Content */}
            <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-bold text-[#292D34] mb-8 tracking-tight">
                    Welcome to <br />
                    ClickUp University
                </h1>

                <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
                    ClickUp University is the place for you to level up your skills to increase your productivity and save you time.
                </p>

                <div className="flex justify-center">
                    <Link
                        href="/university/course-catalog"
                        className="px-10 py-3.5 rounded-full bg-[#7B68EE] hover:bg-[#6853E6] text-white font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        My Courses
                    </Link>
                </div>

                {/* Decorative Laptop Icon centered below button like screenshot (optional hint) */}
                <div className="mt-16 opacity-10 flex justify-center">
                    <Laptop size={120} strokeWidth={1} />
                </div>
            </div>
        </section>
    );
}
