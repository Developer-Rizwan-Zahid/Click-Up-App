import { PlayCircle, Clock } from 'lucide-react';
import Image from 'next/image';

interface CourseCardProps {
    title: string;
    type: string;
    description: string;
    duration?: string;
    color: string;
}

export default function CourseCard({ title, type, description, duration, color }: CourseCardProps) {
    return (
        <div className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">
            {/* Thumbnail Area */}
            <div className={`h-40 ${color} relative p-6 flex flex-col justify-between`}>
                {/* Abstract Shapes or Icons could go here */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-[100px]" />

                <div className="relative z-10 flex justify-between items-start">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-bold text-gray-800 shadow-sm">
                        {type}
                    </span>
                </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-[#292D34] mb-3 leading-tight line-clamp-2">
                    {title}
                </h3>

                <p className="text-sm text-gray-500 mb-6 line-clamp-3">
                    {description}
                </p>

                <div className="mt-auto flex items-center justify-between">
                    {duration && (
                        <div className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
                            <Clock size={14} />
                            {duration}
                        </div>
                    )}

                    <button className="px-6 py-2 rounded-lg bg-[#7B68EE]/10 text-[#7B68EE] font-bold text-sm hover:bg-[#7B68EE] hover:text-white transition-all ml-auto">
                        View
                    </button>
                </div>
            </div>
        </div>
    );
}
