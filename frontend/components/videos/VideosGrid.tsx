"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface Video {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    duration: string;
    category: string;
}

interface VideosGridProps {
    videos: Video[];
    category: string;
}

export function VideosGrid({ videos, category }: VideosGridProps) {
    return (
        <div className="flex-1">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#292D34] mb-2">{category}</h2>
                <div className="h-1 w-12 bg-[#7b68ee] rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {videos.map((video, idx) => (
                    <motion.div
                        key={video.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                    >
                        {/* Thumbnail Container */}
                        <div className="relative aspect-video overflow-hidden bg-gray-100">
                            <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Duration Badge */}
                            <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                                {video.duration}
                            </div>
                            {/* Play Overlay */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                                    <Play fill="currentColor" className="text-[#7b68ee] ml-1" size={20} />
                                </div>
                            </div>
                        </div>

                        <div className="p-5">
                            <h3 className="font-bold text-[#292D34] line-clamp-2 mb-2 group-hover:text-[#7b68ee] transition-colors">
                                {video.title}
                            </h3>
                            <p className="text-sm text-gray-500 line-clamp-2">
                                {video.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
