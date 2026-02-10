"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export const VideoTestimonials = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-[#292D34] max-w-3xl leading-tight tracking-tight">
                        Loved by 10 million+ teams, backed by 100+ awards
                    </h2>
                    <div className="flex gap-4 mt-8 md:mt-0">
                        {/* Award Badges (Placeholders) */}
                        <AwardBadge label="Highest User Adoption" />
                        <AwardBadge label="Most Innovative Company" />
                        <AwardBadge label="Best Enterprise ROI" />
                    </div>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <VideoCard
                        image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                        quote="ClickUp is serving us so we can serve our pet guardians."
                        author="Samantha Dengate"
                        role="Sr. Project Manager"
                        company="DIGGS"
                    />
                    <VideoCard
                        image="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                        quote="It's a low-code platform that helps us automate processes."
                        author="Joerg Klueckmann"
                        role="VP of Marketing"
                        company="FINASTRA"
                    />
                    <VideoCard
                        image="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop"
                        quote="ClickUp is the best thing I've rolled out in the past two years."
                        author="Lauren Makielski"
                        role="Chief of Staff"
                        company="HAWKEMEDIA"
                    />
                </div>
            </div>
        </section>
    );
};

function AwardBadge({ label }: { label: string }) {
    return (
        <div className="w-20 h-24 border border-gray-200 rounded-lg flex flex-col items-center justify-center p-2 text-center shadow-sm">
            <div className="w-8 h-8 bg-orange-100 rounded-full mb-2" />
            <div className="text-[8px] font-bold text-gray-600 uppercase leading-tight">{label}</div>
        </div>
    )
}

function VideoCard({ image, quote, author, role, company }: any) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="relative aspect-[3/5] md:aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <img src={image} alt={author} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50">
                    <Play fill="white" className="text-white ml-1" />
                </div>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                <h3 className="text-xl md:text-2xl font-bold mb-6 leading-tight">"{quote}"</h3>

                <div className="flex justify-between items-end">
                    <div>
                        <div className="font-bold text-sm mb-0.5">{author}</div>
                        <div className="text-xs text-gray-300">{role}</div>
                    </div>
                    <div className="font-black text-xl tracking-widest opacity-80">{company}</div>
                </div>
            </div>
        </motion.div>
    )
}
