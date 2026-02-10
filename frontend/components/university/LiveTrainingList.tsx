"use client";

import { Calendar, Clock, ArrowRight, User, Star } from "lucide-react";
import Link from "next/link";

const TRAININGS = [
    {
        id: 1,
        title: "ClickUp for Beginners",
        description: "New to ClickUp? Start here. Learn the hierarchy, basic navigation, and how to create your first task.",
        level: "Beginner",
        date: "Today",
        time: "1:00 PM EST",
        duration: "45 min",
        instructor: "Sarah Jenkins",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80"
    },
    {
        id: 2,
        title: "Advanced Task Management",
        description: "Master subtasks, checklists, dependencies, and recurring tasks to streamline your workflow.",
        level: "Intermediate",
        date: "Tomorrow",
        time: "10:00 AM EST",
        duration: "60 min",
        instructor: "Mike Chen",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80"
    },
    {
        id: 3,
        title: "Automations Masterclass",
        description: "Stop doing busy work. Learn how to build powerful automations to save your team hours every week.",
        level: "Advanced",
        date: "Wed, Jan 3",
        time: "2:00 PM EST",
        duration: "90 min",
        instructor: "Alex Rivera",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },
    {
        id: 4,
        title: "ClickUp for Agile Teams",
        description: "Sprints, Points, and Burndown charts. See how to run your agile development process in ClickUp.",
        level: "Intermediate",
        date: "Thu, Jan 4",
        time: "11:00 AM EST",
        duration: "60 min",
        instructor: "David Kim",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
    }
];

export default function LiveTrainingList() {
    return (
        <section id="schedule" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-[#292D34] mb-2">Upcoming Sessions</h2>
                        <p className="text-gray-500">Secure your spot in our most popular workshops.</p>
                    </div>

                    <div className="hidden md:flex gap-2">
                        <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 font-semibold text-sm hover:border-[#7B68EE] hover:text-[#7B68EE] transition-colors">
                            All Levels
                        </button>
                        <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 font-semibold text-sm hover:border-[#7B68EE] hover:text-[#7B68EE] transition-colors">
                            Beginner
                        </button>
                        <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 font-semibold text-sm hover:border-[#7B68EE] hover:text-[#7B68EE] transition-colors">
                            Advanced
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {TRAININGS.map((training) => (
                        <div key={training.id} className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-purple-100 transition-all duration-300 flex flex-col md:flex-row gap-6">
                            {/* Image Section */}
                            <div className="w-full md:w-1/3 h-48 md:h-auto rounded-xl overflow-hidden relative flex-shrink-0">
                                <img
                                    src={training.image}
                                    alt={training.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 left-3 px-2 py-1 bg-black/70 backdrop-blur-sm rounded-md text-white text-[10px] font-bold uppercase tracking-wide">
                                    {training.level}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="flex-1 flex flex-col justify-center">
                                <div className="flex items-center gap-4 text-xs font-bold text-gray-400 mb-3 uppercase tracking-wide">
                                    <div className="flex items-center gap-1.5 text-[#7B68EE]">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {training.date}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5" />
                                        {training.time}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-[#292D34] mb-3 group-hover:text-[#7B68EE] transition-colors">
                                    {training.title}
                                </h3>

                                <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                                    {training.description}
                                </p>

                                <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-4">
                                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                                        <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-[10px] text-gray-600 font-bold">
                                            {training.instructor.charAt(0)}
                                        </div>
                                        {training.instructor}
                                    </div>

                                    <button className="flex items-center gap-1 text-sm font-bold text-[#292D34] group-hover:translate-x-1 transition-transform">
                                        Register
                                        <ArrowRight className="w-4 h-4 text-[#7B68EE]" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-100 text-gray-600 font-bold hover:bg-gray-200 transition-colors">
                        Load More Sessions
                    </button>
                </div>
            </div>
        </section>
    );
}
