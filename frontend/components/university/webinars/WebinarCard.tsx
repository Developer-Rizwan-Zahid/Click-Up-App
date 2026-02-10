import { Play, Clock, User } from 'lucide-react';
import Image from 'next/image';

interface WebinarCardProps {
    title: string;
    description: string;
    duration: string;
    color?: string;
    tag?: string;
}

export default function WebinarCard({ title, description, duration, color = "bg-purple-500", tag }: WebinarCardProps) {
    return (
        <div className="flex flex-col bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full group">
            {/* Thumbnail Area */}
            <div className={`aspect-video w-full ${color} relative flex items-center justify-center overflow-hidden`}>
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/20" />

                {/* Duration Badge */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded">
                    {duration}
                </div>

                {/* Illustration Placeholder */}
                <div className="relative z-10 p-8 transform group-hover:scale-105 transition-transform duration-500">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                        <Play fill="white" className="text-white ml-1 w-8 h-8" />
                    </div>
                </div>

                {tag && (
                    <div className="absolute bottom-3 right-3 bg-white/90 text-[#292D34] text-[10px] font-bold px-2 py-1 rounded shadow-sm">
                        {tag}
                    </div>
                )}
            </div>

            <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-[#292D34] mb-2 leading-snug group-hover:text-[#7B68EE] transition-colors">
                    {title}
                </h3>

                <p className="text-sm text-gray-500 mb-6 line-clamp-3">
                    {description}
                </p>

                <button className="mt-auto w-full py-2.5 rounded-lg bg-[#7B68EE] text-white font-bold text-sm hover:bg-[#6853E6] transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                    Watch Now
                </button>
            </div>
        </div>
    );
}
