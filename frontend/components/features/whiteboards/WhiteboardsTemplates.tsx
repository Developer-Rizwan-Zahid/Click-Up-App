import React from 'react';
import { ArrowRight, Box, BarChart3, ListTodo } from 'lucide-react';
import Link from 'next/link';

export default function WhiteboardsTemplates() {
    const templates = [
        {
            title: "Roadmap Whiteboard",
            description: "Create a visually appealing road map for your new product, project, or plan.",
            icon: <BarChart3 className="w-6 h-6" />,
            color: "purple"
        },
        {
            title: "Visualization Whiteboard",
            description: "Create a visually pleasing presentation of your Vision Board using this template.",
            icon: <Box className="w-6 h-6" />,
            color: "pink"
        },
        {
            title: "Project Update Whiteboard",
            description: "Stay organized and up-to-date on progress, milestones, and tasks.",
            icon: <ListTodo className="w-6 h-6" />,
            color: "blue"
        }
    ];

    return (
        <section className="py-24 bg-zinc-50/50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-20 px-4">
                    <span className="text-[#ff3366] font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">
                        TEMPLATES
                    </span>
                    <h2 className="text-[2.5rem] md:text-[3.5rem] leading-[1.1] font-bold text-zinc-900 mb-8 font-sans">
                        Build from scratch or use a pre-built template
                    </h2>
                    <p className="text-lg md:text-[20px] text-zinc-500 font-medium leading-[1.6]">
                        Get started fast with out-of-the-box solutions. Easily customize Whiteboards as your team grows!
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {templates.map((template, idx) => (
                        <div key={idx} className="group bg-white border border-zinc-100 rounded-3xl p-10 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 cursor-pointer overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-32 bg-zinc-50 group-hover:bg-zinc-100 transition-colors rounded-full blur-[80px] -mr-16 -mt-16 opacity-50" />

                            <div className={`relative z-10 w-16 h-16 rounded-2xl bg-${template.color}-500/10 text-${template.color}-500 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                                {template.icon}
                            </div>
                            <h3 className="relative z-10 text-2xl font-bold text-zinc-900 mb-4 group-hover:text-[#7b68ee] transition-colors">
                                {template.title}
                            </h3>
                            <p className="relative z-10 text-zinc-500 font-medium mb-10 leading-relaxed">
                                {template.description}
                            </p>
                            <div className="relative z-10 flex items-center text-[#7b68ee] font-bold text-sm tracking-wide group-hover:gap-4 transition-all w-fit">
                                Use Template <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="#" className="inline-flex items-center gap-3 bg-[#1e1e1e] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-black transition-all shadow-lg">
                        View all templates <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
