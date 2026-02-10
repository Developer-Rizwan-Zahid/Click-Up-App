"use client";

import { useState } from "react";
import { MessageSquare, Sparkles, List, Play, Bot, Mic, Code2 } from "lucide-react";

type TabType = 'pm' | 'ai';

const ClipsDemo = () => {
    const [activeTab, setActiveTab] = useState<TabType>('pm');
    const [isPlaying, setIsPlaying] = useState(false);

    const content = {
        pm: {
            video: "M_5YuqINtlw",
            user: "Ricardo",
            time: "4:22 pm",
            duration: "06:42",
            summary: "Deck 3.0 is in the final testing phase, with the team actively refining the UI and completing security reviews, aiming for a full release by early March.",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200"
        },
        ai: {
            video: "brvHCYpVrKE",
            user: "Sarah",
            time: "10:15 am",
            duration: "03:15",
            summary: "The new graph layout algorithm calculation is reducing rendering time by 40%. Recommend merging the 'feature/graph-opt' branch to staging for load testing.",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
        }
    };

    const handleTabChange = (tab: TabType) => {
        setActiveTab(tab);
        setIsPlaying(false);
    };

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <span className="text-[#7B68EE] font-bold tracking-widest text-sm uppercase mb-4 block">
                        BUILT FOR EVERY TEAM
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#292D34] mb-6 tracking-tight">
                        See Clips in action
                    </h2>
                    <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-10">
                        From logging bugs, to sharing design ideas, to troubleshooting with customers and even personalized sales outreach—Clips can be used for just about anything.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <button
                            onClick={() => handleTabChange('pm')}
                            className={`px-6 py-3 rounded-full font-bold border flex items-center gap-2 transition-all ${activeTab === 'pm' ? 'bg-blue-50 text-blue-600 border-blue-200 scale-105' : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'}`}
                        >
                            <List className="w-4 h-4" />
                            Project management
                        </button>
                        <button
                            onClick={() => handleTabChange('ai')}
                            className={`px-6 py-3 rounded-full font-bold border flex items-center gap-2 transition-all ${activeTab === 'ai' ? 'bg-purple-50 text-purple-600 border-purple-200 scale-105' : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'}`}
                        >
                            <Sparkles className="w-4 h-4" />
                            AI-powered software teams
                        </button>
                    </div>
                </div>

                {/* Video/Mockup Container */}
                <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white relative group">
                    {!isPlaying ? (
                        // UI Mockup (Thumbnail)
                        <div className="flex h-[600px] relative">
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/5 hover:bg-black/10 transition-colors cursor-pointer" onClick={() => setIsPlaying(true)}>
                                <div className="w-24 h-24 bg-[#1A1A1A] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                                    <Play className="w-8 h-8 fill-white text-white ml-2" />
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="w-24 bg-[#F8F9FC] border-r border-gray-200 flex flex-col items-center py-8 gap-8 shrink-0 relative z-10">
                                <div className={`p-3 rounded-xl ${activeTab === 'pm' ? 'bg-[#7B68EE]/10 text-[#7B68EE]' : 'hover:bg-gray-100 text-gray-400'}`}>
                                    <List className="w-6 h-6" />
                                </div>
                                <div className={`p-3 rounded-xl ${activeTab === 'ai' ? 'bg-[#7B68EE]/10 text-[#7B68EE]' : 'hover:bg-gray-100 text-gray-400'}`}>
                                    <Code2 className="w-6 h-6" />
                                </div>
                                <div className="p-3 rounded-xl hover:bg-gray-100 text-gray-400">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                            </div>

                            {/* Main Chat Area */}
                            <div className="flex-1 bg-white flex flex-col relative z-10">
                                {/* Header */}
                                <div className="h-16 border-b border-gray-100 flex items-center px-8 gap-8">
                                    <div className="text-sm font-bold border-b-2 border-black h-full flex items-center">Chat</div>
                                    <div className="text-sm font-medium text-gray-400 h-full flex items-center">Posts</div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 p-8 md:p-12 space-y-12 bg-white">

                                    {/* User Message */}
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
                                            <img src={content[activeTab].avatar} alt={content[activeTab].user} />
                                        </div>
                                        <div className="flex-1 space-y-2">
                                            <div className="flex items-center gap-2">
                                                <span className="font-bold text-lg text-gray-900">{content[activeTab].user}</span>
                                                <span className="text-sm text-gray-400">{content[activeTab].time}</span>
                                            </div>

                                            {/* Audio Clip Graphic */}
                                            <div className="bg-white border border-gray-200 rounded-2xl p-4 flex items-center gap-4 max-w-lg shadow-sm">
                                                <div className={`w-10 h-10 rounded-full ${activeTab === 'pm' ? 'bg-[#5340D8]' : 'bg-[#E3406D]'} flex items-center justify-center text-white shrink-0`}>
                                                    <Play className="w-4 h-4 fill-current ml-0.5" />
                                                </div>
                                                <div className={`flex-1 h-8 flex items-center gap-0.5 ${activeTab === 'pm' ? 'text-[#5340D8]' : 'text-[#E3406D]'}`}>
                                                    {/* Waveform Bars */}
                                                    {[4, 8, 6, 3, 7, 9, 5, 3, 6, 8, 5, 2, 4, 7, 5, 3, 6, 8, 4, 2, 5, 7, 4, 6, 3, 5, 2].map((h, i) => (
                                                        <div key={i} className="w-1 rounded-full bg-current opacity-80" style={{ height: `${h * 4}px` }} />
                                                    ))}
                                                </div>
                                                <div className="text-gray-400 text-sm font-mono">{content[activeTab].duration}</div>
                                            </div>

                                            <div className="text-sm text-gray-400 pl-1">1 reply</div>
                                        </div>
                                    </div>

                                    {/* AI Summary Box */}
                                    <div className="ml-16 relative">
                                        <div className="absolute -top-3 -left-3 w-8 h-8 bg-white rounded-full border border-gray-100 flex items-center justify-center shadow-sm z-20">
                                            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 flex items-center justify-center text-white">
                                                <Bot className="w-3.5 h-3.5" />
                                            </div>
                                        </div>
                                        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-purple-100 p-6 shadow-sm">
                                            <h4 className="font-bold text-gray-900 mb-2">Summary:</h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {content[activeTab].summary}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ) : (
                        // YouTube Embed
                        <div className="w-full aspect-video bg-black">
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${content[activeTab].video}?autoplay=1&rel=0`}
                                title="ClickUp Clips Demo"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ClipsDemo;
