import { Type, Video, MessageSquare, Share2, Sparkles, LayoutGrid } from "lucide-react";

const ClipsCommunication = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <span className="text-[#7B68EE] font-bold tracking-widest text-sm uppercase mb-4 block">
                        WHY CLIPS?
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#292D34] mb-6 tracking-tight">
                        Clips are the easiest way to communicate
                    </h2>
                    <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                        Clips aren't just screen recordings. They're a fundamentally faster way to work and communicate because they're embedded everywhere you already work.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Card 1: Auto-transcribe with AI */}
                    <div>
                        <div className="bg-[#3b82f6] rounded-2xl p-8 pb-0 h-[320px] flex flex-col relative overflow-hidden group">
                            <div className="bg-white rounded-t-lg shadow-xl p-4 mt-8 h-full relative top-2 mx-4 flex gap-4">
                                <div className="w-2/3 bg-gray-100 rounded flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-white/50 flex items-center justify-center">
                                        <div className="w-0 h-0 border-l-[12px] border-l-gray-400 border-y-[8px] border-y-transparent ml-1" />
                                    </div>
                                </div>
                                <div className="w-1/3 space-y-2">
                                    <div className="h-2 bg-gray-100 rounded w-full" />
                                    <div className="h-2 bg-gray-100 rounded w-5/6" />
                                    <div className="h-2 bg-gray-100 rounded w-full" />
                                    <div className="h-2 bg-blue-100 rounded w-full" />
                                    <div className="h-2 bg-gray-100 rounded w-4/6" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-[#292D34] mb-3">Auto-transcribe with AI</h3>
                            <p className="text-gray-500 leading-relaxed">
                                ClickUp AI automatically transcribes every Clip with timestamps and snippets that you can convert into tasks, summaries and more.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Create a Clip in any conversation */}
                    <div>
                        <div className="bg-[#A855F7] rounded-2xl p-8 pb-0 h-[320px] flex flex-col relative overflow-hidden group">
                            <div className="bg-white rounded-t-lg shadow-xl p-4 mt-8 h-full relative top-2 mx-4">
                                <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
                                    <span className="font-bold text-gray-700 text-sm">Whiteboard Walkthrough</span>
                                    <div className="flex gap-2">
                                        <div className="w-20 h-6 bg-black text-white rounded text-[10px] flex items-center justify-center font-bold">Copy link</div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-2 h-32">
                                    <div className="col-span-1 bg-green-100 rounded" />
                                    <div className="col-span-1 bg-yellow-100 rounded" />
                                    <div className="col-span-1 bg-pink-100 rounded" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-[#292D34] mb-3">Create a Clip in any conversation</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Just click the video icon from anywhere in ClickUp to move any conversation forward.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Comment directly on Clips */}
                    <div>
                        <div className="bg-[#FF4081] rounded-2xl p-8 pb-0 h-[320px] flex flex-col relative overflow-hidden group">
                            <div className="bg-white rounded-t-lg shadow-xl p-4 mt-8 h-full relative top-2 mx-4 flex items-center justify-center bg-gray-50">
                                <div className="absolute right-8 top-12 bg-white rounded-xl shadow-lg p-3 border border-gray-100 max-w-[200px] z-10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-5 h-5 rounded-full bg-pink-100" />
                                        <span className="text-xs font-bold">Sarah</span>
                                        <span className="text-[10px] bg-purple-100 text-purple-600 px-1 rounded">00:24</span>
                                    </div>
                                    <p className="text-xs text-gray-600">Do we have examples of use cases?</p>
                                </div>
                                <div className="w-3/4 h-3/4 bg-gray-200 rounded-lg flex items-center justify-center">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                                        <div className="w-0 h-0 border-l-[8px] border-l-black border-y-[6px] border-y-transparent ml-0.5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-[#292D34] mb-3">Comment directly on Clips</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Click anywhere in a Clip to add a time-stamped comment, and start a conversation.
                            </p>
                        </div>
                    </div>

                    {/* Card 4: Share Clips with anyone! */}
                    <div>
                        <div className="bg-[#FF5252] rounded-2xl p-8 pb-0 h-[320px] flex flex-col relative overflow-hidden group">
                            <div className="bg-white rounded-t-lg shadow-xl p-4 mt-8 h-full relative top-2 mx-4">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-32 h-4 bg-gray-100 rounded" />
                                    <div className="bg-black text-white text-[10px] px-2 py-1 rounded font-bold">Download Video</div>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-2 bg-gray-100 rounded w-full" />
                                    <div className="h-2 bg-gray-100 rounded w-full" />
                                    <div className="h-40 bg-gray-50 rounded border border-gray-100 flex items-center justify-center">
                                        <Share2 className="w-8 h-8 text-gray-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-[#292D34] mb-3">Share Clips with anyone!</h3>
                            <p className="text-gray-500 leading-relaxed">
                                You can do it all with Clips—embed in ClickUp, share a public link or download the actual video.
                            </p>
                        </div>
                    </div>

                    {/* Card 5: Clips enhanced by ClickUp Brain */}
                    <div>
                        <div className="bg-gradient-to-br from-[#FF5252] to-[#FF4081] rounded-2xl p-1 pb-0 h-[320px] flex flex-col relative overflow-hidden group">
                            <div className="bg-white rounded-t-xl h-full mt-1 mx-1 p-6 relative top-2">
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="text-lg font-bold">Welcome, Janeece!</span>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex gap-2">
                                        <Sparkles className="w-4 h-4 text-pink-500 mt-1" />
                                        <div className="text-sm font-bold text-gray-800">What features did we release in Q1?</div>
                                    </div>
                                    <div className="pl-6 text-xs text-gray-500 space-y-2">
                                        <p>Recent features we've released include:</p>
                                        <ul className="list-disc pl-4 space-y-1">
                                            <li>Formula Fields: You can now perform calculations...</li>
                                            <li>Mobile Search: Connect apps like Figma...</li>
                                        </ul>
                                    </div>
                                    <div className="pl-6 pt-2">
                                        <div className="text-[10px] text-gray-400 mb-1">This response is based on these Clips:</div>
                                        <div className="flex gap-2">
                                            <span className="bg-purple-50 text-purple-600 text-[10px] px-1.5 py-0.5 rounded border border-purple-100">Product FY24 Kickoff</span>
                                            <span className="bg-purple-50 text-purple-600 text-[10px] px-1.5 py-0.5 rounded border border-purple-100">Release 2.12 Demo</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-[#292D34] mb-3">Clips enhanced by ClickUp Brain</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Let AI automatically name, transcribe, summarize, and generate action items from your Clips and even search these outputs with Ask AI.
                            </p>
                        </div>
                    </div>

                    {/* Card 6: Manage it all from Clips Hub */}
                    <div>
                        <div className="bg-[#A855F7] rounded-2xl p-8 pb-0 h-[320px] flex flex-col relative overflow-hidden group">
                            <div className="bg-white rounded-t-lg shadow-xl p-4 mt-8 h-full relative top-2 mx-4 overflow-hidden">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-gray-50 rounded-lg p-2 border border-gray-100 aspect-video" />
                                    <div className="bg-gray-50 rounded-lg p-2 border border-gray-100 aspect-video" />
                                    <div className="bg-gray-50 rounded-lg p-2 border border-gray-100 aspect-video relative">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                                                <div className="w-0 h-0 border-l-[5px] border-l-white border-y-[3.5px] border-y-transparent ml-0.5" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-2 border border-gray-100 aspect-video" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-[#292D34] mb-3">Manage it all from Clips Hub</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Every Clip you record in a comment, Task, or Doc in ClickUp is automatically added to your Clips Hub for easy organization.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ClipsCommunication;
