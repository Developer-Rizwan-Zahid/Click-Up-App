import { Search } from 'lucide-react';
import CourseCard from './CourseCard';

const courses = [
    {
        title: "ClickUp for Beginners",
        type: "Learning Path",
        description: "Start here! Master the fundamentals of ClickUp in this comprehensive guide for new users.",
        duration: "45 mins",
        color: "bg-gradient-to-br from-blue-400 to-cyan-300"
    },
    {
        title: "Project Management Mastery",
        type: "Video Course",
        description: "Learn how to manage complex projects, sprints, and roadmaps efficiently.",
        duration: "1h 20m",
        color: "bg-gradient-to-br from-purple-400 to-indigo-400"
    },
    {
        title: "Automations Deep Dive",
        type: "Feature Deep Dive",
        description: "Save time by automating repetitive tasks. Learn triggers, conditions, and actions.",
        duration: "30 mins",
        color: "bg-gradient-to-br from-pink-400 to-rose-400"
    },
    {
        title: "Leading Remote Teams",
        type: "Webinar",
        description: "Best practices for keeping your distributed team aligned and productive.",
        duration: "55 mins",
        color: "bg-gradient-to-br from-orange-400 to-amber-300"
    },
    {
        title: "ClickUp for Agile Teams",
        type: "Learning Path",
        description: "Implement Scrum or Kanban workflows with tailored views and features.",
        duration: "2h",
        color: "bg-gradient-to-br from-emerald-400 to-green-300"
    },
    {
        title: "Admin & Security Settings",
        type: "Admin Guide",
        description: "Configure your workspace for security, permissions, and guests.",
        duration: "40 mins",
        color: "bg-gradient-to-br from-gray-600 to-gray-400"
    }
];

export default function CatalogGrid() {
    return (
        <div className="flex-1">
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <h1 className="text-3xl font-black text-[#292D34]">All Courses</h1>

                <div className="relative w-full md:w-80">
                    <input
                        type="text"
                        placeholder="Search for courses..."
                        className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:border-[#7B68EE] focus:ring-2 focus:ring-[#7B68EE]/20 outline-none shadow-sm"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course, idx) => (
                    <CourseCard key={idx} {...course} />
                ))}
            </div>

            {/* Load More (Visual Only) */}
            <div className="mt-12 text-center">
                <button className="px-8 py-3 rounded-full border border-gray-200 text-gray-600 font-bold hover:border-[#7B68EE] hover:text-[#7B68EE] transition-all">
                    Load More Courses
                </button>
            </div>
        </div>
    );
}
